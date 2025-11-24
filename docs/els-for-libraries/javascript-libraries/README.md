# JavaScript Libraries

Endless Lifecycle Support (ELS) for Libraries from TuxCare provides security fixes for a variety of JavaScript Libraries. This allows you to continue running your JavaScript applications without vulnerability concerns, even after official support has ended.

## Supported JavaScript Libraries

* **ansi-html** 0.0.7
* **base64url** 0.0.6
* **bson** 0.5.7, 1.0.9
* **braces** 2.3.2
* **copy-anything** 2.0.6
* **cookie** 0.4.2
* **crypto-js** 3.3.0
* **debug** 4.1.1
* **dompurify** 2.3.0, 2.4.3
* **express** 3.21.2
* **express-jwt** 0.1.3
* **form-data** 2.3.3
* **formidable** 2.1.2
* **http-proxy-middleware** 0.19.1, 2.0.8
* **i18next** 23.16.8
* **ini** 1.3.5
* **ip** 1.1.5, 2.0.0
* **jsonpath-plus** 7.2.0
* **jspdf** 2.5.2
* **marked** 4.0.9
* **micromatch** 3.1.10
* **minimatch** 3.0.4
* **multer** 1.4.5-lts
* **node-forge** 0.10.0
* **nth-check** 1.0.2
* **pdfjs-dist** 2.16.105
* **picocolors** 0.2.1
* **quill** 1.3.7
* **request** 2.88.0
* **rollup** 2.1.0, 2.26.5, 2.38.4, 2.79.1, 2.79.2
* **semver** 7.1.3, 7.3.2
* **sentry-browser** 5.7.1
* **ssr-window** 4.0.2
* **terser** 4.6.10, 4.8.1, 5.3.0, 5.5.1
* **tough-cookie** 2.4.3, 2.5.0
* **ua-parser-js** 0.7.21
* **webpack-subresource-integrity** 1.4.0
* **xml2js** 0.4.23
* **yargs-parser** 11.1.1

Other libraries upon request.

## Connection to ELS for JavaScript Libraries Repository

This guide outlines the steps needed to integrate the TuxCare ELS for JavaScript Libraries repository into your JavaScript application. The repository provides trusted JavaScript libraries that can be easily integrated into your **NPM** projects.

### Step 1: Get Token

You need a token in order to use TuxCare ELS JavaScript Libraries repository. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Set Up ELS for JavaScript Libraries

TuxCare provides ELS for JavaScript libraries as NPM packages, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your JavaScript project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-javascript-project/
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

4. Update your `package.json` file to replace your JavaScript library dependencies with the TuxCare packages. You can do this in two ways:

    * **Option 1: TuxCare Patcher (Automated)**

      Install the Patcher globally and run it. The TuxCare Patcher automatically detects the JavaScript library versions in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

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

      Manually update your `package.json` file by replacing your JavaScript library dependencies with the TuxCare packages. This method gives you full control over which packages to update.

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

