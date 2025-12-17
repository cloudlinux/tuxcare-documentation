# Angular

Endless Lifecycle Support (ELS) for Angular from TuxCare provides security fixes for Angular versions that have reached their end of life. This allows you to continue running Angular applications without vulnerability concerns, even after official support has ended.

## Supported Angular Versions

Angular versions 9, 10, 11, 12, 13, 14, 15, 16, 17, and 18 are supported.

## Connection to ELS for Angular Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Angular repository.

## Prerequisites

Before you begin, ensure you have **npm** up to date and you use version 9.6.3 or later for security and compatibility reasons.

* To check your current versions, run:
  
  <CodeWithCopy>

  ```text
  npm --version
  ```

  </CodeWithCopy>

* To update npm globally on your system, you can run:

   <CodeWithCopy>

   ```text  
   npm install -g npm@latest
   ```

   </CodeWithCopy>

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

4. Replace your Angular dependencies with TuxCare ones. You can use one of the following methods:

   * **Option 1: TuxCare Patcher (Automated)**

     Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Angular version in your `package.json` and updates your `dependencies` and `overrides` to use the corresponding TuxCare `@els-js/*` packages.


     <CodeWithCopy>

     ```text
     npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
     tuxcare-patch-js
     ```

     </CodeWithCopy>

   * **Option 2: Manual Update**

     Manually update your `package.json` file by replacing your Angular dependencies with the TuxCare packages. This method gives you full control over which packages to update.

     <TableTabs label="Choose Angular version: " >

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

     * "@angular/language-service": "npm:@els-js/angular-language-service@18.2.14-tuxcare.1",
     * "@angular/upgrade": "npm:@els-js/angular-upgrade@18.2.14-tuxcare.1",
     * "@angular/elements": "npm:@els-js/angular-elements@18.2.14-tuxcare.1",
     * "@angular/service-worker": "npm:@els-js/angular-service-worker@18.2.14-tuxcare.1",

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
 
     * "@angular/animations": "npm:@els-js/angular-animations@17.3.12-tuxcare.2",
     * "@angular/upgrade": "npm:@els-js/angular-upgrade@17.3.12-tuxcare.2",
     * "@angular/platform-server": "npm:@els-js/angular-platform-server@17.3.12-tuxcare.2",
     * "@angular/service-worker": "npm:@els-js/angular-service-worker@17.3.12-tuxcare.2"

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_16>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-js/angular-animations@16.2.12-tuxcare.3",
       "@angular/common": "npm:@els-js/angular-common@16.2.12-tuxcare.3",
       "@angular/compiler": "npm:@els-js/angular-compiler@16.2.12-tuxcare.3",
       "@angular/core": "npm:@els-js/angular-core@16.2.12-tuxcare.3",
       "@angular/forms": "npm:@els-js/angular-forms@16.2.12-tuxcare.3",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@16.2.12-tuxcare.3",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@16.2.12-tuxcare.3",
       "@angular/router": "npm:@els-js/angular-router@16.2.12-tuxcare.3",
       "rxjs": "^7.4.0",
       "tslib": "^2.3.0",
       "zone.js": "~0.13.0"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "^16.2.12",
       "@angular/cli": "^16.2.12",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@16.2.12-tuxcare.3",
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
     "overrides": {
       "@angular/animations": "npm:@els-js/angular-animations@16.2.12-tuxcare.3",
       "@angular/common": "npm:@els-js/angular-common@16.2.12-tuxcare.3",
       "@angular/compiler": "npm:@els-js/angular-compiler@16.2.12-tuxcare.3",
       "@angular/core": "npm:@els-js/angular-core@16.2.12-tuxcare.3",
       "@angular/forms": "npm:@els-js/angular-forms@16.2.12-tuxcare.3",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@16.2.12-tuxcare.3",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@16.2.12-tuxcare.3",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@16.2.12-tuxcare.3",
       "@angular/router": "npm:@els-js/angular-router@16.2.12-tuxcare.3",
       "@babel/runtime": "7.26.10",
       "esbuild": "0.25.0",
       "rxjs": "^7.4.0",
       "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
       "tmp@0.2.5": "npm:@els-js/tmp@0.2.1-tuxcare.1",
       "vite@4.5.5": "npm:@els-js/vite@4.5.5-tuxcare.1",
       "webpack-dev-server@4.15.1": "npm:@els-js/webpack-dev-server@4.15.1-tuxcare.1"
     },
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/animations": "npm:@els-js/angular-animations@16.2.12-tuxcare.3",
     * "@angular/upgrade": "npm:@els-js/angular-upgrade@16.2.12-tuxcare.3",
     * "@angular/platform-server": "npm:@els-js/angular-platform-server@16.2.12-tuxcare.3",
     * "@angular/service-worker": "npm:@els-js/angular-service-worker@16.2.12-tuxcare.3"

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_15>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-js/angular-animations@15.2.10-tuxcare.2",
       "@angular/common": "npm:@els-js/angular-common@15.2.10-tuxcare.2",
       "@angular/compiler": "npm:@els-js/angular-compiler@15.2.10-tuxcare.2",
       "@angular/core": "npm:@els-js/angular-core@15.2.10-tuxcare.2",
       "@angular/forms": "npm:@els-js/angular-forms@15.2.10-tuxcare.2",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@15.2.10-tuxcare.2",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@15.2.10-tuxcare.2",
       "@angular/router": "npm:@els-js/angular-router@15.2.10-tuxcare.2",
       "rxjs": "^7.4.0",
       "tslib": "^2.3.0",
       "zone.js": "~0.12.0"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "^15.2.11",
       "@angular/cli": "~15.2.11",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@15.2.10-tuxcare.2",
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
       "@angular/animations": "npm:@els-js/angular-animations@15.2.10-tuxcare.2",
       "@angular/common": "npm:@els-js/angular-common@15.2.10-tuxcare.2",
       "@angular/compiler": "npm:@els-js/angular-compiler@15.2.10-tuxcare.2",
       "@angular/core": "npm:@els-js/angular-core@15.2.10-tuxcare.2",
       "@angular/forms": "npm:@els-js/angular-forms@15.2.10-tuxcare.2",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@15.2.10-tuxcare.2",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@15.2.10-tuxcare.2",
       "@angular/router": "npm:@els-js/angular-router@15.2.10-tuxcare.2",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@15.2.10-tuxcare.2",
       "@babel/runtime": "7.26.10",
       "esbuild": "0.25.0",
       "rxjs": "^7.4.0",
       "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
       "tmp@0.2.5": "npm:@els-js/tmp@0.2.1-tuxcare.1",
       "webpack@5.76.1": "npm:@els-js/webpack@5.76.1-tuxcare.2",
       "webpack-dev-server@4.11.1": "npm:@els-js/webpack-dev-server@4.15.1-tuxcare.1"
     },
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-js/angular-elements@15.2.10-tuxcare.2",
     * "@angular/upgrade": "npm:@els-js/angular-upgrade@15.2.10-tuxcare.2",
     * "@angular/platform-server": "npm:@els-js/angular-platform-server@15.2.10-tuxcare.2",
     * "@angular/localize": "npm:@els-js/angular-localize@15.2.10-tuxcare.2",
     * "@angular/language-service": "npm:@els-js/angular-language-service@15.2.10-tuxcare.2",
     * "@angular/service-worker": "npm:@els-js/angular-service-worker@15.2.10-tuxcare.2",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_14>
 
     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-js/angular-animations@14.3.0-tuxcare.2",
       "@angular/common": "npm:@els-js/angular-common@14.3.0-tuxcare.2",
       "@angular/compiler": "npm:@els-js/angular-compiler@14.3.0-tuxcare.2",
       "@angular/core": "npm:@els-js/angular-core@14.3.0-tuxcare.2",
       "@angular/forms": "npm:@els-js/angular-forms@14.3.0-tuxcare.2",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@14.3.0-tuxcare.2",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@14.3.0-tuxcare.2",
       "@angular/router": "npm:@els-js/angular-router@14.3.0-tuxcare.2",
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
     "overrides": {
       "@angular/animations": "npm:@els-js/angular-animations@14.3.0-tuxcare.2",
       "@angular/common": "npm:@els-js/angular-common@14.3.0-tuxcare.2",
       "@angular/compiler": "npm:@els-js/angular-compiler@14.3.0-tuxcare.2",
       "@angular/core": "npm:@els-js/angular-core@14.3.0-tuxcare.2",
       "@angular/forms": "npm:@els-js/angular-forms@14.3.0-tuxcare.2",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@14.3.0-tuxcare.2",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@14.3.0-tuxcare.2",
       "@angular/router": "npm:@els-js/angular-router@14.3.0-tuxcare.2",
       "rxjs": "^7.4.0",
       "@babel/runtime": "7.26.10",
       "esbuild": "0.25.0",
       "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
       "tmp@0.2.5": "npm:@els-js/tmp@0.2.1-tuxcare.1",
       "webpack@5.76.1": "npm:@els-js/webpack@5.76.1-tuxcare.2",
       "webpack-dev-server@4.11.0": "npm:@els-js/webpack-dev-server@4.15.1-tuxcare.1",
       "webpack-dev-middleware@5.3.3": "npm:@els-js/webpack-dev-middleware@5.3.0-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:
 
     * "@angular/elements": "npm:@els-js/angular-elements@14.3.0-tuxcare.2",
     * "@angular/upgrade": "npm:@els-js/angular-upgrade@14.3.0-tuxcare.2",
     * "@angular/platform-server": "npm:@els-js/angular-platform-server@14.3.0-tuxcare.2",
     * "@angular/localize": "npm:@els-js/angular-localize@14.3.0-tuxcare.2",
     * "@angular/language-service": "npm:@els-js/angular-language-service@14.3.0-tuxcare.2",
     * "@angular/service-worker": "npm:@els-js/angular-service-worker@14.3.0-tuxcare.2",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_13>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-js/angular-animations@13.4.0-tuxcare.1",
       "@angular/common": "npm:@els-js/angular-common@13.4.0-tuxcare.1",
       "@angular/compiler": "npm:@els-js/angular-compiler@13.4.0-tuxcare.1",
       "@angular/core": "npm:@els-js/angular-core@13.4.0-tuxcare.1",
       "@angular/forms": "npm:@els-js/angular-forms@13.4.0-tuxcare.1",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@13.4.0-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@13.4.0-tuxcare.1",
       "@angular/router": "npm:@els-js/angular-router@13.4.0-tuxcare.1",
       "rxjs": "^7.4.0",
       "tslib": "^2.3.0",
       "zone.js": "~0.11.4"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "^13.0.4",
       "@angular/cli": "^13.0.4",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@13.4.0-tuxcare.1",
       "@types/express": "^4.17.17",
       "@types/jasmine": "~5.1.0",
       "@types/node": "^18.18.0",
       "jasmine-core": "~5.6.0",
       "karma": "~6.4.0",
       "karma-chrome-launcher": "~3.2.0",
       "karma-coverage": "~2.2.0",
       "karma-jasmine": "~5.1.0",
       "karma-jasmine-html-reporter": "~2.1.0",
       "typescript": "~4.5.5"
     },
     "overrides": {
       "@angular/animations": "npm:@els-js/angular-animations@13.4.0-tuxcare.1",
       "@angular/common": "npm:@els-js/angular-common@13.4.0-tuxcare.1",
       "@angular/compiler": "npm:@els-js/angular-compiler@13.4.0-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@13.4.0-tuxcare.1",
       "@angular/core": "npm:@els-js/angular-core@13.4.0-tuxcare.1",
       "@angular/forms": "npm:@els-js/angular-forms@13.4.0-tuxcare.1",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@13.4.0-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@13.4.0-tuxcare.1",
       "@angular/router": "npm:@els-js/angular-router@13.4.0-tuxcare.1",
       "rxjs": "^7.4.0",
       "@babel/runtime": "7.26.10",
       "esbuild": "0.25.0",
       "ip@1.1.9": "npm:@els-js/ip@1.1.5-tuxcare.2",
       "postcss@8.4.5": "npm:@els-js/postcss@8.3.6-tuxcare.2",
       "semver@7.3.5": "npm:@els-js/semver@7.3.2-tuxcare.2",
       "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
       "tmp@0.2.5": "npm:@els-js/tmp@0.2.1-tuxcare.1",
       "webpack@5.76.1": "npm:@els-js/webpack@5.76.1-tuxcare.2",
       "webpack-dev-middleware@5.3.0": "npm:@els-js/webpack-dev-middleware@5.3.0-tuxcare.2",
       "webpack-dev-server@4.7.3": "npm:@els-js/webpack-dev-server@4.7.3-tuxcare.2"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-js/angular-elements@13.4.0-tuxcare.1",
     * "@angular/upgrade": "npm:@els-js/angular-upgrade@13.4.0-tuxcare.1",
     * "@angular/platform-server": "npm:@els-js/angular-platform-server@13.4.0-tuxcare.1",
     * "@angular/localize": "npm:@els-js/angular-localize@13.4.0-tuxcare.1",
     * "@angular/language-service": "npm:@els-js/angular-language-service@13.4.0-tuxcare.1",
     * "@angular/service-worker": "npm:@els-js/angular-service-worker@13.4.0-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_12>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-js/angular-animations@12.2.17-tuxcare.1",
       "@angular/common": "npm:@els-js/angular-common@12.2.17-tuxcare.1",
       "@angular/compiler": "npm:@els-js/angular-compiler@12.2.17-tuxcare.1",
       "@angular/core": "npm:@els-js/angular-core@12.2.17-tuxcare.1",
       "@angular/forms": "npm:@els-js/angular-forms@12.2.17-tuxcare.1",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@12.2.17-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@12.2.17-tuxcare.1",
       "@angular/router": "npm:@els-js/angular-router@12.2.17-tuxcare.1",
       "rxjs": "~6.6.0",
       "tslib": "^2.3.0",
       "zone.js": "~0.11.4"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "~12.2.18",
       "@angular/cli": "~12.2.18",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@12.2.17-tuxcare.1",
       "@types/jasmine": "~3.8.0",
       "@types/node": "^12.11.1",
       "jasmine-core": "~3.8.0",
       "karma": "~6.3.0",
       "karma-chrome-launcher": "~3.1.0",
       "karma-coverage": "~2.0.3",
       "karma-jasmine": "~4.0.0",
       "karma-jasmine-html-reporter": "~1.7.0",
       "typescript": "~4.2.4"
     },
     "overrides": {
       "@angular/animations": "npm:@els-js/angular-animations@12.2.17-tuxcare.1",
       "@angular/common": "npm:@els-js/angular-common@12.2.17-tuxcare.1",
       "@angular/compiler": "npm:@els-js/angular-compiler@12.2.17-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@12.2.17-tuxcare.1",
       "@angular/core": "npm:@els-js/angular-core@12.2.17-tuxcare.1",
       "@angular/forms": "npm:@els-js/angular-forms@12.2.17-tuxcare.1",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@12.2.17-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@12.2.17-tuxcare.1",
       "@angular/router": "npm:@els-js/angular-router@12.2.17-tuxcare.1",
       "@babel/runtime": "7.26.10",
       "ansi-html@0.0.7": "npm:@els-js/ansi-html@0.0.7-tuxcare.1",
       "esbuild": "0.25.0",
       "braces@2.3.2": "npm:@els-js/braces@2.3.2-tuxcare.1",
       "http-proxy-middleware@0.19.1": "npm:@els-js/http-proxy-middleware@0.19.1-tuxcare.1",
       "ip@1.1.5": "npm:@els-js/ip@1.1.5-tuxcare.2",
       "loader-utils@2.0.0": "npm:@els-js/loader-utils@2.0.0-tuxcare.1",
       "micromatch@3.1.10": "npm:@els-js/micromatch@3.1.10-tuxcare.1",
       "minimatch@3.0.4": "npm:@els-js/minimatch@3.0.4-tuxcare.1",
       "node-forge@0.10.0": "npm:@els-js/node-forge@0.10.0-tuxcare.2",
       "postcss@7.0.39": "npm:@els-js/postcss@7.0.39-tuxcare.2",
       "postcss@8.3.6": "npm:@els-js/postcss@8.3.6-tuxcare.2",
       "rxjs": "~6.6.0",
       "semver@7.3.5": "npm:@els-js/semver@7.3.2-tuxcare.2",
       "terser@5.7.1": "npm:@els-js/terser@5.5.1-tuxcare.2",
       "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
       "tmp@0.2.5": "npm:@els-js/tmp@0.2.1-tuxcare.1",
       "webpack@5.50.0": "npm:@els-js/webpack@5.50.0-tuxcare.2",
       "webpack-dev-middleware@3.7.3": "npm:@els-js/webpack-dev-middleware@3.7.2-tuxcare.2",
       "webpack-dev-middleware@5.0.0": "npm:@els-js/webpack-dev-middleware@5.0.0-tuxcare.2",
       "webpack-dev-server@3.11.3": "npm:@els-js/webpack-dev-server@3.11.0-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-js/angular-elements@12.2.17-tuxcare.1",
     * "@angular/upgrade": "npm:@els-js/angular-upgrade@12.2.17-tuxcare.1",
     * "@angular/platform-server": "npm:@els-js/angular-platform-server@12.2.17-tuxcare.1",
     * "@angular/localize": "npm:@els-js/angular-localize@12.2.17-tuxcare.1",
     * "@angular/language-service": "npm:@els-js/angular-language-service@12.2.17-tuxcare.1",
     * "@angular/service-worker": "npm:@els-js/angular-service-worker@12.2.17-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_11>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-js/angular-animations@11.2.14-tuxcare.1",
       "@angular/common": "npm:@els-js/angular-common@11.2.14-tuxcare.1",
       "@angular/compiler": "npm:@els-js/angular-compiler@11.2.14-tuxcare.1",
       "@angular/core": "npm:@els-js/angular-core@11.2.14-tuxcare.1",
       "@angular/forms": "npm:@els-js/angular-forms@11.2.14-tuxcare.1",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@11.2.14-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@11.2.14-tuxcare.1",
       "@angular/router": "npm:@els-js/angular-router@11.2.14-tuxcare.1",
       "rxjs": "^6.6.7",
       "tslib": "^2.0.0",
       "zone.js": "~0.11.4"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "0.1102.14",
       "@angular/cli": "11.2.14",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@11.2.14-tuxcare.1",
       "@types/jasmine": "3.10.3",
       "@types/node": "^12.11.1",
       "jasmine-core": "~3.10.0",
       "karma": "~6.3.20",
       "karma-chrome-launcher": "~3.1.0",
       "karma-coverage": "~2.0.3",
       "karma-jasmine": "~4.0.0",
       "karma-jasmine-html-reporter": "~1.7.0",
       "typescript": "4.0.8"
     },
     "overrides": {
       "@angular/animations": "npm:@els-js/angular-animations@11.2.14-tuxcare.1",
       "@angular/common": "npm:@els-js/angular-common@11.2.14-tuxcare.1",
       "@angular/compiler": "npm:@els-js/angular-compiler@11.2.14-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@11.2.14-tuxcare.1",
       "@angular/core": "npm:@els-js/angular-core@11.2.14-tuxcare.1",
       "@angular/forms": "npm:@els-js/angular-forms@11.2.14-tuxcare.1",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@11.2.14-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@11.2.14-tuxcare.1",
       "@angular/router": "npm:@els-js/angular-router@11.2.14-tuxcare.1",
       "@babel/runtime": "7.26.10",
       "ansi-html@0.0.7": "npm:@els-js/ansi-html@0.0.7-tuxcare.1",
       "braces@2.3.2": "npm:@els-js/braces@2.3.2-tuxcare.1",
       "form-data@2.3.3": "@els-js/form-data@2.3.3-tuxcare.2",
       "http-cache-semantics@4.2.0": "npm:@els-js/http-cache-semantics@3.8.1-tuxcare.2",
       "http-proxy-middleware@0.19.1": "npm:@els-js/http-proxy-middleware@0.19.1-tuxcare.1",
       "ip@1.1.9": "npm:@els-js/ip@1.1.5-tuxcare.2",
       "loader-utils@2.0.0": "npm:@els-js/loader-utils@2.0.0-tuxcare.1",
       "micromatch@3.1.10": "npm:@els-js/micromatch@3.1.10-tuxcare.1",
       "minimatch@3.0.4": "npm:@els-js/minimatch@3.0.4-tuxcare.1",
       "node-forge@0.10.0": "npm:@els-js/node-forge@0.10.0-tuxcare.2",
       "request@2.88.2": "npm:@els-js/request@2.88.2-tuxcare.2",
       "rollup@2.38.4": "npm:@els-js/rollup@2.38.4-tuxcare.2",
       "postcss@7.0.39": "npm:@els-js/postcss@7.0.39-tuxcare.2",
       "postcss@8.2.15": "npm:@els-js/postcss@8.3.6-tuxcare.2",
       "rxjs": "^6.6.7",
       "semver@7.3.4": "npm:@els-js/semver@7.3.2-tuxcare.2",
       "terser@4.8.1": "npm:@els-js/terser@4.8.1-tuxcare.1",
       "terser@5.5.1": "npm:@els-js/terser@5.3.0-tuxcare.2",
       "tough-cookie@2.5.0": "npm:@els-js/tough-cookie@2.5.0-tuxcare.2",
       "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
       "webpack-dev-middleware@3.7.2": "npm:@els-js/webpack-dev-middleware@3.7.2-tuxcare.2",
       "webpack-dev-server@3.11.2": "npm:@els-js/webpack-dev-server@3.11.0-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-js/angular-elements@11.2.14-tuxcare.1",
     * "@angular/upgrade": "npm:@els-js/angular-upgrade@11.2.14-tuxcare.1",
     * "@angular/platform-server": "npm:@els-js/angular-platform-server@11.2.14-tuxcare.1",
     * "@angular/localize": "npm:@els-js/angular-localize@11.2.14-tuxcare.1",
     * "@angular/language-service": "npm:@els-js/angular-language-service@11.2.14-tuxcare.1",
     * "@angular/service-worker": "npm:@els-js/angular-service-worker@11.2.14-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_10>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-js/angular-animations@10.2.5-tuxcare.1",
       "@angular/common": "npm:@els-js/angular-common@10.2.5-tuxcare.1",
       "@angular/compiler": "npm:@els-js/angular-compiler@10.2.5-tuxcare.1",
       "@angular/core": "npm:@els-js/angular-core@10.2.5-tuxcare.1",
       "@angular/forms": "npm:@els-js/angular-forms@10.2.5-tuxcare.1",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@10.2.5-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@10.2.5-tuxcare.1",
       "@angular/router": "npm:@els-js/angular-router@10.2.5-tuxcare.1",
       "rxjs": "~6.6.7",
       "tslib": "^2.0.0",
       "zone.js": "~0.10.3"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "0.1002.4",
       "@angular/cli": "10.2.4",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@10.2.5-tuxcare.1",
       "@types/jasmine": "3.6.0",
       "@types/node": "^12.11.1",
       "jasmine-core": "~3.6.0",
       "karma": "npm:@els-js/karma@5.0.9-tuxcare.2",
       "karma-chrome-launcher": "~3.1.0",
       "karma-coverage-istanbul-reporter": "~3.0.3",
       "karma-jasmine": "~3.3.1",
       "karma-jasmine-html-reporter": "~1.5.4",
       "typescript": "4.0.8"
     },
     "overrides": {
       "@angular/animations": "npm:@els-js/angular-animations@10.2.5-tuxcare.1",
       "@angular/common": "npm:@els-js/angular-common@10.2.5-tuxcare.1",
       "@angular/compiler": "npm:@els-js/angular-compiler@10.2.5-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@10.2.5-tuxcare.1",
       "@angular/core": "npm:@els-js/angular-core@10.2.5-tuxcare.1",
       "@angular/forms": "npm:@els-js/angular-forms@10.2.5-tuxcare.1",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@10.2.5-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@10.2.5-tuxcare.1",
       "@angular/router": "npm:@els-js/angular-router@10.2.5-tuxcare.1",   
       "@babel/runtime": "7.26.10",
       "ansi-html@0.0.7": "npm:@els-js/ansi-html@0.0.7-tuxcare.1",
       "braces@2.3.2": "npm:@els-js/braces@2.3.2-tuxcare.1",
       "cookie@0.4.2": "npm:@els-js/cookie@0.4.2-tuxcare.1",
       "debug@4.1.1": "npm:@els-js/debug@4.1.1-tuxcare.1",
       "form-data@2.3.3": "npm:@els-js/form-data@2.3.3-tuxcare.2",
       "http-cache-semantics@3.8.1": "npm:@els-js/http-cache-semantics@3.8.1-tuxcare.2",
       "http-proxy-middleware@0.19.1": "npm:@els-js/http-proxy-middleware@0.19.1-tuxcare.1",
       "ip@1.1.5": "npm:@els-js/ip@1.1.5-tuxcare.2",
       "karma@5.0.9": "npm:@els-js/karma@5.0.9-tuxcare.2",
       "loader-utils@1.2.3": "npm:@els-js/loader-utils@1.2.3-tuxcare.1",
       "loader-utils@2.0.0": "npm:@els-js/loader-utils@2.0.0-tuxcare.1",
       "micromatch@3.1.10": "npm:@els-js/micromatch@3.1.10-tuxcare.1",
       "minimatch@3.0.4": "npm:@els-js/minimatch@3.0.4-tuxcare.1",
       "nth-check@1.0.2": "npm:@els-js/nth-check@1.0.2-tuxcare.1",
       "node-forge@0.10.0": "npm:@els-js/node-forge@0.10.0-tuxcare.2",
       "parseuri@0.0.6": "npm:@els-js/parseuri@0.0.6-tuxcare.1",
       "postcss@7.0.21": "npm:@els-js/postcss@7.0.39-tuxcare.2",
       "postcss@7.0.32": "npm:@els-js/postcss@7.0.39-tuxcare.2",
       "request@2.88.2": "npm:@els-js/request@2.88.2-tuxcare.2",
       "rollup@2.26.5": "npm:@els-js/rollup@2.26.5-tuxcare.2",
       "rxjs": "~6.6.7",
       "semver@7.3.2": "npm:@els-js/semver@7.3.2-tuxcare.2",
       "tar@4.4.19": "npm:@els-js/tar@4.4.19-tuxcare.1",
       "terser@4.8.1": "npm:@els-js/terser@4.8.1-tuxcare.1",
       "terser@5.3.0": "npm:@els-js/terser@5.3.0-tuxcare.2",
       "tough-cookie@2.5.0": "npm:@els-js/tough-cookie@2.5.0-tuxcare.2",
       "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
       "tmp@0.2.1": "npm:@els-js/tmp@0.2.1-tuxcare.2",
       "ua-parser-js@0.7.21": "npm:@els-js/ua-parser-js@0.7.21-tuxcare.1",
       "webpack-dev-middleware@3.7.2": "npm:@els-js/webpack-dev-middleware@3.7.2-tuxcare.2",
       "webpack-dev-server@3.11.0": "npm:@els-js/webpack-dev-server@3.11.0-tuxcare.1",
       "webpack-subresource-integrity@1.4.1": "npm:@els-js/webpack-subresource-integrity@1.4.0-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:
 
     * "@angular/elements": "npm:@els-js/angular-elements@10.2.5-tuxcare.1",
     * "@angular/upgrade": "npm:@els-js/angular-upgrade@10.2.5-tuxcare.1",
     * "@angular/platform-server": "npm:@els-js/angular-platform-server@10.2.5-tuxcare.1",
     * "@angular/localize": "npm:@els-js/angular-localize@10.2.5-tuxcare.1",
     * "@angular/language-service": "npm:@els-js/angular-language-service@10.2.5-tuxcare.1",
     * "@angular/service-worker": "npm:@els-js/angular-service-worker@10.2.5-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_9>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-js/angular-animations@9.1.13-tuxcare.1",
       "@angular/common": "npm:@els-js/angular-common@9.1.13-tuxcare.1",
       "@angular/compiler": "npm:@els-js/angular-compiler@9.1.13-tuxcare.1",
       "@angular/core": "npm:@els-js/angular-core@9.1.13-tuxcare.1",
       "@angular/forms": "npm:@els-js/angular-forms@9.1.13-tuxcare.1",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@9.1.13-tuxcare.1",
       "@angular/platform-browser-dynamic": "9.1.13",
       "@angular/router": "npm:@els-js/angular-router@9.1.13-tuxcare.1",
       "rxjs": "~6.5.4",
       "tslib": "^1.10.0",
       "zone.js": "~0.10.2"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "~0.901.15",
       "@angular/cli": "~9.1.15",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@9.1.13-tuxcare.1",
       "@types/jasmine": "~3.5.0",
       "@types/jasminewd2": "~2.0.3",
       "@types/node": "^12.11.1",
       "codelyzer": "^5.1.2",
       "jasmine-core": "~3.5.0",
       "jasmine-spec-reporter": "~4.2.1",
       "karma": "npm:@els-js/karma@5.0.9-tuxcare.2",
       "karma-chrome-launcher": "~3.1.0",
       "karma-coverage-istanbul-reporter": "~2.1.0",
       "karma-jasmine": "~3.0.1",
       "karma-jasmine-html-reporter": "~1.4.2",
       "protractor": "~5.4.3",
       "ts-node": "~8.3.0",
       "tslint": "~6.1.0",
       "typescript": "~3.8.3"
     },
     "overrides": {
       "@angular/animations": "npm:@els-js/angular-animations@9.1.13-tuxcare.1",
       "@angular/common": "npm:@els-js/angular-common@9.1.13-tuxcare.1",
       "@angular/compiler": "npm:@els-js/angular-compiler@9.1.13-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@9.1.13-tuxcare.1",
       "@angular/core": "npm:@els-js/angular-core@9.1.13-tuxcare.1",
       "@angular/forms": "npm:@els-js/angular-forms@9.1.13-tuxcare.1",
       "@angular/platform-browser": "npm:@els-js/angular-platform-browser@9.1.13-tuxcare.1",
       "@angular/router": "npm:@els-js/angular-router@9.1.13-tuxcare.1",
       "ansi-html@0.0.7": "npm:@els-js/ansi-html@0.0.7-tuxcare.1",
       "braces@2.3.2": "npm:@els-js/braces@2.3.2-tuxcare.1",
       "cookie@0.4.2": "npm:@els-js/cookie@0.4.2-tuxcare.1",
       "debug@4.1.1": "npm:@els-js/debug@4.1.1-tuxcare.1",
       "form-data@2.3.3": "npm:@els-js/form-data@2.3.3-tuxcare.2",
       "http-cache-semantics@3.8.1": "npm:@els-js/http-cache-semantics@3.8.1-tuxcare.2",
       "http-proxy-middleware@0.19.1": "npm:@els-js/http-proxy-middleware@0.19.1-tuxcare.1",
       "ip@1.1.5": "npm:@els-js/ip@1.1.5-tuxcare.2",
       "loader-utils@2.0.0": "npm:@els-js/loader-utils@2.0.0-tuxcare.1",
       "karma@5.0.9": "npm:@els-js/karma@5.0.9-tuxcare.2",
       "micromatch@3.1.10": "npm:@els-js/micromatch@3.1.10-tuxcare.1",
       "minimatch@3.0.4": "npm:@els-js/minimatch@3.0.4-tuxcare.1",
       "nth-check@1.0.2": "npm:@els-js/nth-check@1.0.2-tuxcare.1",
       "node-forge@0.10.0": "npm:@els-js/node-forge@0.10.0-tuxcare.2",
       "parseuri@0.0.6": "npm:@els-js/parseuri@0.0.6-tuxcare.1",
       "postcss@7.0.27": "npm:@els-js/postcss@7.0.39-tuxcare.2",
       "postcss@7.0.39": "npm:@els-js/postcss@7.0.39-tuxcare.2",
       "request@2.88.2": "npm:@els-js/request@2.88.2-tuxcare.2",
       "rollup@2.1.0": "npm:@els-js/rollup@2.1.0-tuxcare.2",
       "rxjs": "~6.5.4",
       "semver@7.1.3": "npm:@els-js/semver@7.1.3-tuxcare.2",
       "tar@4.4.19": "npm:@els-js/tar@4.4.19-tuxcare.1",
       "terser@4.6.10": "npm:@els-js/terser@4.6.10-tuxcare.2",
       "tough-cookie@2.5.0": "npm:@els-js/tough-cookie@2.5.0-tuxcare.2",
       "tmp@0.0.30": "npm:@els-js/tmp@0.0.30-tuxcare.1",
       "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
       "tmp@0.2.1": "npm:@els-js/tmp@0.2.1-tuxcare.2",
       "ua-parser-js@0.7.21": "npm:@els-js/ua-parser-js@0.7.21-tuxcare.1",
       "webpack-dev-middleware@3.7.2": "npm:@els-js/webpack-dev-middleware@3.7.2-tuxcare.2",
       "webpack-dev-server@3.11.0": "npm:@els-js/webpack-dev-server@3.11.0-tuxcare.1",
       "webpack-subresource-integrity@1.4.0": "npm:@els-js/webpack-subresource-integrity@1.4.0-tuxcare.1",
       "xml2js@0.4.23": "npm:@els-js/xml2js@0.4.23-tuxcare.1",
       "yargs-parser@11.1.1": "npm:@els-js/yargs-parser@11.1.1-tuxcare.2"
     }
     ```

     </CodeWithCopy>
 
     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-js/angular-elements@9.1.13-tuxcare.1",
     * "@angular/upgrade": "npm:@els-js/angular-upgrade@9.1.13-tuxcare.1",
     * "@angular/platform-server": "npm:@els-js/angular-platform-server@9.1.13-tuxcare.1",
     * "@angular/localize": "npm:@els-js/angular-localize@9.1.13-tuxcare.1",
     * "@angular/language-service": "npm:@els-js/angular-language-service@9.1.13-tuxcare.1",
     * "@angular/service-worker": "npm:@els-js/angular-service-worker@9.1.13-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     </TableTabs>

5. You need to remove the `node_modules` directory and the `package-lock.json` file, and also clear the `npm cache` before installing the patched packages. Use the following commands:

   <CodeWithCopy>

   ```text
   rm -rf node_modules package-lock.json && npm cache clean --force
   ```

   </CodeWithCopy>

6. Run the following command to install ELS for Angular dependencies (token for the TuxCare repository will be automatically picked up from your `.npmrc` file):

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

7. You've successfully integrated the TuxCare ELS for Angular repository into your project.

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

  If you want to update one TuxCare dependency, you can use the npm install command with the specific version. This automatically updates both `package.json` and `package-lock.json`:

  <CodeWithCopy>

  ```text
  npm install @angular/core@npm:@els-js/angular-core@18.2.14-tuxcare.2
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

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Angular from TuxCare versions:

