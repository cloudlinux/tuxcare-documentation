# AngularJS

Endless Lifecycle Support (ELS) for AngularJS from TuxCare provides security fixes for AngularJS versions that have reached their end of life. This allows you to continue running AngularJS applications without vulnerability concerns, even after official support has ended.

:::warning
ELS for AngularJS is currently in active development. If you are interested in updates, adoption, or have specific requirements or feature requests, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

## Supported AngularJS Versions

* AngularJS 1.5, 1.6, 1.7, 1.8

## Connection to ELS for AngularJS Repository

Please contact [sales@tuxcare.com](mailto:sales@tuxcare.com) for instructions.

This guide outlines the steps needed to integrate the TuxCare ELS for AngularJS repository.

## Step 1: Get user credentials

You need a token in order to use TuxCare ELS AngularJS repository. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for AngularJS

TuxCare provides ELS for AngularJS as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your AngularJS project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-angularjs-project/
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

4. Update your `package.json` file to replace your AngularJS dependencies with the TuxCare packages:

   <TableTabs label="Choose AngularJS version: " >

     <template #AngularJS_1.5>

     <CodeWithCopy>

     ```text
     "dependencies": {
         "angular": "npm:@els-js/angular@1.5.11-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #AngularJS_1.6>

     <CodeWithCopy>

     ```text
     "dependencies": {
         "angular": "npm:@els-js/angular@1.6.10-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #AngularJS_1.7>

     <CodeWithCopy>
 
     ```text
     "dependencies": {
         "angular": "npm:@els-js/angular@1.7.9-tuxcare.2"
    }
     ```

     </CodeWithCopy>

     </template>

     <template #AngularJS_1.8>

     <CodeWithCopy>

     ```text
     "dependencies": {
         "angular": "npm:@els-js/angular@1.8.3-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

   </TableTabs>

5. Run the following command to install ELS for AngularJS dependencies (token for the TuxCare repository will be automatically picked up from your .npmrc file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   You will see an output like:

   ```text
   added 1 package, and audited 2 packages in 796ms

   found 0 vulnerabilities
   ```

6. You've successfully integrated the TuxCare ELS for AngularJS repository into your project.

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for AngularJS from TuxCare versions:

| CVE ID | Severity | Vulnerable Version | Safe Version |
| --- | --- | --- | --- |
| CVE-2025-0716  | Medium | >=0.0.0 | 1.5.11, 1.6.10, 1.7.9, 1.8.3 |
| CVE-2024-8372  | Medium | >=1.3.0-rc.4 | 1.5.11, 1.6.10, 1.7.9, 1.8.3 |
| CVE-2024-8373  | Medium | >=0.0.0 | 1.5.11, 1.6.10, 1.7.9, 1.8.3 |
| CVE-2024-21490 | High | >=1.3.0 | 1.5.11, 1.6.10, 1.7.9, 1.8.3 |
| CVE-2023-26118 | Medium | >=1.4.9 | 1.5.11, 1.6.10, 1.7.9, 1.8.3 |
| CVE-2023-26117 | Medium | >=1.0.0 | 1.5.11, 1.6.10, 1.7.9, 1.8.3 |
| CVE-2023-26116 | Medium | >=1.2.21 | 1.5.11, 1.6.10, 1.7.9, 1.8.3 |
| CVE-2022-25869 | Medium | >=0.0.0| 1.5.11, 1.6.10, 1.7.9, 1.8.3 |
| CVE-2022-25844 | Medium | >=1.7.0 | 1.7.9, 1.8.3 |
| CVE-2020-7676  | Medium | <1.8.0 | 1.5.11, 1.6.10, 1.7.9 |
| CVE-2019-10768 | Critical | <1.7.9 | 1.5.11, 1.6.10, 1.7.9 |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

