# Endless Lifecycle Support for OS

TuxCare's [Endless Lifecycle Support (ELS) for OS](https://tuxcare.com/extended-lifecycle-support/) service provides security updates, system enhancement patches, and selected bug fixes for older versions of a variety of Linux distributions, including CentOS 6, Oracle Linux 6, CentOS 7, Oracle Linux 7, CentOS 8, CentOS Stream 8, Ubuntu 16.04, and Ubuntu 18.04. These distributions have either reached their end of standard support from vendors or have reached End of Life (EOL).

Our ELS service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their out-of-date operating systems. The service coverage includes updates for the Linux kernel and a list of essential packages that are integral to server operations.

### Vulnerability coverage

TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we give priority to the NVD score.

TuxCare Endless Lifecycle Support, by default, provides security patches for High and Critical vulnerabilities (with a 7+ CVSS score). For vulnerabilities rated as Medium (4.0 to 6.9), TuxCare can provide patches for CVE's where mitigations are not available and there is sufficient customer demand.

Custom coverage options are available, including a 10-pack of customer-directed patches for clients who need CVEs patched outside of the ELS scope. Specific details regarding these coverage options and their pricing can be obtained by contacting our sales team.

### Target response times

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

We aim to deliver security patches for critical and high-risk vulnerabilities (CVSS 7+) within 14 days from when the vulnerabilities become publicly disclosed. This rapid response time significantly reduces the window of opportunity for potential attackers and meets most security regulation requirements.

Requests for customer-directed security patches for CVEs that are outside of the ELS scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 14 days.

### CVE status definition

- Needs Triage: Vulnerability information received and pending initial review
- In Research: Investigating the details of the vulnerability
- In Progress: Developing a fix for the identified vulnerability
- In Testing: Testing the developed fix for the vulnerability
- In Rollout: Releasing the fix in rollout repositories
- Released: Fix has been fully released to all users
- Ignored: This CVE is ignored for specific reasons (low score or another), detailed in the statement field
- Not Vulnerable: The vulnerability does not affect our version
- Already Fixed: The vulnerability has already been addressed by the vendor

### Supported packages

TuxCare's Endless Lifecycle Support provides updates for a comprehensive list of packages integral to server operations (100+ packages), providing maximum security for your operating system. You can view the full list of supported packages for each operating system, as well as get detailed information on the patched Common Vulnerabilities and Exposures (CVEs), [here](https://cve.tuxcare.com/els/projects). The list of supported packages may change as projects can be added or removed from the list. Support for additional packages can be provided on request.

### Live patching for ELS systems

