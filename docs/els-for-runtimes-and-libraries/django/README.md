# Django

Endless Lifecycle Support (ELS) for Runtimes & Libraries from TuxCare provides security fixes for Django. This allows you to continue running your Django applications without vulnerability concerns, even after official support has ended.

## Supported Django Versions

* **Django** 3.2.25, 4.0, 5.0, 5.0.1, 5.0.2, 5.1, 5.1.4, 5.1.9

  **Supported architecture:** x86_64.

Other versions and architectures upon request.

## Connection to ELS for Django Repository

This guide outlines the steps needed to integrate the TuxCare ELS for Django repository.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for Django repository. Anonymous access is disabled. To receive the credentials please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Set Up ELS for Django

To use TuxCare's ELS for Django, follow one of the options below:

#### Option 1: Install a Package with ELS Repository via Command Line

You can install or upgrade a package directly using the ELS repository with your credentials:

<CodeWithCopy>

```text
pip install --upgrade \
  -i https://<username>:<password>@nexus.repo.tuxcare.com/repository/els_python/simple \
  django
```

</CodeWithCopy>

**Replace `<username>` and `<password>` with the credentials provided by sales.** 

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
   pip install --upgrade django
   ```

   </CodeWithCopy>

   Or install a specific patched TuxCare version, for example:

   <CodeWithCopy>

   ```text
   pip install django==3.2.25.post1+tuxcare
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
   pip install django==3.2.25.post1+tuxcare
   ```

   </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for Django from TuxCare versions:

| CVE ID              | Severity | Library | Vulnerable Versions | Safe Version |
| :-----------------: | :------: | :----: | :----------------: | :----------: |
| CVE-2025-57833      | High     | django | 3.2.25             | 3.2.25.post1+tuxcare |
| CVE-2024-56374      | Medium   | django | 5.1.4              | 5.1.4.post1+tuxcare |
| CVE-2024-42005      | High     | django | 5.0                | 5.0.post5+tuxcare |
| CVE-2024-41990      | High     | django | 5.0                | 5.0.post5+tuxcare |
| CVE-2024-41989      | High     | django | 5.0.1              | 5.0.1.post3+tuxcare |
| CVE-2024-39614      | N/A      | django | 5.0                | 5.0.post2+tuxcare |
| CVE-2024-39330      | N/A      | django | 5.0                | 5.0.post4+tuxcare |
| CVE-2024-39329      | N/A      | django | 5.0.1              | 5.0.1.post2+tuxcare |
| CVE-2024-27351      | Medium   | django | 5.0.2              | 5.0.2.post1+tuxcare |
| CVE-2024-24680      | High     | django | 5.0.1              | 5.0.1.post1+tuxcare |
| CVE-2023-24580      | High     | django | 4.0                | 4.0.post1+tuxcare |
| CVE-2023-23969      | High     | django | 4.0                | 4.0.post1+tuxcare |
| CVE-2022-41323      | High     | django | 5.1                | 5.1.post1+tuxcare |
| CVE-2022-41323      | High     | django | 4.0                | 4.0.post2+tuxcare |
| CVE-2022-36359      | High     | django | 4.0                | 4.0.post3+tuxcare |
| CVE-2022-34265      | Critical | django | 4.0                | 4.0.post3+tuxcare |
| CVE-2022-28347      | Critical | django | 4.0                | 4.0.post3+tuxcare |
| CVE-2022-28346      | Critical | django | 4.0                | 4.0.post4+tuxcare |
| CVE-2021-45452      | Medium   | django | 4.0                | 4.0.post4+tuxcare |
| CVE-2021-45116      | High     | django | 4.0                | 4.0.post2+tuxcare |
| CVE-2021-45115      | High     | django | 4.0                | 4.0.post4+tuxcare |

**N/A (Not Available)** mean that the National Vulnerability Database (NVD) has registered this CVE, but an official CVSS severity score has not yet been assigned.

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
