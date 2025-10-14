# AngularJS

Endless Lifecycle Support (ELS) for AngularJS from TuxCare provides security fixes for AngularJS versions that have reached their end of life. This allows you to continue running AngularJS applications without vulnerability concerns, even after official support has ended.

## Supported AngularJS Versions

* AngularJS 1.5.11, 1.6.10, 1.7.9, 1.8.2, 1.8.3

## Connection to ELS for AngularJS Repository

This guide outlines the steps needed to integrate the TuxCare ELS for AngularJS repository.

## Step 1: Get Token

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

     <template #AngularJS_1.5.11>

     <CodeWithCopy>

     ```text
     "dependencies": {
         "angular": "npm:@els-js/angular@1.5.11-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #AngularJS_1.6.10>

     <CodeWithCopy>

     ```text
     "dependencies": {
         "angular": "npm:@els-js/angular@1.6.10-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #AngularJS_1.7.9>

     <CodeWithCopy>
 
     ```text
     "dependencies": {
         "angular": "npm:@els-js/angular@1.7.9-tuxcare.2"
    }
     ```

     </CodeWithCopy>

     </template>

     <template #AngularJS_1.8.2>

     <CodeWithCopy>

     ```text
     "dependencies": {
         "angular": "npm:@els-js/angular@1.8.2-tuxcare.1"
     }
     ```

     </CodeWithCopy>    

     </template> 

     <template #AngularJS_1.8.3>

     <CodeWithCopy>

     ```text
     "dependencies": {
         "angular": "npm:@els-js/angular@1.8.3-tuxcare.2"
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

6. Run the following command to install ELS for AngularJS dependencies (token for the TuxCare repository will be automatically picked up from your .npmrc file):

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

7. You've successfully integrated the TuxCare ELS for AngularJS repository into your project.

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), there are two options:

* **Option 1**. Run the `npm install` command with the specific version. This will automatically update both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install angular@npm:@els-js/angular@1.8.3-tuxcare.3
  ```

  </CodeWithCopy>

* **Option 2**. Update the version string in your `package.json`, remove installed files and clear npm cache to avoid conflicts:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for AngularJS from TuxCare versions:

| CVE ID         | Severity |  Affected Libraries | Vulnerable Versions |        Safe Versions         | Release Date |
| :------------: | :------: | :-----------------: |:-------------------:|:----------------------------:| :----------: |
| CVE-2025-0716  | Medium   | AngularJS           |       >=0.0.0       | 1.5.11, 1.6.10, 1.7.9, 1.8.3 | 10 Aug 2025  |
| CVE-2025-2336  | Medium   | AngularJS           |       >=1.3.1       |            1.8.3             | 29 Sep 2025  |
| CVE-2025-2336  | Medium   | Angular Sanitize    |       >=1.3.1       |         1.8.2, 1.8.3         | 29 Sep 2025  |
| CVE-2025-4690  | Medium   | Angular Sanitize    |       >=0.0.0       |         1.8.2, 1.8.3         | 29 Sep 2025  |
| CVE-2025-4690  | Medium   | AngularJS           |       >=0.0.0       |            1.8.3             | 29 Sep 2025  |
| CVE-2024-8372  | Medium   | AngularJS           |    >=1.3.0-rc.4     | 1.5.11, 1.6.10, 1.7.9, 1.8.3 | 10 Aug 2025  |
| CVE-2024-8373  | Medium   | AngularJS           |       >=0.0.0       | 1.5.11, 1.6.10, 1.7.9, 1.8.3 | 29 Sep 2025  |
| CVE-2024-21490 | High     | AngularJS           |       >=1.3.0       | 1.5.11, 1.6.10, 1.7.9, 1.8.3 | 15 Jun 2025  |
| CVE-2024-33665 | Medium   | Angular Translate   |       <2.19.1       |            2.19.1            | 23 Sep 2025  |
| CVE-2023-26118 | Medium   | AngularJS           |       >=1.4.9       | 1.5.11, 1.6.10, 1.7.9, 1.8.3 | 15 Jun 2025  |
| CVE-2023-26117 | Medium   | AngularJS           |       >=1.0.0       | 1.5.11, 1.6.10, 1.7.9, 1.8.3 | 16 Sep 2025  |
| CVE-2023-26116 | Medium   | AngularJS           |      >=1.2.21       | 1.5.11, 1.6.10, 1.7.9, 1.8.3 | 15 Jun 2025  |
| CVE-2022-25869 | Medium   | AngularJS           |       >=0.0.0       | 1.5.11, 1.6.10, 1.7.9, 1.8.3 | 21 Aug 2025  |
| CVE-2022-25844 | Medium   | AngularJS           |       >=1.7.0       |         1.7.9, 1.8.3         | 21 Aug 2025  |
| CVE-2020-7676  | Medium   | AngularJS           |       <1.8.0        |    1.5.11, 1.6.10, 1.7.9     | 21 Aug 2025  |
| CVE-2019-10768 | Critical | AngularJS           |       <1.7.9        |    1.5.11, 1.6.10, 1.7.9     | 21 Aug 2025  |



If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

