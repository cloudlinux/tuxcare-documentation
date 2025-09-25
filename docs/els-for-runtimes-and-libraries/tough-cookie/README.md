# tough-cookie

Endless Lifecycle Support (ELS) for tough-cookie from TuxCare provides security fixes for tough-cookie versions that have reached their end of life. This allows you to continue running tough-cookie applications without vulnerability concerns, even after official support has ended.

## Supported tough-cookie Versions

* tough-cookie 2.4.3, 2.5.0

## Connection to ELS for tough-cookie Repository

This guide outlines the steps needed to integrate the TuxCare ELS for tough-cookie repository.

## Step 1: Get Token

You need a token in order to use TuxCare ELS tough-cookie repository. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for tough-cookie

TuxCare provides ELS for tough-cookie as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your tough-cookie project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-tough-cookie-project/
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

4. Update your `package.json` file to replace your tough-cookie dependencies with the TuxCare packages:

   <TableTabs label="Choose tough-cookie version: " >

     <template #tough-cookie_2.4.3>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "tough-cookie": "npm:@els-js/tough-cookie@2.4.3-tuxcare.2"
     },
     "overrides": {
       "tough-cookie": "npm:@els-js/tough-cookie@2.4.3-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #tough-cookie_2.5.0>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "tough-cookie": "npm:@els-js/tough-cookie@2.5.0-tuxcare.2"
     },
     "overrides": {
       "tough-cookie": "npm:@els-js/tough-cookie@2.5.0-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

   </TableTabs>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install ELS for tough-cookie dependencies (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   Example output:

   ```text
   added 4 packages, and audited 5 packages in 1s

   1 package is looking for funding
   run `npm fund` for details

   found 0 vulnerabilities
   ```

7. You've successfully integrated the TuxCare ELS for tough-cookie repository into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for tough-cookie ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/tough/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/tough/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), update the version strings in your `package.json`, remove installed files and clear npm cache to avoid conflicts:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>
