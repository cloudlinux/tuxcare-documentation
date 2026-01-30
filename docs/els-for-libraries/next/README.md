# Next.js

Endless Lifecycle Support (ELS) for Next.js from TuxCare provides security fixes for Next.js versions that have reached their end of life. This allows you to continue running Next.js applications without vulnerability concerns, even after official support has ended.

## Supported Next.js Versions

* Next.js 12.3.7, 13.5.11, 16.0.6

## Connection to ELS for Next.js Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Next.js library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Next.js library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Next.js

TuxCare provides ELS for Next.js as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Next.js project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-nextjs-project/
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

4. Update your `package.json` file to replace your Next.js dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your Next.js dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <TableTabs label="Choose Next.js version: " >

       <template #next_12.3.7>

       <CodeWithCopy>

       ```text
       "dependencies": {
         "next": "npm:@els-js/next@>=12.3.7-tuxcare.1"
       }
       ```

       </CodeWithCopy>

       </template>

       <template #next_13.5.11>

       <CodeWithCopy>

       ```text
       "dependencies": {
         "next": "npm:@els-js/next@>=13.5.11-tuxcare.1"
       }
       ```

       </CodeWithCopy>

       </template>

       <template #next_16.0.6>

       <CodeWithCopy>

       ```text
       "dependencies": {
         "next": "npm:@els-js/next@>=16.0.6-tuxcare.1"
       }
       ```

       </CodeWithCopy>

       </template>

     </TableTabs>

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Next.js version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     <CodeWithCopy>

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     </CodeWithCopy>

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "next": "^12.3.7"
     }
     ```

     to:

     ```text
     "dependencies": {
       "next": "npm:@els-js/next@>=12.3.7-tuxcare.1"
     }
     ```

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the Next.js library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

## Step 3: Verify Installation

1. To confirm the TuxCare Next.js library is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Next.js repository.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Next.js ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/next/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/next/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Next.js from TuxCare versions:

<TableTabs label="Choose Next.js version: " >

<template #next_12.3.7>

|     CVE ID     | CVE Type | Severity | Affected Libraries |      Vulnerable Versions       |
|:--------------:| :------: |:--------:|:------------------:|:------------------------------:|
| CVE-2025-57822 | Direct   | High     |        next        | < 14.2.32, >= 15.0.0, < 15.4.7 |
| CVE-2024-51479 | Direct   | High     |        next        |      >= 9.5.5, < 14.2.15       |
| CVE-2024-47831 | Direct   | High     |        next        |      >= 10.0.0, < 14.2.7       |
| CVE-2024-34351 | Direct   | High     |        next        |      >= 13.4.0, < 14.1.1       |
| CVE-2023-46298 | Direct   | High     |        next        |            < 13.4.20           |
| CVE-2025-57752 | Direct   | Medium   |        next        | < 14.2.31, >= 15.0.0 < 15.4.5 |
| CVE-2025-55173 | Direct   | Medium   |        next        | < 14.2.31, >= 15.0.0 < 15.4.5 |
| CVE-2025-48068 | Direct   | Low      |        next        | >= 13.0.0 < 14.2.30, >= 15.0.0 < 15.2.2 |
| CVE-2025-32421 | Direct   | Low      |        next        | < 14.2.24, >= 15.0.0 < 15.1.6 |

  </template>

<template #next_13.5.11>

|     CVE ID     | CVE Type | Severity | Affected Libraries |      Vulnerable Versions       |
|:--------------:| :------: |:--------:|:------------------:|:------------------------------:|
| CVE-2025-57822 | Direct   | High     |        next        | < 14.2.32, >= 15.0.0, < 15.4.7 |
| CVE-2024-51479 | Direct   | High     |        next        |      >= 9.5.5, < 14.2.15       |
| CVE-2024-47831 | Direct   | High     |        next        |      >= 10.0.0, < 14.2.7       |
| CVE-2024-34351 | Direct   | High     |        next        |      >= 13.4.0, < 14.1.1       |
| CVE-2025-55184 | Transitive | High   |        React       |      >= 13.3.0 < 14.2.35       |
| CVE-2025-67779 | Transitive | High   |        React       |      >= 13.3.0 < 14.2.35       |
| CVE-2025-57752 | Direct   | Medium   |        next        | < 14.2.31, >= 15.0.0 < 15.4.5 |
| CVE-2025-55173 | Direct   | Medium   |        next        | < 14.2.31, >= 15.0.0 < 15.4.5 |
| CVE-2025-48068 | Direct   | Low      |        next        | >= 13.0.0 < 14.2.30, >= 15.0.0 < 15.2.2 |
| CVE-2025-32421 | Direct   | Low      |        next        | < 14.2.24, >= 15.0.0 < 15.1.6 |

  </template>

<template #next_16.0.6>

|     CVE ID     | CVE Type | Severity | Affected Libraries |      Vulnerable Versions       |
|:--------------:| :------: |:--------:|:------------------:|:------------------------------:|
| CVE-2025-55182 | Direct   | Critical |        next        |      >= 16.0.0 <= 16.0.7       |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
