# Angular

Endless Lifecycle Support (ELS) for Angular from TuxCare provides security fixes for Angular versions that have reached their end of life. This allows you to continue running Angular applications without vulnerability concerns, even after official support has ended.

## Supported Angular Versions

Angular versions from 4 to 18 are supported.

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
   @els-angular:registry=https://nexus.repo.tuxcare.com/repository/els_angular/
   //nexus.repo.tuxcare.com/repository/els_angular/:_auth=${TOKEN}
   ```

   </CodeWithCopy>

   :::warning
   Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

4. Manually update your `package.json` file by replacing your Angular dependencies with the TuxCare packages.

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

     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=18.2.14-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=18.2.14-tuxcare.1",
     * "@angular/elements": "npm:@els-angular/angular-elements@>=18.2.14-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=18.2.14-tuxcare.1",

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
 
     * "@angular/animations": "npm:@els-angular/angular-animations@>=17.3.12-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=17.3.12-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=17.3.12-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=17.3.12-tuxcare.1"

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_16>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=16.2.12-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=16.2.12-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=16.2.12-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=16.2.12-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=16.2.12-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=16.2.12-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=16.2.12-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=16.2.12-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "^16.2.12",
       "@angular/cli": "^16.2.12",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=16.2.12-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=16.2.12-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=16.2.12-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=16.2.12-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=16.2.12-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=16.2.12-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=16.2.12-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=16.2.12-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=16.2.12-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=16.2.12-tuxcare.1",
       "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
       "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
       "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
       "vite@4.5.5": "npm:@els-angular/vite@>=4.5.5-tuxcare.1",
       "webpack-dev-server@4.15.1": "npm:@els-angular/webpack-dev-server@>=4.15.1-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/animations": "npm:@els-angular/angular-animations@>=16.2.12-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=16.2.12-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=16.2.12-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=16.2.12-tuxcare.1"

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_15>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=15.2.10-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=15.2.10-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=15.2.10-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=15.2.10-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=15.2.10-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=15.2.10-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=15.2.10-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=15.2.10-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "^15.2.11",
       "@angular/cli": "~15.2.11",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=15.2.10-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=15.2.10-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=15.2.10-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=15.2.10-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=15.2.10-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=15.2.10-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=15.2.10-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=15.2.10-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=15.2.10-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=15.2.10-tuxcare.1",
       "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
       "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
       "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
       "webpack@5.76.1": "npm:@els-angular/webpack@>=5.76.1-tuxcare.1",
       "webpack-dev-server@4.11.1": "npm:@els-angular/webpack-dev-server@>=4.15.1-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-angular/angular-elements@>=15.2.10-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=15.2.10-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=15.2.10-tuxcare.1",
     * "@angular/localize": "npm:@els-angular/angular-localize@>=15.2.10-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=15.2.10-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=15.2.10-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_14>
 
     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=14.3.0-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=14.3.0-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=14.3.0-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=14.3.0-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=14.3.0-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=14.3.0-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=14.3.0-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=14.3.0-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "^14.2.13",
       "@angular/cli": "~14.2.13",
       "@angular/compiler-cli": "^14.2.0"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=14.3.0-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=14.3.0-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=14.3.0-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=14.3.0-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=14.3.0-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=14.3.0-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=14.3.0-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=14.3.0-tuxcare.1",
       "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
       "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
       "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
       "webpack@5.76.1": "npm:@els-angular/webpack@>=5.76.1-tuxcare.1",
       "webpack-dev-server@4.11.0": "npm:@els-angular/webpack-dev-server@>=4.15.1-tuxcare.1",
       "webpack-dev-middleware@5.3.3": "npm:@els-angular/webpack-dev-middleware@>=5.3.0-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:
 
     * "@angular/elements": "npm:@els-angular/angular-elements@>=14.3.0-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=14.3.0-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=14.3.0-tuxcare.1",
     * "@angular/localize": "npm:@els-angular/angular-localize@>=14.3.0-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=14.3.0-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=14.3.0-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_13>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=13.4.0-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=13.4.0-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=13.4.0-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=13.4.0-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=13.4.0-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=13.4.0-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=13.4.0-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=13.4.0-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "^13.0.4",
       "@angular/cli": "^13.0.4",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=13.4.0-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=13.4.0-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=13.4.0-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=13.4.0-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=13.4.0-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=13.4.0-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=13.4.0-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=13.4.0-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=13.4.0-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=13.4.0-tuxcare.1",
       "ip@1.1.9": "npm:@els-angular/ip@>=1.1.5-tuxcare.1",
       "postcss@8.4.5": "npm:@els-angular/postcss@>=8.3.6-tuxcare.1",
       "semver@7.3.5": "npm:@els-angular/semver@>=7.3.2-tuxcare.1",
       "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
       "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
       "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
       "webpack@5.76.1": "npm:@els-angular/webpack@>=5.76.1-tuxcare.1",
       "webpack-dev-middleware@5.3.0": "npm:@els-angular/webpack-dev-middleware@>=5.3.0-tuxcare.1",
       "webpack-dev-server@4.7.3": "npm:@els-angular/webpack-dev-server@>=4.7.3-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-angular/angular-elements@>=13.4.0-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=13.4.0-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=13.4.0-tuxcare.1",
     * "@angular/localize": "npm:@els-angular/angular-localize@>=13.4.0-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=13.4.0-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=13.4.0-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_12>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=12.2.17-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=12.2.17-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=12.2.17-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=12.2.17-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=12.2.17-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=12.2.17-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=12.2.17-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=12.2.17-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "~12.2.18",
       "@angular/cli": "~12.2.18",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=12.2.17-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=12.2.17-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=12.2.17-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=12.2.17-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=12.2.17-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=12.2.17-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=12.2.17-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=12.2.17-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=12.2.17-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=12.2.17-tuxcare.1",
       "ansi-html@0.0.7": "npm:@els-angular/ansi-html@>=0.0.7-tuxcare.1",
       "braces@2.3.2": "npm:@els-angular/braces@>=2.3.2-tuxcare.1",
       "http-proxy-middleware@0.19.1": "npm:@els-angular/http-proxy-middleware@>=0.19.1-tuxcare.1",
       "ip@1.1.5": "npm:@els-angular/ip@>=1.1.5-tuxcare.1",
       "loader-utils@2.0.0": "npm:@els-angular/loader-utils@>=2.0.0-tuxcare.1",
       "micromatch@3.1.10": "npm:@els-angular/micromatch@>=3.1.10-tuxcare.1",
       "minimatch@3.0.4": "npm:@els-angular/minimatch@>=3.0.4-tuxcare.1",
       "node-forge@0.10.0": "npm:@els-angular/node-forge@>=0.10.0-tuxcare.1",
       "postcss@7.0.39": "npm:@els-angular/postcss@>=7.0.39-tuxcare.1",
       "postcss@8.3.6": "npm:@els-angular/postcss@>=8.3.6-tuxcare.1",
       "semver@7.3.5": "npm:@els-angular/semver@>=7.3.2-tuxcare.1",
       "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
       "terser@5.7.1": "npm:@els-angular/terser@>=5.5.1-tuxcare.1",
       "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
       "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
       "webpack@5.50.0": "npm:@els-angular/webpack@>=5.50.0-tuxcare.1",
       "webpack-dev-middleware@3.7.3": "npm:@els-angular/webpack-dev-middleware@>=3.7.2-tuxcare.1",
       "webpack-dev-middleware@5.0.0": "npm:@els-angular/webpack-dev-middleware@>=5.0.0-tuxcare.1",
       "webpack-dev-server@3.11.3": "npm:@els-angular/webpack-dev-server@>=3.11.0-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-angular/angular-elements@>=12.2.17-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=12.2.17-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=12.2.17-tuxcare.1",
     * "@angular/localize": "npm:@els-angular/angular-localize@>=12.2.17-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=12.2.17-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=12.2.17-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_11>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=11.2.14-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=11.2.14-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=11.2.14-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=11.2.14-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=11.2.14-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=11.2.14-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=11.2.14-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=11.2.14-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "0.1102.14",
       "@angular/cli": "11.2.14",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=11.2.14-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=11.2.14-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=11.2.14-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=11.2.14-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=11.2.14-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=11.2.14-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=11.2.14-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=11.2.14-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=11.2.14-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=11.2.14-tuxcare.1",
       "ansi-html@0.0.7": "npm:@els-angular/ansi-html@>=0.0.7-tuxcare.1",
       "braces@2.3.2": "npm:@els-angular/braces@>=2.3.2-tuxcare.1",
       "form-data@2.3.3": "@els-angular/form-data@>=2.3.3-tuxcare.1",
       "http-cache-semantics@4.2.0": "npm:@els-angular/http-cache-semantics@>=3.8.1-tuxcare.1",
       "http-proxy-middleware@0.19.1": "npm:@els-angular/http-proxy-middleware@>=0.19.1-tuxcare.1",
       "ip@1.1.9": "npm:@els-angular/ip@>=1.1.5-tuxcare.1",
       "loader-utils@2.0.0": "npm:@els-angular/loader-utils@>=2.0.0-tuxcare.1",
       "micromatch@3.1.10": "npm:@els-angular/micromatch@>=3.1.10-tuxcare.1",
       "minimatch@3.0.4": "npm:@els-angular/minimatch@>=3.0.4-tuxcare.1",
       "node-forge@0.10.0": "npm:@els-angular/node-forge@>=0.10.0-tuxcare.1",
       "request@2.88.2": "npm:@els-angular/request@>=2.88.2-tuxcare.1",
       "rollup@2.38.4": "npm:@els-angular/rollup@>=2.38.4-tuxcare.1",
       "postcss@7.0.39": "npm:@els-angular/postcss@>=7.0.39-tuxcare.1",
       "postcss@8.2.15": "npm:@els-angular/postcss@>=8.3.6-tuxcare.1",
       "semver@7.3.4": "npm:@els-angular/semver@>=7.3.2-tuxcare.1",
       "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
       "terser@4.8.1": "npm:@els-angular/terser@>=4.8.1-tuxcare.1",
       "terser@5.5.1": "npm:@els-angular/terser@>=5.3.0-tuxcare.1",
       "tough-cookie@2.5.0": "npm:@els-angular/tough-cookie@>=2.5.0-tuxcare.1",
       "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
       "webpack-dev-middleware@3.7.2": "npm:@els-angular/webpack-dev-middleware@>=3.7.2-tuxcare.1",
       "webpack-dev-server@3.11.2": "npm:@els-angular/webpack-dev-server@>=3.11.0-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-angular/angular-elements@>=11.2.14-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=11.2.14-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=11.2.14-tuxcare.1",
     * "@angular/localize": "npm:@els-angular/angular-localize@>=11.2.14-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=11.2.14-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=11.2.14-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_10>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=10.2.5-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=10.2.5-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=10.2.5-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=10.2.5-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=10.2.5-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=10.2.5-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=10.2.5-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=10.2.5-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "0.1002.4",
       "@angular/cli": "10.2.4",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=10.2.5-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=10.2.5-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=10.2.5-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=10.2.5-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=10.2.5-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=10.2.5-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=10.2.5-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=10.2.5-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=10.2.5-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=10.2.5-tuxcare.1",
       "ansi-html@0.0.7": "npm:@els-angular/ansi-html@>=0.0.7-tuxcare.1",
       "braces@2.3.2": "npm:@els-angular/braces@>=2.3.2-tuxcare.1",
       "cookie@0.4.2": "npm:@els-angular/cookie@>=0.4.2-tuxcare.1",
       "debug@4.1.1": "npm:@els-angular/debug@>=4.1.1-tuxcare.1",
       "form-data@2.3.3": "npm:@els-angular/form-data@>=2.3.3-tuxcare.1",
       "http-cache-semantics@3.8.1": "npm:@els-angular/http-cache-semantics@>=3.8.1-tuxcare.1",
       "http-proxy-middleware@0.19.1": "npm:@els-angular/http-proxy-middleware@>=0.19.1-tuxcare.1",
       "ip@1.1.5": "npm:@els-angular/ip@>=1.1.5-tuxcare.1",
       "karma@5.0.9": "npm:@els-angular/karma@>=5.0.9-tuxcare.1",
       "loader-utils@1.2.3": "npm:@els-angular/loader-utils@>=1.2.3-tuxcare.1",
       "loader-utils@2.0.0": "npm:@els-angular/loader-utils@>=2.0.0-tuxcare.1",
       "micromatch@3.1.10": "npm:@els-angular/micromatch@>=3.1.10-tuxcare.1",
       "minimatch@3.0.4": "npm:@els-angular/minimatch@>=3.0.4-tuxcare.1",
       "nth-check@1.0.2": "npm:@els-angular/nth-check@>=1.0.2-tuxcare.1",
       "node-forge@0.10.0": "npm:@els-angular/node-forge@>=0.10.0-tuxcare.1",
       "parseuri@0.0.6": "npm:@els-angular/parseuri@>=0.0.6-tuxcare.1",
       "postcss@7.0.21": "npm:@els-angular/postcss@>=7.0.39-tuxcare.1",
       "postcss@7.0.32": "npm:@els-angular/postcss@>=7.0.39-tuxcare.1",
       "request@2.88.2": "npm:@els-angular/request@>=2.88.2-tuxcare.1",
       "rollup@2.26.5": "npm:@els-angular/rollup@>=2.26.5-tuxcare.1",
       "semver@7.3.2": "npm:@els-angular/semver@>=7.3.2-tuxcare.1",
       "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
       "tar@4.4.19": "npm:@els-angular/tar@>=4.4.19-tuxcare.1",
       "terser@4.8.1": "npm:@els-angular/terser@>=4.8.1-tuxcare.1",
       "terser@5.3.0": "npm:@els-angular/terser@>=5.3.0-tuxcare.1",
       "tough-cookie@2.5.0": "npm:@els-angular/tough-cookie@>=2.5.0-tuxcare.1",
       "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
       "tmp@0.2.1": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
       "ua-parser-js@0.7.21": "npm:@els-angular/ua-parser-js@>=0.7.21-tuxcare.1",
       "webpack-dev-middleware@3.7.2": "npm:@els-angular/webpack-dev-middleware@>=3.7.2-tuxcare.1",
       "webpack-dev-server@3.11.0": "npm:@els-angular/webpack-dev-server@>=3.11.0-tuxcare.1",
       "webpack-subresource-integrity@1.4.1": "npm:@els-angular/webpack-subresource-integrity@>=1.4.0-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:
 
     * "@angular/elements": "npm:@els-angular/angular-elements@>=10.2.5-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=10.2.5-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=10.2.5-tuxcare.1",
     * "@angular/localize": "npm:@els-angular/angular-localize@>=10.2.5-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=10.2.5-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=10.2.5-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_9>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=9.1.13-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=9.1.13-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=9.1.13-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=9.1.13-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=9.1.13-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=9.1.13-tuxcare.1",
       "@angular/platform-browser-dynamic": "9.1.13",
       "@angular/router": "npm:@els-angular/angular-router@>=9.1.13-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "~0.901.15",
       "@angular/cli": "~9.1.15",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=9.1.13-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=9.1.13-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=9.1.13-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=9.1.13-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=9.1.13-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=9.1.13-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=9.1.13-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=9.1.13-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=9.1.13-tuxcare.1",
       "ansi-html@0.0.7": "npm:@els-angular/ansi-html@>=0.0.7-tuxcare.1",
       "braces@2.3.2": "npm:@els-angular/braces@>=2.3.2-tuxcare.1",
       "cookie@0.4.2": "npm:@els-angular/cookie@>=0.4.2-tuxcare.1",
       "debug@4.1.1": "npm:@els-angular/debug@>=4.1.1-tuxcare.1",
       "form-data@2.3.3": "npm:@els-angular/form-data@>=2.3.3-tuxcare.1",
       "http-cache-semantics@3.8.1": "npm:@els-angular/http-cache-semantics@>=3.8.1-tuxcare.1",
       "http-proxy-middleware@0.19.1": "npm:@els-angular/http-proxy-middleware@>=0.19.1-tuxcare.1",
       "ip@1.1.5": "npm:@els-angular/ip@>=1.1.5-tuxcare.1",
       "loader-utils@2.0.0": "npm:@els-angular/loader-utils@>=2.0.0-tuxcare.1",
       "karma@5.0.9": "npm:@els-angular/karma@>=5.0.9-tuxcare.1",
       "micromatch@3.1.10": "npm:@els-angular/micromatch@>=3.1.10-tuxcare.1",
       "minimatch@3.0.4": "npm:@els-angular/minimatch@>=3.0.4-tuxcare.1",
       "nth-check@1.0.2": "npm:@els-angular/nth-check@>=1.0.2-tuxcare.1",
       "node-forge@0.10.0": "npm:@els-angular/node-forge@>=0.10.0-tuxcare.1",
       "parseuri@0.0.6": "npm:@els-angular/parseuri@>=0.0.6-tuxcare.1",
       "postcss@7.0.27": "npm:@els-angular/postcss@>=7.0.39-tuxcare.1",
       "postcss@7.0.39": "npm:@els-angular/postcss@>=7.0.39-tuxcare.1",
       "request@2.88.2": "npm:@els-angular/request@>=2.88.2-tuxcare.1",
       "rollup@2.1.0": "npm:@els-angular/rollup@>=2.1.0-tuxcare.1",
       "semver@7.1.3": "npm:@els-angular/semver@>=7.1.3-tuxcare.1",
       "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
       "tar@4.4.19": "npm:@els-angular/tar@>=4.4.19-tuxcare.1",
       "terser@4.6.10": "npm:@els-angular/terser@>=4.6.10-tuxcare.1",
       "tough-cookie@2.5.0": "npm:@els-angular/tough-cookie@>=2.5.0-tuxcare.1",
       "tmp@0.0.30": "npm:@els-angular/tmp@>=0.0.30-tuxcare.1",
       "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
       "tmp@0.2.1": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
       "ua-parser-js@0.7.21": "npm:@els-angular/ua-parser-js@>=0.7.21-tuxcare.1",
       "webpack-dev-middleware@3.7.2": "npm:@els-angular/webpack-dev-middleware@>=3.7.2-tuxcare.1",
       "webpack-dev-server@3.11.0": "npm:@els-angular/webpack-dev-server@>=3.11.0-tuxcare.1",
       "webpack-subresource-integrity@1.4.0": "npm:@els-angular/webpack-subresource-integrity@>=1.4.0-tuxcare.1",
       "xml2js@0.4.23": "npm:@els-angular/xml2js@>=0.4.23-tuxcare.1",
       "yargs-parser@11.1.1": "npm:@els-angular/yargs-parser@>=11.1.1-tuxcare.1"
     }
     ```

     </CodeWithCopy>
 
    :::tip
    If you use any of the following **non-default Angular modules**, update their versions as shown below:

    * "@angular/elements": "npm:@els-angular/angular-elements@>=9.1.13-tuxcare.1",
    * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=9.1.13-tuxcare.1",
    * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=9.1.13-tuxcare.1",
    * "@angular/localize": "npm:@els-angular/angular-localize@>=9.1.13-tuxcare.1",
    * "@angular/language-service": "npm:@els-angular/angular-language-service@>=9.1.13-tuxcare.1",
    * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=9.1.13-tuxcare.1",

    After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
    :::
    </template>

     <template #Angular_8>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=8.2.14-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=8.2.14-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=8.2.14-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=8.2.14-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=8.2.14-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=8.2.14-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=8.2.14-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=8.2.14-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "~0.803.29",
       "@angular/cli": "~8.3.29",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=8.2.14-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=8.2.14-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=8.2.14-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=8.2.14-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=8.2.14-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=8.2.14-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=8.2.14-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=8.2.14-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=8.2.14-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=8.2.14-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-angular/angular-elements@>=8.2.14-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=8.2.14-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=8.2.14-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=8.2.14-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=8.2.14-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_7>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=7.2.16-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=7.2.16-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=7.2.16-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=7.2.16-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=7.2.16-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=7.2.16-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=7.2.16-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=7.2.16-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "~0.13.9",
       "@angular/cli": "~7.3.10",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=7.2.16-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=7.2.16-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=7.2.16-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=7.2.16-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=7.2.16-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=7.2.16-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=7.2.16-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=7.2.16-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=7.2.16-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=7.2.16-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-angular/angular-elements@>=7.2.16-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=7.2.16-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=7.2.16-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=7.2.16-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=7.2.16-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_6>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=6.1.10-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=6.1.10-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=6.1.10-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=6.1.10-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=6.1.10-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=6.1.10-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=6.1.10-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=6.1.10-tuxcare.1"
     },
     "devDependencies": {
       "@angular-devkit/build-angular": "~0.8.9",
       "@angular/cli": "~6.2.9",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=6.1.10-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=6.1.10-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=6.1.10-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=6.1.10-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=6.1.10-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=6.1.10-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=6.1.10-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=6.1.10-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=6.1.10-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=6.1.10-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/elements": "npm:@els-angular/angular-elements@>=6.1.10-tuxcare.1",
     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=6.1.10-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=6.1.10-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=6.1.10-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=6.1.10-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_5>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=5.2.11-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=5.2.11-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=5.2.11-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=5.2.11-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=5.2.11-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=5.2.11-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=5.2.11-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=5.2.11-tuxcare.1"
     },
     "devDependencies": {
       "@angular/cli": "~1.7.4",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=5.2.11-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=5.2.11-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=5.2.11-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=5.2.11-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=5.2.11-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=5.2.11-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=5.2.11-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=5.2.11-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=5.2.11-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=5.2.11-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=5.2.11-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=5.2.11-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=5.2.11-tuxcare.1",
     * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=5.2.11-tuxcare.1",

     After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
     :::
     </template>

     <template #Angular_4>

     <CodeWithCopy>

     ```text
     "dependencies": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=4.4.7-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=4.4.7-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=4.4.7-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=4.4.7-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=4.4.7-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=4.4.7-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=4.4.7-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=4.4.7-tuxcare.1"
     },
     "devDependencies": {
       "@angular/cli": "~1.4.10",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=4.4.7-tuxcare.1",
       "@angular/tsc-wrapped": "npm:@els-angular/angular-tsc-wrapped@>=4.4.7-tuxcare.1"
     },
     "overrides": {
       "@angular/animations": "npm:@els-angular/angular-animations@>=4.4.7-tuxcare.1",
       "@angular/common": "npm:@els-angular/angular-common@>=4.4.7-tuxcare.1",
       "@angular/compiler": "npm:@els-angular/angular-compiler@>=4.4.7-tuxcare.1",
       "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=4.4.7-tuxcare.1",
       "@angular/core": "npm:@els-angular/angular-core@>=4.4.7-tuxcare.1",
       "@angular/forms": "npm:@els-angular/angular-forms@>=4.4.7-tuxcare.1",
       "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=4.4.7-tuxcare.1",
       "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=4.4.7-tuxcare.1",
       "@angular/router": "npm:@els-angular/angular-router@>=4.4.7-tuxcare.1",
       "@angular/tsc-wrapped": "npm:@els-angular/angular-tsc-wrapped@>=4.4.7-tuxcare.1"
     }
     ```

     </CodeWithCopy>

     :::tip
     If you use any of the following **non-default Angular modules**, update their versions as shown below:

     * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=4.4.7-tuxcare.1",
     * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=4.4.7-tuxcare.1",
     * "@angular/language-service": "npm:@els-angular/angular-language-service@>=4.4.7-tuxcare.1",

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

## Step 3: Verify Installation

1. To confirm the TuxCare Angular repository is set up correctly, use npm to list the project's dependencies:

   <CodeWithCopy>

   ```text
   npm list
   ```

   </CodeWithCopy>

2. After reviewing the dependencies, run your application to ensure everything works correctly.

The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Angular repository.

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a package with a `tuxcare.1` suffix and want to upgrade to a newer release (for example, `tuxcare.3`), remove node_modules, clear the npm cache to avoid conflicts, and then run the installation command:

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

|     CVE ID     | CVE Type | Severity |        Affected Library        |    Vulnerable Versions    |
|:--------------:| :------: | :------: |:------------------------------:|:-------------------------:|
| CVE-2025-66035 |   Direct   |   High   |        @angular/common         | <= 18.2.14 |
| CVE-2026-22610 |   Direct   |   High   | @angular/common, @angular/core | <= 18.2.14 |
| CVE-2026-23950 | Transitive |   High   |              tar               |        <= 7.5.2        |
| CVE-2026-23745 | Transitive |   High   |              tar               |        <= 7.5.3        |
| CVE-2026-24842 | Transitive |   High   |              tar               |        <= 7.5.6        |

  </template>

<template #Angular__17>

| CVE ID         | CVE Type | Severity |     Affected Library     |    Vulnerable Versions    |
| :------------: | :------: | :------: |:------------------------:|:-------------------------:|
| CVE-2025-66035 |   Direct   |   High   |    @angular/common    | <= 18.2.14 |
| CVE-2025-59052 |   Direct   |   High   | @angular/platform-server | = 16.0.0-next.0 < 18.2.14 |
| CVE-2025-59052 |   Direct   |   High   |       @angular/ssr       | = 17.0.0-next.0 < 18.2.21 |
| CVE-2026-23950 | Transitive |   High   |              tar               |        <= 7.5.2        |
| CVE-2026-23745 | Transitive |   High   |              tar               |        <= 7.5.3        |
| CVE-2026-24842 | Transitive |   High   |              tar               |        <= 7.5.6        |
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
| CVE-2026-23950 | Transitive |   High   |              tar               |        <= 7.5.2        |
| CVE-2026-23745 | Transitive |   High   |              tar               |        <= 7.5.3        |
| CVE-2026-24842 | Transitive |   High   |              tar               |        <= 7.5.6        |
| CVE-2025-27789 | Transitive | Moderate |      @babel/runtime      |         < 7.26.10         |
| CVE-2025-32997 | Transitive | Moderate |  http-proxy-middleware   |       1.3.0 - 2.0.8       |
| CVE-2025-30360 | Transitive | Moderate |    webpack-dev-server    |         <= 5.2.0          |
| CVE-2025-30359 | Transitive | Moderate |    webpack-dev-server    |         <= 5.2.0          |
| CVE-2025-54798 | Transitive |   Low    |           tmp            |         <= 0.2.3          |

  </template>

<template #Angular__15>

| CVE ID         | CVE Type | Severity |        Affected Library        |  Vulnerable Versions   |
| :------------: | :------: |:--------:|:------------------------------:|:----------------------:|
| CVE-2025-66035 |   Direct   |   High   |        @angular/common         |       <= 18.2.14       |
| CVE-2026-22610 |   Direct   |   High   | @angular/common, @angular/core |       <= 18.2.14       |
| CVE-2026-23950 | Transitive |   High   |              tar               |        <= 7.5.2        |
| CVE-2026-23745 | Transitive |   High   |              tar               |        <= 7.5.3        |
| CVE-2026-24842 | Transitive |   High   |              tar               |        <= 7.5.6        |
| CVE-2025-27789 | Transitive | Moderate |         @babel/runtime         |       < 7.26.10        |
| CVE-2025-30360 | Transitive | Moderate |       webpack-dev-server       |        <= 5.2.0        |
| CVE-2025-30359 | Transitive | Moderate |       webpack-dev-server       |        <= 5.2.0        |
| CVE-2024-43788 | Transitive | Moderate |            webpack             | 5.0.0-alpha.0 - 5.93.0 |
| CVE-2025-54798 | Transitive |   Low    |              tmp               |        <= 0.2.3        |

  </template>

<template #Angular__14>

| CVE ID         | CVE Type | Severity |  Affected Library |  Vulnerable Versions   |
| :------------: | :------: | :------: | :---------------: |:----------------------:|
| CVE-2025-66035 |   Direct   |   High   |    @angular/common    | <= 18.2.14 |
| CVE-2026-23950 | Transitive |   High   |              tar               |        <= 7.5.2        |
| CVE-2026-23745 | Transitive |   High   |              tar               |        <= 7.5.3        |
| CVE-2026-24842 | Transitive |   High   |              tar               |        <= 7.5.6        |
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
| CVE-2026-23950 | Transitive |   High   |              tar               |        <= 7.5.2        |
| CVE-2026-23745 | Transitive |   High   |              tar               |        <= 7.5.3        |
| CVE-2026-24842 | Transitive |   High   |              tar               |        <= 7.5.6        |
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
| CVE-2026-23950 | Transitive |   High   |              tar               |        <= 7.5.2        |
| CVE-2026-23745 | Transitive |   High   |              tar               |        <= 7.5.3        |
| CVE-2026-24842 | Transitive |   High   |              tar               |        <= 7.5.6        |
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
| CVE-2026-23950 | Transitive |   High   |              tar               |        <= 7.5.2        |
| CVE-2026-23745 | Transitive |   High   |              tar               |        <= 7.5.3        |
| CVE-2026-24842 | Transitive |   High   |              tar               |        <= 7.5.6        |
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
| CVE-2026-23950 | Transitive |   High   |              tar               |        <= 7.5.2        |
| CVE-2026-23745 | Transitive |   High   |              tar               |        <= 7.5.3        |
| CVE-2026-24842 | Transitive |   High   |              tar               |        <= 7.5.6        |
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

<template #Angular__8>

|     CVE ID     | CVE Type | Severity |        Affected Library        | Vulnerable Versions |
|:--------------:|:--------:|:--------:|:------------------------------:|:-------------------:|
| CVE-2026-22610 |  Direct  |   High   | @angular/common, @angular/core |      <= 8.2.14      |

  </template>

<template #Angular__7>

|     CVE ID     | CVE Type | Severity |        Affected Library        | Vulnerable Versions |
|:--------------:|:--------:|:--------:|:------------------------------:|:-------------------:|
| CVE-2026-22610 |  Direct  |   High   | @angular/common, @angular/core |      <= 7.2.16      |

  </template>

<template #Angular__6>

|     CVE ID     | CVE Type | Severity |        Affected Library        | Vulnerable Versions |
|:--------------:|:--------:|:--------:|:------------------------------:|:-------------------:|
| CVE-2026-22610 |  Direct  |   High   | @angular/common, @angular/core |      <= 6.1.10      |

  </template>

<template #Angular__5>

|     CVE ID     | CVE Type | Severity |        Affected Library        | Vulnerable Versions |
|:--------------:|:--------:|:--------:|:------------------------------:|:-------------------:|
| CVE-2026-22610 |  Direct  |   High   | @angular/common, @angular/core |      <= 5.2.11      |

  </template>

<template #Angular__4>

|     CVE ID     | CVE Type | Severity |        Affected Library        | Vulnerable Versions |
|:--------------:|:--------:|:--------:|:------------------------------:|:-------------------:|
| CVE-2026-22610 |  Direct  |   High   | @angular/common, @angular/core |      <= 4.4.7       |
| CVE-2025-66412 |  Direct  |   High   |       @angular/compiler        |      <= 4.4.7       |

  </template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

<script setup>
const Angular19WithSSR =
`"dependencies": {
  "@angular/common": "npm:@els-angular/angular-common@>=19.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=19.2.14-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=19.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=19.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=19.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=19.2.14-tuxcare.1",
  "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=19.2.14-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=19.2.14-tuxcare.1",
  "@angular/ssr": "^19.2.15"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^19.2.15",
  "@angular/cli": "^19.2.15",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=19.2.14-tuxcare.1"
},
"overrides": {
  "@angular/common": "npm:@els-angular/angular-common@>=19.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=19.2.14-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=19.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=19.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=19.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=19.2.14-tuxcare.1",
  "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=19.2.14-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=19.2.14-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=19.2.14-tuxcare.1",
  "@angular/localize": "npm:@els-angular/angular-localize@>=19.2.14-tuxcare.1",
  "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=19.2.14-tuxcare.1"
}`

const Angular19WithoutSSR =
`"dependencies": {
  "@angular/common": "npm:@els-angular/angular-common@>=19.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=19.2.14-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=19.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=19.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=19.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=19.2.14-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=19.2.14-tuxcare.1"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^19.2.15",
  "@angular/cli": "^19.2.15",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=19.2.14-tuxcare.1"
},
"overrides": {
  "@angular/common": "npm:@els-angular/angular-common@>=19.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=19.2.14-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=19.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=19.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=19.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=19.2.14-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=19.2.14-tuxcare.1",
  "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=19.2.14-tuxcare.1",
  "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=19.2.14-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=19.2.14-tuxcare.1"
}`

 const Angular18WithSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-angular/angular-animations@>=18.2.14-tuxcare.1",
  "@angular/common": "npm:@els-angular/angular-common@>=18.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=18.2.14-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=18.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=18.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=18.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=18.2.14-tuxcare.1",
  "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=18.2.14-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=18.2.14-tuxcare.1",
  "@angular/ssr": "^18.2.20"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^18.2.20",
  "@angular/cli": "^18.2.20",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=18.2.14-tuxcare.1"
},
"overrides": {
  "@angular/animations": "npm:@els-angular/angular-animations@>=18.2.14-tuxcare.1",
  "@angular/common": "npm:@els-angular/angular-common@>=18.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=18.2.14-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=18.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=18.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=18.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=18.2.14-tuxcare.1",
  "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=18.2.14-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=18.2.14-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=18.2.14-tuxcare.1",
  "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
  "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1"
}`

const Angular18WithoutSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-angular/angular-animations@>=18.2.14-tuxcare.1",
  "@angular/common": "npm:@els-angular/angular-common@>=18.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=18.2.14-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=18.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=18.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=18.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=18.2.14-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=18.2.14-tuxcare.1"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^18.2.20",
  "@angular/cli": "^18.2.20",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=18.2.14-tuxcare.1"
},
"overrides": {
  "@angular/animations": "npm:@els-angular/angular-animations@>=18.2.14-tuxcare.1",
  "@angular/common": "npm:@els-angular/angular-common@>=18.2.14-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=18.2.14-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=18.2.14-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=18.2.14-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=18.2.14-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=18.2.14-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=18.2.14-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=18.2.14-tuxcare.1",
  "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
  "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1"
}`

