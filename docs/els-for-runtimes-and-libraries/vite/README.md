# Vite

Endless Lifecycle Support (ELS) for Vite from TuxCare provides security fixes for Vite versions that have reached their end of life. This allows you to continue running Vite applications without vulnerability concerns, even after official support has ended.

## Supported Vite Versions

* Vite 4.5.5

## Connection to ELS for Vite Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Vite library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Vite library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Vite

TuxCare provides ELS for Vite as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Vite project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-vite-project/
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

4. Update your `package.json` file to replace your Vite dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Vite version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     <CodeWithCopy>

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     </CodeWithCopy>

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "vite": "^4.5.5"
     }
     ```

     to:

     ```text
     "dependencies": {
       "vite": "npm:@els-js/vite@4.5.5-tuxcare.1"
     },
     "overrides": {
       "vite@4.5.5": "npm:@els-js/vite@4.5.5-tuxcare.1"
     }
     ```
    
   * **Option 2: Manual Update**

     Manually update your `package.json` file by replacing your Vite dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <CodeWithCopy>

     ```text
     "dependencies": {
       "vite": "npm:@els-js/vite@4.5.5-tuxcare.1"
     }
     ```

     </CodeWithCopy>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the Vite library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

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

7. You've successfully installed the Tuxcare ELS version of the Vite library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Vite ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/vite/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/vite/).

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
  npm install vite@npm:@els-js/vite@4.5.5-tuxcare.2
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

Fixes for the following vulnerabilities are available in ELS for Vite from TuxCare versions:

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2025-24010 | Direct   | Medium   | vite               | < 4.5.5, >= 5.0.0 < 5.4.12, >= 6.0.0 < 6.0.9 |
| CVE-2025-31125 | Direct   | High     | vite               | < 4.5.11, >= 5.0.0 < 5.4.16, >= 6.0.0 < 6.0.13, >= 6.1.0 < 6.1.3, >= 6.2.0 < 6.2.4 |
| CVE-2025-30208 | Direct   | High     | vite               | < 4.5.10, >= 5.0.0 < 5.4.15, >= 6.0.0 < 6.0.12, >= 6.1.0 < 6.1.2, >= 6.2.0 < 6.2.3 |
| CVE-2025-32395 | Direct   | Medium   | vite               | < 6.2.6, < 6.1.5, < 6.0.15, < 5.4.18, < 4.5.13 |
| CVE-2025-46565 | Direct   | Medium   | vite               | < 4.5.14, >= 5.0.0 < 5.4.19, >= 6.0.0 < 6.1.6, >= 6.2.0 < 6.2.7, >= 6.3.0 < 6.3.4 |
| CVE-2025-31486 | Direct   | Medium   | vite               | > 6.0.0 |
| CVE-2025-58751 | Direct   | Low      | vite               | < 5.4.20, >= 6.0.0 < 6.3.6, >= 7.0.0 < 7.0.7, >= 7.1.0 < 7.1.5 |
| CVE-2025-58752 | Direct   | Low      | vite               | < 5.4.20, >= 6.0.0 < 6.3.6, >= 7.0.0 < 7.0.7, >= 7.1.0 < 7.1.5 |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

