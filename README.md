# TuxCare Documentation

VuePress-based documentation site for TuxCare products and services.

## Tech Stack

- VuePress 2.0.0-beta.61
- Vue 3 + TypeScript
- Vite bundler
- Custom Vue components

## Prerequisites

- Node.js 22.x
- Yarn (required)

**⚠️ Important**: This project uses Yarn. Please do not use npm to avoid conflicts with the GitHub Actions deployment workflow.

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn docs:dev

# Visit http://localhost:8080
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn docs:dev` | Start VuePress dev server with hot reload |
| `yarn docs:build` | Build static site for production |
| `yarn dev` | Start Vite dev server |
| `yarn build` | Build with TypeScript compilation |
| `yarn preview` | Preview production build locally |
| `yarn a11y` | Run the WCAG 2.2 AA accessibility check on the built site |

## Project Structure

```
docs/
├── .vuepress/           # VuePress config and components
├── els-for-os/          # Endless Lifecycle Support for OS
├── els-for-runtimes/    # ELS for Runtimes
├── els-for-libraries/   # ELS for languages/frameworks
├── els-for-applications/  # ELS for applications
├── enterprise-support-for-almalinux/
├── eportal/             # Enterprise portal docs
└── ...
styles/TuxCare/          # Vale prose-lint rules (see Prose Linting)
.vale.ini                # Vale configuration
```

## Accessibility Check

The site must meet WCAG 2.2 AA. The `Accessibility check` workflow (`.github/workflows/a11y.yml`) runs on every pull request that touches `docs/`, and you can run the same check locally:

```bash
# Build the site, then install Chromium for Playwright (first time only)
yarn vuepress build docs
npx playwright install chromium

# Scan the curated page set (every layout and custom component, desktop and mobile)
yarn a11y

# Scan every built page, or only specific pages
yarn a11y --all
yarn a11y --page /els-for-os/ --page /securechain/
```

The script (`scripts/a11y-check.mjs`) serves `docs/.vuepress/dist` on port 8099 (`--port` to change it), runs [axe-core](https://github.com/dequelabs/axe-core) with the WCAG 2.0/2.1/2.2 A and AA rules, and runs a few keyboard checks (skip link, Products menu, search drawer, home cards). Serious and critical violations fail the check; moderate and minor ones are printed as warnings. The full results are written to `a11y-report.json`.

If you add a page with a new custom component, add that page to `CURATED_PAGES` in the script. To accept a known issue, add an entry to `scripts/a11y-allowlist.json` with the rule, a selector, and a reason:

```json
[
  { "rule": "color-contrast", "selector": ".some-class", "pages": ["/some-page/"], "reason": "Why this is acceptable" }
]
```

Prefer fixing the issue. Use the allowlist only for issues you can't fix, such as third-party markup.

## Prose Linting (Vale)

The repository includes a [Vale](https://vale.sh) style (`.vale.ini` + `styles/TuxCare/`) that checks Markdown against the TuxCare style guide: terminology (TuxCare, Node.js, .NET, open-source, …), image alt text and format, typography, tone, and inclusive language. It is an additional check on top of normal review and runs locally only — there is no CI step yet.

Install Vale once ([installation docs](https://docs.vale.sh/topics/installation)):

```bash
brew install vale      # macOS
choco install vale     # Windows
snap install vale      # Linux
```

Run from the repository root (Vale picks up `.vale.ini` automatically):

```bash
vale docs/els-for-runtimes/php/README.md   # a single file
vale docs/                                 # all docs

# Only Markdown files changed on your branch
git diff --name-only master... -- '*.md' | xargs vale
```

Errors are the ones to fix before merging; warnings and suggestions are hints. The [VS Code Vale extension](https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode) shows the same findings inline. Some rules are adapted from [Vale at Red Hat](https://github.com/redhat-documentation/vale-at-red-hat) (MIT) — see `styles/TuxCare/ATTRIBUTION.md`.

## Troubleshooting

### OpenSSL Error (Legacy Node.js)

If you encounter an OpenSSL initialization error:

```
ERR_OSSL_EVP_UNSUPPORTED
```

Set the legacy OpenSSL provider before running dev server:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
yarn docs:dev
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch. The GitHub Actions workflow:

1. Installs dependencies with `yarn install --frozen-lockfile`
2. Builds the site with `yarn docs:build`
3. Deploys to the `gh-pages` branch

See `.github/workflows/deploy.yml` for the complete CI/CD configuration.

