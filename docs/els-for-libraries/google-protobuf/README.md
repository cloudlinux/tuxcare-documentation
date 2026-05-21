# Google Protobuf

Endless Lifecycle Support (ELS) for Google Protobuf from TuxCare provides security fixes for Google Protobuf library versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* **Google Protobuf** 3.24.4

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

   Replace `USERNAME` and `PASSWORD` with the credentials provided by TuxCare.

3. Register the TuxCare repository

   Add the `els_php` Composer repository either via CLI or by editing `composer.json`:

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: cli },
     { title: 'composer.json', content: composerjson }
   ]" />

4. Install Google Protobuf

   Install the TuxCare-maintained Google Protobuf release that matches your project:

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require google/protobuf:3.24.4-p1+tuxcare` },
     { title: 'composer.json', content: protobufjson }
   ]" />

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

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/bolt.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes) — Released fixes
* ![](/images/box.webp) [Supported components](https://tuxcare.com/cve-tracker/products) — Components covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/) — Vulnerability Exploitability eXchange feed
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#PHP) — Update an installed package to a newer TuxCare release

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

const protobufjson =
`{
    "require": {
        "google/protobuf": "3.24.4-p1+tuxcare"
    }
}`

</script>
