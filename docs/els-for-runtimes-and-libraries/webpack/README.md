# webpack

Endless Lifecycle Support (ELS) for webpack from TuxCare provides security fixes for webpack versions that have reached their end of life. This allows you to continue running webpack applications without vulnerability concerns, even after official support has ended.

## Supported webpack Versions

* webpack 5.55.0, 5.76.1

## Connection to ELS for webpack Library

This guide outlines the steps needed to integrate the TuxCare ELS for the webpack library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS webpack library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for webpack

TuxCare provides ELS for webpack as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your webpack project.
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

4. Update your `package.json` file to replace your webpack dependencies with the TuxCare packages:

   <TableTabs label="Choose webpack version: " >

     <template #webpack_5.55.0>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "webpack": "npm:@els-js/webpack@5.55.0-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #webpack_5.76.1>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "webpack": "npm:@els-js/webpack@5.76.1-tuxcare.2"
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

6. Run the following command to install the ELS version of the webpack library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   You will see an output like:

   ```text
    added 1 package, and audited 2 packages in 792ms
    
    found 0 vulnerabilities
   ```

7. You've successfully installed the Tuxcare ELS version of the webpack library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for webpack ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/webpack/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/webpack/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.2`), there are two options:

* **Option 1**. Run the `npm install` command with the specific version. This will automatically update both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install webpack@npm:@els-js/webpack@5.76.1-tuxcare.2
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

Fixes for the following vulnerabilities are available in ELS for webpack from TuxCare versions:

<TableTabs label="Choose webpack version: " >

<template #webpack_5.55.0>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2023-28154 | Direct   | Critical | webpack           | > 5.0.0 < 5.76.0  |
| CVE-2024-43788 | Direct   | Medium   | webpack           | < 5.94.0           |

  </template>

<template #webpack_5.76.1>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2024-43788 | Direct   | Medium   | webpack           | < 5.94.0           |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

