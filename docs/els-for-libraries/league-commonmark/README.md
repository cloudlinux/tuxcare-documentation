# League CommonMark

Endless Lifecycle Support (ELS) for League CommonMark from TuxCare provides security fixes for League CommonMark versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* **League CommonMark** 1.6.7, 2.7.1

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

4. Install League CommonMark

   Install the TuxCare-maintained League CommonMark release that matches your project:

   <TableTabs label="Choose version: " >

   <template #League_CommonMark_1.6>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require league/commonmark:1.6.7-p3+tuxcare` },
     { title: 'composer.json', content: commonmarkjson16 }
   ]" />

   </template>

   <template #League_CommonMark_2.7>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require league/commonmark:2.7.1-p1+tuxcare` },
     { title: 'composer.json', content: commonmarkjson27 }
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

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?q=league%2Fcommonmark) — Track vulnerability fixes and updates
* ![](/images/bolt.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?q=league%2Fcommonmark) — Patched versions and changelogs
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/league/commonmark/) — Vulnerability Exploitability eXchange feed
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

const commonmarkjson16 =
`{
    "require": {
        "league/commonmark": "1.6.7-p3+tuxcare"
    }
}`

const commonmarkjson27 =
`{
    "require": {
        "league/commonmark": "2.7.1-p1+tuxcare"
    }
}`

</script>
