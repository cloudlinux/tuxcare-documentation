# Angular

Endless Lifecycle Support (ELS) for Angular from TuxCare provides security fixes for Angular versions that have reached their end of life. This allows you to continue running Angular applications without vulnerability concerns, even after official support has ended.

## Supported Angular Versions

Angular versions 14, 15, 16, 17, and 18 are supported.

## Connection to ELS for Angular Repository
  
This guide outlines the steps needed to integrate the TuxCare ELS for Angular repository.

## Step 1: Get Token

You need a token in order to use TuxCare ELS Angular repository. Anonymous access is disabled. To receive the token, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for Angular

TuxCare provides ELS for Angular as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

1. Navigate to the root directory of your Angular project.
2. Create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-angular-project/
   ├── src/
   ├── angular.json
   ├── package.json
   ├── .npmrc         ⚠️ ← Create it here
   └── tsconfig.json
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

4. Update your `package.json` file to replace your Angular dependencies with the TuxCare packages.

   <TableTabs label="Choose Angular version: " >

     <template #Angular_14>

      <CodeWithCopy>

      ```text
      "dependencies": {
        "@angular/animations": "npm:@els-js/angular-animations@14.3.0-tuxcare.1",
        "@angular/common": "npm:@els-js/angular-common@14.3.0-tuxcare.1",
        "@angular/compiler": "npm:@els-js/angular-compiler@14.3.0-tuxcare.1",
        "@angular/core": "npm:@els-js/angular-core@14.3.0-tuxcare.1",
        "@angular/forms": "npm:@els-js/angular-forms@14.3.0-tuxcare.1",
        "@angular/platform-browser": "npm:@els-js/angular-platform-browser@14.3.0-tuxcare.1",
        "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@14.3.0-tuxcare.1",
        "@angular/router": "npm:@els-js/angular-router@14.3.0-tuxcare.1",
        "rxjs": "^7.4.0",
        "tslib": "^2.3.0",
        "zone.js": "~0.11.4"
      },
      "devDependencies": {
        "@angular-devkit/build-angular": "^14.2.13",
        "@angular/cli": "~14.2.13",
        "@angular/compiler-cli": "^14.2.0",
        "@types/jasmine": "~4.0.0",
        "jasmine-core": "~4.3.0",
        "karma": "~6.4.0",
        "karma-chrome-launcher": "~3.1.0",
        "karma-coverage": "~2.2.0",
        "karma-jasmine": "~5.1.0",
        "karma-jasmine-html-reporter": "~2.0.0",
        "typescript": "~4.7.2"
      },
      "overrides": 
      {
        "@angular/animations": "npm:@els-js/angular-animations@14.3.0-tuxcare.1",
        "@angular/common": "npm:@els-js/angular-common@14.3.0-tuxcare.1",
        "@angular/compiler": "npm:@els-js/angular-compiler@14.3.0-tuxcare.1",
        "@angular/core": "npm:@els-js/angular-core@14.3.0-tuxcare.1",
        "@angular/forms": "npm:@els-js/angular-forms@14.3.0-tuxcare.1",
        "@angular/platform-browser": "npm:@els-js/angular-platform-browser@14.3.0-tuxcare.1",
        "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@14.3.0-tuxcare.1",
        "@angular/router": "npm:@els-js/angular-router@14.3.0-tuxcare.1",
        "rxjs": "^7.4.0",
        "@babel/runtime": "7.26.10",
        "esbuild": "0.25.0",
        "webpack-dev-middleware": "5.3.4",
        "webpack-dev-server": "5.2.1",
        "webpack": "5.94.0",
        "tmp": "^0.2.4",
        "*": {
          "tmp": "^0.2.4"
        }
      }
      ```

      </CodeWithCopy>

      :::tip
      If you use any of the following **non-default Angular modules**, update their versions as shown below:
       
      * "@angular/elements": "npm:@els-js/angular-elements@14.3.0-tuxcare.1",
      * "@angular/upgrade": "npm:@els-js/angular-upgrade@14.3.0-tuxcare.1",
      * "@angular/platform-server": "npm:@els-js/angular-platform-server@14.3.0-tuxcare.1",
      * "@angular/localize": "npm:@els-js/angular-localize@14.3.0-tuxcare.1",
      * "@angular/language-service": "npm:@els-js/angular-language-service@14.3.0-tuxcare.1",
      * "@angular/service-worker": "npm:@els-js/angular-service-worker@14.3.0-tuxcare.1",
       
      After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
      :::
     </template>

     <template #Angular_15>

      <CodeWithCopy>

      ```text
      "dependencies": {
        "@angular/animations": "npm:@els-js/angular-animations@15.2.10-tuxcare.1",
        "@angular/common": "npm:@els-js/angular-common@15.2.10-tuxcare.1",
        "@angular/compiler": "npm:@els-js/angular-compiler@15.2.10-tuxcare.1",
        "@angular/core": "npm:@els-js/angular-core@15.2.10-tuxcare.1",
        "@angular/forms": "npm:@els-js/angular-forms@15.2.10-tuxcare.1",
        "@angular/platform-browser": "npm:@els-js/angular-platform-browser@15.2.10-tuxcare.1",
        "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@15.2.10-tuxcare.1",
        "@angular/router": "npm:@els-js/angular-router@15.2.10-tuxcare.1", 
        "rxjs": "^7.4.0",
        "tslib": "^2.3.0",
        "zone.js": "~0.12.0"
      },
      "devDependencies": {
        "@angular-devkit/build-angular": "^15.2.11",
        "@angular/cli": "~15.2.11",
        "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@15.2.10-tuxcare.1",
        "@types/jasmine": "~4.3.0",
        "jasmine-core": "~4.5.0",
        "karma": "~6.4.0",
        "karma-chrome-launcher": "~3.1.0",
        "karma-coverage": "~2.2.0",
        "karma-jasmine": "~5.1.0",
        "karma-jasmine-html-reporter": "~2.0.0",
        "typescript": "~4.9.4"
      },
      "overrides": {
        "@angular/animations": "npm:@els-js/angular-animations@15.2.10-tuxcare.1",
        "@angular/common": "npm:@els-js/angular-common@15.2.10-tuxcare.1",
        "@angular/compiler": "npm:@els-js/angular-compiler@15.2.10-tuxcare.1",
        "@angular/core": "npm:@els-js/angular-core@15.2.10-tuxcare.1",
        "@angular/forms": "npm:@els-js/angular-forms@15.2.10-tuxcare.1",
        "@angular/platform-browser": "npm:@els-js/angular-platform-browser@15.2.10-tuxcare.1",
        "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@15.2.10-tuxcare.1",
        "@angular/router": "npm:@els-js/angular-router@15.2.10-tuxcare.1",
        "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@15.2.10-tuxcare.1",
        "rxjs": "^7.4.0",
        "@babel/runtime": "7.26.10",
        "esbuild": "0.25.0",
        "webpack-dev-server": "5.2.1",
        "webpack": "5.94.0",
        "tmp": "^0.2.4",
        "*": {
          "tmp": "^0.2.4"
        }
      }
      ```

      </CodeWithCopy>

      :::tip
      If you use any of the following **non-default Angular modules**, update their versions as shown below:
       
      * "@angular/elements": "npm:@els-js/angular-elements@15.2.10-tuxcare.1",
      * "@angular/upgrade": "npm:@els-js/angular-upgrade@15.2.10-tuxcare.1",
      * "@angular/platform-server": "npm:@els-js/angular-platform-server@15.2.10-tuxcare.1",
      * "@angular/localize": "npm:@els-js/angular-localize@15.2.10-tuxcare.1",
      * "@angular/language-service": "npm:@els-js/angular-language-service@15.2.10-tuxcare.1",
      * "@angular/service-worker": "npm:@els-js/angular-service-worker@15.2.10-tuxcare.1",
       
      After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
      :::
     </template>

     <template #Angular_16>

      <CodeWithCopy>

      ```text
      "dependencies": {
        "@angular/animations": "npm:@els-js/angular-animations@16.2.12-tuxcare.1",
        "@angular/common": "npm:@els-js/angular-common@16.2.12-tuxcare.1",
        "@angular/compiler": "npm:@els-js/angular-compiler@16.2.12-tuxcare.1",
        "@angular/core": "npm:@els-js/angular-core@16.2.12-tuxcare.1",
        "@angular/forms": "npm:@els-js/angular-forms@16.2.12-tuxcare.1",
        "@angular/platform-browser": "npm:@els-js/angular-platform-browser@16.2.12-tuxcare.1",
        "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@16.2.12-tuxcare.1",
        "@angular/router": "npm:@els-js/angular-router@16.2.12-tuxcare.1",
        "rxjs": "^7.4.0",
        "tslib": "^2.3.0",
        "zone.js": "~0.13.0"
      },
      "devDependencies": {
        "@angular-devkit/build-angular": "^16.2.12",
        "@angular/cli": "^16.2.12",
        "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@16.2.12-tuxcare.1",
        "@types/jasmine": "~4.3.0",
        "@types/node": "^18.7.0",
        "jasmine-core": "~4.6.0",
        "karma": "~6.4.0",
        "karma-chrome-launcher": "~3.2.0",
        "karma-coverage": "~2.2.0",
        "karma-jasmine": "~5.1.0",
        "karma-jasmine-html-reporter": "~2.1.0",
        "typescript": "~5.1.3"
      },
      "overrides": 
      {
        "@angular/animations": "npm:@els-js/angular-animations@16.2.12-tuxcare.1",
        "@angular/common": "npm:@els-js/angular-common@16.2.12-tuxcare.1",
        "@angular/compiler": "npm:@els-js/angular-compiler@16.2.12-tuxcare.1",
        "@angular/core": "npm:@els-js/angular-core@16.2.12-tuxcare.1",
        "@angular/forms": "npm:@els-js/angular-forms@16.2.12-tuxcare.1",
        "@angular/platform-browser": "npm:@els-js/angular-platform-browser@16.2.12-tuxcare.1",
        "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@16.2.12-tuxcare.1",
        "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@16.2.12-tuxcare.1",
        "@angular/router": "npm:@els-js/angular-router@16.2.12-tuxcare.1",
        "rxjs": "^7.4.0",
        "@babel/runtime": "7.26.10",
        "esbuild": "0.25.0",
        "webpack-dev-server": "5.2.1",
        "tmp": "^0.2.4",
        "*": {
          "tmp": "^0.2.4"
        }
      }
      ```

      </CodeWithCopy>

      :::tip
      If you use any of the following **non-default Angular modules**, update their versions as shown below:
       
      * "@angular/animations": "npm:@els-js/angular-animations@16.2.12-tuxcare.1",
      * "@angular/upgrade": "npm:@els-js/angular-upgrade@16.2.12-tuxcare.1",
      * "@angular/platform-server": "npm:@els-js/angular-platform-server@16.2.12-tuxcare.1",
      * "@angular/service-worker": "npm:@els-js/angular-service-worker@16.2.12-tuxcare.1"
       
      After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
      :::
     </template>

     <template #Angular_17>

      :::tip
      Use "SSR ON" if your project is configured with Server-Side Rendering, otherwise use "SSR OFF".
      
      To check whether your Angular project is configured with Server-Side Rendering, look for `@angular/ssr` listed in your original `package.json` file before replacing dependencies. If you see `@angular/ssr` listed, **SSR is ON**, otherwise **SSR is OFF**.
      :::

      <CodeTabs :tabs="[
        { title: 'SSR ON', content: Angular17WithSSR },
        { title: 'SSR OFF', content: Angular17WithoutSSR }
      ]" />

      :::tip
      If you use any of the following **non-default Angular modules**, update their versions as shown below:
       
      * "@angular/animations": "npm:@els-js/angular-animations@17.3.12-tuxcare.1",
      * "@angular/upgrade": "npm:@els-js/angular-upgrade@17.3.12-tuxcare.1",
      * "@angular/platform-server": "npm:@els-js/angular-platform-server@17.3.12-tuxcare.1",
      * "@angular/service-worker": "npm:@els-js/angular-service-worker@17.3.12-tuxcare.1"
       
      After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
      :::
     </template>

     <template #Angular_18>

      :::tip
      Use "SSR ON" if your project is configured with Server-Side Rendering, otherwise use "SSR OFF".
      
      To check whether your Angular project is configured with Server-Side Rendering, look for `@angular/ssr` listed in your original `package.json` file before replacing dependencies. If you see `@angular/ssr` listed, **SSR is ON**, otherwise **SSR is OFF**.
      :::

      <CodeTabs :tabs="[
        { title: 'SSR ON', content: Angular18WithSSR },
        { title: 'SSR OFF', content: Angular18WithoutSSR }
      ]" />

      :::tip
      If you use any of the following **non-default Angular modules**, update their versions as shown below:
       
      * "@angular/language-service": "npm:@els-js/angular-language-service@18.2.13-tuxcare.1",
      * "@angular/upgrade": "npm:@els-js/angular-upgrade@18.2.13-tuxcare.1",
      * "@angular/elements": "npm:@els-js/angular-elements@18.2.13-tuxcare.1",
      * "@angular/service-worker": "npm:@els-js/angular-service-worker@18.2.13-tuxcare.1",
       
      After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
      :::
     </template>

   <!--
     <template #Angular_19>

      :::tip
      Use "SSR ON" if your project is configured with Server-Side Rendering, otherwise use "SSR OFF".
      
      To check whether your Angular project is configured with Server-Side Rendering, look for `@angular/ssr` listed in your original `package.json` file before replacing dependencies. If you see `@angular/ssr` listed, **SSR is ON**, otherwise **SSR is OFF**.
      :::

      <CodeTabs :tabs="[
        { title: 'SSR ON', content: Angular19WithSSR },
        { title: 'SSR OFF', content: Angular19WithoutSSR }
      ]" />

      :::tip
      If you use any of the following **non-default Angular modules**, update their versions as shown below:
       
      * "@angular/animations": "npm:@els-js/angular-animations@19.2.14-tuxcare.2",
      * "@angular/elements": "npm:@els-js/angular-elements@19.2.14-tuxcare.2",
      * "@angular/language-service": "npm:@els-js/angular-language-service@19.2.14-tuxcare.2",
      * "@angular/localize": "npm:@els-js/angular-localize@19.2.14-tuxcare.2",
      * "@angular/upgrade": "npm:@els-js/angular-upgrade@19.2.14-tuxcare.2",
      * "@angular/platform-server": "npm:@els-js/angular-platform-server@19.2.14-tuxcare.2",
      * "@angular/service-worker": "npm:@els-js/angular-service-worker@19.2.14-tuxcare.2",
       
      After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
      :::
     </template>
   -->

   </TableTabs>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:
   
   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Ensure your npm is up to date. 

   :::tip
   
   Use npm version **9.6.3 or later** for security and compatibility reasons. To update npm globally on your system, you can run:

   <CodeWithCopy>

   ```text  
   npm install -g npm@latest
   ```

   </CodeWithCopy>

   :::

