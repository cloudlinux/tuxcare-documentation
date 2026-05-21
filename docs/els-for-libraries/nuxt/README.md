# Nuxt

Endless Lifecycle Support (ELS) for Nuxt from TuxCare provides security fixes for Nuxt versions that have reached their end of life. This allows you to continue running Nuxt applications without vulnerability concerns, even after official support has ended.

## Supported Nuxt Versions

* Nuxt 0.10.7, 1.4.5, 2.18.1, 3.2.0, 3.12.3, 3.12.4, 4.0.3

## Installation

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

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Nuxt from TuxCare versions:

<TableTabs label="Choose Nuxt version: " >

<template #nuxt_2.18.1>

|    CVE ID     | CVE Type  | Severity | Affected Libraries | Vulnerable Versions |
|:-------------:|:---------:|:--------:|:------------------:|:-------------------:|
| CVE-2024-34343 | Direct | Medium   | nuxt               |       < 3.12.4      |
| CVE-2024-4068 | Transitive | High     | braces             |       < 3.0.3       |
| CVE-2024-47764 | Transitive | Medium   | cookie             |       < 0.7.0       |
| CVE-2025-57820 | Transitive | High     | devalue            |       < 5.3.2       |
| CVE-2024-29415 | Transitive | High     | ip                 |      <= 2.0.1       |
| CVE-2021-23337 | Transitive | High     | lodash.template    |      < 4.17.21      |
| CVE-2025-25975 | Transitive | High     | parse-git-config   |        3.0.0        |
| CVE-2023-44270 | Transitive | High     | postcss            |      < 8.4.31       |
| CVE-2025-54798 | Transitive | High     | tmp                |      <= 0.2.4       |
| CVE-2024-9506 | Transitive | High     | vue                |   >=2.0.0 < 3.0.0   |
| CVE-2024-6783 | Transitive | High     | vue-template-compiler |   >=2.0.0 < 3.0.0   |

</template>

<template #nuxt_0.10.7>

|    CVE ID     | CVE Type  | Severity | Affected Libraries | Vulnerable Versions |
|:-------------:|:---------:|:--------:|:------------------:|:-------------------:|
| CVE-2024-34343 | Direct | Medium   | nuxt               |       < 3.12.4      |
| CVE-2020-7608 | Transitive | Medium   | yargs-parser | < 5.0.1, >= 6.0.0 < 13.1.2, >= 14.0.0 < 15.0.1 |
| CVE-2024-37890 | Transitive | High     | ws | < 5.2.4, >= 6.0.0 < 6.2.3, >= 7.0.0 < 7.5.10, >= 8.0.0 < 8.17.1 |
| CVE-2024-29180 | Transitive | High     | webpack-dev-middleware | < 5.3.4, >= 6.0.0 < 6.1.2, >= 7.0.0 < 7.1.0 |
| CVE-2019-16769 | Transitive | Medium   | serialize-javascript | < 2.1.1 |
| CVE-2020-7660 | Transitive | High     | serialize-javascript | < 3.1.0 |
| GHSA-5c6j-r48x-rmvq | Transitive | High     | serialize-javascript | <= 7.0.2 |
| CVE-2021-23382 | Transitive | Medium   | postcss | < 7.0.36, >= 8.0.0 < 8.2.13 |
| CVE-2023-44270 | Transitive | Medium   | postcss | < 8.4.31 |
| CVE-2017-16138 | Transitive | High     | mime | < 1.4.1, >= 2.0.1 < 2.0.3 |
| GHSA-2pr6-76vf-7546 | Transitive | Medium   | js-yaml | < 3.13.0 |
| GHSA-8j8c-7jfh-h6hx | Transitive | High     | js-yaml | < 3.13.1 |
| CVE-2025-64718 | Transitive | Medium   | js-yaml | < 3.14.2, >= 4.0.0 < 4.1.1 |
| CVE-2021-29059 | Transitive | High     | is-svg | >= 2.1.0 < 4.3.0 |
| CVE-2021-28092 | Transitive | High     | is-svg | >= 2.1.0 <= 4.2.1 |
| CVE-2018-3750 | Transitive | Critical | deep-extend | <= 0.5.0 |
| CVE-2021-29060 | Transitive | Medium   | color-string | < 1.5.5 |
| CVE-2020-15366 | Transitive | Medium   | ajv 4.11.8 | < 6.12.3 |
| CVE-2025-69873 | Transitive | Low      | ajv 4.11.8 | < 8.18.0 |
| CVE-2020-15366 | Transitive | Medium   | ajv 6.14.0 | < 6.12.3 |
| CVE-2025-69873 | Transitive | Low      | ajv 6.14.0 | < 6.14.0 |
| CVE-2024-37890 | Transitive | High     | webpack-dev-middleware | < 5.2.4, >= 6.0.0 < 6.2.3, >= 7.0.0 < 7.5.10, >= 8.0.0 < 8.17.1 |
| CVE-2021-27290 | Transitive | High     | ssri | >= 5.2.2 < 6.0.2, >= 7.0.0 < 8.0.1 |

</template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?q=nuxt) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?q=nuxt) — Patched versions and changelogs
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/nuxt/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [SBOM](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:nuxt) — Software Bill of Materials (Nexus, credentials required)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>

