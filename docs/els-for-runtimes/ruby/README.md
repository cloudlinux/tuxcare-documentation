# Ruby

Endless Lifecycle Support (ELS) for Ruby from TuxCare provides security fixes for Ruby versions that have reached their end-of-life. This allows you to continue running your server vulnerability-free.

## About ALT-Ruby

alt-ruby is a component provided by TuxCare designed for managing Ruby versions on servers and enabling users to run multiple Ruby versions simultaneously.

Here are the key features and characteristics of alt-ruby:

1. **Multiple Ruby Versions** - alt-ruby allows the installation and usage of various Ruby versions on a single server. This enables users to select the Ruby version that best suits their applications.

2. **User Segmentation** - alt-ruby allows administrators to provide different Ruby versions for different users or applications. Each user can choose the Ruby version that suits their project.

3. **Enhanced Compatibility** - alt-ruby is designed to ensure maximum compatibility with various Ruby applications and frameworks. This includes optimizations and changes to make it compatible with a wide range of Ruby applications.

4. **Updates and Support** - TuxCare provides regular updates for alt-ruby, including bug fixes, performance improvements, and updates for new Ruby versions. This helps ensure the security and currency of Ruby usage.

5. **Easy Version Switching** - alt-ruby allows switching between versions, users can easily manage which Ruby version is active in their environment.

alt-ruby provides a more flexible and convenient environment for working with different Ruby versions on a single server, which is particularly useful in development and production environments where multiple applications have varying requirements for Ruby versions.

## Supported OS and Ruby versions

**Supported architecture:** 64-bit.

| Operating Systems | Package Type | OS Version     |
| :---------------: | :----------: | :------------: |
| Debian            | DEB          | 11, 12         |

**Supported Ruby versions:** 2.6, 2.7, 3.0, 3.1

* Other distros and architectures upon request.

## Installation Instructions

1. Download the installer script:

   <CodeWithCopy>

   ```text
   wget https://repo.alt.tuxcare.com/alt-ruby-els/install-els-alt-ruby-deb-repo.sh
   ```
   </CodeWithCopy>

2. Run the installer script with your key. The installation script registers the server to CLN with the key, and adds our PGP key and repository to the server.

   <CodeWithCopy>

   ```text
   text install-els-alt-ruby-deb-repo.sh --license-key XXX-XXXXXXXXXXXX
   ```

   </CodeWithCopy>   

3. Verify that the installation was successful.

    To ensure the installation has been completed successfully, run the following command. It should return info about a package. If information about the package is available, it means that installation was successful. After which, updates will be available for installation from the repository using the usual command:

   <CodeWithCopy>

    ```text
    apt upgrade
    ```

   </CodeWithCopy>

4. To display detailed information about the installed package, run the following command: 

   <CodeWithCopy>

   ```text
   apt-cache show alt-ruby31
   ```

   </CodeWithCopy>

5. Install Ruby package.

   <CodeWithCopy>

   ```text
   apt-get install alt-ruby31
   ```

   </CodeWithCopy>

6. `alt-ruby` versions are intended to be installed alongside the system's default ruby and allow multiple versions to coexist. To use a specific `alt-ruby` version, please run it directly from its installation directory, for example:

   ```text
   $ source /opt/alt/alt-ruby31/enable
   $ ruby -v 
   ruby 3.1.x
   ```