7. Run the following command to install ELS for Angular dependencies (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

   <CodeWithCopy>
  
   ```text
   npm install
   ```
  
   </CodeWithCopy>

   You will see an output like:

   ```text
   added 925 packages, and audited 926 packages in 3m
 
   158 packages are looking for funding
     run `npm fund` for details

   found 0 vulnerabilities
   ```

6. You've successfully integrated the TuxCare ELS for Angular repository into your project.

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), you need to update the version string in your `package.json`, remove installed files and clear npm cache to avoid conflicts:

  <CodeWithCopy>

  ```text
  rm -rf node_modules package-lock.json && npm cache clean --force
  npm install
  ```

  </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Angular from TuxCare versions:

<TableTabs label="Choose Angular version: " >

<template #Angular__14>

| CVE ID         | CVE Type | Severity |  Affected Library | Vulnerable Versions |
| :------------: | :------: | :------: | :---------------: | :-----------------: |
| CVE-2024-29180 | Transitive | High | webpack-dev-middleware | <=5.3.3 |
| CVE-2025-27789 | Transitive | Moderate | @babel/runtime | <7.26.10 |
| GHSA-67mh-4wv8-2f99 | Transitive | Moderate | esbuild | <=0.24.2 |
| CVE-2025-30360 | Transitive | Moderate | webpack-dev-server | <=5.2.0 |
| CVE-2025-30359 | Transitive | Moderate | webpack-dev-server | <=5.2.0 |
| CVE-2024-43788 | Transitive | Moderate | webpack | 5.0.0-alpha.0 - 5.93.0 |
| CVE-2025-54798 | Transitive | Low | tmp | <=0.2.3 |

  </template>

