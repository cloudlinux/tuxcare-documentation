# NumPy

Endless Lifecycle Support (ELS) for Libraries from TuxCare provides security fixes for NumPy. This allows you to continue running your NumPy applications without vulnerability concerns, even after official support has ended.

## Supported NumPy Versions

* **NumPy** 1.15.4, 1.16.0

  **Supported architecture:** x86_64.

Other versions and architectures upon request.

## Connection to ELS for NumPy Repository

This guide outlines the steps needed to integrate the TuxCare ELS for NumPy repository.

### Step 1: Get user credentials

You need a username and password in order to use TuxCare ELS for NumPy repository. Anonymous access is disabled. To receive the credentials please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Set Up ELS for NumPy

To use TuxCare's ELS for NumPy, follow one of the options below:

#### Option 1: Install a Package with ELS Repository via Command Line

You can install or upgrade a package directly using the ELS repository with your credentials:

<CodeWithCopy>

```text
pip install --upgrade \
  -i https://<username>:<password>@nexus.repo.tuxcare.com/repository/els_python/simple \
  numpy
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
   pip install --upgrade numpy
   ```

   </CodeWithCopy>

   Or install a specific patched TuxCare version, for example:

   <CodeWithCopy>

   ```text
   pip install numpy==1.15.4.post2+tuxcare
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
   pip install numpy==1.15.4.post2+tuxcare
   ```

   </CodeWithCopy>

## Resolved CVEs

Fixes for the following vulnerabilities are available in ELS for NumPy from TuxCare versions:

| CVE ID         | Severity | Library | Vulnerable Versions | Safe Version         |
| :------------: | :------: | :-----: | :-----------------: | :------------------: |
| CVE-2021-34141 | Medium   | numpy   | < 1.22.0            | 1.15.4.post2+tuxcare |
| CVE-2019-6446  | Critical | numpy   | <= 1.16.0           | 1.16.0.post1+tuxcare<br>1.15.4.post1+tuxcare |

If you are interested in the TuxCare Endless Lifecycle Support, contact [sales@tuxcare.com](mailto:sales@tuxcare.com).