6. Run the following command to install the ELS version of the JavaScript libraries (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

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

7. You've successfully installed the Tuxcare ELS version of the JavaScript libraries into your project.

### Step 3: Verify Installation

1. To confirm the TuxCare JavaScript Libraries repository is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The npm tool should be able to identify and resolve dependencies from the TuxCare ELS for JavaScript Libraries repository.

### Conclusion

You've successfully integrated the TuxCare ELS for JavaScript Libraries repository into your project. You can now benefit from the secure and vetted JavaScript libraries it provides.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for JavaScript Libraries ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/).

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

## Resolved CVEs in ELS for JavaScript Libraries

Fixes for the following vulnerabilities are available in ELS for JavaScript Libraries from TuxCare versions:

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2020-15084 | Direct   | Critical | express-jwt        | <= 5.3.3           |
| CVE-2020-7610  | Direct   | Critical | bson               | >= 1.0.0, < 1.1.4 |
| CVE-2020-7788  | Direct   | Critical | ini                | < 1.3.6            |
| CVE-2023-26136 | Direct   | Critical | tough-cookie       | < 4.1.3            |
| CVE-2023-46233 | Direct   | Critical | crypto-js          | < 4.2.0            |
| CVE-2024-21534 | Direct   | Critical | jsonpath-plus      | 0.1.0 - 10.1.0     |
| CVE-2024-48910 | Direct   | Critical | dompurify          | < 2.4.2            |
| CVE-2025-7783  | Direct   | Critical | form-data          | < 2.5.4, 3.0.0 - 3.0.3, 4.0.0 - 4.0.3 |
| CVE-2018-13863 | Direct   | High     | bson               | >= 0.5.0, < 1.0.5 |
| CVE-2021-23424 | Direct   | High     | ansi-html          | < 0.0.8            |
| CVE-2021-3803  | Direct   | High     | nth-check         | < 2.0.1            |
| CVE-2022-21680 | Direct   | High     | marked            | < 4.0.10           |
| CVE-2022-21681 | Direct   | High     | marked            | < 4.0.10           |
| CVE-2022-24771 | Direct   | High     | node-forge        | < 1.3.0            |
| CVE-2022-24772 | Direct   | High     | node-forge        | < 1.3.0            |
| CVE-2022-25858 | Direct   | High     | terser            | < 4.8.1, >= 5.0.0 < 5.14.2 |
| CVE-2022-25883 | Direct   | High     | semver            | < 5.7.2, >= 6.0.0 < 6.3.1, >= 7.0.0 < 7.5.3 |
| CVE-2022-3517  | Direct   | High     | minimatch         | <= 3.0.5           |
| CVE-2024-21536 | Direct   | High     | http-proxy-middleware | < 2.0.7, >= 3.0.0, < 3.0.3 |
| CVE-2024-29415 | Direct   | High     | ip                | <= 2.0.1           |
| CVE-2024-4068  | Direct   | High     | braces            | < 3.0.3            |
| AIKIDO-2024-10543 | Direct   | High     | i18next           | 17.0.2 - 24.1.1    |
| CVE-2024-4367  | Direct   | High     | pdfjs-dist        | Firefox < 126, Firefox ESR < 115.11 and Thunderbird < 115.11 |
| CVE-2025-1302  | Direct   | High     | jsonpath-plus     | < 10.3.0           |
| CVE-2025-29907 | Direct   | High     | jspdf             | < 3.0.1            |
| CVE-2025-30360 | Direct   | High     | webpack-dev-server | < 5.2.1            |
| CVE-2025-47935 | Direct   | High     | multer            | < 2.0.0            |
| CVE-2025-47944 | Direct   | High     | multer            | >= 1.4.4-lts.1 < 2.0.0 |
| CVE-2025-48997 | Direct   | High     | multer            | >= 1.4.4-lts.1 < 2.0.1 |
| CVE-2025-57810 | Direct   | High     | jspdf             | < 3.0.2            |
| CVE-2025-7338  | Direct   | High     | multer            | >= 1.4.4-lts.1, < 2.0.2 |
| AIKIDO-2025-10093 | Direct   | High     | ssr-window        | 2.0.0-beta.1 - 4.0.2 |
| CVE-2020-7733  | Direct   | High     | ua-parser-js      | < 0.7.22           |
| CVE-2020-7793  | Direct   | High     | ua-parser-js      | < 0.7.23           |
| CVE-2021-27292 | Direct   | High     | ua-parser-js      | >= 0.7.14, < 0.7.24 |
| CVE-2017-16137 | Direct   | Medium   | debug             | >= 2.0.0, < 2.6.9, >= 3.0.0, < 3.1.0 |
| CVE-2020-7608  | Direct   | Medium   | yargs-parser      | < 5.0.1, ≥ 6.0.0 < 13.1.2, ≥ 14.0.0 < 15.0.1, ≥ 16.0.0 < 18.1.1 |
| CVE-2023-0842  | Direct   | Medium   | xml2js            | 0.4.23             |
| CVE-2023-28155 | Direct   | Medium   | request           | <= 2.88.1          |
| CVE-2024-10491 | Direct   | Medium   | express           | <= 3.21.4          |
| CVE-2024-29041 | Direct   | Medium   | express           | < 4.19.2, >= 5.0.0-alpha.1 < 5.0.0-beta.3 |
| CVE-2024-47764 | Direct   | Medium   | cookie            | < 0.7.0            |
| CVE-2024-4067  | Direct   | Medium   | micromatch        | < 4.0.8            |
| CVE-2024-43796 | Direct   | Medium   | express           | < 4.20.0           |
| CVE-2024-45801 | Direct   | Medium   | dompurify         | < 2.5.4, >= 3.0.0 < 3.1.3 |
| CVE-2024-47068 | Direct   | Medium   | rollup            | < 2.79.2, < 3.29.5, < 4.22.4 |
| CVE-2024-47875 | Direct   | Medium   | dompurify         | < 2.5.0, >= 3.0.0 < 3.1.3 |
| CVE-2024-9266  | Direct   | Medium   | express           | >= 3.4.5 < 4.0.0   |
| CVE-2025-26791 | Direct   | Medium   | dompurify         | < 3.2.4            |
| CVE-2025-30359 | Direct   | Medium   | webpack-dev-server | < 5.2.1            |
| CVE-2025-32997 | Direct   | Medium   | http-proxy-middleware | < 2.0.9, 3.x < 3.0.5 |
| AIKIDO-2025-10177 | Direct   | Medium   | copy-anything     | 1.0.0 - 4.0.3      |
| GHSA-593m-55hh-j8gv | Direct   | Moderate | @sentry/browser   | < 7.119.1, >= 8.0.0-alpha.1, < 8.33.0 |
| GHSA-rvg8-pwq2-xj7q | Direct   | Moderate | base64url         | < 3.0.0            |
| CVE-2025-46653 | Direct   | Low      | formidable        | >= 2.1.0, < 3.5.3  |
| CVE-2020-15262 | Direct   | Low      | webpack-subresource-integrity | < 1.5.1            |
| AIKIDO-2024-10030 | Direct   | Low      | Quill             | 0.0.1 - 1.3.7      |
| AIKIDO-2024-10093 | Direct   | Low      | picocolors        | 0.1.0 - 1.0.0      |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

