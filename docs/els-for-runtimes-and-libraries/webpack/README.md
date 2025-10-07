# Webpack

Endless Lifecycle Support (ELS) for Webpack from TuxCare provides security fixes for Webpack versions that have reached their end of life. This allows you to continue running Webpack applications without vulnerability concerns, even after official support has ended.

## Supported Webpack Versions

* Webpack 4.41.2, 4.46.0

## Connection to ELS for Webpack Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Webpack repository.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Webpack repository. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Webpack

TuxCare provides ELS for Webpack as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Webpack project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-webpack-project/
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

4. Update your `package.json` file to replace your Webpack dependencies with the TuxCare packages:

   <TableTabs label="Choose Webpack version: ">

     <template #Webpack_4.41.2>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "webpack": "npm:@els-js/webpack@4.41.2-tuxcare.2"
     },
     "overrides": {
       "braces@2.3.2": "npm@els-js/braces@2.3.2-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #Webpack_4.46.0>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "webpack": "npm:@els-js/webpack@4.46.0-tuxcare.2"
     },
     "overrides": {
       "braces@2.3.2": "npm@els-js/braces@2.3.2-tuxcare.1"
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

6. Run the following command to install ELS for Webpack dependencies (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   Example output:

   ```text
   added 388 packages, and audited 391 packages in 19s

   37 packages are looking for funding
   run `npm fund` for details

   9 moderate severity vulnerabilities
   ```

7. You've successfully integrated the TuxCare ELS for Webpack repository into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Webpack ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/webpack/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/webpack/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.2`), you need to update the version string in your `package.json`, remove installed files and clear npm cache to avoid conflicts:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Webpack from TuxCare versions:

<TableTabs label="Choose Webpack version: " >

<template #Webpack_4.41.2>

| CVE ID         | CVE Type | Severity | Affected Libraries    | Vulnerable Versions |
| :-------------:| :------: |:--------:|:---------------------:| :----------------: |
| CVE-2024-43788 | Direct   | Medium   | webpack               | < 5.94.0           |

  </template>

<template #Webpack_4.46.0>

| CVE ID         | CVE Type | Severity | Affected Libraries    | Vulnerable Versions |
| :-------------:| :------: |:--------:|:---------------------:| :----------------: |
| CVE-2024-43788 | Direct   | Medium   | webpack               | < 5.94.0           |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
