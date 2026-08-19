#!/usr/bin/env node
/**
 * Generate docs/.vuepress/public/llms-full.txt from the documentation source.
 *
 * Runs before `vuepress build` (see the `docs:build` script in package.json),
 * so the file is always regenerated from the current docs and copied to the
 * site root by VuePress (public/ -> dist/). The file is git-ignored; it exists
 * only in the build output.
 *
 * Each page is emitted under a `Source:` header with its published URL.
 * Cleaning applied:
 *   - strip YAML frontmatter
 *   - strip HTML comments
 *   - strip <script>/<style> blocks
 *   - strip CamelCase VuePress component tags (keep inner prose; salvage
 *     literal code snippets from CodeTabs/TableTabs `content:` attributes)
 *   - strip VuePress container markers (:::tip / :::warning / :::), keep body
 *   - preserve ALL-CAPS placeholder tags (<YOUR_TOKEN>, <EOF>, ...)
 *   - collapse runs of blank lines
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(__dirname, "..");
const DOCS = join(REPO, "docs");
const SITE = "https://docs.tuxcare.com";
const OUT = join(DOCS, ".vuepress", "public", "llms-full.txt");
const EXCLUDE_DIRS = new Set([
  ".vuepress",
  "_pages-backup",
  "node_modules",
  // Local mirror pages are intentionally undocumented publicly: they exist so
  // qualified customers can be sent a direct link, but must not be surfaced in
  // navigation, search, or the LLM corpus. Keep them out of llms-full.txt.
  "local-mirror-els",
  "local-mirror-for-els-nodejs",
  "local-mirror-for-els-php",
  "local-mirror-for-els-python",
  "local-mirror-for-els-ruby",
  // SecureChain packages are installed once from upstream and patched in
  // place, so the upgrade flow this page describes does not apply yet. The
  // page is unlinked from navigation until it does — keep it out of the
  // corpus too.
  "managing-securechain-repository",
]);

// CamelCase component name: starts uppercase, contains at least one lowercase.
const COMP = "[A-Z][A-Za-z0-9]*[a-z][A-Za-z0-9]*";
const frontmatterRe = /^---\n[\s\S]*?\n---\n/;
const commentRe = /<!--[\s\S]*?-->/g;
const scriptRe = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const styleRe = /<style\b[^>]*>[\s\S]*?<\/style>/gi;
const selfCloseRe = new RegExp(`<${COMP}\\b[^>]*?/>`, "g");
const openRe = new RegExp(`<${COMP}\\b[^>]*?>`, "g");
const closeRe = new RegExp(`</${COMP}\\s*>`, "g");
const templateRe = /<\/?template\b[^>]*>/g;
// A CodeTabs/TableTabs `content:` is either an inline `code` literal or a
// variable defined in the page's <script setup>; resolve both.
const scriptVarRe = /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*`([^`]*)`/g;
const tabRe = /title:\s*'([^']+)'\s*,\s*content:\s*(`[^`]*`|[A-Za-z_$][\w$]*)/g;
// VuePress container markers: an opening `:::tip Title`, a bare `:::` fence,
// and custom-container variants. Match the marker line only, keep the body.
const containerRe = /^[ \t]*:::+.*$/gm;

/** Emit each CodeTabs/TableTabs tab as a titled code block, resolving
 *  `content:` variable refs against the page's <script> definitions. */
function salvage(tagText, vars) {
  const out = [];
  for (const [, title, ref] of tagText.matchAll(tabRe)) {
    const code = ref.startsWith("`") ? ref.slice(1, -1) : vars.get(ref);
    if (code == null) continue;
    out.push(`${title}:`, "```\n" + code.trim() + "\n```");
  }
  return out.join("\n");
}

function clean(text) {
  // Capture <script> variable bodies before the script block is stripped.
  const vars = new Map([...text.matchAll(scriptVarRe)].map((m) => [m[1], m[2]]));
  text = text.replace(frontmatterRe, "");
  text = text.replace(commentRe, "");
  text = text.replace(scriptRe, "");
  text = text.replace(styleRe, "");
  text = text.replace(selfCloseRe, (m) => salvage(m, vars));
  text = text.replace(openRe, "");
  text = text.replace(closeRe, "");
  text = text.replace(templateRe, "");
  text = text.replace(containerRe, "");
  text = text.replace(/\n{3,}/g, "\n\n");
  return text.trim();
}

function urlFor(relPath) {
  const d = dirname(relPath);
  return SITE + "/" + (d === "." ? "" : d.replace(/\\/g, "/") + "/");
}

/** Recursively collect README.md files, skipping excluded/dot directories. */
function collect(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (EXCLUDE_DIRS.has(entry) || entry.startsWith(".")) continue;
      collect(full, acc);
    } else if (entry === "README.md") {
      acc.push(full);
    }
  }
  return acc;
}

const pages = collect(DOCS)
  .map((full) => ({ url: urlFor(relative(DOCS, full)), path: full }))
  .sort((a, b) => a.url.localeCompare(b.url));

const parts = [
  "# TuxCare Documentation — Full Text",
  "",
  "> Full text of the TuxCare product documentation (docs.tuxcare.com), " +
    "concatenated for LLM consumption. Each section below is one documentation " +
    "page, preceded by its source URL. Interactive/tabbed content has been " +
    "flattened; visit the source URL for the rendered page.",
  "",
];

let included = 0;
for (const { url, path } of pages) {
  const body = clean(readFileSync(path, "utf-8"));
  if (!body) continue;
  included += 1;
  parts.push("\n\n" + "=".repeat(80));
  parts.push(`Source: ${url}`);
  parts.push("=".repeat(80) + "\n");
  parts.push(body);
}

writeFileSync(OUT, parts.join("\n") + "\n");
console.log(`[generate-llms-full] pages: ${included}, bytes: ${readFileSync(OUT).length}`);
