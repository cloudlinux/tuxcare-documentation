# Lodash

Endless Lifecycle Support (ELS) for Lodash from TuxCare provides security fixes for Lodash versions that have reached their end of life. This allows you to continue running Lodash applications without vulnerability concerns, even after official support has ended.

## Supported Lodash Versions

* Lodash 1.3.1, 2.4.2, 3.10.1, 3.2.0, 4.17.15, 4.17.19, 4.17.21, 4.18.1, 4.5.0

## Installation

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your Lodash project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-lodash-project/
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

   Update your `package.json` file to replace Lodash dependencies with TuxCare-maintained packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your Lodash dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <TableTabs label="Choose Lodash version: " >

      <template #Lodash_1.3.1>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=1.3.1-tuxcare.1"
      },
      "overrides": {
        "lodash@1.3.1": "npm:@els-js/lodash@>=1.3.1-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_2.4.2>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=2.4.2-tuxcare.1"
      },
      "overrides": {
        "lodash@2.4.2": "npm:@els-js/lodash@>=2.4.2-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_3.2.0>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=3.2.0-tuxcare.1"
      },
      "overrides": {
        "lodash@3.2.0": "npm:@els-js/lodash@>=3.2.0-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_3.10.1>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=3.10.1-tuxcare.1"
      },
      "overrides": {
        "lodash@3.10.1": "npm:@els-js/lodash@>=3.10.1-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_4.5.0>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=4.5.0-tuxcare.1"
      },
      "overrides": {
        "lodash@4.5.0": "npm:@els-js/lodash@>=4.5.0-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_4.17.15>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=4.17.15-tuxcare.1"
      },
      "overrides": {
        "lodash@4.17.15": "npm:@els-js/lodash@>=4.17.15-tuxcare.1"
      }
      ```

      </template>

      <template #Lodash_4.17.19>

      ```text
      "dependencies": {
        "lodash": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
      },
      "overrides": {
        "lodash@4.17.19": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
      }
      ```

      </template>

     </TableTabs>

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Lodash version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "lodash": "^4.17.19"
     }
     ```

     to:

     ```text
     "dependencies": {
       "lodash": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
     },
     "overrides": {
       "lodash@4.17.19": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
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

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Lodash repository.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Lodash) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Lodash) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Lodash) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/lodash/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [SBOM](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:lodash) — Software Bill of Materials (Nexus, credentials required)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>