<TableTabs label="Choose Angular version: " >

<template #Angular__18>

|     CVE ID     | CVE Type | Severity |   Affected Library    |    Vulnerable Versions    |
|:--------------:| :------: | :------: |:---------------------:|:-------------------------:|
| CVE-2025-66035 |   Direct   |   High   |    @angular/common    | <= 18.2.14 |

  </template>

<template #Angular__17>

| CVE ID         | CVE Type | Severity |     Affected Library     |    Vulnerable Versions    |
| :------------: | :------: | :------: |:------------------------:|:-------------------------:|
| CVE-2025-66035 |   Direct   |   High   |    @angular/common    | <= 18.2.14 |
| CVE-2025-59052 |   Direct   |   High   | @angular/platform-server | = 16.0.0-next.0 < 18.2.14 |
| CVE-2025-59052 |   Direct   |   High   |       @angular/ssr       | = 17.0.0-next.0 < 18.2.21 |
| CVE-2025-32997 | Transitive | Moderate |  http-proxy-middleware   |       1.3.0 - 2.0.8       |
| CVE-2025-30360 | Transitive | Moderate |    webpack-dev-server    |         <= 5.2.0          |
| CVE-2025-30359 | Transitive | Moderate |    webpack-dev-server    |         <= 5.2.0          |
| CVE-2025-54798 | Transitive | Low |           tmp            |         <= 0.2.3          |

  </template>

