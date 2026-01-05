# League CommonMark

Endless Lifecycle Support (ELS) for League CommonMark from TuxCare provides security fixes for League CommonMark versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* **League CommonMark** 1.6.7

Other versions upon request.

## Connection to ELS for League CommonMark Repository

This guide outlines the steps needed to integrate the TuxCare ELS for League CommonMark repository into your application. The repository provides trusted League CommonMark packages that can be easily integrated into your **Composer** projects.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for League CommonMark repository. Anonymous access is disabled. To receive the credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Configure Composer authentication

1. Create or edit the `auth.json` file for the user running Composer:

    * **Linux/macOS**: 

        <CodeWithCopy>
        
        ```text
        ~/.composer/auth.json
        ```

        </CodeWithCopy>

    * **Windows**: 

        <CodeWithCopy>

        ```text
        %APPDATA%\Composer\auth.json
        ```

        </CodeWithCopy>

2. Use either the Composer CLI or edit `auth.json` directly to add your credentials for `nexus.repo.tuxcare.com`.

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD` },
     { title: 'auth.json', content: authjson }
   ]" />

   Replace `USERNAME` and `PASSWORD` with the credentials you received in [Step 1](#step-1-get-user-credentials).

### Step 3: Register the TuxCare repository

Add the `els_php_custom1` Composer repository either via CLI or by editing `composer.json`:

  <CodeTabs :tabs="[
    { title: 'Composer CLI', content: cli },
    { title: 'composer.json', content: composerjson }
  ]" />

### Step 4: Install League CommonMark

Install the TuxCare-maintained League CommonMark release that matches your project:

<CodeTabs :tabs="[
  { title: 'Composer CLI', content: `composer require league/commonmark:1.6.7-p1+tuxcare` },
  { title: 'composer.json', content: commonmarkjson }
]" />

**Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.**

If you edited `composer.json` manually, run `composer update` to install the package:

<CodeWithCopy>

```text
composer update
```

</CodeWithCopy>

Composer will resolve dependencies against the TuxCare repository and install the patched releases.

### Composer Repository Configuration

If you encounter dependency resolution errors like:

`packages from higher priority repository do not match your constraint`

it usually means your project requires a package version that is not yet available in the TuxCare repository.

**Solution**: Update your `composer.json` to set the TuxCare repository as non-canonical:

<CodeWithCopy>

```
{
    "repositories": [
        {
            "type": "composer",
            "url": "https://nexus.repo.tuxcare.com/repository/els_php_custom1/",
            "canonical": false
        }
    ]
}
```

</CodeWithCopy>

This allows Composer to fall back to Packagist for packages not available in the TuxCare repository, while still preferring TuxCare patches when available.

## How to Upgrade to a Newer Version

If you have already installed a TuxCare League CommonMark package and want to upgrade to a newer release, update the version string in your `composer.json` file or run the `composer require` command with the new version:

<CodeWithCopy>

```text
composer require league/commonmark:VERSION-pN+tuxcare
```

</CodeWithCopy>

Then run `composer update` to apply the changes:

<CodeWithCopy>

```text
composer update
```

</CodeWithCopy>

## Resolved CVEs in League CommonMark

Fixes for the following vulnerabilities are available in ELS for League CommonMark from TuxCare:

<TableTabs label="Choose League CommonMark version: ">

<template #League_CommonMark_1.6>

| CVE ID             | Severity | Vulnerable versions | Fixed in version    |
|--------------------|----------|---------------------|---------------------|
| GHSA-c2pc-g5qf-rfrf | High     | < 2.6.0             | 1.6.7-p1+tuxcare    |

</template>

</TableTabs>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

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
        "url": "https://nexus.repo.tuxcare.com/repository/els_php_custom1/",
        "options": {
            "http": {
            "verify": true
            }
        }
        }
    ]
}`

const cli =
`composer config repositories.tuxcare '{"type":"composer","url":"https://nexus.repo.tuxcare.com/repository/els_php_custom1/","options":{"http":{"verify":true}}}' --json`

const commonmarkjson =
`{
    "require": {
        "league/commonmark": "1.6.7-p1+tuxcare"
    }
}`

</script>
