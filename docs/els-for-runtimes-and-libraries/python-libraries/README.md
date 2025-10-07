# Python Libraries

Endless Lifecycle Support (ELS) for Runtimes & Libraries from TuxCare provides security fixes for a variety of Python Libraries. This allows you to continue running your Python applications without vulnerability concerns, even after official support has ended.

## Supported Python Libraries

* **anyio**
* **certifi**
* **cryptography**
* **Flask**
* **gunicorn**
* **idna**
* **Jinja2**
* **Pillow**
* **pymongo**
* **sentry-sdk**
* **setuptools**
* **waitress**
* **Werkzeug**

  **Supported architecture:** x86_64.

Other libraries and architectures upon request.

## Connection to ELS for Python Libraries Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Python Libraries repository.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for Python Libraries repository. Anonymous access is disabled. To receive the credentials please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Set Up ELS for Python Libraries

To use TuxCare's ELS for Python libraries, follow one of the options below:

#### Option 1: Install a Package with ELS Repository via Command Line

You can install or upgrade a package directly using the ELS repository with your credentials:

<CodeWithCopy>

```text
pip install --upgrade \
  -i https://<username>:<password>@nexus.repo.tuxcare.com/repository/els_python/simple \
  <package>
```

</CodeWithCopy>

**Replace:**
* `<username>` and `<password>` - with the credentials provided by sales.  
* `<package>` - with the Python package name (e.g., `certifi`).

#### Option 2: Configure `pip` to Use the ELS Repository (Full Replacement)

This method is recommended if you want to use only ELS-patched Python packages from TuxCare and replace the default PyPI source with the TuxCare ELS repository. 

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

   <CodeWithCopy>

   ```text
   pip install --upgrade <package>
   ```

   </CodeWithCopy>

   **Replace `<package>` with the python package name, for example, certifi.**

   Or install a specific patched TuxCare version, for example:

   <CodeWithCopy>

   ```text
   pip install certifi==2021.10.8.post2+tuxcare
   ```

   </CodeWithCopy>

#### Option 3: Add the TuxCare ELS Repository as Additional (recommended )

If you want to keep using public PyPI and fetch only specific patched packages from TuxCare, use *extra-index-url* instead. In this configuration, make sure to specify the exact patched version (step 2 below), otherwise `pip` may install the version from public PyPI.

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

   <CodeWithCopy>

   ```text
   pip install certifi==2021.10.8.post2+tuxcare
   ```

   </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Python Libraries from TuxCare versions:

<details>
  <summary>Click to expand resolved CVEs in ELS for Python Libraries</summary>

