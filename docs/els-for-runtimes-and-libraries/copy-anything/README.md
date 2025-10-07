# copy-anything

Endless Lifecycle Support (ELS) for copy-anything from TuxCare provides security fixes for copy-anything versions that have reached their end of life. This allows you to continue running copy-anything applications without vulnerability concerns, even after official support has ended.

## Supported copy-anything Versions

* copy-anything 2.0.6

## Connection to ELS for copy-anything Library

This guide outlines the steps needed to integrate the TuxCare ELS for the copy-anything library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS copy-anything library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for copy-anything

TuxCare provides ELS for copy-anything as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your copy-anything project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-copy-anything-project/
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

4. Update your `package.json` file to replace your copy-anything dependencies with the TuxCare packages:

   <CodeWithCopy>

   ```text
   "dependencies": {
     "copy-anything": "npm:@els-js/copy-anything@2.0.6-tuxcare.2"
   }
   ```

   </CodeWithCopy>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the copy-anything library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

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

7. You've successfully installed the Tuxcare ELS version of the copy-anything library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for copy-anything ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/copy-anything/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/copy-anything/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), there are two options:

* **Option 1**. Run the `npm install` command with the specific version. This will automatically update both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install copy-anything@npm:@els-js/copy-anything@2.0.6-tuxcare.3
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

Fixes for the following vulnerabilities are available in ELS for copy-anything from TuxCare versions:

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| AIKIDO-2025-10177 | Direct   | Medium   | copy-anything     | 1.0.0 - 4.0.3     |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
