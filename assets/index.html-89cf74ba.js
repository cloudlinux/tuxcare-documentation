import{_ as e,n as a,p as n,a4 as s}from"./framework-1d7fbccb.js";const l={},u=s(`<h1 id="angular" tabindex="-1"><a class="header-anchor" href="#angular" aria-hidden="true">#</a> Angular</h1><p>Endless Lifecycle Support (ELS) for Angular from TuxCare provides security fixes for Angular that have reached its end of life. This allows you to continue running Angular applications without vulnerability concerns, even after official support has ended.</p><div class="warning custom-block"><p class="custom-block-title"></p><p>ELS for Angular is currently in active development. If you are interested in updates, adoption, or have specific requirements or feature requests, please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a></p></div><h2 id="supported-angular-versions" tabindex="-1"><a class="header-anchor" href="#supported-angular-versions" aria-hidden="true">#</a> Supported Angular Versions</h2><ul><li>Angular 12, 13, 14, 15, 16, 17, 18, 19</li><li>Angular 4, 5, 6, 7, 8, 9, 10, and 11 are in active development and will be available shortly</li></ul><h2 id="vulnerability-coverage-and-target-response-times" tabindex="-1"><a class="header-anchor" href="#vulnerability-coverage-and-target-response-times" aria-hidden="true">#</a> Vulnerability Coverage and Target Response Times</h2><p>TuxCare employs the Common Vulnerability Scoring System (CVSS v3.1) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor&#39;s score is lower than the NVD score, we prioritize the NVD score.</p><p>Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all &#39;High&#39; vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.</p><p>TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:</p><ul><li><strong>High and Critical CVEs (CVSS 7+):</strong> Patches provided within 14 days</li><li><strong>Medium-severity CVEs (CVSS 4.0 to 6.9):</strong> Patches provided within 60 days</li><li><strong>Low-severity CVEs:</strong> Patches provided within 90 days</li><li>TuxCare may offer a mitigation strategy as an alternative to a direct code fix.</li></ul><h2 id="incident-reporting-and-response-timeframe" tabindex="-1"><a class="header-anchor" href="#incident-reporting-and-response-timeframe" aria-hidden="true">#</a> Incident Reporting and Response Timeframe</h2><p>Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <a href="https://tuxcare.com/support-portal/" target="_blank" rel="noopener noreferrer">https://tuxcare.com/support-portal/</a>. TuxCare commits to providing an initial response to any reported issue within 3 days.</p><p>Requests for customer-directed security patches for CVEs that are outside of the ELS for Angular scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.</p><p>Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.</p><h2 id="enhanced-transparency-visibility" tabindex="-1"><a class="header-anchor" href="#enhanced-transparency-visibility" aria-hidden="true">#</a> Enhanced Transparency &amp; Visibility</h2><p>TuxCare&#39;s commitment to transparency and visibility is foundational to our ELS for Angular offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.</p><ul><li><strong>SLSA Compliance</strong>: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.</li><li><strong>Software Bill of Materials (SBOM)</strong>: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.</li></ul><div class="warning custom-block"><p class="custom-block-title"></p><p>Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a></p></div><ul><li><strong>Enhanced Metadata in Standard Formats:</strong> Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.</li><li><strong>Verifiable Integrity and Provenance</strong>: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.</li></ul><div class="warning custom-block"><p class="custom-block-title"></p><p>Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a></p></div><ul><li><strong>Secure Distribution</strong>: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.</li></ul><h2 id="technical-support" tabindex="-1"><a class="header-anchor" href="#technical-support" aria-hidden="true">#</a> Technical Support</h2><p>TuxCare provides technical support according to the <a href="https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA.." target="_blank" rel="noopener noreferrer">support policy</a> . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal <a href="https://tuxcare.com/support-portal/" target="_blank" rel="noopener noreferrer">https://tuxcare.com/support-portal/</a> and to the TuxCare’s online knowledge base.</p><h2 id="connection-to-els-for-angular-repository" tabindex="-1"><a class="header-anchor" href="#connection-to-els-for-angular-repository" aria-hidden="true">#</a> Connection to ELS for Angular Repository</h2><p>This guide outlines the steps needed to integrate the TuxCare ELS for Angular repository.</p><h2 id="step-1-get-user-credentials" tabindex="-1"><a class="header-anchor" href="#step-1-get-user-credentials" aria-hidden="true">#</a> Step 1: Get user credentials</h2><p>You need a username, password, and token in order to use TuxCare ELS Angular repository. Anonymous access is disabled. To receive the credentials please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p><h2 id="step-2-set-up-els-for-angular" tabindex="-1"><a class="header-anchor" href="#step-2-set-up-els-for-angular" aria-hidden="true">#</a> Step 2: Set Up ELS for Angular</h2><p>TuxCare provides ELS for Angular as an NPM package, hosted on a secure internal registry. Follow the steps below to add it to your project and get started.</p><ul><li><p>Navigate to the root directory of your Angular project.</p></li><li><p>Create a <code>.npmrc</code> file or update it if it already exists.</p><p><strong>Example:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>my-angular-project/
├── src/
├── angular.json
├── package.json
├── .npmrc         ⚠️ ← Create it here
└── tsconfig.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Use an editor of your choice (e.g., VS Code) to add the following registry address line:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>registry=https://registry.npmjs.org/
@els-angular:registry=https://nexus.repo.tuxcare.com/repository/els_angular/
//nexus.repo.tuxcare.com/repository/els_angular/:_auth=\${TOKEN}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="warning custom-block"><p class="custom-block-title"></p><p>Replace \${TOKEN} with the token you received from <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a>.</p></div></li><li><p>Update your <code>package.json</code> file to replace your Angular dependencies with the TuxCare packages:</p><p><strong>Angular 12</strong></p><details><summary>Click to expand</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;dependencies&quot;: {
    &quot;@els-js/angular-12&quot;: &quot;^0.0.1&quot;,
    &quot;@angular/animations&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular/animations&quot;,
    &quot;@angular/common&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular/common&quot;,
    &quot;@angular/compiler&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular/compiler&quot;,
    &quot;@angular/core&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular/core&quot;,
    &quot;@angular/forms&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular/forms&quot;,
    &quot;@angular/platform-browser&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular/platform-browser&quot;,
    &quot;@angular/platform-browser-dynamic&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular/platform-browser-dynamic&quot;,
    &quot;@angular/router&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular/router&quot;,
    &quot;rxjs&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/rxjs&quot;,
    &quot;tslib&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/tslib&quot;,
    &quot;zone.js&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/zone.js&quot;
},
&quot;devDependencies&quot;: {
    &quot;@angular-devkit/build-angular&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular-devkit/build-angular&quot;,
    &quot;@angular/cli&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular/cli&quot;,
    &quot;@angular/compiler-cli&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@angular/compiler-cli&quot;,
    &quot;@types/jasmine&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@types/jasmine&quot;,
    &quot;@types/node&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/@types/node&quot;,
    &quot;jasmine-core&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/jasmine-core&quot;,
    &quot;karma&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/karma&quot;,
    &quot;karma-chrome-launcher&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/karma-chrome-launcher&quot;,
    &quot;karma-coverage&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/karma-coverage&quot;,
    &quot;karma-jasmine&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/karma-jasmine&quot;,
    &quot;karma-jasmine-html-reporter&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/karma-jasmine-html-reporter&quot;,
    &quot;typescript&quot;: &quot;file:./node_modules/@els-js/angular-12/deps/typescript&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>Angular 13</strong></p><details><summary>Click to expand</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;dependencies&quot;: {
    &quot;@els-js/angular-13&quot;: &quot;^0.0.1&quot;,
    &quot;@angular/animations&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular/animations&quot;,
    &quot;@angular/common&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular/common&quot;,
    &quot;@angular/compiler&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular/compiler&quot;,
    &quot;@angular/core&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular/core&quot;,
    &quot;@angular/forms&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular/forms&quot;,
    &quot;@angular/platform-browser&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular/platform-browser&quot;,
    &quot;@angular/platform-browser-dynamic&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular/platform-browser-dynamic&quot;,
    &quot;@angular/router&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular/router&quot;,
    &quot;rxjs&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/rxjs&quot;,
    &quot;tslib&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/tslib&quot;,
    &quot;zone.js&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/zone.js&quot;
},
&quot;devDependencies&quot;: {
    &quot;@angular-devkit/build-angular&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular-devkit/build-angular&quot;,
    &quot;@angular/cli&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular/cli&quot;,
    &quot;@angular/compiler-cli&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@angular/compiler-cli&quot;,
    &quot;@types/jasmine&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@types/jasmine&quot;,
    &quot;@types/node&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/@types/node&quot;,
    &quot;jasmine-core&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/jasmine-core&quot;,
    &quot;karma&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/karma&quot;,
    &quot;karma-chrome-launcher&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/karma-chrome-launcher&quot;,
    &quot;karma-coverage&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/karma-coverage&quot;,
    &quot;karma-jasmine&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/karma-jasmine&quot;,
    &quot;karma-jasmine-html-reporter&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/karma-jasmine-html-reporter&quot;,
    &quot;typescript&quot;: &quot;file:./node_modules/@els-js/angular-13/deps/typescript&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>Angular 14</strong></p><details><summary>Click to expand</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;dependencies&quot;: {
    &quot;@els-js/angular-14&quot;: &quot;^0.0.1&quot;,
    &quot;@angular/animations&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular/animations&quot;,
    &quot;@angular/common&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular/common&quot;,
    &quot;@angular/compiler&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular/compiler&quot;,
    &quot;@angular/core&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular/core&quot;,
    &quot;@angular/forms&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular/forms&quot;,
    &quot;@angular/platform-browser&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular/platform-browser&quot;,
    &quot;@angular/platform-browser-dynamic&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular/platform-browser-dynamic&quot;,
    &quot;@angular/router&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular/router&quot;,
    &quot;rxjs&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/rxjs&quot;,
    &quot;tslib&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/tslib&quot;,
    &quot;zone.js&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/zone.js&quot;
},
&quot;devDependencies&quot;: {
    &quot;@angular-devkit/build-angular&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular-devkit/build-angular&quot;,
    &quot;@angular/cli&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular/cli&quot;,
    &quot;@angular/compiler-cli&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@angular/compiler-cli&quot;,
    &quot;@types/jasmine&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/@types/jasmine&quot;,
    &quot;jasmine-core&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/jasmine-core&quot;,
    &quot;karma&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/karma&quot;,
    &quot;karma-chrome-launcher&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/karma-chrome-launcher&quot;,
    &quot;karma-coverage&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/karma-coverage&quot;,
    &quot;karma-jasmine&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/karma-jasmine&quot;,
    &quot;karma-jasmine-html-reporter&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/karma-jasmine-html-reporter&quot;,
    &quot;typescript&quot;: &quot;file:./node_modules/@els-js/angular-14/deps/typescript&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>Angular 15</strong></p><details><summary>Click to expand</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;dependencies&quot;: {
    &quot;@els-js/angular-15&quot;: &quot;^0.0.1&quot;,
    &quot;@angular/animations&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular/animations&quot;,
    &quot;@angular/common&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular/common&quot;,
    &quot;@angular/compiler&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular/compiler&quot;,
    &quot;@angular/core&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular/core&quot;,
    &quot;@angular/forms&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular/forms&quot;,
    &quot;@angular/platform-browser&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular/platform-browser&quot;,
    &quot;@angular/platform-browser-dynamic&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular/platform-browser-dynamic&quot;,
    &quot;@angular/router&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular/router&quot;,
    &quot;rxjs&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/rxjs&quot;,
    &quot;tslib&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/tslib&quot;,
    &quot;zone.js&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/zone.js&quot;
},
&quot;devDependencies&quot;: {
    &quot;@angular-devkit/build-angular&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular-devkit/build-angular&quot;,
    &quot;@angular/cli&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular/cli&quot;,
    &quot;@angular/compiler-cli&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@angular/compiler-cli&quot;,
    &quot;@types/jasmine&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/@types/jasmine&quot;,
    &quot;jasmine-core&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/jasmine-core&quot;,
    &quot;karma&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/karma&quot;,
    &quot;karma-chrome-launcher&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/karma-chrome-launcher&quot;,
    &quot;karma-coverage&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/karma-coverage&quot;,
    &quot;karma-jasmine&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/karma-jasmine&quot;,
    &quot;karma-jasmine-html-reporter&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/karma-jasmine-html-reporter&quot;,
    &quot;typescript&quot;: &quot;file:./node_modules/@els-js/angular-15/deps/typescript&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>Angular 16</strong></p><details><summary>Click to expand</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;dependencies&quot;: {
    &quot;@els-js/angular-16&quot;: &quot;^0.0.1&quot;,
    &quot;@angular/animations&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular/animations&quot;,
    &quot;@angular/common&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular/common&quot;,
    &quot;@angular/compiler&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular/compiler&quot;,
    &quot;@angular/core&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular/core&quot;,
    &quot;@angular/forms&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular/forms&quot;,
    &quot;@angular/platform-browser&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular/platform-browser&quot;,
    &quot;@angular/platform-browser-dynamic&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular/platform-browser-dynamic&quot;,
    &quot;@angular/router&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular/router&quot;,
    &quot;rxjs&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/rxjs&quot;,
    &quot;tslib&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/tslib&quot;,
    &quot;zone.js&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/zone.js&quot;
},
&quot;devDependencies&quot;: {
    &quot;@angular-devkit/build-angular&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular-devkit/build-angular&quot;,
    &quot;@angular/cli&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular/cli&quot;,
    &quot;@angular/compiler-cli&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@angular/compiler-cli&quot;,
    &quot;@types/jasmine&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/@types/jasmine&quot;,
    &quot;jasmine-core&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/jasmine-core&quot;,
    &quot;karma&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/karma&quot;,
    &quot;karma-chrome-launcher&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/karma-chrome-launcher&quot;,
    &quot;karma-coverage&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/karma-coverage&quot;,
    &quot;karma-jasmine&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/karma-jasmine&quot;,
    &quot;karma-jasmine-html-reporter&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/karma-jasmine-html-reporter&quot;,
    &quot;typescript&quot;: &quot;file:./node_modules/@els-js/angular-16/deps/typescript&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>Angular 17</strong></p><details><summary>Click to expand</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;dependencies&quot;: {
    &quot;@els-js/angular-17&quot;: &quot;^0.0.1&quot;,
    &quot;@angular/animations&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular/animations&quot;,
    &quot;@angular/common&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular/common&quot;,
    &quot;@angular/compiler&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular/compiler&quot;,
    &quot;@angular/core&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular/core&quot;,
    &quot;@angular/forms&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular/forms&quot;,
    &quot;@angular/platform-browser&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular/platform-browser&quot;,
    &quot;@angular/platform-browser-dynamic&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular/platform-browser-dynamic&quot;,
    &quot;@angular/router&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular/router&quot;,
    &quot;rxjs&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/rxjs&quot;,
    &quot;tslib&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/tslib&quot;,
    &quot;zone.js&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/zone.js&quot;
},
&quot;devDependencies&quot;: {
    &quot;@angular-devkit/build-angular&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular-devkit/build-angular&quot;,
    &quot;@angular/cli&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular/cli&quot;,
    &quot;@angular/compiler-cli&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@angular/compiler-cli&quot;,
    &quot;@types/jasmine&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/@types/jasmine&quot;,
    &quot;jasmine-core&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/jasmine-core&quot;,
    &quot;karma&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/karma&quot;,
    &quot;karma-chrome-launcher&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/karma-chrome-launcher&quot;,
    &quot;karma-coverage&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/karma-coverage&quot;,
    &quot;karma-jasmine&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/karma-jasmine&quot;,
    &quot;karma-jasmine-html-reporter&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/karma-jasmine-html-reporter&quot;,
    &quot;typescript&quot;: &quot;file:./node_modules/@els-js/angular-17/deps/typescript&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>Angular 18</strong></p><details><summary>Click to expand</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;dependencies&quot;: {
    &quot;@els-js/angular-18&quot;: &quot;^0.0.1&quot;,
    &quot;@angular/animations&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular/animations&quot;,
    &quot;@angular/common&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular/common&quot;,
    &quot;@angular/compiler&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular/compiler&quot;,
    &quot;@angular/core&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular/core&quot;,
    &quot;@angular/forms&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular/forms&quot;,
    &quot;@angular/platform-browser&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular/platform-browser&quot;,
    &quot;@angular/platform-browser-dynamic&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular/platform-browser-dynamic&quot;,
    &quot;@angular/router&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular/router&quot;,
    &quot;rxjs&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/rxjs&quot;,
    &quot;tslib&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/tslib&quot;,
    &quot;zone.js&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/zone.js&quot;
},
&quot;devDependencies&quot;: {
    &quot;@angular-devkit/build-angular&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular-devkit/build-angular&quot;,
    &quot;@angular/cli&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular/cli&quot;,
    &quot;@angular/compiler-cli&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@angular/compiler-cli&quot;,
    &quot;@types/jasmine&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/@types/jasmine&quot;,
    &quot;jasmine-core&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/jasmine-core&quot;,
    &quot;karma&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/karma&quot;,
    &quot;karma-chrome-launcher&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/karma-chrome-launcher&quot;,
    &quot;karma-coverage&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/karma-coverage&quot;,
    &quot;karma-jasmine&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/karma-jasmine&quot;,
    &quot;karma-jasmine-html-reporter&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/karma-jasmine-html-reporter&quot;,
    &quot;typescript&quot;: &quot;file:./node_modules/@els-js/angular-18/deps/typescript&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><strong>Angular 19</strong></p><details><summary>Click to expand</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;dependencies&quot;: {
    &quot;@els-js/angular-19&quot;: &quot;^0.0.1&quot;,
    &quot;@angular/common&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@angular/common&quot;,
    &quot;@angular/compiler&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@angular/compiler&quot;,
    &quot;@angular/core&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@angular/core&quot;,
    &quot;@angular/forms&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@angular/forms&quot;,
    &quot;@angular/platform-browser&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@angular/platform-browser&quot;,
    &quot;@angular/platform-browser-dynamic&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@angular/platform-browser-dynamic&quot;,
    &quot;@angular/router&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@angular/router&quot;,
    &quot;rxjs&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/rxjs&quot;,
    &quot;tslib&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/tslib&quot;,
    &quot;zone.js&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/zone.js&quot;
},
&quot;devDependencies&quot;: {
    &quot;@angular-devkit/build-angular&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@angular-devkit/build-angular&quot;,
    &quot;@angular/cli&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@angular/cli&quot;,
    &quot;@angular/compiler-cli&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@angular/compiler-cli&quot;,
    &quot;@types/jasmine&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/@types/jasmine&quot;,
    &quot;jasmine-core&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/jasmine-core&quot;,
    &quot;karma&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/karma&quot;,
    &quot;karma-chrome-launcher&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/karma-chrome-launcher&quot;,
    &quot;karma-coverage&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/karma-coverage&quot;,
    &quot;karma-jasmine&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/karma-jasmine&quot;,
    &quot;karma-jasmine-html-reporter&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/karma-jasmine-html-reporter&quot;,
    &quot;typescript&quot;: &quot;file:./node_modules/@els-js/angular-19/deps/typescript&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li><li><p>In your terminal, run the following command to install ELS for Angular 16 dependencies:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --userconfig .npmrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will see an output like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>added 12 packages, removed 931 packages, changed 22 packages, and audited 57 packages in 23s

found 0 vulnerabilities
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You&#39;ve successfully integrated the TuxCare ELS for Angular repository into your project.</p></li></ul>`,30),o=[u];function i(r,t){return a(),n("div",null,o)}const m=e(l,[["render",i],["__file","index.html.vue"]]);export{m as default};
