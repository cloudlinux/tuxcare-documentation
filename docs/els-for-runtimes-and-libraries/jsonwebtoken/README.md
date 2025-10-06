# JSON Web Token (JWT)

Endless Lifecycle Support (ELS) for JSON Web Token from TuxCare provides security fixes for JSON Web Token versions that have reached their end of life. This allows you to continue running JSON Web Token applications without vulnerability concerns, even after official support has ended.

## Supported JSON Web Token Versions

* JSON Web Token 0.4.0, 8.5.1

## Connection to ELS for JSON Web Token Library

This guide outlines the steps needed to integrate the TuxCare ELS for the JSON Web Token library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS JSON Web Token library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for JSON Web Token

TuxCare provides ELS for JSON Web Token as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your JSON Web Token project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-jsonwebtoken-project/
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

4. Update your `package.json` file to replace your JSON Web Token dependencies with the TuxCare packages:

   <TableTabs label="Choose JSON Web Token version: " >

     <template #JSON_Web_Token_0.4.0>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "jsonwebtoken": "npm:@els-js/jsonwebtoken@0.4.0-tuxcare.3"
     }
     ```

     </CodeWithCopy>

     </template>

     <template #JSON_Web_Token_8.5.1>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "jsonwebtoken": "npm:@els-js/jsonwebtoken@8.5.1-tuxcare.2"
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

6. Run the following command to install the ELS version of the JSON Web Token library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   You will see an output like:

   ```text
   added 15 packages, and audited 16 packages in 2s

   1 package is looking for funding
   run `npm fund` for details

   found 0 vulnerabilities
   ```

7. You've successfully installed the Tuxcare ELS version of the JSON Web Token library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for JSON Web Token ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/jsonwebtoken/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/jsonwebtoken/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), there are two options:

* **Option 1**. Run the `npm install` command with the specific version. This will automatically update both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install jsonwebtoken@npm:@els-js/jsonwebtoken@8.5.1-tuxcare.2
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

Fixes for the following vulnerabilities are available in ELS for JSON Web Token from TuxCare versions:

<TableTabs label="Choose JSON Web Token version: " >

<template #JSON_Web_Token_0.4.0>

| CVE ID         |  CVE Type  | Severity | Affected Libraries | Vulnerable Version |
| :------------: |:----------:|:--------:|:------------------:|:------------------:|
| CVE-2015-9235  | Direct     | Critical | jsonwebtoken       | < 4.2.2            |

  </template>

<template #JSON_Web_Token_8.5.1>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Version |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2022-23539 | Direct   | High     | jsonwebtoken       | < 8.5.1            |
| CVE-2022-23540 | Direct   | High     | jsonwebtoken       | < 8.5.1            |
| CVE-2022-23541 | Direct   | Medium   | jsonwebtoken       | < 8.5.1            |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).