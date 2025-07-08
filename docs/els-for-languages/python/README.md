# Python

Endless Lifecycle Support (ELS) for Python from TuxCare provides security fixes for Python versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## Supported OS and Python versions

**Supported architecture:** 64-bit.

| OS                                    | Package Type | OS Version                        | Python version |
| :-----------------------------------: | :----------: | :-------------------------------: | :------------: |
| CentOS, CloudLinux, OracleLinux, etc. | RPM          | 6.x, 7.x, 8.x                     | 2.7, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13 |
| AlmaLinux                             | RPM          | 9.x                               | 2.7, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13 |
| Ubuntu                                | DEB          | 16.04, 18.04, 20.04, 22.04, 24.04 | 3.8, 3.11      |
| Debian                                | DEB          | 10, 11, 12                        | 3.8, 3.11      |

*Other distros and architectures upon request.

## Vulnerability Coverage and Target Response Times

TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we prioritize the NVD score.

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI-DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, have similar requirements.

TuxCare will make commercially reasonable efforts to adhere to the following guidelines when addressing vulnerabilities:

* **High and Critical CVEs (CVSS 7+):** Patches provided within 14 days
* **Medium-severity CVEs (CVSS 4.0 to 6.9):** Patches provided within 60 days
* **Low-severity CVEs:** Patches provided within 90 days
* TuxCare may offer a mitigation strategy as an alternative to a direct code fix.

## Incident Reporting and Response Timeframe

Customers can report vulnerabilities by submitting a ticket through the TuxCare Support Portal <https://tuxcare.com/support-portal/>. TuxCare commits to providing an initial response to any reported issue within 3 days.

Requests for customer-directed security patches for CVEs that are outside of the ELS for Python scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 60 days.

Handling Multiple Vulnerabilities: In cases where several CVEs are reported simultaneously for fixing, TuxCare will discuss and agree upon resolution timelines separately with the customer.

## Enhanced Transparency & Visibility

TuxCare's commitment to transparency and visibility is foundational to our ELS for Python offering. We provide comprehensive details about how each package is built, verified, and distributed, ensuring complete trust in the software supply chain.

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

## Installation Instructions for Linux

### RPM-based

These steps are suitable for RPM-based systems (CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc).

1. Download the installer script:

```text
wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-rpm-repo.sh
```

2. Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.

```text
sh install-els-alt-python-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX
```

3. Verify that the installation was successful.

To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual `yum upgrade` command.

```text
yum info alt-python36

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
```

4. To install python, it's necessary to enable the CodeReady Builder(CRB) repository, which contains the `gdbm` package.

```text
yum install alt-python36 --enablerepo crb
```

5. `alt-python` versions are intended to be installed alongside the system's default python and allow multiple versions to coexist. To use a specific `alt-python` version, please, run it directly from its installation directory, for example:

```text
$ /opt/alt/python36/bin/python3.6
Python 3.6.15 (default, Apr 10 2024, 00:00:00) 
[GCC 11.5.0 20240719 (Red Hat 11.5.0-5)] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello, World!")
Hello, World!
```

### DEB-based

These steps are suitable for DEB-based systems (Ubuntu, Debian).

1. Download the installer script:

```text
wget https://repo.alt.tuxcare.com/alt-python-els/install-els-alt-python-deb-repo.sh
```

2. Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.

```text
bash install-els-alt-python-deb-repo.sh --license-key XXX-XXXXXXXXXXXX
```

3. Verify that the installation was successful.

To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available it means that installation was successful. After which, updates will be available for installation from the repository using the usual `apt upgrade` command.

```text
apt-cache show alt-python36
```

<!--
## Installation instructions of a local mirror

We provide the ability to create local mirrors of Python for ELS updates.

* To obtain access to the local mirroring facility, provide your IP address to your Account Manager or send it to [sales@tuxcare.com](mailto:sales@tuxcare.com)

* To create a local mirror of the repository with security updates via `rsync`, use the following:

```text
rsync://repo.cloudlinux.com/PYTHON_ELS/
```

* Example of creating a local mirror for all supported OS versions:

```text
rsync -avSHP --delete rsync://repo.cloudlinux.com/PYTHON_ELS/ .
```

## OVAL data

### Introduction

This section contains information about available ELS for Python OVAL streams that can be used for partner application integration. Currently, we provide OVAL data for AlmaLinux 9.

### TuxCare Python ELS OVAL Stream

AlmaLinux 9: [https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml](https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml).

### How to use OVAL

1. Install OpenSCAP:

```text
yum install openscap openscap-utils scap-security-guide -y
```

2. Download an OVAL stream:

```text
wget https://repo.cloudlinux.com/python-els/almalinux9-els-python-oval.xml
```

3. Run a scan:

```text
oscap oval eval --results result.xml --report report.xml almalinux9-els-python-oval.xml
```
-->