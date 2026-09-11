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

## Removing the ELS repository

The ELS repository is removed by running the installation script with the `--delete` flag.

<TableTabs label="Choose the application: " :labels="{ MariaDB: 'MariaDB', MySQL_and_Percona_Server: 'MySQL and Percona Server', PostgreSQL: 'PostgreSQL' }">

<template #MariaDB>

```text
sh install-mariadb-els-repo.sh --delete
```

</template>

<template #MySQL_and_Percona_Server>

```text
sh install-mysql-els-repo.sh --delete
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
