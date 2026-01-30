# React

Endless Lifecycle Support (ELS) for React from TuxCare provides security fixes for React versions that have reached their end of life. This allows you to continue running React applications without vulnerability concerns, even after official support has ended.

## Supported React Versions

* React 15.6.2, 19.2.0

## Connection to ELS for React Library

This guide outlines the steps needed to integrate the TuxCare ELS for the React library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS React library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for React

TuxCare provides ELS for React as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your React project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-react-project/
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

4. Update your `package.json` file to replace your React dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your React dependencies with the TuxCare packages. This method gives you full control over which packages to update.

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the React version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     <CodeWithCopy>

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     </CodeWithCopy>

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "react": "^19.2.0"
     }
     ```

     to:

     ```text
     "dependencies": {
       "react": "npm:@els-js/react@>=19.2.0-tuxcare.1"
     }
     ```

     <TableTabs label="Choose React version: " >

      <template #react_15.6.2>

      <CodeWithCopy>

      ```text
      "dependencies": {
        "react": "npm:@els-js/react@>=15.6.2-tuxcare.1"
      }
      ```

      </CodeWithCopy>

      </template>

      <template #react_19.2.0>

      <CodeWithCopy>

      ```text
      "dependencies": {
        "react": "npm:@els-js/react@>=19.2.0-tuxcare.1"
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

6. Run the following command to install the ELS version of the React library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

## Step 3: Verify Installation

1. To confirm the TuxCare React library is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for React repository.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for React transitive dependencies: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/react/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/react/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for React from TuxCare versions:

<TableTabs label="Choose React version: " >

<template #react_15.6.2>

| CVE ID         | CVE Type   | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :--------: |:--------:|:------------------:| :----------------: |
| CVE-2022-0235  | Transitive | High     | node-fetch         | < 2.6.7, >= 3.0.0 < 3.1.1 |

</template>

<template #react_19.2.0>

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2025-67779 | Direct   | High     | react              | 19.0.2, 19.1.3, 19.2.2 |
| CVE-2025-55184 | Direct   | High     | react              | >= 19.0.0 < 19.0.2, >= 19.1.0 < 19.1.3, >= 19.2.0 < 19.2.2 |
| CVE-2025-55182 | Direct   | Medium   | react              | 19.0.0, 19.1.0, 19.1.1, 19.2.0 |
| CVE-2025-55183 | Direct   | Medium   | react              | >= 19.0.0 < 19.0.2, >= 19.1.0 < 19.1.3, >= 19.2.0 < 19.2.2 |

</template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).


