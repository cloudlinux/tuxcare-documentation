# Knockout

Endless Lifecycle Support (ELS) for Knockout from TuxCare provides security fixes for Knockout versions that have reached their end of life. This allows you to continue running Knockout applications without vulnerability concerns, even after official support has ended.

## Supported Knockout Versions

* Knockout 2.3.0, 3.4.2

## Connection to ELS for Knockout Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Knockout library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Knockout library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Knockout

TuxCare provides ELS for Knockout as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Knockout project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-knockout-project/
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

4. Update your `package.json` file to replace your Knockout dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Knockout version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     <CodeWithCopy>

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     </CodeWithCopy>

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "knockout": "^3.4.2"
     }
     ```

     to:

     ```text
     "dependencies": {
       "knockout": "npm:@els-js/knockout@3.4.2-tuxcare.1"
     },
     "overrides": {
       "knockout@3.4.2": "npm:@els-js/knockout@3.4.2-tuxcare.1"
     }
     ```
    
   * **Option 2: Manual Update**

     Manually update your `package.json` file by replacing your Knockout dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <TableTabs label="Choose Knockout version: " >

       <template #knockout_2.3.0>

       <CodeWithCopy>

       ```text
       "dependencies": {
         "knockout": "npm:@els-js/knockout@2.3.0-tuxcare.1"
       }
       ```

       </CodeWithCopy>

       </template>

       <template #knockout_3.4.2>

       <CodeWithCopy>

       ```text
       "dependencies": {
         "knockout": "npm:@els-js/knockout@3.4.2-tuxcare.1"
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

6. Run the following command to install the ELS version of the Knockout library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

## Step 3: Verify Installation

1. To confirm the TuxCare Knockout library is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Knockout repository.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Knockout ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/knockout/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/knockout/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), you can use one of the following methods:

* **Option 1: TuxCare Patcher (Automated). Recommended for projects with multiple TuxCare dependencies.**

  The TuxCare Patcher automatically detects all TuxCare dependencies in your `package.json` and updates them to the latest available versions.

  <CodeWithCopy>

  ```text
  tuxcare-patch-js --upgrade
  ```

  </CodeWithCopy>

* **Option 2: Manual Update via CLI (Single Dependency)**

  If you want to update a single TuxCare dependency, use the npm install command with the specific version. This automatically updates both `package.json` and `package-lock.json`:

  <TableTabs label="Choose Knockout version: " >

    <template #knockout_2.3.0>

    <CodeWithCopy>

    ```text
    npm install knockout@npm:@els-js/knockout@2.3.0-tuxcare.2
    ```

    </CodeWithCopy>

    </template>

    <template #knockout_3.4.2>

    <CodeWithCopy>

    ```text
    npm install knockout@npm:@els-js/knockout@3.4.2-tuxcare.2
    ```

    </CodeWithCopy>

    </template>

  </TableTabs>

* **Option 3: Manual Update via package.json (Multiple Dependencies)**

  If you want to update several TuxCare dependencies, manually update the version strings in your `package.json`, then remove installed files and clear npm cache to avoid conflicts:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Knockout from TuxCare versions:

<TableTabs label="Choose Knockout version: " >

<template #knockout_2.3.0>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2019-14862 | Direct   | Medium   | knockout           | <= 3.4.2            |

  </template>

<template #knockout_3.4.2>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2019-14862 | Direct   | Medium   | knockout           | <= 3.4.2            |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

