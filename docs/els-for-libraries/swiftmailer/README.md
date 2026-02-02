# SwiftMailer

Endless Lifecycle Support (ELS) for SwiftMailer from TuxCare provides security fixes for SwiftMailer library versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* **SwiftMailer** 5.4.12

Other versions upon request.

## Connection to ELS for SwiftMailer Repository

This guide outlines the steps needed to integrate the TuxCare ELS for SwiftMailer repository into your application. The repository provides trusted SwiftMailer library versions that can be easily integrated into your **Composer** projects.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for SwiftMailer repository. Anonymous access is disabled. To receive the credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

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

### Step 4: Install SwiftMailer

Install the TuxCare-maintained SwiftMailer release that matches your project:

<CodeTabs :tabs="[
  { title: 'Composer CLI', content: `composer require swiftmailer/swiftmailer:5.4.12-p1+tuxcare` },
  { title: 'composer.json', content: pkgjson }
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

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives and helps prioritize real risks.

TuxCare provides VEX for SwiftMailer ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_php/swiftmailer-swiftmailer/](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/swiftmailer-swiftmailer/).

## How to Upgrade to a Newer Version

If you have already installed a TuxCare SwiftMailer package and want to upgrade to a newer release, update the version string in your `composer.json` file or run the `composer require` command with the new version:

<CodeWithCopy>

```text
composer require swiftmailer/swiftmailer:VERSION-pN+tuxcare
```

</CodeWithCopy>

Then run `composer update` to apply the changes:

<CodeWithCopy>

```text
composer update
```

</CodeWithCopy>

## Resolved CVEs in SwiftMailer

Fixes for the following vulnerabilities are available in ELS for SwiftMailer from TuxCare:

<TableTabs label="Choose a version: " >

<template #SwiftMailer_5.4.12>

| CVE ID         | Severity | Vulnerable versions | Fixed in version      |
|----------------|----------|---------------------|-----------------------|
| CVE-2024-28859 | Critical | >= 4.0.0, < 6.2.5   | 5.4.12-p1+tuxcare     |

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

const pkgjson =
`{
    "require": {
        "swiftmailer/swiftmailer": "5.4.12-p1+tuxcare"
    }
}`

</script>
