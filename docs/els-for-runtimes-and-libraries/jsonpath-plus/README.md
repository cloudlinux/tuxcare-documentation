# JSONPath Plus

Endless Lifecycle Support (ELS) for JSONPath Plus from TuxCare provides security fixes for JSONPath Plus versions that have reached their end of life. This allows you to continue running JSONPath Plus applications without vulnerability concerns, even after official support has ended.

## Supported JSONPath Plus Versions

* JSONPath Plus 7.2.0

## Connection to ELS for JSONPath Plus Library

This guide outlines the steps needed to integrate the TuxCare ELS for the JSONPath Plus library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS JSONPath Plus library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for JSONPath Plus

TuxCare provides ELS for JSONPath Plus as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your JSONPath Plus project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-jsonpath-plus-project/
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

4. Update your `package.json` file to replace your JSONPath Plus dependencies with the TuxCare packages:

   <CodeWithCopy>

   ```text
   "dependencies": {
     "jsonpath-plus": "npm:@els-js/jsonpath-plus@7.2.0-tuxcare.1"
   }
   ```

   </CodeWithCopy>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the JSONPath Plus library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   You will see an output like:

   ```text
    added 1 package, and audited 2 packages in 819ms

    found 0 vulnerabilities
   ```

7. You've successfully installed the Tuxcare ELS version of the JSONPath Plus library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for JSONPath Plus ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/jsonpath-plus/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/jsonpath-plus/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.2`), there are two options:

* **Option 1**. Run the `npm install` command with the specific version. This will automatically update both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install jsonpath-plus@npm:@els-js/jsonpath-plus@7.2.0-tuxcare.2
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

Fixes for the following vulnerabilities are available in ELS for JSONPath Plus from TuxCare versions:

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2024-21534 | Direct   | Critical | jsonpath-plus     | 0.1.0 - 10.1.0    |
| CVE-2025-1302  | Direct   | High     | jsonpath-plus     | < 10.3.0          |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
