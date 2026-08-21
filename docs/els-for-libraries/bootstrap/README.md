# Bootstrap

Endless Lifecycle Support (ELS) for Bootstrap from TuxCare provides security fixes for Bootstrap versions that have reached their end of life. This allows you to continue running Bootstrap applications without vulnerability concerns, even after official support has ended.

## Supported Bootstrap Versions

* Bootstrap 3.0.0, 3.2.0, 3.3.1, 3.3.2, 3.3.5, 3.3.6, 3.3.7, 3.4.1, 4.1.1, 4.1.3, 4.6.2

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your Bootstrap project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-bootstrap-project/
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

   Update your `package.json` file to replace Bootstrap dependencies with TuxCare-maintained packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your Bootstrap dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <TableTabs label="Choose Bootstrap version: " >

      <template #bootstrap_3.2.0>

      ```text
      "dependencies": {
        "bootstrap": "npm:@els-js/bootstrap@>=3.2.0-tuxcare.1"
      },
      "overrides": {
        "bootstrap@3.2.0": "npm:@els-js/bootstrap@>=3.2.0-tuxcare.1"
      }
      ```

      </template>

      <template #bootstrap_3.4.1>

      ```text
      "dependencies": {
        "bootstrap": "npm:@els-js/bootstrap@>=3.4.1-tuxcare.1"
      },
      "overrides": {
        "bootstrap@3.4.1": "npm:@els-js/bootstrap@>=3.4.1-tuxcare.1"
      }
      ```

      </template>

      <template #bootstrap_4.1.1>

      ```text
      "dependencies": {
        "bootstrap": "npm:@els-js/bootstrap@>=4.1.1-tuxcare.1"
      },
      "overrides": {
        "bootstrap@4.1.1": "npm:@els-js/bootstrap@>=4.1.1-tuxcare.1"
      }
      ```

      </template>

      <template #bootstrap_4.6.2>

      ```text
      "dependencies": {
        "bootstrap": "npm:@els-js/bootstrap@>=4.6.2-tuxcare.1"
      },
      "overrides": {
        "bootstrap@4.6.2": "npm:@els-js/bootstrap@>=4.6.2-tuxcare.1"
      }
      ```

      </template>

     </TableTabs>

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Bootstrap version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "bootstrap": "^4.6.2"
     }
     ```

     to:

     ```text
     "dependencies": {
       "bootstrap": "npm:@els-js/bootstrap@>=4.6.2-tuxcare.1"
     },
     "overrides": {
       "bootstrap@4.6.2": "npm:@els-js/bootstrap@>=4.6.2-tuxcare.1"
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

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Bootstrap repository.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Bootstrap) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Bootstrap) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Bootstrap) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/bootstrap/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (Nexus, credentials required)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>

