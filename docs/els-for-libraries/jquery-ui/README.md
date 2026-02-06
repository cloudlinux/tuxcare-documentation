# jQuery UI

Endless Lifecycle Support (ELS) for jQuery UI from TuxCare provides security fixes for jQuery UI versions that have reached their end of life. This allows you to continue running jQuery UI applications without vulnerability concerns, even after official support has ended.

## Supported jQuery UI Versions

* jQuery UI 1.10.4

## Connection to ELS for jQuery UI Library

This guide outlines the steps needed to integrate the TuxCare ELS for the jQuery UI library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS jQuery UI library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for jQuery UI

TuxCare provides ELS for jQuery UI as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your jQuery UI project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-jquery-ui-project/
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

4. Update your `package.json` file to replace your jQuery UI dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: Manual update**

     Manually update your `package.json` file by replacing your jQuery UI dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <CodeWithCopy>

     ```text
     "dependencies": {
       "jquery-ui": "npm:@els-js/jquery-ui@>=1.10.4-tuxcare.1"
     }
     ```

     </CodeWithCopy>

   * **Option 2: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the jQuery UI version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     <CodeWithCopy>

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     </CodeWithCopy>

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "jquery-ui": "^1.10.4"
     }
     ```

     to:

     ```text
     "dependencies": {
       "jquery-ui": "npm:@els-js/jquery-ui@>=1.10.4-tuxcare.1"
     }
     ```

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the jQuery UI library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

## Step 3: Verify Installation

1. To confirm the TuxCare jQuery UI library is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for jQuery UI repository.

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for jQuery UI from TuxCare versions:

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:|:-------------------:|
| CVE-2021-41182 | Direct   | Medium   | jquery-ui          | < 1.13.0            |
| CVE-2021-41183 | Direct   | Medium   | jquery-ui          | < 1.13.0            |
| CVE-2021-41184 | Direct   | Medium   | jquery-ui          | < 1.13.0            |
| CVE-2016-7103  | Direct   | Medium   | jquery-ui          | >= 1.10.0 < 1.11.4  |
| CVE-2022-31160 | Direct   | Medium   | jquery-ui          | < 1.13.2            |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
