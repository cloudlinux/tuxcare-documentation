#!/usr/bin/env node
/**
 * Accessibility (WCAG 2.2 AA) check for the built site.
 *
 * Serves docs/.vuepress/dist with a tiny built-in static server, opens pages
 * in headless Chromium (Playwright) and runs axe-core on each one at a desktop
 * (1366px) and a mobile (390px) viewport. A few keyboard smoke checks guard
 * the theme's keyboard fixes (skip link, Products menu, search drawer, home
 * cards) against regressions.
 *
 * Result:
 *   - serious/critical axe violations  -> fail (exit 1)
 *   - moderate/minor axe violations    -> reported as warnings
 *   - failed keyboard smoke check      -> fail (exit 1)
 *   - violations matched by scripts/a11y-allowlist.json are reported but do
 *     not fail the run (every entry needs a reason).
 *
 * Usage (after `yarn docs:build` or `npx vuepress build docs`):
 *   yarn a11y                 # curated page set (every custom component/layout)
 *   yarn a11y --all           # every built page
 *   yarn a11y --page /els-for-os/   # one or more specific pages (repeatable)
 *
 * Options: --port <n> (default 8099), --concurrency <n> (default 4),
 *          --report <file> (default a11y-report.json), --no-keyboard.
 * Writes a Markdown summary to $GITHUB_STEP_SUMMARY when it is set.
 */
import { createServer } from "node:http";
import { createReadStream, existsSync, readFileSync, readdirSync, statSync, writeFileSync, appendFileSync } from "node:fs";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(REPO, "docs", ".vuepress", "dist");
const ALLOWLIST_FILE = join(REPO, "scripts", "a11y-allowlist.json");

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];
const FAILING_IMPACTS = new Set(["serious", "critical"]);
const VIEWPORTS = [
  { name: "desktop", width: 1366, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

// Curated default page set: each layout plus at least one page using every
// custom component registered in docs/.vuepress/client.ts. Keep it small;
// `--all` covers the rest. (ResolvedCveTable is not used by any page.)
const CURATED_PAGES = [
  "/",                                   // HomeLayout, DocsCard grid
  "/404.html",                           // NotFound layout
  // Product landings (docs/.vuepress/config-client/documents.ts)
  "/tuxcare/",
  "/radar/",
  "/enterprise-support-for-almalinux/",
  "/live-patching-services/",            // YouTube iframes, KernelCare tables
  "/kernelcare-for-iot/",
  "/eportal/",
  "/eportal-api/",
  "/els-for-os/",                        // ELSOSSelector
  "/els-for-libraries/",                 // ELSTechnology (DataTables)
  "/els-for-runtimes/",                  // ELSRTechnology
  "/els-for-applications/",              // ELSApplication
  "/securechain/",                       // SecureChainEcosystemSelector
  "/tuxcare-cln/",
  "/service-descriptions/",
  // Component pages
  "/els-for-runtimes/python/",           // CodeTabs, ContactSales, ELSPrerequisites, ELSSteps, WhatsNext
  "/els-for-runtimes/openjdk/",          // ELSBadge
  "/securechain/javascript/",            // TableTabs
  "/els-for-os/centos-8-els/",           // ELSVendorEol
  "/endless-lifecycle-support/",         // page outside the sidebar/product menu
];

// ---------------------------------------------------------------- arguments
const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const opt = (name, def) => {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : def;
};
const optAll = (name) => argv.flatMap((a, i) => (a === name && argv[i + 1] ? [argv[i + 1]] : []));

const PORT = Number(opt("--port", process.env.A11Y_PORT || 8099));
const CONCURRENCY = Math.max(1, Number(opt("--concurrency", 4)));
const REPORT_FILE = resolve(opt("--report", join(REPO, "a11y-report.json")));
const BASE = `http://127.0.0.1:${PORT}`;

if (!existsSync(join(DIST, "index.html"))) {
  console.error(`[a11y] ${DIST} not found. Build the site first: npx vuepress build docs`);
  process.exit(2);
}

// ------------------------------------------------------------- page list
function allBuiltPages() {
  const pages = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) {
        if (name !== "assets") walk(full);
      } else if (name.endsWith(".html") && readFileSync(full, "utf-8").includes('id="app"')) {
        // Only VuePress pages; skips static files such as Google site verification.
        const rel = "/" + relative(DIST, full).split(sep).join("/");
        pages.push(rel.endsWith("/index.html") || rel === "/index.html" ? rel.slice(0, -"index.html".length) : rel);
      }
    }
  };
  walk(DIST);
  return pages.sort();
}