<template #Angular__16>

| CVE ID         |  CVE Type  | Severity |     Affected Library     |    Vulnerable Versions    |
| :------------: |:----------:|:--------:|:------------------------:|:-------------------------:|
| CVE-2025-66035 |   Direct   |   High   |    @angular/common    | <= 18.2.14 |
| CVE-2025-59052 |   Direct   |   High   | @angular/platform-server | = 16.0.0-next.0 < 18.2.14 |
| CVE-2025-27789 | Transitive | Moderate |      @babel/runtime      |         < 7.26.10         |
| CVE-2025-32997 | Transitive | Moderate |  http-proxy-middleware   |       1.3.0 - 2.0.8       |
| CVE-2025-30360 | Transitive | Moderate |    webpack-dev-server    |         <= 5.2.0          |
| CVE-2025-30359 | Transitive | Moderate |    webpack-dev-server    |         <= 5.2.0          |
| CVE-2025-54798 | Transitive |   Low    |           tmp            |         <= 0.2.3          |

  </template>

<template #Angular__15>

| CVE ID         | CVE Type | Severity |  Affected Library |  Vulnerable Versions   |
| :------------: | :------: | :------: | :---------------: |:----------------------:|
| CVE-2025-66035 |   Direct   |   High   |    @angular/common    | <= 18.2.14 |
| CVE-2025-27789 | Transitive | Moderate | @babel/runtime |       < 7.26.10        |
| CVE-2025-30360 | Transitive | Moderate | webpack-dev-server |        <= 5.2.0        |
| CVE-2025-30359 | Transitive | Moderate | webpack-dev-server |        <= 5.2.0        |
| CVE-2024-43788 | Transitive | Moderate | webpack | 5.0.0-alpha.0 - 5.93.0 |
| CVE-2025-54798 | Transitive | Low | tmp |        <= 0.2.3        |

  </template>

