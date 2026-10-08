# Babel

Endless Lifecycle Support (ELS) for Babel from TuxCare provides security fixes for Babel packages that have reached their end of life. This allows you to continue building your JavaScript applications with Babel without vulnerability concerns, even after official support has ended.

## Supported Versions

TuxCare publishes Babel packages under the `@els-js` scope. For example, `@els-js/babel-traverse` replaces `@babel/traverse` (7.x) and `babel-traverse` (6.x).

| Package | Versions |
| --- | --- |
| babel-core | 6.26.0, 7.11.5, 7.12.13, 7.14.8, 7.16.7, 7.18.9, 7.21.0, 7.21.5, 7.22.15, 7.23.0, 7.23.9, 7.24.1, 7.24.5, 7.25.7, 7.26.0, 7.29.0 |
| babel-generator | 6.26.0, 7.11.5, 7.12.5, 7.14.8, 7.16.7, 7.18.9, 7.21.0, 7.21.5, 7.22.15, 7.23.0, 7.24.1, 7.24.5, 7.25.7, 7.26.0, 7.29.0 |
| babel-helpers | 7.11.5, 7.12.5, 7.12.13, 7.14.8, 7.15.4, 7.16.7, 7.18.9, 7.21.0, 7.21.5, 7.22.6, 7.22.15, 7.23.2, 7.23.9, 7.24.0, 7.24.1, 7.24.5, 7.25.6, 7.25.7, 7.26.0, 7.29.0 |
| babel-parser | 7.11.5, 7.12.5, 7.14.8, 7.16.7, 7.18.9, 7.21.0, 7.21.5, 7.22.6, 7.22.15, 7.23.0, 7.23.9, 7.24.1, 7.24.5, 7.25.7, 7.26.0 |
| babel-plugin-transform-modules-systemjs | 7.15.4, 7.16.7, 7.18.9, 7.23.0, 7.23.9, 7.24.1, 7.25.0, 7.25.7, 7.29.0 |
| babel-runtime | 6.26.0, 7.11.2, 7.11.5, 7.12.5, 7.12.13, 7.12.18, 7.14.8, 7.15.4, 7.16.7, 7.18.9, 7.21.0, 7.21.5, 7.22.6, 7.22.15, 7.23.1, 7.23.2, 7.23.9, 7.24.0, 7.24.1, 7.24.4, 7.24.5, 7.24.7, 7.25.7, 7.26.0, 7.29.0 |
| babel-runtime-corejs2 | 7.11.2, 7.11.5, 7.12.5, 7.12.13, 7.12.18, 7.14.8, 7.16.7, 7.18.9, 7.21.0, 7.21.5, 7.22.6, 7.22.15, 7.23.2, 7.23.9, 7.24.1, 7.24.5, 7.25.7, 7.26.0, 7.29.0 |
| babel-runtime-corejs3 | 7.11.2, 7.11.5, 7.12.5, 7.12.13, 7.12.18, 7.14.8, 7.15.3, 7.16.7, 7.18.9, 7.21.0, 7.21.5, 7.22.6, 7.22.15, 7.23.2, 7.23.9, 7.24.1, 7.24.5, 7.25.7, 7.26.0, 7.29.0 |
| babel-traverse | 6.26.0, 7.11.5, 7.12.13, 7.14.8, 7.15.4, 7.16.7, 7.18.9, 7.21.0, 7.21.5, 7.22.15, 7.23.2, 7.23.9, 7.24.1, 7.24.5, 7.25.7, 7.29.0 |
| babel-types | 6.26.0, 7.11.5, 7.12.13, 7.14.8, 7.16.7, 7.18.9, 7.21.0, 7.21.5, 7.22.15, 7.23.0, 7.23.9, 7.24.0, 7.24.5, 7.25.7, 7.26.0, 7.29.0 |

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

:::tip Have a SecureChain token?
Follow the [SecureChain installation instructions](https://sc.tuxcare.cloud/guide/developer) instead — the steps below are for username & password access.
:::

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your project that uses Babel and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-babel-project/
   ├── node_modules/
   ├── package.json
   ├── .npmrc         ⚠️ ← Create it here
   └── package-lock.json
   ```

2. **Configure the npm registry**

   Use an editor of your choice (e.g., VS Code) to add the following registry address lines to the `.npmrc` file:

   ```text
   registry=https://registry.npmjs.org/
   @els-js:registry=https://nexus.repo.tuxcare.com/repository/els_js/
   //nexus.repo.tuxcare.com/repository/els_js/:_auth=${TOKEN}
   ```

   :::warning
   Replace `${TOKEN}` with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

3. **Update dependencies**

   Update your `package.json` file to replace Babel dependencies with TuxCare-maintained packages. You can do this in two ways:

    * **Option 1: Manual update**

      Manually update your `package.json` file by replacing your Babel dependencies with the TuxCare packages. This method gives you full control over which packages to update.

      ```text
      "dependencies": {
        "@babel/traverse": "npm:@els-js/babel-traverse@>=7.24.5-tuxcare.1"
      },
      "overrides": {
        "@babel/traverse@7.24.5": "npm:@els-js/babel-traverse@>=7.24.5-tuxcare.1"
      }
      ```

    * **Option 2: TuxCare Patcher (Automated)**

      Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Babel package versions in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

      ```text
      npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
      tuxcare-patch-js
      ```

4. **Refresh the project dependencies**

   Remove `node_modules`, `package-lock.json`, and clear the npm cache:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   Install dependencies:

   ```text
   npm install
   ```

   The token for the TuxCare repository is automatically picked up from your `.npmrc` file.

5. **Verify the setup**

   Use npm to list the project's dependencies and confirm TuxCare packages are resolved correctly:

   ```text
   npm list
   ```

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Babel repository.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (security.tuxcare.com)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>

