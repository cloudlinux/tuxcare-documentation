# .NET 6

Endless Lifecycle Support (ELS) for .NET 6 from TuxCare provides security fixes for .NET 6 that has reached its end of life. This allows you to continue running .NET 6 applications without vulnerability concerns, even after official support has ended.

## Supported Windows Versions

| OS                      | Version                                                                                                  | Architectures |
| :---------------------: | :------------------------------------------------------------------------------------------------------: | :-----------: |
| **Nano Server**         | 2019, 2022                                                                                               | x64           |
| **Windows**             | 11 (24H2 (IoT), 24H2 (E), 24H2, 23H2, 22H2 (E)), 10 (22H2 (E), 21H2 (E), 21H2 (IoT), 1809 (E), 1607 (E)) | x64, x86      |
| **Windows Server**      | 23H2, 2022, 2019, 2016, 2012-R2, 2012                                                                    | x64, x86      |
| **Windows Server Core** | 2022, 2019, 2016, 2012-R2, 2012                                                                          | x64, x86      |

## Supported .NET 6 Versions

**SDK 6.0.x**
The .NET SDK (Software Development Kit) is the recommended option if you plan to develop, build, test, or publish .NET 6 applications. It includes:

* The .NET Runtime, which is required to run .NET apps.
* The ASP.NET Core Runtime, so you can develop and host ASP.NET Core web applications out of the box.
* The .NET CLI and build tools for compiling and managing your .NET 6 projects.

With the SDK, you won't need to install separate runtimes for ASP.NET Core or the Desktop environment - everything is bundled together to streamline development and deployment.

**ASP.NET Core Runtime 6.0.x**
The ASP.NET Core Runtime contains the components needed to run ASP.NET Core web applications on .NET 6. It includes libraries and features for building dynamic web pages, RESTful APIs, and real-time communication with SignalR.

*Note:* If you install the full .NET SDK, you already get the ASP.NET Core Runtime.

**.NET Desktop Runtime 6.0.x**
The .NET Desktop Runtime allows you to run Windows desktop applications built with Windows Forms or WPF (Windows Presentation Foundation). It focuses on providing a smooth experience for traditional graphical apps on Windows platforms.

**.NET Runtime 6.0.x**
The .NET Runtime is the base runtime required to run console or server-based .NET applications. It's more lightweight than the SDK, since it does not include compilers, build tools, or additional libraries for web or desktop development.

TuxCare applies security patches to .NET 6 for the above OS versions, ensuring continued stability and security even beyond the official end-of-life date.

## Installation via the .NET Installer

### Prerequisites & System Requirements

