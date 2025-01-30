# Endless Lifecycle Support for .NET 6

Endless Lifecycle Support (ELS) for .NET 6 from TuxCare provides security fixes for .NET 6 that has reached its end of life. This allows you to continue running .NET 6 applications without vulnerability concerns, even after official support has ended.

### Supported Windows Versions

| OS                      | Version                                                                                                  | Architectures |
| :---------------------: | :------------------------------------------------------------------------------------------------------: | :-----------: |
| **Nano Server**         | 2019, 2022                                                                                               | x64           |
| **Windows**             | 11 (24H2 (IoT), 24H2 (E), 24H2, 23H2, 22H2 (E)), 10 (22H2 (E), 21H2 (E), 21H2 (IoT), 1809 (E), 1607 (E)) | x64, x86      |
| **Windows Server**      | 23H2, 2022, 2019, 2016, 2012-R2, 2012                                                                    | x64, x86      |
| **Windows Server Core** | 2022, 2019, 2016, 2012-R2, 2012                                                                          | x64, x86      |

## Supported .NET 6 Versions

> **SDK 6.0.428**
> The .NET SDK (Software Development Kit) is the recommended option if you plan to develop, build, test, or publish .NET 6 applications. It includes:
> - The .NET Runtime, which is required to run .NET apps.
> - The ASP.NET Core Runtime, so you can develop and host ASP.NET Core web applications out of the box.
> - The .NET CLI and build tools for compiling and managing your .NET 6 projects.
>
> With the SDK, you won't need to install separate runtimes for ASP.NET Core or the Desktop environment—everything is bundled together to streamline development and deployment.

> **ASP.NET Core Runtime 6.0.36**
> The ASP.NET Core Runtime contains the components needed to run ASP.NET Core web applications on .NET 6. It includes libraries and features for building dynamic web pages, RESTful APIs, and real-time communication with SignalR.
>
> *Note:* If you install the full .NET SDK, you already get the ASP.NET Core Runtime.

> **.NET Desktop Runtime 6.0.36**
> The .NET Desktop Runtime allows you to run Windows desktop applications built with Windows Forms or WPF (Windows Presentation Foundation). It focuses on providing a smooth experience for traditional graphical apps on Windows platforms.

> **.NET Runtime 6.0.36**
> The .NET Runtime is the base runtime required to run console or server-based .NET applications. It's more lightweight than the SDK, since it does not include compilers, build tools, or additional libraries for web or desktop development.

TuxCare applies security patches to .NET 6 for the above OS versions, ensuring continued stability and security even beyond the official end-of-life date.