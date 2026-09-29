# Managing the ELS repository

This page provides instructions for updating packages and removing the Endless Lifecycle Support (ELS) repository.

## Updating packages

After the ELS repository is installed, you can apply security updates using your system's standard package manager.

<TableTabs label="Choose your system: ">

<template #RPM-based_(YUM)>

**Applies to:** Amazon Linux 2, CentOS 6, CentOS 7, CentOS 8, CentOS Stream 8, Oracle Linux 6, Oracle Linux 7, Red Hat Enterprise Linux 7, Red Hat Enterprise Linux 8

Update all packages:

```
yum update
```

Update a specific package (e.g., kernel):

```
yum update kernel*
```

</template>

<template #DEB-based_(APT)>

**Applies to:** Debian 10, Debian 11, Ubuntu 16.04, Ubuntu 18.04

Update the package index and upgrade all packages:

```
apt update && apt upgrade
```

</template>

<template #Alpine_Linux_3.18>

Update the package index and upgrade all packages:

```
apk update && apk upgrade
```

</template>

</TableTabs>

### Rollout process

For several platforms, TuxCare delivers security updates through staged rollout repositories. This process may take up to 14 additional days after a patch is published to stable repositories.

If you need to apply a fix immediately without waiting for the rollout to complete, you can use the bypass repository. The necessary instructions are always provided on the [release information page](https://tuxcare.com/cve-tracker/fixes/).

For example (packages in the 3rd rollout slot):

```
yum update kernel* --enablerepo=centos7els-rollout-3-bypass
```

## Staying informed about updates

TuxCare publishes vulnerability and fix information in the CVE Tracker. You can be
notified by email, or poll an RSS feed from a reader or a script.

### Email subscription

<ELSSteps>

1. Open the CVE Tracker

   Go to [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/) and select
   **Subscription** in the top bar.

   ![CVE Tracker top bar with the Subscription button highlighted](/images/subscription-step1.webp)

2. Fill in your details

   **Name** and **Work email** are required. **Company name** is optional.

   <img src="/images/subscription-step2.webp" alt="Subscribe to updates dialog with the About you fields and the Subscription Filters section below them" style="max-height: 460px" />

3. Choose what to follow

   Under **Subscription Filters**, select the products you run, then narrow them by
   **Component / Version** and by the **CVE Status** you want to hear about. Leaving a
   filter unset means every product and every status, which for a large estate is a lot
   of mail. Select **Add another product** for each further product you want to follow.

   <img src="/images/subscription-step3.webp" alt="Subscription Filters with the Product, Component / Version and CVE Status fields" style="max-height: 460px" />

4. Submit the form

   Tick the consent checkbox and select **Subscribe**. Consent covers processing your
   personal information and receiving TuxCare communications, including the monthly
   newsletter, under the TuxCare.com Privacy Policy.

   <img src="/images/subscription-step4.webp" alt="Subscribe to updates dialog with the consent checkbox and the Subscribe button highlighted" style="max-height: 460px" />

</ELSSteps>

To change or cancel a subscription, use the **Unsubscribe** section on the same page:
enter the address you subscribed with and TuxCare sends a link for managing your
preferences. The same link is used to edit filters — there is no separate form.

### RSS

If you would rather pull the information than receive mail, the CVE Tracker also publishes
RSS. The CVEs, Fixes and Products views each offer an RSS export alongside CSV and JSON,
and the feed keeps whatever filters you set on screen — so set the filters for the products
you run, copy the export address, and follow it from a feed reader or a script.

## Removing the ELS repository

<TableTabs label="Choose your system: ">

<template #RPM-based_(YUM)>

**Applies to:** Amazon Linux 2, CentOS 6, CentOS 7, CentOS 8, CentOS Stream 8, Oracle Linux 6, Oracle Linux 7, Red Hat Enterprise Linux 7, Red Hat Enterprise Linux 8

**For Amazon Linux 2 and Red Hat Enterprise Linux 8**, the repository can be removed by running the installation script with the `--delete` flag. For example:

```
sh install-amazonlinux2-els-repo.sh --delete
```

**For other RPM-based systems:**

1. List the ELS repository file (ending with `-els.repo`) in the repository folder:

   ```
   ls -l /etc/yum.repos.d/*-els.repo
   ```

2. Remove the file to disable the ELS repository. For example, for CentOS 7:

   ```
   rm /etc/yum.repos.d/centos7-els.repo
   ```

3. Uninstall the `els-define` package:

   ```
   yum remove els-define
   ```

</template>

<template #DEB-based_(APT)>

**Applies to:** Debian 10, Debian 11, Ubuntu 16.04, Ubuntu 18.04, Ubuntu 20.04

**For Debian 10 / 11**, the repository can be removed by running the installation script with the `--delete` flag:

<CodeTabs :tabs="[
   { title: 'Debian 10', content: `bash install-debian10-els-repo.sh --delete` },
   { title: 'Debian 11', content: `bash install-debian11-els-repo.sh --delete` }
]" />

**For Ubuntu 20.04**, the repository can be removed by running the installation script with the `--delete` flag:

```
bash install-ubuntu20.04-els-repo.sh --delete
```

**For Ubuntu 16.04 / 18.04:**

1. List the ELS repository file (ending with `-els.list`) in the repository folder:

   ```
   ls -l /etc/apt/sources.list.d/*-els.list
   ```

2. Remove the file to disable the ELS repository:

   ```
   rm /etc/apt/sources.list.d/ubuntu-els.list
   ```

3. Uninstall the `els-define` package:

   ```
   apt remove els-define
   ```

</template>

<template #Alpine_Linux_3.18>

1. Remove the ELS repository configuration:

   ```
   rm /etc/apk/repositories.d/*els*
   ```

2. Uninstall the `els-alpine-release` package:

   ```
   apk del els-alpine-release
   ```

</template>

</TableTabs>
