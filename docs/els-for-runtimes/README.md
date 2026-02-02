<!-- markdownlint-disable MD029 MD024 MD036 -->

# Endless Lifecycle Support for Runtimes

<ELSRTechnology />

## Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3.1) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

* **Vulnerability coverage.** TuxCare shall provide security patches for critical- and high-risk (CVSS 7.0 and above), medium-risk (CVSS 4.0 to 6.9), and low-risk (CVSS 0.1 to 3.9) vulnerabilities. TuxCare reserves the right to offer a mitigation strategy as an alternative to a direct code fix.

* **Response time.** TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:
    * **High- and critical-risk vulnerabilities (CVSS 7.0 and above):** Patches are provided within 14 days from the date the vulnerabilities are publicly disclosed.
    * **Medium-risk vulnerabilities (CVSS 4.0 to 6.9):** Patches are provided within 60 days from the date the vulnerabilities are publicly disclosed.
    * **Low-risk vulnerabilities (CVSS 0.1 to 3.9):** Patches are provided within 90 days from the date the vulnerabilities are publicly disclosed.

## Incident Reporting and Response Timeframe

Customers can report vulnerabilities by submitting a ticket through the [TuxCare Support Portal](https://tuxcare.com/support-portal/). TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Runtimes scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

## Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Runtimes offering. We aim to provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

<!-- * **SLSA Compliance**: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.
-->
* **Software Bill of Materials (SBOM)**: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.

:::warning
Note: SBOM support for certain components is in progress and will be available soon. To confirm current availability or expected timeframes, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
:::

* **Enhanced Metadata in Standard Formats:** Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.
* **Verifiable Integrity and Provenance**: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.

:::warning
Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
:::

* **Secure Distribution**: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.

## Support Duration

TuxCare provides continuous security patching for all supported end-of-life (EOL) technologies for as long as your organization requires them, eliminating the need for rushed or disruptive upgrades.

All updates are delivered at a fixed price for the full term of your contract, ensuring predictable costs and uninterrupted protection.

## Technical Support

TuxCare provides technical support according to the:
* Standard [support policy](https://tuxcare.com/TuxCare-support-policy.pdf) **(excluding .NET)**.
* The **.NET-specific** [support policy](https://tuxcare.com/TuxCare-els-windows-support-policy.pdf).

It delivers 24/7/365 access to the TuxCare’s support team through the [TuxCare Support Portal](https://tuxcare.com/support-portal/) and to the TuxCare’s online knowledge base.
