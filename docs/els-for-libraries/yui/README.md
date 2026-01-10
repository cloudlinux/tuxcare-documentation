# YUI

Endless Lifecycle Support (ELS) for YUI from TuxCare provides security fixes for YUI versions that have reached their end of life. This allows you to continue running YUI applications without vulnerability concerns, even after official support has ended.

## Supported YUI Versions

* YUI 3.18.1

## Connection to ELS for YUI Library

This guide outlines the steps needed to integrate the TuxCare ELS for the YUI library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS YUI library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for YUI

TuxCare provides ELS for YUI as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your YUI project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-yui-project/
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

4. Update your `package.json` file to add the following overrides for the TuxCare packages:

   <CodeWithCopy>

   ```text
   "overrides": {
     "hoek@0.9.1": "npm:@els-js/hoek@>=0.9.1-tuxcare.1",
     "mime@1.2.11": "npm:@els-js/mime@>=1.2.11-tuxcare.1",
     "tunnel-agent@0.4.3": "npm:@els-js/tunnel-agent@>=0.4.3-tuxcare.1",
     "qs@1.0.2": "npm:@els-js/qs@>=1.0.2-tuxcare.1",
     "hawk@1.1.1": "npm:@els-js/hawk@>=1.1.1-tuxcare.1",
     "form-data@0.1.4": "npm:@els-js/form-data@>=0.1.4-tuxcare.1"
   }
   ```

   </CodeWithCopy>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the YUI library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   npm install
   ```

   </CodeWithCopy>

## Step 3: Verify Installation

1. To confirm the TuxCare YUI library is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for YUI repository.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for YUI ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/yui/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/yui/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for YUI from TuxCare versions:

|    CVE ID     | CVE Type  | Severity | Affected Libraries | Vulnerable Versions |
|:-------------:|:---------:|:--------:|:------------------:|:-------------------:|
| CVE-2018-3728 | Transitive | High     | hoek               | < 4.2.0, >= 5.0.0 < 5.0.3 |
| CVE-2020-36604 | Transitive | High     | hoek               | < 8.5.1, >= 9.0 < 9.0.3 |
| CVE-2017-16138 | Transitive | High     | mime               | < 1.4.1, >= 2.0.1 < 2.0.3 |
| GHSA-xc7v-wxcw-j472 | Transitive | High     | tunnel-agent       | < 0.6.0 |
| CVE-2022-24999 | Transitive | High     | qs                 | - |
| CVE-2017-1000048 | Transitive | High     | qs                 | - |
| CVE-2022-29167 | Transitive | High     | hawk               | < 9.0.1 |
| CVE-2016-2515 | Transitive | High     | hawk               | 3.1.2, 4.1.0 |
| CVE-2025-7783 | Transitive | Critical | form-data          | - |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

