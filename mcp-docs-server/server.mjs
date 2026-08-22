import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readdir, readFile, stat } from "fs/promises";
import { join, relative, resolve, isAbsolute, basename, dirname } from "path";

const DOCS_ROOT = join(dirname(new URL(import.meta.url).pathname), "..", "docs");

const server = new McpServer({
  name: "tuxcare-docs",
  version: "1.0.0",
});

// MCP tool annotations. A client that gets none has to treat every call as a
// possible mutation, which is why harmless reads end up behind an approval
// prompt. Both hints this helper sets are in its name: the tools neither write
// nor leave the local docs tree (openWorldHint defaults to true, so the closed
// world has to be stated). A read-only tool that did reach the network would
// need its own annotations, not this helper.
const readOnlyLocalTool = (name, description, inputSchema, handler) =>
  server.registerTool(
    name,
    { description, inputSchema, annotations: { readOnlyHint: true, openWorldHint: false } },
    handler
  );

// Every caller-supplied path segment goes through here. join() normalizes a
// leading "../" straight out of DOCS_ROOT, so without this the tools read any
// file on the host — which would make the closed-world hint above a false
// claim, and a false hint is worse than a missing one. Returns null for
// anything that lands outside the tree.
function resolveInDocs(...segments) {
  const full = resolve(DOCS_ROOT, ...segments);
  const rel = relative(DOCS_ROOT, full);
  return rel === "" || (!rel.startsWith("..") && !isAbsolute(rel)) ? full : null;
}

async function walkDir(dir, ext = ".md") {
  const results = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
      if (entry.isDirectory()) {
        results.push(...(await walkDir(fullPath, ext)));
      } else if (entry.name.endsWith(ext)) {
        results.push(fullPath);
      }
    }
  } catch {
    // skip inaccessible dirs
  }
  return results;
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function extractHeadings(content) {
  const headings = [];
  for (const match of content.matchAll(/^(#{1,4})\s+(.+)$/gm)) {
    headings.push({ level: match[1].length, text: match[2].trim() });
  }
  return headings;
}

// --- Tool: list_sections ---
readOnlyLocalTool(
  "list_sections",
  "List all top-level documentation sections with their page counts",
  {},
  async () => {
    const entries = await readdir(DOCS_ROOT, { withFileTypes: true });
    const sections = [];

    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name.startsWith(".")) continue;
      const sectionPath = join(DOCS_ROOT, entry.name);
      const mdFiles = await walkDir(sectionPath);
      const indexFile = join(sectionPath, "README.md");
      let title = entry.name;
      try {
        const content = await readFile(indexFile, "utf-8");
        title = extractTitle(content) || entry.name;
      } catch {
        // no index
      }
      sections.push({ name: entry.name, title, pageCount: mdFiles.length });
    }

    sections.sort((a, b) => a.name.localeCompare(b.name));
    const lines = sections.map(
      (s) => `${s.name}/ — ${s.title} (${s.pageCount} pages)`
    );
    return { content: [{ type: "text", text: lines.join("\n") }] };
  }
);

// --- Tool: list_pages ---
readOnlyLocalTool(
  "list_pages",
  "List all documentation pages within a section (e.g. 'els-for-libraries')",
  { section: z.string().describe("Section directory name, e.g. 'els-for-libraries', 'eportal'") },
  async ({ section }) => {
    const sectionPath = resolveInDocs(section);
    try {
      if (!sectionPath) throw new Error("outside the docs tree");
      await stat(sectionPath);
    } catch {
      return {
        content: [{ type: "text", text: `Section '${section}' not found. Use list_sections to see available sections.` }],
        isError: true,
      };
    }
    const mdFiles = await walkDir(sectionPath);
    const pages = [];
    for (const f of mdFiles) {
      const rel = relative(DOCS_ROOT, f);
      try {
        const content = await readFile(f, "utf-8");
        const title = extractTitle(content) || basename(dirname(f));
        pages.push(`${rel} — ${title}`);
      } catch {
        pages.push(rel);
      }
    }
    pages.sort();
    return { content: [{ type: "text", text: pages.join("\n") || "No pages found." }] };
  }
);

// --- Tool: read_doc ---
readOnlyLocalTool(
  "read_doc",
  "Read a documentation page by its path (relative to docs/)",
  {
    path: z.string().describe("Path relative to docs/, e.g. 'els-for-libraries/grafana/README.md' or 'eportal/README.md'"),
  },
  async ({ path: docPath }) => {
    const base = resolveInDocs(docPath);
    if (!base) {
      return {
        content: [{ type: "text", text: `File not found: ${docPath}. Use list_pages to find valid paths.` }],
        isError: true,
      };
    }

    let fullPath = base;
    try {
      const s = await stat(fullPath);
      if (s.isDirectory()) {
        fullPath = join(fullPath, "README.md");
      }
    } catch {
      // try adding README.md
      fullPath = join(base, "README.md");
    }

    try {
      const content = await readFile(fullPath, "utf-8");
      return { content: [{ type: "text", text: content }] };
    } catch {
      return {
        content: [{ type: "text", text: `File not found: ${docPath}. Use list_pages to find valid paths.` }],
        isError: true,
      };
    }
  }
);

