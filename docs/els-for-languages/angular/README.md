# Angular

Endless Lifecycle Support (ELS) for Angular from TuxCare provides security fixes for Angular that have reached its end of life. This allows you to continue running Angular applications without vulnerability concerns, even after official support has ended.

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
  @els-js:registry=https://nexus.repo.tuxcare.com/repository/els_js/
  //nexus.repo.tuxcare.com/repository/els_js/:_auth=${TOKEN}
  ```

  </CodeWithCopy>

  :::warning
  Replace ${TOKEN} with the token you received from [sales@tuxcare.com](mailto:sales@tuxcare.com).
  :::

4. Update your `package.json` file to replace your Angular dependencies with the TuxCare packages:
  
  **Angular 4**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-4": "^0.0.1",
      "@angular/animations": "^4.2.4",
      "@angular/common": "^4.2.4",
      "@angular/compiler": "^4.2.4",
      "@angular/core": "^4.2.4",
      "@angular/forms": "^4.2.4",
      "@angular/http": "^4.2.4",
      "@angular/platform-browser": "^4.2.4",
      "@angular/platform-browser-dynamic": "^4.2.4",
      "@angular/router": "^4.2.4",
      "core-js": "^2.4.1",
      "rxjs": "^5.4.2",
      "zone.js": "^0.8.14"
  },
  "devDependencies": {
      "@angular/cli": "1.4.10",
      "@angular/compiler-cli": "^4.2.4",
      "@angular/language-service": "^4.2.4",
      "@types/jasmine": "~2.5.53",
      "@types/jasminewd2": "~2.0.2",
      "@types/node": "~6.0.60",
      "codelyzer": "~3.2.0",
      "jasmine-core": "~2.6.2",
      "jasmine-spec-reporter": "~4.1.0",
      "karma": "~1.7.0",
      "karma-chrome-launcher": "~2.1.1",
      "karma-cli": "~1.0.1",
      "karma-coverage-istanbul-reporter": "^1.2.1",
      "karma-jasmine": "~1.1.0",
      "karma-jasmine-html-reporter": "^0.2.2",
      "protractor": "~5.1.2",
      "ts-node": "~3.2.0",
      "tslint": "~5.7.0",
      "typescript": "~2.3.3"
  }
  ```

  </CodeWithCopy>

  </details>

  **Angular 5**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-5": "^0.0.1",
      "@angular/animations": "^5.2.0",
      "@angular/common": "^5.2.0",
      "@angular/compiler": "^5.2.0",
      "@angular/core": "^5.2.0",
      "@angular/forms": "^5.2.0",
      "@angular/http": "^5.2.0",
      "@angular/platform-browser": "^5.2.0",
      "@angular/platform-browser-dynamic": "^5.2.0",
      "@angular/router": "^5.2.0",
      "core-js": "^2.4.1",
      "rxjs": "^5.5.6",
      "zone.js": "^0.8.19"
  },
  "devDependencies": {
      "@angular/cli": "~1.7.4",
      "@angular/compiler-cli": "^5.2.0",
      "@angular/language-service": "^5.2.0",
      "@types/jasmine": "~2.8.3",
      "@types/jasminewd2": "~2.0.2",
      "@types/node": "~6.0.60",
      "codelyzer": "^4.0.1",
      "jasmine-core": "~2.8.0",
      "jasmine-spec-reporter": "~4.2.1",
      "karma": "~2.0.0",
      "karma-chrome-launcher": "~2.2.0",
      "karma-coverage-istanbul-reporter": "^1.2.1",
      "karma-jasmine": "~1.1.0",
      "karma-jasmine-html-reporter": "^0.2.2",
      "protractor": "~5.1.2",
      "ts-node": "~4.1.0",
      "tslint": "~5.9.1",
      "typescript": "~2.5.3"
  }
  ```

  </CodeWithCopy>

  </details>

  **Angular 6**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-6": "^0.0.1",
      "@angular/animations": "^6.1.0",
      "@angular/common": "^6.1.0",
      "@angular/compiler": "^6.1.0",
      "@angular/core": "^6.1.0",
      "@angular/forms": "^6.1.0",
      "@angular/http": "^6.1.0",
      "@angular/platform-browser": "^6.1.0",
      "@angular/platform-browser-dynamic": "^6.1.0",
      "@angular/router": "^6.1.0",
      "core-js": "^2.5.4",
      "rxjs": "~6.2.0",
      "zone.js": "~0.8.26"
      },
  "devDependencies": {
      "@angular-devkit/build-angular": "~0.8.0",
      "@angular/cli": "~6.2.9",
      "@angular/compiler-cli": "^6.1.0",
      "@angular/language-service": "^6.1.0",
      "@types/jasmine": "~2.8.8",
      "@types/jasminewd2": "~2.0.3",
      "@types/node": "~8.9.4",
      "codelyzer": "~4.3.0",
      "jasmine-core": "~2.99.1",
      "jasmine-spec-reporter": "~4.2.1",
      "karma": "~3.0.0",
      "karma-chrome-launcher": "~2.2.0",
      "karma-coverage-istanbul-reporter": "~2.0.1",
      "karma-jasmine": "~1.1.2",
      "karma-jasmine-html-reporter": "^0.2.2",
      "protractor": "~5.4.0",
      "ts-node": "~7.0.0",
      "tslint": "~5.11.0",
      "typescript": "~2.9.2"
  }
  ```

  </CodeWithCopy>

  </details>

  **Angular 7**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-7": "^0.0.1",
      "@angular/animations": "~7.2.0",
      "@angular/common": "~7.2.0",
      "@angular/compiler": "~7.2.0",
      "@angular/core": "~7.2.0",
      "@angular/forms": "~7.2.0",
      "@angular/platform-browser": "~7.2.0",
      "@angular/platform-browser-dynamic": "~7.2.0",
      "@angular/router": "~7.2.0",
      "core-js": "^2.5.4",
      "rxjs": "~6.3.3",
      "tslib": "^1.9.0",
      "zone.js": "~0.8.26"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "~0.13.0",
      "@angular/cli": "~7.3.10",
      "@angular/compiler-cli": "~7.2.0",
      "@angular/language-service": "~7.2.0",
      "@types/node": "~8.9.4",
      "@types/jasmine": "~2.8.8",
      "@types/jasminewd2": "~2.0.3",
      "codelyzer": "~4.5.0",
      "jasmine-core": "~2.99.1",
      "jasmine-spec-reporter": "~4.2.1",
      "karma": "~4.0.0",
      "karma-chrome-launcher": "~2.2.0",
      "karma-coverage-istanbul-reporter": "~2.0.1",
      "karma-jasmine": "~1.1.2",
      "karma-jasmine-html-reporter": "^0.2.2",
      "protractor": "~5.4.0",
      "ts-node": "~7.0.0",
      "tslint": "~5.11.0",
      "typescript": "~3.2.2"
  }
  ```

  </CodeWithCopy>

  </details>

  **Angular 8**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-8": "^0.0.1",
      "@angular/animations": "~8.2.14",
      "@angular/common": "~8.2.14",
      "@angular/compiler": "~8.2.14",
      "@angular/core": "~8.2.14",
      "@angular/forms": "~8.2.14",
      "@angular/platform-browser": "~8.2.14",
      "@angular/platform-browser-dynamic": "~8.2.14",
      "@angular/router": "~8.2.14",
      "rxjs": "~6.4.0",
      "tslib": "^1.10.0",
      "zone.js": "~0.9.1"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "~0.803.29",
      "@angular/cli": "~8.3.29",
      "@angular/compiler-cli": "~8.2.14",
      "@angular/language-service": "~8.2.14",
      "@types/node": "~8.9.4",
      "@types/jasmine": "~3.3.8",
      "@types/jasminewd2": "~2.0.3",
      "codelyzer": "^5.0.0",
      "jasmine-core": "~3.4.0",
      "jasmine-spec-reporter": "~4.2.1",
      "karma": "~4.1.0",
      "karma-chrome-launcher": "~2.2.0",
      "karma-coverage-istanbul-reporter": "~2.0.1",
      "karma-jasmine": "~2.0.1",
      "karma-jasmine-html-reporter": "^1.4.0",
      "protractor": "~7.0.0",
      "ts-node": "~7.0.0",
      "tslint": "~5.15.0",
      "typescript": "~3.5.3"
  }
  ```

  </CodeWithCopy>

  </details>

  **Angular 9**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-9": "^0.0.1",
      "@angular/animations": "~9.1.13",
      "@angular/common": "~9.1.13",
      "@angular/compiler": "~9.1.13",
      "@angular/core": "~9.1.13",
      "@angular/forms": "~9.1.13",
      "@angular/platform-browser": "~9.1.13",
      "@angular/platform-browser-dynamic": "~9.1.13",
      "@angular/router": "~9.1.13",
      "rxjs": "~6.5.4",
      "tslib": "^1.10.0",
      "zone.js": "~0.10.2"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "~0.901.15",
      "@angular/cli": "~9.1.15",
      "@angular/compiler-cli": "~9.1.13",
      "@types/node": "^12.11.1",
      "@types/jasmine": "~3.5.0",
      "@types/jasminewd2": "~2.0.3",
      "codelyzer": "^5.1.2",
      "jasmine-core": "~3.5.0",
      "jasmine-spec-reporter": "~4.2.1",
      "karma": "~5.0.0",
      "karma-chrome-launcher": "~3.1.0",
      "karma-coverage-istanbul-reporter": "~2.1.0",
      "karma-jasmine": "~3.0.1",
      "karma-jasmine-html-reporter": "^1.4.2",
      "protractor": "~7.0.0",
      "ts-node": "~8.3.0",
      "tslint": "~6.1.0",
      "typescript": "~3.8.3"
  }
  ```

  </CodeWithCopy>

  </details>

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
      "@angular/animations": "file:./node_modules/@els-js/angular-14/deps/animations",
      "@angular/common": "file:./node_modules/@els-js/angular-14/deps/common",
      "@angular/compiler": "file:./node_modules/@els-js/angular-14/deps/compiler",
      "@angular/core": "file:./node_modules/@els-js/angular-14/deps/core",
      "@angular/forms": "file:./node_modules/@els-js/angular-14/deps/forms",
      "@angular/platform-browser": "file:./node_modules/@els-js/angular-14/deps/platform-browser",
      "@angular/platform-browser-dynamic": "file:./node_modules/@els-js/angular-14/deps/platform-browser-dynamic",
      "@angular/router": "file:./node_modules/@els-js/angular-14/deps/router",
      "rxjs": "~7.4.0",
      "tslib": "^2.3.0",
      "zone.js": "~0.11.4"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "^14.2.13",
      "@angular/cli": "~14.2.13",
      "@angular/compiler-cli": "file:./node_modules/@els-js/angular-14/deps/compiler-cli",
      "@types/jasmine": "~4.0.0",
      "jasmine-core": "~4.3.0",
      "karma": "~6.4.0",
      "karma-chrome-launcher": "~3.1.0",
      "karma-coverage": "~2.2.0",
      "karma-jasmine": "~5.1.0",
      "karma-jasmine-html-reporter": "~2.0.0",
      "typescript": "~4.7.2"
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
      "@angular/animations": "file:./node_modules/@els-js/angular-15/deps/animations",
      "@angular/common": "file:./node_modules/@els-js/angular-15/deps/common",
      "@angular/compiler": "file:./node_modules/@els-js/angular-15/deps/compiler",
      "@angular/core": "file:./node_modules/@els-js/angular-15/deps/core",
      "@angular/forms": "file:./node_modules/@els-js/angular-15/deps/forms",
      "@angular/platform-browser": "file:./node_modules/@els-js/angular-15/deps/platform-browser",
      "@angular/platform-browser-dynamic": "file:./node_modules/@els-js/angular-15/deps/platform-browser-dynamic",
      "@angular/router": "file:./node_modules/@els-js/angular-15/deps/router",
      "rxjs": "~7.8.0",
      "tslib": "^2.3.0",
      "zone.js": "~0.12.0"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "^15.2.11",
      "@angular/cli": "~15.2.11",
      "@angular/compiler-cli": "file:./node_modules/@els-js/angular-15/deps/compiler-cli",
      "@types/jasmine": "~4.3.0",
      "jasmine-core": "~4.5.0",
      "karma": "~6.4.0",
      "karma-chrome-launcher": "~3.1.0",
      "karma-coverage": "~2.2.0",
      "karma-jasmine": "~5.1.0",
      "karma-jasmine-html-reporter": "~2.0.0",
      "typescript": "~4.9.4"
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

  **Angular 19**
  <details>
    <summary>Click to expand</summary>

  <CodeWithCopy>

  ```text
  "dependencies": {
      "@els-js/angular-19": "^0.0.1",
      "@angular/common": "file:./node_modules/@els-js/angular-19/deps/@angular/common",
      "@angular/compiler": "file:./node_modules/@els-js/angular-19/deps/@angular/compiler",
      "@angular/core": "file:./node_modules/@els-js/angular-19/deps/@angular/core",
      "@angular/forms": "file:./node_modules/@els-js/angular-19/deps/@angular/forms",
      "@angular/platform-browser": "file:./node_modules/@els-js/angular-19/deps/@angular/platform-browser",
      "@angular/platform-browser-dynamic": "file:./node_modules/@els-js/angular-19/deps/@angular/platform-browser-dynamic",
      "@angular/router": "file:./node_modules/@els-js/angular-19/deps/@angular/router",
      "rxjs": "file:./node_modules/@els-js/angular-19/deps/rxjs",
      "tslib": "file:./node_modules/@els-js/angular-19/deps/tslib",
      "zone.js": "file:./node_modules/@els-js/angular-19/deps/zone.js"
  },
  "devDependencies": {
      "@angular-devkit/build-angular": "file:./node_modules/@els-js/angular-19/deps/@angular-devkit/build-angular",
      "@angular/cli": "file:./node_modules/@els-js/angular-19/deps/@angular/cli",
      "@angular/compiler-cli": "file:./node_modules/@els-js/angular-19/deps/@angular/compiler-cli",
      "@types/jasmine": "file:./node_modules/@els-js/angular-19/deps/@types/jasmine",
      "jasmine-core": "file:./node_modules/@els-js/angular-19/deps/jasmine-core",
      "karma": "file:./node_modules/@els-js/angular-19/deps/karma",
      "karma-chrome-launcher": "file:./node_modules/@els-js/angular-19/deps/karma-chrome-launcher",
      "karma-coverage": "file:./node_modules/@els-js/angular-19/deps/karma-coverage",
      "karma-jasmine": "file:./node_modules/@els-js/angular-19/deps/karma-jasmine",
      "karma-jasmine-html-reporter": "file:./node_modules/@els-js/angular-19/deps/karma-jasmine-html-reporter",
      "typescript": "file:./node_modules/@els-js/angular-19/deps/typescript"
  }
  ```
    
  </CodeWithCopy>

  </details>

5. In your terminal, run the following command to install ELS for Angular 16 dependencies:

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