const Angular17WithSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-angular/angular-animations@>=17.3.12-tuxcare.1",
  "@angular/common": "npm:@els-angular/angular-common@>=17.3.12-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=17.3.12-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=17.3.12-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=17.3.12-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=17.3.12-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=17.3.12-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=17.3.12-tuxcare.1", 
  "@angular/ssr": "npm:@els-angular/angular-ssr@>=17.3.17-tuxcare.1"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^17.3.12",
  "@angular/cli": "npm:@els-angular/angular-cli@>=17.3.17-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=17.3.12-tuxcare.1"
},
"overrides": {
  "@angular-devkit/architect": "0.1703.17",
  "@angular-devkit/core": "17.3.17",
  "@angular-devkit/schematics": "17.3.17",
  "@schematics/angular": "17.3.17",
  "@angular/animations": "npm:@els-angular/angular-animations@>=17.3.12-tuxcare.1",
  "@angular/cli": "npm:@els-angular/angular-cli@>=17.3.17-tuxcare.1",
  "@angular/common": "npm:@els-angular/angular-common@>=17.3.12-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=17.3.12-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=17.3.12-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=17.3.12-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=17.3.12-tuxcare.1", 
  "@angular/localize": "npm:@els-angular/angular-localize@>=17.3.12-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=17.3.12-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=17.3.12-tuxcare.1",
  "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=17.3.12-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=17.3.12-tuxcare.1",
  "@angular/ssr": "npm:@els-angular/angular-ssr@>=17.3.17-tuxcare.1",
  "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
  "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
  "http-proxy-middleware@2.0.8": "npm:@els-angular/http-proxy-middleware@>=2.0.8-tuxcare.1",
  "webpack-dev-server@4.15.1": "npm:@els-angular/webpack-dev-server@>=4.15.1-tuxcare.1"
}`

const Angular17WithoutSSR =
`"dependencies": {
  "@angular/animations": "npm:@els-angular/angular-animations@>=17.3.12-tuxcare.1",
  "@angular/common": "npm:@els-angular/angular-common@>=17.3.12-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=17.3.12-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=17.3.12-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=17.3.12-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=17.3.12-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=17.3.12-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=17.3.12-tuxcare.1"
},
"devDependencies": {
  "@angular-devkit/build-angular": "^17.3.12",
  "@angular/cli": "^17.3.12",
  "@angular/compiler-cli": "^17.3.0"
},
"overrides": {
  "@angular-devkit/architect": "0.1703.17",
  "@angular-devkit/core": "17.3.17",
  "@angular-devkit/schematics": "17.3.17",
  "@schematics/angular": "17.3.17",  
  "@angular/animations": "npm:@els-angular/angular-animations@>=17.3.12-tuxcare.1",
  "@angular/common": "npm:@els-angular/angular-common@>=17.3.12-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=17.3.12-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=17.3.12-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=17.3.12-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=17.3.12-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=17.3.12-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=17.3.12-tuxcare.1",
  "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
  "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
  "http-proxy-middleware@2.0.8": "npm:@els-angular/http-proxy-middleware@>=2.0.8-tuxcare.1",
  "webpack-dev-server@4.15.1": "npm:@els-angular/webpack-dev-server@>=4.15.1-tuxcare.1"
}`
</script>
