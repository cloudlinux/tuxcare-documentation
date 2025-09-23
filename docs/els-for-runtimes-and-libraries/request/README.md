# Request

Endless Lifecycle Support (ELS) for Request from TuxCare provides security fixes for Request versions that have reached their end of life. This allows you to continue running Request applications without vulnerability concerns, even after official support has ended.

## Supported Request Versions

* Request 2.88.0, 2.88.2

## Connection to ELS for Request Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Request repository.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Request repository. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Request

TuxCare provides ELS for Request as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Request project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-request-project/
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

4. Update your `package.json` file to replace your Request dependencies with the TuxCare packages:

   <TableTabs label="Choose Request version: " >

     <template #Request_2.88.0>

     <CodeWithCopy>

     ```text
     "dependencies": {
        "request": "npm:@els-js/request@2.88.0-tuxcare.2"
     },
     "overrides": {
        "request": "npm:@els-js/request@2.88.0-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #Request_2.88.2>

     <CodeWithCopy>

     ```text
     "dependencies": {
        "request": "npm:@els-js/request@2.88.2-tuxcare.2"
     },
     "overrides": {
        "request": "npm:@els-js/request@2.88.2-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

   </TableTabs>

5. Run the following command to install ELS for Request dependencies (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   Example output:

   ```text
   added 49 packages, and audited 50 packages in 2s

   2 critical severity vulnerabilities
   ```

6. You've successfully integrated the TuxCare ELS for Request repository into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Request ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/request/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/request/).
