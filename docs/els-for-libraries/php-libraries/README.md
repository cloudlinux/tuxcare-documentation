# PHP Libraries

Endless Lifecycle Support (ELS) for Libraries from TuxCare provides security fixes for for various PHP packages that have reached their end-of-life. This allows you to continue running your PHP applications without vulnerability concerns, even after official support has ended.

## Supported PHP Libraries

* **Laravel** 8, 10, 11
* **Livewire** 3.x
* **Symfony Process** 5.x, 6.x

Other libraries upon request.

## Connection to ELS for PHP Libraries Repository

This guide outlines the steps needed to integrate the TuxCare ELS for PHP Libraries repository into your PHP application. The repository provides trusted PHP libraries that can be easily integrated into your **Composer** projects.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for PHP Libraries repository. Anonymous access is disabled. To receive the credentials please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

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

2. Use either the Composer CLI or edit `auth.json` directly. The repository may appear under the `nexus.repo.tuxcare.com` or `nexus-repo.corp.cloudlinux.com` host—use whichever is assigned with your credentials.

   <CodeTabs :tabs="[
     { title: 'Composer CLI', content: `composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD` },
     { title: 'auth.json', content: authjson }
   ]" />

**Replace `USERNAME` and `PASSWORD` with the credentials you received in Step 1.**

### Step 3: Register the TuxCare repository

Add the shared `els_php_custom1` Composer repository either by editing `composer.json` or via CLI:

  <CodeTabs :tabs="[
    { title: 'composer.json', content: composerjson },
    { title: 'One-liner', content:cli }
  ]" />

The same URL is reachable via `https://nexus-repo.corp.cloudlinux.com/repository/els_php_custom1/` for environments still using the CloudLinux host name.

### Step 4: Install or update packages

* After Composer recognizes the repository, require the TuxCare-maintained release that matches your project:

    <CodeWithCopy>

    ```text
    composer require vendor/package:VERSION-pN+tuxcare
    ```

    </CodeWithCopy>

    Replace the VERSION with the needed package (`laravel/framework`, `livewire/livewire`, or `symfony/process`) and the exact build listed in your TuxCare Nexus account.

* To upgrade to a newer TuxCare build, keep the repository configured and run:

    <CodeWithCopy>

    ```text
    composer update
    ```

    </CodeWithCopy>

    Composer will resolve dependencies against the TuxCare repository and install the patched releases.

## Package-specific guidance

Sample require commands:

* Laravel

    <CodeWithCopy>

    ```text
    composer require laravel/framework:10.48.28-p1+tuxcare
    ```

    </CodeWithCopy>

    **Reference projects**: [Laravel 10 example](https://github.com/cloudlinux/els-php-laravel10-demo), [Laravel 8 example](https://github.com/cloudlinux/els-php-laravel8-demo).

* Livewire

    <CodeWithCopy>

    ```text
    composer require livewire/livewire:3.6.3-1+tuxcare
    ```

    </CodeWithCopy>

* Symfony Process

    <CodeWithCopy>

    ```text
    composer require symfony/process:6.4.13-1+tuxcare
    ```

    </CodeWithCopy>

Use the build identifiers displayed in your Nexus project to ensure you receive the most recent patched release.

### Conclusion

You've successfully integrated the TuxCare ELS for PHP Libraries repository into your project. You can now benefit from the secure and vetted PHP libraries it provides.

## Vulnerability Exploitability eXchange (VEX)

VEX is a machine-readable format that tells you if a known vulnerability is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for PHP Libraries ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_php/](https://security.tuxcare.com/vex/cyclonedx/els_lang_php/).

## How to Upgrade to a Newer Version of TuxCare Packages

If you have already installed a TuxCare package and want to upgrade to a newer release, update the version string in your `composer.json` file or run the `composer require` command with the new version:

<CodeWithCopy>

```text
composer require vendor/package:VERSION-pN+tuxcare
```

</CodeWithCopy>

Then run `composer update` to apply the changes.

## Resolved CVEs in ELS for PHP Libraries

Fixes for the following vulnerabilities are available in ELS for PHP Libraries from TuxCare versions:

<TableTabs label="Choose Lodash version: " >

  <template #Laravel_framework>

| CVE ID | Severity | Vulnerable versions | Fixed in version |
|--------|----------|---------------------|------------------|
| CVE-2025-27515 | Medium | >= 11.0.0, < 11.44.1 | 11.44.0-p1+tuxcare |
| CVE-2025-27515 | Medium | < 10.48.29 | 10.48.28-p1+tuxcare |
| CVE-2025-27515 | Medium | <= 8.83.29 | 8.83.29-p1+tuxcare |

  </template>

  <template #Livewire>

| CVE ID         | CVE Type | Severity |  Affected Libraries | Vulnerable Versions |
| :------------: | :------: | :------: | :-----------------: |:-------------------:|
| CVE-2020-8203  | Direct   | High   | Lodash             |      < 4.17.20      |

  </template>

  <template #Symfony_process>

| CVE ID | Severity | Vulnerable versions | Fixed in version |
|--------|----------|---------------------|------------------|
| CVE-2025-27515 | Critical | < 6.4.14 | 6.4.13-p1+tuxcare |
| CVE-2025-27515 | Critical | < 5.4.46 | 5.4.45-p1+tuxcare |

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
        },
        "nexus-repo.corp.cloudlinux.com": {
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

</script>