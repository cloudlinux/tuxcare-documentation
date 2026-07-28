# Flask

Endless Lifecycle Support (ELS) for Libraries from TuxCare provides security fixes for Flask. This allows you to continue running your Flask applications without vulnerability concerns, even after official support has ended.

## Supported Flask Versions

* **Flask** 0.12.5, 1.1.2, 1.1.4, 2.2.1

Other versions upon request.

## Installation

<ELSPrerequisites>

* **pip** package manager installed
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_python) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

#### Option 1: Install via command line

You can install or upgrade a package directly using the ELS repository with your credentials:

```text
pip install --upgrade -i https://USERNAME:PASSWORD@nexus.repo.tuxcare.com/repository/els_python/simple flask
```

Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#prerequisites) above).

#### Option 2: Configure `pip` to use the ELS repository (full replacement)

This method is recommended if you want to use only ELS-patched Python packages from TuxCare and replace the default PyPI source with the TuxCare ELS repository.

<ELSSteps>

1. Create or update the `pip` configuration file and add the following:

   <CodeTabs :tabs="[
   { title: 'Linux/macOS (~/.pip/pip.conf)', content:
   `[global]
   index-url = https://username:password@nexus.repo.tuxcare.com/repository/els_python/simple` },
   { title: 'Windows (%APPDATA%\pip\pip.ini)', content:
   `[global]
   index-url = https://username:password@nexus.repo.tuxcare.com/repository/els_python/simple` }
   ]" />

2. Run the command to install the latest package version:

   ```text
   pip install --upgrade flask
   ```

   Or install a specific patched TuxCare version, for example:

   ```text
   pip install flask==0.12.5.post1+tuxcare
   ```

</ELSSteps>

#### Option 3: Add the TuxCare ELS repository as additional (recommended)

If you want to keep using public PyPI and fetch only specific patched packages from TuxCare, use *extra-index-url* instead. In this configuration, make sure to specify the exact patched version, otherwise `pip` may install the version from public PyPI.

<ELSSteps>

1. Create or update the `pip` configuration file and add the following:

   <CodeTabs :tabs="[
   { title: 'Linux/macOS (~/.pip/pip.conf)', content:
   `[global]
   extra-index-url = https://username:password@nexus.repo.tuxcare.com/repository/els_python/simple` },
   { title: 'Windows (%APPDATA%\pip\pip.ini)', content:
   `[global]
   extra-index-url = https://username:password@nexus.repo.tuxcare.com/repository/els_python/simple` }
   ]" />

2. Run the command to install a specific patched TuxCare version, for example:

   ```text
   pip install flask==0.12.5.post1+tuxcare
   ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Flask) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=Flask) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=Flask) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_python/flask/) — Vulnerability Exploitability eXchange feed
* ![](/images/box.webp) [SBOM](/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom) — Software Bill of Materials (SPDX and CycloneDX)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#Python) — Update an installed package to a newer TuxCare release

</WhatsNext>
