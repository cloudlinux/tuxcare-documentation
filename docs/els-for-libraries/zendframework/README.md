# Zend Framework

Endless Lifecycle Support (ELS) for Zend Framework from TuxCare provides security fixes for end-of-life Zend Framework packages. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* **Zend Framework 1** 1.12.10
* **Zend Framework** 2.4.13
* **Zend HTTP** 2.5.6

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

4. Install the package

   Select your package, then install the TuxCare-maintained release that matches your project:

   <TableTabs label="Choose package: ">

   <template #zendframework>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require zendframework/zendframework:2.4.13-p1+tuxcare` },
     { title: 'composer.json', content: zf2json }
   ]" />

   </template>

   <template #zendframework1>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require zendframework/zendframework1:1.12.10-p1+tuxcare` },
     { title: 'composer.json', content: zf1json }
   ]" />

   </template>

   <template #zend-http>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require zendframework/zend-http:2.5.6-p1+tuxcare` },
     { title: 'composer.json', content: zendhttpjson }
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

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Zend Framework from TuxCare:

<TableTabs label="Choose package: ">

<template #zendframework>

| CVE ID        | Severity | Vulnerable versions | Fixed in version   |
|---------------|----------|---------------------|--------------------|
| CVE-2021-3007 | Critical | 2.4.13              | 2.4.13-p1+tuxcare  |

</template>

<template #zendframework1>

| CVE ID              | Severity | Vulnerable versions | Fixed in version    |
|---------------------|----------|---------------------|---------------------|
| CVE-2016-6233       | Critical | 1.12.10             | 1.12.10-p1+tuxcare  |
| CVE-2016-4861       | Critical | 1.12.10             | 1.12.10-p1+tuxcare  |
| CVE-2015-7695       | Critical | 1.12.10             | 1.12.10-p1+tuxcare  |
| CVE-2015-5723       | High     | 1.12.10             | 1.12.10-p1+tuxcare  |
| CVE-2015-5161       | Medium   | 1.12.10             | 1.12.10-p1+tuxcare  |
| CVE-2015-3154       | Medium   | 1.12.10             | 1.12.10-p1+tuxcare  |
| GHSA-gff2-p6vm-3p8g | Medium   | 1.12.10             | 1.12.10-p1+tuxcare  |
| GHSA-6fqw-j3vm-7f66 | Medium   | 1.12.10             | 1.12.10-p2+tuxcare  |
| GHSA-848f-mph5-9pm9 | Medium   | 1.12.10             | 1.12.10-p2+tuxcare  |
| GHSA-8xhv-gqm4-3w99 | Medium   | 1.12.10             | 1.12.10-p2+tuxcare  |
| GHSA-v42g-7q2x-cw32 | Medium   | 1.12.10             | 1.12.10-p2+tuxcare  |

</template>

<template #zend-http>

| CVE ID              | Severity | Vulnerable versions | Fixed in version   |
|---------------------|----------|---------------------|--------------------|
| CVE-2021-3007       | Critical | 2.5.6               | 2.5.6-p1+tuxcare   |
| GHSA-cg8w-5jrc-675g | High     | 2.5.6               | 2.5.6-p1+tuxcare   |

</template>

</TableTabs>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?q=zendframework) — Track vulnerability fixes and updates
* ![](/images/bolt.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?q=zendframework) — Patched versions and changelogs
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/zendframework/) — Vulnerability Exploitability eXchange feed
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

const zf1json =
`{
    "require": {
        "zendframework/zendframework1": "1.12.10-p1+tuxcare"
    }
}`

const zf2json =
`{
    "require": {
        "zendframework/zendframework": "2.4.13-p1+tuxcare"
    }
}`

const zendhttpjson =
`{
    "require": {
        "zendframework/zend-http": "2.5.6-p1+tuxcare"
    }
}`

</script>
