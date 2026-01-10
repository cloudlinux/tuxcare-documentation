# AngularJS

Endless Lifecycle Support (ELS) for AngularJS from TuxCare provides security fixes for AngularJS versions that have reached their end of life. This allows you to continue running AngularJS applications without vulnerability concerns, even after official support has ended.

## Supported AngularJS Versions

* AngularJS 1.4.4, 1.5.11, 1.6.10, 1.7.9, 1.8.2, 1.8.3

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
   @els-js:registry=https://nexus.repo.tuxcare.com/repository/els-js/
   //nexus.repo.tuxcare.com/repository/els-js/:_auth=${TOKEN}
   ```

   </CodeWithCopy>

   :::warning
   Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

4. Replace your AngularJS dependencies with TuxCare ones. You can use one of the following methods:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your AngularJS dependencies with the TuxCare packages. This method gives you full control over which packages to update.

      <TableTabs label="Choose AngularJS version: " >

      <template #AngularJS_1.4.4>

      <CodeWithCopy>

      ```text
      "dependencies": {
          "angular": "npm:@els-js/angular@>=1.4.4-tuxcare.1"
      }
      ```

      </CodeWithCopy>

      </template>

      <template #AngularJS_1.5.11>

      <CodeWithCopy>

      ```text
      "dependencies": {
          "angular": "npm:@els-js/angular@>=1.5.11-tuxcare.1"
      }
      ```

      </CodeWithCopy>

      </template>

      <template #AngularJS_1.6.10>

      <CodeWithCopy>

      ```text
      "dependencies": {
          "angular": "npm:@els-js/angular@>=1.6.10-tuxcare.1"
      }
      ```

      </CodeWithCopy>

      </template>

      <template #AngularJS_1.7.9>

      <CodeWithCopy>
 
      ```text
      "dependencies": {
          "angular": "npm:@els-js/angular@>=1.7.9-tuxcare.1"
      }
      ```

      </CodeWithCopy>

      </template>

      <template #AngularJS_1.8.2>

      <CodeWithCopy>

      ```text
      "dependencies": {
          "angular": "npm:@els-js/angular@>=1.8.2-tuxcare.1"
      }
      ```

      </CodeWithCopy>    

      </template> 

      <template #AngularJS_1.8.3>

      <CodeWithCopy>

      ```text
      "dependencies": {
          "angular": "npm:@els-js/angular@>=1.8.3-tuxcare.1"
      }
      ```

      </CodeWithCopy>

      </template>

     </TableTabs>

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run the following commands. The TuxCare Patcher automatically detects the AngularJS version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     <CodeWithCopy>

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     </CodeWithCopy>

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "angular": "^1.8.3"
     }
     ```

     to:

     ```text
     "dependencies": {
       "angular": "npm:@els-js/angular@>=1.8.3-tuxcare.1"
     },
     "overrides": {
       "angular@1.8.3": "npm:@els-js/angular@>=1.8.3-tuxcare.1"
     }
     ```

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install ELS for AngularJS dependencies (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

## Step 3: Verify Installation

1. To confirm the TuxCare AngularJS repository is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for AngularJS repository.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for AngularJS ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/angular/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/angular/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for AngularJS from TuxCare versions:

|     CVE ID     | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: | :------: | :----------------: | :-----------------: |
| CVE-2019-10768 |  Direct  | Critical |      AngularJS     |        <1.7.9       |
| CVE-2024-21490 |  Direct  |   High   |      AngularJS     |       >=1.3.0       |
|  CVE-2025-4690 |  Direct  |  Medium  |  Angular Sanitize  |       >=0.0.0       |
|  CVE-2025-4690 |  Direct  |  Medium  |      AngularJS     |       >=0.0.0       |
|  CVE-2025-2336 |  Direct  |  Medium  |      AngularJS     |       >=1.3.1       |
|  CVE-2025-2336 |  Direct  |  Medium  |  Angular Sanitize  |       >=1.3.1       |
|  CVE-2025-0716 |  Direct  |  Medium  |      AngularJS     |       >=0.0.0       |
|  CVE-2024-8373 |  Direct  |  Medium  |      AngularJS     |       >=0.0.0       |
|  CVE-2024-8372 |  Direct  |  Medium  |      AngularJS     |     >=1.3.0-rc.4    |
| CVE-2024-33665 |  Direct  |  Medium  |  Angular Translate |       <2.19.1       |
| CVE-2023-26118 |  Direct  |  Medium  |      AngularJS     |       >=1.4.9       |
| CVE-2023-26117 |  Direct  |  Medium  |      AngularJS     |       >=1.0.0       |
| CVE-2023-26116 |  Direct  |  Medium  |      AngularJS     |       >=1.2.21      |
| CVE-2022-25869 |  Direct  |  Medium  |      AngularJS     |       >=0.0.0       |
| CVE-2022-25844 |  Direct  |  Medium  |      AngularJS     |       >=1.7.0       |
|  CVE-2020-7676 |  Direct  |  Medium  |      AngularJS     |        <1.8.0       |
| GHSA-5cp4-xmrw-59wf |  Direct  |  Medium  |      AngularJS     |        <1.8.0       |
| GHSA-28hp-fgcr-2r4h |  Direct  |  Medium  |      AngularJS     |        <1.6.0       |
| CVE-2019-14863 |  Direct  |  Medium  |      AngularJS     |       <=1.4.14      |



If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

