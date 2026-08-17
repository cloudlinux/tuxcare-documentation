# .NET

Endless Lifecycle Support (ELS) for .NET from TuxCare delivers security fixes for .NET library, framework, and tool packages, distributed through NuGet packages. This allows you to continue running your .NET applications without vulnerability concerns, even after official support has ended.

NuGet is the standard package manager for .NET, used to deliver the reusable components that applications depend on. ELS applies fixes at the package level, so your applications receive security updates without requiring changes to your own code.

## Supported NuGet packages

* .NET 6, 8, 10
* AutoMapper 2.2.2, 3.3.2, 4.2.2, 5.2.1, 6.2.3, 7.0.2, 8.1.2, 9.0.1, 10.1.2, 11.0.2, 12.0.2, 13.0.2, 14.0.1
* jose-jwt 2.6.2
* log4net 1.2.15, 1.2.16
* Microsoft.Azure.Storage.DataMovement 1.2.0, 1.2.1
* Microsoft.Data.SqlClient 1.1.4, 1.1.5
* Microsoft.Owin 3.1.0, 3.1.1
* MimeKit 3.6.1, 3.6.2
* Newtonsoft.Json 4.5.11, 4.5.12, 6.0.8, 6.0.9, 8.0.3, 8.0.4, 9.0.1, 9.0.2, 10.0.3, 10.0.4, 11.0.2, 11.0.3, 12.0.3, 12.0.4, 13.0.5
* NHibernate 4.1.2.4001
* Refit 6.3.2, 6.3.3
* RestSharp 108.0.3, 108.0.4, 110.2.0, 110.2.1, 111.4.1, 111.4.2
* SharpZipLib 0.86.0, 0.86.1
* SixLabors.ImageSharp 1.0.5
* System.Formats.Asn1 5.0.1, 7.0.1
* System.Text.Json 7.0.5

Other versions upon request.

## Installation

<ELSPrerequisites>

* .NET SDK installed — TuxCare also provides a supported [.NET SDK build](/els-for-runtimes/dotnet/)
* Nexus repository access credentials (username and password) — contact [sales@tuxcare.com](mailto:sales@tuxcare.com). Anonymous access is disabled.
* To browse available artifacts, visit TuxCare [Nexus](https://nexus.repo.tuxcare.com/) and sign in. You may need to refresh the page after logging in.

</ELSPrerequisites>

<ELSSteps>

1. Locate your project

   Ensure you are in a directory that contains a valid .NET project — the folder must include a `.csproj` file:

   ```text
   dir *.csproj
   ```

   If a `.csproj` file is not found, create a new project:

   ```text
   dotnet new console -o MyProject
   cd MyProject
   ```

2. Register the TuxCare NuGet repository

   Add the `els_dotnet` NuGet source either with the `dotnet` CLI or by editing `nuget.config`. Replace `<els_dotnet_customerN>` with your customer repository name provided by TuxCare.

   <CodeTabs :tabs="[
     { title: 'dotnet CLI', content: cli },
     { title: 'nuget.config', content: configxml }
   ]" />

3. Add your TuxCare credentials

   Replace `USERNAME` and `PASSWORD` with your TuxCare credentials (see [Prerequisites](#prerequisites) above).

   <CodeTabs :tabs="[
     { title: 'dotnet CLI', content: `dotnet nuget update source TuxCare --username USERNAME --password PASSWORD` },
     { title: 'nuget.config', content: credsSnippet }
   ]" />

   :::warning
   Avoid committing credentials to version control. Consider using environment variables or a separate local configuration file for sensitive information.
   :::

   :::tip
   When using the CLI, the password is stored as a hash. When editing `nuget.config` manually, the password is stored in plain text — use `<ClearTextPassword>` only when a hashed password isn't practical.
   :::

4. Verify the source

   To verify that the source was added successfully, list all configured NuGet sources:

   ```text
   dotnet nuget list source
   ```

5. Install the patched package

   Install the TuxCare-maintained release that matches your project:

   ```text
   dotnet add package <PACKAGE_NAME> --version <VERSION>
   ```

   For example:

   ```text
   dotnet add package Newtonsoft.Json --version 12.0.4-tuxcare.1
   ```

   **Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.**

   :::tip

   If you edited `nuget.config` manually, run `dotnet restore` in your project directory to install packages and resolve dependencies against the TuxCare repository:

   ```text
   dotnet restore
   ```

   :::

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=.NET) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=.NET) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=.NET) — Full list of product parts covered by ELS
* ![](/images/shield-alert.webp) [VEX feed](https://security.tuxcare.com/vex/cyclonedx/els_lang_dotnet/) — Vulnerability Exploitability eXchange feed
* ![](/images/wrench.webp) [Managing NuGet sources](/els-for-libraries/managing-els-repository/#dotnetSources) — Add, update, and remove the TuxCare source
* ![](/images/bolt.webp) [Package updates](/els-for-libraries/managing-els-repository/#dotnet) — Update an installed package to a newer TuxCare release

</WhatsNext>

<script setup>

const cli =
`dotnet nuget add source "https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" --name TuxCare`

const configxml =
`<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <clear />
    <add key="TuxCare" value="https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" />
    <add key="nuget" value="https://api.nuget.org/v3/index.json" />
  </packageSources>
</configuration>`

const credsSnippet =
`<packageSourceCredentials>
  <TuxCare>
    <add key="Username" value="USERNAME" />
    <add key="ClearTextPassword" value="PASSWORD" />
  </TuxCare>
</packageSourceCredentials>`

</script>