<template #Angular__14>

| CVE ID         | CVE Type | Severity |  Affected Library |  Vulnerable Versions   |
| :------------: | :------: | :------: | :---------------: |:----------------------:|
| CVE-2025-66035 |   Direct   |   High   |    @angular/common    | <= 18.2.14 |
| CVE-2024-29180 | Transitive | High | webpack-dev-middleware |        <= 5.3.3        |
| CVE-2025-27789 | Transitive | Moderate | @babel/runtime |       < 7.26.10        |
| CVE-2025-30360 | Transitive | Moderate | webpack-dev-server |        <= 5.2.0        |
| CVE-2025-30359 | Transitive | Moderate | webpack-dev-server |        <= 5.2.0        |
| CVE-2024-43788 | Transitive | Moderate | webpack | 5.0.0-alpha.0 - 5.93.0 |
| CVE-2025-54798 | Transitive | Low | tmp |        <= 0.2.3        |

  </template>

<template #Angular__13>

| CVE ID         | CVE Type | Severity |  Affected Library |  Vulnerable Versions   |
| :------------: | :------: | :------: | :---------------: |:----------------------:|
| CVE-2024-29180 | Transitive | High | webpack-dev-middleware |        <= 5.3.3        |
| CVE-2022-25883 | Transitive | High | semver |     7.0.0 - 7.5.1      |
| CVE-2024-29415 | Transitive | High | ip |        <= 2.0.1        |
| CVE-2025-27789 | Transitive | Moderate | @babel/runtime |       < 7.26.10        |
| CVE-2025-30360 | Transitive | Moderate | webpack-dev-server |        <= 5.2.0        |
| CVE-2025-30359 | Transitive | Moderate | webpack-dev-server |        <= 5.2.0        |
| CVE-2024-43788 | Transitive | Moderate | webpack | 5.0.0-alpha.0 - 5.93.0 |
| CVE-2023-44270 | Transitive | Moderate | postcss |        < 8.4.31        |
| CVE-2025-54798 | Transitive | Low | tmp |        <= 0.2.3        |

  </template>

