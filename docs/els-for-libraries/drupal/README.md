# Drupal

Endless Lifecycle Support (ELS) for Drupal from TuxCare provides security fixes for Drupal core and contributed modules that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.

## Supported Versions

* **drupal/core** 8.9.x, 9.5.x
* **drupal/access_code** 7.1.1
* **drupal/bootstrap_site_alert** 7.1.6
* **drupal/coffee** 7.2.3
* **drupal/colorbox** 2.1.2, 7.2.19
* **drupal/commerce_paybox** 7.1.5
* **drupal/facebook_pixel** 7.1.1
* **drupal/filefield_paths** 7.1.2
* **drupal/flag** 7.3.9
* **drupal/form_builder** 7.1.22
* **drupal/gdpr** 3.1.0, 7.1.0
* **drupal/i18n** 7.1.35
* **drupal/link** 7.1.13
* **drupal/openid_connect** 7.1.3
* **drupal/protected_pages** 7.2.4
* **drupal/shs** 7.1.10
* **drupal/spamspan** 3.2.0, 7.1.4
* **drupal/term_reference_tree** 7.1.11
* **drupal/tfa_basic** 7.1.2
* **drupal/webform_multifile** 7.1.6

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

   Select your module, then install the TuxCare-maintained release that matches your project:

   <TableTabs label="Choose module: " :labels="{
     core: 'drupal/core',
     access_code: 'drupal/access_code',
     bootstrap_site_alert: 'drupal/bootstrap_site_alert',
     coffee: 'drupal/coffee',
     colorbox: 'drupal/colorbox',
     commerce_paybox: 'drupal/commerce_paybox',
     facebook_pixel: 'drupal/facebook_pixel',
     filefield_paths: 'drupal/filefield_paths',
     flag: 'drupal/flag',
     form_builder: 'drupal/form_builder',
     gdpr: 'drupal/gdpr',
     i18n: 'drupal/i18n',
     link: 'drupal/link',
     openid_connect: 'drupal/openid_connect',
     protected_pages: 'drupal/protected_pages',
     shs: 'drupal/shs',
     spamspan: 'drupal/spamspan',
     term_reference_tree: 'drupal/term_reference_tree',
     tfa_basic: 'drupal/tfa_basic',
     webform_multifile: 'drupal/webform_multifile'
   }">

   <template #core>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/core:9.5.11-p6+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/core', '9.5.11-p6+tuxcare') }
   ]" />

   </template>

   <template #access_code>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/access_code:7.1.1-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/access_code', '7.1.1-p1+tuxcare') }
   ]" />

   </template>

   <template #bootstrap_site_alert>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/bootstrap_site_alert:7.1.6-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/bootstrap_site_alert', '7.1.6-p1+tuxcare') }
   ]" />

   </template>

   <template #coffee>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/coffee:7.2.3-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/coffee', '7.2.3-p1+tuxcare') }
   ]" />

   </template>

   <template #colorbox>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/colorbox:7.2.19-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/colorbox', '7.2.19-p1+tuxcare') }
   ]" />

   </template>

   <template #commerce_paybox>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/commerce_paybox:7.1.5-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/commerce_paybox', '7.1.5-p1+tuxcare') }
   ]" />

   </template>

   <template #facebook_pixel>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/facebook_pixel:7.1.1-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/facebook_pixel', '7.1.1-p1+tuxcare') }
   ]" />

   </template>

   <template #filefield_paths>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/filefield_paths:7.1.2-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/filefield_paths', '7.1.2-p1+tuxcare') }
   ]" />

   </template>

   <template #flag>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/flag:7.3.9-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/flag', '7.3.9-p1+tuxcare') }
   ]" />

   </template>

   <template #form_builder>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/form_builder:7.1.22-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/form_builder', '7.1.22-p1+tuxcare') }
   ]" />

   </template>

   <template #gdpr>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/gdpr:7.1.0-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/gdpr', '7.1.0-p1+tuxcare') }
   ]" />

   </template>

   <template #i18n>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/i18n:7.1.35-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/i18n', '7.1.35-p1+tuxcare') }
   ]" />

   </template>

   <template #link>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/link:7.1.13-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/link', '7.1.13-p1+tuxcare') }
   ]" />

   </template>

   <template #openid_connect>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/openid_connect:7.1.3-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/openid_connect', '7.1.3-p1+tuxcare') }
   ]" />

   </template>

   <template #protected_pages>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/protected_pages:7.2.4-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/protected_pages', '7.2.4-p1+tuxcare') }
   ]" />

   </template>

   <template #shs>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/shs:7.1.10-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/shs', '7.1.10-p1+tuxcare') }
   ]" />

   </template>

   <template #spamspan>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/spamspan:7.1.4-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/spamspan', '7.1.4-p1+tuxcare') }
   ]" />

   </template>

   <template #term_reference_tree>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/term_reference_tree:7.1.11-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/term_reference_tree', '7.1.11-p1+tuxcare') }
   ]" />

   </template>

   <template #tfa_basic>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/tfa_basic:7.1.2-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/tfa_basic', '7.1.2-p1+tuxcare') }
   ]" />

   </template>

   <template #webform_multifile>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/webform_multifile:7.1.6-p1+tuxcare` },
     { title: 'composer.json', content: requireJson('drupal/webform_multifile', '7.1.6-p1+tuxcare') }
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

## Customer Instructions

### For legacy-project customers

No special steps are needed. The `^9.5` range matches `9.5.11-p6+tuxcare` directly:

```
{
    "repositories": [
        {"type": "composer", "url": "https://nexus.repo.tuxcare.com/repository/els_php/"},
        {"type": "composer", "url": "https://packages.drupal.org/8"}
    ]
}
```

Then run:

```text
composer update drupal/core --with-all-dependencies
```

### For recommended-project customers (needs an alias)

Because `drupal/core-recommended:9.5.11` requires exactly `drupal/core:9.5.11`, customers need a Composer inline alias to tell Composer that `9.5.11-p6+tuxcare` should be treated as `9.5.11`:

```
{
    "repositories": [
        {"type": "composer", "url": "https://nexus.repo.tuxcare.com/repository/els_php/"},
        {"type": "composer", "url": "https://packages.drupal.org/8"}
    ],
    "require": {
        "drupal/core": "9.5.11-p6+tuxcare as 9.5.11",
        "drupal/core-recommended": "^9.5"
    }
}
```

Then run:

```text
composer update "drupal/core-*" drupal/core --with-all-dependencies
```

The `"9.5.11-p6+tuxcare as 9.5.11"` alias is the key — it tells Composer to install the Satis version but pretend it's `9.5.11` for dependency resolution, satisfying `core-recommended`'s exact version constraint.

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?q=drupal%2Fcore) — Track vulnerability fixes and updates
* ![](/images/bolt.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?q=drupal%2Fcore) — Patched versions and changelogs
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/drupal/) — Vulnerability Exploitability eXchange feed
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

const requireJson = (pkg, version) =>
`{
    "require": {
        "${pkg}": "${version}"
    }
}`

</script>