const explicitPages = optAll("--page");
const pages = explicitPages.length ? explicitPages : flag("--all") ? allBuiltPages() : CURATED_PAGES;

// Fail early if a curated page no longer exists (renamed/removed doc).
const missing = pages.filter((p) => !resolveFile(p));
if (missing.length) {
  console.error(`[a11y] Pages not found in the build: ${missing.join(", ")}`);
  console.error("[a11y] Update CURATED_PAGES in scripts/a11y-check.mjs.");
  process.exit(2);
}

// --------------------------------------------------------------- allowlist
// [{ "rule": "color-contrast", "selector": ".foo > a", "pages": ["/x/"], "reason": "..." }]
// `selector` matches when it is a substring of the axe node target;
// `pages` is optional (path prefixes). Every entry must give a reason.
const allowlist = existsSync(ALLOWLIST_FILE) ? JSON.parse(readFileSync(ALLOWLIST_FILE, "utf-8")) : [];
for (const entry of allowlist) {
  if (!entry.rule || !entry.selector || !entry.reason?.trim()) {
    console.error(`[a11y] Invalid allowlist entry (rule, selector and reason are required): ${JSON.stringify(entry)}`);
    process.exit(2);
  }
  entry.used = 0;
}
function allowedBy(rule, target, page) {
  return allowlist.find(
    (e) =>
      e.rule === rule &&
      target.includes(e.selector) &&
      (!e.pages || e.pages.some((p) => page.startsWith(p))),
  );
}

// ----------------------------------------------------------- static server
const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript",
  ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp",
  ".ico": "image/x-icon", ".woff": "font/woff", ".woff2": "font/woff2", ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml", ".pdf": "application/pdf",
};
function resolveFile(urlPath) {
  let p;
  try { p = decodeURIComponent(urlPath.split("?")[0].split("#")[0]); } catch { return null; }
  const base = resolve(DIST, "." + p);
  if (!base.startsWith(DIST)) return null;
  for (const c of [base, join(base, "index.html"), base + ".html"]) {
    if (existsSync(c) && statSync(c).isFile()) return c;
  }
  return null;
}
const server = createServer((req, res) => {
  const file = resolveFile(req.url);
  const status = file ? 200 : 404;
  const target = file || join(DIST, "404.html");
  res.writeHead(status, { "Content-Type": MIME[extname(target)] || "application/octet-stream" });
  createReadStream(target).pipe(res);
});
await new Promise((ok, fail) => server.once("error", fail).listen(PORT, "127.0.0.1", ok));

// ------------------------------------------------------------------ browser
// Keep the run hermetic and fast: every host except the local server fails
// DNS, so third-party requests (YouTube, Algolia, GTM, Cookiebot, fonts) never
// leave the runner. Cheaper than page.route(), which intercepts every request.
// Third-party iframes are not ours to fix and are not scanned (iframes: false
// below); the <iframe> element itself is still checked (e.g. frame-title).
const browser = await chromium.launch({
  args: ["--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1"],
});

async function newPage(viewport) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  return { context, page };
}

async function open(page, path) {
  await page.goto(BASE + path, { waitUntil: "domcontentloaded", timeout: 60_000 });
  // Wait for Vue hydration, then for the client-side a11y fixes in client.ts
  // (they run in a setTimeout after mount). networkidle is not usable: the
  // theme prefetches every page chunk.
  await page.waitForFunction(() => document.querySelector("#app")?.__vue_app__, null, { timeout: 60_000 });
  await page.waitForLoadState("load", { timeout: 60_000 });
  await page.waitForTimeout(250);
}

const results = []; // { page, viewport, violations: [...] }
const errors = [];

async function scan(path, viewport, attempt = 1) {
  const { context, page } = await newPage(viewport);
  const t0 = Date.now();
  try {
    await open(page, path);
    const tLoad = Date.now() - t0;
    const axe = await new AxeBuilder({ page })
      .setLegacyMode(true) // single axe.run in the page; no extra blank page per scan
      .withTags(WCAG_TAGS)
      .options({ iframes: false, resultTypes: ["violations"] })
      .analyze();
    results.push({ page: path, viewport: viewport.name, violations: axe.violations });
    const n = axe.violations.filter((v) => FAILING_IMPACTS.has(v.impact)).length;
    console.log(`[a11y] ${viewport.name.padEnd(7)} ${path}  ${axe.violations.length} rule(s) violated${n ? `, ${n} serious/critical` : ""} (load ${tLoad}ms, total ${Date.now() - t0}ms)`);
  } catch (err) {
    const msg = err.message.split("\n")[0];
    console.error(`[a11y] ${viewport.name} ${path}: ERROR ${msg}${attempt === 1 ? " (retrying)" : ""}`);
    if (attempt === 1) {
      await context.close();
      return scan(path, viewport, 2); // one retry for a slow or busy runner
    }
    errors.push(`${viewport.name} ${path}: ${msg}`);
  } finally {
    await context.close().catch(() => {});
  }
}