TuxCare provides KernelCare live patching for **Ubuntu 18.04 ELS** and **CentOS 7 ELS** systems. [KernelCare](https://docs.tuxcare.com/live-patching-services/) is a product that provides security patches for a range of popular Linux kernels that can be installed without rebooting the system. It can be further enhanced with LibCare providing live security patches for critical shared libraries – openssl and glibc. Updating both the kernel and these libraries requires a system reboot while updating other packages does not. Using ELS, KernelCare and LibCare together provides comprehensive protection for your entire system without reboots and downtime.

You can easily add KernelCare to your ELS systems and start live patching them. You can also add ELS to systems already using KernelCare's live patching. Both ways, there's no need for system reboots or disruptions.

Please note that if you are using KernelCare on the system that will soon reach its end-of-life date, you will be able to continue using it after this date without subscribing to ELS. In this scenario, you will [still receive](https://docs.tuxcare.com/live-patching-services/#kernel-patching-lifetime) live kernel patches, but won’t receive security updates for other operating system packages which are delivered by ELS. At the same time, if you choose to uninstall KernelCare from your Ubuntu 18.04 ELS or CentOS 7 ELS systems and subscribe these systems to ELS, all previously applied KernelCare patches will be removed. Consequently, the systems will start getting updates only from the ELS repository.

### Errata advisories

TuxCare Endless Lifecycle Support provides qualified security and selected bug-fix errata advisories across all architectures. They can help users track which CVEs are resolved and which bugs have been addressed. You can view the full list of released advisories [here](https://cve.tuxcare.com/els/releases).

### OVAL patch definitions

Leveraging the [Open Vulnerability and Assessment Language (OVAL)](/els-for-os/#oval-data) patch definitions with OVAL-compatible tools, e.g. OpenSCAP, users can accurately check their systems for the presence of vulnerabilities.

### Connection to ELS repository

To install the Endless Lifecycle Support repository on a server, you just need to download an installer script and run the script with a key. The installation script will register the server in the CLN with the key, add a PGP key to the server, and create the ELS repository.

In order to use Endless Lifecycle Support, you will need to open TCP port 443 to the following destinations:

* [cln.cloudlinux.com](http://cln.cloudlinux.com)
* [repo.cloudlinux.com](http://repo.cloudlinux.com)

### Outbound Firewall Settings

You need to open the TCP port 443 to the following destinations in order to use ELS for:

- CentOS 6 ELS:

```
cln.cloudlinux.com
repo.cloudlinux.com
els-rollout.cloudlinux.com
```

- OracleLinux 6 ELS,
- OracleLinux 7 ELS,
- CentOS 8 ELS,
- CentOS Stream 8 ELS,
- Ubuntu 16.04 ELS,
- Ubuntu 18.04 ELS:

```
cln.cloudlinux.com
repo.cloudlinux.com
```

- CentOS 7 ELS,
- Ubuntu 20.04 ELS:

```
cln.cloudlinux.com
repo.tuxcare.com
els-rollout.tuxcare.com
```

### Technical Support

All TuxCare products include technical support provided according to the [support policy](https://tuxcare.com/TuxCare-support-policy.pdf). It delivers 24/7/365 access to our engineers through the TuxCare Support Portal [https://tuxcare.com/support-portal/](https://tuxcare.com/support-portal/) and to our online knowledge base.

## Installation of repositories

### CentOS 6 ELS

1. Download an installer script:

```
wget https://repo.cloudlinux.com/centos6-els/install-centos6-els-repo.sh
```

2. Run the installer script with keys:

```
sh install-centos6-els-repo.sh --license-key XXXX-XXXXXXXXX
```

The installation script registers a server in CLN with the key and adds a PGP key to the server.

3. Verify that the installation was successful.

To ensure the installation has been completed successfully, run the following command:

```
yum info els-define
```

It should return the info about an available package. If you can see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular yum upgrade command.

Example:

```
[els@centos6 ~]# yum info els-define
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
Available Packages
Name        : els-define
Arch        : x86_64
Version     : 1
Release     : 1.0.1.el6
Size        : 2.6 k
Repo        : centos6-els
Summary     : CentOS Server simulate release file
License     : GPLv2
Description : CentOS Server simulate els release files
```

### CloudLinux 6 ELS

:::tip
You do not need ELS for CentOS 6 subscription if you are already using CloudLinux OS 6. You can find more information [here](https://docs.cloudlinux.com/cln/billing/#cloudlinux-os-6-extended-lifecycle-support).
:::

### OracleLinux 6 ELS

1. Download an installer script:

```
wget https://repo.cloudlinux.com/oraclelinux6-els/install-oraclelinux-els-repo.py
```

2. Run the installer script with keys:

```
python install-oraclelinux-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

The installation script registers the server in the CLN with the key and adds a PGP key to the server.

3. Verify that the installation was successful. To ensure the installation has been completed successfully, run the following command:

```
yum info els-define
```

It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful.
After this, you will be able to install updates from the repository using a regular yum upgrade command.

Example:

```
[els@oraclelinux6 ~]# python install-oraclelinux-els-repo.py --license-key XXXX-XXXXXXX
Check that repository isn't created... Ok
https://cln.cloudlinux.com/cln/api/centos/token/register
Request repository token for this server... Ok
Prepare repo configuration... Ok
Save repo file to /etc/yum.repos.d/oraclelinux-els.repo... Ok
Save GPG key to /etc/pki/rpm-gpg/RPM-GPG-KEY-CloudLinux... Ok
Import Cloudlinux GPG...

[els@oraclelinux6 ~]# yum info els-define

Available Packages
Name        : els-define
Arch        : x86_64
Version     : 1
Release     : 1.0.1.el6
Size        : 2.7 k
Repo        : oraclelinux-els
Summary     : OEL6 Server simulate release file
License     : GPLv2
Description : OLE6 Server simulate els release files
```

### OracleLinux 7 ELS

1. Download an installer script:

```
wget https://repo.tuxcare.com/oraclelinux7-els/install-oraclelinux7-els-repo.sh
```

2. Run the installer script with keys:

```
sh install-oraclelinux7-els-repo.sh --license-key XXXX-XXXXXXXXX

```

The installation script registers the server in the CLN with the key and adds a PGP key to the server.

3. Verify that the installation was successful. To ensure the installation has been completed successfully, run the following command:

```
yum info els-define
```

It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful.
After this, you will be able to install updates from the repository using a regular yum upgrade command.

Example:

```
[els@oraclelinux7 ~]# yum info els-define
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
Installed Packages
Name        : els-define
Arch        : x86_64
Version     : 1
Release     : 1.0.4.el7
Size        : 52
Repo        : installed
From repo   : oraclelinux7-els
Summary     : OEL7 Server els-release file
License     : GPLv2
Description : OEL7 Server els-release file
```

### CentOS 7 ELS

1. Download an installer script:

```
wget https://repo.tuxcare.com/centos7-els/install-centos7-els-repo.sh
```

2. Run the installer script with keys:

```
sh install-centos7-els-repo.sh --license-key XXXX-XXXXXXXXX
```

The installation script registers a server in CLN with the key and adds a PGP key to the server.

3. Verify that the installation was successful.

To ensure the installation has been completed successfully, run the following command:

```
yum info els-define
```

It should return the info about an available package. If you can see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular yum upgrade command.

Example:

```
[els@centos7 ~]# yum info els-define
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
Installed Packages
Name        : els-define
Arch        : x86_64
Version     : 1
Release     : 1.0.4.el7
Size        : 52
Repo        : installed
From repo   : centos7-els
Summary     : CentOS Server els-release file
License     : GPLv2
Description : CentOS Server els-release file
```

### CentOS 8 ELS

1. Download an installer script:

  * For CentOS 8.4:

  ```
  wget https://repo.cloudlinux.com/centos8.4-els/install-centos8.4-els-repo.sh
  ```

  * For CentOS 8.5:

  ```
  wget https://repo.cloudlinux.com/centos8.5-els/install-centos8.5-els-repo.sh
  ```

2. Run the installer script with keys:

  * For CentOS 8.4:

  ```
  sh install-centos8.4-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
  ```

  * For CentOS 8.5:

  ```
  sh install-centos8.5-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
  ```

  The installation script registers the server in the CLN with the key and adds a PGP key to the server.

3. Verify that the installation was successful. To ensure the installation has been completed successfully, run the following command:

```
yum info els-define
```

It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful.
After this, you will be able to install updates from the repository using a regular yum upgrade command.

Example:

```
[els@centos8_5 ~]#  sh install-centos8.5-els-repo.sh --license-key XXXX-XXXXX
This server is not CentOS Linux release 8.5


[els@centos8_5 ~]# yum info els-define

Available Packages
Name         : els-define
Version      : 1
Release      : 1.0.3.el8
Architecture : x86_64
Size         : 7.0 k
Source       : els-define-1-1.0.3.el8.src.rpm
Repository   : centos8.5-els
Summary      : CentOS Server els-release file
License      : GPLv2
Description  : CentOS Server els-release file
```

### CentOS Stream 8 ELS

1. Download an installer script:

```
wget https://repo.tuxcare.com/centos8stream-els/install-centos8stream-els-repo.sh
```

2. Run the installer script with keys:

```
sh install-centos8stream-els-repo.sh --license-key XXXX-XXXXXXXXX
```

The installation script registers a server in CLN with the key and adds a PGP key to the server.

3. Verify that the installation was successful.

To ensure the installation has been completed successfully, run the following command:

```
yum info els-define
```

It should return the info about an available package. If you can see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular yum upgrade command.

Example:

```
[els@centos6 ~]# yum info els-define
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
Available Packages
Name        : els-define
Arch        : x86_64
Version     : 1
Release     : 1.0.1.el6
Size        : 2.6 k
Repo        : centos8stream-els
Summary     : CentOS Server simulate release file
License     : GPLv2
Description : CentOS Server simulate els release files
```

### Ubuntu 16.04 ELS

1. Download an installer script:

```
wget https://repo.cloudlinux.com/ubuntu16_04-els/install-ubuntu16.04-els-repo.sh
```

2. Run the installer script with keys:

```
bash install-ubuntu16.04-els-repo.sh --license-key XXX-XXXXXXXXXXXX
```

The installation script registers the server in the CLN with the key, adds PGP key to the server


3. Verify that the installation was successful. To ensure that installation has been completed successfully, run the following command:

```
apt-cache show els-define
```

It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful.
After this, you will be able to install updates from the repository using a regular apt upgrade command.

Example:
```
[els@ubuntu16 ~]# apt-cache show els-define
Package: els-define
Version: 1-1.0.1
Architecture: amd64
Maintainer: Darya Malyavkina <dmalyavkina@cloudlinux.com>
Installed-Size: 10
Homepage: https://tuxcare.com/els-for-os/
Priority: optional
Section: utils
Filename: pool/main/e/els-define/els-define_1-1.0.1_amd64.deb
Size: 1302
SHA256: a6b68c43c88a148ecc4806d0b4eb309deb5af418c8e1d0ea980fd453f5aec8dd
SHA1: 4907b9796c40327dbd45ecf2fd0806a32e2c24bd
MD5sum: 42f69c642c27052b15e4470533fdab62
Description: ELS define package for Ubuntu 16.04
Description-md5: 39e3bb446b4c63607f8f0358484545bf
```

### Ubuntu 18.04 ELS

1. Download an installer script:
```
wget https://repo.cloudlinux.com/ubuntu18_04-els/install-ubuntu18.04-els-repo.sh
```
2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds PGP key to the server
```
bash install-ubuntu18.04-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
```
3. Verify that the installation was successful. To ensure that installation has been completed successfully, run the following command:
```
apt-cache show els-define
```
It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular apt upgrade command.

Example:
```
[els@ubuntu18 ~]# apt-cache show els-define
Package: els-define
Version: 1-1.0.2
Architecture: amd64
Maintainer: Darya Malyavkina <dmalyavkina@cloudlinux.com>
Installed-Size: 10
Homepage: https://tuxcare.com/extended-lifecycle-support/
Priority: optional
Section: utils
Filename: pool/main/e/els-define/els-define_1-1.0.2_amd64.deb
Size: 1424
SHA256: 1594db1c72e64adf1fcbd6bfd4a86c72c6e4127d476d238d8c6821d34590d945
SHA1: 03780c77ab2f1982126b78ab5454f7c0ff287162
MD5sum: bd3f51b29deb5cc7ede4da8aa39ee2c2
Description: ELS define package for Ubuntu 18.04
Description-md5: 39e3bb446b4c63607f8f0358484545bf
```

### Ubuntu 20.04 ELS

1. Download an installer script:
```
wget https://repo.tuxcare.com/ubuntu20_04-els/install-ubuntu20.04-els-repo.sh
```
2. Run the installer script with keys. The installation script registers the server in the CLN with the key, adds PGP key to the server
```
bash install-ubuntu20.04-els-repo.sh --license-key XXXX-XXXXXXXXXXXX
```
3. Verify that the installation was successful. To ensure that installation has been completed successfully, run the following command:
```
apt-cache show els-define
```
It should return the info of an available package. If you see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular apt upgrade command.

Example:
```
[els@ubuntu20 ~]# apt-cache show els-os-release
Package: els-os-release
Version: 1.0.0-1
Architecture: amd64
Maintainer: Koba Karaputadze <kkaraputadze@cloudlinux.com>
Installed-Size: 16
Depends: els-define
Homepage: https://tuxcare.com/extended-lifecycle-support/
Priority: optional
Section: utils
Filename: pool/main/e/els-os-release/els-os-release_1.0.0-1_amd64.deb
Size: 4326
SHA256: 74f7983c4a3e5c92f954e7af4048f2327e54beed9d06c2ad81baeb7e0b0af86d
SHA1: b33baa2e0ed955043178863e05e05ebddb0254c6
MD5sum: 57f60465595890e8fd374bd6d87a5d40
Description: ELS os release package for Ubuntu 20.04
Description-md5: 409266c8048d396eedc5dacdff306abc
```

## OVAL data

### Introduction

Identifying the vulnerabilities that apply to your systems is an important task for IT and InfoSec teams, and at TuxCare we make it easy. We provide OVAL data that contain instructions to the vulnerability scanner to determine the addressed vulnerabilities from the ELS updates.  This section contains information about available TuxCare ELS OVAL streams.

### TuxCare ELS OVAL Streams

* CentOS 6 ELS: [https://repo.cloudlinux.com/centos6-els/centos6-els-oval.xml](https://repo.cloudlinux.com/centos6-els/centos6-els-oval.xml)
* CentOS 7 ELS: [https://repo.tuxcare.com/centos7-els/centos7-els-oval.xml](https://repo.tuxcare.com/centos7-els/centos7-els-oval.xml)
* CentOS 8.4 ELS: [https://repo.cloudlinux.com/centos8.4-els/centos84-els-oval.xml](https://repo.cloudlinux.com/centos8.4-els/centos84-els-oval.xml)
* CentOS 8.5 ELS: [https://repo.cloudlinux.com/centos8.5-els/centos85-els-oval.xml](https://repo.cloudlinux.com/centos8.5-els/centos85-els-oval.xml)
* CentOS Stream 8 ELS: [https://repo.tuxcare.com/centos8stream-els/centos8stream-els-oval.xml](https://repo.tuxcare.com/centos8stream-els/centos8stream-els-oval.xml)
* Oracle Linux 6 ELS: [https://repo.cloudlinux.com/oraclelinux6-els/oraclelinux6-els-oval.xml](https://repo.cloudlinux.com/oraclelinux6-els/oraclelinux6-els-oval.xml)
* Oracle Linux 7 ELS: [https://repo.tuxcare.com/oraclelinux7-els/oraclelinux7-els-oval.xml](https://repo.tuxcare.com/oraclelinux7-els/oraclelinux7-els-oval.xml)
* Ubuntu 16.04 ELS: [https://repo.cloudlinux.com/ubuntu16_04-els/ubuntu16.04-els-oval.xml](https://repo.cloudlinux.com/ubuntu16_04-els/ubuntu16.04-els-oval.xml)
* Ubuntu 18.04 ELS: [https://repo.cloudlinux.com/ubuntu18_04-els/ubuntu18.04-els-oval.xml](https://repo.cloudlinux.com/ubuntu18_04-els/ubuntu18.04-els-oval.xml)
* Ubuntu 20.04 ELS: [https://repo.tuxcare.com/ubuntu20_04-els/ubuntu20.04-els-oval.xml](https://repo.tuxcare.com/ubuntu20_04-els/ubuntu20.04-els-oval.xml)


### How to use OpenSCAP with TuxCare ELS

OpenSCAP is an open source vulnerability scanner and compliance tool and it can be used to scan a system protected by TuxCare ELS. The following command show how to produce a vulnerability report for the system:

1. Install els-define and OpenSCAP

  * for rpm systems:
  ```
  yum install els-define openscap openscap-utils scap-security-guide -y
  ```
  * for deb systems:
  ```
  apt-get install els-define libopenscap8 -y
  ```
2. Download OVAL stream:

```
wget https://repo.cloudlinux.com/ubuntu18_04-els/ubuntu18.04-els-oval.xml
```
3. Run scanning:

```
oscap oval eval --results results.xml --report report.html ubuntu18.04-els-oval.xml
```
4. Examine scan results report

Following the example above scan results report will be saved to repot.html file in current directory. This file can then be downloaded for analysis or published directly with local web server, for example:
```
python3 -m http.server 8000
```
or for python2
```
python -m SimpleHTTPServer 8000
```

Assuming the above command is run from the directory with report.html file, the webpage with the report can then be accessed on `http://<server-ip-addess>:8000/report.html`cve through a web browser.

![](/images/available-cve-fixes-and-their-status.png)

The report includes a table with vulnerabilities and their status on examined system. Line as the following one reports that the system is vulnerable to the CVE-2023-2828:

```
update oval:com.tuxcare.clsa:def:1688677755 true patch [CLSA-2023:1688677755], [CVE-2023-2828] Fix CVE(s): CVE-2023-2828
```

The table also includes corresponding hyperlinks to advisory pages where the package and the version containing the fix can be found as well as the command to run on the target system in order to install the update.

Lines like the one below designate that the fix for corresponding CVE is allready installed on the system, and no further action is needed:

```
oval:com.tuxcare.clsa:def:1694538670 false patch [CLSA-2023:1694538670], [CVE-2022-40433] Fix CVE(s): CVE-2022-40433
```

### How integrate the OVAL data with a new vulnerability scanner

Identifying the vulnerabilities that apply to your systems is an important task for IT and InfoSec teams, and at TuxCare we make it easy.

To detect whether a system has TuxCare ELS installed, check for following file being present:
`/etc/els-release`

Once that is validated, you can use the corresponding to the operating system OVAL files from above to scan for vulnerabilities.

## TuxCare ELS RSS releases feeds

* CentOS 6 ELS: [https://cve.tuxcare.com/rss_feed/releases/centos6els](https://cve.tuxcare.com/rss_feed/releases/centos6els)
* CentOS 7 ELS: [https://cve.tuxcare.com/rss_feed/releases/centos7els](https://cve.tuxcare.com/rss_feed/releases/centos7els)
* CentOS 8.4 ELS: [https://cve.tuxcare.com/rss_feed/releases/centos8.4els](https://cve.tuxcare.com/rss_feed/releases/centos8.4els)
* CentOS 8.5 ELS: [https://cve.tuxcare.com/rss_feed/releases/centos8.5els](https://cve.tuxcare.com/rss_feed/releases/centos8.5els)
* CentOS Stream 8 ELS: [https://cve.tuxcare.com/rss_feed/releases/centos8streamels](https://cve.tuxcare.com/rss_feed/releases/centos8streamels)
* CloudLinux 6: [https://cve.tuxcare.com/rss_feed/releases/cloudlinux6els](https://cve.tuxcare.com/rss_feed/releases/cloudlinux6els)
* Oracle Linux 6 ELS: [https://cve.tuxcare.com/rss_feed/releases/oraclelinux6els](https://cve.tuxcare.com/rss_feed/releases/oraclelinux6els)
* Oracle Linux 7 ELS: [https://cve.tuxcare.com/rss_feed/releases/oraclelinux7els](https://cve.tuxcare.com/rss_feed/releases/oraclelinux7els)
* Ubuntu 16.04 ELS: [https://cve.tuxcare.com/rss_feed/releases/ubuntu16.04els](https://cve.tuxcare.com/rss_feed/releases/ubuntu16.04els)
* Ubuntu 18.04 ELS: [https://cve.tuxcare.com/rss_feed/releases/ubuntu18.04els](https://cve.tuxcare.com/rss_feed/releases/ubuntu18.04els)
* Ubuntu 20.04 ELS: [https://cve.tuxcare.com/rss_feed/releases/ubuntu20.04els](https://cve.tuxcare.com/rss_feed/releases/ubuntu20.04els)

## Deinstallation instructions for yum repositories

1. Find and remove the file with ELS repositories:

```
# ls -l /etc/yum.repos.d/*-els.repo
-rw-r--r-- 1 root root 210 Aug  2  2021 /etc/yum.repos.d/centos6-els.repo

# rm /etc/yum.repos.d/centos6-els.repo
```

2. Remove the `els-define` package:
```
# yum remove els-define
```
