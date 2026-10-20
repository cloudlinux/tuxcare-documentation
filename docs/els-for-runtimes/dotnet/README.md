# .NET

Endless Lifecycle Support (ELS) for .NET from TuxCare provides security fixes for .NET that has reached its end of life. This allows you to continue running .NET applications without vulnerability concerns, even after official support has ended.

## Supported Versions

| Windows Version                                         | .NET 1.1 | .NET 2.0 | .NET 2.2 | .NET 6 | .NET 8 | .NET 10 | Architectures |
|---------------------------------------------------------|:--------:|:--------:|:--------:|:------:|:------:|:-------:|:-------------:|
| **Nano Server 2019, 2022**                              |    —     |    —     |    ✓     |   ✓    |   ✓    |    ✓    |      x64      |
| **Nano Server 2025**                                    |    —     |    —     |    ✓     |   —    |   ✓    |    ✓    |      x64      |
| **Windows 11** (24H2, 23H2, 22H2 E/Edu)                 |    ✓     |    ✓     |    ✓     |   ✓    |   ✓    |    ✓    |      x64      |
| **Windows 10** (22H2)                                   |    ✓     |    ✓     |    ✓     |   ✓    |   ✓    |    ✓    |      x64      |
| **Windows Server** 2025                                 |    ✓     |    ✓     |    ✓     |   —    |   ✓    |    ✓    |      x64      |
| **Windows Server** 2022, 2019, 2016, 2012-R2, 2012      |    ✓*    |    ✓     |    ✓     |   ✓    |   ✓    |    ✓    |    x64, x86   |
| **Windows Server Core** 2022, 2019, 2016, 2012-R2, 2012 |    ✓*    |    ✓     |    ✓     |   ✓    |   ✓    |    ✓    |    x64, x86   |

<sup>*</sup> .NET 1.1 supports Windows Server 2012 R2 and later; Windows Server 2012 is not supported.

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Available Runtimes

