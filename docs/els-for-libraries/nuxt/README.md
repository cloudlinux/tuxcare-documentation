# Nuxt

Endless Lifecycle Support (ELS) for Nuxt from TuxCare provides security fixes for Nuxt versions that have reached their end of life. This allows you to continue running Nuxt applications without vulnerability concerns, even after official support has ended.

## Supported Nuxt Versions

* Nuxt (overrides only)

## Connection to ELS for Nuxt Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Nuxt library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Nuxt library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Nuxt

TuxCare provides ELS for Nuxt as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Nuxt project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-nuxt-project/
   ├── node_modules/
   ├── package.json
   ├── .npmrc         ⚠️ ← Create it here
   └── package-lock.json
   ```

3. Use an editor of your choice (e.g., VS Code) to add the following registry address line:

   <CodeWithCopy>

   ```text
   registry=https://registry.npmjs.org/
   @els-js:registry=https://nexus.repo.tuxcare.com/repository/els_js/
   //nexus.repo.tuxcare.com/repository/els_js/:_auth=${TOKEN}
   ```

   </CodeWithCopy>

   :::warning
   Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

4. Update your `package.json` file to add the following overrides for the TuxCare packages:

   <CodeWithCopy>

   ```text
   "overrides": {
     "braces@2.3.2": "npm:@els-js/braces@2.3.2-tuxcare.3",
     "braces@3.0.3": "npm:@els-js/braces@3.0.3-tuxcare.1",
     "cookie@0.3.1": "npm:@els-js/cookie@0.3.1-tuxcare.1",
     "devalue@2.0.1": "npm:@els-js/devalue@2.0.1-tuxcare.1",
     "ip@2.0.1": "npm:@els-js/ip@2.0.1-tuxcare.2",
     "lodash.template@4.5.0": "npm:@els-js/lodash.template@4.5.0-tuxcare.2",
     "parse-git-config@3.0.0": "npm:@els-js/parse-git-config@3.0.0-tuxcare.1",
     "postcss@7.0.39": "npm:@els-js/postcss@7.0.39-tuxcare.2",
     "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
     "vue@2.7.16": "npm:@els-js/vue@2.7.16-tuxcare.3",
     "vue-template-compiler@2.7.16": "npm:@els-js/vue-template-compiler@2.7.16-tuxcare.3"
   }
   ```

   </CodeWithCopy>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the Nuxt library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

## Step 3: Verify Installation

1. To confirm the TuxCare Nuxt library is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Nuxt repository.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Nuxt ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/nuxt/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/nuxt/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), you can manually update the version strings in your `package.json`, then remove installed files and clear npm cache to avoid conflicts:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Nuxt from TuxCare versions:

|    CVE ID     | CVE Type  | Severity | Affected Libraries | Vulnerable Versions |
|:-------------:|:---------:|:--------:|:------------------:|:-------------------:|
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

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

