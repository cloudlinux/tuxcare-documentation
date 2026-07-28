# LoopBack

Endless Lifecycle Support (ELS) for LoopBack from TuxCare provides security fixes for LoopBack versions that have reached their end of life. This allows you to continue running LoopBack applications without vulnerability concerns, even after official support has ended.

## Supported LoopBack Versions

* LoopBack 1.10.0, 2.42.0

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your LoopBack project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-loopback-project/
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

   Manually update your `package.json` file by replacing LoopBack dependencies with TuxCare-maintained packages:

     <TableTabs label="Choose LoopBack version: " >

      <template #LoopBack_1.10.0>

      ```text
      "dependencies": {
        "loopback": "npm:@els-js/loopback@>=1.10.0-tuxcare.1"
      },
      "overrides": {
         "loopback@1.10.0": "npm:@els-js/loopback@>=1.10.0-tuxcare.1",
         "aws-sdk": "npm:@els-js/aws-sdk@>=2.0.5-tuxcare.1",
         "base64-url": "npm:@els-js/base64-url@>=1.2.1-tuxcare.1",
         "basic-auth-connect": "npm:@els-js/basic-auth-connect@>=1.0.0-tuxcare.1",
         "body-parser": "npm:@els-js/body-parser@>=1.13.3-tuxcare.1",
         "cookie": "npm:@els-js/cookie@>=0.1.3-tuxcare.1",
         "debug": "npm:@els-js/debug@>=2.2.0-tuxcare.1",
         "ejs": "npm:@els-js/ejs@>=1.0.0-tuxcare.1",
         "follow-redirects": "npm:@els-js/follow-redirects@>=0.0.3-tuxcare.1",
         "form-data": "npm:@els-js/form-data@>=0.1.4-tuxcare.1",
         "fresh": "npm:@els-js/fresh@>=0.3.0-tuxcare.1",
         "hawk": "npm:@els-js/hawk@>=1.1.1-tuxcare.1",
         "hoek": "npm:@els-js/hoek@>=0.9.1-tuxcare.1",
         "mime": "npm:@els-js/mime@>=1.3.4-tuxcare.1",
         "minimist": "npm:@els-js/minimist@>=0.0.8-tuxcare.1",
         "ms": "npm:@els-js/ms@>=0.7.1-tuxcare.1",
         "negotiator": "npm:@els-js/negotiator@>=0.5.3-tuxcare.1",
         "on-headers": "npm:@els-js/on-headers@>=1.0.2-tuxcare.1",
         "qs": "npm:@els-js/qs@>=4.0.0-tuxcare.1",
         "tunnel-agent": "npm:@els-js/tunnel-agent@>=0.4.3-tuxcare.1",
         "underscore": "npm:@els-js/underscore@>=1.6.0-tuxcare.1",
         "underscore.string": "npm:@els-js/underscore.string@>=2.3.3-tuxcare.1",
         "xml2js": "npm:@els-js/xml2js@>=0.2.6-tuxcare.1"
      }
      ```

      </template>

      <template #LoopBack_2.42.0>

      ```text
      "dependencies": {
        "loopback": "npm:@els-js/loopback@>=2.42.0-tuxcare.1"
      },
      "overrides": {
        "loopback@2.42.0": "npm:@els-js/loopback@>=2.42.0-tuxcare.1"
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

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for LoopBack repository.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?q=loopback) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?q=loopback) — Patched versions and changelogs
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/loopback/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (Nexus, credentials required)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>

