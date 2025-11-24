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
```

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

