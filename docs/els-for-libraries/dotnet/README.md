# .NET components

Endless Lifecycle Support (ELS) for .NET from TuxCare delivers security fixes for .NET components distributed through NuGet packages. This allows you to continue running your .NET applications without vulnerability concerns, even after official support has ended.

NuGet is the standard package manager for .NET, used to deliver the reusable components applications depend on. ELS applies fixes at the package level, so your applications receive security updates without requiring changes to your own code.

## Supported Versions

**Supported .NET versions**: 6, 8, 10

Other versions upon request.

## Connection to ELS for .NET components Repository

This guide outlines the steps needed to integrate the TuxCare ELS for .NET components repository into your .NET project.

### Prerequisites

* .NET SDK installed. A TuxCare-supported .NET SDK build is also [available](/els-for-runtimes/dotnet/).
* Access to the TuxCare NuGet repository (credentials required).

### Step 1: Get User Credentials

You need a username and password in order to use the TuxCare ELS for .NET components repository. Anonymous access is disabled. To receive the credentials, please contact [sales@tuxcare.com](mailto:sales@tuxcare.com).

### Step 2: Add TuxCare NuGet Source

Add the TuxCare NuGet repository as a package source using the `dotnet` CLI:

<CodeWithCopy>

```text
dotnet nuget add source "https://nexus.repo.tuxcare.com/repository/els_dotnet/index.json" `
  --name TuxCare `
  --username <USERNAME> `
  --password <PASSWORD>
```

</CodeWithCopy>

**Replace `<USERNAME>` and `<PASSWORD>` with the credentials provided by sales.**

To verify that the source was added successfully, list all configured NuGet sources:

<CodeWithCopy>

```text
dotnet nuget list source
```

</CodeWithCopy>

Example output:

```text

```

### Step 3: Navigate to Your Project

Ensure you are in a directory containing a valid .NET project. The folder must contain a `.csproj` file.

<CodeWithCopy>

```text
dir *.csproj
```

</CodeWithCopy>

If a `.csproj` file is found, you can proceed with package installation. If not, you need to navigate to a valid .NET project directory or create a new project:

<CodeWithCopy>

```text
dotnet new console -o MyProject
cd MyProject
```

</CodeWithCopy>

### Step 4: Install a Package

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

You can find a specific component version in your TuxCare account on [Nexus](https://nexus.repo.tuxcare.com/repository/els_dotnet/) (anonymous access is restricted).

### Step 5: Build the Project

After installing the package, verify that everything works correctly by building the project:

<CodeWithCopy>

```text
dotnet build
```

</CodeWithCopy>

If the build completes successfully, the TuxCare package is successfullyintegrated into your project.

## Managing NuGet Sources

### Remove a Source

If you need to remove the TuxCare source:

<CodeWithCopy>

```text
dotnet nuget remove source TuxCare
```

</CodeWithCopy>

### Update Source Credentials

To update the credentials for an existing source, remove and re-add the source:

<CodeWithCopy>

```text
dotnet nuget remove source TuxCare
dotnet nuget add source "https://nexus.repo.tuxcare.com/repository/els_dotnet/index.json" `
  --name TuxCare `
  --username <NEW_USERNAME> `
  --password <NEW_PASSWORD>
```

</CodeWithCopy>

## Upgrading to a Newer TuxCare Version

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