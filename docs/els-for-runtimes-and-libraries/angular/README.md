# Angular

Endless Lifecycle Support (ELS) for Angular from TuxCare provides security fixes for Angular versions that have reached its end of life. This allows you to continue running Angular applications without vulnerability concerns, even after official support has ended.

:::warning
ELS for Angular is currently in active development. If you are interested in updates, adoption, or have specific requirements or feature requests, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

## Supported Angular Versions

Angular versions 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, and 19 are supported.

## Connection to ELS for Angular Repository

Please contact [sales@tuxcare.com](mailto:sales@tuxcare.com) for instructions.

<!--  
This guide outlines the steps needed to integrate the TuxCare ELS for Angular repository.

## Step 1: Get user credentials

You need a username, password, and token in order to use TuxCare ELS Angular repository. Anonymous access is disabled. To receive the credentials please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

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
  @els-js:registry=https://nexus.repo.tuxcare.com/repository/els-js/
  //nexus.repo.tuxcare.com/repository/els-js/:_auth=${TOKEN}
  ```

  </CodeWithCopy>

  :::warning
  Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
  :::

4. Update your `package.json` file to replace your Angular dependencies with the TuxCare packages.

  **Angular 12**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-12": "^0.0.1",
      "@angular/animations": "file:./node_modules/@els-js/angular-12/deps/@angular/animations",
      "@angular/common": "file:./node_modules/@els-js/angular-12/deps/@angular/common",
      "@angular/compiler": "file:./node_modules/@els-js/angular-12/deps/@angular/compiler",
      "@angular/core": "file:./node_modules/@els-js/angular-12/deps/@angular/core",
      "@angular/forms": "file:./node_modules/@els-js/angular-12/deps/@angular/forms",
      "@angular/platform-browser": "file:./node_modules/@els-js/angular-12/deps/@angular/platform-browser",
      "@angular/platform-browser-dynamic": "file:./node_modules/@els-js/angular-12/deps/@angular/platform-browser-dynamic",
      "@angular/router": "file:./node_modules/@els-js/angular-12/deps/@angular/router",
      "rxjs": "file:./node_modules/@els-js/angular-12/deps/rxjs",
      "tslib": "file:./node_modules/@els-js/angular-12/deps/tslib",
      "zone.js": "file:./node_modules/@els-js/angular-12/deps/zone.js"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "file:./node_modules/@els-js/angular-12/deps/@angular-devkit/build-angular",
      "@angular/cli": "file:./node_modules/@els-js/angular-12/deps/@angular/cli",
      "@angular/compiler-cli": "file:./node_modules/@els-js/angular-12/deps/@angular/compiler-cli",
      "@types/jasmine": "file:./node_modules/@els-js/angular-12/deps/@types/jasmine",
      "@types/node": "file:./node_modules/@els-js/angular-12/deps/@types/node",
      "jasmine-core": "file:./node_modules/@els-js/angular-12/deps/jasmine-core",
      "karma": "file:./node_modules/@els-js/angular-12/deps/karma",
      "karma-chrome-launcher": "file:./node_modules/@els-js/angular-12/deps/karma-chrome-launcher",
      "karma-coverage": "file:./node_modules/@els-js/angular-12/deps/karma-coverage",
      "karma-jasmine": "file:./node_modules/@els-js/angular-12/deps/karma-jasmine",
      "karma-jasmine-html-reporter": "file:./node_modules/@els-js/angular-12/deps/karma-jasmine-html-reporter",
      "typescript": "file:./node_modules/@els-js/angular-12/deps/typescript"
  }
  ```

  </CodeWithCopy>

  </details>

  **Angular 13**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-13": "^0.0.1",
      "@angular/animations": "file:./node_modules/@els-js/angular-13/deps/@angular/animations",
      "@angular/common": "file:./node_modules/@els-js/angular-13/deps/@angular/common",
      "@angular/compiler": "file:./node_modules/@els-js/angular-13/deps/@angular/compiler",
      "@angular/core": "file:./node_modules/@els-js/angular-13/deps/@angular/core",
      "@angular/forms": "file:./node_modules/@els-js/angular-13/deps/@angular/forms",
      "@angular/platform-browser": "file:./node_modules/@els-js/angular-13/deps/@angular/platform-browser",
      "@angular/platform-browser-dynamic": "file:./node_modules/@els-js/angular-13/deps/@angular/platform-browser-dynamic",
      "@angular/router": "file:./node_modules/@els-js/angular-13/deps/@angular/router",
      "rxjs": "file:./node_modules/@els-js/angular-13/deps/rxjs",
      "tslib": "file:./node_modules/@els-js/angular-13/deps/tslib",
      "zone.js": "file:./node_modules/@els-js/angular-13/deps/zone.js"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "file:./node_modules/@els-js/angular-13/deps/@angular-devkit/build-angular",
      "@angular/cli": "file:./node_modules/@els-js/angular-13/deps/@angular/cli",
      "@angular/compiler-cli": "file:./node_modules/@els-js/angular-13/deps/@angular/compiler-cli",
      "@types/jasmine": "file:./node_modules/@els-js/angular-13/deps/@types/jasmine",
      "@types/node": "file:./node_modules/@els-js/angular-13/deps/@types/node",
      "jasmine-core": "file:./node_modules/@els-js/angular-13/deps/jasmine-core",
      "karma": "file:./node_modules/@els-js/angular-13/deps/karma",
      "karma-chrome-launcher": "file:./node_modules/@els-js/angular-13/deps/karma-chrome-launcher",
      "karma-coverage": "file:./node_modules/@els-js/angular-13/deps/karma-coverage",
      "karma-jasmine": "file:./node_modules/@els-js/angular-13/deps/karma-jasmine",
      "karma-jasmine-html-reporter": "file:./node_modules/@els-js/angular-13/deps/karma-jasmine-html-reporter",
      "typescript": "file:./node_modules/@els-js/angular-13/deps/typescript"
  }
  ```
  </CodeWithCopy>

  </details>

  **Angular 14**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>
    
  ```text
  "dependencies": {
      "@els-js/angular-14": "^0.0.1",
      "@angular/animations": "file:./node_modules/@els-js/angular-14/deps/@angular/animations",
      "@angular/common": "file:./node_modules/@els-js/angular-14/deps/@angular/common",
      "@angular/compiler": "file:./node_modules/@els-js/angular-14/deps/@angular/compiler",
      "@angular/core": "file:./node_modules/@els-js/angular-14/deps/@angular/core",
      "@angular/forms": "file:./node_modules/@els-js/angular-14/deps/@angular/forms",
      "@angular/platform-browser": "file:./node_modules/@els-js/angular-14/deps/@angular/platform-browser",
      "@angular/platform-browser-dynamic": "file:./node_modules/@els-js/angular-14/deps/@angular/platform-browser-dynamic",
      "@angular/router": "file:./node_modules/@els-js/angular-14/deps/@angular/router",
      "rxjs": "file:./node_modules/@els-js/angular-14/deps/rxjs",
      "tslib": "file:./node_modules/@els-js/angular-14/deps/tslib",
      "zone.js": "file:./node_modules/@els-js/angular-14/deps/zone.js"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "file:./node_modules/@els-js/angular-14/deps/@angular-devkit/build-angular",
      "@angular/cli": "file:./node_modules/@els-js/angular-14/deps/@angular/cli",
      "@angular/compiler-cli": "file:./node_modules/@els-js/angular-14/deps/@angular/compiler-cli",
      "@types/jasmine": "file:./node_modules/@els-js/angular-14/deps/@types/jasmine",
      "jasmine-core": "file:./node_modules/@els-js/angular-14/deps/jasmine-core",
      "karma": "file:./node_modules/@els-js/angular-14/deps/karma",
      "karma-chrome-launcher": "file:./node_modules/@els-js/angular-14/deps/karma-chrome-launcher",
      "karma-coverage": "file:./node_modules/@els-js/angular-14/deps/karma-coverage",
      "karma-jasmine": "file:./node_modules/@els-js/angular-14/deps/karma-jasmine",
      "karma-jasmine-html-reporter": "file:./node_modules/@els-js/angular-14/deps/karma-jasmine-html-reporter",
      "typescript": "file:./node_modules/@els-js/angular-14/deps/typescript"
  }
  ```
    
  </CodeWithCopy>

  </details>

  **Angular 15**
  <details>
    <summary>Click to expand</summary>
    
  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-15": "^0.0.1",
      "@angular/animations": "file:./node_modules/@els-js/angular-15/deps/@angular/animations",
      "@angular/common": "file:./node_modules/@els-js/angular-15/deps/@angular/common",
      "@angular/compiler": "file:./node_modules/@els-js/angular-15/deps/@angular/compiler",
      "@angular/core": "file:./node_modules/@els-js/angular-15/deps/@angular/core",
      "@angular/forms": "file:./node_modules/@els-js/angular-15/deps/@angular/forms",
      "@angular/platform-browser": "file:./node_modules/@els-js/angular-15/deps/@angular/platform-browser",
      "@angular/platform-browser-dynamic": "file:./node_modules/@els-js/angular-15/deps/@angular/platform-browser-dynamic",
      "@angular/router": "file:./node_modules/@els-js/angular-15/deps/@angular/router",
      "rxjs": "file:./node_modules/@els-js/angular-15/deps/rxjs",
      "tslib": "file:./node_modules/@els-js/angular-15/deps/tslib",
      "zone.js": "file:./node_modules/@els-js/angular-15/deps/zone.js"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "file:./node_modules/@els-js/angular-15/deps/@angular-devkit/build-angular",
      "@angular/cli": "file:./node_modules/@els-js/angular-15/deps/@angular/cli",
      "@angular/compiler-cli": "file:./node_modules/@els-js/angular-15/deps/@angular/compiler-cli",
      "@types/jasmine": "file:./node_modules/@els-js/angular-15/deps/@types/jasmine",
      "jasmine-core": "file:./node_modules/@els-js/angular-15/deps/jasmine-core",
      "karma": "file:./node_modules/@els-js/angular-15/deps/karma",
      "karma-chrome-launcher": "file:./node_modules/@els-js/angular-15/deps/karma-chrome-launcher",
      "karma-coverage": "file:./node_modules/@els-js/angular-15/deps/karma-coverage",
      "karma-jasmine": "file:./node_modules/@els-js/angular-15/deps/karma-jasmine",
      "karma-jasmine-html-reporter": "file:./node_modules/@els-js/angular-15/deps/karma-jasmine-html-reporter",
      "typescript": "file:./node_modules/@els-js/angular-15/deps/typescript"
  }
  ```
    
  </CodeWithCopy>

  </details>

  **Angular 16**
  <details>
    <summary>Click to expand</summary>
    
  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-16": "^0.0.1",
      "@angular/animations": "file:./node_modules/@els-js/angular-16/deps/@angular/animations",
      "@angular/common": "file:./node_modules/@els-js/angular-16/deps/@angular/common",
      "@angular/compiler": "file:./node_modules/@els-js/angular-16/deps/@angular/compiler",
      "@angular/core": "file:./node_modules/@els-js/angular-16/deps/@angular/core",
      "@angular/forms": "file:./node_modules/@els-js/angular-16/deps/@angular/forms",
      "@angular/platform-browser": "file:./node_modules/@els-js/angular-16/deps/@angular/platform-browser",
      "@angular/platform-browser-dynamic": "file:./node_modules/@els-js/angular-16/deps/@angular/platform-browser-dynamic",
      "@angular/router": "file:./node_modules/@els-js/angular-16/deps/@angular/router",
      "rxjs": "file:./node_modules/@els-js/angular-16/deps/rxjs",
      "tslib": "file:./node_modules/@els-js/angular-16/deps/tslib",
      "zone.js": "file:./node_modules/@els-js/angular-16/deps/zone.js"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "file:./node_modules/@els-js/angular-16/deps/@angular-devkit/build-angular",
      "@angular/cli": "file:./node_modules/@els-js/angular-16/deps/@angular/cli",
      "@angular/compiler-cli": "file:./node_modules/@els-js/angular-16/deps/@angular/compiler-cli",
      "@types/jasmine": "file:./node_modules/@els-js/angular-16/deps/@types/jasmine",
      "jasmine-core": "file:./node_modules/@els-js/angular-16/deps/jasmine-core",
      "karma": "file:./node_modules/@els-js/angular-16/deps/karma",
      "karma-chrome-launcher": "file:./node_modules/@els-js/angular-16/deps/karma-chrome-launcher",
      "karma-coverage": "file:./node_modules/@els-js/angular-16/deps/karma-coverage",
      "karma-jasmine": "file:./node_modules/@els-js/angular-16/deps/karma-jasmine",
      "karma-jasmine-html-reporter": "file:./node_modules/@els-js/angular-16/deps/karma-jasmine-html-reporter",
      "typescript": "file:./node_modules/@els-js/angular-16/deps/typescript"
  }
  ```
    
  </CodeWithCopy>

  </details>

  **Angular 17**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-17": "^0.0.1",
      "@angular/animations": "file:./node_modules/@els-js/angular-17/deps/@angular/animations",
      "@angular/common": "file:./node_modules/@els-js/angular-17/deps/@angular/common",
      "@angular/compiler": "file:./node_modules/@els-js/angular-17/deps/@angular/compiler",
      "@angular/core": "file:./node_modules/@els-js/angular-17/deps/@angular/core",
      "@angular/forms": "file:./node_modules/@els-js/angular-17/deps/@angular/forms",
      "@angular/platform-browser": "file:./node_modules/@els-js/angular-17/deps/@angular/platform-browser",
      "@angular/platform-browser-dynamic": "file:./node_modules/@els-js/angular-17/deps/@angular/platform-browser-dynamic",
      "@angular/router": "file:./node_modules/@els-js/angular-17/deps/@angular/router",
      "rxjs": "file:./node_modules/@els-js/angular-17/deps/rxjs",
      "tslib": "file:./node_modules/@els-js/angular-17/deps/tslib",
      "zone.js": "file:./node_modules/@els-js/angular-17/deps/zone.js"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "file:./node_modules/@els-js/angular-17/deps/@angular-devkit/build-angular",
      "@angular/cli": "file:./node_modules/@els-js/angular-17/deps/@angular/cli",
      "@angular/compiler-cli": "file:./node_modules/@els-js/angular-17/deps/@angular/compiler-cli",
      "@types/jasmine": "file:./node_modules/@els-js/angular-17/deps/@types/jasmine",
      "jasmine-core": "file:./node_modules/@els-js/angular-17/deps/jasmine-core",
      "karma": "file:./node_modules/@els-js/angular-17/deps/karma",
      "karma-chrome-launcher": "file:./node_modules/@els-js/angular-17/deps/karma-chrome-launcher",
      "karma-coverage": "file:./node_modules/@els-js/angular-17/deps/karma-coverage",
      "karma-jasmine": "file:./node_modules/@els-js/angular-17/deps/karma-jasmine",
      "karma-jasmine-html-reporter": "file:./node_modules/@els-js/angular-17/deps/karma-jasmine-html-reporter",
      "typescript": "file:./node_modules/@els-js/angular-17/deps/typescript"
  }
  ```

  </CodeWithCopy>

  </details>

  **Angular 18**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-18": "^0.0.1",
      "@angular/animations": "file:./node_modules/@els-js/angular-18/deps/@angular/animations",
      "@angular/common": "file:./node_modules/@els-js/angular-18/deps/@angular/common",
      "@angular/compiler": "file:./node_modules/@els-js/angular-18/deps/@angular/compiler",
      "@angular/core": "file:./node_modules/@els-js/angular-18/deps/@angular/core",
      "@angular/forms": "file:./node_modules/@els-js/angular-18/deps/@angular/forms",
      "@angular/platform-browser": "file:./node_modules/@els-js/angular-18/deps/@angular/platform-browser",
      "@angular/platform-browser-dynamic": "file:./node_modules/@els-js/angular-18/deps/@angular/platform-browser-dynamic",
      "@angular/router": "file:./node_modules/@els-js/angular-18/deps/@angular/router",
      "rxjs": "file:./node_modules/@els-js/angular-18/deps/rxjs",
      "tslib": "file:./node_modules/@els-js/angular-18/deps/tslib",
      "zone.js": "file:./node_modules/@els-js/angular-18/deps/zone.js"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "file:./node_modules/@els-js/angular-18/deps/@angular-devkit/build-angular",
      "@angular/cli": "file:./node_modules/@els-js/angular-18/deps/@angular/cli",
      "@angular/compiler-cli": "file:./node_modules/@els-js/angular-18/deps/@angular/compiler-cli",
      "@types/jasmine": "file:./node_modules/@els-js/angular-18/deps/@types/jasmine",
      "jasmine-core": "file:./node_modules/@els-js/angular-18/deps/jasmine-core",
      "karma": "file:./node_modules/@els-js/angular-18/deps/karma",
      "karma-chrome-launcher": "file:./node_modules/@els-js/angular-18/deps/karma-chrome-launcher",
      "karma-coverage": "file:./node_modules/@els-js/angular-18/deps/karma-coverage",
      "karma-jasmine": "file:./node_modules/@els-js/angular-18/deps/karma-jasmine",
      "karma-jasmine-html-reporter": "file:./node_modules/@els-js/angular-18/deps/karma-jasmine-html-reporter",
      "typescript": "file:./node_modules/@els-js/angular-18/deps/typescript"
  }
  ```
    
  </CodeWithCopy>

  </details>

5. In your terminal, run the following command to install ELS for Angular:

  <CodeWithCopy>
  
  ```text
  npm install --userconfig .npmrc
  ```
  
  </CodeWithCopy>

  You will see an output like:

  ```text
  added 12 packages, removed 931 packages, changed 22 packages, and audited 57 packages in 23s

  found 0 vulnerabilities
  ```

6. You've successfully integrated the TuxCare ELS for Angular repository into your project.

  -->