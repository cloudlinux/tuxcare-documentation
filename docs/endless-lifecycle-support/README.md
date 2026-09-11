# Endless Lifecycle Support

Endless Lifecycle Support (ELS) from TuxCare provides security fixes for software that has reached end of life — operating systems, runtimes, language ecosystems, and applications. It lets you keep running what you have without a rushed upgrade or a code rewrite.

Start here to see how ELS is delivered and which product fits your case. Installation commands live on the product pages.

## What do you want to do?

* **Keep an end-of-life Linux server patched** — CentOS, Oracle Linux, Debian, Ubuntu, and others, with no risky rebuilds, downtime or hardware upgrades. See [ELS for Operating Systems](/els-for-os/).
* **Keep an application on the runtime it was built for** — PHP, Python, Node.js, Ruby, .NET, OpenJDK, without rushed upgrades or broken code. See [ELS for Runtimes](/els-for-runtimes/).
* **Patch an end-of-life dependency in your build** — Java, JavaScript, Python, PHP and .NET packages, without costly code rewrites. See [ELS for Language Ecosystems](/els-for-libraries/).
* **Secure an end-of-life application** — MariaDB, MySQL, PostgreSQL, Apache Tomcat and others, while avoiding outages and broken workflows. See [ELS for Applications](/els-for-applications/).
* **Check what has been fixed** — browse patched vulnerabilities in the [CVE Tracker](https://tuxcare.com/cve-tracker/).
* **Feed a compliance pipeline** — see [SBOM and VEX](/els-for-libraries/machine-readable-security-data/).

## How ELS reaches your system

TuxCare delivers ELS in two ways. Which one applies depends on what you are patching, not on the subscription you hold.

### OS-level — a repository on the server

You run an installation script with your license key. The script registers a TuxCare repository, and from then on your usual package manager does the work — `yum update` or `apt upgrade`. Patched packages replace the end-of-life ones in place, and nothing about your update routine changes.

This is how ELS for Operating Systems, Runtimes and Applications is delivered.

Once the repository is registered, see Managing the ELS repository for [operating systems](/els-for-os/managing-els-repository/) or for [applications](/els-for-applications/managing-els-repository/).

### Package-level — a registry for your build

You receive Nexus credentials and point your language's package manager at the TuxCare registry. Patched releases are drop-in replacements published under the same package names with a TuxCare suffix, so your dependency declarations keep working.

This is how ELS for Language Ecosystems is delivered.

| Ecosystem  | Package manager | Configured in                       |
| ---------- | --------------- | ----------------------------------- |
| JavaScript | npm             | `.npmrc`                            |
| Java       | Maven, Gradle   | `settings.xml`, `gradle.properties` |
| Python     | pip             | `pip.conf`, `pip.ini`               |
| PHP        | Composer        | `auth.json`                         |
| .NET       | NuGet           | `nuget.config`                      |

Exact registry addresses are on each product page.

<!-- TODO: delivery-model diagram — link the visuals ticket when created -->

## Getting access

What you need depends on the delivery model.

<ELSPrerequisites>

* **A license key** — for the OS-level model. The installation script takes it as an argument.
* **Nexus credentials** — a username and password for the package-level model, used by your package manager.

</ELSPrerequisites>

<ContactSales text="Contact sales@tuxcare.com to obtain a license key or Nexus credentials." />

## Verify

After setup, confirm that TuxCare is actually serving your packages.

On the OS-level model, list the enabled repositories and check that a TuxCare entry appears.

On the package-level model, resolve your dependencies and check that the installed versions carry the TuxCare suffix.

The exact command for your platform is on the product page, along with troubleshooting steps if either check comes back empty.

## What's Next?

<WhatsNext hide-title>

* ![](/images/box.webp) [ELS for Operating Systems](/els-for-os/) — Post-EOL patching for end-of-life Linux distributions
* ![](/images/bolt.webp) [ELS for Runtimes](/els-for-runtimes/) — PHP, Python, Node.js, Ruby, .NET and OpenJDK beyond their EOL
* ![](/images/books.webp) [ELS for Language Ecosystems](/els-for-libraries/) — Patched Java, JavaScript, Python, PHP and .NET packages
* ![](/images/clipboard-notes.webp) [ELS for Applications](/els-for-applications/) — Security fixes for end-of-life open-source applications
* ![](/images/shield.webp) [Support Portal](https://tuxcare.com/support-portal/) — Open a ticket with the TuxCare team

</WhatsNext>
