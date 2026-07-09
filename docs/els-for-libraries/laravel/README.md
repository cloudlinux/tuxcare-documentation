# Laravel

Endless Lifecycle Support (ELS) for Laravel from TuxCare provides security fixes for Laravel framework versions that have reached their end-of-life. This allows you to continue running your Laravel applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* **Laravel** 5.4.36, 5.5.50, 5.6.40, 5.7.29, 5.8.38, 7.30.7, 8, 9.52.21, 10, 11, 12.58.0
* **Illuminate View** 5.4.36
* **Illuminate Database** 5.4.36

Other versions upon request.

## Installation

<ELSPrerequisites>

* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_php) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. Locate the `auth.json` file

   Composer reads credentials from a per-user `auth.json`. Create or edit the file at:

   * **Linux/macOS**: 
     
     ```
     ~/.composer/auth.json
     ```

   * **Windows**:
   
     ```
     %APPDATA%\Composer\auth.json
     ```

2. Add your TuxCare credentials

   Use either the Composer CLI or edit `auth.json` directly to add credentials for `nexus.repo.tuxcare.com`:

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD` },
     { title: 'auth.json', content: authjson }
   ]" />

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#prerequisites) above).

3. Register the TuxCare repository

   Add the `els_php` Composer repository either via CLI or by editing `composer.json`:

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: cli },
     { title: 'composer.json', content: composerjson }
   ]" />

4. Install Laravel components

   Install the TuxCare-maintained Laravel or Illuminate release that matches your project:

   <TableTabs label="Choose version: " >

   <template #Laravel>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require laravel/framework:10.48.28-p1+tuxcare` },
     { title: 'composer.json', content: laraveljson }
   ]" />

   </template>

   <template #Illuminate_View>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require illuminate/view:5.4.36-p1+tuxcare` },
     { title: 'composer.json', content: illuminatejson }
   ]" />

   </template>

   <template #Illuminate_Database>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require illuminate/database:5.4.36-p2+tuxcare` },
     { title: 'composer.json', content: illuminateDbJson }
   ]" />

   </template>

   </TableTabs>

   **Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.**

   :::tip

   If you edited `composer.json` manually, run `composer update` to install the package:
   
   ```
   composer update
   ```
   
   Composer will resolve dependencies against the TuxCare repository and install the patched releases.

   :::

</ELSSteps>

### Composer Repository Configuration

If you encounter dependency resolution errors like:

`packages from higher priority repository do not match your constraint`

it usually means your project requires a package version that is not yet available in the TuxCare repository.

**Solution**: Update your `composer.json` to set the TuxCare repository as non-canonical:

```
{
    "repositories": [
        {
            "type": "composer",
            "url": "https://nexus.repo.tuxcare.com/repository/els_php/",
            "canonical": false
        }
    ]
}
```

This allows Composer to fall back to Packagist for packages not available in the TuxCare repository, while still preferring TuxCare patches when available.

## Resolved CVEs in Laravel and Illuminate

Fixes for the following vulnerabilities are available in ELS for Laravel from TuxCare:

<TableTabs label="Choose version: " >

<template #Laravel_5.4>

| CVE ID              | Severity | Vulnerable versions                                              | Fixed in version    |
|---------------------|----------|------------------------------------------------------------------|---------------------|
| CVE-2021-43808      | Medium   | < 6.18.35, < 7.24.0                                              | 5.4.36-p1+tuxcare   |
| CVE-2021-21263      | High     | < 6.20.14, < 7.30.4, < 8.24.0                                    | 5.4.36-p2+tuxcare   |
| GHSA-x7p5-p2c9-phvg | High     | < 6.20.14, < 7.30.4, < 8.24.0                                    | 5.4.36-p2+tuxcare   |
| GHSA-jwvj-pwww-3mj5 | High     | < 6.20.14, < 7.30.4, < 8.24.0                                    | 5.4.36-p2+tuxcare   |
| CVE-2017-14775      | Medium   | < 5.5.10                                                         | 5.4.36-p2+tuxcare   |
| CVE-2017-16894      | High     | <= 5.5.21                                                        | 5.4.36-p2+tuxcare   |
| CVE-2018-15133      | High     | <= 5.5.40, 5.6.0 - 5.6.29                                        | 5.4.36-p2+tuxcare   |
| CVE-2024-52301      | High     | < 6.20.45, < 7.30.7, < 8.83.28, < 9.52.17, < 10.48.23, < 11.31.0 | 5.4.36-p2+tuxcare   |
| CVE-2020-19316      | High     | < 5.8.17                                                         | 5.4.36-p2+tuxcare   |
| CVE-2020-24941      | High     | < 6.18.35, < 7.24.0                                              | 5.4.36-p2+tuxcare   |
| CVE-2025-27515      | Medium   | < 11.44.1, < 12.1.1                                              | 5.4.36-p2+tuxcare   |
| GHSA-7852-w36x-6mf6 | Medium   | < 5.5.40, < 5.6.15                                               | 5.4.36-p2+tuxcare   |
| GHSA-4mg9-vhxq-vm7j | High     | < 6.20.26, < 7.30.5, < 8.40.0                                    | 5.4.36-p3+tuxcare   |
| GHSA-wq8p-mqvg-2p5h | High     | < 6.20.26, < 7.30.5, < 8.40.0                                    | 5.4.36-p3+tuxcare   |

