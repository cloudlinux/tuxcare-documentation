# Security Updates

TuxCare provides the following security updates for ELS for OS:

* [Errata](#errata-advisories)
* [Open Vulnerability and Assessment Language (OVAL)](#oval-patch-definitions)
* [Common Security Advisory Framework (CSAF)](#common-security-advisory-framework)

Released Fixes are available via [cve.tuxcare.com](https://cve.tuxcare.com/els/releases) and can additionally be found on [security.tuxcare.com](https://security.tuxcare.com).

## Errata advisories

TuxCare Endless Lifecycle Support provides qualified security and selected bug-fix errata advisories across all architectures. They can help users track which CVEs are resolved and which bugs have been addressed.

You can view the full list of released fixes on [cve.tuxcare.com](https://cve.tuxcare.com/els/releases).

## CVE status definition

- Needs Triage: Vulnerability information received and pending initial review
- In Research: Investigating the details of the vulnerability
- In Progress: Developing a fix for the identified vulnerability
- In Testing: Testing the developed fix for the vulnerability
- In Rollout: Releasing the fix in rollout repositories
- Released: Fix has been fully released to all users
- Ignored: This CVE is ignored for specific reasons (low score or another), detailed in the statement field
- Not Vulnerable: The vulnerability does not affect our version
- Already Fixed: The vulnerability has already been addressed by the vendor

## OVAL patch definitions

Leveraging the Open Vulnerability and Assessment Language (OVAL) patch definitions with OVAL-compatible tools, e.g. OpenSCAP, users can accurately check their systems for the presence of vulnerabilities.

Identifying the vulnerabilities that apply to your systems is an important task for IT and InfoSec teams, and at TuxCare we make it easy. We provide OVAL data that contain instructions to the vulnerability scanner to determine the addressed vulnerabilities from the ELS updates.  This section contains information about available TuxCare ELS OVAL streams.

### TuxCare ELS OVAL Streams

* CentOS 6 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/centos6els/oval.xml)
* CentOS 7 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/centos7els/oval.xml)
* CentOS 8.4 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/centos8.4els/oval.xml)
* CentOS 8.5 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/centos8.5els/oval.xml)
* CentOS Stream 8 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/centos-stream8els/oval.xml)
* Oracle Linux 6 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/oraclelinux6els/oval.xml)
* Oracle Linux 7 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/oraclelinux7els/oval.xml)
* Red Hat Enterprise Linux 7 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/rhel7els/oval.xml)
* Ubuntu 16.04 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu16.04els/oval.xml)
* Ubuntu 18.04 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu18.04els/oval.xml)
* Ubuntu 20.04 ELS: [oval.xml](https://security.tuxcare.com/oval/els_os/ubuntu20.04els/oval.xml)

### How to use OpenSCAP with TuxCare ELS

OpenSCAP is an open source vulnerability scanner and compliance tool and it can be used to scan a system protected by TuxCare ELS. The following command show how to produce a vulnerability report for the system:

1. Install els-define and OpenSCAP:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum install els-define openscap openscap-utils scap-security-guide -y` },
     { title: 'DEB', content: `apt-get install els-define libopenscap8 -y` }
   ]" />

2. Before running a scan, make sure the system is up to date and running the latest kernel:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum update -y` },
     { title: 'DEB', content: `apt-get update && apt-get upgrade -y` }
   ]" />

3. Reboot the system.

4. **RPM-based system only**: after reboot, remove older kernel versions:

   <CodeTabs :tabs="[
     { title: 'EL 6, EL 7', content: `package-cleanup --oldkernels --count=1 -y` },
     { title: 'EL 8, EL 9', content: `dnf remove --oldinstallonly -y` }
   ]" />

4. Download OVAL stream. For example, Ubuntu 18.04:

   <CodeWithCopy>

   ```
   wget https://security.tuxcare.com/oval/els_os/ubuntu18.04els/oval.xml
   ```

   </CodeWithCopy>

5. Run the scan:

   <CodeWithCopy>

   ```
   oscap oval eval --results results.xml --report report.html oval.xml
   ```

   </CodeWithCopy>

4. Examine the scan results report.

   Following the example above scan results report will be saved to report.html file in current directory. This file can then be downloaded for analysis or published directly with a local web server, for example:

   <CodeWithCopy>

   ```
   python3 -m http.server 8000
   ```

   </CodeWithCopy>

   or for python2

   <CodeWithCopy>

   ```
   python -m SimpleHTTPServer 8000
   ```

   </CodeWithCopy>

   Assuming the above command is run from the directory with the report.html file, the webpage with the report can then be accessed on `http://<server-ip-addess>:8000/report.html` through a web browser.

   **Note: the OpenSCAP report below is provided as an example. The results will vary depending on the OS and version you are scanning.**

   ![](/images/available-cve-fixes-and-their-status.png)

   The report includes a table with vulnerabilities and their status on the examined system. Line, as the one below, reports that the system is vulnerable to CVE-2023-2828:

   ```
   update oval:com.tuxcare.clsa:def:1688677755 true patch [CLSA-2023:1688677755], [CVE-2023-2828] Fix CVE(s): CVE-2023-2828
   ```

   The table also includes corresponding hyperlinks to advisory pages where the package and the version containing the fix can be found as well as the command to run on the target system in order to install the update.

   Lines like the one below designate that the fix for the corresponding CVE is already installed on the system, and no further action is needed:
 
   ```
   oval:com.tuxcare.clsa:def:1694538670 false patch [CLSA-2023:1694538670], [CVE-2022-40433] Fix CVE(s): CVE-2022-40433
   ```

