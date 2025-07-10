<!-- markdownlint-disable MD059 -->

# FIPS packages for AlmaLinux Community

Below are the instructions for installing the TuxCare FIPS 140-3 validated modules for AlmaLinux 9.6, they should be run as root.

**For commercial customers of our ESU product, please use the instructions [here](/enterprise-support-for-almalinux/#enabling-fips-140-3-mode) instead.**

By installing this software, you agree to be bound by the terms of the [TuxCare Community EULA](https://tuxcare.com/wp-content/uploads/2023/09/COMMUNITY-EULA.txt).

```text
# dnf -y install https://repo.tuxcare.com/fips/tuxcare-fips-release-latest-9.noarch.rpm
# dnf -y install openssl-3.2.2-6.el9_6.1.tuxcare.6 kernel-5.14.0-570.21.1.el9_6.tuxcare.1
# fips-mode-setup --enable
# reboot
```

Once you've logged in after the reboot, run this to confirm it worked (doesn't have to be root):

```text
$ fips-mode-setup --check
FIPS mode is enabled.

$ uname -r
5.14.0-570.21.1.el9_6.tuxcare.1.x86_64
```

If you wish to stay on the FIPS validated kernel/openssl packages when a newer AlmaLinux package is available, you can use `dnf versionlock` like so:

```text
# dnf -y install 'dnf-command(versionlock)'
# dnf versionlock add openssl*tuxcare* kernel*tuxcare*
```

To revert to the previous behaviour of getting updated kernel/openssl packages from AlmaLinux, run the following as root:

```text
# dnf versionlock delete openssl*tuxcare* kernel*tuxcare*
```

Alternatively you could set the `priority` level on the tuxcare repo to prefer the TuxCare packages:

```text
# dnf config-manager --save --setopt="tuxcare-fips-community.priority=1"
```

And to revert:

```text
# dnf config-manager --save --setopt="tuxcare-fips-community.priority="
```
