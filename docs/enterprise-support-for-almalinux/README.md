<!-- markdownlint-disable MD033 MD029 MD036 -->

# **Enterprise Support for AlmaLinux**

This guide describes [Enterprise Support for AlmaLinux](https://tuxcare.com/almalinux-enterprise-support/) and how to set it up on your AlmaLinux system.

## What is Enterprise Support for AlmaLinux?

Enterprise Support for AlmaLinux provides a TuxCare-vetted repository of AlmaLinux updates with 16 years of support coverage, ensures long-term stability and FIPS 140-3 compliance with extended security support for select AlmaLinux minor releases, and helps to avoid costly upfront support package fees with pay-as-you-go hourly support bundles.

Available services:

* **Essential Support**: TuxCare-vetted repository of AlmaLinux updates with guaranteed uptime, expedited break-and-fix support and up to 16 years of support coverage
* **Extended Security Updates** provide an extended period of security fixes for critical and high-risk vulnerabilities for select AlmaLinux minor versions, as well as the **full suite of five FIPS-validated modules** (kernel, openssl, libcrypt, nss and gnutls) and FIPS-compliant security patches for FIPS-certified AlmaLinux deployments. **The product also unlocks commercial use of the FIPS-validated packages.**
* **Enhanced Support**: Enterprise-grade support for AlmaLinux and open-source applications with pay-as-you-go pricing in 5, 10, and 20-hour bundles

Learn more at [https://tuxcare.com/almalinux-enterprise-support/](https://tuxcare.com/almalinux-enterprise-support/)

## **Extended Security Updates**

Extended Security Updates (ESU) for AlmaLinux extend the lifecycle of specific AlmaLinux minor versions by delivering both prolonged security updates for High and Critical vulnerabilities as well as FIPS-compliant security patches enabling greater stability and security for AlmaLinux deployments.

### ESU lifecycle

AlmaLinux provides a 10-year lifecycle with a new minor release arriving every 6 months, bringing new features until the fifth year. Each of the minor releases is supported for 6 months. Customers who want to remain with the specific AlmaLinux minor release for longer can opt for Extended Security Updates (ESU).

ESU delivers an extended period of security fixes for critical and high-risk vulnerabilities for select AlmaLinux minor versions, as well as the full suite of five FIPS-validated modules (kernel, openssl, libcrypt, nss and gnutls) and FIPS-compliant security patches for FIPS-certified AlmaLinux deployments. The product also unlocks commercial use of the FIPS-validated packages.

Extended Security Updates are currently available for AlmaLinux 9.2 and have planned support for AlmaLinux 9.6 and 9.10. This provision ensures that a given minor release continues to receive essential updates, allowing customers to avoid upgrading every six months and test/certify their applications against the next minor version at their own pace.

![esu lifecycle](/images/esu_lifecycle_graph2.png)

:::warning
**Disclaimer**: AlmaLinux minor releases planned for ESU are subject to change. TuxCare reserves the right to change them at any time without prior notice.
:::

### Vulnerability coverage

TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we give priority to the NVD score.
ESU provides security patches for High and Critical vulnerabilities (with a 7+ CVSS score) and urgent priority bug fixes. This strategy aims to reduce changes in the environment, prioritizing stability without compromising critical security.

### FIPS-compliant security patches

ESU enables continuous security for FIPS-certified AlmaLinux 9.2 deployments by offering FIPS-compliant security patches for the FIPS-validated [kernel, openssl, libcrypt, nss and gnutls packages](https://docs.tuxcare.com/enterprise-support-for-almalinux/#enabling-fips-140-3-mode). These patches [do not change the validated cryptography](https://tuxcare.com/blog/the-dilemmas-of-fips-140-3-compliance/). They are suitable for organizations that don't require strict FIPS-certified implementations that are static and never patched (i.e. military or intelligence agencies). In case of a cryptographic vulnerability that will require a security patch that changes the validated cryptography, we will fix it by delivering a new packaged module. This module will undergo an expedited FIPS 140-3 recertification to ensure it is attested to conform to FIPS 140-3 requirements.

### Target response times

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare organizations or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.
We aim to deliver security patches for Critical and High-risk vulnerabilities (CVSS 7+) within 14 days from when the vulnerabilities become publicly disclosed. This rapid response time significantly reduces the window of opportunity for potential attackers and meets most security regulation requirements.

### Supported packages

ESU provides updates for a comprehensive list of packages integral to server operations (100+ packages), providing maximum security for your operating system. You can view the full list of supported packages, as well as get detailed information on the patched CVEs, here [https://cve.tuxcare.com/](https://cve.tuxcare.com/). Support for additional packages can be provided on request.

### Errata advisories

ESU provides qualified security and selected bug-fix errata advisories across all architectures. They can help users track which Common Vulnerabilities and Exposures (CVE) are resolved and which bugs have been addressed. You can view the full list of released advisories here [https://cve.tuxcare.com/els/releases](https://cve.tuxcare.com/els/releases).

### OVAL patch definitions

Leveraging Open Vulnerability and Assessment Language (OVAL) patch definitions with OVAL-compatible tools, e.g. OpenSCAP, users can accurately check their systems for the presence of vulnerabilities:

* AlmaLinux 9.2 FIPS: [https://repo.tuxcare.com/tuxcare/9/almalinux9.2-fips-oval.xml](https://repo.tuxcare.com/tuxcare/9/almalinux9.2-fips-oval.xml)
* AlmaLinux 9.2 ESU: [https://repo.tuxcare.com/tuxcare/9/almalinux9.2-esu-oval.xml](https://repo.tuxcare.com/tuxcare/9/almalinux9.2-esu-oval.xml)

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
* Extended Security Updates license key (should be obtained from [portal.tuxcare.com](https://portal.tuxcare.com))
* Internet access

`tuxctl` is the setup tool for TuxCare's Enterprise Support for AlmaLinux, which will configure your system to receive patches from the TuxCare repositories. To install `tuxctl` you need to install the `tuxcare-release` package first. This package contains the TuxCare repo definitions, TuxCare GPG key and the `tuxctl` setup tool. Run the following as root:

```text
# dnf -y install https://repo.tuxcare.com/tuxcare/tuxcare-release-latest-9.2.$(uname -i).rpm
```

The second step is to activate your license on the system. You should run the `tuxctl` tool as root with your ESU license key provided as a command line argument like so:

```text
# tuxctl --license-key ESU-XXXXXXXXXXXXXXXXXXXXXXXX
```

This tool will do the following:

1. Check your OS and architecture
2. Check your license key for validity and purchased extensions
3. Check if your system is already registered
4. Register to CloudLinux Network
5. Obtain a token to access the restricted TuxCare repos
6. Enable the TuxCare ESU repo
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
# tuxctl --force -l ESU-XXXXXXXXXXXXXXXXXXXXXXXX
```

:::

### SaaS usage

If you are using ESU with our SaaS license in AWS, then the instructions are slightly different. You should login to your instance and run the following as root (use of `--fips` is optional depending on your needs):

```text
# dnf -y install https://repo.tuxcare.com/tuxcare/tuxcare-release-latest-9.2.$(uname -i).rpm

# tuxctl --saas --fips
```

If you want to reclaim a license when you terminate an instance, you should first run:

```text
# tuxctl --delete

De-registration successful
```

Then you can use that license to register another instance.

If you want to check if you've already registered an instance, you can run the following to display your token:

```text
# tuxctl --validate

Server is registered with token EXTENDED_SECURITY_UPDATES-SERVER-xxxxx
```

If the instance has no license installed, it will return:

```text
Server is not registered
```

:::warning
We can provide a systemd unit file and instructions, should you want to incorporate installing tuxcare-release and registering using tuxctl into your AMI, so that when you spin-up an instance its ready to receive patches, simply email [support@tuxcare.com](support@tuxcare.com)
:::

### Enabling FIPS 140-3 mode

First please ensure you have installed the `tuxcare-release` package as described above. If you haven't already registered your ESU license using `tuxctl` the next step will also do that for you.

To enable the FIPS repo, install the FIPS 140-3 validated packages, enable FIPS mode and configure grub to boot into the FIPS-validated kernel, please run these commands as root, substituting in your license key:

```text
# tuxctl --fips -l ESU-XXXXXXXXXXXXXXXXXXXXXXXX
# dnf -y install openssl-3.0.7-20.el9_2.tuxcare.1 kernel-5.14.0-284.11.1.el9_2.tuxcare.6
# dnf -y install gnutls-3.7.6-23.el9_2.tuxcare.3 nettle-3.8-3.el9_2.tuxcare.1 libgcrypt-1.10.0-10.el9_2.tuxcare.3 nss-3.90.0-6.el9_2.tuxcare.1
# grubby --set-default=/boot/vmlinuz-5.14.0-284.11.1.el9_2.tuxcare.6.$(uname -i)
# fips-mode-setup --enable
# reboot
```

:::warning
Note the aarch64 platform doesn't currently have FIPS-validated gnutls/libgcrypt/nss packages, so ARM users should only run the first `dnf` command to install the openssl and kernel packages.

We also provide multilib i686 packages of the userspace modules in the x86_64 repo for backwards compatibility, note that these are not FIPS-validated but are built from the same source.
:::

Once you've logged in after the reboot, run these commands and check the output matches to confirm it worked:

```text
$ fips-mode-setup --check
FIPS mode is enabled.

$ uname -r
5.14.0-284.11.1.el9_2.tuxcare.6.x86_64

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
  -e 's|$tuxcare_releasever/$tuxcare_token|$releasever|g' \
  -e 's|almacare|tuxcare|g' \
  -e 's|$tuxcare_releasever|$releasever|g' \
  -e '/^exclude/d' \
  /etc/yum.repos.d/almalinux*.repo

# reboot
```

:::warning
Note that by disabling ESU, you will revert to tracking major version releases instead of sticking to a specific minor version, so you may be upgraded from 9.2 to 9.4 for example - a process you cannot undo.
:::

To completely remove the TuxCare packages, after following the above steps, run the following as root:

```text
# dnf remove *tuxcare*
```

In most cases this will be the end of the uninstallation procedure, however if you see an error message like the following, then you may have to use `grubby` or `grub2-reboot` or simply the grub menu, to reboot into a non-TuxCare kernel first:

```text
Error:
 Problem: The operation would result in removing the following protected packages: sudo, systemd, kernel-core, dnf
(try to add '--skip-broken' to skip uninstallable packages or '--nobest' to use not only best candidate packages)
```

Then run the following:

```text
# dnf downgrade openssl libgcrypt gnutls nettle nss
# dnf remove kernel*tuxcare*
# dnf upgrade
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
|Support|<ul><li>AlmaLinux installation/update issues (packaging, dependencies, repositories)</li><li>Migration issues between OS with the same major version (e.g. from CentOS/OL/RHEL 8 to AlmaLinux 8)</li><li>Operating system bugs / kernel crashes; root cause analysis</li></ul> ***Outside the scope: software upgrades, requests to migrate, and the migration between OS with different major versions***|Coverage, includes the following applications: <ul><li>Apps - Identity / Directory<ul><li>FreeIPA, Bind</li><li>openldap</li></ul></li><li>Apps - Infrastructure<ul><li>Ceph</li><li>Samba</li></ul></li><li>Containers (docker, podman)</li><li>VMs (KVM)</li><li>Apps - Package / Config management:<ul><li>Foreman</li><li>Ansible</li><li>Puppet</li><li>Chef</li></ul></li><li>Apps - Web servers<ul><li>nginx</li><li>apache</li><li>squid</li></ul></li><li>Apps - Data<ul><li>SQL Databases (MariaDB, Postgresql)</li><li>Redis, MySQL, InfluxDB, CouchDB</li></ul></li><li>Apps - Security / Compliance<ul><li>OpenSCAP</li></ul></li><li>Devops Apps:<ul><li>gitlab/git, jenkins, kubernetes</li></ul></li><li>Apps - event streaming<ul><li>Apache Kafka</li><li>Rabbitmq</li></ul></li><li>Operating system migration (e.g, from Oracle 8 to AlmaLinux 8)</li><li>Operating system upgrades (e.g, from CentOS 7 to AlmaLinux 8)</li><li>Design & Architecture (e.g., review)</li><li>Data storage, backup assistance</li><li>Configuration assistance</li></ul> ***Outside the scope: code changes, software upgrades, migration between OS with different major versions***|
|Incident Support|24/7/365 support through web ticketing system|24/7/365 support through web ticketing system and email|
|Allowed Number of Customer Technical Leads|2 per 1000 hosts, with maximum 10|2 per 1000 hosts, with maximum 10|

### 4. Description of Support Program

#### Accessing Technical Support

TuxCare Technical Support is designed for enterprise clients with trained IT staff which provide initial ‘1st-line' support to triage incidents. Customer and TuxCare will agree on Customer Technical Leads with the client, who will be entitled to access TuxCare Technical Support services; Customer Technical Leads must complete AlmaLinux training requirements. Customer Technical Leads may submit Technical Support Incidents and Service Requests to:

1. Technical Support ticketing system: [https://tuxcare.com/support-portal/](https://tuxcare.com/support-portal/)

* Acceptance of requests 24 hours a day, 365 days a year
* Unlimited number of tickets may be submitted
* Customers will be supplied with instructions describing the use of the ticketing system during onboarding
* User accounts will be created for each nominated user within each client organization
* User accounts will have access to log, view and respond to tickets

2. Email: acceptance of requests 24 hours a day, 365 days a year:

* New tickets may be created by simply emailing the support desk: [support@tuxcare.com](support@tuxcare.com)

:::warning
If you are a user of our SaaS product on AWS Marketplace, before you contact support, you should have your AWS accountId to hand, there are various ways to find it.

If you have the aws cli tool installed on your computer, you can run:

```text
$ aws sts get-caller-identity --query Account --output text

123456789012
```

Alternatively you can make a request to the AWS API from within a running instance, as described [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-identity-documents.html#retrieve-iid), for example using IMDSv1:

```text
$ curl -s http://169.254.169.254/latest/dynamic/instance-identity/document | grep accountId

  "accountId" : "123456789012",
```

Or if you have access to the [ec2 console](https://console.aws.amazon.com/console/home) you can simply click your username at the top right of the page. Your Account ID is the 12 digits in the dropdown.
:::

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

### Installing tuxctl (Essential Support)

Similarly to the ESU instructions [above](/enterprise-support-for-almalinux/#installing-tuxctl), Essential Support customers should install tuxcare-release and register their server using tuxctl. The main difference is the choice of OS version - you must install the RPM specifically for your AlmaLinux version, currently 8.8, 8.10, 9.2 and 9.4 are supported.

If you are unsure, run this to find your exact OS version:

```text
$ cat /etc/almalinux-release

AlmaLinux release 8.10 (Cerulean Leopard)
```

You can browse [https://repo.tuxcare.com/tuxcare/](https://repo.tuxcare.com/tuxcare/) and find the correct RPM, or you can figure it out by substituting the version number (8.8, 8.10, 9.2 or 9.4) then install it as root, for example:

```text
# dnf -y install https://repo.tuxcare.com/tuxcare/tuxcare-release-latest-8.10.$(uname -i).rpm
```

:::warning
Be aware that installing tuxcare-release will modify any files that match the wildcard /etc/yum.repos.d/almalinux*
:::

The second step is to activate your license on the system. You should run the `tuxctl` tool as root with your Essential Support license key provided as a command line argument like so:

```text
# tuxctl --license-key ESA-XXXXXXXXXXXXXXXXXXXXXXXX
```

Essential Support customers can upgrade to a new minor version, for example from 9.2 to 9.4 by editing the /etc/dnf/vars/tuxcare_releasever file to specify the new version, like so:

```text
# echo 9.4 > /etc/dnf/vars/tuxcare_releasever
# dnf upgrade
```

:::warning
Note that if you upgrade past 9.2 you won't be able to upgrade to ESU without a reinstall. ESU customers can find instructions [above](/enterprise-support-for-almalinux/#installing-tuxctl)
:::