### How to integrate the OVAL data with a new vulnerability scanner

Identifying the vulnerabilities that apply to your systems is an important task for IT and InfoSec teams, and at TuxCare we make it easy.

To detect whether a system has TuxCare ELS installed, check for the following file being present: `/etc/els-release`.

Once that is validated, you can use the corresponding to the operating system OVAL files from above to scan for vulnerabilities.

## Common Security Advisory Framework

Common Security Advisory Framework (CSAF) is a machine-readable format, standardized by [OASIS](https://www.csaf.io/). It's designed to enable consistent and automated sharing of security advisory information. 

TuxCare publishes the following CSAF files at [security.tuxcare.com](https://security.tuxcare.com/csaf/v2/):
* CSAF Vulnerability Exploitability eXchange (VEX) files – indexed by CVE VEX documents are available in CSAF 2.0 format, including past CVEs.
* CSAF Security Advisory files – advisories are published in CSAF 2.0 format and indexed by Security Advisory.

`provider-matadata.json` contains information for tools and users about where and how to retrieve CSAF advisories published by TuxCare. By OASIS requirements, it is available at two URLs (both serving the same file):
* [csaf.data.security.tuxcare.com](https://csaf.data.security.tuxcare.com/)
* [tuxcare.com/.well-known/csaf/provider-metadata.json](https://tuxcare.com/.well-known/csaf/provider-metadata.json)

### TuxCare CSAF data

Currently, we provide CSAF data for the following OS versions:

* CentOS 6 ELS: [security.tuxcare.com/csaf/v2/els_os/centos6els/](https://security.tuxcare.com/csaf/v2/els_os/centos6els/)
* CentOS 7 ELS: [security.tuxcare.com/csaf/v2/els_os/centos7els/](hhttps://security.tuxcare.com/csaf/v2/els_os/centos7els/)
* CentOS 8.4 ELS: [security.tuxcare.com/csaf/v2/els_os/centos8.4els/](https://security.tuxcare.com/csaf/v2/els_os/centos8.4els/)
* CentOS 8.5 ELS: [security.tuxcare.com/csaf/v2/els_os/centos8.5els/](https://security.tuxcare.com/csaf/v2/els_os/centos8.5els/)
* CentOS Stream 8 ELS: [security.tuxcare.com/csaf/v2/els_os/centos-stream8els/](https://security.tuxcare.com/csaf/v2/els_os/centos-stream8els/)
* Oracle Linux 6 ELS: [security.tuxcare.com/csaf/v2/els_os/oraclelinux6els/](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux6els/)
* Oracle Linux 7 ELS: [security.tuxcare.com/csaf/v2/els_os/oraclelinux7els/](https://security.tuxcare.com/csaf/v2/els_os/oraclelinux7els/)
* Red Hat Enterprise Linux 7 ELS: [security.tuxcare.com/csaf/v2/els_os/rhel7els/](https://security.tuxcare.com/csaf/v2/els_os/rhel7els/)
* Ubuntu 16.04 ELS: [security.tuxcare.com/csaf/v2/els_os/ubuntu16.04els/](https://security.tuxcare.com/csaf/v2/els_os/ubuntu16.04els/)
* Ubuntu 18.04 ELS: [security.tuxcare.com/csaf/v2/els_os/ubuntu18.04els/](https://security.tuxcare.com/csaf/v2/els_os/ubuntu18.04els/)
* Ubuntu 20.04 ELS: [security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/](https://security.tuxcare.com/csaf/v2/els_os/ubuntu20.04els/)

## TuxCare ELS RSS releases feeds

* CentOS 6 ELS: [cve.tuxcare.com/rss_feed/releases/centos6els](https://cve.tuxcare.com/rss_feed/releases/centos6els)
* CentOS 7 ELS: [cve.tuxcare.com/rss_feed/releases/centos7els](https://cve.tuxcare.com/rss_feed/releases/centos7els)
* CentOS 8.4 ELS: [cve.tuxcare.com/rss_feed/releases/centos8.4els](https://cve.tuxcare.com/rss_feed/releases/centos8.4els)
* CentOS 8.5 ELS: [cve.tuxcare.com/rss_feed/releases/centos8.5els](https://cve.tuxcare.com/rss_feed/releases/centos8.5els)
* CentOS Stream 8 ELS: [cve.tuxcare.com/rss_feed/releases/centos8streamels](https://cve.tuxcare.com/rss_feed/releases/centos8streamels)
* Oracle Linux 6 ELS: [cve.tuxcare.com/rss_feed/releases/oraclelinux6els](https://cve.tuxcare.com/rss_feed/releases/oraclelinux6els)
* Oracle Linux 7 ELS: [cve.tuxcare.com/rss_feed/releases/oraclelinux7els](https://cve.tuxcare.com/rss_feed/releases/oraclelinux7els)
* Red Hat Enterprise Linux 7 ELS: [cve.tuxcare.com/rss_feed/releases/rhel7els](https://cve.tuxcare.com/rss_feed/releases/rhel7els)
* Ubuntu 16.04 ELS: [cve.tuxcare.com/rss_feed/releases/ubuntu16.04els](https://cve.tuxcare.com/rss_feed/releases/ubuntu16.04els)
* Ubuntu 18.04 ELS: [cve.tuxcare.com/rss_feed/releases/ubuntu18.04els](https://cve.tuxcare.com/rss_feed/releases/ubuntu18.04els)
* Ubuntu 20.04 ELS: [cve.tuxcare.com/rss_feed/releases/ubuntu20.04els](https://cve.tuxcare.com/rss_feed/releases/ubuntu20.04els)

