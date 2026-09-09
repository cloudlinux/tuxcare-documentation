# OpenJDK

Endless Lifecycle Support (ELS) from TuxCare provides security fixes for OpenJDK versions that have reached end-of-life. This allows you to continue running your OpenJDK-based applications without vulnerability concerns, even after official support has ended.

## Supported OS and OpenJDK versions

| OS                                            | Package Type | OS Version                      | OpenJDK version |
| :-------------------------------------------: | :----------: | :-----------------------------: | :-------------: |
| EL 6 (CentOS, CloudLinux, Oracle Linux)       | RPM          | 6.x                             | 7, 8            |
| EL 7 (CentOS, CloudLinux, Oracle Linux, RHEL) | RPM          | 7.x                             | 8, 11           |
| EL 8 (CentOS, CentOS Stream)                  | RPM          | 8.x                             | 8, 11           |
| EL 9 (AlmaLinux, TuxCare ESU)                 | RPM          | 9.x                             | 8, 11, 17       |
| Windows                                       | ZIP          | Windows Server 2019, 2022, 2025 | 8, 11, 17       |

**Supported architectures:**

* Linux — x86_64 (64-bit)
* Windows — x64 (64-bit)

<ContactSales text="Other versions and architectures available upon request. Contact sales@tuxcare.com for more information." />

## Installation on Linux     <ELSBadge>Docker compatible</ELSBadge>

<ELSPrerequisites>

* A valid TuxCare ELS license key — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* Root or `sudo` access to the server

</ELSPrerequisites>

<ELSSteps>

1. Download the installer script

   ```text
   wget https://repo.tuxcare.com/openjdk-els/install-openjdk-els-repo.sh
   ```

2. Run the installer script with your license key (see [Prerequisites](#prerequisites) above)

   ```text
   sh install-openjdk-els-repo.sh --license-key XXXXXXXXXXX
   ```

3. Verify the repository is enabled

   ```text
   yum repolist | grep openjdk-els
   ```

4. Install OpenJDK

   <TableTabs label="OpenJDK version: " >

   <template #7>

   ```text
   yum install java-1.7.0-openjdk
   ```

   </template>

   <template #8>

   ```text
   yum install java-1.8.0-openjdk
   ```

   </template>

   <template #11>

   ```text
   yum install java-11-openjdk
   ```

   </template>

   <template #17>

   ```text
   yum install java-17-openjdk
   ```

   </template>

   </TableTabs>

5. Verify the installation

   ```text
   java -version
   ```

</ELSSteps>

## Installation on Windows

ELS OpenJDK for Windows ships as a `.zip` archive: extract it and point `JAVA_HOME` at the extracted folder.

Each release provides three files:

| File | Purpose |
|---|---|
| `openjdk-<version>-tuxcare-els<N>-windows-x64.zip` | The JDK (compiler and runtime) |
| `SHA256SUMS` | Checksum of the archive |
| `manifest.json` | Provenance: source revision, ELS counter, build host |

`<version>` is the Java version (`1.8.0_xxx`, `11.0.x`, `17.0.x`) and `els<N>` is the TuxCare ELS respin counter.

<ELSPrerequisites id="windows-prerequisites">

* A valid TuxCare ELS license key or access to the secure download URL — contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain one
* A supported Windows version — see [Supported OS and OpenJDK versions](#supported-os-and-openjdk-versions) above
* Administrator access is required only for a machine-wide installation (step 4b); a single-user installation (step 4a) needs no elevation

</ELSPrerequisites>

<ELSSteps>

1. Download the package

   Download the `.zip`, `SHA256SUMS` and `manifest.json` for your version and the x64 architecture from the secure download URL provided by TuxCare.

2. Verify the download (optional)

   In PowerShell, run the following from the folder that contains the archive and `SHA256SUMS`:

   ```text
   $zip  = "openjdk-<version>-tuxcare-els<N>-windows-x64.zip"
   $want = (Select-String -Path SHA256SUMS -Pattern ([regex]::Escape($zip))).Line.Split()[0]
   $got  = (Get-FileHash -Algorithm SHA256 $zip).Hash.ToLower()
   if ($got -eq $want.ToLower()) { "OK" } else { "MISMATCH" }
   ```

3. Extract the archive

   Extract to a location without spaces in the path, such as `C:\Java`:

   ```text
   tar.exe -x -f "openjdk-<version>-tuxcare-els<N>-windows-x64.zip" -C C:\Java
   ```

   The archive unpacks into a single top-level folder. Its name depends on the version:

   * **OpenJDK 11 and 17** — `C:\Java\jdk`
   * **OpenJDK 8** — `C:\Java\j2sdk-image`

   Confirm it exists — this is the path you set as `JAVA_HOME` in the next step:

   ```text
   Test-Path "C:\Java\jdk\bin\java.exe"
   ```

4. Configure the environment

   Set `JAVA_HOME` and add its `bin` directory to `PATH`.

   *4a. Current user (no administrator rights required):*

   ```text
   $jdk = "C:\Java\jdk"
   [Environment]::SetEnvironmentVariable("JAVA_HOME", $jdk, "User")
   $p = [Environment]::GetEnvironmentVariable("Path", "User")
   if ($p -notlike "*$jdk\bin*") { [Environment]::SetEnvironmentVariable("Path", "$jdk\bin;$p", "User") }
   ```

   *4b. All users:* run PowerShell as Administrator and use `"Machine"` in place of `"User"` in the commands above.

   :::tip
   Open a new terminal afterwards — environment changes are not visible in the window that made them.
   :::

5. Verify the installation

   ```text
   java -version
   javac -version
   ```

   Example output:

   ```text
   openjdk version "17.0.14" 2026-01-21
   OpenJDK Runtime Environment (build 17.0.14+7)
   OpenJDK 64-Bit Server VM (build 17.0.14+7, mixed mode, sharing)
   javac 17.0.14
   ```

   :::warning
   Use the single-dash `-version`: it works on every version. The double-dash `--version` was added in JDK 9, so it works on OpenJDK 11 and 17 but not on OpenJDK 8.
   :::

   :::tip
   If `java -version` reports a version you did not install, another JDK comes earlier in `PATH`. Run `where.exe java` to see which one is being picked up.
   :::

6. Compile and run a test program

   ```text
   $src = "$env:TEMP\Hello"; New-Item -ItemType Directory -Force -Path $src | Out-Null
   'public class Hello { public static void main(String[] a){ System.out.println("Hello, World!"); } }' |
       Set-Content "$src\Hello.java" -Encoding ascii
   javac -d $src "$src\Hello.java"
   java -cp $src Hello
   ```

   Expected output:

   ```text
   Hello, World!
   ```

</ELSSteps>

### Removing OpenJDK on Windows

The JDK is not registered with Windows and does not appear in Add or Remove Programs. To uninstall:

<ELSSteps>

1. Delete the extracted JDK folder

   For example, `C:\Java\jdk`.

2. Remove the environment variables

   Delete `JAVA_HOME` and the `...\bin` entry from `PATH`. Use the same scope you chose during installation — user, machine, or both.

</ELSSteps>

## What's Next?

<WhatsNext hide-title>

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=OpenJDK) — Track vulnerability fixes and updates
* ![](/images/shield.webp) [Available fixes](https://tuxcare.com/cve-tracker/fixes?product=OpenJDK) — Patched versions and changelogs
* ![](/images/clipboard-notes.webp) [Supported components](https://tuxcare.com/cve-tracker/products?product=OpenJDK) — Full list of product parts covered by ELS

</WhatsNext>