# jQuery

Endless Lifecycle Support (ELS) for jQuery from TuxCare provides security fixes for jQuery versions that have reached their end of life. This allows you to continue running jQuery applications without vulnerability concerns, even after official support has ended.

## Supported jQuery Versions

* jQuery 1.8.2, 1.11.3, 1.12.4, 2.2.4, 3.2.1, 3.3.1, 3.4.1

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your jQuery project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-jquery-project/
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

   Update your `package.json` file to replace jQuery dependencies with TuxCare-maintained packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your jQuery dependencies with the TuxCare packages. This method gives you full control over which packages to update.

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the jQuery version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "jquery": "^1.12.4"
     }
     ```

     to:

     ```text
     "dependencies": {
       "jquery": "npm:@els-js/jquery@>=1.12.4-tuxcare.1"
     },
     "overrides": {
       "jquery@1.12.4": "npm:@els-js/jquery@>=1.12.4-tuxcare.1"
     }
     ```

     <TableTabs label="Choose jQuery version: " >

      <template #jQuery_1.8.2>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=1.8.2-tuxcare.1"
      },
      "overrides": {
        "jquery@1.8.2": "npm:@els-js/jquery@>=1.8.2-tuxcare.1"
      }
      ```

      </template>

      <template #jQuery_1.11.3>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=1.11.3-tuxcare.1"
      },
      "overrides": {
        "jquery@1.11.3": "npm:@els-js/jquery@>=1.11.3-tuxcare.1"
      }
      ```

      </template>

      <template #jQuery_1.12.4>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=1.12.4-tuxcare.1"
      },
      "overrides": {
        "jquery@1.12.4": "npm:@els-js/jquery@>=1.12.4-tuxcare.1"
      }
      ```

      </template>

      <template #jQuery_2.2.4>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=2.2.4-tuxcare.1"
      },
      "overrides": {
        "jquery@2.2.4": "npm:@els-js/jquery@>=2.2.4-tuxcare.1"
      }
      ```

      </template>

      <template #jQuery_3.2.1>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=3.2.1-tuxcare.1"
      },
      "overrides": {
        "jquery@3.2.1": "npm:@els-js/jquery@>=3.2.1-tuxcare.1"
      }
      ```

      </template>

      <template #jQuery_3.3.1>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=3.3.1-tuxcare.1"
      },
      "overrides": {
        "jquery@3.3.1": "npm:@els-js/jquery@>=3.3.1-tuxcare.1"
      }
      ```

      </template>

      <template #jQuery_3.4.1>

      ```text
      "dependencies": {
        "jquery": "npm:@els-js/jquery@>=3.4.1-tuxcare.1"
      },
      "overrides": {
        "jquery@3.4.1": "npm:@els-js/jquery@>=3.4.1-tuxcare.1"
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

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for jQuery repository.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=jQuery) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=jQuery) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=jQuery) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [SBOM](https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom:jquery) — Software Bill of Materials (Nexus, credentials required)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>
