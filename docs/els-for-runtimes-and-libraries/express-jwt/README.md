# express-jwt

Endless Lifecycle Support (ELS) for express-jwt from TuxCare provides security fixes for express-jwt versions that have reached their end of life. This allows you to continue running express-jwt applications without vulnerability concerns, even after official support has ended.

## Supported express-jwt Versions

* express-jwt 0.1.3

## Connection to ELS for express-jwt Library

This guide outlines the steps needed to integrate the TuxCare ELS for the express-jwt library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS express-jwt library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for express-jwt

TuxCare provides ELS for express-jwt as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your express-jwt project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-express-jwt-project/
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

4. Update your `package.json` file to replace your express-jwt dependencies with the TuxCare packages:

   <CodeWithCopy>

   ```text
   "dependencies": {
     "express-jwt": "npm:@els-js/express-jwt@0.1.3-tuxcare.2"
   }
   ```

   </CodeWithCopy>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the express-jwt library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

   You will see an output like:

   ```text
   added 16 packages, and audited 17 packages in 1s

   1 package is looking for funding
   run `npm fund` for details

   found 0 vulnerabilities
   ```

7. You've successfully installed the Tuxcare ELS version of the express-jwt library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for express-jwt ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/express-jwt/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/express-jwt/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.2`), there are two options:

* **Option 1**. Run the `npm install` command with the specific version. This will automatically update both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install express-jwt@npm:@els-js/express-jwt@0.1.3-tuxcare.2
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

Fixes for the following vulnerabilities are available in ELS for express-jwt from TuxCare versions:

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2020-15084 | Direct   | Critical | express-jwt       | <= 5.3.3          |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

