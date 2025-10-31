# @sentry/browser

Endless Lifecycle Support (ELS) for @sentry/browser from TuxCare provides security fixes for @sentry/browser versions that have reached their end of life. This allows you to continue running @sentry/browser applications without vulnerability concerns, even after official support has ended.

## Supported @sentry/browser Versions

* @sentry/browser 5.7.1

## Connection to ELS for @sentry/browser Library

This guide outlines the steps needed to integrate the TuxCare ELS for the @sentry/browser library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS @sentry/browser library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for @sentry/browser

TuxCare provides ELS for @sentry/browser as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your @sentry/browser project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-sentry-browser-project/
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

4. Update your `package.json` file to replace your @sentry/browser dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the @sentry/browser version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     <CodeWithCopy>

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     </CodeWithCopy>

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "@sentry/browser": "^5.7.1"
     }
     ```

     to:

     ```text
     "dependencies": {
       "@sentry/browser": "npm:@els-js/sentry-browser@5.7.1-tuxcare.2"
     },
     "overrides": {
       "@sentry/browser@5.7.1": "npm:@els-js/sentry-browser@5.7.1-tuxcare.2"
     }
     ```
    
   * **Option 2: Manual Update**

     Manually update your `package.json` file by replacing your @sentry/browser dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@sentry/browser": "npm:@els-js/sentry-browser@5.7.1-tuxcare.2"
     }
     ```

     </CodeWithCopy>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the @sentry/browser library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   You will see an output like:

   ```text
   added 7 packages, and audited 8 packages in 4s

   found 0 vulnerabilities
   ```

7. You've successfully installed the Tuxcare ELS version of the @sentry/browser library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for @sentry/browser ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/sentry-browser/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/sentry-browser/).

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
  npm install @sentry/browser@npm:@els-js/sentry-browser@5.7.1-tuxcare.2
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

Fixes for the following vulnerabilities are available in ELS for @sentry/browser from TuxCare versions:

| CVE ID              | CVE Type | Severity | Affected Libraries    | Vulnerable Versions |
| :------------------:| :------: |:--------:|:---------------------:| :----------------: |
| GHSA-593m-55hh-j8gv | Direct   | Moderate | @sentry/browser       | < 7.119.1, >= 8.0.0-alpha.1, < 8.33.0 |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
