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

**Applies to:** Debian 10, Ubuntu 16.04, Ubuntu 18.04

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

**Applies to:** Debian 10, Ubuntu 16.04, Ubuntu 18.04, Ubuntu 20.04

**For Debian 10**, the repository can be removed by running the installation script with the `--delete` flag:

```
bash install-debian10-els-repo.sh --delete
```

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
