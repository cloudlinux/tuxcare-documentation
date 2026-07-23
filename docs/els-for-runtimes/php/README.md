# PHP

Endless Lifecycle Support (ELS) for PHP from TuxCare provides security fixes for PHP versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-PHP

alt-php is a component provided by TuxCare designed for managing PHP versions on web servers and enabling users to choose PHP versions for their websites.

Here are the key features and characteristics of alt-php:

* **Multiple PHP Versions** - alt-php allows the installation and usage of various PHP versions on a single web server. This enables users to select the PHP version that best suits their web applications.

* **User Segmentation** - alt-php allows hosting providers and web server administrators to provide different PHP versions for different users. Each user can choose the PHP version that suits their website.

* **Enhanced Compatibility** - alt-php is designed to ensure maximum compatibility with various web applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of PHP applications.

* **Updates and Support** - CloudLinux provides regular updates for alt-php, including bug fixes, performance improvements, and updates for new PHP versions. This helps ensure the security and currency of PHP usage.

* **Management Tools** - alt-php usually comes with a set of management tools, such as PHP Selector, allowing users to manage PHP versions and enable/disable various PHP extensions.

alt-php provides a more flexible and convenient environment for working with different PHP versions on a single server, which is particularly useful in a web hosting environment where multiple users have varying requirements for PHP versions for their web applications.

## Supported OS and PHP versions

<TableTabs>

  <template #Active_Support>

| OS                                                                       | Package Type | OS Version                        | PHP versions                                                              |
| :----------------------------------------------------------------------: | :----------: | :-------------------------------: | :-----------------------------------------------------------------------: |
| EL 7 ( Amazon Linux 2, CentOS, CloudLinux, Oracle Linux, etc.)           | RPM          | 7.x                               | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2      |
| EL 8 ( AlmaLinux, CentOS, CentOS Stream, CloudLinux, Oracle Linux, etc.) | RPM          | 8.x                               | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2      |
| EL 9 ( AlmaLinux, CentOS, CloudLinux, Oracle Linux, etc.)                | RPM          | 9.x                               | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2           |
| EL 10 ( AlmaLinux, CloudLinux, Oracle Linux, etc.)                       | RPM          | 10.x                              | 5.3, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2                          |
| Ubuntu                                                                   | DEB          | 16.04                             | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2                               |
| Ubuntu                                                                   | DEB          | 18.04, 20.04, 22.04, 24.04        | 5.2, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2                          |
| Debian                                                                   | DEB          | 10, 11, 12                        | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2                               |
| Debian                                                                   | DEB          | 13                                | 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2           |
| Alpine Linux                                                             | APK          | 3.22, 3.23                        | 7.3, 7.4, 8.0, 8.1                                                        |
| Windows                                                                  | -            | Windows Server 2019, 2022, 2025   | 5.2, 5.4, 5.6, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2                               |

**Supported architectures:**

* x86_64 — all supported Linux OSes
* aarch64/arm64 — Debian 12 and 13, Alpine Linux 3.22 and later
* Windows — x64 (64-bit) and x86 (32-bit) builds

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

  </template>

  <template #End_Of_Life>

TuxCare provides additional security support for PHP versions after the end of support from the vendor.

*EOL — end of life, SST — security support time*

