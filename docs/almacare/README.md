# AlmaCare

This AlmaCare Guide guide describes [AlmaCare](https://tuxcare.com/almacare) and how to set it up on your AlmaLinux system.

## What is AlmaCare?

AlmaCare brings essential support and a 16-year long lifecycle to your AlmaLinux systems. It comes with high value extensions that enable your cybersecurity compliance with rapid security updates and your compliance with the FIPS 140-3 standard.

Available extensions:
 * **Cybersecurity Extension**: Automated security updates for the kernel and critical userspace with zero reboots and zero downtime
 * **FIPS Compliance Extension**: Regular FIPS 140-3 re-certifications and security patches without impacting FIPS compliance (coming soon)

Learn more at [https://tuxcare.com/almacare](https://tuxcare.com/almacare)

## Requirements

* AlmaLinux 8 or AlmaLinux 9 operating system
* x86_64 or aarch64 architecture
* AlmaCare license key (should be obtained from [portal.tuxcare.com](https://portal.tuxcare.com))
* Internet access

## Installing AlmaCare

To install AlmaCare you need to install the `almacare-release` package first. This package contains the AlmaCare repo definitions, TuxCare GPG key and the `almacarectl` setup tool. Run the following as root:
```
# dnf install https://repo.tuxcare.com/almacare/almacare-release-latest-$(rpm --eval %almalinux).noarch.rpm
```
The second step is to activate your AlmaCare license on the system. You should run the `almacarectl` tool as root with your AlmaCare license key provided as a command line argument:
```
# almacarectl --license-key AC-XXXXXXXXXXXXXXXXXXXXXXXX
```
This tool will do the following:
1. Check your OS and architecture
2. Check your license key for validity and purchased extensions
3. Check if your system is already registered
4. Register to CloudLinux Network
5. Obtain a token to access the restricted AlmaCare repos
6. Enable the AlmaCare Updates repo
7. Switch the default AlmaLinux repos to use https://repo.tuxcare.com
8. Import the TuxCare GPG key

After installation you'll see the following message:
```
AlmaCare installed successfully
```
This means your system is registered and ready to receive updates from TuxCare.
:::warning
If during installation something goes wrong then the `almacarectl` tool will show an error message and suggest how to handle it. For example, if your system is already registered you'll receive the following message:
```
This server already has an AlmaCare token installed
To force re-registration, please run the script with --force
```
Then you will have to run `almacarectl` like this:
```
# almacarectl --license-key AC-XXXXXXXXXXXXXXXXXXXXXXXX --force
```
:::

## The AlmaCare Cybersecurity Extension

The AlmaCare Cybersecurity Extension brings rapid security patching for the kernel and critical userspace packages such as `glibc` and `openssl` using the [KernelCare live patching technology](https://tuxcare.com/enterprise-live-patching-services/kernelcare-enterprise/).

### Installation

The Cybersecurity extension is installed automatically based on the license key provided. Its license key starts with *ACCS-*. So if you provide such key during AlmaCare installation you see the following message:

```
Your license key includes the Cybersecurity extension. Setting up...
```

The following additional steps are automatically performed by the installer:
1. Download the KernelCare installer
2. Install and enable KernelCare on your system
3. Install a token for access to the live patching servers
4. Enable the AlmaCare Cybersecurity repo

:::warning
If you want to enable Cybersecurity extension on the system that already has a basic AlmaCare subscription, just run `almacarectl` with `--force`:
```
# almacarectl --license-key ACCS-XXXXXXXXXXXXXXXXXXXXXXXX --force
```
:::

#### Enabling rapid security updates for userspace components

To enable rapid security updates with live patching for critical userspace components such as `glibc` and `openssl` use the following commands to enable LibCare and periodic updates:
```
# kcarectl --enable-libcare
# libcare-cron init
```

### Using the AlmaCare Cybersecurity extension

After installation you can verify that your system has access to the KernelCare live patching by running:
```
# kcarectl -u
```
You should get message like below, and the system is now receiving kernel security updates as live patches.
```
Downloading updates
Patch level 1 applied. Effective kernel version 5.14.0-162.12.1.el9_1
Kernel is safe
```



