# AngularJS

Endless Lifecycle Support (ELS) for AngularJS from TuxCare provides security fixes for AngularJS versions that have reached its end of life. This allows you to continue running AngularJS applications without vulnerability concerns, even after official support has ended.

:::warning
ELS for AngularJS is currently in active development. If you are interested in updates, adoption, or have specific requirements or feature requests, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
:::

## Supported AngularJS Versions

* AngularJS 1.5, 1.6, 1.7, 1.8

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

Requests for customer-directed security patches for CVEs that are outside of the ELS for AngularJS scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

## Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for AngularJS offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

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
  @els-js:registry=https://nexus.repo.tuxcare.com/repository/els_js/
  //nexus.repo.tuxcare.com/repository/els-js/:_auth=${TOKEN}
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
      "angular": "npm:@els-js/angularjs-1.5"
  }
  ```

  </CodeWithCopy>

  **AngularJS 1.6**

  <CodeWithCopy>

  ```text
  "dependencies": {
    "angular": "npm:@els-js/angularjs-1.6"
  }
  ```

  </CodeWithCopy>

  **AngularJS 1.7**

  <CodeWithCopy>

  ```text
  "dependencies": {
    "angular": "npm:@els-js/angularjs-1.7"
  }
  ```

  </CodeWithCopy>

  **AngularJS 1.8**

  <CodeWithCopy>

  ```text
  "dependencies": {
    "angular": "npm:@els-js/angularjs-1.8"
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
