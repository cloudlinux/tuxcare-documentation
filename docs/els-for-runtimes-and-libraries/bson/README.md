# bson

Endless Lifecycle Support (ELS) for bson from TuxCare provides security fixes for bson versions that have reached their end of life. This allows you to continue running bson applications without vulnerability concerns, even after official support has ended.

## Supported bson Versions

* bson 0.5.7, 1.0.9

## Connection to ELS for bson Library

This guide outlines the steps needed to integrate the TuxCare ELS for the bson library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS bson library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for bson

TuxCare provides ELS for bson as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your bson project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-bson-project/
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

4. Update your `package.json` file to replace your bson dependencies with the TuxCare packages. You can do this in two ways:

  * **Option 1: TuxCare Patcher (Automated)**

    If you already have dependencies listed in your `package.json`, for example:

    ```text
    "dependencies": {
      "bson": "^1.0.9"
    }
    ```

    Install the Patcher globally, then run the patcher command:

    <CodeWithCopy>

    ```text
    npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
    tuxcare-patch-js
    ```

    </CodeWithCopy>

    The patcher will automatically update your `package.json` to:

    ```text
    "dependencies": {
      "bson": "npm:@els-js/bson@1.0.9-tuxcare.1"
    },
    "overrides": {
      "bson@1.0.9": "npm:@els-js/bson@1.0.9-tuxcare.1"
    }
    ```
    
  * **Option 2: Manual Update**

     Manually update your `package.json` file to use the TuxCare package:

    <TableTabs label="Choose bson version: " >

     <template #bson_0.5.7>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "bson": "npm:@els-js/bson@0.5.7-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #bson_1.0.9>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "bson": "npm:@els-js/bson@1.0.9-tuxcare.1"
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

6. Run the following command to install the ELS version of the bson library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

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

7. You've successfully installed the Tuxcare ELS version of the bson library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for bson ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/bson/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/bson/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.2`), there are several options:

* **Option 1**. Run TuxCare Patcher to update all TuxCare packages in your `package.json`:

  <CodeWithCopy>

  ```text
  tuxcare-patch-js --upgrade
  ```

  </CodeWithCopy>

* **Option 2**. Run the `npm install` command with the specific version. This will automatically update both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install bson@npm:@els-js/bson@1.0.9-tuxcare.2
  ```

  </CodeWithCopy>

* **Option 3**. Manually update the version string in your `package.json`, remove installed files and clear npm cache to avoid conflicts:

  <CodeWithCopy>

  ```text
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for bson from TuxCare versions:

<TableTabs label="Choose bson version: " >

<template #bson_0.5.7>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2020-7610  | Direct   | Critical | bson               | >= 1.0.0, < 1.1.4 |
| CVE-2018-13863 | Direct   | High     | bson               | >= 0.5.0, < 1.0.5 |

  </template>

<template #bson_1.0.9>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2020-7610  | Direct   | Critical | bson               | >= 1.0.0, < 1.1.4 |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
