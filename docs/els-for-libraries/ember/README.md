# Ember.js

Endless Lifecycle Support (ELS) for Ember.js from TuxCare provides security fixes for Ember.js versions that have reached their end of life. This allows you to continue running Ember.js applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* Ember.js 1.13.11

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

TuxCare publishes patched **transitive** dependencies for the supported Ember.js version as NPM packages on a secure internal registry.

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your Ember.js project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-ember-project/
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

   Update your `package.json` so the transitive versions for your Ember.js version resolve to TuxCare packages. You can do this in two ways:

   * **Option 1: Manual update**

     ```text
     "dependencies": {
       "ember-cli": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
     },
     "overrides": {
       "ember-cli@1.13.11": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
     }
     ```

   * **Option 2: TuxCare Patcher (Automated)**

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "ember-cli": "1.13.11"
     }
     ```

     to:

     ```text
     "dependencies": {
       "ember-cli": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
     },
     "overrides": {
       "ember-cli@1.13.11": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
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

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS registry.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (Nexus, credentials required)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>
