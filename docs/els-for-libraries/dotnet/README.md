# .NET

Endless Lifecycle Support (ELS) for .NET from TuxCare delivers security fixes for .NET library, framework, and tool packages, distributed through NuGet packages. This allows you to continue running your .NET applications without vulnerability concerns, even after official support has ended.

NuGet is the standard package manager for .NET, used to deliver the reusable components that applications depend on. ELS applies fixes at the package level, so your applications receive security updates without requiring changes to your own code.

## Supported Versions

**Supported .NET versions**: 6, 8, 10

Other versions upon request.

## Prerequisites

* .NET SDK installed. A TuxCare-supported .NET SDK build is also [available](/els-for-runtimes/dotnet/).
* Access to the TuxCare .NET NuGet repository (credentials required). To receive the credentials - a username and password - please contact [sales@tuxcare.com](mailto:sales@tuxcare.com). Anonymous access is disabled.

## Adding the Repository

This section describes how to add the TuxCare ELS for .NET repository as a package source.

### Adding the NuGet Source via CLI

Add the TuxCare NuGet repository as a package source using the `dotnet` CLI:

<CodeWithCopy>

```text
dotnet nuget add source "https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" `
  --name TuxCare `
  --username <USERNAME> `
  --password <PASSWORD>
```

</CodeWithCopy>

**Replace `<els_dotnet_customerN>` with your customer repository name, and `<USERNAME>` and `<PASSWORD>` with the credentials provided by sales.**

### Adding the NuGet Source via nuget.config

As an alternative to the CLI, you can configure NuGet package sources using a `nuget.config` file. This approach is useful for sharing configuration across a team or for version-controlled source settings.

#### Understanding NuGet Configuration Hierarchy

NuGet configuration follows a hierarchy (from highest to lowest priority):

1. **Project-level**: `nuget.config` in your project folder
2. **Solution-level**: `nuget.config` in the solution folder (parent directory)
3. **User-level**: `~/.nuget/NuGet/NuGet.Config`
4. **Machine-level**: `/etc/nuget/NuGet/NuGet.Config`

Settings in higher-priority files override those in lower-priority files.

#### Creating a nuget.config File

Create a `nuget.config` file in your project or solution directory:

<CodeWithCopy>

```
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <!-- To inherit the global NuGet package sources remove the <clear/> line below -->
    <clear />
    <add key="TuxCare" value="https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" />
    <add key="nuget" value="https://api.nuget.org/v3/index.json" />
  </packageSources>
</configuration>
```

</CodeWithCopy>

In this configuration:

* The `<clear />` element removes inherited package sources, giving you full control.
* The `nuget` source points to the official NuGet.org repository.
* The `TuxCare` source points to the TuxCare ELS repository.

#### Adding Credentials for nuget.config

If your `nuget.config` requires authentication, you can add credentials using the CLI or by adding a `<packageSourceCredentials>` section to your `nuget.config`:

<CodeTabs :tabs="[
  { title: 'CLI', content: 'dotnet nuget update source TuxCare --username <USERNAME> --password <PASSWORD>' },
  { title: 'nuget.config', content: credsConfig }
]" />

:::warning
Avoid committing credentials to version control. Consider using environment variables or a separate local configuration file for sensitive information.
:::

### Verifying the Source

To verify that the source was added successfully, list all configured NuGet sources:

<CodeWithCopy>

```text
dotnet nuget list source
```

</CodeWithCopy>

Example output:

```text
Registered Sources:
  1.  nuget.org [Enabled]
      https://api.nuget.org/v3/index.json
  2.  TuxCare [Enabled]
      https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json
```

## Working with Packages

This section explains how to install and use packages from the TuxCare repository.

### Navigating to Your Project

Ensure you are in a directory containing a valid .NET project. The folder must contain a `.csproj` file.

<CodeWithCopy>

```text
dir *.csproj
```

</CodeWithCopy>

If a `.csproj` file is found, you can proceed with package installation. If not, create a new project:

<CodeWithCopy>

```text
dotnet new console -o MyProject
cd MyProject
```

</CodeWithCopy>

### Installing Packages

Install a package from the TuxCare repository using the `dotnet add package` command:

<CodeWithCopy>

```text
dotnet add package <PACKAGE_NAME>
```

</CodeWithCopy>

To install a specific version:

<CodeWithCopy>

```text
dotnet add package <PACKAGE_NAME> --version <VERSION>
```

</CodeWithCopy>

For example:

<CodeWithCopy>

```text
dotnet add package Newtonsoft.Json --version 12.0.4-tuxcare-els
```

</CodeWithCopy>

**You can find available package versions in your TuxCare account on Nexus (anonymous access is restricted).**

### Using Package Source Mapping

If you use a `nuget.config` file, you can add package source mapping to route specific packages to the TuxCare feed. This ensures certain packages are always fetched from TuxCare while others come from NuGet.org.

Add a `<packageSourceMapping>` section to your `nuget.config`, for example, Newtonsoft.Json:

<CodeWithCopy>

```
<packageSourceMapping>
  <!-- Allow nuget.org to serve any package -->
  <packageSource key="nuget">
    <package pattern="*" />
  </packageSource>

  <!-- Route specific packages to TuxCare feed -->
  <packageSource key="TuxCare">
    <package pattern="Newtonsoft.*" />
  </packageSource>
</packageSourceMapping>
```

</CodeWithCopy>

**You can find available package versions in your TuxCare account on Nexus (anonymous access is restricted).**

### Building the Project

After installing packages, verify that everything works correctly by building the project:

<CodeWithCopy>

```text
dotnet build
```

</CodeWithCopy>

If the build completes successfully, the TuxCare package is successfully integrated into your project. Check the output folder to confirm that the package DLL (e.g., `Newtonsoft.Json.dll`) was downloaded from the TuxCare repository.

### Upgrading Packages

To upgrade to a newer TuxCare release, update the package in your project:

<CodeWithCopy>

```text
dotnet add package <PACKAGE_NAME> --version <NEW_VERSION>
```

</CodeWithCopy>

Then rebuild the project to verify the upgrade:

<CodeWithCopy>

```text
dotnet build
```

</CodeWithCopy>

## Managing NuGet Sources

This section covers common tasks for managing the TuxCare NuGet source.

### Removing a Source

If you need to remove the TuxCare source:

<CodeWithCopy>

```text
dotnet nuget remove source TuxCare
```

</CodeWithCopy>

### Updating Source Credentials

To update the credentials for an existing source, remove and re-add the source:

<CodeWithCopy>

```text
dotnet nuget remove source TuxCare
dotnet nuget add source "https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" `
  --name TuxCare `
  --username <NEW_USERNAME> `
  --password <NEW_PASSWORD>
```

</CodeWithCopy>

<script setup>

const credsConfig =
`<packageSourceCredentials>
    <TuxCare>
        <add key="Username" value="username" />
        <add key="Password" value="passwordHash" />
    </TuxCare>
</packageSourceCredentials>`
</script>
