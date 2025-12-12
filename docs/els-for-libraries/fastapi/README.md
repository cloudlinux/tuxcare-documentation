# FastAPI

Endless Lifecycle Support (ELS) for Libraries from TuxCare provides security fixes for FastAPI. This allows you to continue running your FastAPI applications without vulnerability concerns, even after official support has ended.

## Supported FastAPI Versions

* **FastAPI** 0.63.0, 0.104.1

Other versions upon request.

## Connection to ELS for FastAPI Repository

This guide outlines the steps needed to integrate the TuxCare ELS for FastAPI repository.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for FastAPI repository. Anonymous access is disabled. To receive the credentials please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Set Up ELS for FastAPI

To use TuxCare's ELS for FastAPI, follow one of the options below:

#### Option 1: Install a Package with ELS Repository via Command Line

You can install or upgrade a package directly using the ELS repository with your credentials:

<CodeWithCopy>

```text
pip install --upgrade \
  -i https://<username>:<password>@nexus.repo.tuxcare.com/repository/els_python/simple \
  fastapi
```

</CodeWithCopy>

**Replace `<username>` and `<password>` - with the credentials provided by sales.**

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
   pip install --upgrade fastapi
   ```

   </CodeWithCopy>

   Or install a specific patched TuxCare version, for example:

   <CodeWithCopy>

   ```text
   pip install fastapi==0.63.0.post1+tuxcare
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
   pip install fastapi==0.63.0.post1+tuxcare
   ```

   </CodeWithCopy>

## Upgrading to a Newer TuxCare Version

To upgrade to a newer TuxCare release (e.g., from `version.post1+tuxcare` to `version.post2+tuxcare`) use the same installation method you used above and specify the newer package version.

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for FastAPI from TuxCare versions:

| CVE ID         | Severity | Library | Vulnerable Versions | Safe Version          |
| :------------: | :------: | :-----: | :-----------------: | :-------------------: |
| CVE-2024-24762 | High     | fastapi | 0.63.0              | 0.63.0.post2+tuxcare  |
| CVE-2024-24762 | High     | fastapi | 0.104.1             | 0.104.1.post1+tuxcare |
| CVE-2021-32677 | High     | fastapi | 0.63.0              | 0.63.0.post1+tuxcare  |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