Choose the component that fits your use case. For more details, refer to the [official .NET documentation](https://learn.microsoft.com/en-us/dotnet/fundamentals/). TuxCare applies security patches to .NET for the above OS versions, ensuring continued stability and security even beyond the official end-of-life date.

<TableTabs>

  <template #SDK>

The .NET SDK (Software Development Kit) is the recommended option if you plan to develop, build, test, or publish .NET applications. It includes the .NET Runtime (required to run .NET apps), the ASP.NET Core Runtime (for hosting web applications out of the box), and the .NET CLI and build tools for compiling and managing your projects.

With the SDK, you won't need to install separate runtimes for ASP.NET Core or the Desktop environment — the SDK bundles everything together to streamline development and deployment.

  </template>

  <template #ASP_NET_Core_Runtime>

The ASP.NET Core Runtime contains the components needed to run ASP.NET Core web applications on .NET. It includes libraries and features for building dynamic web pages, RESTful APIs, and real-time communication with SignalR. 

Note, if you install the full .NET SDK, you already get the ASP.NET Core Runtime.

  </template>

  <template #Desktop_Runtime>

The .NET Desktop Runtime allows you to run Windows desktop applications built with Windows Forms or WPF (Windows Presentation Foundation). It focuses on providing a smooth experience for traditional graphical apps on Windows platforms.

  </template>

  <template #Runtime>

The .NET Runtime is the base runtime required to run console or server-based .NET applications. It is more lightweight than the SDK, since it does not include compilers, build tools, or additional libraries for web or desktop development.

  </template>

</TableTabs>

## Installation

TuxCare provides three ways to install ELS .NET on Windows: the **TuxCare Installer** (recommended) — a graphical tool that installs and removes .NET runtimes and SDKs, the **PowerShell script** that does the same from the command line, or **manual** installation of the .NET setup files from the repository.

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Administrator access to the Windows system
* A supported Windows version — see the [compatibility table](#supported-versions) above

</ELSPrerequisites>

:::tip
Customers who previously received an authentication token can continue to use it: select **Use previous token** in the TuxCare Installer, or use the tokenized URL for manual installation.
:::

<TableTabs label="Choose installation method: " :labels="{ TuxCare_Installer: 'TuxCare Installer (recommended)', PowerShell_Script: 'Manual (via PowerShell script)' }">

<template #TuxCare_Installer>

TuxCare Installer installs and removes ELS .NET runtimes and SDKs through a graphical interface on Windows Server 2019, 2022, and 2025.

<ELSSteps>

1. Download the installer and launch it

   Download the installer from the following link:

   ```text
   https://windows.tuxcare.com/TuxCare.Installer.exe
   ```

   Run the downloaded file. After the first run, the installer appears under **Settings > Apps**.

2. Register with your license key

   * If you registered on this machine before, the installer first shows **Register** and **Use previous token**. Click **Use previous token** to keep the current registration and go straight to the product list (step 3), or **Register** to register again with a license key, which releases the current registration. New customers do not see this screen and start from the next one.

     ![TuxCare Installer selection window with the Register and Use previous token buttons](/images/dotnet-installer-register.webp)

   * Click **I have a license key**.

     ![TuxCare Installer selection window with the I have a license key and I have a token buttons](/images/dotnet-installer-license-key.webp)

   * Enter your license key and click **Register**. Keep **Save token** ticked to reuse the registration next time.

     ![TuxCare Installer prompting for a license key, with the Save token checkbox ticked](/images/dotnet-installer-token.webp)

   :::tip
   If you have an authentication token instead of a license key, click **I have a token**.
   :::

3. Select the .NET runtimes and SDKs

   The installer lists the products of your license. Under **.NET**, expand a version (for example, **6.0**) and a build (for example, **6.0.37-tuxcare.1**), and tick the installers you want:

   | Installer | Description |
   | --- | --- |
   | `dotnet-runtime-<version>-win-<arch>.exe` | .NET Runtime |
   | `aspnetcore-runtime-<version>-win-<arch>.exe` | ASP.NET Core Runtime |
   | `windowsdesktop-runtime-<version>-win-<arch>.exe` (or `.msi`) | Windows Desktop Runtime |
   | `dotnet-sdk-<version>-win-<arch>.exe` | .NET SDK (includes the runtimes) |
   | `<arch>` in the file name | Architecture: `x64` or `x86` |

   You can select several installers from several versions at once — the installer puts .NET versions side by side.

   When your selection is ready, click **Continue**.

   ![TuxCare Installer Products Selection listing the .NET 6.0.37-tuxcare.1 installers with a checkbox beside each, dotnet-sdk-6.0.429-tuxcare.1-win-x64.exe ticked](/images/dotnet-installer-versions.webp)

   :::tip
   The installer highlights already installed files in green and ticks them. To uninstall one, untick it and click **Continue**. **Continue** stays disabled until you change the selection.

   ![TuxCare Installer Products Selection with the installed dotnet-sdk-6.0.429-tuxcare.1-win-x64.exe highlighted in green](/images/dotnet-installer-installed.webp)
   :::

   If your license does not cover a product, it is shown as **.NET (Not Authenticated)** with nothing to select.

4. Install

   The installer downloads each selected file and runs it silently.

   When Windows shows the User Account Control prompt, check that the verified publisher is **Cloud Linux Software, Inc** and click **Yes**. Clicking **No** cancels the installation of that file.

   ![Windows User Account Control prompt asking to allow TuxCare .NET SDK 6.0.429-tuxcare.1 (x64) to make changes, verified publisher Cloud Linux Software, Inc](/images/dotnet-installer-uac.webp)

   When the message **Updating completed successfully** appears, click **OK**. If the message lists a runtime that needs a restart, restart Windows before using it.

   ![TuxCare Installer Progress screen with the Updating completed successfully message](/images/dotnet-installer-done.webp)

5. Verify the installation

   Open **Command Prompt**, **PowerShell**, or **Terminal** and run:

   ```text
   dotnet --list-runtimes
   dotnet --list-sdks
   ```

   Example output:

   ```text
   Microsoft.NETCore.App 6.0.37-tuxcare.3 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
   Microsoft.AspNetCore.App 8.0.22 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
   8.0.416 [C:\Program Files\dotnet\sdk]
   ```

   To check that an SDK works, create and run a test project:

   ```text
   dotnet new console -o MyTestApp
   cd MyTestApp
   dotnet run
   ```

   Expected output:

   ```text
   Hello, World!
   ```

</ELSSteps>

</template>

<template #PowerShell_Script>

The `tuxcare-installer.ps1` PowerShell script does the same as TuxCare Installer from the command line. The script and TuxCare Installer keep the same records, so each sees what the other installed.

<ELSSteps>

1. Open PowerShell as administrator

   Listing and downloading also work without administrator rights.

2. Download the script

   Download the [script](https://windows.tuxcare.com/tuxcare-installer.ps1) to the project folder.

3. Register with your license key

   Register this server once:

   ```text
   .\tuxcare-installer.ps1 -LicenseKey <license-key>
   ```

4. List the available installers

   The list shows what your license offers and marks the installed files:

   ```text
   .\tuxcare-installer.ps1 -List -Product dotnet
   ```

5. Install the runtimes and SDKs

   Use the file names shown by `-List`. You can use wildcards:

   ```text
   .\tuxcare-installer.ps1 -Install dotnet-sdk-8.0.416-win-x64.exe,aspnetcore-runtime-8.0.22-win-x64.exe
   ```

6. Verify the installation

   ```text
   dotnet --list-sdks
   ```

</ELSSteps>

To only download the installers without installing them (to `%USERPROFILE%\Downloads\TuxCare` by default), run:

```text
.\tuxcare-installer.ps1 -Download 'dotnet-runtime-6.0.37-tuxcare.3-win-*' -OutputDir C:\Downloads
```

The script saves the downloads as `<OutputDir>\dotnet\<version>\<build>\<file>` and does not install or record anything. Run `.\tuxcare-installer.ps1 -Help` for all options, for example `-Token`, `-Force`, and `-Delete`.

The script returns these exit codes:

| Code | Meaning |
| --- | --- |
| `0` | Success |
| `1` | Repository or download failure |
| `2` | Already registered (use `-Force` to register again) |
| `3` | Registration failed or no token |
| `4` | None of the given names matched |
| `5` | Install failed |
| `6` | Uninstall failed |
| `12` | Releasing the registration failed |
| `14` | Administrator rights needed |
| `15` | `-Delete` needs `-UninstallProducts` or `-KeepProducts` |

</template>

<template #Manual>

:::warning
Manual installation is available only to customers who previously received an authentication token. New customers register with a license key in TuxCare Installer or the PowerShell script.
:::

Manual installation uses a tokenized URL that gives access to the TuxCare .NET for Windows repository. The token goes right after the domain:

```text
https://windows.tuxcare.com/<YOUR-TOKEN>/dotnet/
```

<ELSSteps>

1. Open the repository in your browser

   Navigate to your tokenized URL:

   ```text
   https://windows.tuxcare.com/<YOUR-TOKEN>/dotnet/
   ```

   You will see a directory listing of all available .NET versions (for example, `6.0/`, `8.0/`, `10.0/`). Click on the version you need.

2. Download the .NET setup file

   Choose the setup file for the runtime and architecture you need and download it.

3. Run the setup file

   Double-click the downloaded file. Accept the **license agreement**, click **Install**, and click **Close** when the installation finishes.

4. Verify the installation

   Open **Command Prompt** or **PowerShell** and run:

   ```text
   dotnet --list-runtimes
   ```

</ELSSteps>

</template>

</TableTabs>

## Additional Configurations

After installation, you can choose which .NET version each application uses, check which runtimes and SDKs you have, and uninstall them.

### Choose the .NET Version for an Application

.NET keeps all installed versions side by side under `C:\Program Files\dotnet`, and each application picks its own. There is no default version to switch.

* **Runtime.** An application requests a runtime in its `*.runtimeconfig.json` file (for example, `Microsoft.NETCore.App 6.0.0`). .NET uses the highest installed patch of that version: with `6.0.37-tuxcare.1` and `6.0.37-tuxcare.3` installed, the application runs on `6.0.37-tuxcare.3`. Other major versions, such as .NET 8 and 10, do not affect it. To change this behavior, set `rollForward` in the application's `runtimeconfig.json`, set the `DOTNET_ROLL_FORWARD` environment variable, or start the application with `dotnet --fx-version <version> app.dll`.
* **SDK.** The `dotnet` CLI uses the newest installed SDK. To use a specific SDK for a project, put a `global.json` file in the project folder:

  ```json
  { "sdk": { "version": "6.0.429-tuxcare.3", "rollForward": "latestPatch" } }
  ```

### Useful Commands

* `where.exe dotnet` — locates the dotnet executable on the system:

  ```text
  where.exe dotnet
  ```

  <details>
  <summary>Example output</summary>

  ```text
  C:\Program Files\dotnet\dotnet.exe
  ```

  </details>

* `dotnet --info` — displays information about installed SDKs, runtimes, and your OS:

  ```text
  dotnet --info
  ```

  <details>
  <summary>Example output</summary>

  ```text
  .NET SDK (reflecting any global.json):
  Version:   6.0.429
  Commit:    ef6f5ce48c

  Runtime Environment:
  OS Name:     Windows
  OS Version:  10.0.22631
  OS Platform: Windows
  RID:         win10-x64
  Base Path:   C:\Program Files\dotnet\sdk\6.0.429\

  global.json file:
    Not found

  Host:
    Version:      6.0.36
    Architecture: x64
    Commit:       N/A

  .NET SDKs installed:
    6.0.429 [C:\Program Files\dotnet\sdk]

  .NET runtimes installed:
    Microsoft.AspNetCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
    Microsoft.NETCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
    Microsoft.WindowsDesktop.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]

  Download .NET:
    https://aka.ms/dotnet-download

  Learn about .NET Runtimes and SDKs:
    https://aka.ms/dotnet/runtimes-sdk-info
  ```

  </details>

* `dotnet --list-sdks` — lists all installed SDKs. Uninstall old versions after installing a new one:

  ```text
  dotnet --list-sdks
  ```
  
  <details>
  <summary>Example output</summary>

  ```text
  6.0.429 [C:\Program Files\dotnet\sdk]
  ```

  </details>

* `dotnet --list-runtimes` — lists all installed runtimes:

  ```text
  dotnet --list-runtimes
  ```

  <details>
  <summary>Example output</summary>

  ```text
  Microsoft.AspNetCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
  Microsoft.NETCore.App 6.0.36 [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
  ```

  </details>

### Uninstallation

<TableTabs label="Choose uninstallation method: " :labels="{ TuxCare_Installer: 'TuxCare Installer', PowerShell_Script: 'PowerShell script', Windows_Settings: 'Windows Settings', Control_Panel: 'Control Panel' }">

<template #TuxCare_Installer>

Run TuxCare Installer, untick the installed (green) runtime or SDK, and click **Continue**.

To remove everything installed by TuxCare Installer, open **Settings** &rarr; **Apps**, find *TuxCare Installer*, and click **Uninstall**. Then choose **Uninstall products** to remove all products installed by TuxCare Installer, or **Keep products** to remove only the installer.

A silent removal of TuxCare Installer, as deployment tools run it, cannot ask this question and keeps the products:

```text
TuxCare.Installer.exe /uninstall /quiet
```

To uninstall the products too and release the registration, add `UninstallProducts=1`:

```text
TuxCare.Installer.exe /uninstall /quiet UninstallProducts=1
```

</template>

<template #PowerShell_Script>

To uninstall a runtime or SDK, run the script with the file name shown by `-List`:

```text
.\tuxcare-installer.ps1 -Uninstall aspnetcore-runtime-8.0.22-win-x64.exe
```

To remove everything installed with the script or TuxCare Installer and release the registration, run:

```text
.\tuxcare-installer.ps1 -Delete
```

The script asks whether to uninstall or keep the installed products. Add `-UninstallProducts` to uninstall them or `-KeepProducts` to keep them, and the script does not ask.

</template>

<template #Windows_Settings>

Open **Settings** &rarr; **Apps** &rarr; **Installed Apps** (or **Apps & Features** on older versions). Search for *.NET SDK* or *.NET Runtime* depending on what you've installed. Click on each entry and select **Uninstall**.

:::tip
During the uninstall, a **"Files in use"** window can appear. Select the **"Do not close applications. A reboot will be required"** option and click **OK** to proceed.
:::

A dialog window appears. Click **Uninstall**. The process takes a few minutes. When it finishes, close the window.

![Uninstalling via Windows Settings](/images/dotnet-uninstall-settings.webp)

</template>

<template #Control_Panel>

Open **Control Panel** &rarr; **Programs** &rarr; **Programs and Features**. Search for *.NET SDK* or *.NET Runtime*, right-click on each entry and select **Uninstall**.

:::tip
During the uninstall, a **"Files in use"** window can appear. Select the **"Do not close applications. A reboot will be required"** option and click **OK** to proceed.
:::

A dialog window appears. Click **Uninstall**. The process takes a few minutes. When it finishes, close the window.

![Uninstalling via Control Panel](/images/dotnet-uninstall-controlpanel.webp)

</template>

</TableTabs>

After uninstalling .NET some files may remain in `C:\Program Files\dotnet\` and `C:\Users\<user>\.dotnet\`. Delete these folders manually to fully remove .NET.

## Frequent Issues

* **How do I update .NET if a new version is released?**

  Run TuxCare Installer: the new build appears in the list next to the installed one. Tick it and click **Continue**. To remove the old build, untick it.

  With manual installation, download the latest installer and follow the manual installation steps above. After installing the new version, it's recommended to remove the previous one.

* **The installation fails with "needs administrator rights", or says it was cancelled.**

  Installing .NET changes the whole machine. Click **Yes** when Windows asks for permission (User Account Control), or run TuxCare Installer as administrator. Clicking **No** on the prompt cancels the installation of that file.

* **.NET shows "(Not Authenticated)" in TuxCare Installer.**

  Your license or token does not cover .NET. Contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

* **"TuxCare .NET Standard Targeting Pack" stays in Settings &rarr; Apps after uninstalling an SDK.**

  Other SDKs on the machine share this package, for example, the one Visual Studio installs. Windows keeps it while another SDK still depends on it, so you can leave it in place.

* **What should I do if there are conflicts during installation?**

  If you encounter conflicts, try uninstalling the previous version before installing the new one. In most cases, .NET versions can coexist without issues, but removing the older version may help resolve compatibility problems.

## What's Next?

<WhatsNext hide-title>

* ![](/images/box.webp) [ELS NuGet Repository](/els-for-libraries/dotnet/) — Set up the TuxCare NuGet feed, install patched packages, and manage .NET package dependencies
* ![](/images/book.webp) [Official .NET documentation](https://learn.microsoft.com/en-us/dotnet/fundamentals/) — Getting started guides, API reference, and platform fundamentals

</WhatsNext>
