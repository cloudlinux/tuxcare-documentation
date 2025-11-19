<!-- markdownlint-disable MD033 MD029 MD036 MD059 -->

# **Enterprise Support for AlmaLinux**

This guide describes [TuxCare Enterprise Support](https://tuxcare.com/tuxcare-enterprise-support/) for AlmaLinux **and now Rocky Linux too!**

## What is TuxCare Enterprise Support?

TuxCare Enterprise Support provides a TuxCare-vetted repository of AlmaLinux and Rocky Linux updates with 16 years of support coverage, ensures long-term stability and FIPS 140-3 compliance with extended security support for select minor releases, and helps to avoid costly upfront support package fees with pay-as-you-go hourly support bundles.

Available services:

* **Essential Support**: TuxCare-vetted repository of AlmaLinux and Rocky Linux updates with guaranteed uptime, expedited break-and-fix support and up to 16 years of support coverage
* **Extended Security Updates** provide an extended period of security fixes for critical and high-risk vulnerabilities for select minor versions, as well as the **full suite of five FIPS-validated modules** (kernel, openssl, libcrypt, nss and gnutls) and FIPS-compliant security patches for FIPS-certified Linux deployments. **The product also unlocks commercial use of the FIPS-validated packages.**
* **Enhanced Support**: Enterprise-grade support for AlmaLinux, Rocky Linux and open-source applications with pay-as-you-go pricing in 5, 10, and 20-hour bundles

Learn more at [https://tuxcare.com/tuxcare-enterprise-support/](https://tuxcare.com/tuxcare-enterprise-support/)

## **Extended Security Updates**

Extended Security Updates (ESU) for AlmaLinux and Rocky Linux extends the lifecycle of specific minor versions by delivering both prolonged security updates for High and Critical vulnerabilities as well as FIPS-compliant security patches enabling greater stability and security for your Linux deployments.

### ESU lifecycle

AlmaLinux and Rocky Linux provide a 10-year lifecycle with a new minor release arriving every 6 months, bringing new features until the fifth year. Each of the minor releases is supported for 6 months. Customers who want to remain with the specific AlmaLinux or Rocky Linux minor release for longer can opt for Extended Security Updates (ESU).

ESU delivers an extended period of security fixes for critical and high-risk vulnerabilities for select minor versions, as well as the full suite of five FIPS-validated modules (kernel, openssl, libcrypt, nss and gnutls) and FIPS-compliant security patches for FIPS-certified Linux deployments. The product also unlocks commercial use of the FIPS-validated packages.

Extended Security Updates are currently available for AlmaLinux 9.2, AlmaLinux 9.6, Rocky Linux 9.6, and planned support for 9.10. This provision ensures that a given minor release continues to receive essential updates, allowing customers to avoid upgrading every six months and test/certify their applications against the next minor version at their own pace.

![esu lifecycle](/images/esu_lifecycle_graph2.png)

:::warning
**Disclaimer**: Minor releases planned for ESU are subject to change. TuxCare reserves the right to change them at any time without prior notice.
:::

### Vulnerability coverage

TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we give priority to the NVD score.
ESU provides security patches for High and Critical vulnerabilities (with a 7+ CVSS score) and urgent priority bug fixes. This strategy aims to reduce changes in the environment, prioritizing stability without compromising critical security.

### FIPS-compliant security patches

ESU enables continuous security for FIPS-certified AlmaLinux and Rocky Linux 9 deployments by offering FIPS-compliant security patches for the FIPS-validated [kernel, openssl, libcrypt, nss and gnutls packages](https://tuxcare.com/fips-for-almalinux/). These patches [do not change the validated cryptography](https://tuxcare.com/blog/the-dilemmas-of-fips-140-3-compliance/). They are suitable for organizations that don't require strict FIPS-certified implementations that are static and never patched (i.e. military or intelligence agencies). In case of a cryptographic vulnerability that will require a security patch that changes the validated cryptography, we will fix it by delivering a new packaged module. This module will undergo an expedited FIPS 140-3 re-validation to ensure it is attested to conform to FIPS 140-3 requirements.

### Target response times

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare organizations or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.
We aim to deliver security patches for Critical and High-risk vulnerabilities (CVSS 7+) within 14 days from when the vulnerabilities become publicly disclosed. This rapid response time significantly reduces the window of opportunity for potential attackers and meets most security regulation requirements.

### Supported packages

ESU provides updates for a comprehensive list of packages integral to server operations - the complete list of over 6,000 packages in BaseOS and AppStream, plus a few more - thus providing maximum security for your operating system. You can view the full list of supported packages, as well as get detailed information on the patched CVEs, here: [https://cve.tuxcare.com/](https://cve.tuxcare.com/)

Support for additional packages can be provided on request.

### Errata advisories

ESU provides qualified security and selected bug-fix errata advisories across all architectures. They can help users track which Common Vulnerabilities and Exposures (CVE) are resolved and which bugs have been addressed. You can view the full list of released advisories here [https://cve.tuxcare.com/els/releases](https://cve.tuxcare.com/els/releases)

### OVAL patch definitions

Leveraging Open Vulnerability and Assessment Language (OVAL) patch definitions with OVAL-compatible tools, e.g. OpenSCAP, users can accurately check their systems for the presence of vulnerabilities:

* ESU 9.2 OVAL: [https://security.tuxcare.com/oval/els_os/almalinux9.2esu/oval.xml](https://security.tuxcare.com/oval/els_os/almalinux9.2esu/oval.xml)
* ESU 9.6 OVAL: [https://security.tuxcare.com/oval/els_os/tuxcare9.6esu/oval.xml](https://security.tuxcare.com/oval/els_os/tuxcare9.6esu/oval.xml)

### CSAF data

Vulnerability scanner vendors may prefer the Common Security Advisory Framework (CSAF) 2.0 machine-readable format:

* ESU 9.2 CSAF advisories: [https://security.tuxcare.com/csaf/v2/els_os/almalinux9.2esu/advisories/](https://security.tuxcare.com/csaf/v2/els_os/almalinux9.2esu/advisories/)
* ESU 9.2 CSAF VEX documents: [https://security.tuxcare.com/csaf/v2/els_os/almalinux9.2esu/vex/](https://security.tuxcare.com/csaf/v2/els_os/almalinux9.2esu/vex/)
* ESU 9.6 CSAF advisories: [https://security.tuxcare.com/csaf/v2/els_os/tuxcare9.6esu/advisories/](https://security.tuxcare.com/csaf/v2/els_os/tuxcare9.6esu/advisories/)
* ESU 9.6 CSAF VEX documents: [https://security.tuxcare.com/csaf/v2/els_os/tuxcare9.6esu/vex/](https://security.tuxcare.com/csaf/v2/els_os/tuxcare9.6esu/vex/)
* Provider metadata: [https://csaf.data.security.tuxcare.com/](https://csaf.data.security.tuxcare.com/)

### Secure Bill Of Materials

You will need a tokenised URL to access the SBOM data, simply replace `<TOKEN>` below with the token from /etc/dnf/vars/tuxcare_token and you can access the latest SBOM file from a web browser or even `curl`:

```text
https://repo.tuxcare.com/tuxcare/9.2/<TOKEN>/esu/x86_64/spdx-reports/tuxcare92-esu-x86_64-esu.zip

https://repo.tuxcare.com/tuxcare/9.6/<TOKEN>/esu/x86_64/spdx-reports/tuxcare96-esu-x86_64-esu.zip
```

### RSS releases feeds

* ESU 9.2: [https://cve.tuxcare.com/rss_feed/releases/almalinux9.2esu](https://cve.tuxcare.com/rss_feed/releases/almalinux9.2esu)
* ESU 9.6: [https://cve.tuxcare.com/rss_feed/releases/tuxcare9.6esu](https://cve.tuxcare.com/rss_feed/releases/tuxcare9.6esu)

### Technical support

All TuxCare products include technical support provided according to the support policy [https://tuxcare.com/TuxCare-support-policy.pdf](https://tuxcare.com/TuxCare-support-policy.pdf). It delivers 24/7/365 access to our engineers through the TuxCare Support Portal [https://tuxcare.com/support-portal/](https://tuxcare.com/support-portal/) and to our online knowledge base.
Technical Support for Extended Security Updates provides assistance with:

* ESU repository setup issues
* Package update problems (package conflicts, missing dependencies)
* FIPS and CVE-related questions
* ePortal issues
* Kernel crash issues (root cause analysis)

### GnuPG Keys

The TuxCare ESU/FIPS packages and repositories are cryptographically signed with a GPG key, so you can verify the legitimacy of the software you download and the source of the download. The details of our key are below:

* Public key: rsa4096/8D50EB66 (2023-03-06)
  * Fingerprint: FAD7 8590 81D0 738B 7A82  8496 D07B F2A0 8D50 EB66
  * ID: TuxCare (Software Signing Key) <packager@tuxcare.com>
  * Installation location: /etc/pki/rpm-gpg/RPM-GPG-KEY-TuxCare
  * Download link: [RPM-GPG-KEY-TuxCare](https://repo.tuxcare.com/tuxcare/RPM-GPG-KEY-TuxCare)

### Installing tuxctl

**Requirements**

* AlmaLinux 9.2 or AlmaLinux/Rocky Linux 9.6 operating system (download images from [here](https://tuxcare.com/almalinux-enterprise-support/get-almalinux/))
* x86_64 or aarch64 architecture
* Extended Security Updates license key (should be obtained from [portal.tuxcare.com](https://portal.tuxcare.com))
* Internet access

`tuxctl` is the setup tool for TuxCare's Enterprise Support for AlmaLinux, which will configure your system to receive patches from the TuxCare repositories. To install `tuxctl` you need to install the `tuxcare-release` package first. This package contains the TuxCare repo definitions, TuxCare GPG key and the `tuxctl` setup tool. Run one of the following as root:

For 9.2:

```text
# dnf -y install https://repo.tuxcare.com/tuxcare/tuxcare-release-latest-9.2.noarch.rpm
```

For 9.6:

```text
# dnf -y install https://repo.tuxcare.com/tuxcare/tuxcare-release-latest-9.6.noarch.rpm
```

The second step is to activate your license on the system. You should run the `tuxctl` tool as root with your ESU license key provided as a command line argument like so:

```text
# tuxctl --license-key XXXXXXXXXX
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
# tuxctl --force -l XXXXXXXXXX
```

:::

**Upgrading**

ESU customers can upgrade between ESU releases, for example from 9.2 to 9.6 by editing the /etc/dnf/vars/tuxcare_releasever file to specify the new version, like so:

```text
# echo 9.6 > /etc/dnf/vars/tuxcare_releasever
# dnf upgrade
```

### Enabling FIPS 140-3 mode

:::warning
Note that Rocky Linux 9.6 is a *vendor-affirmed OE* and has not been through the same FIPS lab testing as AlmaLinux, however the FIPS *modules* are the exact same packages used for both operating systems.
:::

First please ensure you have installed the `tuxcare-release` package as described above. If you haven't already registered your ESU license using `tuxctl` the next step will also do that for you.

To install the FIPS 140-3 validated ESU packages over the default ones and enable FIPS mode, please run these commands as root:

```text
# dnf -y upgrade
# fips-mode-setup --enable
# reboot
```

If you wish to only boot into the Active FIPS-validated kernel and not the security patched kernels or updates under CMVP review (only required in very high classification environments) you can use grubby like so:

```text
# dnf -y install kernel-5.14.0-284.11.1.el9_2.tuxcare.6
# grubby --set-default=/boot/vmlinuz-5.14.0-284.11.1.el9_2.tuxcare.6.$(uname -i)
```

:::warning
Note the aarch64 platform doesn't currently have FIPS-validated gnutls/libgcrypt/nss packages, only kernel and openssl for AlmaLinux 9.2

We also provide multilib i686 packages of the userspace modules in the x86_64 repo for backwards compatibility, note that these are not FIPS-validated but are built from the same source.
:::

Once you've logged in after the reboot, you can run these commands to confirm it worked (note the versions may be slightly different by the time you read this, see [version table](https://tuxcare.com/fips-for-almalinux/)):

```text
$ fips-mode-setup --check
FIPS mode is enabled.

$ update-crypto-policies --show
FIPS

$ update-crypto-policies --check
The configured policy matches the generated policy

$ uname -r
5.14.0-284.1101.el9_2.tuxcare.7.x86_64

$ openssl list -providers | grep -A3 fips
  fips
    name: OpenSSL FIPS Provider for AlmaLinux 9
    version: 3.0.7-1d2bd88ee26b3c90
    status: active
```

### Uninstalling tuxctl

To uninstall tuxctl, disable the ESU/FIPS functionality and revert to community repo's, you can run the following as root:

```text
# dnf -y remove tuxcare-release

# fips-mode-setup --disable

# sed -i \
  -e 's|https://repo.tuxcare.com/almalinux/|https://repo.almalinux.org/almalinux/|' \
  -e 's|^# mirrorlist|mirrorlist|' \
  -e 's|^baseurl|# baseurl|' \
  -e 's|$tuxcare_releasever/$tuxcare_token|$releasever|g' \
  -e 's|$tuxcare_releasever|$releasever|g' \
  -e '/^exclude/d' \
  /etc/yum.repos.d/almalinux*.repo

# sed -i \
  -e 's|https://repo.tuxcare.com/rockylinux/|http://dl.rockylinux.org/\$contentdir/|' \
  -e 's|^# mirrorlist|mirrorlist|' \
  -e 's|^baseurl|# baseurl|' \
  -e 's|$tuxcare_releasever/$tuxcare_token|$releasever|g' \
  -e 's|$tuxcare_releasever|$releasever|g' \
  -e '/^exclude/d' \
  /etc/yum.repos.d/rocky*.repo

# reboot
```

:::warning
Note that by disabling ESU, you will revert to tracking major version releases instead of sticking to a specific minor version, so you may be upgraded from 9.2 to 9.6 for example - a process you cannot undo.
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

### Migrating from CentOS

This guide contains steps on how to upgrade from CentOS 7 or Stream 8 [ELS](https://tuxcare.com/endless-lifecycle-support/centos-stream-8-eol-support/) to AlmaLinux 9.2 [ESU](https://tuxcare.com/fips-for-almalinux/).

You will require an ESU license key from [https://tuxcare.com/buy/almalinux/](https://tuxcare.com/buy/almalinux/) or [https://tuxcare.com/buy/rockylinux/](https://tuxcare.com/buy/rockylinux/) or talk to your Account Manager about our ELS-to-ESU migration bundle offer.

:::warning
Ensure that you have a non-root user who can SSH and elevate privileges to root using su/sudo as this process will disable root SSH login. FIPS mode will also disable non-RSA SSH keys. Console access is recommended.
:::

Choose **one** of the migrations below (1a or 1b) based on your CentOS ELS version. Once you have migrated to AlmaLinux 8, the instructions for getting to 9.2 and enabling ESU/FIPS are the same.

**1A. Migrate CentOS 7.9 ELS to AlmaLinux 8.10**

```text
# update then disable els
yum -y update
dnf config-manager --set-disabled centos7*

# install elevate 7to8
yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el7.noarch.rpm
yum install -y leapp-upgrade leapp-data-almalinux
leapp preupgrade
leapp answer --section remove_pam_pkcs11_module_check.confirm=True
leapp upgrade
reboot
```

You will now be running AlmaLinux 8.10 and can skip ahead to step 2.

**1B. Migrate CentOS Stream 8 ELS to AlmaLinux 8.10**

```text
# update then disable els
dnf -y upgrade
dnf config-manager --set-disabled centos8stream-els

# install almalinux-deploy
curl -O https://raw.githubusercontent.com/AlmaLinux/almalinux-deploy/master/almalinux-deploy.sh
bash almalinux-deploy.sh -d
reboot
```

**2. Upgrade AlmaLinux 8.10 to 9.2**

```text
# clean up
sed -i '/^exclude=.*/d' /etc/yum.conf /etc/dnf/dnf.conf
dnf -y remove *leapp* elevate-release els-define
rm -rf  /lib/modules/3.10*

# disable root ssh in a portable way
echo PermitRootLogin no | sudo tee -a /etc/ssh/sshd_config
sed -i 's/^PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config

# install elevate 8to9
dnf -y install https://repo.almalinux.org/elevate/elevate-release-latest-el8.noarch.rpm
dnf -y install leapp-upgrade leapp-data-almalinux

# upgrade specifically to 9.2
export LEAPP_DISABLE_NET_NAMING_SCHEMES=1
leapp preupgrade --target=9.2
leapp upgrade --target=9.2
reboot
```

**3. Enable AlmaLinux 9.2 ESU repositories and FIPS mode**

```text
# clean up
sed -i '/^exclude=.*/d' /etc/yum.conf /etc/dnf/dnf.conf
dnf -y remove *leapp* elevate-release kernel-*.el8*

# enable esu+fips
dnf -y install https://repo.tuxcare.com/tuxcare/tuxcare-release-latest-9.2.noarch.rpm
tuxctl --license-key XXXXXXXXXX
dnf -y upgrade
fips-mode-setup --enable
reboot
```

See also [Enabling FIPS 140-3 mode](#enabling-fips-140-3-mode)

## **Essential and Enhanced Support**

### 1. Introduction

In April 2023, TuxCare, a division of CloudLinux Inc., launched Enterprise Support for AlmaLinux, delivering a range of services for AlmaLinux workloads. It provides two levels of support, the essential level, focused on the operating system, and the enhanced support focused on applications. This document defines those services.

**Overview of Services**

There are two levels of support services:

**Essential Support** - a limited technical support offering that covers AlmaLinux and Rocky Linux installation/update issues (packaging, dependencies, repositories), migration issues (from CentOS/OracleLinux/RHEL to AlmaLinux), operating systems bugs/kernel crashes, a self-service portal, as well as an online knowledge base

**Enhanced Support** - an enterprise technical support service covering a range of open-source software, a self-service portal, as well as an online knowledge base.

### 2. Definitions

**"Customer," "End User," "User," "You/Your"** shall mean an organization which has a valid license to the Product that is supported in accordance with this Program.

**"Customer Technical Lead"** shall mean an employee or authorized contractor of Customer who shall complete required AlmaLinux/Rocky Linux product training, in order to serve as Customer's first line of internal support for the purpose of triaging AlmaLinux or Rocky Linux-related product issues, and who shall have authority to submit Technical Support Incidents and Service Requests to TuxCare Technical Support

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
|Support|<ul><li>AlmaLinux/Rocky Linux installation/update issues (packaging, dependencies, repositories)</li><li>Migration advice and recommendations</li><li>Operating system bugs / kernel crashes; root cause analysis</li></ul> ***Outside the scope: software upgrades, requests to perform migration***|Coverage, includes the following applications: <ul><li>Apps - Identity / Directory<ul><li>FreeIPA, Bind</li><li>openldap</li></ul></li><li>Apps - Infrastructure<ul><li>Ceph</li><li>Samba</li></ul></li><li>Containers (docker, podman)</li><li>VMs (KVM)</li><li>Apps - Package / Config management:<ul><li>Foreman</li><li>Ansible</li><li>Puppet</li><li>Chef</li></ul></li><li>Apps - Web servers<ul><li>nginx</li><li>apache</li><li>squid</li></ul></li><li>Apps - Data<ul><li>SQL Databases (MariaDB, Postgresql)</li><li>Redis, MySQL, InfluxDB, CouchDB</li></ul></li><li>Apps - Security / Compliance<ul><li>OpenSCAP</li></ul></li><li>Devops Apps:<ul><li>gitlab/git, jenkins, kubernetes</li></ul></li><li>Apps - event streaming<ul><li>Apache Kafka</li><li>Rabbitmq</li></ul></li><li>Migration advice and recommendations</li><li>Design & Architecture (e.g., review)</li><li>Data storage, backup assistance</li><li>Configuration assistance</li></ul> ***Outside the scope: code changes, software upgrades, requests to perform migration***|
|Incident Support|24/7/365 support through web ticketing system|24/7/365 support through web ticketing system and email|
|Allowed Number of Customer Technical Leads|2 per 1000 hosts, with maximum 10|2 per 1000 hosts, with maximum 10|

### 4. Description of Support Program

#### Accessing Technical Support

TuxCare Technical Support is designed for enterprise clients with trained IT staff which provide initial ‘1st-line' support to triage incidents. Customer and TuxCare will agree on Customer Technical Leads with the client, who will be entitled to access TuxCare Technical Support services; Customer Technical Leads must complete AlmaLinux/Rocky Linux training requirements. Customer Technical Leads may submit Technical Support Incidents and Service Requests to:

1. Technical Support ticketing system: [https://tuxcare.com/support-portal/](https://tuxcare.com/support-portal/)

* Acceptance of requests 24 hours a day, 365 days a year
* Unlimited number of tickets may be submitted
* Customers will be supplied with instructions describing the use of the ticketing system during onboarding
* User accounts will be created for each nominated user within each client organization
* User accounts will have access to log, view and respond to tickets

2. Email: acceptance of requests 24 hours a day, 365 days a year:

* New tickets may be created by simply emailing the support desk: [support@tuxcare.com](support@tuxcare.com)

:::warning
If you are a user of our server product AMI's on AWS Marketplace, before you contact support, you should have your AWS accountId to hand, there are various ways to find it.

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

All customers are entitled to access the Support knowledgebase, FAQs, and other self-service tools as may be offered by TuxCare Enterprise Support.

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
* Incidents caused by software platform incompatibility (including, but not limited to beta software, new versions of service packs or additions, whose compatibility with the Product has not been confirmed with AlmaLinux/Rocky Linux)
* Incidents caused by installing and running third-party applications (including, but not limited to the list of unsupported or incompatible applications published in the documentation)
* Incidents for which the Customer cannot provide accurate information, as reasonably requested by TuxCare, in order to reproduce, investigate, and resolve the incident
* Incidents which arise as a result of neglect or incorrect use of TuxCare instructions, which, if properly used, would have prevented the Incident

### Installing tuxctl (Essential Support)

Similarly to the ESU instructions [above](/enterprise-support-for-almalinux/#installing-tuxctl), Essential Support customers should install tuxcare-release and register their server using tuxctl. The main difference is the choice of OS version - you must install the RPM specifically for your AlmaLinux/Rocky Linux version, currently 8.8, 8.10, 9.2, 9.4, 9.5, 9.6, 9.7, 10.0 and 10.1 are supported.

If you are unsure, run this to find your exact OS version:

```text
$ cat /etc/almalinux-release

AlmaLinux release 8.10 (Cerulean Leopard)
```

Or:

```text
cat /etc/rocky-release

Rocky Linux release 9.6 (Blue Onyx)
```

You can browse [https://repo.tuxcare.com/tuxcare/](https://repo.tuxcare.com/tuxcare/) and find the correct RPM, or you can figure it out by substituting the version number (8.8, 8.10, 9.2, 9.4, 9.5, 9.6, 9.7, 10.0 or 10.1) then install it as root, for example:

```text
# dnf -y install https://repo.tuxcare.com/tuxcare/tuxcare-release-latest-8.10.noarch.rpm
```

:::warning
Be aware that installing tuxcare-release will modify any files that match the wildcard `/etc/yum.repos.d/almalinux*.repo` and `/etc/yum.repos.d/rocky*.repo`
:::

The second step is to activate your license on the system. You should run the `tuxctl` tool as root with your Essential Support license key provided as a command line argument like so:

```text
# tuxctl --license-key XXXXXXXXXX
```

Essential Support customers can upgrade to a new minor version, for example from 9.6 to 9.7 by editing the /etc/dnf/vars/tuxcare_releasever file to specify the new version, like so:

```text
# echo 9.7 > /etc/dnf/vars/tuxcare_releasever
# dnf upgrade
```

:::warning
If you get a status code 403:

```text
Errors during downloading metadata for repository 'tuxcare-esu'
```

Then you are using an Essential Support license key for an Extended Security Updates release (9.2, 9.6 or 9.10) and can disable the ESU repository using:

```text
dnf config-manager --set-disabled tuxcare-esu
```

ESU customers can find instructions [above](/enterprise-support-for-almalinux/#installing-tuxctl)
:::
