# Livewire

Endless Lifecycle Support (ELS) for Livewire from TuxCare provides security fixes for Livewire versions that have reached their end-of-life. This allows you to continue running your Livewire applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* **Livewire** 3.x

Other versions upon request.

## Connection to ELS for PHP Libraries Repository

This guide outlines the steps needed to integrate the TuxCare ELS for PHP Libraries repository into your Livewire application. The repository provides trusted PHP libraries that can be easily integrated into your **Composer** projects.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for PHP Libraries repository. Anonymous access is disabled. To receive the credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

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

2. Use either the Composer CLI or edit `auth.json` directly add your credentials for `nexus.repo.tuxcare.com`.

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

### Step 4: Install Livewire

Install the TuxCare-maintained Livewire release that matches your project:

<CodeTabs :tabs="[
  { title: 'Composer CLI', content: `composer require livewire/livewire:3.6.3-p1+tuxcare` },
  { title: 'composer.json', content: livewirejson }
]" />

**Please check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.**

If you edited `composer.json` manually, run `composer update` to install the package:

<CodeWithCopy>

```text
composer update
```

</CodeWithCopy>

Composer will resolve dependencies against the TuxCare repository and install the patched releases.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives and helps prioritize real risks.

TuxCare provides VEX for PHP Libraries ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_php/](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/).

## How to Upgrade to a Newer Version

If you have already installed a TuxCare Livewire package and want to upgrade to a newer release, update the version string in your `composer.json` file or run the `composer require` command with the new version:

<CodeWithCopy>

```text
composer require livewire/livewire:VERSION-pN+tuxcare
```

</CodeWithCopy>

Then run `composer update` to apply the changes:

<CodeWithCopy>

```text
composer update
```

</CodeWithCopy>

## Resolved CVEs in Livewire

Fixes for the following vulnerabilities are available in ELS for Livewire from TuxCare:

| CVE ID         | Severity | Vulnerable versions  | Fixed in version |
|----------------|----------|----------------------|------------------|
| CVE-2025-54068 | Critical | < 3.6.4              | 3.6.3-p1+tuxcare |

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

const livewirejson =
`{
    "require": {
        "livewire/livewire": "3.6.3-p1+tuxcare"
    }
}`

</script>