// --------------------------------------------------------- keyboard checks
// Small regression guards for the theme's keyboard fixes. Each returns
// nothing on success and throws with a readable message on failure.
const DOC_PAGE = "/els-for-runtimes/python/";
const KEYBOARD_CHECKS = [
  {
    name: "First Tab focuses the skip link, which targets the main content",
    async run(page) {
      for (const path of ["/", DOC_PAGE]) {
        await open(page, path);
        await page.keyboard.press("Tab");
        const info = await page.evaluate(() => {
          const a = document.activeElement;
          const id = a?.getAttribute("href")?.replace(/^#/, "");
          return { cls: a?.className, href: a?.getAttribute("href"), target: id ? !!document.getElementById(id) : false };
        });
        if (!String(info.cls).includes("skip-link")) throw new Error(`${path}: first Tab focused "${info.cls}", not .skip-link`);
        if (!info.target) throw new Error(`${path}: skip link href ${info.href} has no target element`);
      }
    },
  },
  {
    name: "Products button: Enter toggles aria-expanded, Escape closes and returns focus",
    async run(page) {
      await open(page, DOC_PAGE);
      const btn = page.locator('button[aria-controls="header-products-menu"]');
      await btn.focus();
      await page.keyboard.press("Enter");
      if ((await btn.getAttribute("aria-expanded")) !== "true") throw new Error("aria-expanded is not true after Enter");
      if (!(await page.locator("#header-products-menu").isVisible())) throw new Error("#header-products-menu is not visible after Enter");
      await page.keyboard.press("Escape");
      if ((await btn.getAttribute("aria-expanded")) !== "false") throw new Error("aria-expanded is not false after Escape");
      if (!(await btn.evaluate((el) => el === document.activeElement))) throw new Error("focus did not return to the button after Escape");
    },
  },
  {
    name: "Closed search drawer is inert (nothing inside can take focus)",
    async run(page) {
      await open(page, DOC_PAGE);
      const res = await page.evaluate(() => {
        const drawer = document.querySelector(".drawer");
        if (!drawer) return { error: ".drawer not found" };
        if (drawer.classList.contains("is-open")) return { error: "drawer is open on page load" };
        if (!drawer.closest("[inert]")) return { error: "closed drawer has no [inert] ancestor" };
        const sel = 'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusable = [...drawer.querySelectorAll(sel)];
        const leaked = focusable.filter((el) => { el.focus(); return document.activeElement === el; });
        return { checked: focusable.length, leaked: leaked.map((el) => el.outerHTML.slice(0, 80)) };
      });
      if (res.error) throw new Error(res.error);
      if (res.leaked.length) throw new Error(`focusable inside closed drawer: ${res.leaked.join(" | ")}`);
    },
  },
  {
    name: "Home cards are real links (<a href>)",
    async run(page) {
      await open(page, "/");
      const res = await page.evaluate(() => {
        const cards = [...document.querySelectorAll(".docs-card-container")];
        return { cards: cards.length, linked: cards.filter((c) => c.querySelector("a[href]")).length };
      });
      if (!res.cards) throw new Error("no .docs-card-container on the home page");
      if (res.linked !== res.cards) throw new Error(`${res.cards - res.linked} of ${res.cards} home cards have no <a href>`);
    },
  },
];

const keyboardResults = [];
async function runKeyboardChecks() {
  const { context, page } = await newPage(VIEWPORTS[0]);
  try {
    for (const check of KEYBOARD_CHECKS) {
      try {
        await check.run(page);
        keyboardResults.push({ name: check.name, ok: true });
        console.log(`[a11y] keyboard  PASS  ${check.name}`);
      } catch (err) {
        keyboardResults.push({ name: check.name, ok: false, error: err.message.split("\n")[0] });
        console.error(`[a11y] keyboard  FAIL  ${check.name}: ${err.message.split("\n")[0]}`);
      }
    }
  } finally {
    await context.close();
  }
}

// --------------------------------------------------------------------- run
const started = Date.now();
const jobs = pages.flatMap((p) => VIEWPORTS.map((v) => () => scan(p, v)));
console.log(`[a11y] Scanning ${pages.length} page(s) x ${VIEWPORTS.length} viewports, tags: ${WCAG_TAGS.join(", ")}`);
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (jobs.length) await jobs.shift()();
  }),
);
if (!flag("--no-keyboard")) await runKeyboardChecks();
await browser.close();
server.close();

