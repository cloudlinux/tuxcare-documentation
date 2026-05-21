# Python Libraries

Endless Lifecycle Support (ELS) for Libraries from TuxCare provides security fixes for a variety of Python Libraries. This allows you to continue running your Python applications without vulnerability concerns, even after official support has ended.

## Supported Python Libraries

* **aiohttp** 3.8.1, 3.8.4, 3.8.5, 3.8.6
* **certifi** 2021.10.8, 2022.12.7, 2023.7.22
* **cryptography** 3.4.8, 41.0.7, 42.0.0, 42.0.8, 43.0.1, 43.0.3, 44.0.3, 45.0.7
* **deepdiff** 6.2.3
* **dnspython** 2.3.0
* **fastmcp** 2.14.5, 2.14.7
* **flask-cors** 4.0.2
* **future** 1.0.0
* **GitPython** 3.1.31
* **gunicorn** 20.0.4, 20.1.0, 21.2.0, 22.0.0
* **h11** 0.9.0
* **httpx** 0.22.0
* **idna** 2.1, 2.8, 2.10, 3.6
* **jaraco-context** 5.3.0
* **Jinja2** 2.11.3, 3.0.3
* **keras** 2.15.0
* **langchain-core** 0.3.83
* **LightGBM** 3.3.5
* **MLflow** 2.9.1, 2.22.4
* **MySQL Connector/Python** 8.4.0
* **orjson** 3.8.5
* **pandas** 2.2.0, 2.2.2
* **paramiko** 3.0.0
* **pdfkit** 0.6.1
* **pip** 9.0
* **Pillow** 8.4.0, 9.4.0, 9.5.0, 10.4.0, 11.2.1, 11.3.0
* **protobuf** 3.17.0, 3.20.3, 4.24.3, 4.25.8
* **pyarrow** 12.0.1
* **pydantic** 1.10.5
* **PyJWT** 1.7.1, 2.3.0, 2.8.0, 2.10.1
* **pymongo** 3.13.0
* **pymysql** 0.10.1
* **pyOpenSSL** 23.3.0, 24.3.0, 25.3.0
* **pypdf** 5.9.0
* **pytest** 7.4.4, 8.4.2
* **python-jose** 3.3.0
* **python-multipart** 0.0.6
* **PyYAML** 3.13, 5.3.1
* **redis-py** 4.5.1
* **requests** 2.25.1, 2.30.0, 2.31.0, 2.32.3
* **scikit-learn** 1.0.2
* **setuptools** 59.8.0, 65.5.1, 68.0.0, 70.3.0, 75.0.0, 75.8.0
* **torch** 1.13.1
* **tornado** 5.1.1, 6.1.0
* **tqdm** 4.66.1
* **twisted** 20.3.0
* **urllib3** 1.25.11, 1.26.4, 1.26.20, 2.0.7
* **uvicorn** 0.11.6
* **waitress** 2.1.2
* **websockets** 8.1

Other libraries upon request.

## Installation

<ELSPrerequisites>

* **pip** package manager installed
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/#browse/browse:els_python) and click Sign in in the top right corner. You may need to refresh the page after logging in.

</ELSPrerequisites>

#### Option 1: Install via command line

You can install or upgrade a package directly using the ELS repository with your credentials:

```text
pip install --upgrade -i https://USERNAME:PASSWORD@nexus.repo.tuxcare.com/repository/els_python/simple <package>
```

Here `USERNAME` and `PASSWORD` are your TuxCare credentials. Replace `<package>` with the Python package name (e.g., `certifi`).

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

2. Run the command to install the latest package version. Replace `<package>` with the Python package name (e.g., `certifi`):

   ```text
   pip install --upgrade <package>
   ```

   Or install a specific patched TuxCare version, for example:

   ```text
   pip install certifi==2021.10.8.post2+tuxcare
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
   pip install certifi==2021.10.8.post2+tuxcare
   ```

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_python/) — Vulnerability Exploitability eXchange feed
* ![](/images/unlock-alt.webp) [SBOM](https://nexus.repo.tuxcare.com/#browse/browse:els_python_sbom) — Software Bill of Materials (Nexus, credentials required)
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#Python) — Update an installed package to a newer TuxCare release

</WhatsNext>