* Operating System compatibility - please, check the [supported versions](#supported-windows-versions) section above.
* For system requirements, please refer to the [official .NET documentation](https://learn.microsoft.com/en-us/dotnet/fundamentals/).
* Administrator rights for installation
* Check if you have .NET already installed on your system:
  * Open *Command Prompt* (type `cmd` in the search bar) or *PowerShell* (type `powershell` in the search bar) and run the following command:

    <CodeWithCopy>

    ```text
    dotnet --version
    ```

    </CodeWithCopy>

  * If .NET is already installed, the command will return the version number. If it’s not installed, you’ll see an error message.
  * It’s recommended that you first install the latest version of .NET before uninstalling the old one. This ensures a smooth transition without breaking the dependencies.

### Installation Steps

* Obtain the required license to get access to the service.
* Contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to receive the necessary steps for generating your unique access link (tokenized URL). Anonymous access is restricted.
* Follow the provided instructions to create your secure download link.
* Use this link to access and download .NET 6 files.
* Choose the appropriate runtime:
  * **.NET SDK** - Includes everything needed for development, including the runtime and build tools.
  * **.NET Runtime** - Runs .NET applications but does not include development tools.
  * **.NET Runtime Desktop** - Required for running desktop applications built with .NET.
  * **ASP.NET Core Runtime** - Needed for running web applications and services built with ASP.NET Core.
For more information please refer to the [official .NET documentation](https://learn.microsoft.com/en-us/dotnet/fundamentals/).
* Download the corresponding installer based on your system type (x64 or x86). Downloading the latest version is recommended.
  * .NET SDK - Installed via an .exe installer.
  * .NET Runtime, .NET Runtime Desktop, and ASP.NET Core Runtime – Installed via .msi files.

:::tip
In certain versions of some browsers (for example, Edge), you might see a warning after downloading. In this case,  manually allow the download.
:::

:::warning
Note: The following steps use the .NET SDK installation as an example. If you are installing a runtime instead, follow a similar process using the corresponding .msi file.
:::

* Once the installer is downloaded, double-click the file to run it. You’ll see a dialog window. Follow the on-screen instructions:
  ![image](/images/els-dotnet-installation.webp)
  * Accept the **license agreement**.
  * Click **Install** and wait for the process to complete. It should only take a few minutes.
  * Once the installation is finished, click **Close**.
* Verify the installation. Open *Command Prompt* (type `cmd` in the search bar) or *PowerShell* (type `powershell` in the search bar) to confirm that .NET was installed successfully:

  <CodeWithCopy>

  ```text
  dotnet --version
  ```

  </CodeWithCopy>

  Example output:

  ```text
  6.0.429
  ```

## Start Using .NET

Now that .NET is installed, you are ready to start using it. You can create and run .NET applications using the command-line tools or Visual Studio/Visual Studio Code.

If you’re new to .NET, we recommend visiting the [official .NET documentation](https://learn.microsoft.com/en-us/dotnet/fundamentals/) for a deeper understanding of the platform.

### Create and Run a Test Project

For a quick start, you can follow this example to create and run a simple console application:

* Open *Command Prompt* (type `cmd` in the search bar) or *PowerShell* (type `powershell` in the search bar).
* Run the following command to create a new console application:

  <CodeWithCopy>

  ```text
  dotnet new console -o MyTestApp
  ```

  </CodeWithCopy>

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

* Navigate to the newly created folder:

  <CodeWithCopy>

  ```text
  cd MyTestApp
  ```

  </CodeWithCopy>

* Build and run the application:

  <CodeWithCopy>

  ```text
  dotnet run
  ```

  </CodeWithCopy>

  When executed, you should see the following output:

  ```text
  Hello, World!
  ```

### Useful Commands

The following commands are useful for managing and troubleshooting .NET installation.

* `where.exe` dotnet locates the dotnet executable on the system. The output shows the exact path where the dotnet command is installed. By default, the .NET installation is placed in the Program Files\dotnet folder, unless a different destination is chosen during setup.

  <CodeWithCopy>

  ```text
  where.exe dotnet
  ```

  </CodeWithCopy>

  Example output:

  ```text
  C:\Program Files\dotnet\dotnet.exe
  ```

* `dontet --info` displays information about the installed .NET SDKs, runtimes and your OS. It also verifies the .NET is correctly set up.

  <CodeWithCopy>

  ```text
  dotnet --info
  ```

  </CodeWithCopy>

  Example output:

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

* `dotnet –list-sdks` command lists all the .NET SDKs installed on your system. It’s recommended to uninstall the old .NET version after you install a new one.

  <CodeWithCopy>

  ```text
  dotnet --list-sdks
  ```

  </CodeWithCopy>

  Example output:

  ```text
  6.0.429 [C:\Program Files\dotnet\sdk]
  ```

## NuGet Repository (Optional)

Developers working on .NET projects may need a NuGet repository to manage and share packages across projects. TuxCare provides a shared NuGet repository, which you can add with a simple command:

<CodeWithCopy>

```text
dotnet nuget add source \
  https://nexus.repo.tuxcare.com/repository/els_dotnet/index.json \
  --name TuxCare \
  --username $USERNAME \
  --password $PASSWORD
```

</CodeWithCopy>

Replace `$USERNAME` and `$PASSWORD` with the credentials provided by [sales@tuxcare.com](mailto:sales@tuxcare.com).

## Uninstall ELS for .NET 6

### Uninstall via Windows Settings

* Open **Settings** &rarr; **Apps** &rarr; **Installed Apps** or (**Apps&Features** on older versions).
* Search for *.NET SDK* or *.NET Runtime* depending on what you’ve installed.
* Click on each entry and select **Uninstall**.
  :::tip
  During the uninstall,  a **"Files in use"** window can appear. Select **"Do not close applications. A reboot will be required"** option and click **OK** to proceed.
  :::
* A dialog window will appear. Click **Uninstall**. It should take a few minutes. When the process is finished, close the window.

<video autoplay loop muted playsinline style="max-width: 100%; border-radius: 8px;">
  <source src="/images/dotnet-uninstall-settings.webm" type="video/webm">
  <source src="/images/dotnet-uninstall-settings.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Uninstall via Control Panel

* Open **Control Panel** &rarr; **Programs** &rarr; **Programs and Features**.
* Search for *.NET SDK* or *.NET Runtime* depending on what you’ve installed.
* Right-click on each entry and select **Uninstall**.
  :::tip
  During the uninstall,  a **"Files in use"** window can appear. Select **"Do not close applications. A reboot will be required"** option and click **OK** to proceed.
  :::
* A dialog window will appear. Click **Uninstall**. It should take a few minutes. When the process is finished, close the window.

<video autoplay loop muted playsinline style="max-width: 100%; border-radius: 8px;">
  <source src="/images/dotnet-uninstall-controlpanel.webm" type="video/webm">
  <source src="/images/dotnet-uninstall-controlpanel.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Remove Remaining Files

After uninstalling .NET some files may remain in the following locations:

* `C:\Program Files\dotnet\`
* `C:\Users\<user>\.dotnet\`

Consider deleting the folders manually to fully remove .NET.

## Frequent Issues

**How do I update .NET if a new version is released?**

Currently, to update .NET, you need to manually download the latest installer and follow the installation steps described above. After installing the new version, it’s recommended to remove the previous one. In the future, an automatic update mechanism for the components will be provided.

**What should I do if there are conflicts during installation?**

If you encounter conflicts, try uninstalling the previous version before installing the new one. In most cases, .NET versions can coexist without issues, but removing the older version may help resolve compatibility problems.