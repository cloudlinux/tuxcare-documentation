# Nuxt

Endless Lifecycle Support (ELS) for Nuxt from TuxCare provides security fixes for Nuxt versions that have reached their end of life. This allows you to continue running Nuxt applications without vulnerability concerns, even after official support has ended.

## Supported Nuxt Versions

* Nuxt 0.10.7, 1.4.5, 2.18.1, 3.2.0, 3.12.3, 3.12.4, 4.0.3

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your Nuxt project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-nuxt-project/
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

   Update your `package.json` file to add the following overrides for the TuxCare packages:

     <TableTabs label="Choose Nuxt version: " >

      <template #nuxt_3.12.4>

      ```text
      "dependencies": {
        "nuxt": "npm:@els-js/nuxt@>=3.12.4-tuxcare.1"
      },
      "overrides": {
        "nuxt@3.12.4": "npm:@els-js/nuxt@>=3.12.4-tuxcare.1"
      }
      ```

      </template>

      <template #nuxt_2.18.1>

      ```text
      "overrides": {
        "braces@2.3.2": "npm:@els-js/braces@>=2.3.2-tuxcare.1",
        "braces@3.0.3": "npm:@els-js/braces@>=3.0.3-tuxcare.1",
        "cookie@0.3.1": "npm:@els-js/cookie@>=0.3.1-tuxcare.1",
        "devalue@2.0.1": "npm:@els-js/devalue@>=2.0.1-tuxcare.1",
        "ip@2.0.1": "npm:@els-js/ip@>=2.0.1-tuxcare.1",
        "lodash.template@4.5.0": "npm:@els-js/lodash.template@>=4.5.0-tuxcare.1",
        "parse-git-config@3.0.0": "npm:@els-js/parse-git-config@>=3.0.0-tuxcare.1",
        "postcss@7.0.39": "npm:@els-js/postcss@>=7.0.39-tuxcare.1",
        "tmp@0.0.33": "npm:@els-js/tmp@>=0.0.33-tuxcare.1",
        "vue@2.7.16": "npm:@els-js/vue@>=2.7.16-tuxcare.1",
        "vue-template-compiler@2.7.16": "npm:@els-js/vue-template-compiler@>=2.7.16-tuxcare.1"
      }
      ```

      </template>

      <template #nuxt_1.4.5>

      ```text
      "dependencies": {
        "nuxt": "npm:@els-js/nuxt@>=1.4.5-tuxcare.1"
      },
      "overrides": {
        "nuxt@1.4.5": "npm:@els-js/nuxt@>=1.4.5-tuxcare.1"
      }
      ```

      </template>

      <template #nuxt_0.10.7>

      ```text
      "overrides": {
        "ajv@4.11.8": "npm:@els-js/ajv@>=4.11.8-tuxcare.1",
        "ajv@6.14.0": "npm:@els-js/ajv@>=6.14.0-tuxcare.1",
        "color-string@0.3.0": "npm:@els-js/color-string@>=0.3.0-tuxcare.1",
        "deep-extend@0.4.2": "npm:@els-js/deep-extend@>=0.4.2-tuxcare.1",
        "is-svg@2.1.0": "npm:@els-js/is-svg@>=2.1.0-tuxcare.1",
        "js-yaml@3.7.0": "npm:@els-js/js-yaml@>=3.7.0-tuxcare.1",
        "mime@1.3.0": "npm:@els-js/mime@>=1.3.0-tuxcare.1",
        "postcss@5.2.18": "npm:@els-js/postcss@>=5.2.18-tuxcare.1",
        "serialize-javascript@1.9.1": "npm:@els-js/serialize-javascript@>=1.9.1-tuxcare.1",
        "ssri@5.3.0": "npm:@els-js/ssri@>=5.3.0-tuxcare.1",
        "webpack-dev-middleware@1.12.2": "npm:@els-js/webpack-dev-middleware@>=1.12.2-tuxcare.1",
        "webpack-dev-middleware@2.0.6": "npm:@els-js/webpack-dev-middleware@>=2.0.6-tuxcare.1",
        "ws@4.1.0": "npm:@els-js/ws@>=4.1.0-tuxcare.1",
        "yargs-parser@4.2.1": "npm:@els-js/yargs-parser@>=4.2.1-tuxcare.1"
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

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Nuxt repository.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?q=nuxt) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?q=nuxt) — Patched versions and changelogs
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/nuxt/) — Vulnerability Exploitability eXchange feed
* ![](/images/box.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (SPDX and CycloneDX)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>

