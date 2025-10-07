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

4. Update your `package.json` file to replace your express dependencies with the TuxCare packages:

   <CodeWithCopy>

   ```text
   "dependencies": {
     "express": "npm:@els-js/express@3.21.2-tuxcare.2"
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

   You will see an output like:

   ```text
    added 98 packages, and audited 99 packages in 2s

    28 vulnerabilities (5 low, 1 moderate, 17 high, 5 critical)
   ```

7. You've successfully installed the Tuxcare ELS version of the express library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for express ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/express/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/express/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.2`), there are two options:

* **Option 1**. Run the `npm install` command with the specific version. This will automatically update both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install express@npm:@els-js/express@3.21.2-tuxcare.2
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

Fixes for the following vulnerabilities are available in ELS for express from TuxCare versions:

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2024-29041 | Direct   | Medium   | express           | < 4.19.2, >= 5.0.0-alpha.1 < 5.0.0-beta.3 |
| CVE-2024-9266  | Direct   | Medium   | express           | >= 3.4.5 < 4.0.0 |
| CVE-2024-43796 | Direct   | Medium   | express           | < 4.20.0 |
| CVE-2024-10491 | Direct   | Medium   | express           | <= 3.21.4 |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