</template>

<template #Laravel_5.5>

| CVE ID              | Severity | Vulnerable versions                                              | Fixed in version    |
|---------------------|----------|------------------------------------------------------------------|---------------------|
| CVE-2021-43808      | Medium   | < 6.18.35, < 7.24.0                                              | 5.5.50-p1+tuxcare   |
| CVE-2020-24941      | High     | < 6.18.35, < 7.24.0                                              | 5.5.50-p1+tuxcare   |
| GHSA-x7p5-p2c9-phvg | High     | < 6.20.14, < 7.30.4, < 8.24.0                                    | 5.5.50-p1+tuxcare   |
| GHSA-qm5c-m76r-2hfr | Critical | < 6.18.31, < 7.22.4                                              | 5.5.50-p1+tuxcare   |
| GHSA-4mg9-vhxq-vm7j | High     | < 6.18.35, < 7.24.0                                              | 5.5.50-p1+tuxcare   |
| CVE-2024-52301      | High     | < 6.20.45, < 7.30.7, < 8.83.28, < 9.52.17, < 10.48.23, < 11.31.0 | 5.5.50-p1+tuxcare   |
| CVE-2020-19316      | High     | < 5.8.17                                                         | 5.5.50-p1+tuxcare   |
| CVE-2025-27515      | Medium   | < 11.44.1, < 12.1.1                                              | 5.5.50-p1+tuxcare   |

</template>

<template #Laravel_5.6>

| CVE ID              | Severity | Vulnerable versions                                              | Fixed in version    |
|---------------------|----------|------------------------------------------------------------------|---------------------|
| CVE-2021-43808      | Medium   | < 6.18.35, < 7.24.0                                              | 5.6.40-p1+tuxcare   |
| CVE-2020-24941      | High     | < 6.18.35, < 7.24.0                                              | 5.6.40-p1+tuxcare   |
| GHSA-x7p5-p2c9-phvg | High     | < 6.20.14, < 7.30.4, < 8.24.0                                    | 5.6.40-p1+tuxcare   |
| GHSA-qm5c-m76r-2hfr | Critical | < 6.18.31, < 7.22.4                                              | 5.6.40-p1+tuxcare   |
| GHSA-4mg9-vhxq-vm7j | High     | < 6.18.35, < 7.24.0                                              | 5.6.40-p1+tuxcare   |
| CVE-2024-52301      | High     | < 6.20.45, < 7.30.7, < 8.83.28, < 9.52.17, < 10.48.23, < 11.31.0 | 5.6.40-p1+tuxcare   |
| CVE-2020-19316      | High     | < 5.8.17                                                         | 5.6.40-p1+tuxcare   |
| CVE-2025-27515      | Medium   | < 11.44.1, < 12.1.1                                              | 5.6.40-p1+tuxcare   |

</template>

<template #Laravel_5.7>

