# Angular

Endless Lifecycle Support (ELS) for Angular from TuxCare provides security fixes for Angular versions that have reached their end of life. This allows you to continue running Angular applications without vulnerability concerns, even after official support has ended.

## Supported Angular Versions

Angular versions from 4 to 19 are supported.

## Installation

<ELSBadge heading>Docker compatible</ELSBadge>

<ELSPrerequisites>

* **npm** version 9.6.3 or later  
  *Check current version:* `npm --version`  
  *Update npm:* `npm install -g npm@latest`
* TuxCare registry token — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_angular) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>


1. **Create or update the .npmrc file**

   Navigate to the root directory of your Angular project and create a `.npmrc` file or update it if it already exists.

   **Example:**

   ```text
   my-angular-project/
   ├── src/
   ├── angular.json
   ├── package.json
   ├── .npmrc         ⚠️ ← Create it here
   └── tsconfig.json
   ```

2. **Configure the npm registry**

   Use an editor of your choice (e.g., VS Code) to add the following registry address lines to the `.npmrc` file:

   ```text
   registry=https://registry.npmjs.org/
   @els-angular:registry=https://nexus.repo.tuxcare.com/repository/els_angular/
   //nexus.repo.tuxcare.com/repository/els_angular/:_auth=${TOKEN}
   ```

   :::warning
   Replace `${TOKEN}` with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
   :::

