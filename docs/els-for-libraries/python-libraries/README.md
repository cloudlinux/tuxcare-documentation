# Python Libraries

Endless Lifecycle Support (ELS) for Libraries from TuxCare provides security fixes for a variety of Python Libraries. This allows you to continue running your Python applications without vulnerability concerns, even after official support has ended.

## Supported Python Libraries

* **aiohttp** 3.8.1, 3.8.4, 3.8.5 
* **certifi** 2021.10.8, 2022.12.7, 2023.7.22
* **cryptography** 3.4.8, 41.0.7, 42.0.0, 42.0.8, 43.0.1, 43.0.3
* **deepdiff** 6.2.3
* **dnspython** 2.3.0
* **flask-cors** 4.0.2
* **future** 1.0.0
* **GitPython** 3.1.31
* **gunicorn** 20.0.4, 20.1.0, 21.2.0, 22.0.0
* **h11** 0.9.0
* **httpx** 0.22.0
* **idna** 2.1, 2.8, 2.10, 3.6
* **jaraco-context** 5.3.0
* **Jinja2** 2.11.3, 3.0.3
* **MLflow** 2.22.4
* **MySQL Connector/Python** 8.4.0
* **orjson** 3.8.5
* **pandas** 2.2.0, 2.2.2
* **paramiko** 3.0.0
* **pdfkit** 0.6.1
* **Pillow** 8.4.0, 9.4.0, 9.5.0, 11.2.1
* **protobuf** 4.24.3
* **pydantic** 1.10.5
* **PyJWT** 1.7.1, 2.3.0, 2.8.0, 2.10.1
* **pymongo** 3.13.0
* **pymysql** 0.10.1
* **pypdf** 5.9.0
* **python-jose** 3.3.0
* **python-multipart** 0.0.6
* **PyYAML** 3.13, 5.3.1
* **redis-py** 4.5.1
* **requests** 2.25.1, 2.30.0, 2.31.0, 2.32.3
* **scikit-learn** 1.0.2
* **setuptools** 65.5.1, 68.0.0, 70.3.0, 75.0.0, 75.8.0
* **torch** 1.13.1
* **tqdm** 4.66.1
* **twisted** 20.3.0
* **urllib3** 1.25.11, 1.26.4, 1.26.20, 2.0.7
* **uvicorn** 0.11.6
* **waitress** 2.1.2
* **websockets** 8.1

Other libraries upon request.

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

#### Option 3: Add the TuxCare ELS Repository as Additional (recommended)

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

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `version.post1+tuxcare` to `version.post2+tuxcare`) use the same installation method you used above and specify the newer package version.

## Vulnerability Exploitability eXchange (VEX) 

VEX is a machine-readable format that tells you if a known vulnerability and is actually exploitable in your product. It reduces false positives, helps prioritize real risks.

