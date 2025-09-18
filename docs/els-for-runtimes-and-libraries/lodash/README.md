# Lodash

Endless Lifecycle Support (ELS) for Lodash from TuxCare provides security fixes for Lodash versions that have reached their end of life. This allows you to continue running Lodash applications without vulnerability concerns, even after official support has ended.


## Supported Lodash Versions

* Lodash 4.5.0, 4.17.x

## Connection to ELS for Lodash Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Lodash library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Lodash library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Lodash

TuxCare provides ELS for Lodash as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Lodash project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-lodash-project/
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

4. Update your `package.json` file to replace your Lodash dependencies with the TuxCare packages:

   <TableTabs label="Choose Lodash version: " >

     <template #Lodash_4.5.0>

     <CodeWithCopy>

     ```text
     "dependencies": {
        "lodash": "npm:@els-js/lodash@4.5.0-tuxcare.2"
     },
     "overrides": {
        "lodash": "npm:@els-js/lodash@4.5.0-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #Lodash_4.17.15>

     <CodeWithCopy>

     ```text
     "dependencies": {
        "lodash": "npm:@els-js/lodash@4.17.15-tuxcare.2"
     },
     "overrides": {
        "lodash": "npm:@els-js/lodash@4.17.15-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #Lodash_4.17.19>

     <CodeWithCopy>

     ```text
     "dependencies": {
        "lodash": "npm:@els-js/lodash@4.17.19-tuxcare.2"
     },
     "overrides": {
        "lodash": "npm:@els-js/lodash@4.17.19-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

   </TableTabs>

5. Run the following command to install the ELS version of the Lodash library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   You will see an output like:

   ```text
   added 1 package, and audited 2 packages in 787ms

   found 0 vulnerabilities
   ```

6. You've successfully installed the Tuxcare ELS version of the Lodash library into your project.