<template #Angular__15>

| CVE ID         | CVE Type | Severity |  Affected Library | Vulnerable Versions |
| :------------: | :------: | :------: | :---------------: | :-----------------: |
| CVE-2025-27789 | Transitive | Moderate | @babel/runtime | <7.26.10 |
| GHSA-67mh-4wv8-2f99 | Transitive | Moderate | esbuild | <=0.24.2 |
| CVE-2025-30360 | Transitive | Moderate | webpack-dev-server | <=5.2.0 |
| CVE-2025-30359 | Transitive | Moderate | webpack-dev-server | <=5.2.0 |
| CVE-2024-43788 | Transitive | Moderate | webpack | 5.0.0-alpha.0 - 5.93.0 |
| CVE-2025-54798 | Transitive | Low | tmp | <=0.2.3 |

  </template>

<template #Angular__16>

| CVE ID         | CVE Type | Severity |  Affected Library | Vulnerable Versions |
| :------------: | :------: | :------: | :---------------: | :-----------------: |
| CVE-2025-27789 | Transitive | Moderate | @babel/runtime | <7.26.10 |
| GHSA-67mh-4wv8-2f99 | Transitive | Moderate | esbuild | <=0.24.2 |
| CVE-2025-32997 | Transitive | Moderate | http-proxy-middleware | 1.3.0 - 2.0.8 |
| CVE-2025-30360 | Transitive | Moderate | webpack-dev-server | <=5.2.0 |
| CVE-2025-30359 | Transitive | Moderate | webpack-dev-server | <=5.2.0 |
| CVE-2025-54798 | Transitive | Low | tmp | <=0.2.3 |

  </template>