TuxCare provides VEX for Python Libraries ELS versions: [security.tuxcare.com/vex/cyclonedx/els_lang_python/](https://security.tuxcare.com/vex/cyclonedx/els_lang_python/).

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Python Libraries from TuxCare versions:

<TableTabs label="Select library:">

  <template #aiohttp>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2024-52304 | High     | 3.8.5               | 3.8.5.post2+tuxcare |
| CVE-2023-49082 | Medium   | 3.8.5               | 3.8.5.post1+tuxcare |
| CVE-2023-47627 | High     | 3.8.1               | 3.8.1.post1+tuxcare |
| CVE-2023-47627 | High     | 3.8.5               | 3.8.5.post1+tuxcare |
| CVE-2023-37276 | High     | 3.8.4               | 3.8.4.post1+tuxcare |

  </template>

  <template #certifi>

| CVE ID         | Severity | Vulnerable Versions | Safe Version             |
| :------------: | :------: | :-----------------: | :----------------------: |
| CVE-2024-39689 | High     | 2022.12.7           | 2022.12.07.post2+tuxcare |
| CVE-2024-39689 | High     | 2023.7.22           | 2023.07.22.post1+tuxcare |
| CVE-2023-37920 | Critical | 2021.10.8           | 2021.10.08.post2+tuxcare |
| CVE-2023-37920 | Critical | 2022.12.7           | 2022.12.07.post2+tuxcare |
| CVE-2022-23491 | High     | 2021.10.8           | 2021.10.08.post2+tuxcare |

  </template>

  <template #cryptography>

| CVE ID              | Severity | Vulnerable Versions | Safe Version         |
| :-----------------: | :------: | :-----------------: | :------------------: |
| CVE-2024-26130      | High     | 41.0.7              | 41.0.7.post1+tuxcare |
| CVE-2024-26130      | High     | 42.0.0              | 42.0.0.post1+tuxcare |
| CVE-2024-12797      | Medium   | 3.4.8               | 3.4.8.post3+tuxcare  |
| CVE-2024-12797      | Medium   | 42.0.0              | 42.0.0.post1+tuxcare |
| CVE-2024-12797      | Medium   | 42.0.8              | 42.0.8.post1+tuxcare |
| CVE-2024-12797      | Medium   | 43.0.1              | 43.0.1.post1+tuxcare |
| CVE-2024-12797      | Medium   | 43.0.3              | 43.0.3.post1+tuxcare |
| CVE-2023-50782      | High     | 3.4.8               | 3.4.8.post1+tuxcare  |
| CVE-2023-50782      | High     | 41.0.7              | 41.0.7.post1+tuxcare |
| CVE-2023-49083      | High     | 3.4.8               | 3.4.8.post4+tuxcare  |
| CVE-2023-23931      | Medium   | 3.4.8               | 3.4.8.post1+tuxcare  |
| CVE-2023-3446       | Medium   | 3.4.8               | 3.4.8.post2+tuxcare  |
| GHSA-h4gh-qq45-vh27 | Medium   | 42.0.8              | 42.0.8.post1+tuxcare |

  </template>

  <template #deepdiff>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2025-58367 | Critical | 6.2.3               | 6.2.3.post1+tuxcare |

  </template>

  <template #dnspython>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2023-29483 | High     | 2.3.0               | 2.3.0.post1+tuxcare |

  </template>

  <template #flask-cors>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2024-6866  | High     | 4.0.2               | 4.0.2.post1+tuxcare |

  </template>

  <template #future>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2025-50817 | Medium | 1.0.0               | 1.0.0.post1+tuxcare |

  </template>

  <template #gitpython>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2024-22190 | High     | 3.1.31              | 3.1.31.post1+tuxcare |
| CVE-2023-41040 | Medium   | 3.1.31              | 3.1.31.post1+tuxcare |
| CVE-2023-40590 | High     | 3.1.31              | 3.1.31.post1+tuxcare |

  </template>

  <template #gunicorn>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2024-7923  | Critical | 20.1.0              | 20.1.0.post2+tuxcare |
| CVE-2024-7923  | Critical | 21.2.0              | 21.2.0.post3+tuxcare |
| CVE-2024-6827  | High     | 20.1.0              | 20.1.0.post1+tuxcare |
| CVE-2024-6827  | High     | 21.2.0              | 21.2.0.post2+tuxcare |
| CVE-2024-6827  | High     | 22.0.0              | 22.0.0.post1+tuxcare |
| CVE-2024-1135  | High     | 20.0.4              | 20.0.4.post1+tuxcare |
| CVE-2024-1135  | High     | 20.1.0              | 20.1.0.post1+tuxcare |
| CVE-2024-1135  | High     | 21.2.0              | 21.2.0.post2+tuxcare |
| CVE-2024-1135  | High     | 22.0.0              | 22.0.0.post1+tuxcare |

  </template>
  <template #h11>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2025-43859 | Critical | 0.9.0               | 0.9.0.post1+tuxcare  |

  </template>

  <template #httpx>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2021-41945 | Critical | 0.22.0              | 0.22.0.post1+tuxcare |

  </template>

  <template #idna>

| CVE ID        | Severity | Vulnerable Versions | Safe Version       |
| :-----------: | :------: | :-----------------: | :----------------: |
| CVE-2024-3651 | High     | 2.1                 | 2.1.post1+tuxcare  |
| CVE-2024-3651 | High     | 2.8                 | 2.8.post1+tuxcare  |
| CVE-2024-3651 | High     | 2.10                | 2.10.post1+tuxcare |
| CVE-2024-3651 | High     | 3.6                 | 3.6.post1+tuxcare  |

  </template>

  <template #jaraco-context>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2026-23949 | N/A     | 5.3.0               | 5.3.0.post1+tuxcare  |

  </template>

  <template #jinja2>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2025-27516 | Medium   | 2.11.3              | 2.11.3.post2+tuxcare |
| CVE-2024-56326 | Medium   | 2.11.3              | 2.11.3.post2+tuxcare |
| CVE-2024-56326 | Medium   | 3.0.3               | 3.0.3.post1+tuxcare  |
| CVE-2024-56201 | Medium   | 3.0.3               | 3.0.3.post1+tuxcare  |
| CVE-2024-34064 | Medium   | 2.11.3              | 2.11.3.post2+tuxcare |
| CVE-2024-22195 | Medium   | 2.11.3              | 2.11.3.post2+tuxcare |
| CVE-2024-22195 | Medium   | 3.0.3               | 3.0.3.post1+tuxcare |

  </template>

  <template #mlflow>

| CVE ID        | Severity | Vulnerable Versions | Safe Version          |
| :-----------: | :------: | :-----------------: | :-------------------: |
| CVE-2024-6838 | Medium   | 2.22.4              | 2.22.4.post1+tuxcare  |
| CVE-2024-156  | Medium   | 2.22.4              | 2.22.4.post1+tuxcare  |

  </template>

  <template #mysql-connector-python>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2024-21272 | High     | 8.4.0               | 8.4.0.post1+tuxcare |

  </template>

  <template #orjson>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2024-27454 | High     | 3.8.5               | 3.8.5.post1+tuxcare |

  </template>

  <template #pandas>

| CVE ID        | Severity | Vulnerable Versions | Safe Version        |
| :-----------: | :------: | :-----------------: | :-----------------: |
| CVE-2024-9880 | N/A      | 2.2.0               | 2.2.0.post1+tuxcare |
| CVE-2024-9880 | N/A      | 2.2.2               | 2.2.2.post1+tuxcare |

  </template>

  <template #paramiko>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2023-48795 | Medium   | 3.0.0               | 3.0.0.post1+tuxcare |

  </template>

  <template #pdfkit>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2025-26240 | High     | 0.6.1               | 0.6.1.post1+tuxcare |

  </template>

  <template #pillow>

| CVE ID              | Severity | Vulnerable Versions | Safe Version         |
| :-----------------: | :------: | :-----------------: | :------------------: |
| CVE-2025-48379      | High     | 11.2.1              | 11.2.1.post1+tuxcare |
| CVE-2024-28219      | Medium   | 9.4.0               | 9.4.0.post3+tuxcare  |
| CVE-2024-28219      | Medium   | 9.5.0               | 9.5.0.post2+tuxcare  |
| CVE-2023-50447      | High     | 8.4.0               | 8.4.0.post1+tuxcare  |
| CVE-2023-50447      | High     | 9.4.0               | 9.4.0.post2+tuxcare  |
| CVE-2023-50447      | High     | 9.5.0               | 9.5.0.post1+tuxcare  |
| CVE-2023-44271      | High     | 9.4.0               | 9.4.0.post1+tuxcare  |
| CVE-2023-44271      | High     | 9.5.0               | 9.5.0.post2+tuxcare  |
| CVE-2023-4863       | High     | 9.4.0               | 9.4.0.post2+tuxcare  |
| CVE-2023-4863       | High     | 9.5.0               | 9.5.0.post1+tuxcare  |
| CVE-2022-45198      | High     | 8.4.0               | 8.4.0.post1+tuxcare  |
| CVE-2022-24303      | Critical | 8.4.0               | 8.4.0.post1+tuxcare  |
| CVE-2022-22817      | Critical | 8.4.0               | 8.4.0.post1+tuxcare  |
| GHSA-56pw-mpj4-fxww | High     | 9.4.0               | 9.4.0.post2+tuxcare  |

  </template>

  <template #protobuf>

| CVE ID        | Severity | Vulnerable Versions | Safe Version         |
| :-----------: | :------: | :-----------------: | :------------------: |
| CVE-2025-4565 | Medium   | 4.24.3              | 4.24.3.post1+tuxcare |

  </template>

  <template #pydantic>

| CVE ID        | Severity | Vulnerable Versions | Safe Version         |
| :-----------: | :------: | :-----------------: | :------------------: |
| CVE-2024-3772 | High     | 1.10.5              | 1.10.5.post1+tuxcare |

  </template>

  <template #pyjwt>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2025-45768 | High     | 2.8.0               | 2.8.0.post1+tuxcare  |
| CVE-2025-45768 | High     | 2.10.1              | 2.10.1.post1+tuxcare |
| CVE-2022-29217 | High     | 1.7.1               | 1.7.1.post1+tuxcare  |
| CVE-2022-29217 | High     | 2.3.0               | 2.3.0.post1+tuxcare  |

  </template>

  <template #pymongo>

| CVE ID        | Severity | Vulnerable Versions | Safe Version         |
| :-----------: | :------: | :-----------------: | :------------------: |
| CVE-2024-5629 | High     | 3.13.0              | 3.13.0.post1+tuxcare |

  </template>

  <template #pymysql>

| CVE ID        | Severity | Vulnerable Versions | Safe Version         |
| :-----------: | :------: | :-----------------: | :------------------: |
| CVE-2024-36039| Medium   | 0.10.1              | 0.10.1.post1+tuxcare |

  </template>

  <template #pypdf>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2025-62708 | High     | 5.9.0               | 5.9.0.post3+tuxcare |
| CVE-2025-62707 | High     | 5.9.0               | 5.9.0.post2+tuxcare |
| CVE-2025-55197 | High     | 5.9.0               | 5.9.0.post1+tuxcare |

  </template>

  <template #python-jose>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2024-33664 | Medium   | 3.3.0               | 3.3.0.post1+tuxcare |

  </template>

  <template #python-multipart>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2024-24762 | High     | 0.0.6               | 0.0.6.post1+tuxcare |

  </template>

  <template #pyyaml>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2020-14343 | Critical | 3.13                | 3.13.post1+tuxcare  |
| CVE-2020-14343 | Critical | 5.3.1               | 5.3.1.post1+tuxcare |
| CVE-2017-18342 | Critical | 3.13                | 3.13.post1+tuxcare  |

  </template>

  <template #redis-py>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2023-28859 | Medium   | 4.5.1               | 4.5.1.post1+tuxcare |
| CVE-2023-28858 | Low      | 4.5.1               | 4.5.1.post1+tuxcare |

  </template>

  <template #requests>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2024-47081 | Medium   | 2.32.3              | 2.32.3.post1+tuxcare |
| CVE-2024-35195 | Medium   | 2.31.0              | 2.31.0.post1+tuxcare |
| CVE-2023-32681 | Medium   | 2.25.1              | 2.25.1.post1+tuxcare |
| CVE-2023-32681 | Medium   | 2.30.0              | 2.30.0.post1+tuxcare |

  </template>

  <template #scikit-learn>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2024-5206  | Medium   | 1.0.2               | 1.0.2.post1+tuxcare  |

  </template>

  <template #setuptools>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2025-47273 | High     | 68.0.0              | 68.0.0.post1+tuxcare |
| CVE-2025-47273 | High     | 70.3.0              | 70.3.0.post1+tuxcare |
| CVE-2025-47273 | High     | 75.0.0              | 75.0.0.post1+tuxcare |
| CVE-2025-47273 | High     | 75.8.0              | 75.8.0.post1+tuxcare |
| CVE-2024-6345  | High     | 65.5.1              | 65.5.1.post1+tuxcare |
| CVE-2024-6345  | High     | 68.0.0              | 68.0.0.post1+tuxcare |

  </template>

  <template #torch>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2025-32434 | Medium   | 1.13.1              | 1.13.1.post1+tuxcare |
| CVE-2024-31583 | High     | 1.13.1              | 1.13.1.post2+tuxcare |
| CVE-2024-31580 | Medium   | 1.13.1              | 1.13.1.post2+tuxcare |

  </template>

  <template #tqdm>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2024-34062 | Medium   | 4.66.1              | 4.66.1.post1+tuxcare |

  </template>

  <template #twisted>

| CVE ID         | Severity | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----------------: | :------------------: |
| CVE-2024-41810 | Medium   | 20.3.0              | 20.3.0.post4+tuxcare |
| CVE-2024-41671 | High     | 20.3.0              | 20.3.0.post4+tuxcare |
| CVE-2023-46137 | Medium   | 20.3.0              | 20.3.0.post4+tuxcare |
| CVE-2022-21712 | High     | 20.3.0              | 20.3.0.post4+tuxcare |

  </template>

  <template #urllib3>

| CVE ID         | Severity | Vulnerable Versions | Safe Version          |
| :------------: | :------: | :-----------------: | :-------------------: |
| CVE-2025-50181 | Medium   | 1.26.20             | 1.26.20.post1+tuxcare |
| CVE-2024-37891 | Medium   | 1.26.4              | 1.26.4.post2+tuxcare  |
| CVE-2023-45803 | Medium   | 1.25.11             | 1.25.11.post2+tuxcare |
| CVE-2023-45803 | Medium   | 1.26.4              | 1.26.4.post1+tuxcare  |
| CVE-2021-33503 | High     | 1.25.11             | 1.25.11.post2+tuxcare |

  </template>

  <template #uvicorn>

| CVE ID        | Severity | Vulnerable Versions | Safe Version         |
| :-----------: | :------: | :-----------------: | :------------------: |
| CVE-2020-7695 | High     | 0.11.6              | 0.11.6.post1+tuxcare |
| CVE-2020-7694 | Low      | 0.11.6              | 0.11.6.post1+tuxcare |

  </template>

  <template #waitress>

| CVE ID         | Severity | Vulnerable Versions | Safe Version        |
| :------------: | :------: | :-----------------: | :-----------------: |
| CVE-2024-49769 | High     | 2.1.2               | 2.1.2.post2+tuxcare |
| CVE-2024-49768 | Medium   | 2.1.2               | 2.1.2.post2+tuxcare |

  </template>

  <template #websockets>

| CVE ID         | Severity | Vulnerable Versions | Safe Version      |
| :------------: | :------: | :-----------------: | :---------------: |
| CVE-2021-33880 | Medium   | 8.1                 | 8.1.post1+tuxcare |

  </template>

</TableTabs>

**N/A (Not Available)** means that the National Vulnerability Database (NVD) has registered this CVE, but an official CVSS severity score has not yet been assigned.

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