<template #Angular__12>

|        CVE ID        | CVE Type | Severity |    Affected Library    |    Vulnerable Versions     |
|:--------------------:| :------: |:--------:|:----------------------:|:--------------------------:|
|    CVE-2023-28154    | Transitive | Critical |        webpack         |     >= 5.0.0, < 5.76.0     |
|    CVE-2022-24771    | Transitive |   High   |       node-forge       |          < 1.3.0           |
|    CVE-2022-24772    | Transitive |   High   |       node-forge       |          < 1.3.0           |
|    CVE-2024-29180    | Transitive |   High   | webpack-dev-middleware |          <=5.3.3           |
|    CVE-2022-25883    | Transitive |   High   |         semver         |       7.0.0 - 7.5.1        |
|    CVE-2024-29415    | Transitive |   High   |           ip           |          <= 2.0.1          |
|    CVE-2022-24773    | Transitive | Moderate |       node-forge       |          < 1.3.0           |
|    CVE-2022-0122     | Transitive | Moderate |       node-forge       |          < 1.0.0           |
|    CVE-2024-43788    | Transitive | Moderate |        webpack         | >= 5.0.0-alpha.0, < 5.94.0 |
|    CVE-2025-27789    | Transitive | Moderate |     @babel/runtime     |         < 7.26.10          |
|    CVE-2025-30360    | Transitive | Moderate |   webpack-dev-server   |          <= 5.2.0          |
|    CVE-2025-30359    | Transitive | Moderate |   webpack-dev-server   |          <= 5.2.0          |
|    CVE-2024-43788    | Transitive | Moderate |        webpack         |   5.0.0-alpha.0 - 5.93.0   |
|    CVE-2023-44270    | Transitive | Moderate |        postcss         |          < 8.4.31          |
|    CVE-2025-54798    | Transitive |   Low    |          tmp           |          <= 0.2.3          |
| GHSA-gf8q-jrpm-jvxq  | Transitive |   Low    |       node-forge       |          < 1.0.0           |
| GHSA-5rrq-pxf6-6jx5  | Transitive |   Low    |       node-forge       |          < 1.0.0           |

  </template>