<template #Angular__17>

| CVE ID         | CVE Type | Severity |  Affected Library | Vulnerable Versions |
| :------------: | :------: | :------: | :---------------: | :-----------------: |
| GHSA-67mh-4wv8-2f99 | Transitive | Moderate | esbuild | <=0.24.2 |
| CVE-2025-32997 | Transitive | Moderate | http-proxy-middleware | 1.3.0 - 2.0.8 |
| CVE-2025-30360 | Transitive | Moderate | webpack-dev-server | <=5.2.0 |
| CVE-2025-30359 | Transitive | Moderate | webpack-dev-server | <=5.2.0 |
| CVE-2025-54798 | Transitive | Low | tmp | <=0.2.3 |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

<script setup>
const Angular19WithSSR =
`"dependencies": {
  "@angular/common": "npm:@els-js/angular-common@19.2.14-tuxcare.2",
  "@angular/compiler": "npm:@els-js/angular-compiler@19.2.14-tuxcare.2",
  "@angular/core": "npm:@els-js/angular-core@19.2.14-tuxcare.2",
  "@angular/forms": "npm:@els-js/angular-forms@19.2.14-tuxcare.2",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@19.2.14-tuxcare.2",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@19.2.14-tuxcare.2",
  "@angular/platform-server": "npm:@els-js/angular-platform-server@19.2.14-tuxcare.2",
  "@angular/router": "npm:@els-js/angular-router@19.2.14-tuxcare.2",
  "@angular/ssr": "^19.2.15",
  "express": "^4.18.2",
  "rxjs": "~7.8.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.15.0"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^19.2.15",
  "@angular/cli": "^19.2.15",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@19.2.14-tuxcare.2",
  "@types/express": "^4.17.17",
  "@types/jasmine": "~5.1.0",
  "@types/node": "^18.18.0",
  "jasmine-core": "~5.6.0",
  "karma": "~6.4.0",
  "karma-chrome-launcher": "~3.2.0",
  "karma-coverage": "~2.2.0",
  "karma-jasmine": "~5.1.0",
  "karma-jasmine-html-reporter": "~2.1.0",
  "typescript": "~5.7.2"
},
"overrides": {
  "@angular/common": "npm:@els-js/angular-common@19.2.14-tuxcare.2",
  "@angular/compiler": "npm:@els-js/angular-compiler@19.2.14-tuxcare.2",
  "@angular/core": "npm:@els-js/angular-core@19.2.14-tuxcare.2",
  "@angular/forms": "npm:@els-js/angular-forms@19.2.14-tuxcare.2",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@19.2.14-tuxcare.2",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@19.2.14-tuxcare.2",
  "@angular/platform-server": "npm:@els-js/angular-platform-server@19.2.14-tuxcare.2",
  "@angular/router": "npm:@els-js/angular-router@19.2.14-tuxcare.2",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@19.2.14-tuxcare.2",
  "@angular/localize": "npm:@els-js/angular-localize@19.2.14-tuxcare.2",
  "@angular/service-worker": "npm:@els-js/angular-service-worker@19.2.14-tuxcare.2"
}`

