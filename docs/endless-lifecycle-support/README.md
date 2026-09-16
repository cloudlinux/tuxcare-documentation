# Endless Lifecycle Support

Endless Lifecycle Support (ELS) from TuxCare provides security fixes for software that has reached end of life — [operating systems](/els-for-os/), [runtimes](/els-for-runtimes/), [language ecosystems](/els-for-libraries/) and [applications](/els-for-applications/). It lets you keep running what you have without a rushed upgrade or a code rewrite. [SecureChain](/securechain/) covers packages that are still supported upstream, with verified, signed builds whose coverage carries on past end of life.

Start here to see how ELS is delivered and which product fits your case. Installation commands live on the product pages.

## What do you want to do?

| Use case | What it covers |
| :--- | :--- |
| [Patch an end-of-life Linux server](/els-for-os/) | CentOS, Oracle Linux, Debian, Ubuntu and others — no rebuilds, no downtime |
| [Stay on an end-of-life runtime](/els-for-runtimes/) | PHP, Python, Node.js, Ruby, .NET, OpenJDK — no code changes |
| [Patch an end-of-life dependency](/els-for-libraries/) | Java, JavaScript, Python, PHP and .NET packages — no rewrites |
| [Secure an end-of-life application](/els-for-applications/) | MariaDB, MySQL, PostgreSQL, Apache Tomcat and others |
| [Harden packages still supported upstream](/securechain/) | Signed, verified builds from a TuxCare registry. JavaScript today |
| [Check what has been fixed](https://tuxcare.com/cve-tracker/) | Patched vulnerabilities, browsable in the CVE Tracker |
| Feed a compliance pipeline | SBOM, VEX, OVAL, CSAF, errata, RSS feeds, GPG signatures — for [operating systems](/els-for-os/machine-readable-security-data/), [runtimes](/els-for-runtimes/machine-readable-security-data/), [ecosystems](/els-for-libraries/machine-readable-security-data/), [applications](/els-for-applications/machine-readable-security-data/) |

## How ELS reaches your system

TuxCare delivers ELS in two ways. Which one applies depends on what you are patching, not on the subscription you hold.

### OS-level — a repository on the server

You run an installation script with your license key. The script registers a TuxCare repository, and from then on your usual package manager does the work — `yum update` or `apt upgrade`. Patched packages replace the end-of-life ones in place, and nothing about your update routine changes.

This is how ELS for Operating Systems, Runtimes and Applications is delivered.

Once the repository is registered, see Managing the ELS repository for [operating systems](/els-for-os/managing-els-repository/) or for [applications](/els-for-applications/managing-els-repository/).

### Package-level — a registry for your build

You receive Nexus credentials and point your package manager at the TuxCare registry — npm, Maven or Gradle, pip, Composer, NuGet, each configured the way it normally is. Patched releases are drop-in replacements published under the same package names with a TuxCare suffix, so your dependency declarations keep working.

This is how ELS for Language Ecosystems is delivered. Registry addresses and the exact config file for your ecosystem are on each product page.

<!-- TODO: delivery-model diagram — link the visuals ticket when created -->

## Getting access

What you need depends on the delivery model.

<ELSPrerequisites>

* **A license key** — for the OS-level model. The installation script takes it as an argument.
* **Nexus credentials** — a username and password for the package-level model, used by your package manager.
* Contact [sales@tuxcare.com](mailto:sales@tuxcare.com) to obtain a license key or Nexus credentials.

</ELSPrerequisites>

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
* ![](/images/star.webp) [SecureChain for Open Source](/securechain/) — Signed, verified packages from a TuxCare-managed registry
* ![](/images/shield.webp) [Support Portal](https://tuxcare.com/support-portal/) — Open a ticket with the TuxCare team

</WhatsNext>
