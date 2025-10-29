# http-proxy-middleware

Endless Lifecycle Support (ELS) for http-proxy-middleware from TuxCare provides security fixes for http-proxy-middleware versions that have reached their end of life. This allows you to continue running http-proxy-middleware applications without vulnerability concerns, even after official support has ended.

## Supported http-proxy-middleware Versions

* http-proxy-middleware 0.19.1, 2.0.8

## Connection to ELS for http-proxy-middleware Library

This guide outlines the steps needed to integrate the TuxCare ELS for the http-proxy-middleware library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS http-proxy-middleware library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for http-proxy-middleware

TuxCare provides ELS for http-proxy-middleware as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your http-proxy-middleware project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-http-proxy-middleware-project/
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

4. Update your `package.json` file to replace your http-proxy-middleware dependencies with the TuxCare packages. You can do this in two ways:

  * **Option 1: TuxCare Patcher (Automated)**

    If you already have dependencies listed in your `package.json`, for example:

    ```text
    "dependencies": {
      "http-proxy-middleware": "^2.0.8"
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
      "http-proxy-middleware": "npm:@els-js/http-proxy-middleware@2.0.8-tuxcare.1"
    },
    "overrides": {
      "http-proxy-middleware@2.0.8": "npm:@els-js/http-proxy-middleware@2.0.8-tuxcare.1"
    }
    ```
    
  * **Option 2: Manual Update**

     Manually update your `package.json` file to use the TuxCare package:

    <TableTabs label="Choose http-proxy-middleware version: " >

     <template #http-proxy-middleware_0.19.1>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "http-proxy-middleware": "npm:@els-js/http-proxy-middleware@0.19.1-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #http-proxy-middleware_2.0.8>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "http-proxy-middleware": "npm:@els-js/http-proxy-middleware@2.0.8-tuxcare.1"
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

6. Run the following command to install the ELS version of the http-proxy-middleware library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

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

7. You've successfully installed the Tuxcare ELS version of the http-proxy-middleware library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for http-proxy-middleware ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/http-proxy-middleware/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/http-proxy-middleware/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.2`), there are two options:

* **Option 1**. Run the `npm install` command with the specific version. This will automatically update both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install http-proxy-middleware@npm:@els-js/http-proxy-middleware@2.0.8-tuxcare.2
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

Fixes for the following vulnerabilities are available in ELS for http-proxy-middleware from TuxCare versions:

<TableTabs label="Choose http-proxy-middleware version: " >

<template #http-proxy-middleware_0.19.1>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2024-21536 | Direct   | High     | http-proxy-middleware | < 2.0.7, >= 3.0.0, < 3.0.3 |

  </template>

<template #http-proxy-middleware_2.0.8>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2025-32997 | Direct   | Medium   | http-proxy-middleware | < 2.0.9, 3.x < 3.0.5 |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
