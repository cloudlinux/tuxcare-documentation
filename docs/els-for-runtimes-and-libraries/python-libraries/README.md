# Python Libraries

Endless Lifecycle Support (ELS) for Runtimes & Libraries from TuxCare provides security fixes for a variety of Python Libraries. This allows you to continue running your Python applications without vulnerability concerns, even after official support has ended.

## Supported Python Libraries

* **aiohttp** 3.8.1, 3.8.4, 3.8.5 
* **anyio** 3.7.1
* **celery** 5.1.2
* **certifi** 2021.10.8, 2022.12.7, 2023.7.22
* **cryptography** 3.4.8, 41.0.7, 42.0.0, 42.0.8, 43.0.1, 43.0.3
* **deepdiff** 6.2.3
* **Django** 3.2.25, 4.0, 5.0, 5.0.1, 5.0.2, 5.1, 5.1.4, 5.1.9
* **dnspython** 2.3.0
* **fastapi** 0.63.0, 0.104.1
* **Flask** 1.1.2, 2.2.1
* **flask-cors** 4.0.2
* **future** 1.0.0
* **GitPython** 3.1.31
* **gunicorn** 20.0.4, 20.1.0, 21.2.0, 22.0.0
* **httpx** 0.22.0
* **idna** 2.1, 2.8, 3.6
* **Jinja2** 2.11.3, 3.0.3
* **numpy** 1.15.4, 1.16.0
* **orjson** 3.8.5
* **pandas** 2.2.0, 2.2.2
* **paramiko** 3.0.0
* **pdfkit** 0.6.1
* **piexif** 1.1.3
* **Pillow** 9.4.0, 9.5.0, 11.2.1
* **pydantic** 1.10.5
* **PyJWT** 2.3.0, 2.8.0, 2.10.1
* **pymongo** 3.13.0
* **python-jose** 3.3.0
* **python-multipart** 0.0.6
* **redis** 4.5.1
* **requests** 2.25.1, 2.30.0, 2.31.0, 2.32.3
* **setuptools** 65.5.1, 68.0.0, 75.8.0
* **starlette** 0.27.0
* **statsmodels** 0.14.4
* **tqdm** 4.66.1
* **urllib3** 1.26.20
* **uvicorn** 0.11.6
* **waitress** 2.1.2
* **Werkzeug** 1.0.1, 2.2.3

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
| CVE-2025-58367      | Critical | deepdiff     | 6.2.3              | 6.2.3.post1+tuxcare |
| CVE-2025-57833      | High     | django       | 3.2.25             | 3.2.25.post1+tuxcare |
| CVE-2025-55197      | Medium   | pypdf        | 5.9.0              | 5.9.0.post1+tuxcare |
| CVE-2025-50817      | N/A      | future       | 1.0.0              | 1.0.0.post1+tuxcare |
| CVE-2025-50181      | Medium   | urllib3      | 1.26.20            | 1.26.20.post1+tuxcare |
| CVE-2025-48379      | High     | pillow       | 11.2.1             | 11.2.1.post1+tuxcare |
| CVE-2025-47273      | High     | setuptools   | 75.8.0             | 75.8.0.post1+tuxcare |
| CVE-2025-45768      | N/A      | pyjwt        | 2.10.1             | 2.10.1.post1+tuxcare |
| CVE-2025-45768      | N/A      | pyjwt        | 2.8.0              | 2.8.0.post1+tuxcare |
| CVE-2025-27516      | Medium   | jinja2	      | 2.11.3             | 2.11.3.post2+tuxcare |
| CVE-2025-26240      | N/A      | pdfkit       | 0.6.1              | 0.6.1.post1+tuxcare |
| CVE-2024-56374      | Medium   | django       | 5.1.4              | 5.1.4.post1+tuxcare |
| CVE-2024-56326      | Medium   | jinja2       | 2.11.3             | 2.11.3.post2+tuxcare |
| CVE-2024-52304      | High     | aiohttp      | 3.8.5              | 3.8.5.post2+tuxcare |
| CVE-2024-56201      | Medium   | jinja2       | 3.0.3              | 3.0.3.post1+tuxcare |
| CVE-2024-49769      | High     | waitress     | 2.1.2              | 2.1.2.post2+tuxcare |
| CVE-2024-49768      | Medium   | waitress     | 2.1.2              | 2.1.2.post1+tuxcare<br>2.1.2.post2+tuxcare |
| CVE-2024-49767      | High     | werkzeug     | 1.0.1              | 1.0.1.post1+tuxcare<br>1.0.1.post3+tuxcare |
| CVE-2024-49766      | Medium   | werkzeug     | 1.0.1              | 1.0.1.post1+tuxcare<br>1.0.1.post2+tuxcare<br>1.0.1.post3+tuxcare |
| CVE-2024-47874      | High     | starlette    | 0.27.0             | 0.27.0.post1+tuxcare |
| CVE-2024-47081      | Medium   | requests     | 2.32.3             | 2.32.3.post1+tuxcare |
| CVE-2024-42005      | High     | django       | 5.0                | 5.0.post5+tuxcare |
| CVE-2024-41990      | High     | django       | 5.0                | 5.0.post5+tuxcare |
| CVE-2024-41989      | High     | django       | 5.0.1              | 5.0.1.post3+tuxcare |
| CVE-2024-39689      | High     | certifi      | 2023.7.22          | 2023.07.22.post1+tuxcare |
| CVE-2024-39689      | High     | certifi      | 2022.12.7          | 2022.12.07.post2+tuxcare |
| CVE-2024-39614      | N/A      | django       | 5.0                | 5.0.post2+tuxcare |
| CVE-2024-39330      | N/A      | django       | 5.0                | 5.0.post4+tuxcare |
| CVE-2024-39329      | N/A      | django       | 5.0.1              | 5.0.1.post2+tuxcare |
| CVE-2024-35195      | Medium   | requests     | 2.31.0             | 2.31.0.post1+tuxcare |
| CVE-2024-34069      | High     | werkzeug     | 1.0.1              | 1.0.1.post2+tuxcare |
| CVE-2024-34064      | Medium   | jinja2       | 2.11.3             | 2.11.3.post1+tuxcare<br>2.11.3.post2+tuxcare |
| CVE-2024-34062      | Medium   | tqdm         | 4.66.1             | 4.66.1.post1+tuxcare |
| CVE-2024-28219      | Medium   | pillow       | 9.4.0              | 9.4.0.post3+tuxcare |
| CVE-2024-27454      | High     | orjson       | 3.8.5              | 3.8.5.post1+tuxcare |
| CVE-2024-27351      | Medium   | django       | 5.0.2              | 5.0.2.post1+tuxcare |
| CVE-2024-26130      | High     | cryptography | 41.0.7             | 41.0.7.post1+tuxcare |
| CVE-2024-26130      | High     | cryptography | 42.0.0             | 42.0.0.post1+tuxcare |
| CVE-2024-24762      | High     | python-multipart | 0.0.6         | 0.0.6.post1+tuxcare |
| CVE-2024-24762      | High     | fastapi      | 0.104.1            | 0.104.1.post1+tuxcare |
| CVE-2024-24680      | High     | django       | 5.0.1              | 5.0.1.post1+tuxcare |
| CVE-2024-22195      | Medium   | jinja2       | 2.11.3             | 2.11.3.post1+tuxcare<br>2.11.3.post2+tuxcare |
| CVE-2024-22190      | High     | gitpython    | 3.1.31             | 3.1.31.post1+tuxcare |
| CVE-2024-12797      | N/A      | cryptography | 43.0.3             | 43.0.3.post1+tuxcare |
| CVE-2024-12797      | N/A      | cryptography | 43.0.1             | 43.0.1.post1+tuxcare |
| CVE-2024-12797      | High     | cryptography | 42.0.8             | 42.0.8.post1+tuxcare |
| CVE-2024-9880       | N/A      | pandas       | 2.2.2              | 2.2.2.post1+tuxcare |
| CVE-2024-9880       | N/A      | pandas       | 2.2.0              | 2.2.0.post1+tuxcare |
| CVE-2024-7923       | Critical | gunicorn     | 20.1.0             | 20.1.0.post2+tuxcare |
| CVE-2024-6866       | High     | flask-cors   | 4.0.2              | 4.0.2.post1+tuxcare |
| CVE-2024-6827       | High     | gunicorn     | 22.0.0             | 22.0.0.post1+tuxcare |
| CVE-2024-6345       | High     | setuptools   | 65.5.1             | 65.5.1.post1+tuxcare |
| CVE-2024-5629       | N/A      | pymongo      | 3.13.0             | 3.13.0.post1+tuxcare |
| CVE-2024-3772       | Medium   | pydantic     | 1.10.5             | 1.10.5.post1+tuxcare |
| CVE-2024-3651       | High     | idna         | 2.1                | 2.1.post1+tuxcare |
| CVE-2024-1135       | N/A      | gunicorn     | 22.0.0             | 22.0.0.post1+tuxcare |
| CVE-2024-1135       | N/A      | gunicorn     | 21.2.0             | 21.2.0.post2+tuxcare |
| CVE-2024-1135       | N/A      | gunicorn     | 20.0.4             | 20.0.4.post1+tuxcare |
| CVE-2023-50782      | High     | cryptography | 41.0.7             | 41.0.7.post1+tuxcare |
| CVE-2023-50782      | High     | cryptography | 3.4.8              | 3.4.8.post1+tuxcare |
| CVE-2023-50447      | High     | pillow       | 9.5.0              | 9.5.0.post1+tuxcare |
| CVE-2023-50447      | High     | pillow       | 9.4.0              | 9.4.0.post2+tuxcare |
| CVE-2023-49082      | Medium   | aiohttp      | 3.8.5              | 3.8.5.post1+tuxcare |
| CVE-2023-48795      | Medium   | paramiko     | 3.0.0              | 3.0.0.post1+tuxcare |
| CVE-2023-47627      | High     | aiohttp      | 3.8.5              | 3.8.5.post1+tuxcare |
| CVE-2023-44271      | High     | pillow       | 9.4.0              | 9.4.0.post1+tuxcare |
| CVE-2023-41040      | Medium   | gitpython    | 3.1.31             | 3.1.31.post1+tuxcare |
| CVE-2023-40590      | High     | gitpython    | 3.1.31             | 3.1.31.post1+tuxcare |
| CVE-2023-37920      | Critical | certifi      | 2022.12.7          | 2022.12.07.post1+tuxcare<br>2022.12.07.post2+tuxcare |
| CVE-2023-37920      | Critical | certifi      | 2021.10.8          | 2021.10.08.post1+tuxcare<br>2021.10.08.post2+tuxcare |
| CVE-2023-37276      | High     | aiohttp      | 3.8.4              | 3.8.4.post1+tuxcare |
| CVE-2023-32681      | Medium   | requests     | 2.30.0             | 2.30.0.post1+tuxcare |
| CVE-2023-32681      | Medium   | requests     | 2.25.1             | 2.25.1.post1+tuxcare |
| CVE-2023-30861      | High     | flask        | 1.1.2              | 2.2.1.post1+tuxcare |
| CVE-2023-30861      | High     | flask        | 1.1.2              | 1.1.2.post1+tuxcare |
| CVE-2023-29483      | N/A      | dnspython    | 2.3.0              | 2.3.0.post1+tuxcare |
| CVE-2023-28859      | Medium   | redis-py     | 4.5.1              | 4.5.1.post1+tuxcare |
| CVE-2023-28858      | Low      | redis-py     | 4.5.1              | 4.5.1.post1+tuxcare |
| CVE-2023-25577      | High     | werkzeug     | 1.0.1	            | 1.0.1.post1+tuxcare<br>1.0.1.post2+tuxcare<br>1.0.1.post3+tuxcare |
| CVE-2023-24580      | High     | django       | 4.0                | 4.0.post1+tuxcare |
| CVE-2023-23969      | High     | django       | 4.0                | 4.0.post1+tuxcare |
| CVE-2023-23934      | Low      | werkzeug     | 1.0.1              | 1.0.1.post3+tuxcare |
| CVE-2023-23931      | Medium   | cryptography | 3.4.8              | 3.4.8.post1+tuxcare |
| CVE-2023-4863       | High     | pillow       | 9.5.0              | 9.5.0.post1+tuxcare |
| CVE-2023-4863       | High     | pillow       | 9.4.0              | 9.4.0.post2+tuxcare |
| CVE-2023-3446       | Medium   | cryptography | 3.4.8              | 3.4.8.post2+tuxcare |
| CVE-2022-41323      | High     | django       | 5.1                | 5.1.post1+tuxcare |
| CVE-2022-41323      | High     | django       | 4.0                | 4.0.post2+tuxcare |
| CVE-2022-36359      | High     | django       | 4.0                | 4.0.post3+tuxcare |
| CVE-2022-34265      | Critical | django       | 4.0                | 4.0.post3+tuxcare |
| CVE-2022-29217      | High     | pyjwt        | 2.3.0              | 2.3.0.post1+tuxcare |
| CVE-2022-28347      | Critical | django       | 4.0                | 4.0.post3+tuxcare |
| CVE-2022-28346      | Critical | django       | 4.0                | 4.0.post4+tuxcare |
| CVE-2022-23491      | High     | certifi      | 2021.10.8          | 2021.10.08.post2+tuxcare |
| CVE-2021-41945      | N/A      | httpx        | 0.22.0             | 0.22.0.post1+tuxcare |
| CVE-2021-45452      | Medium   | django       | 4.0                | 4.0.post4+tuxcare |
| CVE-2021-45116      | High     | django       | 4.0                | 4.0.post2+tuxcare |
| CVE-2021-45115      | High     | django       | 4.0                | 4.0.post4+tuxcare |
| CVE-2021-32677      | High     | fastapi      | 0.63.0             | 0.63.0.post1+tuxcare |
| CVE-2021-23727      | High     | celery       | 5.1.2              | 5.1.2.post1+tuxcare |
| CVE-2020-7695       | High     | uvicorn      | 0.11.6             | 0.11.6.post1+tuxcare |
| CVE-2020-7694       | Low      | uvicorn      | 0.11.6             | 0.11.6.post1+tuxcare |
| CVE-2019-6446       | Critical | numpy        | 1.16.0             | 1.16.0.post1+tuxcare |
| GHSA-h4gh-qq45-vh27 | Medium   | cryptography | 42.0.8             | 42.0.8.post1+tuxcare |
| GHSA-56pw-mpj4-fxww | High     | pillow       | 9.4.0              | 9.4.0.post2+tuxcare |

**N/A (Not Available)** mean that the National Vulnerability Database (NVD) has registered this CVE, but an official CVSS severity score has not yet been assigned.

</details>

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
