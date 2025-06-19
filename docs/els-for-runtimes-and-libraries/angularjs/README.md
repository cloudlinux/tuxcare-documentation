# AngularJS

Endless Lifecycle Support (ELS) for AngularJS from TuxCare provides security fixes for AngularJS that have reached its end of life. This allows you to continue running AngularJS applications without vulnerability concerns, even after official support has ended.

:::warning
ELS for AngularJS is currently in active development. If you are interested in updates, adoption, or have specific requirements or feature requests, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

## Supported AngularJS Versions

* AngularJS 1.5, 1.6, 1.7, 1.8

## Connection to ELS for AngularJS Repository

This guide outlines the steps needed to integrate the TuxCare ELS for AngularJS repository.

## Step 1: Get user credentials

You need a username, password, and token in order to use TuxCare ELS AngularJS repository. Anonymous access is disabled. To receive the credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Step 2: Set Up ELS for AngularJS

TuxCare provides ELS for AngularJS as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.

* Navigate to the root directory of your AngularJS project.
* Create a `.npmrc` file or update it if it already exists.

  **Example:**

  ```text
  my-angularjs-project/
  ├── node_modules/
  ├── package.json
  ├── .npmrc         ⚠️ ← Create it here
  └── package-lock.json
  ```

* Use an editor of your choice (e.g., VS Code) to add the following registry address line:

  <CodeWithCopy>

  ```text
  registry=https://registry.npmjs.org/
  @els-angularjs:registry=https://nexus.repo.tuxcare.com/repository/els_angularjs/
  //nexus.repo.tuxcare.com/repository/els_angularjs/:_auth=${TOKEN}
  ```

  </CodeWithCopy>

  :::warning
  Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
  :::

* Update your `package.json` file to replace your AngularJS dependencies with the TuxCare packages:

  **AngularJS 1.5**

  <CodeWithCopy>

  ```text
  "dependencies": {
    "@els-angularjs/angular-1.5": "^0.0.1",
    "angular": "./node_modules/@els-angular/angularjs-1.5/deps/angular"
  }
  ```

  </CodeWithCopy>

  **AngularJS 1.6**

  <CodeWithCopy>

  ```text
  "dependencies": {
    "@els-angularjs/angular-1.6": "^0.0.1",
    "angular": "./node_modules/@els-angular/angularjs-1.6/deps/angular"
  }
  ```

  </CodeWithCopy>

  **AngularJS 1.7**

  <CodeWithCopy>

  ```text
  "dependencies": {
    "@els-angularjs/angular-1.7": "^0.0.1",
    "angular": "./node_modules/@els-angular/angularjs-1.7/deps/angular"
  }
  ```
  
  </CodeWithCopy>

  **AngularJS 1.8**

  <CodeWithCopy>

  ```text
  "dependencies": {
    "@els-angularjs/angular-1.8": "^0.0.1",
    "angular": "./node_modules/@els-angular/angularjs-1.8/deps/angular"
  }
  ```

  </CodeWithCopy>

* In your terminal, run the following command to install ELS for AngularJS dependencies:

  <CodeWithCopy>

  ```text
  npm install --userconfig .npmrc
  ```

  </CodeWithCopy>

  You will see an output like:

  ```text
  changed 1 package, and audited 5 packages in 892ms

  2 vulnerabilities (1 moderate, 1 high)
  ```

* You've successfully integrated the TuxCare ELS for AngularJS repository into your project.
