import{_ as e,n as t,p as a,v as n,a4 as i}from"./framework-69764084.js";const r={},s=i(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><p>Endless Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.</p><h2 id="supported-os-and-python-versions" tabindex="-1"><a class="header-anchor" href="#supported-os-and-python-versions" aria-hidden="true">#</a> Supported OS and Python versions</h2><p><strong>Supported architecture:</strong> 64-bit.</p><table><thead><tr><th style="text-align:center;">OS</th><th style="text-align:center;">Package Type</th><th style="text-align:center;">OS Version</th><th style="text-align:center;">Python version</th></tr></thead><tbody><tr><td style="text-align:center;">CentOS, CloudLinux, OracleLinux, etc.</td><td style="text-align:center;">RPM</td><td style="text-align:center;">6.x, 7.x, 8.x</td><td style="text-align:center;">2.7, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13</td></tr><tr><td style="text-align:center;">AlmaLinux</td><td style="text-align:center;">RPM</td><td style="text-align:center;">9.x</td><td style="text-align:center;">2.7, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13</td></tr><tr><td style="text-align:center;">Ubuntu</td><td style="text-align:center;">DEB</td><td style="text-align:center;">16.04, 18.04, 20.04, 22.04, 24.04</td><td style="text-align:center;">3.8, 3.11</td></tr><tr><td style="text-align:center;">Debian</td><td style="text-align:center;">DEB</td><td style="text-align:center;">10, 11, 12</td><td style="text-align:center;">3.8, 3.11</td></tr></tbody></table><p>*Other distros and architectures upon request.</p><h2 id="vulnerability-coverage-and-target-response-times" tabindex="-1"><a class="header-anchor" href="#vulnerability-coverage-and-target-response-times" aria-hidden="true">#</a> Vulnerability Coverage and Target Response Times</h2><p>TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor&#39;s score is lower than the NVD score, we prioritize the NVD score.</p><p>Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI-DSS) mandates that all &#39;High&#39; vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, have similar requirements.</p><p>TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:</p><ul><li><strong>High and Critical CVEs (CVSS 7+):</strong> Patches provided within 14 days</li><li><strong>Medium-severity CVEs (CVSS 4.0 to 6.9):</strong> Patches provided within 60 days</li><li><strong>Low-severity CVEs:</strong> Patches provided within 90 days</li><li>TuxCare may offer a mitigation strategy as an alternative to a direct code fix.</li></ul><h2 id="incident-reporting-and-response-timeframe" tabindex="-1"><a class="header-anchor" href="#incident-reporting-and-response-timeframe" aria-hidden="true">#</a> Incident Reporting and Response Timeframe</h2><p>Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <a href="https://tuxcare.com/support-portal/" target="_blank" rel="noopener noreferrer">https://tuxcare.com/support-portal/</a>. TuxCare commits to providing an initial response to any reported issue within 3 days.</p><p>Requests for customer-directed security patches for CVEs that are outside of the ELS for Python scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.</p><p>Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.</p><h2 id="enhanced-transparency-visibility" tabindex="-1"><a class="header-anchor" href="#enhanced-transparency-visibility" aria-hidden="true">#</a> Enhanced Transparency &amp; Visibility</h2><p>TuxCare&#39;s commitment to transparency and visibility is foundational to our ELS for Python offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.</p><ul><li><strong>SLSA Compliance</strong>: All packages are built and signed to ensure verifiable Supply-chain Levels for Software Artifacts (SLSA) compliance. They are securely constructed from vetted sources, include attestations for all dependencies, and undergo continuous testing to maintain integrity and security.</li><li><strong>Software Bill of Materials (SBOM)</strong>: We provide complete visibility into the software supply chain with a comprehensive inventory of every package in the codebase, ensuring transparency and accountability in your software ecosystem.</li></ul><div class="warning custom-block"><p class="custom-block-title"></p><p>Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a></p></div><ul><li><strong>Enhanced Metadata in Standard Formats:</strong> Each SBOM is provided in universally recognized formats such as SPDX and VEX. These include enhanced metadata like artifact analysis, package health, and vulnerability impact data, ensuring that you have the most detailed and actionable information at your fingertips.</li><li><strong>Verifiable Integrity and Provenance</strong>: Our packages and metadata provide comprehensive end-to-end provenance, detailing how each package was constructed and tested, ensuring that all components in your software stack are trustworthy.</li></ul><div class="warning custom-block"><p class="custom-block-title"></p><p>Note: This feature is under consideration for future development and may be available at a later date. If you are interested, please contact <a href="mailto:sales@tuxcare.com">sales@tuxcare.com</a></p></div><ul><li><strong>Secure Distribution</strong>: Signed versions of the packages and their metadata are distributed from a registry managed, secured, and protected by TuxCare, guaranteeing that your software updates are authentic and untampered.</li></ul><h2 id="technical-support" tabindex="-1"><a class="header-anchor" href="#technical-support" aria-hidden="true">#</a> Technical Support</h2><p>TuxCare provides technical support according to the <a href="https://tuxcare.com/TuxCare-support-policy.pdf?_gl=1*9hjdum*_up*MQ..*_ga*MTQ0MTM0NTI4OC4xNjk5Mzk2ODYy*_ga_Z539WTSZ80*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_1790YFKF4F*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA..*_ga_64QBSWJJGS*MTY5OTM5Njg2MC4xLjAuMTY5OTM5Njg2MC4wLjAuMA.." target="_blank" rel="noopener noreferrer">support policy</a> . It delivers 24/7/365 access to the TuxCare’s support team through the TuxCare Support Portal <a href="https://tuxcare.com/support-portal/" target="_blank" rel="noopener noreferrer">https://tuxcare.com/support-portal/</a> and to the TuxCare’s online knowledge base.</p><h2 id="installation-instructions-for-linux" tabindex="-1"><a class="header-anchor" href="#installation-instructions-for-linux" aria-hidden="true">#</a> Installation Instructions for Linux</h2><h3 id="rpm-based" tabindex="-1"><a class="header-anchor" href="#rpm-based" aria-hidden="true">#</a> RPM-based</h3><p>These steps are suitable for RPM-based systems (CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc).</p><ol><li>Download the installer script:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-rpm-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh install-els-alt-python-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Verify that the installation was successful.</li></ol><p>To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual <code>yum upgrade</code> command.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum info alt-python36

Available Packages
Name         : alt-python36
Version      : 3.6.15
Release      : 4.el9
Architecture : x86_64
Size         : 26 k
Source       : alt-python36-3.6.15-4.el9.src.rpm
Repository   : alt-python
Summary      : Version 3 of the Python programming language aka Python 3000
URL          : https://www.python.org/
License      : Python
Description  : Python 3 is a new version of the language that is incompatible
             : with the 2.x line of releases. The language is mostly the same,
             : but many details, especially how built-in objects like
             : dictionaries and strings work, have changed considerably, and a
             : lot of deprecated features have finally been removed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>To install python, it&#39;s necessary to enable the CodeReady Builder(CRB) repository, which contains the <code>gdbm</code> package.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install alt-python36 --enablerepo crb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li><code>alt-python</code> versions are intended to be installed alongside the system&#39;s default python and allow multiple versions to coexist. To use a specific <code>alt-python</code> version, please, run it directly from its installation directory, for example:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ /opt/alt/python36/bin/python3.6
Python 3.6.15 (default, Apr 10 2024, 00:00:00) 
[GCC 11.5.0 20240719 (Red Hat 11.5.0-5)] on linux
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
&gt;&gt;&gt; print(&quot;Hello, World!&quot;)
Hello, World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deb-based" tabindex="-1"><a class="header-anchor" href="#deb-based" aria-hidden="true">#</a> DEB-based</h3><p>These steps are suitable for DEB-based systems (Ubuntu, Debian).</p><ol><li>Download the installer script:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-deb-repo.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash install-els-alt-python-deb-repo.sh --license-key XXX-XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Verify that the installation was successful.</li></ol><p>To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual <code>apt upgrade</code> command.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-cache show alt-python36
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,47);function l(o,d){return t(),a("div",null,[s,n(`
## Installation instructions of a local mirror

We provide the ability to create local mirrors of Python for ELS updates.

* To obtain access to the local mirroring facility, provide your IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@tuxcare.com)

* To create a local mirror of the repository with security updates via \`rsync\`, use the following:

\`\`\`text
rsync://repo.cloudlinux.com/PYTHON_ELS/
\`\`\`

* Example of creating a local mirror for all supported OS versions:

\`\`\`text
rsync -avSHP --delete rsync://repo.cloudlinux.com/PYTHON_ELS/ .
\`\`\`

## OVAL data

### Introduction

This section contains information about available ELS for Python OVAL streams that can be used for partner application integration. Currently, we provide OVAL data for AlmaLinux 9.

### TuxCare Python ELS OVAL Stream

AlmaLinux 9: [https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml](https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml).

### How to use OVAL

1. Install OpenSCAP:

\`\`\`text
yum install openscap openscap-utils scap-security-guide -y
\`\`\`

2. Download an OVAL stream:

\`\`\`text
wget https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml
\`\`\`

3. Run a scan:

\`\`\`text
oscap oval eval --results result.xml --report report.xml almalinux9-els-python-oval.xml
\`\`\`
`)])}const u=e(r,[["render",l],["__file","index.html.vue"]]);export{u as default};
