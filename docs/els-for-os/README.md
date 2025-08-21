# Endless Lifecycle Support for OS

TuxCare's [Endless Lifecycle Support (ELS) for OS](https://tuxcare.com/extended-lifecycle-support/) service provides security updates, system enhancement patches, and selected bug fixes for older versions of a variety of Linux distributions. These distributions have either reached their end of standard support from vendors or have reached End of Life (EOL).

Our ELS service is designed to provide solutions for organizations that are not yet ready to migrate to newer versions and that are seeking long-term stability for their out-of-date operating systems. The service coverage includes updates for the Linux kernel and a list of essential packages that are integral to server operations.

## Supported Operating Systems

* [CentOS 6](./centos-6-els)
* [CentOS 7](./centos-7-els)
* [CentOS 8](./centos-8-els)
* [CentOS Stream 8](./centos-stream-8-els)
* [Oracle Linux 6](./oracle-linux-6-els)
* [Oracle Linux 7](./oracle-linux-7-els)
* [Red Hat Enterprise Linux 7](./rhel-7-els)
* [Ubuntu 16.04](./ubuntu-16-04-els)
* [Ubuntu 18.04](./ubuntu-18-04-els)
* [Ubuntu 20.04](./ubuntu-20-04-els)

## Vulnerability coverage

TuxCare employs the Common Vulnerability Scoring System (CVSS v3) to assess the severity of security vulnerabilities. Our severity rating system for patching vulnerabilities integrates both NVD scoring and vendor scoring (when available). When the vendor's score is lower than the NVD score, we give priority to the NVD score.

TuxCare Endless Lifecycle Support, by default, provides security patches for High and Critical vulnerabilities (with a 7+ CVSS score). For vulnerabilities rated as Medium (4.0 to 6.9), TuxCare can provide patches for CVE's where mitigations are not available and there is sufficient customer demand.

Custom coverage options are available, including a 10-pack of customer-directed patches for clients who need CVEs patched outside of the ELS scope. Specific details regarding these coverage options and their pricing can be obtained by contacting our sales team.

More about [security updates](./security-updates/).

## Target response times

Aligning with many industry standards and regulatory requirements, TuxCare is committed to delivering timely security updates. For instance, the Payment Card Industry Data Security Standard (PCI DSS) mandates that all 'High' vulnerabilities (CVSS score of 7.0+) must be addressed within 30 days. Other regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for healthcare or the Federal Information Security Management Act (FISMA) for government agencies, uphold similar requirements.

We aim to deliver security patches for critical and high-risk vulnerabilities (CVSS 7+) within 14 days from when the vulnerabilities become publicly disclosed. This rapid response time significantly reduces the window of opportunity for potential attackers and meets most security regulation requirements.

Requests for customer-directed security patches for CVEs that are outside of the ELS scope will be reviewed within 3 working days. If the request is accepted, we will provide the patch within the next 14 days.

## Supported packages

TuxCare's Endless Lifecycle Support provides updates for a comprehensive list of packages integral to server operations (100+ packages), providing maximum security for your operating system. You can view the full list of supported packages for each operating system, as well as get detailed information on the patched Common Vulnerabilities and Exposures (CVEs), [here](https://cve.tuxcare.com/els/projects). The list of supported packages may change as projects can be added or removed from the list. Support for additional packages can be provided on request.

## Live patching for ELS systems

TuxCare provides KernelCare live patching for **Ubuntu 18.04 ELS** and **CentOS 7 ELS** systems. [KernelCare](https://docs.tuxcare.com/live-patching-services/) is a product that provides security patches for a range of popular Linux kernels that can be installed without rebooting the system. It can be further enhanced with LibCare providing live security patches for critical shared libraries – openssl and glibc. Updating both the kernel and these libraries requires a system reboot while updating other packages does not. Using ELS, KernelCare and LibCare together provides comprehensive protection for your entire system without reboots and downtime.

You can easily add KernelCare to your ELS systems and start live patching them. You can also add ELS to systems already using KernelCare's live patching. Both ways, there's no need for system reboots or disruptions.

Please note that if you are using KernelCare on the system that will soon reach its end-of-life date, you will be able to continue using it after this date without subscribing to ELS. In this scenario, you will [still receive](https://docs.tuxcare.com/live-patching-services/#kernel-patching-lifetime) live kernel patches, but won’t receive security updates for other operating system packages which are delivered by ELS. At the same time, if you choose to uninstall KernelCare from your Ubuntu 18.04 ELS or CentOS 7 ELS systems and subscribe these systems to ELS, all previously applied KernelCare patches will be removed. Consequently, the systems will start getting updates only from the ELS repository.
