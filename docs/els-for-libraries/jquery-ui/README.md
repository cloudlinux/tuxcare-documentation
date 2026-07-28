# jQuery UI

Endless Lifecycle Support (ELS) for jQuery UI from TuxCare provides security fixes for jQuery UI versions that have reached their end of life. This allows you to continue running jQuery UI applications without vulnerability concerns, even after official support has ended.

## Supported jQuery UI Versions

* jQuery UI 1.10.4

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your jQuery UI project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-jquery-ui-project/
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

   Update your `package.json` file to replace jQuery UI dependencies with TuxCare-maintained packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your jQuery UI dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     ```text
     "dependencies": {
       "jquery-ui": "npm:@els-js/jquery-ui@>=1.10.4-tuxcare.1"
     },
     "overrides": {
       "jquery-ui@1.10.4": "npm:@els-js/jquery-ui@>=1.10.4-tuxcare.1"
     }
     ```

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the jQuery UI version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "jquery-ui": "^1.10.4"
     }
     ```

     to:

     ```text
     "dependencies": {
       "jquery-ui": "npm:@els-js/jquery-ui@>=1.10.4-tuxcare.1"
     },
     "overrides": {
       "jquery-ui@1.10.4": "npm:@els-js/jquery-ui@>=1.10.4-tuxcare.1"
     }
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

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for jQuery UI repository.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?q=jquery-ui) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?q=jquery-ui) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?q=jquery-ui) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/) — Vulnerability Exploitability eXchange feed
* ![](/images/box.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (SPDX and CycloneDX)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>