const Angular19WithoutSSR =
`"dependencies": {
  "@angular/common": "npm:@els-js/angular-common@19.2.14-tuxcare.2",
  "@angular/compiler": "npm:@els-js/angular-compiler@19.2.14-tuxcare.2",
  "@angular/core": "npm:@els-js/angular-core@19.2.14-tuxcare.2",
  "@angular/forms": "npm:@els-js/angular-forms@19.2.14-tuxcare.2",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@19.2.14-tuxcare.2",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@19.2.14-tuxcare.2",
  "@angular/router": "npm:@els-js/angular-router@19.2.14-tuxcare.2",
  "rxjs": "~7.8.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.15.0"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^19.2.15",
  "@angular/cli": "^19.2.15",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@19.2.14-tuxcare.2",
  "@types/jasmine": "~5.1.0",
  "jasmine-core": "~5.6.0",
  "karma": "~6.4.0",
  "karma-chrome-launcher": "~3.2.0",
  "karma-coverage": "~2.2.0",
  "karma-jasmine": "~5.1.0",
  "karma-jasmine-html-reporter": "~2.1.0",
  "typescript": "~5.7.2"
},
"overrides": {
  "@angular/common": "npm:@els-js/angular-common@19.2.14-tuxcare.2",
  "@angular/compiler": "npm:@els-js/angular-compiler@19.2.14-tuxcare.2",
  "@angular/core": "npm:@els-js/angular-core@19.2.14-tuxcare.2",
  "@angular/forms": "npm:@els-js/angular-forms@19.2.14-tuxcare.2",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@19.2.14-tuxcare.2",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@19.2.14-tuxcare.2",
  "@angular/router": "npm:@els-js/angular-router@19.2.14-tuxcare.2",
  "@angular/platform-server": "npm:@els-js/angular-platform-server@19.2.14-tuxcare.2",
  "@angular/service-worker": "npm:@els-js/angular-service-worker@19.2.14-tuxcare.2",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@19.2.14-tuxcare.2"
}`

 const Angular18WithSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-js/angular-animations@18.2.13-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@18.2.13-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@18.2.13-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@18.2.13-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@18.2.13-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@18.2.13-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@18.2.13-tuxcare.1",
  "@angular/platform-server": "npm:@els-js/angular-platform-server@18.2.13-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@18.2.13-tuxcare.1",
  "@angular/ssr": "^18.2.20",
  "express": "^4.18.2", 
  "rxjs": "^7.4.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.14.10"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^18.2.20",
  "@angular/cli": "^18.2.20",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@18.2.13-tuxcare.1",
  "@types/express": "^4.17.17",
  "@types/jasmine": "~5.1.0",
  "@types/node": "^18.18.0",
  "jasmine-core": "~5.2.0",
  "karma": "~6.4.0",
  "karma-chrome-launcher": "~3.2.0",
  "karma-coverage": "~2.2.0",
  "karma-jasmine": "~5.1.0",
  "karma-jasmine-html-reporter": "~2.1.0",
  "typescript": "~5.5.2"
},
"overrides": {
  "@angular/animations": "npm:@els-js/angular-animations@18.2.13-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@18.2.13-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@18.2.13-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@18.2.13-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@18.2.13-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@18.2.13-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@18.2.13-tuxcare.1",
  "@angular/platform-server": "npm:@els-js/angular-platform-server@18.2.13-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@18.2.13-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@18.2.13-tuxcare.1",
  "rxjs": "^7.4.0",
  "esbuild": "^0.25.0",
  "tmp": "^0.2.4",
  "*": {
    "tmp": "^0.2.4"
  }
}`

const Angular18WithoutSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-js/angular-animations@18.2.13-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@18.2.13-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@18.2.13-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@18.2.13-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@18.2.13-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@18.2.13-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@18.2.13-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@18.2.13-tuxcare.1", 
  "rxjs": "^7.4.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.14.10"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^18.2.20",
  "@angular/cli": "^18.2.20",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@18.2.13-tuxcare.1",
  "@types/jasmine": "~5.1.0",
  "jasmine-core": "~5.2.0",
  "karma": "~6.4.0",
  "karma-chrome-launcher": "~3.2.0",
  "karma-coverage": "~2.2.0",
  "karma-jasmine": "~5.1.0",
  "karma-jasmine-html-reporter": "~2.1.0",
  "typescript": "~5.5.2"
},
"overrides": {
  "@angular/animations": "npm:@els-js/angular-animations@18.2.13-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@18.2.13-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@18.2.13-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@18.2.13-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@18.2.13-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@18.2.13-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@18.2.13-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@18.2.13-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@18.2.13-tuxcare.1",
  "rxjs": "^7.4.0",
  "esbuild": "^0.25.0",
  "tmp": "^0.2.4",
  "*": {
    "tmp": "^0.2.4"
  }
}`