| CVE ID              | Severity | Library      | Vulnerable Versions | Safe Version |
| :-----------------: | :------: | :----------: | :----------------: | :----------: |
| GHSA-56pw-mpj4-fxww | High     | pillow       | 9.4.0              | 9.4.0.post2+tuxcare |
| GHSA-h4gh-qq45-vh27 | Medium   | cryptography | 42.0.8             | 42.0.8.post1+tuxcare |
| CVE-2019-6446       | Critical | numpy        | 1.16.0             | 1.16.0.post1+tuxcare |
| CVE-2020-7694       | Low      | uvicorn      | 0.11.6             | 0.11.6.post1+tuxcare |
| CVE-2020-7695       | High     | uvicorn      | 0.11.6             | 0.11.6.post1+tuxcare |
| CVE-2021-41945      | N/A      | httpx        | 0.22.0             | 0.22.0.post1+tuxcare |
| CVE-2022-23491      | High     | certifi      | 2021.10.8          | 2021.10.08.post2+tuxcare |
| CVE-2023-4863       | High     | pillow       | 9.4.0              | 9.4.0.post2+tuxcare |
| CVE-2023-4863       | High     | pillow       | 9.5.0              | 9.5.0.post1+tuxcare |
| CVE-2023-23934      | Low      | werkzeug     | 1.0.1              | 1.0.1.post3+tuxcare |
| CVE-2023-23969      | High     | django       | 4.0                | 4.0.post1+tuxcare |
| CVE-2023-24580      | High     | django       | 4.0                | 4.0.post1+tuxcare |
| CVE-2023-25577      | High     | werkzeug     | 1.0.1	            | 1.0.1.post1+tuxcare<br>1.0.1.post2+tuxcare<br>1.0.1.post3+tuxcare |
| CVE-2023-30861      | High     | flask        | 1.1.2              | 1.1.2.post1+tuxcare |
| CVE-2023-30861      | High     | flask        | 1.1.2              | 2.2.1.post1+tuxcare |
| CVE-2023-32681      | Medium   | requests     | 2.25.1             | 2.25.1.post1+tuxcare |
| CVE-2023-32681      | Medium   | requests     | 2.30.0             | 2.30.0.post1+tuxcare |
| CVE-2023-37276      | High     | aiohttp      | 3.8.4              | 3.8.4.post1+tuxcare |
| CVE-2023-37920      | Critical | certifi      | 2021.10.8          | 2021.10.08.post1+tuxcare<br>2021.10.08.post2+tuxcare |
| CVE-2023-37920      | Critical | certifi      | 2022.12.7          | 2022.12.07.post1+tuxcare<br>2022.12.07.post2+tuxcare |
| CVE-2023-44271      | High     | pillow       | 9.4.0              | 9.4.0.post1+tuxcare |
| CVE-2023-47627      | High     | aiohttp      | 3.8.5              | 3.8.5.post1+tuxcare |
| CVE-2023-50447      | High     | pillow       | 9.4.0              | 9.4.0.post2+tuxcare |
| CVE-2023-50447      | High     | pillow       | 9.5.0              | 9.5.0.post1+tuxcare |
| CVE-2024-3651       | High     | idna         | 2.1                | 2.1.post1+tuxcare |
| CVE-2024-5629       | N/A      | pymongo      | 3.13.0             | 3.13.0.post1+tuxcare |
| CVE-2024-6345       | High     | setuptools   | 65.5.1             | 65.5.1.post1+tuxcare |
| CVE-2024-6827       | High     | gunicorn     | 22.0.0             | 22.0.0.post1+tuxcare |
| CVE-2024-7923       | Critical | gunicorn     | 20.1.0             | 20.1.0.post2+tuxcare |
| CVE-2024-12797      | High     | cryptography | 42.0.8             | 42.0.8.post1+tuxcare |
| CVE-2024-12797      | N/A      | cryptography | 43.0.1             | 43.0.1.post1+tuxcare |
| CVE-2024-12797      | N/A      | cryptography | 43.0.3             | 43.0.3.post1+tuxcare |
| CVE-2024-22195      | Medium   | jinja2       | 2.11.3             | 2.11.3.post1+tuxcare<br>2.11.3.post2+tuxcare |
| CVE-2024-24680      | High     | django       | 5.0.1              | 5.0.1.post1+tuxcare |
| CVE-2024-24762      | High     | fastapi      | 0.104.1            | 0.104.1.post1+tuxcare |
| CVE-2024-27351      | Medium   | django       | 5.0.2              | 5.0.2.post1+tuxcare |
| CVE-2024-28219      | Medium   | pillow       | 9.4.0              | 9.4.0.post3+tuxcare |
| CVE-2024-34064      | Medium   | jinja2       | 2.11.3             | 2.11.3.post1+tuxcare<br>2.11.3.post2+tuxcare |
| CVE-2024-39689      | High     | certifi      | 2022.12.7          | 2022.12.07.post2+tuxcare |
| CVE-2024-39689      | High     | certifi      | 2023.7.22          | 2023.07.22.post1+tuxcare |
| CVE-2024-47081      | Medium   | requests     | 2.32.3             | 2.32.3.post1+tuxcare |
| CVE-2024-49766      | Medium   | werkzeug     | 1.0.1              | 1.0.1.post1+tuxcare<br>1.0.1.post2+tuxcare<br>1.0.1.post3+tuxcare |
| CVE-2024-49767      | High     | werkzeug     | 1.0.1              | 1.0.1.post1+tuxcare<br>1.0.1.post3+tuxcare |
| CVE-2024-49768      | Medium   | waitress     | 2.1.2              | 2.1.2.post1+tuxcare<br>2.1.2.post2+tuxcare |
| CVE-2024-49769      | High     | waitress     | 2.1.2              | 2.1.2.post2+tuxcare |
| CVE-2024-52304      | High     | aiohttp      | 3.8.5              | 3.8.5.post2+tuxcare |
| CVE-2024-56326      | Medium   | jinja2       | 2.11.3             | 2.11.3.post2+tuxcare |
| CVE-2024-56374      | Medium   | django       | 5.1.4              | 5.1.4.post1+tuxcare |
| CVE-2025-27516      | Medium   | jinja2	      | 2.11.3             | 2.11.3.post2+tuxcare |
| CVE-2025-47273      | High     | setuptools   | 75.8.0             | 75.8.0.post1+tuxcare |
| CVE-2025-50817      | N/A      | future       | 1.0.0              | 1.0.0.post1+tuxcare |

**N/A (Not Available)** mean that the National Vulnerability Database (NVD) has registered this CVE, but an official CVSS severity score has not yet been assigned.

</details>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
