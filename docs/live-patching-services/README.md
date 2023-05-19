# KernelCare Enterprise

KernelCare Enterprise live patching enhances your vulnerability patching program by providing live patches to the Linux kernel and, optionally, with add-ons to critical userspace components, as well as the virtualization stack.
The systems are patched according to your patch deployment policy, allowing you to customize your patch management to align with the needs of your unique environment, whether online or in an air-gapped environment. Plus, your vulnerability reports reduce in size quickly as KernelCare seamlessly integrates with all popular vulnerability scanners to give you an accurate vulnerability exposure report.

KernelCare Enterprise brings KernelCare live patching by default and the following add-ons:

* LibCare
* QEMUCare

The sections below describe KernelCare live patching and the additional add-ons in more detail.

## KernelCare

### Introduction
KernelCare Enterprise is a live kernel patching service that provides security patches and bugfixes for a range of popular Linux kernels that can be installed without rebooting the system

### Benefits
Today, system administrators have to reboot a server to apply the latest kernel updates. These updates are necessary to prevent security issues. Due to downtime associated with reboots, however, such updates are often delayed, pushed into the darkest hours of the night. It is common for server owners to not update their systems for months or even years and to run vulnerable systems to avoid downtime. Managed service providers face the problem of having to schedule downtime and then updating and rebooting thousands of servers in a short period of time, straining resources. KernelCare solves this update and reboot issue by providing live kernel patching without the need for a reboot

### Key Features
* Rebootless Linux Kernel Patching & Custom Patching
* Works On-prem & in the cloud
* Private patch server for gated infrastructures - ePortal
* Out-of-the-box integration with patch management & vulnerability assessment tools

### Getting trial license

You will need a trial activation key to be able to use the KernelCare Enterprise. The trial license subscription will work for 7 days.

If you have any issues getting activation key or if you have any questions regarding using your trial subscription – contact [sales@cloudlinux.com](mailto:sales@cloudlinux.com) and we will help.

### Installation