// --------------------------------------------------------------- aggregate
// One row per rule: impact, pages (with viewport) and node count, split into
// failing, warning and allowlisted buckets.
const rules = new Map();
for (const r of results) {
  for (const v of r.violations) {
    for (const node of v.nodes) {
      const target = node.target.flat().join(" ");
      const allowed = allowedBy(v.id, target, r.page);
      if (allowed) allowed.used++;
      const bucket = allowed ? "allowlisted" : FAILING_IMPACTS.has(v.impact) ? "fail" : "warn";
      const key = `${bucket}|${v.id}`;
      if (!rules.has(key)) {
        rules.set(key, { bucket, rule: v.id, impact: v.impact, help: v.help, helpUrl: v.helpUrl, pages: new Set(), nodes: 0, examples: [] });
      }
      const row = rules.get(key);
      row.pages.add(`${r.page} (${r.viewport})`);
      row.nodes++;
      if (row.examples.length < 5) row.examples.push({ page: r.page, viewport: r.viewport, target, html: node.html.slice(0, 200) });
    }
  }
}
const rows = [...rules.values()].map((r) => ({ ...r, pages: [...r.pages].sort() }));
const byBucket = (b) => rows.filter((r) => r.bucket === b);
const failing = byBucket("fail");
const warnings = byBucket("warn");
const allowlisted = byBucket("allowlisted");
const keyboardFailed = keyboardResults.filter((k) => !k.ok);
const unusedAllow = allowlist.filter((e) => !e.used);
const ok = !failing.length && !keyboardFailed.length && !errors.length;
const seconds = ((Date.now() - started) / 1000).toFixed(1);

writeFileSync(
  REPORT_FILE,
  JSON.stringify({ ok, tags: WCAG_TAGS, pages, viewports: VIEWPORTS, seconds, failing, warnings, allowlisted, keyboard: keyboardResults, errors, results }, null, 2),
);

// ------------------------------------------------------------------ output
const shortPages = (list) => (list.length > 6 ? `${list.slice(0, 6).join(", ")} … (+${list.length - 6})` : list.join(", "));
const table = (list) =>
  ["| Rule | Impact | Pages | Nodes |", "|---|---|---|---|"]
    .concat(list.map((r) => `| [${r.rule}](${r.helpUrl}) | ${r.impact} | ${shortPages(r.pages)} | ${r.nodes} |`))
    .join("\n");

for (const [title, list] of [["FAIL (serious/critical)", failing], ["WARN (moderate/minor)", warnings], ["ALLOWLISTED", allowlisted]]) {
  if (!list.length) continue;
  console.log(`\n[a11y] ${title}`);
  for (const r of list) {
    console.log(`  ${r.rule} [${r.impact}] ${r.nodes} node(s): ${r.help}`);
    for (const e of r.examples.slice(0, 3)) console.log(`      ${e.page} (${e.viewport})  ${e.target}`);
  }
}
for (const e of unusedAllow) console.log(`[a11y] warning: allowlist entry no longer matches anything: ${e.rule} ${e.selector}`);
console.log(
  `\n[a11y] ${ok ? "PASSED" : "FAILED"}: ${failing.length} failing rule(s), ${warnings.length} warning rule(s), ` +
    `${allowlisted.length} allowlisted, ${keyboardFailed.length} keyboard failure(s), ${errors.length} error(s) in ${seconds}s. Report: ${REPORT_FILE}`,
);

if (process.env.GITHUB_STEP_SUMMARY) {
  const md = [
    `## Accessibility check ${ok ? "passed" : "failed"}`,
    "",
    `${pages.length} page(s) x ${VIEWPORTS.map((v) => `${v.name} ${v.width}px`).join(" / ")}, axe tags \`${WCAG_TAGS.join(", ")}\`, ${seconds}s.`,
    "",
    "### Serious / critical (fail the check)",
    failing.length ? table(failing) : "None.",
    "",
    "### Moderate / minor (warnings)",
    warnings.length ? table(warnings) : "None.",
    "",
  ];
  if (allowlisted.length) md.push("### Allowlisted (scripts/a11y-allowlist.json)", table(allowlisted), "");
  md.push("### Keyboard smoke checks", ...keyboardResults.map((k) => `- ${k.ok ? "✅" : "❌"} ${k.name}${k.ok ? "" : ` — ${k.error}`}`), "");
  if (errors.length) md.push("### Errors", ...errors.map((e) => `- ${e}`), "");
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, md.join("\n") + "\n");
}

process.exit(ok ? 0 : 1);
