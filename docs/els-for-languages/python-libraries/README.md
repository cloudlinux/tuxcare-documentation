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


