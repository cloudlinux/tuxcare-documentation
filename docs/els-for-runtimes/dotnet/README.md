# .NET

Endless Lifecycle Support (ELS) for .NET from TuxCare provides security fixes for .NET that has reached its end of life. This allows you to continue running .NET applications without vulnerability concerns, even after official support has ended.

## Supported Versions

| Windows Version                                         | .NET 6 | .NET 8 | .NET 10 | Architectures |
|---------------------------------------------------------|:------:|:------:|:-------:|:-------------:|
| **Nano Server 2019, 2022**                              | ✓      | ✓      | ✓       | x64           |
| **Nano Server 2025**                                    | —      | ✓      | ✓       | x64           |
| **Windows 11** (24H2, 23H2, 22H2 E/Edu)                 | ✓      | ✓      | ✓       | x64           |
| **Windows 10** (22H2)                                   | ✓      | ✓      | ✓       | x64           |
| **Windows Server** 2025                                 | —      | ✓      | ✓       | x64           |
| **Windows Server** 2022, 2019, 2016, 2012-R2, 2012      | ✓      | ✓      | ✓       | x64, x86      |
| **Windows Server Core** 2022, 2019, 2016, 2012-R2, 2012 | ✓      | ✓      | ✓       | x64, x86      |

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Available Runtimes

Choose the component that fits your use case. For more details, refer to the [official .NET documentation](https://learn.microsoft.com/en-us/dotnet/fundamentals/). TuxCare applies security patches to .NET for the above OS versions, ensuring continued stability and security even beyond the official end-of-life date.

<TableTabs>

  <template #SDK>

The .NET SDK (Software Development Kit) is the recommended option if you plan to develop, build, test, or publish .NET applications. It includes the .NET Runtime (required to run .NET apps), the ASP.NET Core Runtime (for hosting web applications out of the box), and the .NET CLI and build tools for compiling and managing your projects.

With the SDK, you won't need to install separate runtimes for ASP.NET Core or the Desktop environment - everything is bundled together to streamline development and deployment.

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

<ELSPrerequisites>

* A supported Windows version — see the [compatibility table](#supported-versions) above
* Administrator rights
* Secure download link (tokenized URL) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to receive instructions for generating one
* Check if .NET is already installed — open **Command Prompt** (`cmd`) or **PowerShell** and run:
  ```
  dotnet --version
  ```
  If .NET is already installed, the command will return the version number. If it's not installed, you'll see an error message. Install the latest version of .NET before uninstalling the old one to ensure a smooth transition without breaking the dependencies.

</ELSPrerequisites>

:::warning
The following steps use the .NET SDK installation as an example. If you are installing a runtime instead, follow a similar process using the corresponding .msi file.
:::

<ELSSteps>

1. Download the installer

   Use your tokenized URL (see [Prerequisites](#prerequisites) above) to access the download page. Choose the appropriate runtime (SDK, Runtime, Desktop Runtime, or ASP.NET Core Runtime) and download the installer for your architecture (x64 or x86). Downloading the latest version is recommended.

   The .NET SDK is installed via an `.exe` installer. The .NET Runtime, Desktop Runtime, and ASP.NET Core Runtime are installed via `.msi` files.

   :::tip
   In certain versions of some browsers (for example, Edge), you might see a warning after downloading. In this case, manually allow the download.
   :::

2. Run the installer

   Double-click the downloaded file. Accept the **license agreement** and click **Install**.

   ![TuxCare .NET installer showing the license agreement with the Install button](/images/els-dotnet-installation.webp)

3. Complete the installation

   Wait for the process to finish, then click **Close**.

4. Verify the installation

   Open **Command Prompt** or **PowerShell** and run:

   ```text
   dotnet --version
   ```

   Example output:

   ```text
   6.0.429
   ```

5. Create and run a test project

   Create a new console application to confirm everything works:

   ```text
   dotnet new console -o MyTestApp
   ```

   Example output:

   ```text
   Welcome to .NET 6.0!
   ---------------------
   SDK Version: 6.0.429

   ----------------------------------------------------------------------------
   The template "Console App" was created successfully.

   Processing post-creation actions...
   Running 'dotnet restore' on C:\Users\user\MyTestApp\MyTestApp.csproj...
     Determining projects to restore...
     Restored C:\Users\user\MyTestApp\MyTestApp.csproj (in 115 ms).
   Restore succeeded.
   ```

   Navigate to the folder and run it:

   ```text
   cd MyTestApp
   dotnet run
   ```

   Expected output:

   ```text
   Hello, World!
   ```

</ELSSteps>

## Additional configurations

### Useful commands

* `where.exe dotnet` — locates the dotnet executable on the system:

  ```text
  where.exe dotnet
  ```

  Example output:

  ```text
  C:\Program Files\dotnet\dotnet.exe
  ```

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
  
  Example output:

  ```text
  6.0.429 [C:\Program Files\dotnet\sdk]
  ```

### Uninstallation

* **Via Windows Settings** 
  
  Open **Settings** &rarr; **Apps** &rarr; **Installed Apps** (or **Apps & Features** on older versions). Search for *.NET SDK* or *.NET Runtime* depending on what you've installed. Click on each entry and select **Uninstall**.

  :::tip
  During the uninstall, a **"Files in use"** window can appear. Select the **"Do not close applications. A reboot will be required"** option and click **OK** to proceed.
  :::

  A dialog window will appear. Click **Uninstall**. It should take a few minutes. When the process is finished, close the window.

  ![Uninstalling via Windows Settings](/images/dotnet-uninstall-settings.webp)

* **Via Control Panel**
  
  Open **Control Panel** &rarr; **Programs** &rarr; **Programs and Features**. Search for *.NET SDK* or *.NET Runtime*, right-click on each entry and select **Uninstall**.

  :::tip
  During the uninstall, a **"Files in use"** window can appear. Select the **"Do not close applications. A reboot will be required"** option and click **OK** to proceed.
  :::

  A dialog window will appear. Click **Uninstall**. It should take a few minutes. When the process is finished, close the window.

  ![Uninstalling via Control Panel](/images/dotnet-uninstall-controlpanel.webp)

* **Remove remaining files**
  
  After uninstalling .NET some files may remain in `C:\Program Files\dotnet\` and `C:\Users\<user>\.dotnet\`. Delete these folders manually to fully remove .NET.

## Frequent Issues

* **How do I update .NET if a new version is released?**

  Currently, to update .NET, you need to manually download the latest installer and follow the installation steps described above. After installing the new version, it's recommended to remove the previous one. In the future, an automatic update mechanism for the components will be provided.

* **What should I do if there are conflicts during installation?**

  If you encounter conflicts, try uninstalling the previous version before installing the new one. In most cases, .NET versions can coexist without issues, but removing the older version may help resolve compatibility problems.

## What's Next?

<WhatsNext hide-title>

* ![](/images/box.webp) [ELS NuGet Repository](/els-for-libraries/dotnet/) — Set up the TuxCare NuGet feed, install patched packages, and manage .NET package dependencies
* ![](/images/book.webp) [Official .NET documentation](https://learn.microsoft.com/en-us/dotnet/fundamentals/) — Getting started guides, API reference, and platform fundamentals

</WhatsNext>
