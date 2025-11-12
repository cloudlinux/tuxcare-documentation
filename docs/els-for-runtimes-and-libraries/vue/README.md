# Vue

Endless Lifecycle Support (ELS) for Vue from TuxCare provides security fixes for Vue versions that have reached their end of life. This allows you to continue running Vue applications without vulnerability concerns, even after official support has ended.

## Supported Vue Versions

* Vue 2.7.16

## Connection to ELS for Vue Library

This guide outlines the steps needed to integrate the TuxCare ELS for the Vue library.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Vue library. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Vue

TuxCare provides ELS for Vue as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Vue project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-vue-project/
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

4. Update your `package.json` file to replace your Vue dependencies with the TuxCare packages. You can do this in two ways:

   * **Option 1: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Vue version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.

     <CodeWithCopy>

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     </CodeWithCopy>

     The patcher will update your `package.json`, for example, from:

     ```text
     "dependencies": {
       "vue": "^2.7.16"
     }
     ```

     to:

     ```text
     "dependencies": {
       "vue": "npm:@els-js/vue@2.7.16-tuxcare.1"
     },
     "overrides": {
       "vue@2.7.16": "npm:@els-js/vue@2.7.16-tuxcare.1"
     }
     ```
    
   * **Option 2: Manual Update**

     Manually update your `package.json` file by replacing your Vue dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <CodeWithCopy>

     ```text
     "dependencies": {
       "vue": "npm:@els-js/vue@2.7.16-tuxcare.1"
     }
     ```

     </CodeWithCopy>

5. You need to remove the `node_modules` directory and the `pnpm-lock.yaml` file before installing the patched packages. Use the following command:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules pnpm-lock.yaml
   ```

   </CodeWithCopy>

6. Run the following command to install the ELS version of the Vue library (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>

   ```text
   pnpm install
   ```

   </CodeWithCopy>

   You will see an output like:

   ```text
    added 1 package, and audited 2 packages in 792ms
    
    found 0 vulnerabilities
   ```

7. You've successfully installed the Tuxcare ELS version of the Vue library into your project.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Vue ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_javascript/vue/](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/vue/).

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

  If you want to update a single TuxCare dependency, use the pnpm add command with the specific version. This automatically updates both `package.json` and `pnpm-lock.yaml`:

  <CodeWithCopy>

  ```text
  pnpm add vue@npm:@els-js/vue@2.7.16-tuxcare.2
  ```

  </CodeWithCopy>

* **Option 3: Manual Update via package.json (Multiple Dependencies)**

  If you want to update several TuxCare dependencies, manually update the version strings in your `package.json`, then remove installed files and clear npm cache to avoid conflicts:

  <CodeWithCopy>

  ```text
  rm -rf node_modules pnpm-lock.yaml
  pnpm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Vue from TuxCare versions:

| CVE ID         | CVE Type | Severity | Affected Libraries | Vulnerable Versions |
| :------------: | :------: |:--------:|:------------------:| :----------------: |
| CVE-2024-6783  | Direct   | Medium   | Vue                | >= 2.0.0 < 3.0.0 |
| CVE-2024-9506  | Direct   | Low      | Vue                | >= 2.0.0 < 3.0.0 |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