3. **Update dependencies**

   Manually update your `package.json` file by replacing Angular dependencies with TuxCare-maintained packages.

     <TableTabs label="Choose Angular version: " >

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

      * "@angular/animations": "npm:@els-angular/angular-animations@>=19.2.23-tuxcare.1",
      * "@angular/language-service": "npm:@els-angular/angular-language-service@>=19.2.23-tuxcare.1",
      * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=19.2.23-tuxcare.1",
      * "@angular/elements": "npm:@els-angular/angular-elements@>=19.2.23-tuxcare.1",
      * "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=19.2.23-tuxcare.1",

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
        "@angular-devkit/build-angular": "16.2.12",
        "@angular/cli": "16.2.12",
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
        "@babel/runtime@7.22.6": "7.26.10",
        "esbuild": "0.25.0",
        "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
        "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
        "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
        "vite@4.5.5": "npm:@els-angular/vite@>=4.5.5-tuxcare.1",
        "webpack-dev-server@4.15.1": "npm:@els-angular/webpack-dev-server@>=4.15.1-tuxcare.1",
        "webpack@5.94.0": "npm:@els-angular/webpack@>=5.94.0-tuxcare.1"
      }
      ```

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
        "@angular-devkit/build-angular": "15.2.11",
        "@angular/cli": "15.2.11",
        "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=15.2.10-tuxcare.1"
      },
      "overrides": {
        "@angular/animations": "npm:@els-angular/angular-animations@>=15.2.10-tuxcare.1",
        "@angular/common": "npm:@els-angular/angular-common@>=15.2.10-tuxcare.1",
        "@angular/compiler": "npm:@els-angular/angular-compiler@>=15.2.10-tuxcare.1",
        "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=15.2.10-tuxcare.1",
        "@angular/core": "npm:@els-angular/angular-core@>=15.2.10-tuxcare.1",
        "@angular/forms": "npm:@els-angular/angular-forms@>=15.2.10-tuxcare.1",
        "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=15.2.10-tuxcare.1",
        "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=15.2.10-tuxcare.1",
        "@angular/router": "npm:@els-angular/angular-router@>=15.2.10-tuxcare.1",
        "@babel/runtime@7.20.13": "7.26.10",
        "esbuild": "0.25.0",
        "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
        "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
        "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
        "webpack@5.76.1": "npm:@els-angular/webpack@>=5.76.1-tuxcare.1",
        "webpack-dev-server@4.11.1": "npm:@els-angular/webpack-dev-server@>=4.15.1-tuxcare.1"
      }
      ```

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
        "@angular-devkit/build-angular": "14.2.13",
        "@angular/cli": "14.2.13",
        "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=14.3.0-tuxcare.1"
      },
      "overrides": {
        "@angular/animations": "npm:@els-angular/angular-animations@>=14.3.0-tuxcare.1",
        "@angular/common": "npm:@els-angular/angular-common@>=14.3.0-tuxcare.1",
        "@angular/compiler": "npm:@els-angular/angular-compiler@>=14.3.0-tuxcare.1",
        "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=14.3.0-tuxcare.1",
        "@angular/core": "npm:@els-angular/angular-core@>=14.3.0-tuxcare.1",
        "@angular/forms": "npm:@els-angular/angular-forms@>=14.3.0-tuxcare.1",
        "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=14.3.0-tuxcare.1",
        "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=14.3.0-tuxcare.1",
        "@angular/router": "npm:@els-angular/angular-router@>=14.3.0-tuxcare.1",
        "@babel/runtime@7.18.9": "7.26.10",
        "esbuild": "0.25.0",
        "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
        "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
        "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
        "webpack@5.76.1": "npm:@els-angular/webpack@>=5.76.1-tuxcare.1",
        "webpack-dev-server@4.11.0": "npm:@els-angular/webpack-dev-server@>=4.15.1-tuxcare.1",
        "webpack-dev-middleware@5.3.3": "npm:@els-angular/webpack-dev-middleware@>=5.3.0-tuxcare.1"
      }
      ```

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
        "@angular-devkit/build-angular": "13.3.11",
        "@angular/cli": "13.3.11",
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
        "@angular-devkit/build-angular": "12.2.18",
        "@angular/cli": "12.2.18",
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
        "@angular/cli": "11.2.19",
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
         "@angular/cli": "9.1.15",
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
        "@angular/cli": "8.3.29",
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
        "@angular/cli": "7.3.10",
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
        "@angular/cli": "6.2.9",
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
        "@angular/cli": "1.7.4",
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
        "@angular/cli": "1.4.10",
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

      :::tip
      If you use any of the following **non-default Angular modules**, update their versions as shown below:

      * "@angular/upgrade": "npm:@els-angular/angular-upgrade@>=4.4.7-tuxcare.1",
      * "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=4.4.7-tuxcare.1",
      * "@angular/language-service": "npm:@els-angular/angular-language-service@>=4.4.7-tuxcare.1",

      After adding these aliases, make sure the same modules are also listed in the `overrides` section, just like the default ones.
      :::
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

   After reviewing the dependencies, run your application to ensure everything works correctly. The `npm` tool should be able to identify and resolve dependencies from the TuxCare ELS for Angular repository.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Angular) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Angular) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Angular) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/) — Vulnerability Exploitability eXchange feed
* ![](/images/box.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (SPDX and CycloneDX)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#JavaScript) — Update an installed package to a newer TuxCare release

</WhatsNext>

<script setup>
const Angular19WithSSR =
`"dependencies": {
  "@angular/common": "npm:@els-angular/angular-common@>=19.2.23-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=19.2.23-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=19.2.23-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=19.2.23-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=19.2.23-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=19.2.23-tuxcare.1",
  "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=19.2.23-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=19.2.23-tuxcare.1",
  "@angular/ssr": "npm:@els-angular/angular-ssr@>=19.2.25-tuxcare.1"
},
"devDependencies": {
  "@angular-devkit/build-angular": "19.2.23",
  "@angular/cli": "npm:@els-angular/angular-cli@>=19.2.25-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=19.2.23-tuxcare.1"
},
"overrides": {
  "@angular/common": "npm:@els-angular/angular-common@>=19.2.23-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=19.2.23-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=19.2.23-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=19.2.23-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=19.2.23-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=19.2.23-tuxcare.1",
  "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=19.2.23-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=19.2.23-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=19.2.23-tuxcare.1",
  "@angular/localize": "npm:@els-angular/angular-localize@>=19.2.23-tuxcare.1",
  "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=19.2.23-tuxcare.1",
  "@angular/ssr": "npm:@els-angular/angular-ssr@>=19.2.25-tuxcare.1",
  "@angular/cli": "npm:@els-angular/angular-cli@>=19.2.25-tuxcare.1"
}`

const Angular19WithoutSSR =
`"dependencies": {
  "@angular/common": "npm:@els-angular/angular-common@>=19.2.23-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=19.2.23-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=19.2.23-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=19.2.23-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=19.2.23-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=19.2.23-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=19.2.23-tuxcare.1"
},
"devDependencies": {
  "@angular-devkit/build-angular": "19.2.23",
  "@angular/cli": "npm:@els-angular/angular-cli@>=19.2.25-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=19.2.23-tuxcare.1"
},
"overrides": {
  "@angular/common": "npm:@els-angular/angular-common@>=19.2.23-tuxcare.1",
  "@angular/compiler": "npm:@els-angular/angular-compiler@>=19.2.23-tuxcare.1",
  "@angular/core": "npm:@els-angular/angular-core@>=19.2.23-tuxcare.1",
  "@angular/forms": "npm:@els-angular/angular-forms@>=19.2.23-tuxcare.1",
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=19.2.23-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=19.2.23-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=19.2.23-tuxcare.1",
  "@angular/platform-server": "npm:@els-angular/angular-platform-server@>=19.2.23-tuxcare.1",
  "@angular/service-worker": "npm:@els-angular/angular-service-worker@>=19.2.23-tuxcare.1",
  "@angular/compiler-cli": "npm:@els-angular/angular-compiler-cli@>=19.2.23-tuxcare.1",
  "@angular/cli": "npm:@els-angular/angular-cli@>=19.2.25-tuxcare.1"
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
  "@angular/ssr": "npm:@els-angular/angular-ssr@>=18.2.21-tuxcare.1"
},
"devDependencies": {
  "@angular-devkit/build-angular": "18.2.21",
  "@angular/cli": "npm:@els-angular/angular-cli@>=18.2.21-tuxcare.1",
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
  "@angular/ssr": "npm:@els-angular/angular-ssr@>=18.2.21-tuxcare.1",
  "@angular/cli": "npm:@els-angular/angular-cli@>=18.2.21-tuxcare.1",
  "ajv@8.17.1": "npm:@els-angular/ajv@>=8.17.1-tuxcare.1",
  "esbuild": "0.25.0",
  "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
  "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
  "webpack@5.94.0": "npm:@els-angular/webpack@>=5.94.0-tuxcare.1"
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
  "@angular-devkit/build-angular": "18.2.21",
  "@angular/cli": "npm:@els-angular/angular-cli@>=18.2.21-tuxcare.1",
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
  "@angular/cli": "npm:@els-angular/angular-cli@>=18.2.21-tuxcare.1",
  "ajv@8.17.1": "npm:@els-angular/ajv@>=8.17.1-tuxcare.1",
  "esbuild": "0.25.0",
  "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
  "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
  "webpack@5.94.0": "npm:@els-angular/webpack@>=5.94.0-tuxcare.1"
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
  "@angular-devkit/build-angular": "17.3.12",
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
  "esbuild": "0.25.0",
  "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
  "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
  "http-proxy-middleware@2.0.7": "npm:@els-angular/http-proxy-middleware@>=2.0.8-tuxcare.1",
  "webpack-dev-server@4.15.1": "npm:@els-angular/webpack-dev-server@>=4.15.1-tuxcare.1",
  "webpack@5.94.0": "npm:@els-angular/webpack@>=5.94.0-tuxcare.1"
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
  "@angular-devkit/build-angular": "17.3.12",
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
  "@angular/platform-browser": "npm:@els-angular/angular-platform-browser@>=17.3.12-tuxcare.1",
  "@angular/platform-browser-dynamic": "npm:@els-angular/angular-platform-browser-dynamic@>=17.3.12-tuxcare.1",
  "@angular/router": "npm:@els-angular/angular-router@>=17.3.12-tuxcare.1",
  "esbuild": "0.25.0",
  "tar@6.2.1": "npm:@els-angular/tar@>=6.2.1-tuxcare.1",
  "tmp@0.0.33": "npm:@els-angular/tmp@>=0.0.33-tuxcare.1",
  "tmp@0.2.5": "npm:@els-angular/tmp@>=0.2.1-tuxcare.1",
  "http-proxy-middleware@2.0.7": "npm:@els-angular/http-proxy-middleware@>=2.0.8-tuxcare.1",
  "webpack-dev-server@4.15.1": "npm:@els-angular/webpack-dev-server@>=4.15.1-tuxcare.1",
  "webpack@5.94.0": "npm:@els-angular/webpack@>=5.94.0-tuxcare.1"
}`
</script>
