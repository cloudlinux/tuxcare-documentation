# TuxCare Docs MCP Server

An MCP (Model Context Protocol) server that gives AI assistants in Cursor
structured access to the TuxCare documentation. Instead of the AI reading
files one by one, it gets purpose-built tools for searching, browsing, and
understanding the full documentation tree.


## Why use it

- **Faster context gathering** — the AI can search across 100+ doc pages in
  one call instead of opening files individually.
- **Scoped search** — search within a specific section (e.g. only
  `els-for-libraries`) to get focused results without noise.
- **Page structure awareness** — the AI can inspect headings and sidebar
  navigation to understand how docs are organized before diving in.
- **No manual file paths** — ask for "the Grafana page" and it resolves to
  `els-for-libraries/grafana/README.md` automatically.
- **Works for everyone** — no hardcoded paths; the server finds the `docs/`
  folder relative to its own location, so it works on any machine.


## Setup

Prerequisites: Node.js 18+

```bash
cd mcp-docs-server
npm install
```

The `.cursor/mcp.json` in the repo root is already configured. After running
`npm install`, reload Cursor (Ctrl+Shift+P → "Developer: Reload Window").

Check **Cursor Settings → MCP** — `tuxcare-docs` should appear with a green
status indicator.


## Available tools

### list_sections

Lists all top-level documentation sections with page counts.

**Parameters:** none

**Example response:**
```
els-for-applications/ — Endless Lifecycle Support for Open-Source Applications (6 pages)
els-for-libraries/ — Endless Lifecycle Support for Libraries (78 pages)
els-for-os/ — Endless Lifecycle Support for OS (16 pages)
eportal/ — ePortal (1 pages)
```

### list_pages

Lists all documentation pages within a given section.

**Parameters:**
- `section` (string, required) — section directory name

**Example:** `list_pages({ section: "els-for-runtimes" })`

**Example response:**
```
els-for-runtimes/README.md — Endless Lifecycle Support for Runtimes
els-for-runtimes/dotnet/README.md — ELS for .NET
els-for-runtimes/nodejs/README.md — ELS for Node.js
els-for-runtimes/openjdk/README.md — ELS for OpenJDK
els-for-runtimes/php/README.md — ELS for PHP
els-for-runtimes/python/README.md — ELS for Python
els-for-runtimes/ruby/README.md — ELS for Ruby
```

### read_doc

Reads the full content of a documentation page.

**Parameters:**
- `path` (string, required) — path relative to `docs/`

**Example:** `read_doc({ path: "els-for-libraries/grafana" })`

Accepts directory paths (auto-resolves to `README.md`) or full file paths.

### search_docs

Full-text search across documentation. Returns matching excerpts with
surrounding context and line numbers.

**Parameters:**
- `query` (string, required) — search term (case-insensitive)
- `section` (string, optional) — limit search to one section
- `max_results` (number, optional) — cap on results, default 20

**Example:** `search_docs({ query: "Maven repository", section: "els-for-libraries" })`

**Example response:**
```
Found 3 result(s) for "Maven repository":

### ELS for Apache Commons Lang
File: els-for-libraries/apache-commons-lang/README.md
  Line 42:
    To configure the TuxCare Maven repository, add the following
    to your project's pom.xml file:
```

### get_doc_structure

Extracts the table of contents (heading hierarchy) from a documentation page.

**Parameters:**
- `path` (string, required) — path relative to `docs/`

**Example:** `get_doc_structure({ path: "eportal" })`

**Example response:**
```
# ePortal
  ## Installation
    ### System requirements
    ### Installing ePortal
  ## Managing servers
  ## Settings
```

### get_sidebar

Returns the full sidebar navigation configuration (`sidebar.ts`) as raw text.

**Parameters:** none


## Usage examples in Cursor

Once the MCP is active, ask the AI things like:

| What you ask | Tool the AI uses |
|---|---|
| "What sections are in the docs?" | `list_sections` |
| "List all PHP library pages" | `search_docs` or `list_pages` |
| "Show me the Grafana ELS documentation" | `read_doc` |
| "Find all pages that mention CVE-2024" | `search_docs` |
| "What are the headings in the ePortal doc?" | `get_doc_structure` |
| "Which libraries have Maven setup instructions?" | `search_docs` with query "Maven" |
| "Show me the sidebar navigation structure" | `get_sidebar` |
| "Search for Alpine Linux in the OS section" | `search_docs` with section filter |

The AI picks the right tool automatically based on your question — you don't
need to name the tools yourself.
