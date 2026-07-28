# Ember.js

Endless Lifecycle Support (ELS) for Ember.js from TuxCare provides security fixes for Ember.js versions that have reached their end of life. This allows you to continue running Ember.js applications without vulnerability concerns, even after official support has ended.

## Supported Ember.js Versions

* Ember.js 0.2.7, 1.13.11, 2.18.2, 3.28.6, 4.12.13

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

TuxCare publishes patched **transitive** dependencies for supported Ember.js versions as NPM packages on a secure internal registry. Choose your Ember.js version below for the exact package list and `overrides`.

<ELSPrerequisites>

* **npm** package manager installed
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_js) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. **Create or update the .npmrc file**

   Navigate to the root directory of your Ember.js project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-ember-project/
   ├── node_modules/
   ├── package.json
   ├── .npmrc         ⚠️ ← Create it here
   └── package-lock.json
   ```

2. **Configure the npm registry**

   Use an editor of your choice (e.g., VS Code) to add the following registry address lines to the `.npmrc` file:

   ```text
   registry=https://registry.npmjs.org/
   @els-js:registry=https://nexus.repo.tuxcare.com/repository/els_js/
   //nexus.repo.tuxcare.com/repository/els_js/:_auth=${TOKEN}
   ```

   :::warning
   Replace `${TOKEN}` with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

3. **Update dependencies**

   Update your `package.json` so the transitive versions for your Ember.js version resolve to TuxCare packages. You can do this in two ways:

     <TableTabs label="Choose Ember.js version: " >

      <template #ember_0.2.7>

      ```text
      "dependencies": {
        "body-parser": "npm:@els-js/body-parser@>=1.8.4-tuxcare.1",
        "chownr": "npm:@els-js/chownr@>=0.0.2-tuxcare.1",
        "clean-css": "npm:@els-js/clean-css@>=2.2.23-tuxcare.1",
        "concat-stream": "npm:@els-js/concat-stream@>=1.4.8-tuxcare.1",
        "cross-spawn": "npm:@els-js/cross-spawn@>=0.2.9-tuxcare.1",
        "decompress-zip": "npm:@els-js/decompress-zip@>=0.1.0-tuxcare.1",
        "deep-extend": "npm:@els-js/deep-extend@>=0.2.11-tuxcare.1",
        "es5-ext": "npm:@els-js/es5-ext@>=0.10.7-tuxcare.1",
        "forwarded": "npm:@els-js/forwarded@>=0.1.0-tuxcare.1",
        "fresh": "npm:@els-js/fresh@>=0.2.4-tuxcare.1",
        "got": "npm:@els-js/got@>=2.9.2-tuxcare.1",
        "hoek": "npm:@els-js/hoek@>=2.14.0-tuxcare.1",
        "ini": "npm:@els-js/ini@>=1.3.3-tuxcare.1",
        "is-my-json-valid": "npm:@els-js/is-my-json-valid@>=2.10.1-tuxcare.1",
        "js-yaml": "npm:@els-js/js-yaml@>=3.3.1-tuxcare.1",
        "json5": "npm:@els-js/json5@>=0.5.1-tuxcare.1",
        "jsonpointer": "npm:@els-js/jsonpointer@>=1.1.0-tuxcare.1",
        "markdown-it": "npm:@els-js/markdown-it@>=4.0.3-tuxcare.1",
        "merge": "npm:@els-js/merge@>=1.2.1-tuxcare.1",
        "morgan": "npm:@els-js/morgan@>=1.5.3-tuxcare.1",
        "mout": "npm:@els-js/mout@>=0.11.0-tuxcare.1",
        "parsejson": "npm:@els-js/parsejson@>=0.0.3-tuxcare.1",
        "path-to-regexp": "npm:@els-js/path-to-regexp@>=0.1.3-tuxcare.1",
        "qs": "npm:@els-js/qs@>=2.4.2-tuxcare.1",
        "semver": "npm:@els-js/semver@>=2.3.2-tuxcare.1",
        "shell-quote": "npm:@els-js/shell-quote@>=1.4.3-tuxcare.1",
        "stringstream": "npm:@els-js/stringstream@>=0.0.4-tuxcare.1",
        "tar": "npm:@els-js/tar@>=2.1.1-tuxcare.1",
        "tar-fs": "npm:@els-js/tar-fs@>=1.5.1-tuxcare.1",
        "tough-cookie": "npm:@els-js/tough-cookie@>=1.2.0-tuxcare.1",
        "tunnel-agent": "npm:@els-js/tunnel-agent@>=0.4.0-tuxcare.1",
        "uglify-js": "npm:@els-js/uglify-js@>=1.1.1-tuxcare.1",
        "websocket-extensions": "npm:@els-js/websocket-extensions@>=0.1.1-tuxcare.1",
        "xmldom": "npm:@els-js/xmldom@>=0.1.31-tuxcare.1"
      },
      "overrides": {
        "body-parser@1.8.4": "npm:@els-js/body-parser@>=1.8.4-tuxcare.1",
        "chownr@0.0.2": "npm:@els-js/chownr@>=0.0.2-tuxcare.1",
        "clean-css@2.2.23": "npm:@els-js/clean-css@>=2.2.23-tuxcare.1",
        "concat-stream@1.4.8": "npm:@els-js/concat-stream@>=1.4.8-tuxcare.1",
        "cross-spawn@0.2.9": "npm:@els-js/cross-spawn@>=0.2.9-tuxcare.1",
        "decompress-zip@0.1.0": "npm:@els-js/decompress-zip@>=0.1.0-tuxcare.1",
        "deep-extend@0.2.11": "npm:@els-js/deep-extend@>=0.2.11-tuxcare.1",
        "es5-ext@0.10.7": "npm:@els-js/es5-ext@>=0.10.7-tuxcare.1",
        "forwarded@0.1.0": "npm:@els-js/forwarded@>=0.1.0-tuxcare.1",
        "fresh@0.2.4": "npm:@els-js/fresh@>=0.2.4-tuxcare.1",
        "got@2.9.2": "npm:@els-js/got@>=2.9.2-tuxcare.1",
        "hoek@2.12.0": "npm:@els-js/hoek@>=2.12.0-tuxcare.1",
        "hoek@2.14.0": "npm:@els-js/hoek@>=2.14.0-tuxcare.1",
        "ini@1.3.3": "npm:@els-js/ini@>=1.3.3-tuxcare.1",
        "is-my-json-valid@2.10.1": "npm:@els-js/is-my-json-valid@>=2.10.1-tuxcare.1",
        "js-yaml@3.3.1": "npm:@els-js/js-yaml@>=3.3.1-tuxcare.1",
        "json5@0.5.1": "npm:@els-js/json5@>=0.5.1-tuxcare.1",
        "jsonpointer@1.1.0": "npm:@els-js/jsonpointer@>=1.1.0-tuxcare.1",
        "markdown-it@4.0.3": "npm:@els-js/markdown-it@>=4.0.3-tuxcare.1",
        "merge@1.2.1": "npm:@els-js/merge@>=1.2.1-tuxcare.1",
        "morgan@1.5.3": "npm:@els-js/morgan@>=1.5.3-tuxcare.1",
        "mout@0.11.0": "npm:@els-js/mout@>=0.11.0-tuxcare.1",
        "parsejson@0.0.3": "npm:@els-js/parsejson@>=0.0.3-tuxcare.1",
        "path-to-regexp@0.1.3": "npm:@els-js/path-to-regexp@>=0.1.3-tuxcare.1",
        "qs@2.2.5": "npm:@els-js/qs@>=2.2.5-tuxcare.1",
        "qs@2.4.2": "npm:@els-js/qs@>=2.4.2-tuxcare.1",
        "semver@2.3.2": "npm:@els-js/semver@>=2.3.2-tuxcare.1",
        "shell-quote@1.4.3": "npm:@els-js/shell-quote@>=1.4.3-tuxcare.1",
        "stringstream@0.0.4": "npm:@els-js/stringstream@>=0.0.4-tuxcare.1",
        "tar@2.1.1": "npm:@els-js/tar@>=2.1.1-tuxcare.1",
        "tar-fs@1.5.1": "npm:@els-js/tar-fs@>=1.5.1-tuxcare.1",
        "tough-cookie@1.2.0": "npm:@els-js/tough-cookie@>=1.2.0-tuxcare.1",
        "tunnel-agent@0.4.0": "npm:@els-js/tunnel-agent@>=0.4.0-tuxcare.1",
        "uglify-js@1.1.1": "npm:@els-js/uglify-js@>=1.1.1-tuxcare.1",
        "websocket-extensions@0.1.1": "npm:@els-js/websocket-extensions@>=0.1.1-tuxcare.1",
        "xmldom@0.1.31": "npm:@els-js/xmldom@>=0.1.31-tuxcare.1"
      }
      ```

      </template>

      <template #ember_1.13.11>

      * **Option 1: Manual update**

        ```text
        "dependencies": {
          "ember-cli": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
        },
        "overrides": {
          "ember-cli@1.13.11": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
        }
        ```

      * **Option 2: TuxCare Patcher (Automated)**

        ```text
        npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
        tuxcare-patch-js
        ```

        The patcher will update your `package.json`, for example, from:

        ```text
        "dependencies": {
          "ember-cli": "1.13.11"
        }
        ```

        to:

        ```text
        "dependencies": {
          "ember-cli": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
        },
        "overrides": {
          "ember-cli@1.13.11": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
        }
        ```

      </template>

      <template #ember_2.18.2>

      * **Option 1: Manual update**

        ```text
        "dependencies": {
          "terser": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
          "rollup": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
          "printf": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
          "markdown-it": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
          "clean-css": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
        },
        "overrides": {
          "terser@3.17.0": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
          "rollup@0.41.6": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
          "printf@0.5.3": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
          "markdown-it@8.4.2": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
          "clean-css@3.4.28": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
        }
        ```

      * **Option 2: TuxCare Patcher (Automated)**

        ```text
        npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
        tuxcare-patch-js
        ```

        The patcher will update your `package.json`, for example, from:

        ```text
        "dependencies": {
          "terser": "3.17.0",
          "rollup": "0.41.6",
          "printf": "0.5.3",
          "markdown-it": "8.4.2",
          "clean-css": "3.4.28"
        }
        ```

        to:

        ```text
        "dependencies": {
          "terser": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
          "rollup": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
          "printf": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
          "markdown-it": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
          "clean-css": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
        },
        "overrides": {
          "terser@3.17.0": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
          "rollup@0.41.6": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
          "printf@0.5.3": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
          "markdown-it@8.4.2": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
          "clean-css@3.4.28": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
        }
        ```

      </template>

      <template #ember_3.28.6>

      * **Option 1: Manual update**

        ```text
        "dependencies": {
          "rollup": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
          "markdown-it": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
          "diff": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
        },
        "overrides": {
          "rollup@0.57.1": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
          "markdown-it@13.0.2": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
          "diff@7.0.0": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
        }
        ```

      * **Option 2: TuxCare Patcher (Automated)**

        Install the Patcher globally and run it. The TuxCare Patcher updates your `package.json` so these library versions use the corresponding TuxCare `@els-js/*` packages.

        ```text
        npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
        tuxcare-patch-js
        ```

        The patcher will update your `package.json`, for example, from:

        ```text
        "dependencies": {
          "rollup": "0.57.1",
          "markdown-it": "13.0.2",
          "diff": "7.0.0"
        }
        ```

        to:

        ```text
        "dependencies": {
          "rollup": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
          "markdown-it": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
          "diff": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
        },
        "overrides": {
          "rollup@0.57.1": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
          "markdown-it@13.0.2": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
          "diff@7.0.0": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
        }
        ```

      </template>

      <template #ember_4.12.13>

      * **Option 1: Manual update**

        ```text
        "dependencies": {
          "@babel/runtime": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
          "tmp": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
        },
        "overrides": {
          "@babel/runtime@7.12.18": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
          "tmp@0.0.28": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
        }
        ```

      * **Option 2: TuxCare Patcher (Automated)**

        ```text
        npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
        tuxcare-patch-js
        ```

        The patcher will update your `package.json`, for example, from:

        ```text
        "dependencies": {
          "@babel/runtime": "7.12.18",
          "tmp": "0.0.28"
        }
        ```

        to:

        ```text
        "dependencies": {
          "@babel/runtime": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
          "tmp": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
        },
        "overrides": {
          "@babel/runtime@7.12.18": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
          "tmp@0.0.28": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
        }
        ```

      </template>

     </TableTabs>

4. **Refresh the project dependencies**

   Remove `node_modules`, `package-lock.json`, and clear the npm cache:

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   Install dependencies:

   ```text
   npm install
   ```

   The token for the TuxCare repository is automatically picked up from your `.npmrc` file.

5. **Verify the setup**

   Use npm to list the project's dependencies and confirm TuxCare packages are resolved correctly:

   ```text
   npm list
   ```

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS registry.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (Nexus, credentials required)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>
