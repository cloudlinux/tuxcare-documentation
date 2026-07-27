<!-- markdownlint-disable MD029 MD024 MD036 -->

# SecureChain for Open Source Software

<SecureChainEcosystemSelector />

## What SecureChain Covers

* Verified, signed builds from trusted sources
* Coverage that continues after upstream end of life
* A single registry your developers and CI already know how to talk to

## Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

* **Vulnerability coverage.** TuxCare provides security patches for critical (CVSS 9.0+), high (CVSS 7.0–8.9), medium (CVSS 4.0–6.9), and low (CVSS below 4.0) vulnerabilities. TuxCare reserves the right to offer a mitigation strategy as an alternative to a direct code fix.

* **Response time.** Target response times depend on where a package sits in its lifecycle — whether upstream is still releasing fixes, or TuxCare is maintaining the package after upstream activity has stopped. TuxCare will make commercially reasonable efforts to adhere to the following guidelines:

| Severity | Maintenance *(from upstream fix)* | Sustained *(from CVE publication)* | Endless Lifecycle Support *(from CVE publication)* |
| :-- | :-: | :-: | :-: |
| Critical (CVSS 9.0+) | 7 days | 14 days | 14 days |
| High (CVSS 7.0–8.9) | 14 days | 21 days | 14 days |
| Medium (CVSS 4.0–6.9) | 30 days | 60 days | 60 days |
| Low (CVSS below 4.0) | 60 days | 90 days | 90 days |

These cycles reflect how a package is supported over time:

* **Maintenance** — upstream is actively releasing fixes (an upstream release within the last 180 days). Response times are measured from the upstream fix.
* **Sustained** — once there have been 90 days with no upstream release, TuxCare maintains the package directly. Response times are measured from CVE publication.
* **Endless Lifecycle Support (ELS)** — from day 181 of no upstream release onward, TuxCare provides continued patching under ELS. Response times are measured from CVE publication.

## Incident Reporting and Response Timeframe

Customers can report vulnerabilities by submitting a ticket through the [TuxCare Support Portal](https://tuxcare.com/support-portal/). TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the SecureChain scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

## Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our SecureChain offering. We provide verifiable metadata that helps customers understand package composition, software provenance, and vulnerability impact across the software supply chain.

* **SLSA Compliance**: TuxCare packages are built and signed to support verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance at Level 2 at launch, with Level 3 on the roadmap. Builds run from vetted sources, include attestations for dependencies, and undergo continuous testing to maintain integrity and trust.
* **Software Bill of Materials (SBOM)**: Machine-readable SBOMs provide visibility into package composition and dependencies, supporting software supply chain transparency and accountability. Depending on the package, SBOMs are provided in industry-standard formats — SPDX and CycloneDX.

:::warning
Note: SBOM availability for certain components is still expanding and may vary by package. Contact [sales@tuxcare.com](mailto:sales@tuxcare.com) for current availability details.
:::

* **Vulnerability Exploitability eXchange (VEX)**: Machine-readable VEX documents provide contextual vulnerability information, helping teams understand which known CVEs affect specific package versions and reduce remediation noise. VEX is published in standard formats, including CycloneDX VEX.
* **Verifiable Integrity and Provenance**: Packages and metadata provide end-to-end provenance information, helping customers verify how software was built, tested, and distributed.
* **Secure Distribution**: Signed packages and associated metadata are distributed through TuxCare-managed infrastructure to ensure authenticity and integrity.

## Support Duration

TuxCare provides continuous security patching for all SecureChain-supported open-source packages for as long as your organization requires them, eliminating the need for rushed or disruptive upgrades.

All updates are delivered at a fixed price for the full term of your contract, ensuring predictable costs and uninterrupted protection.

## Technical Support

TuxCare provides technical support according to the standard [support policy](https://tuxcare.com/TuxCare-support-policy.pdf).

It delivers 24/7/365 access to TuxCare's support team through the [TuxCare Support Portal](https://tuxcare.com/support-portal/) and to TuxCare's online knowledge base.

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates

</WhatsNext>