| CVE ID              | Severity | Vulnerable versions                                              | Fixed in version    |
|---------------------|----------|------------------------------------------------------------------|---------------------|
| CVE-2021-43808      | Medium   | < 6.18.35, < 7.24.0                                              | 5.7.29-p1+tuxcare   |
| CVE-2020-24941      | High     | < 6.18.35, < 7.24.0                                              | 5.7.29-p1+tuxcare   |
| GHSA-x7p5-p2c9-phvg | High     | < 6.20.14, < 7.30.4, < 8.24.0                                    | 5.7.29-p1+tuxcare   |
| GHSA-qm5c-m76r-2hfr | Critical | < 6.18.31, < 7.22.4                                              | 5.7.29-p1+tuxcare   |
| GHSA-4mg9-vhxq-vm7j | High     | < 6.18.35, < 7.24.0                                              | 5.7.29-p1+tuxcare   |
| CVE-2024-52301      | High     | < 6.20.45, < 7.30.7, < 8.83.28, < 9.52.17, < 10.48.23, < 11.31.0 | 5.7.29-p1+tuxcare   |
| CVE-2020-19316      | High     | < 5.8.17                                                         | 5.7.29-p1+tuxcare   |
| CVE-2025-27515      | Medium   | < 11.44.1, < 12.1.1                                              | 5.7.29-p1+tuxcare   |

</template>

<template #Laravel_5.8>

| CVE ID              | Severity | Vulnerable versions           | Fixed in version    |
|---------------------|----------|-------------------------------|---------------------|
| CVE-2021-43808      | Medium   | < 6.18.35, < 7.24.0           | 5.8.38-p1+tuxcare   |
| CVE-2020-24941      | High     | < 6.18.35, < 7.24.0           | 5.8.38-p1+tuxcare   |
| GHSA-x7p5-p2c9-phvg | High     | < 6.20.14, < 7.30.4, < 8.24.0 | 5.8.38-p1+tuxcare   |
| GHSA-qm5c-m76r-2hfr | Critical | < 6.18.31, < 7.22.4           | 5.8.38-p1+tuxcare   |
| GHSA-4mg9-vhxq-vm7j | High     | < 6.18.35, < 7.24.0           | 5.8.38-p1+tuxcare   |

</template>

<template #Laravel_8>

| CVE ID         | Severity | Vulnerable versions  | Fixed in version    |
|----------------|----------|----------------------|---------------------|
| CVE-2025-27515 | Medium   | < 11.44.1           | 8.83.29-p1+tuxcare  |
| CVE-2025-27515 | Medium   | < 11.44.1           | 8.12.0-p3+tuxcare  |
| GHSA-wq8p-mqvg-2p5h | High   | >= 8.0.0, < 8.40.0| 8.12.0-p3+tuxcare  |
| CVE-2024-52301 | High   | >= 8.0.0, < 83.28| 8.12.0-p3+tuxcare  |
| CVE-2021-43808 | Medium   | 8.0.0, < 8.75.0| 8.12.0-p3+tuxcare  |
| CVE-2021-21263 | Medium   | >= 8.0.0, < 8.75.0| 8.12.0-p1+tuxcare  |
| CVE-2021-21263 | Medium   | >= 8.0.0, < 8.75.0| 8.12.1-p1+tuxcare  |
| CVE-2025-27515 | Critical   | < 11.44.1           | 8.12.1-p1+tuxcare  |
| GHSA-wq8p-mqvg-2p5h | High   | >= 8.0.0, < 8.40.0| 8.12.1-p1+tuxcare  |
| CVE-2024-52301 | Medium   | >= 8.0.0, < 83.28| 8.12.1-p1+tuxcare  |
| CVE-2021-43808 | Medium   | 8.0.0, < 8.75.0| 8.12.1-p1+tuxcare  |
| CVE-2021-21263 | Medium   | >= 8.0.0, < 8.75.0| 8.12.2-p1+tuxcare  |
| CVE-2025-27515 | Critical   | < 11.44.1           | 8.12.2-p1+tuxcare  |
| GHSA-wq8p-mqvg-2p5h | high   | >= 8.0.0, < 8.40.0| 8.12.2-p1+tuxcare  |
| CVE-2024-52301 | Medium   | >= 8.0.0, < 83.28| 8.12.2-p1+tuxcare  |
| CVE-2021-43808 | Medium   | 8.0.0, < 8.75.0| 8.12.2-p1+tuxcare  |
| CVE-2021-21263 | Medium   | >= 8.0.0, < 8.75.0| 8.12.3-p1+tuxcare  |
| CVE-2025-27515 | Critical   | < 11.44.1           | 8.12.3-p1+tuxcare  |
| GHSA-wq8p-mqvg-2p5h | High   | >= 8.0.0, < 8.40.0| 8.12.3-p1+tuxcare  |
| CVE-2024-52301 | Medium   | >= 8.0.0, < 83.28| 8.12.3-p1+tuxcare  |
| CVE-2021-43808 | Medium   | 8.0.0, < 8.75.0| 8.12.3-p1+tuxcare  |


