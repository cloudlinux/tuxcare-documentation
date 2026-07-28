# Next.js

Endless Lifecycle Support (ELS) for Next.js from TuxCare provides security fixes for Next.js versions that have reached their end of life. This allows you to continue running Next.js applications without vulnerability concerns, even after official support has ended.

## Supported Next.js Versions

* Next.js 12.3.7, 13.5.11, 14.2.35, 16.0.6

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your Next.js project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-nextjs-project/
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

   Update your `package.json` file to replace Next.js dependencies with TuxCare-maintained packages. Choose your Next.js version below and add the `dependencies` and `overrides` entries shown.

     <TableTabs label="Choose Next.js version: " >

      <template #next_12.3.7>

      ```text
      "dependencies": {
        "next": "npm:@els-js/next@>=12.3.7-tuxcare.1"
      },
      "overrides": {
        "next@12.3.7": "npm:@els-js/next@>=12.3.7-tuxcare.1"
      }
      ```

      </template>

      <template #next_13.5.11>

      ```text
      "dependencies": {
        "next": "npm:@els-js/next@>=13.5.11-tuxcare.1"
      },
      "overrides": {
        "next@13.5.11": "npm:@els-js/next@>=13.5.11-tuxcare.1"
      }
      ```

      </template>

      <template #next_14.2.35>

      ```text
      "dependencies": {
        "next": "npm:@els-js/next@>=14.2.35-tuxcare.1"
      },
      "overrides": {
        "next@14.2.35": "npm:@els-js/next@>=14.2.35-tuxcare.1"
      }
      ```

      </template>

      <template #next_16.0.6>

      ```text
      "dependencies": {
        "next": "npm:@els-js/next@>=16.0.6-tuxcare.1"
      },
      "overrides": {
        "next@16.0.6": "npm:@els-js/next@>=16.0.6-tuxcare.1"
      }
      ```

      </template>

     </TableTabs>

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

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Next.js repository.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Next.js) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Next.js) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Next.js) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/next/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (Nexus, credentials required)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>