KernelCare Enterprise is compatible with 64-bit versions of CloudLinuxOS/CentOS 6,7, and 8, AlmaLinux/RHEL 6,7,8, and 9, Oracle Linux 6 and 7, Amazon Linux 1 and 2, Virtuozzo/PCS/OpenVZ 2.6.32, Debian 8,9 and 10, Proxmox VE 5 and 6, Virt-SIG/Xen4CentOS 6 and 7, Ubuntu 14.04, 15.04, 16.04, 18.04 and 20.04 kernels. The list of compatible kernels can be found on the following link: [https://patches.kernelcare.com/](https://patches.kernelcare.com/) .

To install KernelCare Enterprise, run:

```
curl -s -L https://kernelcare.com/installer | bash
```

or:

```
wget -qq -O - https://kernelcare.com/installer | bash
```

If you are using IP-based license, nothing else required to be done.

If you are using key-based license, run:

```
$ /usr/bin/kcarectl --register KEY
```

`KEY` is the registration key code string provided when you sign up for purchase or trial of the product.

If you are experiencing **_Key limit reached_** error after the end of the trial period you should first, unregister the server by running:

```
kcarectl --unregister
```

To check if patches applied, run:

```
$ /usr/bin/kcarectl --info
```

The software will automatically check for new patches every 4 hours.

If you would like to run update manually:

```
$ /usr/bin/kcarectl --update
```

To check current kernel compatibility with KernelCare, use the following [script](https://raw.githubusercontent.com/iseletsk/kernelchecker/master/py/kc-compat.py) by running:

```
curl -s -L https://kernelcare.com/checker | python
```

or:

```
wget -qq -O - https://kernelcare.com/checker | python
```

### Update 

To update the agent package to the latest version use: 

* For rpm-based distributives (CentOS, RedHat, etc):

```
yum install -y kernelcare
```

* For apt-based distributives (Debian, Ubuntu, etc):

```
apt-get install kernelcare
```

### Uninstalling


To uninstall KernelCare Enterprise, do the the following:

_For CloudLinux, CentOS, RHEL, Virtuozzo, OpenVZ:_

```
$ yum remove kernelcare
```

_For Ubuntu, Debian, Proxmox VE:_

```
apt-get remove kernelcare
```
```
dpkg --remove kernelcare
```

This will also unlink the system from its activation key (provided there is network connectivity to the CLN Portal). However, you'll need to remove the license from the CLN Portal manually if you don't plan to use the service anymore.


### Switching from Ksplice

To switch from Ksplice to KernelCare Enterprise, use the following script that uninstalls Ksplice and installs KernelCare Enterprise instead.

It will automatically detect and abort if the system is not 64-bit (as KernelCare Enterprise doesn't support it).

It will also detects when Ksplice module cannot be uninstalled and retries multiple times.

Download the script here: [https://patches.kernelcare.com/ksplice2kcare](https://patches.kernelcare.com/ksplice2kcare).

Run the command:

```
$ bash ksplice2kcare $KERNELCARE_KEY$
```

The key can be created/retrieved in KernelCare Enterprise Keys section of CLN.

If you want to use IP based licenses, run:

```
$ bash ksplice2kcare IP
```

You have to add IP license for that server, and it is just two letters: IP, not the actual IP.

By default the script will attempt 3 times to uninstall Ksplice, waiting 60 seconds in between. You can run it using `nohup` if you don't want to wait.

You can change that by editing the script and changing `RETRY` and `SLEEP` values.

The script will exit with exit code `0` and message _Done_ on success. Otherwise, it will produce exit code `-1`.

Complete log file can be found at `/var/log/ksplice2kcare.log`.

#### Canonical Livepatch

KernelCare Enterprise is not compatible with Canonical Livepatch and should not be used on the same system.

### Basic management


To disable automatic updates, edit the file `/etc/sysconfig/kcare/kcare.conf`

```
AUTO_UPDATE=False 
```

To check the updated ('effective') version, run:

```
$ /usr/bin/kcarectl --uname 
```

We provide convenience script `/usr/bin/kcare-uname` that has same syntax as `uname`.

To see applied patches, run:

```
$ /usr/bin/kcarectl --patch-info 
```


### Command line tools


`/usr/bin/kcarectl` - Manage KernelCare Enterprise patches for your kernel.

`/usr/bin/kcare-uname` - Print certain system information.

#### kcarectl

| | |
|-|-|
|`-i, --info` | Display information about patches installed by KernelCare Enterprise.|
|`-u, --update ` | Download latest patches, and apply them to current kernel.|
|`--smart-update  [since 1.6] ` | The same as --update, but uses [UPDATE_POLICY](/live-patching-services/#config-options) to decide where to get patches.|
|`--unload` | Unload patches.|
|`--auto-update` | Check if update is needed and update.|
|`--patch-info` | Lists applied patches.|
| `--status` | Return a status of an update. Refer to the exit code: `0` - host is updated to latest patch level, `1` - there are no applied patches, `2` - there are new not applied patches, `3` - kernel is unsupported |
|`--force  [since 2.3] ` | When used with update, forces applying the patch even if unable to freeze some threads.|
|`--uname` | Prints safe kernel version.|
|`--license-info` | Output current license info.|
|`--register KEY` | Register using KernelCare Enterprise Key.|
|`--register-autoretry [since 2.5]` | If registration fails retries registration indefinitely.|
|`--unregister` | Unregister from KernelCare Enterprise for Key based servers.|
|`--userspace-update [PATCHES]` | Download latest patches and apply them to the corresponding userspace processes. Сan be set so that only certain types of patches are applied.|
|`--test` | Try test builds instead of production builds (deprecated, use --prefix=test instead).|
|`--prefix` | Patch source prefix, used to test different builds, by downloading builds from a different location, based on prefix (v2.2+)|
|`--version` | Print KernelCare Enterprise version.|
|`--import-key PATH` | Import gpg key.|
|`--set-monitoring-key` | Set monitoring key for IP based licenses. 16 to 32 characters, alphanumeric only [version 2.1+]|
|`--freezer  [since 2.3] ` | none: don't freeze any threads; full: freeze all threads; smart: freezes only threads that need to be frozen for patching. If option is not selected, best freezer method is chosen automatically.|
|`--check [since 2.4-1]` | Check if new patchset is available, without updating. Exit code 0 means there is a new kernel. 1 when there is no new kernel.|
|`--doctor [since 2.6]` | Send a report to the TuxCare support staff for diagnostics.|
|`--set-patch-type extra ` | To enable extra patches.|
|`--set-patch-type free` | To enable free patches.|
|`--set-sticky-patch SET_STICKY_PATCH` | Set patch to stick to date in format DDMMYY or retrieve it from KEY if set to KEY (no support for ePortal). Empty to unstick. More info at [Sticky Patches](/live-patching-services/#sticky-patches).|
|`--tag COMMAND` | Adds an extra _Tag_ field for a server. COMMAND is a user-defined parameter.|

:::tip Note
Currenlty available userspace patch types are `libs` and `qemu`. To apply patches only for shared libraries, use `--userspace-update libs`.
:::

#### kcare-uname


Print certain system information.  With no OPTION, same as `-s`.

| | |
|-|-|
|`-a, --all` | print all information in the following order, except omit `-p` and `-i` if unknown|
|`-s, --kernel-name` | print the kernel name|
|`-n, --nodename` | print the network node hostname|
|`-r, --kernel-release` | print the kernel release|
|`-v, --kernel-version` | print the kernel version|
|`-m, --machine` | print the machine hardware name|
|`-p, --processor` | print the processor type or `unknown`|
|`-i, --hardware-platform` | print the hardware platform or `unknown`|
|`-o, --operating-system` | print the operating system|
|`--help` | display this help and exit|
|`--version` | output version information and exit|


#### kernelcare doctor

This tool collects essential information about the KernelCare environment and sends it to the support team.

```
# kcarectl --doctor
Generating report...
Uploading...
Key: FRWf74Zw11111111.83991334-1111-1111-1111-681ddd653e5f
Please, provide above mentioned key to KernelCare Support Team

```

The command generates a report and prints out the ID which could be linked to a support ticket.

:::tip Note
If there was some connection problem during report uploading, the report will be stored locally as `/root/cl-report`. This file should be sent to the support team manually.
:::

### Config options


A `kcarectl` behavior can be configured using `/etc/sysconfig/kcare/kcare.conf`

| | |
|-|-|
|`AUTO_UPDATE=YES|NO` | `YES` - enable auto-update; `NO` - disable auto-update.|
|`chkconfig kcare off` | Disable auto-update after restart.|
|`PATCH_METHOD=normal|nofreeze|smart` | `Normal` - (default) use freezer;<br>`Nofreeze` - don't use freezer to freeze processes;<br> `Smart` - smart freezer freezes only threads that need to be frozen for patching [kernelcare 2.3+].|
|`PATCH_SERVER` | Server to use to download patches.|
|`REGISTRATION_URL` | Licensing server.|
|`PREFIX=prefix` | Patch source prefix, used to test different builds, by downloading builds from a different location, based on prefix (v2.2+)|
|`UPDATE_POLICY=REMOTE|LOCAL|LOCAL_FIRST [since 1.6] ` | Depending on the policy, on server startup, use:<br>`REMOTE` - (default) patches from patch server.<br>`LOCAL` - only locally cached patches, if none cached (caching is done automatically) - do nothing.<br>`LOCAL_FIRST` - see if locally cached patches exist, and load them. If not, try getting them from remote server.|
|`IGNORE_UNKNOWN_KERNEL=True|False` `[since 2.5-4]` | Don't provide notification if unknown kernel on auto-update.|
|`LOAD_KCARE_SYSCTL [since 2.7-1]` | Controls if `/etc/sysconfig/kcare/sysctl.conf` will be loaded on patchset load. True by default.|
|`--set-patch-type extra` | To enable extra patches.|
|`--set-patch-type free` | To enable free patches.|
|`STICKY_PATCH=KEY` | Retrieve sticky patch from `KEY` (see CLN, Key Edit); not supported for IP based servers or ePortal.|
|`STICKY_PATCH=DDMMYY` | Stick patch to a particular date. More info at [Sticky Patches](/live-patching-services/#sticky-patches).|
|`REPORT_FQDN=True|False` | Force using Fully Qualified Domain as a hostname. False by default.|
|`FORCE_GID=N`|Use this group ID for symlink protection patch. By default, it's 48 (default Apache user GID) or 99 (`nobody` user)|
|`USERSPACE_PATCHES=libs,qemu`| Define which userspace patches will be applyed by default|


### Disabling some patches

Some patches might affect the work of the system, and we created a way to disable them.

This is done via the `sysctl` command.

When new patchset loads, KernelCare Enterprise sysctl options get reset. To prevent that we added a file:

`/etc/sysconfig/kcare/sysctl.conf`

Options in this file will be loaded automatically on new patchset load.

To disable loading this options, specify:

`LOAD_KCARE_SYSCTL=0` in `/etc/sysconfig/kcare/kcare.conf`

To disable the patch, set the corresponding kcare option to `1`.

Patches that can be disabled:

| | |
|-|-|
|Patch |  _sysctl_ option|
|CVE-2015-5157 | kcare_modify_ldt|


# Extra patchset

::: tip Note
KernelCare Enterprise 2.12-5 or higher
:::

KernelCare Enterprise Extra patchset includes all the security fixes from KernelCare Enterprise for AlmaLinux, CentOS 6, CentOS 7, and CentOS 8 as well as symlink protection and IPSet bugfix for CentOS 6.

To enable extra patches and apply patch, run:

```
kcarectl --set-patch-type extra --update
```

To enable extra patches without update, run:

```
kcarectl --set-patch-type extra
```

The ‘extra’ patch will be applied on the next automatic update.

To see details, run:

```
kcarectl --patch-info
```

You should see something similar to:

```
OS: centos6
kernel: kernel-2.6.32-696.6.3.el6
time: 2017-07-31 22:46:22
uname: 2.6.32-696.6.3.el6
 
kpatch-name: 2.6.32/symlink-protection.patch
kpatch-description: symlink protection // If you see this patch, it mean that you can enable symlink protection.
kpatch-kernel: kernel-2.6.32-279.2.1.el6
kpatch-cve: N/A
kpatch-cvss: N/A
kpatch-cve-url: N/A
kpatch-patch-url: https://gerrit.cloudlinux.com/#/c/16508/
 
kpatch-name: 2.6.32/symlink-protection.kpatch-1.patch
kpatch-description: symlink protection (kpatch adaptation)
kpatch-kernel: kernel-2.6.32-279.2.1.el6
kpatch-cve: N/A
kpatch-cvss: N/A
kpatch-cve-url: N/A
kpatch-patch-url: https://gerrit.cloudlinux.com/#/c/16508/
 
kpatch-name: 2.6.32/ipset-fix-list-shrinking.patch
kpatch-description: fix ipset list shrinking for no reason
kpatch-kernel: N/A
kpatch-cve: N/A
kpatch-cvss: N/A
kpatch-cve-url: N/A
kpatch-patch-url: https://bugs.centos.org/view.php?id=13499
```
To enable Symlink Owner Match Protection, add the following line:

`fs.enforce_symlinksifowner=1`

to `/etc/sysconfig/kcare/sysctl.conf`.

And run:

```
sysctl -w fs.enforce_symlinksifowner=1
```


### Sticky patches

:::tip Note
This functionality is not available for ePortal customers. If you are using ePortal, please use [Feeds](/eportal/#feed-management) instead.
:::

Sometimes you don't want to use the latest patches, but you'd like to control which patches are get installed instead. For example, you have tested the patch released on 25th of May 2018 and want to use that patch across all servers.

You can do it by setting `STICKY_PATCH=250518` (ddmmyy format) in `/etc/sysconfig/kcare/kcare.conf`
This guarantees that when `kcarectl --update` or `kcarectl --auto-update` is called, you will get patches from that date and not the newest patches.

With `STICKY_PATCH` you can go back as far as 60 days.

Alternatively, you can set `STICKY_PATCH=KEY`
This way you can control the date from which patches will be applied using KernelCare keys in CLN.
On update, the actual date will be retrieved from CLN (from Key settings) for the key used to register a particular server (not supported for IP based servers).

This is very useful if you want to test patches in QA first and later roll them out to production without doing any changes on the systems.

Here is how you can do that:

* Set `STICKY_PATCH=KEY` on all your servers.
* Register QA servers with one KEY, and Production servers with ANOTHER key.
* Then, stop new updates for Production servers. In CLN set `Sticky Tag` to `yesterday`. You can do it by editing KEY in CLN in DDMMYY format.
* Now, for example, let's use patches as of 03052018 (DDMMYY format). Set them for your QA server key. On the next auto-update, your QA servers will get those patches (auto-updates are typically every 4 hours).

Once you are happy with this patches, set the same Sticky Tag for Production servers key. In 4 hours your production servers should be updated to the same patches that QA servers were.

:::tip Note
You can choose any date within the last 60 days. You cannot choose today's date or date in the future.
:::


#### How to find a proper sticky patch name

Let's assume that you have some kernel patch that you want to "stick" with. All you need is to find a proper label for that patch.

![sticky-proper-label](/images/sticky-proper-label.png)

As you can see, the patch was released at 2020-09-16. And if apply label's date format, it becomes `16092020` that will be the sticky patch value.


### Scanning for vulnerabilities

Identifying the vulnerabilities that apply to your systems is an important task for IT and InfoSec teams, and at TuxCare we make it easy. KernelCare live patching is integrated natively with  vulnerability scanners including Tenable Nessus, Qualys, Rapid7 and many others.

:::tip Note
A generic integration that works with any vulnerability scanner is available for environments that native integration may not be sufficient. Contact your account manager or [sales@tuxcare.com](mailto:sales@tuxcare.com) for more information.
:::

#### How to use a vulnerability scanner with KernelCare

It’s rather simple. New scan results after installing a package and applying a patchset should not show any kernel CVEs that are handled by KernelCare Enterprise.

For example, Nessus for an old kernel shows a bunch of detected CVEs:

![](/images/scanner-manipulation-before.png)

After the live patches were applied, there are no kernel-related CVEs:

![](/images/scanner-manipulation-after.png)


#### How use OpenSCAP with KernelCare

OpenSCAP is an open source vulnerability scanner and compliance tool and it can be used to scan a system protected by KernelCare Enterprise. The following commands show how to use OpenSCAP to produce a vulnerability report for a system.

```
$ source /etc/os-release
$ wget https://patches.kernelcare.com/oval/com.kernelcare.${ID}.${VERSION_ID}.xml
$ oscap oval eval --report report.htm com.kernelcare.${ID}.${VERSION_ID}.xml
```

#### How to natively integrate KernelCare with a vulnerability scanner

:::tip Note
These instructions are intended for integrators with 3rd party vulnerability scanners. 
:::

There are two ways for a vulnerability scanner to integrate with KernelCare live patching.


#### Integrate via OVAL data

KernelCare comes with OVAL data that provide the instructions to the scanner to identify the vulnerabilities that are addressed by the installed live patches. OVAL data are available for the operating systems supported by KernelCare Enterprise, including AlmaLinux, Red Hat Enterprise Linux, Oracle Linux, CentOS, Debian and Ubuntu.

The OVAL data cover all KernelCare enterprise products and add-ons including LibCare, and QEMUCare.

The OVAL data for KernelCare live patching are available at [patches.kernelcare.com/oval](https://patches.kernelcare.com/oval/).


#### Integrate using files

KernelCare provides two files that list the vulnerabilities that are addressed by the currently installed live patches. These files contain a list of CVEs separated by a newline.

The list of vulnerabilities addressed by Kernel live patches is available at:

* `/proc/kcare/cvelist`

The list of vulnerabilities addressed by system live patching (LibCare, QEMUCare etc.) is available at:

* `/var/cache/kcare/libcare_cvelist`

### UEFI Secure Boot Support


:::tip Note
This feature is an early stage of adoption. Not all the distribution will be able to support. 
:::


This new functionality lets KernelCare work on systems with secure boot set up in their UEFI firmware. We are going to add a public certificate to the MOK (Machine Owner Keys) database that KernelCare will use to sign modules.

The latest KernelCare package contains a public certificate and will be available in the `/usr/libexec/kcare/kernelcare_pub.der`. For older versions, it could be downloaded from the [https://patches.kernelcare.com/kernelcare_pub.der](https://patches.kernelcare.com/kernelcare_pub.der) to that location.

For example:

``` bash
curl -o /usr/libexec/kcare/kernelcare_pub.der https://patches.kernelcare.com/kernelcare_pub.der

```


1. Use `mokutil` as root to add this new MOK to the UEFI firmware. 

```bash
$ mokutil --import /usr/libexec/kcare/kernelcare_pub.der
 input password:
 input password again:
```

It doesn't have a MOK password, and `mokutil` will ask you to create one. The password is temporary and will be used on the next boot. 

2. Reboot your machine to enter the MOK manager EFI utility.

  First, go down to the 'Enroll Mok': 

![alt text](/images/uefi-enroll-mok.png "Select Enroll MOK")

Then the firmware gives you the option of viewing the new MOK or continuing. Let's continue. 

![alt text](/images/uefi-continue.png "Select Continue")

It then asks you to confirm the enrollment.

![alt text](/images/uefi-yes.png "Select Yes")

Then you will need to enter the password you used when running `mokutil --import`. 

![alt text](/images/uefi-password.png "Enter the password")

Finally, the firmware will ask you to reboot. 

![alt text](/images/uefi-ok.png  "Select OK")

3. Verify the key has been loaded by finding it in the output of the following command:

``` bash
$ mokutil --list-enrolled | egrep -i 'SHA1|Issuer'

```

In some cases the enrolled key will not be shown but could be verified by the following command:

```bash
$ dmesg | grep -i 'cloud linux' 
[   0.722149] EFI: Loaded cert 'Cloud Linux Software, Inc: Kernel Module Signing Key: 12ff0613c0f80cfba3b2f8eba71ebc27c5a76170' linked to '.system_keyring'
```

That's it. Now you should be able to apply patches as usual.

To get more information about signing kernel modules for secure boot, see
[https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/signing-kernel-modules-for-secure-boot_managing-monitoring-and-updating-the-kernel](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/signing-kernel-modules-for-secure-boot_managing-monitoring-and-updating-the-kernel).

### Live patching and FIPS compliance

The FIPS-140 certification of a Linux kernel validates that the cryptography contained within a Linux kernel complies with the US government FIPS-140 data protection standard. Meaning that algorithms like AES, the random generator and other cryptographic aspects of the kernel are implemented as the standard defines.

At the same time the certification is a lengthy process –a typical validation can take almost a year– and for that reason only some of each vendor’s kernels are validated. That is because vendors release new kernels with security and feature updates on a regular cadence some as often as weekly, irrespective of their FIPS validation status. This means users of FIPS validated kernels need to choose between: (a) strict compliance by staying on the same kernel without updating until the next validated kernel is available and (b) reducing their security risk by installing new kernels with security updates even if they are not validated. The same story applies to the vendor’s live patching solutions.

With KernelCare Enterprise it is possible to live patch FIPS-140 validated Linux kernels, for example at the Red Hat Enterprise Linux operating system. The live patches applied to these kernels, in this example, consist of the same RHEL kernel patches but are limited to the ones addressing security vulnerabilities. That way, a live patched kernel contains the same security fixes as a vendor update without any feature or bug-fix updates, e.g., updates that may change the cryptographic subsystem for performance or other non-security related reasons. 

**In this way, security-conscious users of FIPS-validated Linux kernels that today apply their vendor's security patches can rely on KernelCare live patching the same way they do with their vendor's security updates**. Furthermore, KernelCare live patching applies the minimum possible updates to the validated kernel by explicitly excluding any non-security updates.


### Firewall and Proxy Settings


#### Patching servers through firewall
 
As long as your servers have access to the Internet, even behind NAT —  you will be able to use KernelCare patch server without any problems.

Generally, KernelCare requires connection to only two servers for a proper work:

```
cln.cloudlinux.com
patches.kernelcare.com
```

An additional address is used for KernelCare agent installation/update:

```
repo.cloudlinux.com
```

![](/images/patchingthroughfirewall.png)

#### Patching servers through proxy

 
If your servers don't have direct Internet access but can gain access to the Internet using proxy, the configuration is not that different. KernelCare can pick up standard environment variables for a proxy.

Make sure you have environment settings for proxy setup, and everything else will be the same as if servers were directly connected to the Internet:

```
# export http_proxy=http://proxy.domain.com:port
# export https_proxy=http://proxy.domain.com:port
```

:::tip Note
Settings defined by `export` are case-insensitive, so the example above could be as follows:
:::

```
# export HTTP_PROXY=http://proxy.domain.com:port
# export HTTPS_PROXY=http://proxy.domain.com:port
```

You can define these settings in the KernelCare config `/etc/sysconfig/kcare/kcare.conf`.

Example: 

```
$ cat /etc/sysconfig/kcare/kcare.conf
AUTO_UPDATE=True
HTTPS_PROXY=http://myproxy.com:59794
```

If you define these settings in the config, you don't need to export them each `kcarectl` launch and don't need to edit cron jobs.

All `kcarectl` launches will be aware of proxy settings from the config. In this case, you need to set proxy settings only once. 

![](/images/patchingthroughproxy.png)


### KernelCare on AWS – Deployment User Guide


#### Introductory Material

#### Introduction

The Linux kernel is the most important piece of software on your server, as a security flaw in it can expose all of your services and customers' data. KernelCare is a technology that allows you to keep the Linux kernel safe at all times, automatically, without ever having to stop the server and rebooting it causing downtime and inconvenient scheduling of maintenance windows. This improves availability, security, stability, operation costs, and customer satisfaction. It works with almost all mainstream distributions of Linux. It is simple, fast, and very easy to deploy while being able to handle very complex patches and customized kernels if you need them.

#### Prerequisites and Requirements

KernelCare can be installed on any x86_64 compatible server or VM running one of the following distribution:
* Amazon Linux 1, 2
* CentOS 6, 7, Xen4CentOS, CentOS-Plus, ElRepo
* CloudLinux 6, 7
* Debian 7, 8, 9, 8-backports
* Oracle Linux 6, 7
* ProxmoxVE 3,4,5
* RedHat EL 6, 7
* Ubuntu 14.04, 16.04, 18.04
* Virtuozzo 6

The exact list of compatible kernels can be found on the following link: [https://patches.kernelcare.com/](https://patches.kernelcare.com/).

Standard OS kernels are required in most cases unless the custom kernel is supported.

The software can be installed on the running server and doesn't require a reboot.

Basic Linux skills are sufficient to deploy KernelCare on AWS. Simple deployments involve just an EC2 instance. KernelCare is available as BYOL model. You need to register in our [customer portal](https://cln.cloudlinux.com) to get the trial license. Once you get the trial license, you need to register your running EC2 instance with the activation key.


#### Architecture Diagrams

As long as your servers have access to the Internet, even behind NAT – you will be able to use KernelCare patch server without any problems.

Generally, KernelCare requires HTTPS connection to two servers for the proper work:

* cln.cloudlinux.com
* patches.kernelcare.com


![](/images/AWS_arch2.png)

If your servers don't have direct Internet access but can gain access to the Internet using proxy, the configuration is not that different. KernelCare can pick up standard environment variables for proxy.

![](/images/AWS_proxy_arch2.png)

Make sure you have environment settings for proxy setup, and everything else will be the same as if the servers were directly connected to the Internet:

```
# export http_proxy=http://proxy.domain.com:port
# export https_proxy=http://proxy.domain.com:port
```

#### Planning Guidance

#### Security

The only thing you need to be able to install/control you KernelCare deployment is SSH access (root credentials, key-based authentication/sudo or similar mechanisms are preferred).

#### Costs

KernelCare is billed as a subscription service – you can find more details in the table below.

| **License Volume** | **Monthly Price** | **Annual Price** |
| ----------- | ----------- | ----------- |
| 1      | $3.95       | $45       |
| 2-49   | $2.95       | $33       |
| 50-499 | $2.55       | $28       |
| 500+   | $2.25       | $25       |

#### Sizing

KernelCare agent has a tiny RAM footprint – binary patches usually require less than 1 MB.

#### Deployment Guidance

#### Deployment Assets

To install KernelCare, run:

```
curl -s -L https://kernelcare.com/installer | bash
```

or:

```
wget -qq -O - https://kernelcare.com/installer | bash
```
If you are using IP-based license, nothing else required to be done.
If you are using key-based license, run:

```
$ /usr/bin/kcarectl --register KEY
```

`KEY` is the registration key code string provided when you sign up for purchase or trial of the product.

You can easily automate KernelCare deployment with Ansible, Puppet, Chef or other automation tools. 
Here are the steps that may be automated:

1. Distribute KernelCare agent package (optional – required only for servers with no access to the Internet) and a KernelCare agent configuration file (`/etc/sysconfig/kcare/kcare.conf`).
2. Set required environmental variables (optional).
3. Install KernelCare agent from either locally available package or central KernelCare download location.
4. Register KernelCare with either license key or IP-based license.

#### Operational Guidance

#### Health Check

Systems protected by KernelCare can be monitored by means of CloudLinux Network (CLN) portal available at [https://cln.cloudlinux.com](https://cln.cloudlinux.com). Registered KernelCare installations are grouped by license keys. Kernels that are marked with exclamation sign in <span style="color:#E76930">amber</span> do not have the latest patches installed.

![](/images/KC-Ent-monit.png)

In either case, you can check whether the latest available patch has been applied by running the following command on a system protected by KernelCare:

```
$ /usr/bin/kcarectl --check
```
#### Backup and Recovery

There is no reason to backup KernelCare. KernelCare doesn't store any data. You can always re-install and re-register KernelCare.
To backup the configuration file of KernelCare if you have modified it, backup the `/etc/sysconfig/kcare/` folder.

#### Routine Maintenance

KernelCare is packaged in RPM/DEB packages (depending on Linux distribution) and will update any time system packages are updated. No additional maintenance is needed.

#### Emergency Maintenance

If one of your instances degraded, once you start another instance based on EBS or snapshot – KernelCare will continue working as before, no additional work is needed.
If you set up a new server instead, re-register KernelCare on the new server.
If you decide to uninstall patches, run command:

```
# kcarectl --unload
```

or complete remove *kernelcare* package by running the following command:

* on RPM-based systems
    ```
    # rpm -e kernelcare
    ```
or
*  on DEB-based systems
    ```
    # dpkg --remove kernelcare
    ```
#### Patch Feed Advanced Options

##### **Test and Delayed Feeds**

KernelCare Patch Server has several patch feeds available in addition to the standard (production) feed:
* **Test feed** – the newest patches (test builds) that have not undergone the complete testing process. Test feed makes it possible to start testing new patches earlier.
* **Delayed feeds** – instructs KernelCare to skip loading patches that were released within the last 12/24/48 hours.

The alternate feed option is enabled by setting `PREFIX` variable in `/etc/sysconfig/kcare/kcare.conf` to one of `test`/`12h`/`24h`/`48h`.

##### **Feed Management With Sticky Patch Feature**

The best way to handle QA and Production environments is to use Sticky tag feature of KernelCare license keys issued from CloudLinux Network (CLN) portal. 
To use this tag, go to CLN portal → KernelCare tab → click on the target key → Edit Key Info window.

![](/images/KC-Ent-list.png)

![](/images/KC-Ent-edit.png)

You should provide a separate key for each environment and set them to a particular sticky tag which is actually the date to which all the servers in an environment have to be patched.

![](/images/KC-Ent-sticky.png)

The date in Sticky tag field can be any date from May 28, 2018 up to one day before today.

To use Sticky tag feature on the servers to be patched, run:

```
$ /usr/bin/kcarectl --set-sticky-patch=KEY
```

Alternatively, you can do the same by adding `STICKY_PATCH=KEY` to the `/etc/sysconfig/kcare/kcare.conf` file.
  
:::tip Warning
**Do Not** replace the `KEY` word with the actual KernelCare license key used to register the server.
:::

When the Sticky tag feature is enabled for particular servers, all such servers will get patches only released before the date specified in the Sticky tag field.

This way, you can add new patches to all the servers in some environment (i.e. registered with the same KernelCare license key) by updating only a single field in the CLN portal.

#### Support

We offer unlimited, 24x7x365 support. [Submit a request](https://cloudlinux.zendesk.com/hc/requests/new) or email us at [support@cloudlinux.com](mailto:support@cloudlinux.com).
* We answer all support questions within one business day and most within a couple of hours
To expedite the support, run the following command on your server (as root user):
```
# kcarectl --doctor
```
 Then paste the generated key into the support request.

#### Support Costs

Your KernelCare subscription includes free 24/7 support.

#### Accessibility

#### Reference Materials

* KernelCare website: [https://www.kernelcare.com](https://www.kernelcare.com)
* KernelCare Blog: [https://www.kernelcare.com/blog/](https://www.kernelcare.com/blog/)
* KernelCare Patch Server: [https://patches.kernelcare.com](https://patches.kernelcare.com)
* KernelCare documentation: [https://docs.kernelcare.com/](https://docs.kernelcare.com/)
* CloudLinux Network – CLN (Billing Portal): [https://cln.cloudlinux.com](https://cln.cloudlinux.com)
* CloudLinux 24/7 online support system: [https://tuxcare.zendesk.com](https://tuxcare.zendesk.com)
  
#### Localization

KernelCare is available in the English language only.



### Reseller Partner UI


Once you have got the reseller partner access, in IP Reseller Partner UI you can view and manage IP licenses, billing options, profile details. Here you can track your money balance, licenses count and licenses prices as well as using IP address search to find customers. You can find more information about KernelCare licensing [here](https://www.kernelcare.com/pricing/).


#### Server Section

As soon as you have added funds (See **Billing Info/Add Funds** below) to your account you can immediately add new licenses for clients. To add IP KernelCare license:

1. Enter IP address in **Add IP License** field, choose license type in pull-down menu (KernelCare) and click **Add license**.

![](/images/reseller001.jpg)

2. To delete license click **Delete** in front of the needed IP address.

3. To add KernelCare Key license go to **KernelCare Keys** tab, enter the number of servers allowed for the license in **Max Servers**, add description if needed and click **Add** . The key will be generated and appear in the list below.

In the **Operations List** you are able to edit or delete the key.

![](/images/reseller007_zoom96.png)

#### Billing Info/Add Funds

To add funds:

1. Click **Add Funds** near your balance or go to **Billing Info/Add Funds** on the top of the starting page of your account.

2. Click **Add** to add credit card details, then enter funds amount and click **TopUp** or **Process to Checkout** to pay via PayPal.


![](/images/reseller002.jpg)

While adding credit card details, you can also choose **Auto add funds** option - the funds amount you choose in pull down menu will be automatically added when your balance is below $100.

If you choose **Auto repay**, your card will be automatically charged when your balance becomes negative. Minimal charge is $20 (E.g. for balance -$15 - you'll be charged at $20, for balance -$134.2 - you'll be charged at $134.2).


![](/images/reseller003.jpg)

:::tip Note
If your balance is shown as negative, it means that you have to deposit more funds.
:::

#### API Section

CloudLinux and KernelCare IP licenses adding and removing is compatible with different hosting and domain management and billing systems and platforms. You can find comprehensive information on all possible CloudLinux modules and plug-ins APIs in API Section.

![](/images/reseller004.jpg)

#### Profile

You can edit your profile information by clicking on **Profile** section. Edit the necessary info and click **Update Account**.

![](/images/reseller5.jpg)
![](/images/reseller006.jpg)


### How To

#### How to disable HyperThreading (SMT) without reboot: KernelCare case

This article explains how to disable or enable SMT (Simultaneous multithreading) without rebooting using KernelCare, to help mitigate the recent MDS/Zombieload vulnerability.

Disabling CPU simultaneous multithreading (SMT) is one of the mitigations needed to counter the recent MDS vulnerability (also known as ‘Zombieload’). There is a performance impact that depends on the configuration of the hosting platform and its workload patterns. You should also consider the impact of other mitigation strategies, such as assigning dedicated cores to guests (e.g. VMs).

You can control and get the status of SMT with the kernel’s `sysfs` interface. There are two files, both in the `/sys/devices/system/cpu/smt` directory:

* `control`
* `active`


If you cannot find the `/sys/devices/system/cpu/smt` directory, this means your running kernel does not support SMT. In this case, you need to apply KernelCare patches so the SMT controls become available to your system. Use the `kcarectrl` command:

```
kcarectl --update
Kernel is safe
```

```
ls -l /sys/devices/system/cpu/smt
-r--r--r-- 1 root root 4096 May 17 13:06 active
-rw-r--r-- 1 root root 4096 May 17 13:06 control
```

As soon as you have these files in place, it is possible to proceed with disabling SMT.


<iframe width="560" height="315" src="https://www.youtube.com/embed/RUGCvEO1hAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### SMT Control

`/sys/devices/system/cpu/smt/control`

This file lets you enable or disable SMT, and shows its state. There are three values:

1. `on`: The CPU supports SMT and it is enabled. All logical CPUs can be taken offline or online without restriction.
2. `off`: The CPU supports SMT but it is disabled. Only so-called primary SMT threads can be taken offline/online without restriction. Attempts to put a non-primary sibling thread online will be rejected.
3. `notsupported`: The CPU does not support SMT. You will not be able to write to the control file.

#### SMT Status

`/sys/devices/system/cpu/smt/active`

The contents of this file show the status of SMT (e.g. if two or more sibling threads are active on the same physical core the contents of this file is 1, if not: 0).

Here are some commands to control SMT support (root permissions are required):

#### Check the SMT state

```
cat /sys/devices/system/cpu/smt/active
```

#### Enable SMT

```
echo on > /sys/devices/system/cpu/smt/control
```

#### Disable SMT

```
echo off > /sys/devices/system/cpu/smt/control
```

Disabling SMT, [updating microcode](/how-to/#how-to-update-microcode-without-reboot-with-vendor-provided-package), and applying KernelCare patches will protect your systems against the ZombieLoad vulnerability. Note, only the latter action is applicable to virtual systems (e.g. VMs, VPS and other cloud instance types).

#### How to update Microcode without reboot with vendor-provided package

This article shows how to update the microcode of Intel CPUs running Linux.

:::warning Warning
To avoid possible issues with Microcode updating, enable SMT before the update.
:::


::: tip Note
This article is subject to change and will be updated with instructions for other distributions.
:::


::: tip Notes
* These steps must be done as root.
* The examples shown are for Debian.
* If you have doubts your systems are fully protected against CPU- and kernel-related vulnerabilities, please [get in touch with us](mailto:sales@cloudlinux.com).
:::

#### Updating microcode on Ubuntu and Debian

1. Find the microcode package download link for your platform
   
    * Ubuntu: [https://usn.ubuntu.com/3977-1/](https://usn.ubuntu.com/3977-1/)
    * Debian: [https://packages.debian.org/search?keywords=intel-microcode](https://packages.debian.org/search?keywords=intel-microcode)
  
2. Download the package

:::tip Note
Example shown for Debian 9
:::

```
cd <a temporary directory, e.g. /tmp>
mkdir firmware
cd firmware
wget http://security.debian.org/debian-security/pool/updates/non-free/i/intel-microcode/intel-microcode_3.20190514.1~deb9u1_amd64.deb
```

3. Check the downloaded package

```
md5sum intel-microcode_3.20190514.1~deb9u1_amd64.deb
c7bc9728634137453e0f4821fb6bb436  intel-microcode_3.20190514.1~deb9u1_amd64.deb
```

A list of checksums is on [the Debian packages download page](https://packages.debian.org/stretch/amd64/intel-microcode/download).

4. Unpack the package

```
dpkg -x intel-microcode_3.20190514.1~deb9u1_amd64.deb
```

5. Check the unpacked files

```
ls -l
total 1896
drwxr-xr-x 5 root root   53 May 15 04:18 etc
-rw-r--r-- 1 root root 1940140 May 17 11:42 intel-microcode_3.20190514.1~deb9u1_amd64.deb
drwxr-xr-x 3 root root   22 May 15 04:18 lib
drwxr-xr-x 3 root root   19 May 15 04:18 usr
```
6. Create a backup of existing microcode:

```
test -d /lib/firmware/intel-ucode/ && mv /lib/firmware/intel-ucode/ /lib/firmware/intel-ucode.backup
```

7. Copy the new microcode and check it

```
cp -r lib/firmware/intel-ucode/ /lib/firmware/
ls -l /lib/firmware/ | grep intel-ucode
drwxr-xr-x  2 root root 4096 May 17 11:47 intel-ucode
drwxr-xr-x  2 root root 4096 May 16 20:54 intel-ucode.backup
```

8. Check the current microcode version

```
dmesg | grep microcode
[ 2.254717] microcode: sig=0x306a9, pf=0x10, revision=0x12
[ 2.254820] microcode: Microcode Update Driver: v2.01 <tigran@aivazian.fsnet.co.uk>, Peter Oruba
```

9. (Optional) Double check the current microcode versions (revisions per core)

```
cat /proc/cpuinfo | grep -e microcode
microcode : 0x12
microcode : 0x12
microcode : 0x12
microcode : 0x12
```

10. Check the microcode reload file exists

```
ls -l /sys/devices/system/cpu/microcode/reload
--w------- 1 root root 4096 May 17 11:54 /sys/devices/system/cpu/microcode/reload
```

11. Force the kernel to load the new microcode

```
echo 1 > /sys/devices/system/cpu/microcode/reload
```

12. Check the new microcode

```
dmesg | grep microcode
[ 2.254717] microcode: sig=0x306a9, pf=0x10, revision=0x12
[ 2.254820] microcode: Microcode Update Driver: v2.01 <tigran@aivazian.fsnet.co.uk>, Peter Oruba
[ 1483.494573] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.495985] microcode: updated to revision 0x21, date = 2019-02-13
[ 1483.496012] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.496698] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.497391] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
```

13. (Optional) Double check the new microcode version (revisions per core)

```
cat /proc/cpuinfo | grep -e microcode
microcode : 0x21
microcode : 0x21
microcode : 0x21
microcode : 0x21
```

#### Updating Microcode on Red Hat and CentOS

For RHEL-based distributions, you can use the `microcode_ctl utility` to update microcode.

1. Get the latest microcode by updating the `microcode_ctl` package

```
yum update microcode_ctl
```

2. Create a force file

Create a `force-late-intel–06–4f–01` inside the firmware directory.

```
touch /lib/firmware/`uname -r`/force-late-intel-06-4f-01
```

3. Run the microcode update

```
/usr/libexec/microcode_ctl/update_ucode
```

4. Force the kernel to load the new microcode

```
echo 1 > /sys/devices/system/cpu/microcode/reload
```

5. Check the new microcode

```
dmesg | grep microcode
[ 2.254717] microcode: sig=0x306a9, pf=0x10, revision=0x12
[ 2.254820] microcode: Microcode Update Driver: v2.01 <tigran@aivazian.fsnet.co.uk>, Peter Oruba
[ 1483.494573] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.495985] microcode: updated to revision 0x21, date = 2019-02-13
[ 1483.496012] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.496698] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
[ 1483.497391] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09
```

6. (Optional) Double check the new microcode version (revisions per core)

```
cat /proc/cpuinfo | grep -e microcode
microcode : 0x21
microcode : 0x21
microcode : 0x21
microcode : 0x21
```

#### Updating Microcode on CentOS 6

1. Get the latest microcode by updating the `microcode_ctl` package

```
yum update microcode_ctl
```

2. If `yum update microcode_ctl` outputs the following:

```   
Package(s) microcode_ctl available, but not installed.
No Packages marked for Update
```

you need to install the package manually.

3. To install `microcode_ctl` package, run the command:

```
yum install microcode_ctl
```

The command output:

```
Installed:
  microcode_ctl.x86_64 2:1.17-33.11.el6_10                                                                                                                                 

Complete!
```

4. Check CPU microcode version:

```
cat /proc/cpuinfo | grep microcode
microcode       : 9
microcode       : 9
microcode       : 9
microcode       : 9
```

5. Try to update microcode

```
microcode_ctl -u
```

If you see the output:

```
microcode_ctl: writing microcode (length: 2370560)
microcode_ctl: cannot open /dev/cpu/microcode for writing errno=2 (No such file or directory)
```

You need to load driver microcode.

6. Load driver microcode

```
modprobe microcode
```

7. Try to update microcode again:

```
microcode_ctl -u
```
If you see the output: 

```
microcode_ctl: writing microcode (length: 2370560)
microcode_ctl: microcode successfully written to /dev/cpu/microcode
```
then update is successful.

8. Check version:

```
cat /proc/cpuinfo | grep microcode
microcode       : 17
microcode       : 17
microcode       : 17
microcode       : 17
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/EydWy-b9uns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### Plesk related

#### How to get a KernelCare activation key from the extended Plesk license

Often our clients purchase KernelCare licenses through Plesk/Odin and in such cases, they get a universal key which includes the KernelCare license and other additional keys for Plesk plugins. Such a key has the following syntax – `A00B00-0CDE00-F0G000-HIGK00-LM0N00`, – and initially, it is installed through Plesk automatically and the license gets activated successfully.

However, if it is required to re-register the agent for some reason or simply get the KernelCare activation key separately, it would be impossible to apply the above-mentioned one – we would need to deal with the KernelCare service separately. 

To get the KernelCare activation key from the extended Plesk license key, you will need to proceed with the following.

1. Navigate to _Tools & Settings >> Plesk >> License Management >> Additional License Keys_

  ![](/images/LicenseManagement.png)

  ![](/images/AdditionalLicenseKeys.png)

2. Click _Download key_ next to the KernelCare license listed on the page and open the file downloaded in some text editor

3. Find the following abstract:

  ```
  <!--Key body-->
  <aps-3:key-body core:encoding="base64" core:type="binary">YOUR_BASE64_ENCODED_LICENSE_KEY==</aps-3:key-body>
  <!--Information about additional key-->
  ```

4. This is your base64-encoded key, and it should be decoded using a CLI utility or an online base64 decoder into UTF-8, e.g. [https://www.base64decode.org](https://www.base64decode.org). 
The new license key should have the following format: `xxxxxxxxxxxxxxxx`. It will contain lower and upper case letters and numbers.

5. Use the new key decoded to activate the service:

  ```
  /usr/bin/kcarectl --register DECODED_KEY_HERE
  ```

This is it!



## LibCare

LibCare enables security patching of critical userspace shared libraries in-memory without restarting or disrupting the applications using them. This is techinical  documentation describing the solution; for a high level summary see [LibCare's main web site](https://tuxcare.com/enterprise-live-patching-services/libcare/).

### Supported libraries and operating systems

LibCare provide security updates for the OpenSSL and glibc libraries on many operating systems.

### Supported operating systems

LibCare patching is available for many operating systems including CentOS, AlmaLinux, Oracle Linux, Debian and Ubuntu.

[Check compatibility with your operating system](https://patches.kernelcare.com/).

### Installation and upgrade

Userspace processes patching feature is available in the KernelCare package.

### Usage

To apply the available patches to all userspace processes, run the following command:

```
$ kcarectl --lib-update
```

To gather information about what processes were patched, run the following command:

```
$ kcarectl --lib-info
```

To gather information about applied patches, run the following command:

```
$ kcarectl --lib-patch-info
```

To unpatch all processes, run the following command:

```
$ kcarectl --lib-unload
```

#### Blacklisting

Applying a live patch may clash with software such as anti-viruses that detect or prevent memory updates. While the majority of software is compatible with live patching, for the software that may misbehave, LibCare comes with a default blacklist. The blacklist is located in the /var/lib/libcare/blacklist and contains the list of known applications that may misbehave when live patched. You can override those values by creating the file `/var/cache/kcare/userspace/blacklist`.

The format of the file is as follows. Patterns should be specified line by line prefixed with pattern type and a colon. Comment starts with dash (#). Example:

```
 # Symantec Antivirus
 path: /opt/Symantec/*
 filename:symcfgd
 filename:rtvscand
 filename:smcd
```

Specifying `path` means that the whole path to binary will be taken into account, while using `filename` allows to blacklist a process irrespective of the full path to binary.

Wildcards are also supported:

```
 filename:docker*
 path:/usr/libexec/docker/docker-*
```

Also a POSIX regular expressions could be used as follows:

```
 regex:/usr/bin/[[:alnum:]]+
```

#### Auto update

Userspace patching cron job is disabled by default. To enable it, run the following command:

```
libcare-cron init
```

### Usage in containers

LibCare supports containers natively, including docker, LXC and other containerization technologies. When run on the host it operates on all processes that are running, including processes present in containers. At the same time there are two ways to use LibCare with containers and each has its own advantages and disadvantages. Let's go through them.

#### Disposable container servers

Disposable container servers are services that are run within a container for limited time and are refreshed periodically, e.g., daily to get the latest security updates. The recommended way to run LibCare with disposable containers is by installing `kernelcare` on the host, and it will automatically patch all processes libraries in the containers.

#### Persistent container servers

Persistent container servers are services that are run in containers the same way as a traditional physical server, i.e., the LXC approach. Although LibCare can run the same way as with disposable containers, it is also possible to install `kernelcare` within each container and that will enable live patching of the processes of each container individually. That approach enables accurate patching information within each containerized server that can be used by the available vulnerability scanner. When using this approach userspace patching must be disabled on the host using `kcarectl --disable-libcare`.


### Troubleshooting

#### Auditd logs

The LibCare tools heavily use a `ptrace` syscall and, in case of `auditd` trace it's calls, there will be a lot of records in a log. There is a rule that provided by kernelcare package and located here: `/etc/audit/rules.d/kernelcare.rules`. It will exclue kernelcare processes from audit.

**Note**: no such rule is provided for `el6` due to old `autditd` restrictions. There is a command that will add such rule in runtime:

```
auditctl -l | grep kcare | cut -d' ' -f2- | xargs -t -L1 -r auditctl -d && pgrep libcare-server | xargs -t -n1 -i auditctl -A exit,never -F arch=b64 -S ptrace -F pid="{}" -k kcarever | xargs -t -n1 -i auditctl -A exit,never -F arch=b64 -S ptrace -F pid="{}" -k kcare
```

It removes all currently enabled KernelCare rules and adds a new one by LibCare's process ID.


### Unpatched Library Detector (UChecker)

#### Description

UChecker is a scanner that checks network Linux servers and detects out-of-date libraries both on disk and in memory. KernelCare’s open-source scanner will find false negatives by correctly reporting vulnerable libraries running in memory that could be reported as updated by other scanners.

The UChecker (originated from "userspace checker") works with all modern Linux Distributions, it is free and open-source, distributed under the GNU General Public License.

#### How UChecker works

This activity diagram shows how UChecker works:

![](/images/uchecker.jpg)

#### Usage

To scan your systems, run the following command:

```
$ curl -s -L https://kernelcare.com/uchecker | sudo python
```

You will receive the following output:

```
[*] Process httpd[15516] linked to the `libc-2.17.so` that is not up to date.

You may want to update libraries above and restart corresponding processes.

KernelCare+ allows to resolve such issues with no process downtime. To find 
out more, please, visit https://lp.kernelcare.com/kernelcare-early-access?
```

The following information is available in the output:

* Process ID
* Process Name


#### Troubleshooting

To verbose output, you can choose a logging level: `ERROR`, `WARNING`, `INFO`, and `DEBUG`.

For example:

```
$ curl -s -L https://kernelcare.com/uchecker | sudo LOGLEVEL=debug python
```

To learn more, visit the [UChecker Github page](https://github.com/cloudlinux/kcare-uchecker).

## QEMUCare

QEMUCare – virtualization patching for cloud providers, VPS hosters, or any other company with QEMU based virtualization systems. It keeps infrastructure patched without disrupting virtual tenants’ systems.

### How QEMUCare works

* An agent is installed on each virtualization host which installs patches directly from the QEMUCare repository.
* In an ePortal environment, your Virtualization Hosts communicate with the QEMUCare ePortal server that acts as an intermediary.

### QEMU PatchSet Deployment

Starting from version 1.25, ePortal supports the QEMU patchset management. It
is accessible from the `Patches / QEMUcare` navigation item. QEMU patches
use the same Patch Source credentials, and you don't need to perform additional
configuration.

![](/images/eportal-qemu-feed.png)

User interface for the QEMU patch management is the same as for KernelCare patches, and you
can refer the [PatchSet Deployment](https://docs.tuxcare.com/eportal/#patchset-deployment) documentation.

#### CLI to install the latest patchsets

To update the default feed, run the following command:

```
kc.eportal qemu update
```

To update the `test` feed, run the following command:

```
kc.eportal qemu update --feed test
```

To update all auto-feeds, run the following command:

```
kc.eportal qemu auto-update
```

#### CLI to deploy patchset from archive

```
~$ kc.eportal qemu deploy --help
usage: kc.eportal qemu deploy [-h] [--feed FEED] [--disabled] archive

positional arguments:
  archive      path to archive

optional arguments:
  -h, --help   show this help message and exit
  --feed FEED  feed to deploy archive to
  --disabled   do not enable patchset after deploy
```

For example:

```
kc.eportal qemu deploy --feed test /tmp/U20210818_01-qemu.tar.bz2
```

This command will deploy and enable the `U20210818_01-qemu` patchset in to the `test` feed.