const Angular17WithSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-js/angular-animations@17.3.12-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@17.3.12-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@17.3.12-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@17.3.12-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@17.3.12-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@17.3.12-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@17.3.12-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@17.3.12-tuxcare.1", 
  "@angular/ssr": "^17.3.17",
  "express": "^4.18.2", 
  "rxjs": "^7.4.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.14.3"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^17.3.12",
  "@angular/cli": "^17.3.12",
  "@angular/compiler-cli": "^17.3.0", 
  "@types/express": "^4.17.17",
  "@types/jasmine": "~5.1.0",
  "jasmine-core": "~5.1.0",
  "karma": "~6.4.0",
  "karma-chrome-launcher": "~3.2.0",
  "karma-coverage": "~2.2.0",
  "karma-jasmine": "~5.1.0",
  "karma-jasmine-html-reporter": "~2.1.0",
  "typescript": "~5.4.2"
},
"overrides": 
{
  "@angular/animations": "npm:@els-js/angular-animations@17.3.12-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@17.3.12-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@17.3.12-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@17.3.12-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@17.3.12-tuxcare.1", 
  "@angular/localize": "npm:@els-js/angular-localize@17.3.12-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@17.3.12-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@17.3.12-tuxcare.1",
  "@angular/platform-server": "npm:@els-js/angular-platform-server@17.3.12-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@17.3.12-tuxcare.1",
  "rxjs": "^7.4.0",
  "esbuild": "0.25.0",
  "webpack-dev-server": "5.2.1",
  "http-proxy-middleware": "2.0.9",
  "tmp": "^0.2.4",
  "*": {
    "tmp": "^0.2.4"
  }
}`

const Angular17WithoutSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-js/angular-animations@17.3.12-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@17.3.12-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@17.3.12-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@17.3.12-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@17.3.12-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@17.3.12-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@17.3.12-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@17.3.12-tuxcare.1",
  "rxjs": "^7.4.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.14.3"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^17.3.12",
  "@angular/cli": "^17.3.12",
  "@angular/compiler-cli": "^17.3.0",
  "@types/jasmine": "~5.1.0",
  "jasmine-core": "~5.1.0",
  "karma": "~6.4.0",
  "karma-chrome-launcher": "~3.2.0",
  "karma-coverage": "~2.2.0",
  "karma-jasmine": "~5.1.0",
  "karma-jasmine-html-reporter": "~2.1.0",
  "typescript": "~5.4.2"
},
"overrides": 
{
  "@angular/animations": "npm:@els-js/angular-animations@17.3.12-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@17.3.12-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@17.3.12-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@17.3.12-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@17.3.12-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@17.3.12-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@17.3.12-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@17.3.12-tuxcare.1",
  "rxjs": "^7.4.0",
  "esbuild": "0.25.0",
  "webpack-dev-server": "5.2.1",
  "http-proxy-middleware": "2.0.9",
  "tmp": "^0.2.4",
  "*": {
    "tmp": "^0.2.4"
  }
}`
</script>
