# DOMPurify

Endless Lifecycle Support (ELS) for DOMPurify from TuxCare provides security fixes for DOMPurify versions that have reached their end of life. This allows you to continue running DOMPurify applications without vulnerability concerns, even after official support has ended.

## Supported DOMPurify Versions

* DOMPurify 2.3.0, 2.4.3

## Connection to ELS for DOMPurify Library

This guide outlines the steps needed to integrate the TuxCare ELS for the DOMPurify library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS DOMPurify library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for DOMPurify

TuxCare provides ELS for DOMPurify as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your DOMPurify project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-dompurify-project/
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

4. Update your `package.json` file to replace your DOMPurify dependencies with the TuxCare packages. You can do this in two ways:

  * **Option 1: TuxCare Patcher (Automated)**

    If you already have dependencies listed in your `package.json`, for example:

    ```text
    "dependencies": {
      "dompurify": "^2.4.3"
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
      "dompurify": "npm:@els-js/dompurify@2.4.3-tuxcare.2"
    },
    "overrides": {
      "dompurify@2.4.3": "npm:@els-js/dompurify@2.4.3-tuxcare.2"
    }
    ```
    
  * **Option 2: Manual Update**

     Manually update your `package.json` file to use the TuxCare package:

    <TableTabs label="Choose DOMPurify version: " >

     <template #dompurify_2.3.0>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "dompurify": "npm:@els-js/dompurify@2.3.0-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #dompurify_2.4.3>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "dompurify": "npm:@els-js/dompurify@2.4.3-tuxcare.1"
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

6. Run the following command to install the ELS version of the DOMPurify library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   You will see an output like:

   ```text
    added 1 package, and audited 2 packages in 874ms

    found 0 vulnerabilities
   ```

7. You've successfully installed the Tuxcare ELS version of the DOMPurify library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for DOMPurify ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/dompurify/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/dompurify/).

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
  npm install dompurify@npm:@els-js/dompurify@2.4.3-tuxcare.2
  ```

  </CodeWithCopy>

* **Option 3**. Manually update the version string in your `package.json`, remove installed files and clear npm cache to avoid conflicts:

  <CodeWithCopy>

  ```text
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for DOMPurify from TuxCare versions:

<TableTabs label="Choose DOMPurify version: " >

<template #dompurify_2.3.0>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2025-26791 | Direct   | Medium   | dompurify         | < 3.2.4           |
| CVE-2024-48910 | Direct   | Critical | dompurify         | < 2.4.2           |
| CVE-2024-47875 | Direct   | Medium   | dompurify         | < 2.5.0, >= 3.0.0 < 3.1.3 |
| CVE-2024-45801 | Direct   | Medium   | dompurify         | < 2.5.4, >= 3.0.0 < 3.1.3 |

  </template>

<template #dompurify_2.4.3>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2025-26791 | Direct   | Medium   | dompurify         | < 3.2.4           |
| CVE-2024-47875 | Direct   | Medium   | dompurify         | < 2.5.0, >= 3.0.0 < 3.1.3 |
| CVE-2024-45801 | Direct   | Medium   | dompurify         | < 2.5.4, >= 3.0.0 < 3.1.3 |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