<template #Angular__11>

|       CVE ID        | CVE Type | Severity |    Affected Library    |                   Vulnerable Versions                   |
|:-------------------:| :------: |:--------:|:----------------------:|:-------------------------------------------------------:|
|   CVE-2022-37601    | Transitive | Critical |      loader-utils      |               >= 2.0.0, < 2.0.3, < 1.4.1                |
|   CVE-2025-7783    | Transitive | Critical |       form-data        |      < 2.5.4, >= 3.0.0, < 3.0.4, >= 4.0.0, < 4.0.4      |
|   CVE-2022-37603    | Transitive | High |      loader-utils      | >= 1.0.0, < 1.4.2, >= 2.0.0, < 2.0.4, >= 3.0.0, < 3.2.1 |
|   CVE-2022-37599    | Transitive | High |      loader-utils      | >= 1.0.0, < 1.4.2, >= 2.0.0, < 2.0.4, >= 3.0.0, < 3.2.1 |
|   CVE-2021-23424    | Transitive |   High   |       ansi-html        |    < 0.0.8     |
|   CVE-2024-47068    | Transitive |   High   |         rollup         |    >= 4.0.0, < 4.22.4, >= 3.0.0, < 3.29.5, < 2.79.2     |
|    CVE-2022-3517    | Transitive |   High   |       minimatch        |                         < 3.0.5                         |
|   CVE-2022-25858    | Transitive |   High   |         terser         |               < 4.8.1, >= 5.0.0, < 5.14.2               |
|   CVE-2022-24771    | Transitive |   High   |       node-forge       |                         < 1.3.0                         |
|   CVE-2022-24772    | Transitive |   High   |       node-forge       |                         < 1.3.0                         |
|   CVE-2022-25883    | Transitive |   High   |         semver         |                      7.0.0 - 7.5.1                      |
|   CVE-2024-29415    | Transitive |   High   |           ip           |                        <= 2.0.1                         |
|   CVE-2024-4068    | Transitive |   High   |         braces         |                         < 3.0.3                         |
|   CVE-2023-44270    | Transitive | Moderate |        postcss         |                        < 8.4.31                         |
|   CVE-2023-26136    | Transitive | Moderate |      tough-cookie      |                         < 4.1.3                         |
|   CVE-2022-24773    | Transitive | Moderate |       node-forge       |                         < 1.3.0                         |
|    CVE-2022-0122    | Transitive | Moderate |       node-forge       |                         < 1.0.0                         |
|   CVE-2025-27789    | Transitive | Moderate |     @babel/runtime     |                        < 7.26.10                        |
|   CVE-2023-44270    | Transitive | Moderate |        postcss         |                        < 8.4.31                         |
|   CVE-2025-54798    | Transitive |   Low    |          tmp           |                        <= 0.2.3                         |
| GHSA-gf8q-jrpm-jvxq | Transitive |   Low    |       node-forge       |                         < 1.0.0                         |
| GHSA-5rrq-pxf6-6jx5 | Transitive |   Low    |       node-forge       |                         < 1.0.0                         |

  </template>

<template #Angular__10>

