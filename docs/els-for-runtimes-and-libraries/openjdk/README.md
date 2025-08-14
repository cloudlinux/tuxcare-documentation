# OpenJDK

Endless Lifecycle Support (ELS) from TuxCare provides security fixes for OpenJDK versions that have reached end-of-life. This allows you to continue running your OpenJDK-based applications without vulnerability concerns, even after official support has ended.

## Supported OS and OpenJDK versions

**Supported architecture:** x86_64.

| OS                                    | Package Type | OS Version    | OpenJDK version |
| :-----------------------------------: | :----------: | :-----------: | :------------: |
| CentOS, CloudLinux, OracleLinux, etc. | RPM          | 6.x, 7.x, 8.x | 8 |
| AlmaLinux                             | RPM          | 8.x, 9.x      | 8 |


*Other versions and architectures upon request.

## Installation Instructions

These steps are suitable for RPM-based systems (CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc).

:::tip
This installation method is suitable for both non-containerized systems and containerized environments (such as Docker containers based on supported OS versions).
:::

1. Download the TuxCare OpenJDK ELS repository package:

   <CodeWithCopy>

   ```text
   wget https://repo.tuxcare.com/java-els/els-openjdk-release-install.x86_64.rpm
   ```

   </CodeWithCopy>

2. Install the repository package:

   <CodeWithCopy>

   ```text
   yum install ./els-openjdk-release-install.x86_64.rpm 
   ```
   </CodeWithCopy>

3. Verify the repository is enabled:

   <CodeWithCopy>

   ```text
   yum repolist | grep java-els
   ```

   </CodeWithCopy>
   
   You can now install OpenJDK versions supported by TuxCare’s Endless Lifecycle Support (ELS).

4. Install OpenJDK, for example, OpenJDK 8:

   <CodeWithCopy>

   ```text
   yum install java-1.8.0-openjdk
   ```

   </CodeWithCopy>

5. Verify the installation:

   <CodeWithCopy>

   ```text
   java -version
   ```

   </CodeWithCopy>

