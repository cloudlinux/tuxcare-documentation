# Vue

Endless Lifecycle Support (ELS) for Vue from TuxCare provides security fixes for Vue versions that have reached end of life. This allows you to continue running Vue applications without vulnerability concerns, even after official support has ended.

The versions **2.6.11**, **2.6.14**, and **2.7.16** are supported by TuxCare for the following Vue ecosystem packages:

* `vue`
* `@vue/server-renderer`
* `vue-template-compiler`

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_vue) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your Vue project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-vue-project/
   ├── node_modules/
   ├── package.json
   ├── .npmrc         ⚠️ ← Create it here
   └── package-lock.json
   ```

2. **Configure the npm registry**

   Use an editor of your choice (e.g., VS Code) to add the following registry address lines to the `.npmrc` file:

   ```text
   registry=https://registry.npmjs.org/
   @els-vue:registry=https://nexus.repo.tuxcare.com/repository/els_vue/
   //nexus.repo.tuxcare.com/repository/els_vue/:_auth=${TOKEN}
   ```

   :::warning
   Replace `${TOKEN}` with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

3. **Update dependencies**

   Update your `package.json` dependencies to use TuxCare packages.

   :::tip
   For exact available patched versions, check your Nexus access first. The snippets below are examples. The `>=` range with `-tuxcare.1` resolves to the latest TuxCare build for that upstream Vue version.
   :::

     <TableTabs label="Choose version: " >

      <template #2.7.16>

      ```text
      "dependencies": {
        "vue": "npm:@els-vue/vue@>=2.7.16-tuxcare.1",
        "@vue/server-renderer": "npm:@els-vue/vue-server-renderer@>=2.7.16-tuxcare.1",
        "vue-template-compiler": "npm:@els-vue/vue-template-compiler@>=2.7.16-tuxcare.1"
      },
      "overrides": {
        "vue@2.7.16": "npm:@els-vue/vue@>=2.7.16-tuxcare.1",
        "@vue/server-renderer@2.7.16": "npm:@els-vue/vue-server-renderer@>=2.7.16-tuxcare.1",
        "vue-template-compiler@2.7.16": "npm:@els-vue/vue-template-compiler@>=2.7.16-tuxcare.1"
      }
      ```

      </template>

      <template #2.6.14>

      ```text
      "dependencies": {
        "vue": "npm:@els-vue/vue@>=2.6.14-tuxcare.1",
        "@vue/server-renderer": "npm:@els-vue/vue-server-renderer@>=2.6.14-tuxcare.1",
        "vue-template-compiler": "npm:@els-vue/vue-template-compiler@>=2.6.14-tuxcare.1"
      },
      "overrides": {
        "vue@2.6.14": "npm:@els-vue/vue@>=2.6.14-tuxcare.1",
        "@vue/server-renderer@2.6.14": "npm:@els-vue/vue-server-renderer@>=2.6.14-tuxcare.1",
        "vue-template-compiler@2.6.14": "npm:@els-vue/vue-template-compiler@>=2.6.14-tuxcare.1"
      }
      ```

      </template>

      <template #2.6.11>

      ```text
      "dependencies": {
        "vue": "npm:@els-vue/vue@>=2.6.11-tuxcare.1",
        "@vue/server-renderer": "npm:@els-vue/vue-server-renderer@>=2.6.11-tuxcare.1",
        "vue-template-compiler": "npm:@els-vue/vue-template-compiler@>=2.6.11-tuxcare.1"
      },
      "overrides": {
        "vue@2.6.11": "npm:@els-vue/vue@>=2.6.11-tuxcare.1",
        "@vue/server-renderer@2.6.11": "npm:@els-vue/vue-server-renderer@>=2.6.11-tuxcare.1",
        "vue-template-compiler@2.6.11": "npm:@els-vue/vue-template-compiler@>=2.6.11-tuxcare.1"
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

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Vue repository.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Vue) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Vue) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Vue) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/vue/) — Vulnerability Exploitability eXchange feed
* ![](/images/box.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (SPDX and CycloneDX)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>