// --- Tool: search_docs ---
readOnlyLocalTool(
  "search_docs",
  "Full-text search across all documentation. Returns matching excerpts with file paths.",
  {
    query: z.string().describe("Search query (case-insensitive substring match)"),
    section: z.string().optional().describe("Limit search to a specific section, e.g. 'els-for-libraries'"),
    max_results: z.number().optional().default(20).describe("Maximum number of results to return (default 20)"),
  },
  async ({ query, section, max_results }) => {
    const searchRoot = section ? resolveInDocs(section) : DOCS_ROOT;
    try {
      if (!searchRoot) throw new Error("outside the docs tree");
      await stat(searchRoot);
    } catch {
      return {
        content: [{ type: "text", text: `Directory not found: ${section || "docs"}` }],
        isError: true,
      };
    }

    const mdFiles = await walkDir(searchRoot);
    const queryLower = query.toLowerCase();
    const results = [];

    for (const f of mdFiles) {
      if (results.length >= max_results) break;
      try {
        const content = await readFile(f, "utf-8");
        const lines = content.split("\n");
        const matchingLines = [];

        for (let i = 0; i < lines.length; i++) {
          if (lines[i].toLowerCase().includes(queryLower)) {
            const start = Math.max(0, i - 1);
            const end = Math.min(lines.length - 1, i + 1);
            const context = lines.slice(start, end + 1).join("\n");
            matchingLines.push({ line: i + 1, context });
          }
        }

        if (matchingLines.length > 0) {
          const rel = relative(DOCS_ROOT, f);
          const title = extractTitle(content) || rel;
          results.push({
            file: rel,
            title,
            matches: matchingLines.slice(0, 3),
          });
        }
      } catch {
        // skip unreadable files
      }
    }

    if (results.length === 0) {
      return { content: [{ type: "text", text: `No results found for "${query}".` }] };
    }

    const output = results.map((r) => {
      const matchText = r.matches
        .map((m) => `  Line ${m.line}:\n    ${m.context.replace(/\n/g, "\n    ")}`)
        .join("\n");
      return `### ${r.title}\n**File:** ${r.file}\n${matchText}`;
    });

    return {
      content: [{ type: "text", text: `Found ${results.length} result(s) for "${query}":\n\n${output.join("\n\n")}` }],
    };
  }
);

// --- Tool: get_doc_structure ---
readOnlyLocalTool(
  "get_doc_structure",
  "Get the table of contents (headings) for a documentation page",
  {
    path: z.string().describe("Path relative to docs/, e.g. 'eportal/README.md'"),
  },
  async ({ path: docPath }) => {
    const base = resolveInDocs(docPath);
    if (!base) {
      return {
        content: [{ type: "text", text: `File not found: ${docPath}` }],
        isError: true,
      };
    }

    let fullPath = base;
    try {
      const s = await stat(fullPath);
      if (s.isDirectory()) fullPath = join(fullPath, "README.md");
    } catch {
      fullPath = join(base, "README.md");
    }

    try {
      const content = await readFile(fullPath, "utf-8");
      const headings = extractHeadings(content);
      if (headings.length === 0) {
        return { content: [{ type: "text", text: "No headings found in this document." }] };
      }
      const lines = headings.map(
        (h) => `${"  ".repeat(h.level - 1)}${"#".repeat(h.level)} ${h.text}`
      );
      return { content: [{ type: "text", text: lines.join("\n") }] };
    } catch {
      return {
        content: [{ type: "text", text: `File not found: ${docPath}` }],
        isError: true,
      };
    }
  }
);

// --- Tool: get_sidebar ---
readOnlyLocalTool(
  "get_sidebar",
  "Get the sidebar navigation structure for the documentation site",
  {},
  async () => {
    const sidebarPath = join(DOCS_ROOT, ".vuepress", "config-client", "sidebar.ts");
    try {
      const content = await readFile(sidebarPath, "utf-8");
      return { content: [{ type: "text", text: content }] };
    } catch {
      return {
        content: [{ type: "text", text: "Could not read sidebar configuration." }],
        isError: true,
      };
    }
  }
);

// --- Resource: expose docs as browsable resources ---
server.resource(
  "docs-index",
  "docs://index",
  { description: "Index of all documentation sections" },
  async (uri) => {
    const entries = await readdir(DOCS_ROOT, { withFileTypes: true });
    const sections = entries
      .filter((e) => e.isDirectory() && !e.name.startsWith("."))
      .map((e) => e.name)
      .sort();
    return {
      contents: [
        {
          uri: uri.href,
          text: `Documentation Sections:\n${sections.map((s) => `- ${s}/`).join("\n")}`,
          mimeType: "text/plain",
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
