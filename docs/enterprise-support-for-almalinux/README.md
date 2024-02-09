<!-- markdownlint-disable MD033 MD029 MD036 -->

# **Enterprise Support for AlmaLinux**

This guide describes [Enterprise Support for AlmaLinux](https://tuxcare.com/almalinux-enterprise-support/) and how to set it up on your AlmaLinux system.

## What is Enterprise Support for AlmaLinux?

Enterprise Support for AlmaLinux provides a TuxCare-vetted repository of AlmaLinux updates with 16 years of support coverage, minimizes vulnerability windows with rebootless security patches and helps to avoid costly upfront support package fees with pay-as-you-go hourly support bundles.

Available services:

* **Essential Support**: TuxCare-vetted repository of AlmaLinux updates with guaranteed uptime, expedited break-and-fix support and up to 16 years of support coverage
* **Extended Security Updates** deliver an extension of an additional 4.5 years of security fixes for Critical and High-risk vulnerabilities and FIPS-compliant security patches for select AlmaLinux minor versions
* **Live Patching (KernelCare and LibCare)**: automated live patches for the kernel and critical userspace packages with zero downtime
* **Enhanced Support**: Enterprise-grade support for AlmaLinux and open-source applications with pay-as-you-go pricing in 5, 10, and 20-hour bundles

Learn more at [https://tuxcare.com/almalinux-enterprise-support/](https://tuxcare.com/almalinux-enterprise-support/)

## **Extended Security Updates**

Extended Security Updates (ESU) for AlmaLinux extend the lifecycle of specific AlmaLinux minor versions by delivering both prolonged security updates for High and Critical vulnerabilities as well as FIPS-compliant security patches enabling greater stability and security for AlmaLinux deployments.

### ESU lifecycle

AlmaLinux provides a 10-year lifecycle with a new minor release arriving every 6 months, bringing new features until the fifth year. Each of the minor releases is supported for 6 months. Customers who want to remain with the specific AlmaLinux minor release for longer can opt for Extended Security Updates (ESU). ESU delivers an extension of an additional 4.5 years of security fixes for Critical and High-risk vulnerabilities as well as FIPS-compliant security patches for select AlmaLinux minor versions. The service is currently available for AlmaLinux 9.2 with planned support for AlmaLinux 9.6 and 9.10. This provision ensures that a given minor release continues to receive essential updates, allowing customers to avoid upgrading every 6 months and test/certify their applications against the next minor version at their own pace.

![esu lifecycle](/images/esu_lifecycle_graph.png)

:::warning
**Disclaimer**: AlmaLinux minor releases planned for ESU are subject to change. TuxCare reserves the right to change them at any time without prior notice.
:::

### Vulnerability coverage

TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we give priority to the NVD score.
ESU provides security patches for High and Critical vulnerabilities (with a 7+ CVSS score) and urgent priority bug fixes. This strategy aims to reduce changes in the environment, prioritizing stability without compromising critical security.

### FIPS-compliant security patches

ESU enables continuous security for FIPS-certified AlmaLinux 9.2 deployments by offering FIPS-compliant security patches for the FIPS-validated [kernel and OpenSSL packages](/enterprise-support-for-almalinux/fips/). These patches [do not change the validated cryptography](https://tuxcare.com/blog/the-dilemmas-of-fips-140-3-compliance/) and are suitable for organizations that don't require strict FIPS-certified implementations that are static and never patched (i.e. military or intelligence agencies). In case of a cryptographic vulnerability that will require a security patch that changes the validated cryptography, we will fix it by delivering a new packaged kernel. This kernel will undergo an expedited FIPS 140-3 recertification to ensure it is attested to conform to FIPS 140-3 requirements.

### Target response times

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare organizations or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.
We aim to deliver security patches for Critical and High-risk vulnerabilities (CVSS 7+) within 14 days from when the vulnerabilities become publicly disclosed. This rapid response time significantly reduces the window of opportunity for potential attackers and meets most security regulation requirements.

### Supported packages

ESU provides updates for a comprehensive list of packages integral to server operations (100+ packages), providing maximum security for your operating system. You can view the full list of supported packages, as well as get detailed information on the patched CVEs, here [https://cve.tuxcare.com/](https://cve.tuxcare.com/). Support for additional packages can be provided on request.

### Errata advisories

ESU provides qualified security and selected bug-fix errata advisories across all architectures. They can help users track which Common Vulnerabilities and Exposures (CVE) are resolved and which bugs have been addressed. You can view the full list of released advisories here [https://cve.tuxcare.com/els/releases](https://cve.tuxcare.com/els/releases).

### OVAL patch definitions

Leveraging Open Vulnerability and Assessment Language (OVAL) patch definitions with OVAL-compatible tools, e.g. OpenSCAP, users can accurately check their systems for the presence of vulnerabilities.

### Technical support

All TuxCare products include technical support provided according to the support policy [https://tuxcare.com/TuxCare-support-policy.pdf](https://tuxcare.com/TuxCare-support-policy.pdf). It delivers 24/7/365 access to our engineers through the TuxCare Support Portal [https://tuxcare.com/support-portal/](https://tuxcare.com/support-portal/) and to our online knowledge base.
Technical Support for Extended Security Updates provides assistance with:

* ESU repository setup issues
* Package update problems (package conflicts, missing dependencies)
* FIPS and CVE-related questions
* ePortal issues
* AlmaLinux kernel crash issues (root cause analysis)

### GnuPG Keys

The TuxCare ESU/FIPS packages and repositories are cryptographically signed with a GPG key, so you can verify the legitimacy of the software you download and the source of the download. The details of our key are below:

* Public key: rsa4096/8D50EB66 (2023-03-06)
  * Fingerprint: FAD7 8590 81D0 738B 7A82  8496 D07B F2A0 8D50 EB66
  * ID: TuxCare (Software Signing Key) <packager@tuxcare.com>
  * Installation location: /etc/pki/rpm-gpg/RPM-GPG-KEY-TuxCare
  * Download link: [RPM-GPG-KEY-TuxCare](https://repo.tuxcare.com/tuxcare/RPM-GPG-KEY-TuxCare)

### Installing tuxctl

**Requirements**

* AlmaLinux 9.2 operating system
* x86_64 or aarch64 architecture
* Enterprise Support license key (should be obtained from [portal.tuxcare.com](https://portal.tuxcare.com))
* Internet access

`tuxctl` is the setup tool for TuxCare's Enterprise Support for AlmaLinux, which will configure your system to receive patches from the TuxCare repositories. To install `tuxctl` you need to install the `tuxcare-release` package first. This package contains the TuxCare repo definitions, TuxCare GPG key and the `tuxctl` setup tool. Run the following as root:

```text
# dnf install -y https://repo.tuxcare.com/tuxcare/tuxcare-release-latest-$(rpm --eval %almalinux).noarch.rpm
```

The second step is to activate your TuxCare license on the system. You should run the `tuxctl` tool as root with your TuxCare license key provided as a command line argument like so:

```text
# tuxctl --license-key ESU-XXXXXXXXXXXXXXXXXXXXXXXX
```

This tool will do the following:

1. Check your OS and architecture
2. Check your license key for validity and purchased extensions
3. Check if your system is already registered
4. Register to CloudLinux Network
5. Obtain a token to access the restricted TuxCare repos
6. Enable the TuxCare Updates repo
7. Switch the default AlmaLinux repos to use repo.tuxcare.com
8. Import the TuxCare GPG key

After installation you'll see the following message:

```text
TuxCare installed successfully
```

This means your system is registered and ready to receive updates from TuxCare.
:::warning
If during installation something goes wrong then the `tuxctl` tool will show an error message and suggest how to handle it. For example, if your system is already registered you'll receive the following message:

```text
This server already has a TuxCare token installed
To force re-registration, please run the script with --force
```

Then you will have to run `tuxctl` like this:

```text
# tuxctl --license-key ESU-XXXXXXXXXXXXXXXXXXXXXXXX --force
```

:::

### Enabling FIPS 140-3 mode

First please ensure you have installed the `tuxcare-release` package as described above. If you haven't already registered your ESU license using `tuxctl` the next step will also do that for you.

To enable the FIPS repo, install the FIPS 140-3 validated packages, enable FIPS mode and configure grub to boot into the FIPS-validated kernel, please run these commands as root, substituting in your license key:

```text
# tuxctl --license-key ESU-XXXXXXXXXXXXXXXXXXXXXXXX --fips
# dnf -y install openssl-3.0.7-20.el9_2.tuxcare.1 kernel-5.14.0-284.11.1.el9_2.tuxcare.5
# grubby --set-default=/boot/vmlinuz-5.14.0-284.11.1.el9_2.tuxcare.5.$(uname -i)
# fips-mode-setup --enable
# reboot
```

Once you've logged in after the reboot, run these commands and check the output matches to confirm it worked:

```text
$ fips-mode-setup --check
FIPS mode is enabled.

$ uname -r
5.14.0-284.11.1.el9_2.tuxcare.5.x86_64

$ openssl list -providers | grep -A3 fips
  fips
    name: OpenSSL FIPS Provider for AlmaLinux 9
    version: 3.0.7-1d2bd88ee26b3c90
    status: active
```

### Uninstalling tuxctl

To uninstall tuxctl, disable the ESU/FIPS functionality and revert to AlmaLinux community repo's, you can run the following as root:

```text
# dnf -y remove almacare-release tuxcare-release

# fips-mode-setup --disable

# sed -i \
  -e 's|https://repo.tuxcare.com/almalinux/|https://repo.almalinux.org/almalinux/|' \
  -e 's|^# mirrorlist|mirrorlist|' \
  -e 's|^baseurl|# baseurl|' \
  -e 's|$tuxcare_releasever|$releasever|g' \
  -e 's|$almacare_releasever|$releasever|g' \
  /etc/yum.repos.d/almalinux*.repo

# dnf upgrade

# reboot
```

:::warning
Note that by disabling ESU, you will revert to tracking major version releases instead of sticking to a specific minor version, so you may be upgraded from 9.2 to 9.3 for example - a process you cannot undo.
:::

To completely remove the TuxCare packages, after following the above steps, run the following as root:

```text
# dnf remove openssl*tuxcare* kernel*tuxcare*
```

In most cases this will be the end of the uninstallation procedure, however if you see an error message like the following, then you may have to use `grubby` or `grub2-reboot` or simply the grub menu, to reboot into a non-TuxCare kernel first:

```text
Error:
 Problem: The operation would result in removing the following protected packages: sudo, systemd, kernel-core
(try to add '--skip-broken' to skip uninstallable packages or '--nobest' to use not only best candidate packages)
```

Then run the following:

```text
# dnf downgrade openssl
# dnf remove kernel*tuxcare*
```

## **Live Patching (KernelCare and LibCare)**

Live Patching brings rapid security patching for the kernel and critical userspace packages such as `glibc` and `openssl` using the [KernelCare Enterprise](https://docs.tuxcare.com/live-patching-services/) and [LibCare](https://docs.tuxcare.com/live-patching-services/#libcare) live patching technologies.

### Installation

To install the Live Patching product follow the instructions here or simply run the following as root to download the installer and configure the repo:

```text
# curl -s -L https://kernelcare.com/installer | bash
```

Then to activate your license:

```text
# kcarectl --register <KEY>
```

#### Enabling rapid security updates for userspace components

To enable rapid security updates with live patching for critical userspace components such as `glibc` and `openssl` use the following commands to enable LibCare and periodic updates:

```text
# kcarectl --enable-libcare
# libcare-cron init
```

### Using the Live Patching for AlmaLinux (KernelCare and LibCare)

After installation, you can verify that your system has access to KernelCare live patching by running:

```text
# kcarectl -u
```

You should get a message like below, and the system is now receiving kernel security updates as live patches:

```text
Downloading updates
Patch level 1 applied. Effective kernel version 5.14.0-162.12.1.el9_1
Kernel is safe
```

## **Essential and Enhanced Support**

### 1. Introduction

In April 2023, TuxCare, a division of CloudLinux Inc., launched Enterprise Support for AlmaLinux, delivering a range of services for AlmaLinux workloads. It provides two levels of support, the essential level, focused on the operating system, and the enhanced support focused on applications. This document defines those services.

**Overview of Services**

There are two levels of support services for AlmaLinux:

**Essential Support** - a limited technical support offering that covers AlmaLinux installation/update issues (packaging, dependencies, repositories), migration issues (from CentOS/OracleLinux/RHEL to AlmaLinux), operating systems bugs/kernel crashes, a self-service portal, as well as an online knowledge base

**Enhanced Support** - an enterprise technical support service covering a range of open-source software running on AlmaLinux, a self-service portal, as well as an online knowledge base.

### 2. Definitions

**"Customer," "End User," "User," "You/Your"** shall mean an organization which has a valid license to the Product that is supported in accordance with this Program.

**"Customer Technical Lead"** shall mean an employee or authorized contractor of Customer who shall complete required AlmaLinux product training, in order to serve as Customer's first line of internal support for the purpose of triaging AlmaLinux-related product issues, and who shall have authority to submit Technical Support Incidents and Service Requests to TuxCare Technical Support

**"Incident"** shall mean any event reported by the Customer, which is not part of the standard operation of a Product, and which causes, or may cause an interruption to, or a reduction in, the quality of service provided by the Product.

**"Incident Severity/Urgency"** shall mean a measure of the business criticality of an incident or problem based on the business needs of the Customer. See Appendix 1 for more details.

**"Known Error"** shall mean a Problem that becomes a Known Error when the root cause is known, and a temporary workaround or permanent alternative has been identified.

**"Problem"** shall mean an unknown underlying cause of one or more Incidents. It becomes a Known Error when the root cause is known, and a temporary workaround or permanent alternative has been identified.

**"Product(s)"** shall mean software product(s) of TuxCare, which the Customer has purchased, deployed, and installed in accordance with the terms of a License Agreement between TuxCare and the Customer.

**"Product Error"** shall mean undeclared behaviour of the Product.

**"Response time"** shall mean the elapsed time measured from the moment of any incident receipt until confirmation of receipt by TuxCare to the initiator (via the support system).

**"Service Request"** shall mean a request from a Customer for support, delivery, information, advice, or documentation, which is not related to an incorrect functioning or non-functioning of the Product(s).

**"Upgrade"** shall mean a Product update associated with assigning a new version number.

**"Workaround"** shall mean a procedure that may serve as a temporary solution to an incident.

### 3. Service Features

| Feature | Essential Support | Enhanced Support |
|------|:------|:------|
|Support|<ul><li>AlmaLinux installation/update issues (packaging, dependencies, repositories)</li><li>Migration issues (from CentOS/OracleLinux/RHEL to AlmaLinux)</li><li>Operating system bugs / kernel crashes; root cause analysis</li></ul>|Coverage, includes the following applications: <ul><li>Apps - Identity / Directory<ul><li>FreeIPA, Bind</li><li>openldap</li></ul></li><li>Apps - Infrastructure<ul><li>Ceph</li><li>Samba</li></ul></li><li>Containers (docker, podman)</li><li>VMs (KVM)</li><li>Apps - Package / Config management:<ul><li>Foreman</li><li>Ansible</li><li>Puppet</li><li>Chef</li></ul></li><li>Apps - Web servers<ul><li>nginx</li><li>apache</li><li>squid</li></ul></li><li>Apps - Data<ul><li>SQL Databases (MariaDB, Postgresql)</li><li>Redis, MySQL, InfluxDB, CouchDB</li></ul></li><li>Apps - Security / Compliance<ul><li>OpenSCAP</li></ul></li><li>Devops Apps:<ul><li>gitlab/git, jenkins, kubernetes</li></ul></li><li>Apps - event streaming<ul><li>Apache Kafka</li><li>Rabbitmq</li></ul></li><li>Operating system migration (e.g, from Oracle to AlmaLinux)</li><li>Operating system upgrades (e.g, from CentOS 7 to AlmaLinux 8)</li><li>Design & Architecture (e.g., review)</li><li>Data storage, backup assistance</li><li>Configuration assistance</li></ul> ***Outside the scope: code changes or software updates***|
|Incident Support|24/7/365 support through web ticketing system|24/7/365 support through web ticketing system and email|
|Allowed Number of Customer Technical Leads|2 per 1000 hosts, with maximum 10|2 per 1000 hosts, with maximum 10|

### 4. Description of Support Program

#### Accessing Technical Support

TuxCare Technical Support is designed for enterprise clients with trained IT staff which provide initial ‘1st-line' support to triage incidents. Customer and TuxCare will agree on Customer Technical Leads with the client, who will be entitled to access TuxCare Technical Support services; Customer Technical Leads must complete AlmaLinux training requirements. Customer Technical Leads may submit Technical Support Incidents and Service Requests to:

1. Technical Support ticketing system:

* Acceptance of requests 24 hours a day, 365 days a year
* Unlimited number of tickets may be submitted
* Customers will be supplied with instructions describing the use of the ticketing system during onboarding
* User accounts will be created for each nominated user within each client organization
* User accounts will have access to log, view and respond to tickets

2. Email: acceptance of requests 24 hours a day, 365 days a year:

* New tickets may be created by simply emailing the support desk (email address to be provided during onboarding)

All customers are entitled to access the Support knowledgebase, FAQs, and other self-service tools as may be offered by Enterprise Support for AlmaLinux.

#### Response Time

When submitting a ticket, Customers will select the appropriate Severity Level, as defined in Appendix A, from a drop-down list; TuxCare reserves the right to change the Severity Level based on available information. TuxCare will use reasonable efforts to respond to support requests within the initial response times described below, based on the Severity Level of the incident.

|Severity Level|Essential Support|Enhanced Support|
|------|:------|:------|
|1|2 hours|30 minutes|
|2|12 hours|2 hours|
|3|2 business days|12 hours|
|4|5 business days|2 business days|

#### Incident Resolution Cooperation

Some incidents may require reproduction by TuxCare for the purpose of testing and verifying a product error. Customer agrees to provide TuxCare with all information which may be necessary for reproducing the condition under which the incident will re-occur and could be examined.

TuxCare will endeavor to reproduce the incident as soon as all the necessary information and software and/or hardware is provided. If the incident could not be reproduced, Customer should grant TuxCare a supervised remote access to the malfunctioning system. If the incident cannot be reproduced by either party, or Customer did not grant access to the network environment where the incident could be reproduced, or if it is detected that the incident's cause lies beyond the Product, the incident cannot be classified within this Support Program.

An incident may at any time be either on the Customer's side (i.e. Customer is taking actions that will promote/expedite the resolution of the issue by TuxCare) or on the AlmaLinux side. An incident is on the Customer's side when TuxCare engineers request information from the Customer. When Customer provides the requested information to TuxCare, the incident is considered to be on the side of the latter. The period during which the incident may be on the Customer's side is limited to one calendar week. If the Customer's response is overdue, the incident is closed by timeout.

### Appendices

#### Appendix A. Incident Severity Levels

|Level: Descriptor|Criteria/Definition|
|------|:------|
|Level 1: Business Standstill|Production and/or mission critical services are down and there is no immediate workaround.<ul><li>All or a majority of your mission critical environment is unavailable or not functioning</li><li>Your business operations are completely disrupted</li><li>Majority / All Critical users affected</li><li>Request from important client/partner (subject to management approval)</li></ul>|
|Level 2: Major Impact|Major feature or function failure; operations are severely restricted, but a workaround is available.<ul><li>Critical business operations seriously affected</li><li>Direct fiscal impact</li><li>Substantial number of users are affected, or critical group of users are affected that would not allow the business to run normally</li></ul>|
|Level 3: Minor Impact|Minor feature or function failure; standard business operations can continue, though possibly in a minor restricted manner.<ul><li>No immediate direct fiscal impact</li><li>A temporary workaround may have been provided</li></ul>|
|Level 4: General Inquiry/Issue|General usage questions or other non-critical inquiries.<ul><li>Small number of users/systems affected</li><li>Documentation issue</li><li>General information request</li><li>Enhancement request</li></ul>|

#### Appendix B: Quality management

**Incident escalation**

Customer may escalate unresolved incidents or reports of dissatisfaction according to the following scheme:

|Escalation Level|1|2|3|
|------|------|---|---|
|Escalation Path|Technical Senior Support Engineer|Specialized Support Team Lead or Manager|Chief Experience Officer (CXO)|

**Provision of reports on open incidents**

During the process of incident resolution, TuxCare will use reasonable effort to promptly provide the Customer with information regarding open incidents' status, according to the following table.

|Severity Level|Report Schedule (through the web ticketing system)|
|------|------|
|1|By agreement, but not more often than once a day|
|2|At least once every 3 business days|
|3|At least once every 2 weeks|
|4|Upon customer request|

**Limitations of the Support Services**

Technical support covered by any of the TuxCare Support Programs shall not be provided in the following cases:

* Incidents already resolved for the Customer (e.g., an incident that occurred on one installed copy of the Product after the same incident had been resolved for another copy of the Product)
* Troubleshooting of all issues similar or identical to already resolved issues (i.e. the incidents to which a previously produced solution can be applied without additional guidance from TuxCare)
* Incidents caused by Customer's hardware malfunction
* Incidents caused by software platform incompatibility (including, but not limited to beta software, new versions of service packs or additions, whose compatibility with the Product has not been confirmed by AlmaLinux)
* Incidents caused by installing and running third-party applications (including, but not limited to the list of unsupported or incompatible applications published in the documentation)
* Incidents for which the Customer cannot provide accurate information, as reasonably requested by TuxCare, in order to reproduce, investigate, and resolve the incident
* Incidents which arise as a result of neglect or incorrect use of TuxCare instructions, which, if properly used, would have prevented the Incident

### Switching repositories

For Essential Support customers wishing to use our vetted TuxCare repos instead of the community AlmaLinux ones, all you have to do is run the following as root:

```text
# sed -i \
  -e 's|https://repo.almalinux.org/almalinux/|https://repo.tuxcare.com/almalinux/|' \
  -e 's|^mirrorlist|# mirrorlist|' \
  -e 's|^# baseurl|baseurl|' \
  /etc/yum.repos.d/almalinux*.repo
```

This method will work for any version of AlmaLinux 8.x or 9.x, we currently don't mirror the vault (debuginfo/source) repo's.

To revert back to the community mirrors you can run the following as root:

```text
# sed -i \
  -e 's|https://repo.tuxcare.com/almalinux/|https://repo.almalinux.org/almalinux/|' \
  -e 's|^# mirrorlist|mirrorlist|' \
  -e 's|^baseurl|# baseurl|' \
  /etc/yum.repos.d/almalinux*.repo
```

:::warning
Note that if you upgrade past 9.2 you won't be able to upgrade to ESU without a reinstall. ESU customers can find instructions [above](/enterprise-support-for-almalinux/#installing-tuxctl)
:::
