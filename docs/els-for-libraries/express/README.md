# express

Endless Lifecycle Support (ELS) for express from TuxCare provides security fixes for express versions that have reached their end of life. This allows you to continue running express applications without vulnerability concerns, even after official support has ended.

## Supported express Versions

* express 3.21.2

## Connection to ELS for express Library

This guide outlines the steps needed to integrate the TuxCare ELS for the express library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS express library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for express

TuxCare provides ELS for express as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your express project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-express-project/
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

4. Update your `package.json` file to replace your express dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the express version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     <CodeWithCopy>

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     </CodeWithCopy>

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "express": "^3.21.2"
     }
     ```

     to:

     ```text
     "dependencies": {
       "express": "npm:@els-js/express@3.21.2-tuxcare.1"
     },
     "overrides": {
       "express@3.21.2": "npm:@els-js/express@3.21.2-tuxcare.1"
     }
     ```
    
   * **Option 2: Manual Update**

     Manually update your `package.json` file by replacing your express dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <CodeWithCopy>

     ```text
     "dependencies": {
       "express": "npm:@els-js/express@3.21.2-tuxcare.1"
     }
     ```

     </CodeWithCopy>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the express library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

## Step 3: Verify Installation

1. To confirm the TuxCare express library is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for express repository.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for express ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/express/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/express/).

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

  <CodeWithCopy>

  ```text
  npm install express@npm:@els-js/express@3.21.2-tuxcare.2
  ```

  </CodeWithCopy>

* **Option 3: Manual Update via package.json (Multiple Dependencies)**

  If you want to update several TuxCare dependencies, manually update the version strings in your `package.json`, then remove installed files and clear npm cache to avoid conflicts:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for express from TuxCare versions:

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2024-10491 | Direct   | Medium   | express            | <= 3.21.4          |
| CVE-2024-29041 | Direct   | Medium   | express            | < 4.19.2, >= 5.0.0-alpha.1 < 5.0.0-beta.3 |
| CVE-2024-43796 | Direct   | Medium   | express            | < 4.20.0           |
| CVE-2024-9266  | Direct   | Medium   | express            | >= 3.4.5 < 4.0.0   |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