</template>

<template #Laravel_10>

| CVE ID         | Severity | Vulnerable versions  | Fixed in version    |
|----------------|----------|----------------------|---------------------|
| CVE-2025-27515 | Medium   | < 10.48.29           | 10.48.28-p1+tuxcare |

</template>

<template #Laravel_11>

| CVE ID         | Severity | Vulnerable versions  | Fixed in version    |
|----------------|----------|----------------------|---------------------|
| CVE-2025-27515 | Medium   | >= 11.0.0, < 11.44.1 | 11.44.0-p1+tuxcare  |

</template>

<template #Illuminate_View_5.4.36>

| CVE ID         | Severity | Vulnerable versions        | Fixed in version    |
|----------------|----------|----------------------------|---------------------|
| CVE-2021-43808 | Medium   |        5.4.36              | 5.4.36-p1+tuxcare   |

</template>

<template #Illuminate_Database_5.4.36>

| CVE ID              | Severity | Vulnerable versions           | Fixed in version    |
|---------------------|----------|-------------------------------|---------------------|
| GHSA-x7p5-p2c9-phvg | High     | < 6.20.14, < 7.30.4, < 8.24.0 | 5.4.36-p2+tuxcare   |

</template>

</TableTabs>

### Latest patched releases

The following fixes are available in the most recent ELS releases:

| CVE ID                | Fixed in version                                                              |
|-----------------------|-------------------------------------------------------------------------------|
| AIKIDO-2026-10659     | 5.8.38-p3+tuxcare, 5.8.38-p4+tuxcare, 10.50.2-p3+tuxcare, 11.51.0-p2+tuxcare, 12.58.0-p2+tuxcare |
| CVE-2020-24941        | 5.8.38-p3+tuxcare, 5.8.38-p4+tuxcare                                          |
| CVE-2021-43808        | 5.8.38-p3+tuxcare, 5.8.38-p4+tuxcare                                          |
| CVE-2024-52301        | 5.8.38-p4+tuxcare                                                             |
| CVE-2025-27515        | 5.8.38-p4+tuxcare, 11.44.0-p2+tuxcare                                         |
| GHSA-4mg9-vhxq-vm7j   | 5.8.38-p3+tuxcare, 5.8.38-p4+tuxcare                                          |
| GHSA-qm5c-m76r-2hfr   | 5.8.38-p3+tuxcare, 5.8.38-p4+tuxcare                                          |
| GHSA-x7p5-p2c9-phvg   | 5.8.38-p3+tuxcare, 5.8.38-p4+tuxcare                                          |
| GHSA-5vg9-5847-vvmq   | 10.50.2-p3+tuxcare, 11.44.0-p2+tuxcare, 11.51.0-p2+tuxcare, 12.58.0-p2+tuxcare |
| GHSA-crmm-hgp2-wgrp   | 11.44.0-p2+tuxcare, 11.51.0-p2+tuxcare                                        |

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Laravel) — Track vulnerability fixes and updates
* ![](/images/bolt.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Laravel) — Patched versions and changelogs
* ![](/images/box.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Laravel) — Components covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/) — Vulnerability Exploitability eXchange feed
* ![](/images/wrench.webp) [Package updates](/els-for-libraries/managing-els-repository/#PHP) — Upgrade to a newer version

</WhatsNext>

<script setup>

const authjson =
`{
  "http-basic": {
    "nexus.repo.tuxcare.com": {
      "username": "USERNAME",
      "password": "PASSWORD"
    }
  }
}`

const composerjson =
`{
    "repositories": [
        {
        "type": "composer",
        "url": "https://nexus.repo.tuxcare.com/repository/els_php/",
        "options": {
            "http": {
            "verify": true
            }
        }
        }
    ]
}`

const cli =
`composer config repositories.tuxcare '{"type":"composer","url":"https://nexus.repo.tuxcare.com/repository/els_php/","options":{"http":{"verify":true}}}' --json`

const laraveljson =
`{
    "require": {
        "laravel/framework": "10.48.28-p1+tuxcare"
    }
}`

const illuminatejson =
`{
    "require": {
        "illuminate/view": "5.4.36-p1+tuxcare"
    }
}`

const illuminateDbJson =
`{
    "require": {
        "illuminate/database": "5.4.36-p2+tuxcare"
    }
}`

</script>
