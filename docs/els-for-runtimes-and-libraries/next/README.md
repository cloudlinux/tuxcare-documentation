# Next.js

Endless Lifecycle Support (ELS) for Next.js from TuxCare provides security fixes for Next.js versions that have reached their end of life. This allows you to continue running Next.js applications without vulnerability concerns, even after official support has ended.

## Supported Next.js Versions

* Next.js 13.5.11

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
   @els-js:registry=https://nexus.repo.tuxcare.com/repository/els_js/
   //nexus.repo.tuxcare.com/repository/els_js/:_auth=${TOKEN}
   ```

   </CodeWithCopy>

   :::warning
   Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

4. Update your `package.json` file to replace your Next.js dependencies with the TuxCare packages:

   <CodeWithCopy>

   ```text
   "dependencies": {
     "next": "npm:@els-js/next@13.5.11-tuxcare.1"
   }
   ```

   </CodeWithCopy>

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

   You will see an output like:

   ```text
    added 21 packages, and audited 22 packages in 4s

    3 packages are looking for funding
    run `npm fund` for details
    
    found 0 vulnerabilities
   ```

7. You've successfully installed the Tuxcare ELS version of the Next.js library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Next.js ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/next/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/next/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.2`), there are two options:

* **Option 1**. Run the `npm install` command with the specific version. This will automatically update both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install next@npm:@els-js/next@13.5.11-tuxcare.2
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

Fixes for the following vulnerabilities are available in ELS for Next.js from TuxCare versions:

|     CVE ID     | CVE Type | Severity | Affected Libraries |      Vulnerable Versions       |
|:--------------:| :------: |:--------:|:------------------:|:------------------------------:|
| CVE-2025-57822 | Direct   | High     |        next        | < 14.2.32, >= 15.0.0, < 15.4.7 |
| CVE-2024-51479 | Direct   | High     |        next        |      >= 9.5.5, < 14.2.15       |
| CVE-2024-47831 | Direct   | High     |        next        |      >= 10.0.0, < 14.2.7       |
| CVE-2024-34351 | Direct   | High     |        next        |      >= 13.4.0, < 14.1.1       |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
