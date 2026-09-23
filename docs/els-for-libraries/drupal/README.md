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

   Select your package, then install the TuxCare-maintained release that matches your project:

   <TableTabs label="Choose package: ">

   <template #Drupal_Core>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/core:9.5.11-p6+tuxcare` },
     { title: 'composer.json', content: corejson }
   ]" />

   </template>

   <template #Drupal_Access_Code>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/access_code:7.1.1-p1+tuxcare` },
     { title: 'composer.json', content: accesscodejson }
   ]" />

   </template>

   <template #Drupal_Bootstrap_Site_Alert>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/bootstrap_site_alert:7.1.6-p1+tuxcare` },
     { title: 'composer.json', content: bootstrapsitealertjson }
   ]" />

   </template>

   <template #Drupal_Coffee>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/coffee:7.2.3-p1+tuxcare` },
     { title: 'composer.json', content: coffeejson }
   ]" />

   </template>

   <template #Drupal_Colorbox>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/colorbox:7.2.19-p1+tuxcare` },
     { title: 'composer.json', content: colorboxjson }
   ]" />

   </template>

   <template #Drupal_Commerce_Paybox>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/commerce_paybox:7.1.5-p1+tuxcare` },
     { title: 'composer.json', content: commercepayboxjson }
   ]" />

   </template>

   <template #Drupal_Facebook_Pixel>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/facebook_pixel:7.1.1-p1+tuxcare` },
     { title: 'composer.json', content: facebookpixeljson }
   ]" />

   </template>

   <template #Drupal_File_Field_Paths>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/filefield_paths:7.1.2-p1+tuxcare` },
     { title: 'composer.json', content: filefieldpathsjson }
   ]" />

   </template>

   <template #Drupal_Flag>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/flag:7.3.9-p1+tuxcare` },
     { title: 'composer.json', content: flagjson }
   ]" />

   </template>

   <template #Drupal_Form_Builder>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/form_builder:7.1.22-p1+tuxcare` },
     { title: 'composer.json', content: formbuilderjson }
   ]" />

   </template>

   <template #Drupal_GDPR>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/gdpr:7.1.0-p1+tuxcare` },
     { title: 'composer.json', content: gdprjson }
   ]" />

   </template>

   <template #Drupal_Internationalization>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/i18n:7.1.35-p1+tuxcare` },
     { title: 'composer.json', content: i18njson }
   ]" />

   </template>

   <template #Drupal_Link>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/link:7.1.13-p1+tuxcare` },
     { title: 'composer.json', content: linkjson }
   ]" />

   </template>

   <template #Drupal_OpenID_Connect>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/openid_connect:7.1.3-p1+tuxcare` },
     { title: 'composer.json', content: openidconnectjson }
   ]" />

   </template>

   <template #Drupal_Protected_Pages>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/protected_pages:7.2.4-p1+tuxcare` },
     { title: 'composer.json', content: protectedpagesjson }
   ]" />

   </template>

   <template #Drupal_Simple_Hierarchical_Select>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/shs:7.1.10-p1+tuxcare` },
     { title: 'composer.json', content: shsjson }
   ]" />

   </template>

   <template #Drupal_SpamSpan>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/spamspan:7.1.4-p1+tuxcare` },
     { title: 'composer.json', content: spamspanjson }
   ]" />

   </template>

   <template #Drupal_Taxonomy_Term_Reference_Tree>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/term_reference_tree:7.1.11-p1+tuxcare` },
     { title: 'composer.json', content: termreferencetreejson }
   ]" />

   </template>

   <template #Drupal_TFA_Basic>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/tfa_basic:7.1.2-p1+tuxcare` },
     { title: 'composer.json', content: tfabasicjson }
   ]" />

   </template>

   <template #Drupal_Webform_Multiple_File_Upload>

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer require drupal/webform_multifile:7.1.6-p1+tuxcare` },
     { title: 'composer.json', content: webformmultifilejson }
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

const corejson =
`{
    "require": {
        "drupal/core": "9.5.11-p6+tuxcare"
    }
}`

const accesscodejson =
`{
    "require": {
        "drupal/access_code": "7.1.1-p1+tuxcare"
    }
}`

const bootstrapsitealertjson =
`{
    "require": {
        "drupal/bootstrap_site_alert": "7.1.6-p1+tuxcare"
    }
}`

const coffeejson =
`{
    "require": {
        "drupal/coffee": "7.2.3-p1+tuxcare"
    }
}`

const colorboxjson =
`{
    "require": {
        "drupal/colorbox": "7.2.19-p1+tuxcare"
    }
}`

const commercepayboxjson =
`{
    "require": {
        "drupal/commerce_paybox": "7.1.5-p1+tuxcare"
    }
}`

const facebookpixeljson =
`{
    "require": {
        "drupal/facebook_pixel": "7.1.1-p1+tuxcare"
    }
}`

const filefieldpathsjson =
`{
    "require": {
        "drupal/filefield_paths": "7.1.2-p1+tuxcare"
    }
}`

const flagjson =
`{
    "require": {
        "drupal/flag": "7.3.9-p1+tuxcare"
    }
}`

const formbuilderjson =
`{
    "require": {
        "drupal/form_builder": "7.1.22-p1+tuxcare"
    }
}`

const gdprjson =
`{
    "require": {
        "drupal/gdpr": "7.1.0-p1+tuxcare"
    }
}`

const i18njson =
`{
    "require": {
        "drupal/i18n": "7.1.35-p1+tuxcare"
    }
}`

const linkjson =
`{
    "require": {
        "drupal/link": "7.1.13-p1+tuxcare"
    }
}`

const openidconnectjson =
`{
    "require": {
        "drupal/openid_connect": "7.1.3-p1+tuxcare"
    }
}`

const protectedpagesjson =
`{
    "require": {
        "drupal/protected_pages": "7.2.4-p1+tuxcare"
    }
}`

const shsjson =
`{
    "require": {
        "drupal/shs": "7.1.10-p1+tuxcare"
    }
}`

const spamspanjson =
`{
    "require": {
        "drupal/spamspan": "7.1.4-p1+tuxcare"
    }
}`

const termreferencetreejson =
`{
    "require": {
        "drupal/term_reference_tree": "7.1.11-p1+tuxcare"
    }
}`

const tfabasicjson =
`{
    "require": {
        "drupal/tfa_basic": "7.1.2-p1+tuxcare"
    }
}`

const webformmultifilejson =
`{
    "require": {
        "drupal/webform_multifile": "7.1.6-p1+tuxcare"
    }
}`

</script>