|     CVE ID     | CVE Type | Severity |       Affected Library        |                       Vulnerable Versions                        |
|:--------------:| :------: |:--------:|:-----------------------------:|:----------------------------------------------------------------:|
|   CVE-2022-37601    | Transitive | Critical |         loader-utils          |                    >= 2.0.0, < 2.0.3, < 1.4.1                    |
|   CVE-2025-7783    | Transitive | Critical |           form-data           |          < 2.5.4, >= 3.0.0, < 3.0.4, >= 4.0.0, < 4.0.4           |
|   CVE-2022-25881    | Transitive |   High   |     http-cache-semantics      |                             < 4.1.1                              |
|   CVE-2024-29415    | Transitive |   High   |              ip               |                             <= 2.0.1                             |
|   CVE-2024-4068    | Transitive |   High   |         braces         |                         < 3.0.3                         |
|   CVE-2021-23424    | Transitive |   High   |       ansi-html        |    < 0.0.8     |
| CVE-2020-7733  | Transitive |   High   |         ua-parser-js          |                             < 0.7.22                             |
| CVE-2020-7793  | Transitive |   High   |         ua-parser-js          |                             < 0.7.23                             |
| CVE-2021-27292  | Transitive |   High   |         ua-parser-js          |                       >= 0.7.14, < 0.7.24                        |
|   CVE-2021-3803    | Transitive |   High   |           nth-check           |                             < 2.0.1                              |
|   CVE-2024-47068    | Transitive |   High   |            rollup             |         >= 4.0.0, < 4.22.4, >= 3.0.0, < 3.29.5, < 2.79.2         |
|   CVE-2022-25858    | Transitive |   High   |            terser             |                   < 4.8.1, >= 5.0.0, < 5.14.2                    |
|   CVE-2022-25883    | Transitive |   High   |            semver             |                          7.0.0 - 7.5.1                           |
|   CVE-2022-24771    | Transitive |   High   |          node-forge           |                             < 1.3.0                              |
|   CVE-2022-24772    | Transitive |   High   |          node-forge           |                             < 1.3.0                              |
|    CVE-2022-3517    | Transitive |   High   |           minimatch           |                             < 3.0.5                              |
|   CVE-2022-37603    | Transitive | High |         loader-utils          |     >= 1.0.0, < 1.4.2, >= 2.0.0, < 2.0.4, >= 3.0.0, < 3.2.1      |
|   CVE-2022-37599    | Transitive | High |         loader-utils          |     >= 1.0.0, < 1.4.2, >= 2.0.0, < 2.0.4, >= 3.0.0, < 3.2.1      |
|   CVE-2025-27789    | Transitive | Moderate |     @babel/runtime     |                        < 7.26.10                        |
|   CVE-2024-36751    | Transitive | Moderate |           parse-uri           |                             <= 1.0.9                             |
|   CVE-2024-28863    | Transitive | Moderate |              tar              |                             < 6.2.1                              |
|   CVE-2023-26136    | Transitive | Moderate |         tough-cookie          |                             < 4.1.3                              |
|   CVE-2023-44270    | Transitive | Moderate |            postcss            |                             < 8.4.31                             |
|   CVE-2021-23382    | Transitive | Moderate |            postcss            |                   >= 8.0.0, < 8.2.13, < 7.0.36                   |
|   CVE-2021-23368    | Transitive | Moderate |            postcss            |              >= 7.0.0, < 7.0.36, >= 8.0.0, < 8.2.10              |
|   CVE-2022-24773    | Transitive | Moderate |          node-forge           |                             < 1.3.0                              |
|    CVE-2022-0122    | Transitive | Moderate |          node-forge           |                             < 1.0.0                              |
|   CVE-2025-54798    | Transitive |   Low    |              tmp              |                             <= 0.2.3                             |
| CVE-2020-15262 | Transitive |   Low    | webpack-subresource-integrity |                             < 1.5.1                              |
| GHSA-gf8q-jrpm-jvxq | Transitive |   Low    |          node-forge           |                             < 1.0.0                              |
| GHSA-5rrq-pxf6-6jx5 | Transitive |   Low    |          node-forge           |                             < 1.0.0                              |
| CVE-2017-16137 | Transitive |   Low    |             debug             | < 2.6.9, >= 3.0.0, < 3.1.0, >= 3.2.0, < 3.2.7, >= 4.0.0, < 4.3.1 |
| CVE-2024-47764 | Transitive |   Low    |            cookie             | < 0.7.0 |

  </template>

<template #Angular__9>

|       CVE ID        | CVE Type | Severity |       Affected Library        |                          Vulnerable Versions                           |
|:-------------------:| :------: |:--------:|:-----------------------------:|:----------------------------------------------------------------------:|
|   CVE-2022-37601    | Transitive | Critical |         loader-utils          |                       >= 2.0.0, < 2.0.3, < 1.4.1                       |
|    CVE-2025-7783    | Transitive | Critical |           form-data           |             < 2.5.4, >= 3.0.0, < 3.0.4, >= 4.0.0, < 4.0.4              |
|   CVE-2024-47068    | Transitive |   High   |            rollup             |            >= 4.0.0, < 4.22.4, >= 3.0.0, < 3.29.5, < 2.79.2            |
|   CVE-2022-37603    | Transitive | High |         loader-utils          |        >= 1.0.0, < 1.4.2, >= 2.0.0, < 2.0.4, >= 3.0.0, < 3.2.1         |
|   CVE-2022-37599    | Transitive | High |         loader-utils          |        >= 1.0.0, < 1.4.2, >= 2.0.0, < 2.0.4, >= 3.0.0, < 3.2.1         |
|   CVE-2024-21536    | Transitive | High |     http-proxy-middleware     |                       < 2.0.7, >= 3.0.0, < 3.0.3                       |
|   CVE-2024-29415    | Transitive |   High   |              ip               |                                <= 2.0.1                                |
|   CVE-2022-25881    | Transitive |   High   |     http-cache-semantics      |                                < 4.1.1                                 |
|   CVE-2021-23424    | Transitive |   High   |           ansi-html           |                                < 0.0.8                                 |
|    CVE-2020-7733    | Transitive |   High   |         ua-parser-js          |                                < 0.7.22                                |
|    CVE-2020-7793    | Transitive |   High   |         ua-parser-js          |                                < 0.7.23                                |
|   CVE-2021-27292    | Transitive |   High   |         ua-parser-js          |                          >= 0.7.14, < 0.7.24                           |
|    CVE-2024-4068    | Transitive |   High   |            braces             |                                < 3.0.3                                 |
|    CVE-2022-3517    | Transitive |   High   |           minimatch           |                                < 3.0.5                                 |
|   CVE-2022-24771    | Transitive |   High   |          node-forge           |                                < 1.3.0                                 |
|   CVE-2022-24772    | Transitive |   High   |          node-forge           |                                < 1.3.0                                 |
|    CVE-2021-3803    | Transitive |   High   |           nth-check           |                                < 2.0.1                                 |
|   CVE-2022-25883    | Transitive |   High   |            semver             |                             7.0.0 - 7.5.1                              |
|   CVE-2022-25858    | Transitive |   High   |            terser             |                      < 4.8.1, >= 5.0.0, < 5.14.2                       |
|   CVE-2024-29180    | Transitive |   High   |    webpack-dev-middleware     |             >= 7.0.0, < 7.1.0, >= 6.0.0, < 6.1.2, <= 5.3.3             |
|    CVE-2023-0842    | Transitive | Moderate |            xml2js             |                                < 0.5.0                                 |
|   CVE-2020-7608     | Transitive | Moderate |         yargs-parser          | >= 6.0.0, < 13.1.2, >= 14.0.0, < 15.0.1, <= 5.0.0, >= 16.0.0, < 18.1.1 |
|   CVE-2021-23495     | Transitive | Moderate |             karma             |                                < 6.3.16                                |
|   CVE-2022-0437     | Transitive | Moderate |             karma             |                                < 6.3.14                                |
|   CVE-2024-28863    | Transitive | Moderate |              tar              |                                < 6.2.1                                 |
|   CVE-2022-24773    | Transitive | Moderate |          node-forge           |                                < 1.3.0                                 |
|    CVE-2022-0122    | Transitive | Moderate |          node-forge           |                                < 1.0.0                                 |
|   CVE-2024-36751    | Transitive | Moderate |           parse-uri           |                                <= 1.0.9                                |
|   CVE-2023-44270    | Transitive | Moderate |            postcss            |                                < 8.4.31                                |
|   CVE-2021-23382    | Transitive | Moderate |            postcss            |                      >= 8.0.0, < 8.2.13, < 7.0.36                      |
|   CVE-2021-23368    | Transitive | Moderate |            postcss            |                 >= 7.0.0, < 7.0.36, >= 8.0.0, < 8.2.10                 |
|   CVE-2023-26136    | Transitive | Moderate |         tough-cookie          |                                < 4.1.3                                 |
|   CVE-2025-30359    | Transitive | Moderate |         webpack-dev-server          |                                < 4.1.3                                 |
|   CVE-2024-29415    | Transitive |   Low    |              ip               |                            = 2.0.0, < 1.1.9                            |
|   CVE-2025-54798    | Transitive |   Low    |              tmp              |                                <= 0.2.3                                |
|   CVE-2017-16137    | Transitive |   Low    |             debug             |    < 2.6.9, >= 3.0.0, < 3.1.0, >= 3.2.0, < 3.2.7, >= 4.0.0, < 4.3.1    |
|   CVE-2024-47764    | Transitive |   Low    |            cookie             |                                < 0.7.0                                 |
| GHSA-gf8q-jrpm-jvxq | Transitive |   Low    |          node-forge           |                                < 1.0.0                                 |
| GHSA-5rrq-pxf6-6jx5 | Transitive |   Low    |          node-forge           |                                < 1.0.0                                 |
|   CVE-2020-15262    | Transitive |   Low    | webpack-subresource-integrity |                                < 1.5.1                                 |

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
  "@angular/animations": "npm:@els-js/angular-animations@18.2.14-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@18.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@18.2.14-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@18.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@18.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@18.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@18.2.14-tuxcare.1",
  "@angular/platform-server": "npm:@els-js/angular-platform-server@18.2.14-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@18.2.14-tuxcare.1",
  "@angular/ssr": "^18.2.20",
  "express": "^4.18.2", 
  "rxjs": "^7.4.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.14.10"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^18.2.20",
  "@angular/cli": "^18.2.20",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@18.2.14-tuxcare.1",
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
  "@angular/animations": "npm:@els-js/angular-animations@18.2.14-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@18.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@18.2.14-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@18.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@18.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@18.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@18.2.14-tuxcare.1",
  "@angular/platform-server": "npm:@els-js/angular-platform-server@18.2.14-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@18.2.14-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@18.2.14-tuxcare.1",
  "rxjs": "^7.4.0",
  "esbuild": "0.25.0",
  "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-js/tmp@0.2.1-tuxcare.1"
}`

const Angular18WithoutSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-js/angular-animations@18.2.14-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@18.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@18.2.14-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@18.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@18.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@18.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@18.2.14-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@18.2.14-tuxcare.1", 
  "rxjs": "^7.4.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.14.10"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^18.2.20",
  "@angular/cli": "^18.2.20",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@18.2.14-tuxcare.1",
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
  "@angular/animations": "npm:@els-js/angular-animations@18.2.14-tuxcare.1",
  "@angular/common": "npm:@els-js/angular-common@18.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-js/angular-compiler@18.2.14-tuxcare.1",
  "@angular/core": "npm:@els-js/angular-core@18.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-js/angular-forms@18.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@18.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@18.2.14-tuxcare.1",
  "@angular/router": "npm:@els-js/angular-router@18.2.14-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-js/angular-compiler-cli@18.2.14-tuxcare.1",
  "rxjs": "^7.4.0",
  "esbuild": "0.25.0",
  "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-js/tmp@0.2.1-tuxcare.1"
}`

