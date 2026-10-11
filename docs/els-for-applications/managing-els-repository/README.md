# Managing the ELS repository

This page provides instructions for upgrading to newer TuxCare-patched application versions in the Endless Lifecycle Support (ELS) repository.

## Upgrading to a newer TuxCare version

<ELSSteps>

1. **Log in to the Nexus repository**

   Log in to [nexus.repo.tuxcare.com](https://nexus.repo.tuxcare.com) using your credentials.

2. **Download the new version**

   Find and download the latest TuxCare version.

3. **Install the update**

   Follow the [installation instructions](/els-for-applications/) for your application.

4. **Verify and start using**

   Confirm the new version is installed correctly and run your application as usual.

</ELSSteps>

If you encounter any issues, please contact [TuxCare support](https://tuxcare.com/support-portal/).

## Staying informed about updates

TuxCare publishes vulnerability and fix information in the CVE Tracker. You can be notified by email, or poll an RSS feed from a reader or a script.

### Email subscription

<ELSSteps>

1. Open the CVE Tracker

   Go to [tuxcare.com/cve-tracker](https://tuxcare.com/cve-tracker/) and select **Subscription** in the top bar.

   ![CVE Tracker top bar with the Subscription button highlighted](/images/subscription-step1.webp)

2. Fill in your details

   **Name** and **Work email** are required. **Company name** is optional.

   <img src="/images/subscription-step2.webp" alt="Subscribe to updates dialog with the About you fields and the Subscription Filters section below them" style="max-height: 460px" />

3. Choose what to follow

   Under **Subscription Filters**, select the applications you run — they are listed under their own names, such as **Apache Tomcat** or **MariaDB** — then narrow them by **Component / Version** and by the **CVE Status** you want to hear about. Leaving a filter unset means every product and every status, which for a large estate is a lot of mail. Select **Add another product** for each further application you want to follow.

   <img src="/images/subscription-step3.webp" alt="Subscription Filters with the Product, Component / Version and CVE Status fields" style="max-height: 460px" />

4. Submit the form

   Tick the consent checkbox and select **Subscribe**. Consent covers processing your personal information and receiving TuxCare communications, including the monthly newsletter, under the TuxCare.com Privacy Policy.

   <img src="/images/subscription-step4.webp" alt="Subscribe to updates dialog with the consent checkbox and the Subscribe button highlighted" style="max-height: 460px" />

</ELSSteps>

To change or cancel a subscription, use the **Unsubscribe** section on the same page: enter the address you subscribed with and TuxCare sends a link for managing your preferences. The same link is used to edit filters — there is no separate form.

### RSS

If you would rather pull the information than receive mail, the CVE Tracker also publishes RSS. The CVEs, Fixes and Products views each offer an RSS export alongside CSV and JSON, and the feed keeps whatever filters you set on screen — so set the filters for the applications you run, copy the export address, and follow it from a feed reader or a script.

## Removing the ELS repository

The ELS repository is removed by running the installation script with the `--delete` flag.

<TableTabs label="Choose the application: " :labels="{ MariaDB: 'MariaDB', MySQL: 'MySQL', Percona_Server: 'Percona Server', PostgreSQL: 'PostgreSQL' }">

<template #MariaDB>

```text
sh install-mariadb-els-repo.sh --delete
```

</template>

<template #MySQL>

```text
sh install-mysql-els-repo.sh --delete
```

</template>

<template #Percona_Server>

```text
sh install-percona-els-repo.sh --delete
```

</template>

<template #PostgreSQL>

```text
sh install-postgresql-els-repo.sh --delete
```

</template>

</TableTabs>

## Source code

TuxCare provides source code for patched applications in the [Nexus repository](https://nexus.repo.tuxcare.com). Source archives and JARs follow the standard naming conventions with a `-sources` classifier or suffix.

:::tip
If a source archive is not available for a specific package, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
:::
