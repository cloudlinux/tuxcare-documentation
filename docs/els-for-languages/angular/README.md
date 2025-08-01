# Angular

Endless Lifecycle Support (ELS) for Angular from TuxCare provides security fixes for Angular versions that have reached its end of life. This allows you to continue running Angular applications without vulnerability concerns, even after official support has ended.

:::warning
ELS for Angular is currently in active development. If you are interested in updates, adoption, or have specific requirements or feature requests, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

## Supported Angular Versions

Angular versions 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, and 19 are supported.

## Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3.1) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

* **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
* **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
* **Low-severity CVEs:** Patches provided within 90 days
* TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

## Incident Reporting and Response Timeframe

Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <https://tuxcare.com/support-portal/>. TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Angular scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

## Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Angular offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

* **SLSA Compliance**: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.
* **Software Bill of Materials (SBOM)**: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.

:::warning
Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

* **Enhanced Metadata in Standard Formats:** Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.
* **Verifiable Integrity and Provenance**: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.

:::warning
Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

* **Secure Distribution**: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.

## Technical Support

TuxCare provides technical support according to the [support policy](https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..) . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal <https://tuxcare.com/support-portal/> and to the TuxCare’s online knowledge base.

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