const Angular17WithSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-js/angular-animations@17.3.12-tuxcare.2",
  "@angular/common": "npm:@els-js/angular-common@17.3.12-tuxcare.2",
  "@angular/compiler": "npm:@els-js/angular-compiler@17.3.12-tuxcare.2",
  "@angular/core": "npm:@els-js/angular-core@17.3.12-tuxcare.2",
  "@angular/forms": "npm:@els-js/angular-forms@17.3.12-tuxcare.2",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@17.3.12-tuxcare.2",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@17.3.12-tuxcare.2",
  "@angular/router": "npm:@els-js/angular-router@17.3.12-tuxcare.2", 
  "@angular/ssr": "npm:@els-js/angular-ssr@17.3.12-tuxcare.2",
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
"overrides": {
  "@angular/animations": "npm:@els-js/angular-animations@17.3.12-tuxcare.2",
  "@angular/common": "npm:@els-js/angular-common@17.3.12-tuxcare.2",
  "@angular/compiler": "npm:@els-js/angular-compiler@17.3.12-tuxcare.2",
  "@angular/core": "npm:@els-js/angular-core@17.3.12-tuxcare.2",
  "@angular/forms": "npm:@els-js/angular-forms@17.3.12-tuxcare.2", 
  "@angular/localize": "npm:@els-js/angular-localize@17.3.12-tuxcare.2",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@17.3.12-tuxcare.2",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@17.3.12-tuxcare.2",
  "@angular/platform-server": "npm:@els-js/angular-platform-server@17.3.12-tuxcare.2",
  "@angular/router": "npm:@els-js/angular-router@17.3.12-tuxcare.2",
  "@angular/ssr": "npm:@els-js/angular-ssr@17.3.12-tuxcare.2",
  "esbuild": "0.25.0",
  "rxjs": "^7.4.0",
  "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-js/tmp@0.2.1-tuxcare.1",
  "http-proxy-middleware@2.0.8": "npm:@els-js/http-proxy-middleware@2.0.8-tuxcare.1",
  "webpack-dev-server@4.15.1": "npm:@els-js/webpack-dev-server@4.15.1-tuxcare.1"
}`

const Angular17WithoutSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-js/angular-animations@17.3.12-tuxcare.2",
  "@angular/common": "npm:@els-js/angular-common@17.3.12-tuxcare.2",
  "@angular/compiler": "npm:@els-js/angular-compiler@17.3.12-tuxcare.2",
  "@angular/core": "npm:@els-js/angular-core@17.3.12-tuxcare.2",
  "@angular/forms": "npm:@els-js/angular-forms@17.3.12-tuxcare.2",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@17.3.12-tuxcare.2",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@17.3.12-tuxcare.2",
  "@angular/router": "npm:@els-js/angular-router@17.3.12-tuxcare.2",
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
"overrides": {
  "@angular/animations": "npm:@els-js/angular-animations@17.3.12-tuxcare.2",
  "@angular/common": "npm:@els-js/angular-common@17.3.12-tuxcare.2",
  "@angular/compiler": "npm:@els-js/angular-compiler@17.3.12-tuxcare.2",
  "@angular/core": "npm:@els-js/angular-core@17.3.12-tuxcare.2",
  "@angular/forms": "npm:@els-js/angular-forms@17.3.12-tuxcare.2",
  "@angular/platform-browser": "npm:@els-js/angular-platform-browser@17.3.12-tuxcare.2",
  "@angular/platform-browser-dynamic": "npm:@els-js/angular-platform-browser-dynamic@17.3.12-tuxcare.2",
  "@angular/router": "npm:@els-js/angular-router@17.3.12-tuxcare.2",
  "rxjs": "^7.4.0",
  "tmp@0.0.33": "npm:@els-js/tmp@0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-js/tmp@0.2.1-tuxcare.1",
  "http-proxy-middleware@2.0.8": "npm:@els-js/http-proxy-middleware@2.0.8-tuxcare.1",
  "webpack-dev-server@4.15.1": "npm:@els-js/webpack-dev-server@4.15.1-tuxcare.1"
}`
</script>