| Version |  Released  | EOL by vendor | SST by vendor (years) |    EOL by CloudLinux    | SST by CloudLinux after vendor's EOL (years) |
|:-------:|:----------:|:-------------:|:---------------------:|:-----------------------:|:--------------------------------------------:|
|   4.4   | 07.11.2005 |  08.07.2008   |          2.7          | [01.07.2023](https://blog.cloudlinux.com/php-4.4-end-of-life-0) | 14.9 |
|   5.1   | 23.11.2005 |  24.08.2006   |          0.8          | [01.04.2024](https://blog.cloudlinux.com/php-5.1-end-of-life)   | 17.6 |
|   5.2   | 01.11.2006 |  06.01.2011   |          4.2          | 
|   5.3   | 29.06.2009 |  14.08.2014   |          5.1          |
|   5.4   | 29.02.2012 |  14.09.2015   |          3.5          |
|   5.5   | 19.06.2013 |  21.07.2016	 |          3.1          |
|   5.6   |	27.08.2014 |  31.12.2018 	 |          4.3          |
|   7.0   | 12.01.2015 |  10.01.2019 	 |          3.9          |
|   7.1   | 30.11.2016 |  01.12.2019 	 |          3.0          |
|   7.2   | 28.11.2017 |  30.11.2020 	 |          3.0          |
|   7.3   | 04.12.2018 |  06.12.2021   |          3.0          |
|   7.4   | 26.11.2019 |  28.11.2022	 |          3.0          |
|   8.0   | 24.11.2020 |  26.11.2023	 |          3.0          |
|   8.1   | 23.11.2021 |  25.11.2024	 |          3.0          |
|   8.2   | 08.12.2022 |  08.12.2025	 |          3.0          |

  </template>

</TableTabs>

## Installation on Linux

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server
* **Amazon Linux 2-specific.** Before installing `alt-php`, make sure `libvpx` is installed. Amazon Linux 2 provides two versions of libvpx: 1.9 (the default) and 1.3. `alt-php` requires 1.3 for compatibility with EL 7 systems like CentOS 7:

  ```
  sudo yum install libvpx-1.3.0
  ```

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   <CodeTabs :tabs="[
     { title: 'RPM', content: `wget https://repo.alt.tuxcare.com/alt-php-els/install-els-alt-php-rpm-repo.sh` },
     { title: 'DEB', content: `wget https://repo.alt.tuxcare.com/alt-php-els/install-els-alt-php-deb-repo.sh` },
     { title: 'APK', content: `wget https://repo.alt.tuxcare.com/alt-php-els/install-els-alt-php-apk-repo.sh` }
   ]" />

2. Run the installer script with your license key (see [Prerequisites](#prerequisites) above)

   The script registers the server with CLN, adds the PGP key and repository.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-php-rpm-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'DEB', content: `bash install-els-alt-php-deb-repo.sh --license-key XXX-XXXXXXXXXXXX` },
     { title: 'APK', content: `sh install-els-alt-php-apk-repo.sh --license-key XXX-XXXXXXXXXXXX` }
   ]" />

   :::tip Imunify customers
   If [Imunify360](https://docs.imunify360.com/) is installed on the server and has a valid license, you can install alt-php (HardenedPHP) without a separate ELS license key. Run the installer with the `-i` (`--imunify`) option instead of `--license-key` — your Imunify access credentials are used automatically for repository access:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `sh install-els-alt-php-rpm-repo.sh --imunify` },
     { title: 'DEB', content: `bash install-els-alt-php-deb-repo.sh --imunify` },
     { title: 'APK', content: `sh install-els-alt-php-apk-repo.sh --imunify` }
   ]" />
   :::

3. Install a PHP version

   Each version can be installed individually or all versions at once.

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum groupinstall alt-php73` },
     { title: 'DEB', content: `apt-get install alt-php73-meta` },
     { title: 'APK', content: `apk add alt-php73` }
   ]" />

   To install all versions at the same time:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `yum groupinstall alt-php` },
     { title: 'DEB', content: `apt-get install alt-php` },
     { title: 'APK', content: `apk add alt-php` }
   ]" />

4. Verify the installation

   Check that the desired PHP version is installed:

   <CodeTabs :tabs="[
     { title: 'RPM', content: `rpm -qa | grep alt-php` },
     { title: 'DEB', content: `dpkg -l | grep alt-php` },
     { title: 'APK', content: `apk info | grep alt-php` }
   ]" />

</ELSSteps>

### Useful Commands and Usage

When you deploy an updated version of PHP through PHP ELS, using your system's regular update tool (yum, dnf, apt), the new version will be installed under `/opt/alt/php[version]/`. This means that all modules, configurations and additional files pertaining to this version will be contained inside that path. Different versions of PHP will each have their own path and can coexist without issues on the same system. Below you will find the location of all the relevant files, should you want to make any changes.

<TableTabs>

  <template #Check_current_version_of_alt-php_packages>

To check whether the package is installed and see its current version, use the following command based on your OS:

  <CodeTabs :tabs="[
    { title: 'RPM', content: `sudo yum list installed | grep php` },
    { title: 'DEB', content: `dpkg -l | grep php` },
    { title: 'APK', content: `apk info -v | grep alt-php` }
  ]" />

  </template>

  <template #List_available_groups>

To find out which groups/meta-packages are available for installation:

  <CodeTabs :tabs="[
    { title: 'RPM', content: `sudo yum group list` },
    { title: 'DEB', content: `apt list -a | grep alt-php` },
    { title: 'APK', content: `apk search alt-php` }
  ]" />

To get a list of packages of a specific group or meta package:

  <CodeTabs :tabs="[
    { title: 'RPM', content: `sudo yum groupinfo alt-phpXY` },
    { title: 'DEB', content: `apt-cache showpkg alt-phpXY` },
    { title: 'APK', content: `apk info -R alt-phpXY` }
  ]" />

Replace `XY` with a version of alt-php.

  </template>

  <template #Update_alt-php>

1. Check for updates:

    <CodeTabs :tabs="[
      { title: 'RPM', content: `sudo yum check-update` },
      { title: 'DEB', content:
      `sudo apt-get update
      apt list --upgradable` },
      { title: 'APK', content:
      `sudo apk update
      apk list --upgradable` }
    ]" />

2. Update packages:

   * Update all groups/meta-packages with names starting with "alt-php":

       <CodeTabs :tabs="[
         { title: 'RPM', content: `sudo yum update alt-php*` },
         { title: 'DEB', content: `sudo apt-get upgrade alt-php*` },
         { title: 'APK', content: `sudo apk upgrade 'alt-php*'` }
       ]" />

   * Update a specific version:

       <CodeTabs :tabs="[
         { title: 'RPM', content: `sudo yum groupupdate alt-phpXY` },
         { title: 'DEB', content: `sudo apt-get upgrade alt-phpXY` },
         { title: 'APK', content: `sudo apk upgrade alt-phpXY` }
       ]" />

     Replace `XY` with a version of alt-php.

  </template>

  <template #Search_for_packages>

  <CodeTabs :tabs="[
    { title: 'RPM', content: `sudo yum search alt-package-name` },
    { title: 'DEB', content: `sudo apt search alt-package-name` },
    { title: 'APK', content: `apk search alt-package-name` }
  ]" />

Replace `alt-package-name` with the specific name of the package you are looking for.

  </template>

  <template #File_locations>

**Bin files:** `ls -l /opt/alt/phpXY/usr/bin/`

**Modules:** `ls /opt/alt/phpXY/usr/lib64/php/modules/`

**Config files:** `/opt/alt/phpXY/etc/php.d.all/`

**default.ini:** `/opt/alt/phpXY/etc/php.d/default.ini`

**Run PHP CLI:** `/opt/alt/phpXY/usr/bin/php helloworld.php`

**List enabled modules:** `/opt/alt/php73/usr/bin/php -m`

  </template>

  <template #Enabling_a_module>

**Option 1: Through `default.ini`**

1. Open `/opt/alt/phpXY/etc/php.d/default.ini` in an editor.
2. Remove `;` to enable an extension, add `;` to disable.
3. If the extension line is missing, add: `extension=extension_name.so`

**Option 2: Through configuration files**

1. Locate the extension's `.ini` file in `/opt/alt/phpXY/etc/php.d.all/`
2. Copy it to `/opt/alt/phpXY/etc/php.d/`

  :::warning
  If the same extension is present in multiple `.ini` files within `/opt/alt/phpXY/etc/php.d/`, you may see warnings in PHP logs.
  :::

**Option 3: Through the CLI**

```text
/opt/alt/php73/usr/bin/php -d "extension=igbinary.so" -m
```

  </template>

  <template #Increase_upload_or_memory_limits>

1. Open the `default.ini` file in an editor.
2. Set the limits as needed:

    ```text
    upload_max_filesize=40M
    post_max_size=40M
    memory_limit=256M
    ```

  </template>

</TableTabs>

## Installation on Windows

TuxCare provides two ways to install ELS PHP on Windows: **manually** by downloading and configuring PHP from the repository, or using the **TuxCare Installer** — a graphical tool that automates the process.

<ELSPrerequisites id="windows-prerequisites">

* Secure download link (tokenized URL) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com)
* Administrator access to the Windows system

</ELSPrerequisites>

:::warning Troubleshooting: browser credential prompts
Always include a **trailing slash** at the end of your tokenized URL (e.g. `https://TOKEN@windows.tuxcare.com/php/`). Without it, the server issues a redirect that strips the authentication token, causing the browser to prompt for credentials on every page. With the trailing slash, credentials are cached and subfolder navigation works as expected.

<details>
<summary>How to use a tokenized URL</summary>

Your tokenized URL provides access to the TuxCare PHP for Windows repository. It contains an authentication token embedded in the URL:

```text
https://<YOUR-TOKEN>@windows.tuxcare.com/php/
```

**Always include the trailing slash.** This applies to all directory URLs, including version subfolders:

- ✅ `https://TOKEN@windows.tuxcare.com/php/` — works correctly
- ❌ `https://TOKEN@windows.tuxcare.com/php` — may prompt for credentials

**Use a private browsing window.** We recommend opening the tokenized URL in a private (incognito) window to ensure a clean session with no cached credentials that might interfere with token authentication.

- **Chrome / Edge**: `Ctrl+Shift+N` (Windows) or `Cmd+Shift+N` (macOS)
- **Firefox**: `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (macOS)

**Browsing subdirectories.** Once you open the URL with a trailing slash in a private window, the browser caches your credentials for the session. If you are still prompted when entering a subdirectory, manually insert the token into the URL — prepend `<YOUR-TOKEN>@` before `windows.tuxcare.com` in the address bar.

**Example walkthrough:**

1. Open the repository root:
   ```text
   https://<YOUR-TOKEN>@windows.tuxcare.com/php/
   ```
2. Click on `7.4.33/`. If the browser navigates to `https://windows.tuxcare.com/php/7.4.33/` and prompts for a password, edit the address bar and add the token:
   ```text
   https://<YOUR-TOKEN>@windows.tuxcare.com/php/7.4.33/
   ```
3. Click on `tuxcare.els8/`. If prompted again, add the token to the URL:
   ```text
   https://<YOUR-TOKEN>@windows.tuxcare.com/php/7.4.33/tuxcare.els8/
   ```
4. You see the ZIP files listed. Click on the file to download it directly.

**Downloading files directly.** If you already know which file you need, skip browsing and build the full URL from the repository root, version, release folder, and file name:

```text
https://<YOUR-TOKEN>@windows.tuxcare.com
  /php/<version>/tuxcare.els<N>/<filename>.zip
```

PowerShell:

```text
$base = "https://<YOUR-TOKEN>@windows.tuxcare.com"
$file = "/php/7.4.33/tuxcare.els8/" +
  "php-7.4.33-tuxcare-els8-nts-Win32-vc15-x64-signed.zip"
Invoke-WebRequest -Uri "$base$file" -OutFile "php-7.4.33.zip"
```

curl:

```text
BASE="https://<YOUR-TOKEN>@windows.tuxcare.com"
FILE="/php/7.4.33/tuxcare.els8/\
php-7.4.33-tuxcare-els8-nts-Win32-vc15-x64-signed.zip"
curl -O "${BASE}${FILE}"
```

</details>
<br>
:::

<TableTabs>

<template #Manual>

<ELSSteps>

1. Open the repository in your browser

   Navigate to your tokenized URL (see [Prerequisites](#windows-prerequisites) above):

   ```text
   https://<YOUR-TOKEN>@windows.tuxcare.com/php/
   ```

   You will see a directory listing of all available PHP versions (e.g. `5.6.40/`, `7.4.33/`, `8.1.33/`). Click on the version you need.

2. Choose the correct archive

   Inside each version folder you will find subfolders named `tuxcare.elsN/`, where `N` is the TuxCare release number. Always select the subfolder with the **highest** number, as it contains the latest security updates. Each archive follows this naming pattern:

   ```text
   php-<version>-tuxcare-els<N>-<thread>-Win32-<vc>-<arch>-signed.zip
   ```

   Select the archive that matches your environment:

   | Component | Options | How to choose |
   | --- | --- | --- |
   | **Thread safety** | `nts` (Non-Thread Safe) or `ts` (Thread Safe) | Use `nts` for IIS with FastCGI, nginx, or CLI. Use `ts` only for Apache `mod_php`. |
   | **Architecture** | `x64` or `x86` | Use `x64` for 64-bit Windows (most common). Use `x86` only for 32-bit systems. |
   | **VC runtime** | `vc15`, `vs16`, `vs17`, etc. | Indicates the required Visual C++ Redistributable. Download from [Microsoft](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist) if not installed. |

   For example, to install PHP 7.4 (NTS, 64-bit), download `php-7.4.33-tuxcare-els8-nts-Win32-vc15-x64-signed.zip`. This archive requires the **Visual C++ Redistributable for Visual Studio 2017** (`vc15`).

3. Extract the archive

   Create a destination folder (e.g. `C:\PHP`) and extract the ZIP contents into it. Right-click the downloaded ZIP file, select **Extract All...**, set the destination, and click **Extract**.

   Alternatively, use PowerShell:

   ```text
   New-Item -ItemType Directory -Path "C:\PHP" -Force
   Expand-Archive `
     -Path "$HOME\Downloads\php-7.4.33-tuxcare-els8-nts-Win32-vc15-x64-signed.zip" `
     -DestinationPath "C:\PHP"
   ```

   After extraction, your directory should contain `php.exe`, `php.ini-development`, `php.ini-production`, and an `ext` folder with extension DLLs.

4. Configure php.ini

   Create a configuration file from one of the provided templates — copy `php.ini-development` for development or `php.ini-production` for production to `php.ini`:

   ```text
   Copy-Item "C:\PHP\php.ini-production" "C:\PHP\php.ini"
   ```

   Open `C:\PHP\php.ini` in a text editor, set the extension directory, and enable the extensions your application requires:

   ```text
   extension_dir = "C:\PHP\ext"
   extension=curl
   extension=mbstring
   extension=mysqli
   extension=openssl
   ```

5. Add PHP to the System PATH

   To make `php` available from any terminal, add the PHP directory to the System PATH. Open **Settings > System > About** → **Advanced system settings** → **Environment Variables**. Under *System variables*, find **Path**, click **Edit**, then click **New** and add `C:\PHP`.

   Alternatively, use PowerShell (run as Administrator):

   ```text
   $currentPath = [System.Environment]::GetEnvironmentVariable("Path", "Machine")
   [System.Environment]::SetEnvironmentVariable("Path", "$currentPath;C:\PHP", "Machine")
   ```

   Close and reopen any terminal windows for the change to take effect.

6. Verify the installation

   Open **Command Prompt**, **PowerShell**, or **Terminal** and run:

   ```text
   php -v
   ```

   You should see output like:

   ```text
   PHP 7.4.33 (cli) (built: Mar 10 2026 10:12:00)
   Copyright (c) The PHP Group
   Zend Engine v3.4.0, Copyright (c) Zend Technologies
   ```

   To verify that the required extensions are loaded, run `php -m`.

</ELSSteps>

</template>

<template #TuxCare_Installer>

TuxCare Installer allows you to install and manage ELS PHP versions through a graphical interface on Windows Server 2019, 2022, and 2025.

<ELSSteps>

1. Download the installer and launch it

   Download the installer using your tokenized URL (see [Prerequisites](#windows-prerequisites) above):

   ```text
   https://<YOUR-TOKEN>@windows.tuxcare.com/php/installer/TuxCare.Installer.exe
   ```

   Run the downloaded file. After the first run, the installer appears under **Settings > Apps**.

2. Register with your license key or authentication token

   ![image](/images/php-installer-token.webp)

   :::tip
   If you've already registered on this machine and saved your credentials, the installer detects and uses the saved token automatically.
   :::

3. Select a PHP version

   Tick the checkbox next to the version you want. **Only 1 version can be installed per installation**.

   ![image](/images/php-installer-version.webp)

   :::tip
   If you already have a version installed, it will appear highlighted in green. When another version is selected, the installer will ask whether to **replace** the existing one or install it **alongside**.

   ![image](/images/php-installer-versions-2.webp)
   :::

4. Choose installation path and load modules

   By default, the installer uses `C:\Program Files`. Click **Change** to install to a different location.

   Click **Load** to fetch the required PHP archive. Select the modules you need and click **Continue**.

   ![image](/images/php-installer-load.webp)

5. Verify the installation

   Open **Command Prompt**, **PowerShell**, or **Terminal** and run:

   ```text
   php -v
   ```

   You should see output like:

   ```text
   PHP 5.6.40 (cli) (built: May 30 2025 15:43:43)
   Copyright (c) 1997-2016 The PHP Group
   Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
   ```

</ELSSteps>

During installation, the installer creates a folder with PHP configuration and selected modules, and adds TuxCare PHP to the **System PATH**.

</template>

</TableTabs>
<br>
<details>
 <summary>How to find System PATH</summary>

 1. Right-click **This PC** and select **Properties**, or search for **Settings > System > About** in the Start menu.
 2. Click **Advanced system settings**.

    ![image](/images/php-windows-advanced-settings.webp)

 3. Click on **Environment Variables**.

    ![image](/images/php-windows-environment-variables.webp)

 4. Under *System variables*, find **Path** and click **Edit**.

    ![image](/images/php-windows-add-path.webp)

 5. You will see your PHP `C:\PHP` directory added.

    ![image](/images/php-windows-add-path-2.webp)
</details>

### Additional configurations

Depending on your ELS PHP usage purpose, additional configurations may be required. You can integrate PHP with other tools, for example, IIS or WordPress. For further details, refer to the [official PHP documentation](https://www.php.net/manual/en/index.php).

#### Change default PHP version

If you have multiple PHP versions installed and want to change the default, update your **System Path** environment variable. Open **Settings > System > About** → **Advanced system settings** → **Environment Variables**. Under *System variables*, find **Path** and click **Edit**. Move the desired PHP version's path to the top, and remove or move down other PHP paths. Click OK, restart your terminal, and verify with `php -v`.

#### Extensions

Extensions are managed through the `php.ini` file located in your PHP installation directory (e.g. `C:\PHP`). Open it in a text editor and find the extensions section. Remove the semicolon `;` at the beginning of a line to enable an extension, or add `;` to disable it.

```text
;extension=curl
extension=gd2
;extension=mbstring
extension=mysqli
extension=pdo_mysql
```

#### Increase upload/memory limits

If you're integrating PHP with applications like WordPress, you might need to increase memory and upload size limits. Open the `php.ini` file and set the values as needed:

```text
upload_max_filesize=40M
post_max_size=40M
memory_limit=256M
```

#### Uninstallation

To **uninstall a PHP version manually**, delete the PHP installation directory (e.g. `C:\PHP`) and remove the corresponding path from **System Path**.

To **uninstall via TuxCare Installer**, open **Settings > Apps**, find *TuxCare Installer* and click **Uninstall**.

## SaxonC Use Case

You can extend alt-php with additional modules. Below is an example of installing the SaxonC PHP extension.

Although this guide uses **alt-php82** in its examples, the same installation steps apply to **alt-php83** and newer versions. Replace `php82` with your target version in all commands and file paths.

This guide also uses **SaxonC-HE** as an example. Be sure to adjust file names and paths to match the version you downloaded.

<ELSPrerequisites>

* Saxon 12+ (required for PHP 8.2+ compatibility) — download from [saxonica.com](https://www.saxonica.com/download/c.xml)
* `httpd` (or `apache2`), `gcc-c++` (or `g++`) with minimum C++14 support
* `alt-php82-devel` (or matching version)

| Edition   | License     | Key Features                            |
| --------- | ----------- | --------------------------------------- |
| SaxonC-HE | Open Source | XSLT 3.0, XPath 3.1, XQuery 3.1 (Basic) |
| SaxonC-PE | Commercial  | HE + ICU localization, JSON support     |
| SaxonC-EE | Commercial  | PE + Schema validation, Optimization    |

</ELSPrerequisites>

### Set up SaxonC

<ELSSteps>

1. Download SaxonC

   Download from the [official Saxonica download page](https://www.saxonica.com/download/c.xml). Create a working directory and move the downloaded zip file into it:

   ```text
   mkdir saxon && cd saxon
   mv ../SaxonCHE-linux-x86_64-12-9-0.zip .
   ```

2. Extract the archive

   Unzip the downloaded file and verify:

   ```text
   unzip SaxonCHE-linux-x86_64-12-9-0.zip
   ls
   ```

   Example output:

   ```text
   SaxonCHE-linux-x86_64-12-9-0  SaxonCHE-linux-x86_64-12-9-0.zip
   ```

3. Install the libraries

   Starting with version 12.6, `/opt/saxonica/` is the recommended installation path. Navigate into the extracted directory and copy all Saxon files:

   ```text
   cd SaxonCHE-linux-x86_64-12-9-0
   sudo mkdir -p /opt/saxonica/
   sudo cp -r SaxonCHE/* /opt/saxonica/
   ```

   The installed structure should contain `bin`, `include`, and `lib` directories.

4. Configure environment variables

   Add the following lines to your `.bashrc` or `/etc/profile.d/saxon.sh`.

   The `LD_LIBRARY_PATH` variable must point to the Saxon libraries:

   ```text
   export LD_LIBRARY_PATH="/opt/saxonica/lib:$LD_LIBRARY_PATH"
   ```

   To run the Transform, Query, and Validate (EE only) binaries, set the `PATH` variable:

   ```text
   export PATH="/opt/saxonica/bin:$PATH"
   ```

   :::tip
   If the PHP web server can't find the Saxon libraries, you may also need to add `/opt/saxonica/lib` to a new file in `/etc/ld.so.conf.d/` and run `ldconfig`.
   :::

</ELSSteps>

### Build the PHP extension

<ELSSteps>

1. Install alt-php82-devel

   Install the development package required for compiling PHP extensions:

   ```text
   dnf install alt-php82-devel
   ```

   Verify that `phpize` is available:

   ```text
   ls /opt/alt/php82/usr/bin/phpize
   ```

2. Prepare the build environment

   Navigate to the PHP extension source directory within the extracted Saxon archive and run `phpize` to prepare the build:

   ```text
   cd php/src/
   /opt/alt/php82/usr/bin/phpize
   ```

   Example output:

   ```text
   Configuring for:
   PHP Api Version:         20220829
   Zend Module Api No:      20220829
   Zend Extension Api No:   420220829
   ```

3. Configure and compile

   Configure the extension build with Saxon support and link to the Saxon libraries:

   ```text
   ./configure --with-saxon --with-php-config=/opt/alt/php82/usr/bin/php-config LDFLAGS="-L/opt/saxonica/lib"
   ```

   Compile and install:

   ```text
   make
   sudo make install
   ```

   Example output:

   ```text
   Installing shared extensions:     /opt/alt/php82/usr/lib64/php/modules/
   ```

4. Enable the extension

   Create a configuration file that tells PHP to load the extension:

   ```text
   tee -a /opt/alt/php82/etc/php.d/20-saxon.ini <<EOF
   ; configuration for php Saxon HE/PE/EE module
   extension=saxon.so
   EOF
   ```

   Verify that the Saxon extension appears in the list of loaded modules:

   ```text
   /opt/alt/php82/usr/bin/php -m | grep saxon
   ```

   Example output:

   ```text
   saxonc
   ```

5. Verify with a test script

   Run a quick test to confirm the extension works:

   ```text
   /opt/alt/php82/usr/bin/php -ddisplay_errors=E_ALL  << 'EOF'
   <?php
     $saxonProc = new Saxon\SaxonProcessor();
     $transformer = $saxonProc->newXslt30Processor();
     $executable = $transformer->compileFromString("
       <xsl:stylesheet version='2.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>
           <xsl:template name='go'><a/></xsl:template>
       </xsl:stylesheet>
   ");
     $root = $executable->callTemplateReturningValue("go");
     $node = $root->getHead()->getNodeValue();
     echo "$node \n";
   EOF
   ```

   Example output:

   ```text
   <a/>
   ```

   If you are using php-fpm or Apache, restart the services.

</ELSSteps>

## PHP extensions list

PHP extensions are modules that extend the functionality of the PHP programming language. These extensions provide additional capabilities for working with various types of data, performing specific tasks, interacting with external resources and supporting various protocols.

The PHP core includes many built-in extensions that provide basic functionality, such as working with databases, string processing, working with images, and others. However, to support more specific tasks and third-party libraries, you can use additional PHP extensions.

<TableTabs>

  <template #PHP_5.2_extensions>

   <div class="notranslate">

   | |  |  |  | |
   |-|-|-|-|-|
   |Reflection <br>SPL <br>SimpleXML <br>apc <br>apm <br>ares <br>bcmath <br>bcompiler <br>big_int <br>bitset <br>bloomy <br>bz2 <br>bz2_filter <br>calendar <br>coin_acceptor <br>crack <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br>eaccelerator <br>enchant <br>exif <br>ffmpeg* | fileinfo <br>filter <br>ftp <br>gd <br>gender <br>geoip <br>geos <br>gettext <br>gmagick <br>gmp <br>gnupg <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>huffman <br>iconv <br>idn <br>igbinary <br>imagick <br>imap <br>inclued <br>inotify <br>interbase <br>intl <br>ioncube_loader| json <br>ldap <br>libxml <br>lzf <br>mailparse <br>mbstring <br>mcrypt <br>memcache <br>memcached <br>mhash <br>mongo <br>msgpack <br>mssql <br>mysql <br>mysqli <br>ncurses <br>oauth <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird |  <br>pdo_mysql <br>pdo_oci* <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br>pgsql <br>phar <br>posix <br>pspell <br>quickhash <br>radius <br>rar <br>readline <br>recode <br>redis <br>rsync <br>session <br>shmop <br>snmp <br>soap <br>sockets <br>sourceguardian <br>spl_types <br>sqlite <br>ssh2 <br>standard <br>stats <br>stem | stomp <br>suhosin <br>sybase_ct <br>sysvmsg <br>sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>translit <br>uploadprogress <br>uuid <br>wddx <br>xcache <br>xcache_3 <br>xdebug <br>xhprof <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xsl <br>yaf <br>yaz <br>zend_optimizer <br>zip <br>zlib|
   </div>

   <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_5.3_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |amqp<br> apc <br>apcu <br>apm <br>ares <br>bcmath <br>bcompiler <br>big_int <br>bitset <br>bloomy <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>clamav* <br>coin_acceptor <br>core <br>crack <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br>eaccelerator <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br> filter <br>ftp | functional <br> gd <br>gender <br>geoip <br> geos <br> gettext <br>gmagick <br>gmp <br>gnupg <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>huffman <br>iconv <br>idn <br>igbinary <br>imagick <br>imap <br>inclued <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br>json <br>ldap <br>libevent <br>libxml <br>lzf | mailparse <br>mbstring <br>mcrypt <br>memcache <br>memcached <br>mhash <br>mongo <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br> pdo_oci* <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pgsql | phalcon* <br>phar <br> posix <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br> solr <br>spl <br>spl_types <br>sqlite <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br>suhosin | sybase_ct <br>sysvmsg <br> sysvsem <br> sysvshm <br>tidy <br> tideways <br>timezonedb <br>tokenizer <br>trader <br>translit <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>weakref <br>xcache* <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xsl <br> xhprof <br>yaf <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_5.4_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm** <br>amqp <br> apc <br>apcu <br>apm <br>ares <br>bcmath <br>big_int <br>bitset <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>core <br>ctype <br>curl <br>clos_ssa <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br>eaccelerator <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br>filter <br>ftp <br>functional <br>gd <br> gender | geoip <br> geos <br>gettext <br>gmagick <br>gmp <br>gnupg <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inclued <br>inotify <br>interbase <br>intl <br>ioncube_loader <br>json <br>ldap <br>libevent <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring| mcrypt <br>memcache <br>memcached <br>mhash <br>mongo <br>mongodb <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>oci8* <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pdo_oci* <br>pgsql <br>phalcon* <br>phar  | posix <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br> solr <br>sourceguardian <br>spl <br>spl_types <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br>suhosin <br>sybase_ct <br>sysvmsg | sysvsem <br>sysvshm <br>tidy <br> tideways <br> timezonedb <br>tokenizer <br>trader <br>translit <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>weakref <br>xcache* <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xray** <br>xsl <br> xhprof <br> jsmin <br> yaf <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_5.5_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm* <br>amqp <br> apcu <br>apm <br>ares <br>bcmath <br>big_int <br>bitset <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>clamav* <br>core <br>ctype <br>curl <br> clos_ssa <br>date <br>dba <br>dbase <br>dbx <br>dom <br>doublemetaphone <br> diseval <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br>filter <br>ftp <br>gd <br>gender <br>geoip | geos <br> gettext <br>gmagick <br>gmp <br>gnupg <br>gRPC <br>haru <br>hash <br>hidef <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br>jsmin <br>json <br>ldap <br>libevent <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring <br>mcrypt | memcache <br>memcached <br>mhash <br>mongo <br>mongodb <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>oci8* <br>odbc <br>opcache* <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pdo_oci* <br>pgsql | phalcon* <br>phalcon3 <br>phar <br>posix <br>postal* <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br> solr <br>spl <br>spl_types <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br>suhosin | sybase_ct <br>sysvmsg <br>sysvsem <br>sysvshm <br>tidy <br> tideways <br>timezonedb <br>tokenizer <br>trader <br>translit <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>weakref <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xray <br>xsl <br> xhprof <br>yaf <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq |
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_5.6_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm* <br> amqp <br> apcu <br>apm <br>ares <br>bcmath <br>big_int <br>bitset <br>brotli <br>bz2 <br>bz2_filter <br>calendar <br>core <br>ctype <br>curl <br> clos_ssa* <br>date <br>dba <br> dbase <br>dbx <br>dom <br>doublemetaphone <br> diseval <br>eio <br>enchant <br>ereg <br>exif <br>ffmpeg* <br>fileinfo <br>filter <br>ftp <br>gd <br>gender <br>geoip <br>gettext | geos <br> gmagick <br>gmp <br>gnupg <br>gRPC <br>haru <br>hash <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br>json <br>ldap <br>libevent <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring <br>mcrypt <br>memcache <br>memcached <br>mhash | mongo <br>mongodb <br>msgpack <br>mssql <br>mysql <br>mysqli <br>mysqlnd <br>ncurses <br>nd_mysql <br>nd_mysqli <br>nd_pdo_mysql <br>oauth <br>oci8 <br>odbc <br>opcache* <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br> pdo_oci* <br>pgsql <br>phalcon* <br>phalcon3 | phar <br>posix <br> postal* <br>propro <br>pspell <br>quickhash <br>radius <br>raphf <br>rar <br>readline <br>recode <br>redis <br>reflection <br>rsync <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br>spl <br>spl_types <br>sqlite3 <br>ssh2 <br>standard <br>stats <br>stem <br>stomp <br> solr | suhosin <br>sybase_ct <br>sysvmsg <br>sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br>translit <br> tideways <br>uploadprogress <br>uri_template <br>uuid <br>wddx <br>xcache_3 <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xrange <br>xray <br>xsl <br> xhprof <br>yaml <br>yaz <br>zend_guard_loader <br>zip <br>zlib <br>zmq|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_7.0_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm* <br>amqp <br> apcu <br>bcmath <br>bitset <br>brotli <br>bz2 <br>clos_ssa* <br> calendar <br>core <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dom <br> diseval <br>eio <br>enchant <br>exif <br>fileinfo <br>filter <br>ftp <br> ffmpeg* <br>gd <br> gearman <br> gender <br> geos | geoip <br>gettext <br>gmagick <br>gmp <br>gnupg <br>gRPC <br>hash <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br>json <br>ldap <br>libsodium <br>libxml <br>lzf <br> luasandbox*  <br>mailparse <br>mbstring <br>mcrypt | memcached <br> memcache <br>mongodb <br>mysqli <br>mysqlnd <br>nd_mysqli <br>nd_pdo_mysql <br>_newrelic_ <br>oauth <br>oci8* <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdf <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br> psr <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br>pdo_sqlsrv <br> pdo_oci  <br>pgsql <br>phalcon3 <br>phar | posix <br> postal* <br>propro <br>pspell <br> phalcon4 <br>raphf <br>rar <br>readline <br> rrd <br>redis <br>reflection <br> recode <br>session <br>shmop <br>simplexml <br>snmp<br>snuffleupagus <br>soap <br>sockets <br>sourceguardian <br> sodium <br> solr <br>spl <br>sqlite3 <br>sqlsrv <br>ssh2 <br>standard <br>stats <br>suhosin7 <br>sysvmsg | swoole <br> sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br> tideways_xhprof <br>uploadprogress <br>uuid <br>vips* <br>vld* <br>wddx <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br> xray <br>xsl <br>yaml <br>yaz <br> yaf <br>zip <br>zlib <br>zmq|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  ::: tip Note
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  Please find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.1_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm* <br>amqp <br> snuffleupagus <br> vld <br> apcu <br>bcmath <br>brotli <br>bz2 <br> clos_ssa* <br> calendar <br>core <br>ctype <br>curl <br>date <br>dba <br>dbase <br>dom <br> diseval <br>eio <br>enchant <br>exif <br>fileinfo <br>filter <br>ftp <br> ffmpeg* <br>gd <br>gearman <br>gender <br>geoip <br>gettext | geos <br> gmagick <br>gmp <br>gnupg <br>gRPC <br>hash <br>htscanner <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br> jsmin <br> json <br>ldap <br>libsodium <br>libxml <br>lzf <br> luasandbox* <br>mailparse <br>mbstring <br>mcrypt <br>memcached | memcache <br> mongodb <br>mysqli <br>mysqlnd <br>nd_mysqli <br>nd_pdo_mysql <br>_newrelic_ <br>oauth <br>oci8 <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdo <br>pdo_dblib <br>pdo_firebird <br>pdo_mysql <br>pdo_odbc <br>pdo_pgsql psr <br> <br>pdo_sqlite <br>pdo_sqlsrv <br>pgsql <br>phalcon3 <br>phar <br> pdf | pdo_oci <br> phalcon4 <br> posix <br>propro <br>pspell <br>psr* <br>raphf <br>rar <br>readline <br>redis <br>reflection <br>rrd <br> recode <br> solr <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>sourceguardian <br>spl <br> sodium <br> sqlite3 <br>sqlsrv <br>ssh2 <br>standard <br>stats <br>suhosin7 <br>sysvmsg | swoole <br> sysvsem <br>sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br> tideways_xhprof <br>uploadprogress <br>uuid <br>vips* <br>wddx <br>xdebug <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xsl <br>xray <br> yaz <br> yaml <br> yaf <br>zip <br>zlib <br>zmq|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  ::: tip Note
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  Please find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.2_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |aapm* <br> jsmin <br> psr <br> rrd <br> yaz <br> amqp <br> snuffleupagus <br> vld <br> apcu <br>bcmath <br>brotli <br>bz2 <br>calendar <br> clos_ssa* <br> core <br>ctype <br>curl <br>date <br>dba <br>dom <br> dbase <br> diseval  <br>eio <br>enchant <br>exif <br>fileinfo <br>filter <br>ftp <br> ffmpeg* <br>gd <br>gender <br>geoip <br>gettext | gearman <br> geos <br> gmagick <br>gmp <br>gnupg <br>gRPC <br>hash <br>http <br>iconv <br>igbinary <br>imagick <br>imap <br>inotify <br>interbase <br>intl <br>ioncube_loader <br>json <br>ldap <br>libxml <br>lzf <br> luasandbox* <br> mcrypt <br> memcache <br> mailparse <br>mbstring <br>memcached <br>mongodb | mysqli <br>mysqlnd <br>nd_mysqli <br>nd_pdo_mysql <br>_newrelic_ <br>oauth <br>oci8 <br>odbc <br>opcache <br>openssl <br>pcntl <br>pcre <br>pdo <br>pdo_dblib <br>pdo_firebird <br> pdf <br> pdo_oci <br> phalcon4  <br> pdo_mysql <br>pdo_odbc <br>pdo_pgsql <br>pdo_sqlite <br>pdo_sqlsrv <br>pgsql <br>phalcon3 <br>phar | posix <br>propro <br>pspell <br>raphf <br>readline <br>redis <br>reflection <br> recode <br> sodium <br> sourceguardian <br> swoole  <br>session <br>shmop <br>simplexml <br>snmp <br>soap <br>sockets <br>spl <br>sqlite3 <br>sqlsrv <br>ssh2 <br>standard <br>stats <br>sysvmsg <br>sysvsem | sysvshm <br>tidy <br>timezonedb <br>tokenizer <br>trader <br> tideways_xhprof <br>uploadprogress <br>uuid <br>vips* <br>wddx <br>xml <br>xmlreader <br>xmlrpc <br>xmlwriter <br>xsl <br> xdebug <br> yaf <br>yaml <br>zip <br>zlib <br>zmq <br> xray|
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  ::: tip Note 
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  You can find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.3_extensions>

  <div class="notranslate">

  | |  |  |  | | |
  |-|-|-|-|-|-|
  |ffmpeg* <br> aapm* <br>amqp <br> clos_ssa* <br> gearman <br> jsmin <br> mailparse <br> memcache <br> psr <br> rrd <br> solr <br> tideways_xhprof <br> zmq <br> snuffleupagus <br> vld <br> apcu <br> bz2 <br> brotli <br> calendar <br> core <br> ctype <br> curl <br> date <br> exif <br>enchant <br> filter <br> ftp <br> gettext <br> gmp <br>gnupg <br> hash <br> iconv <br> interbase <br> luasandbox* | libxml <br>mysqlnd <br>opcache <br> openssl <br> pcntl <br> pcre <br>pdo_pgsql <br> phar <br> readline <br> reflection <br> session <br> shmop <br> simplexml <br> sourceguardian <br> spl <br> sqlite3 <br>standard <br> snmp <br> stats <br> tokenizer | trader <br>xmlreader <br>bcmath <br>fileinfo <br> grpc <br>intl <br>lzf <br>nd_mysqli <br>pdf <br>pdo <br>posix <br>swoole <br>uploadprogress <br>xmlrpc <br>gd <br>http <br>ioncube_loader <br> mbstring | nd_pdo_mysql <br>pdo_dblib <br>pdo_sqlite <br>propro <br>soap <br>sysvmsg <br>uuid <br>xmlwriter <br>dbase <br>gender <br>igbinary <br>mcrypt <br>newrelic <br> pdo_firebird <br>pdo_sqlsrv <br>pspell <br>sockets <br>sysvsem <br>vips* <br>xsl | dba <br>geoip <br>imagick <br>json <br>memcached <br>oauth <br>pdo_mysql <br>pgsql <br> raphf <br>sodium <br>sysvshm <br>yaml <br>dom <br>geos <br>imap <br>ldap <br>mongodb <br>oci8 <br>pdo_oci | phalcon3 <br>recode <br>sqlsrv <br> tidy <br>wddx <br>yaz <br>eio <br>gmagick <br>inotify <br>leveldb <br>mysqli <br>odbc <br>pdo_odbc <br>phalcon4 <br>redis <br>ssh2 <br>timezonedb <br>xdebug <br>zip <br> xml <br> zlib <br> xray <br> yaf| 
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  :::tip Note
  To use <span class="notranslate">`newrelic`</span> extension you should set your own <span class="notranslate">`New Relic License Key`</span> in your own <span class="notranslate">`/opt/alt/php7*/etc/php.ini`</span> file.
  You can find more info about <span class="notranslate">New Relic License Key</span> in the <span class="notranslate">[New Relic documentation](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key)</span>.
  :::

  </template>

  <template #PHP_7.4_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |leveldb <br> sourceguardian <br> ffmpeg* <br> amqp <br> clos_ssa* <br> gearman <br> ioncube_loader <br> jsmin <br> mailparse <br> mcrypt <br> memcache <br> psr <br> rrd <br> solr <br> ssh2 <br> tideways_xhprof <br> yaz <br> zmq <br> apcu <br> bcmath <br> brotli <br> bz2 <br> calendar <br> core <br> ctype <br> curl <br> date <br> dba <br> dbase <br> dom <br> eio <br> enchant <br> exif <br> fileinfo <br> filter <br> ftp <br> gd <br> gender <br> geoip <br> geos | gettext <br> gmagick <br> gmp <br> gnupg <br> grpc <br> hash <br> http <br> iconv <br> igbinary <br> imagick <br> imap <br> inotify <br> intl <br> json <br> ldap <br> libxml <br> luasandbox* <br> lzf <br> mbstring <br> memcached <br> mongodb | mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> newrelic <br> snuffleupagus <br> oauth <br> oci8 <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre <br> pdf <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql <br> pdo_oci <br> pdo_odbc <br> pdo_pgsql <br> vld <br> pdo_sqlite <br> pdo_sqlsrv | pgsql <br> phalcon4 <br> phar <br> posix <br> propro <br> pspell <br> raphf <br> readline <br> redis <br> reflection <br>phalcon5 <br> session <br> shmop <br> simplexml <br> snmp <br> soap <br> sockets <br> sodium <br> spl <br> sqlite3 <br> sqlsrv <br> standard | stats <br> swoole <br> sysvmsg <br> sysvsem <br> sysvshm <br> tidy <br> timezonedb <br> tokenizer <br> trader <br> xray <br> uploadprogress <br> uuid <br> vips* <br> xdebug <br> xml <br> xmlreader <br> xmlrpc <br> xmlwriter <br> xsl <br> yaml <br> zip <br> zlib |
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  </template>

  <template #PHP_8.0_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |brotli <br> amqp <br> clos_ssa* <br> core <br> date <br> filter <br> gearman <br> geoip <br> gmagick <br> gnupg* <br> grpc <br> apcu <br> bcmath <br> bz2 <br> calendar <br> ctype <br> curl <br> dba <br> dbase <br> dom <br> enchant <br> exif <br> ffi** <br> fileinfo | hash <br> igbinary <br> inotify <br> jsmin <br> json <br> libxml <br> mcrypt <br> memcache ftp <br> gd <br> gettext <br> gmp <br> iconv <br> imagick <br> imap <br> intl <br> ldap <br> lzf <br> mailparse <br> mbstring | mongodb <br> newrelic <br> oauth <br> oci8 <br> openssl <br> pcntl <br> pcre <br> pdo_oci <br> pdo_sqlsrv <br> readline <br> redis <br> reflection <br> rrd <br> session memcached <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> odbc <br> opcache <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql <br> pdo_odbc | snuffleupagus <br> solr <br> SPL <br> sqlsrv <br> ssh2 <br> standard <br> swoole <br> tideways_xhprof <br> trader pdo_pgsql <br> pdo_sqlite <br> pgsql <br> phar <br> posix <br> pspell <br> psr <br> raphf <br> shmop <br> simplexml <br> snmp <br> soap <br> sockets | uploadprogress <br> uuid <br> vips* <br> vld <br> xdebug <br> xmlrpc** <br> yaml <br> yaz <br> zip <br> zlib sodium <br> sqlite3 <br> sysvmsg <br> sysvsem <br> sysvshm <br> tidy <br> timezonedb <br> tokenizer <br> xml <br> xmlreader <br> xmlwriter <br> xsl <br> zmq <br>sourceguardian <br> phalcon5 <br> xray |
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_8.1_extensions>

  <div class="notranslate">

  | |  |  |  | |
  |-|-|-|-|-|
  |amqp <br> apcu <br> bcmath <br> brotli <br> bz2 <br> calendar <br> clos_ssa*** <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase <br> dom <br> enchant <br> exif <br> ffi** <br> fileinfo <br> filter <br> ftp | gd <br> geoip <br> gearman <br> gettext <br> gmagick <br> gmp <br> gnupg** <br> grpc <br> hash <br> ioncube_loader <br> iconv <br> igbinary <br> imagick <br> imap <br> inotify <br> intl <br> jsmin <br> json <br> ldap <br> libxml <br> lzf <br> mailparse <br> mbstring <br> mcrypt | memcache <br> memcached <br> mongodb <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> newrelic <br> oauth <br> oci8 <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre <br> pdf <br> pdo <br> pdo_dblib <br> pdo_mysql <br> pdo_oci <br> pdo_odbc <br> phalcon5 <br> pdo_pgsql <br> pdo_firebird <br> pdo_sqlite <br> pdo_sqlsrv | pgsql <br> phar <br> posix <br> process <br> pspell <br> psr <br> rrd <br> raphf <br> readline <br> redis <br> Reflection <br> session <br> shmop <br> SimpleXML v snmp <br> solr <br> sourceguardian <br> soap <br> sockets <br> sodium <br> SPL <br> sqlite3 <br> sqlsrv <br> ssh2 <br> standard <br> swoole | sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof <br> tidy <br> timezonedb <br> tokenizer <br> trader <br> uploadprogress <br> uuid <br> vips* <br> xdebug <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaf <br> yaml <br> zip <br> zlib <br> zmq <br> xray |
  </div>

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_8.2_extensions>

  | | | | | |
  |-|-|-|-|-|
  |amqp** <br> apcu** <br> bcmath <br> brotli** <br> bz2 <br> calendar <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase** <br> dom <br> enchant <br> exif <br> ffi <br> fileinfo <br> filter <br> ftp <br> gd <br> gearman** <br> geoip** | gettext <br> gmagick** <br> gmp <br> gnupg* <br> grpc** <br> hash <br> iconv <br> igbinary** <br> imagick** <br> imap <br> inotify** <br> intl <br> ioncube_loader <br> jsmin** <br> json <br> ldap <br> libxml <br> lzf** <br> mailparse** <br> mbstring <br> mcrypt** <br> memcache** <br> memcached** | mongodb** <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> oauth** <br> oci8** <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre** <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql* <br> pdo_oci** <br> pdo_odbc <br> pdo_pgsql <br> pdo_sqlite <br> pdo_sqlsrv** <br> pgsql | phar <br> posix <br> pspell <br> psr** <br> random <br> raphf** <br> readline <br> redis** <br> Reflection <br> rrd** <br> session <br> shmop <br> SimpleXML <br> snmp <br> soap <br> sockets <br> sodium <br> solr** <br> SPL <br> sqlite3 <br> sqlsrv** <br> ssh2** | standard <br> swoole** <br> sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof** <br> tidy <br> timezonedb** <br> tokenizer <br> trader** <br> uploadprogress** <br> uuid** <br> vips* <br> xdebug** <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaml** <br> zip <br> zlib <br> zmq**|

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

  <template #PHP_8.3_extensions>

  | | | | | |
  |-|-|-|-|-|
  |amqp** <br> apcu** <br> bcmath <br> brotli** <br> bz2 <br> calendar <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase** <br> dom <br> elastic_apm <br> enchant <br> exif <br> ffi <br> fileinfo <br> filter <br> ftp <br> gd <br> gearman** <br> geoip** | gettext <br> gmagick** <br> gmp <br> gnupg* <br> grpc** <br> hash <br> iconv <br> igbinary** <br> imagick** <br> imap <br> inotify** <br> intl <br> ioncube_loader <br> jsmin** <br> json <br> ldap <br> libxml <br> lzf** <br> mailparse** <br> mbstring <br> mcrypt** <br> memcache** <br> memcached** | mongodb** <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> oauth** <br> oci8** <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre** <br> pdf <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql* <br> pdo_oci** <br> pdo_odbc <br> pdo_pgsql <br> pdo_sqlite <br> pdo_sqlsrv** <br> pgsql | phalcon5 <br> phar <br> posix <br> pspell <br> psr** <br> random <br> raphf** <br> readline <br> redis** <br> Reflection <br> rrd** <br> session <br> shmop <br> SimpleXML <br> snmp <br> snuffleupagus <br> soap <br> sockets <br> sodium <br> solr** <br> SPL <br> sqlite3 <br> sqlsrv** <br> ssh2** | standard <br> sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof** <br> tidy <br> timezonedb** <br> tokenizer <br> trader** <br> uploadprogress** <br> uuid** <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaml** <br> zip <br> zlib <br> zmq**|

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc. 

  </template>

  <template #PHP_8.4_extensions>

  | | | | | |
  |-|-|-|-|-|
  |amqp** <br> apcu** <br> bcmath <br> brotli** <br> bz2 <br> calendar <br> Core <br> ctype <br> curl <br> date <br> dba <br> dbase** <br> dom <br> elastic_apm <br> enchant <br> exif <br> ffi <br> fileinfo <br> filter <br> ftp <br> gd <br> gearman** <br> geoip** | gettext <br> gmagick** <br> gmp <br> gnupg* <br> grpc** <br> hash <br> iconv <br> igbinary** <br> imagick** <br> imap <br> inotify** <br> intl <br> ioncube_loader <br> jsmin** <br> json <br> ldap <br> libxml <br> lzf** <br> mailparse** <br> mbstring <br> mcrypt** <br> memcache** <br> memcached** | mongodb** <br> mysqli <br> mysqlnd <br> nd_mysqli <br> nd_pdo_mysql <br> oauth** <br> oci8** <br> odbc <br> opcache <br> openssl <br> pcntl <br> pcre** <br> pdf <br> pdo <br> pdo_dblib <br> pdo_firebird <br> pdo_mysql* <br> pdo_oci** <br> pdo_odbc <br> pdo_pgsql <br> pdo_sqlite <br> pdo_sqlsrv** <br> pgsql | phalcon5 <br> phar <br> posix <br> pspell <br> psr** <br> random <br> raphf** <br> readline <br> redis** <br> Reflection <br> rrd** <br> session <br> shmop <br> SimpleXML <br> snmp <br> snuffleupagus <br> soap <br> sockets <br> sodium <br> solr** <br> SPL <br> sqlite3 <br> sqlsrv** <br> ssh2** | standard <br> sysvmsg <br> sysvsem <br> sysvshm <br> tideways_xhprof** <br> tidy <br> timezonedb** <br> tokenizer <br> trader** <br> uploadprogress** <br> uuid** <br> xml <br> xmlreader <br> xmlrpc** <br> xmlwriter <br> xsl <br> yaml** <br> zip <br> zlib <br> zmq**|

  <sup>*</sup> CentOS 7, CloudLinux 7, etc.

  <sup>**</sup> CentOS 7, CentOS 8, CloudLinux 7, CloudLinux 8, etc.

  </template>

</TableTabs>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=PHP) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=PHP) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=PHP) — Full list of product parts covered by ELS
* ![](/images/shield.webp) [Machine-readable security data](/els-for-runtimes/machine-readable-security-data/#php) — OVAL, CSAF, Errata, and RSS feeds for PHP ELS
* ![](/images/clipboard-notes.webp) [PHP Changelog](https://changelog.cloudlinux.com/) — latest updates, fixes, and enhancements for ALT-PHP

</WhatsNext>
