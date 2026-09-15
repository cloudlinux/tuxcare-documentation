// The distributions covered by ELS for OS, and the month each vendor's own
// standard support runs to — Red Hat Maintenance Support, Oracle Premier
// Support, and the equivalent elsewhere. Paid extensions (Ubuntu ESM, Oracle
// Extended Support, Red Hat ELS) are deliberately not counted.
//
// This is the single source for those dates: the selector cards on
// /els-for-os/ and the line under the heading on each distribution page both
// read from here, so a date is corrected in one place. Some dates are still in
// the future, so the wording around them stays tense-neutral.
export default [
    {
        name: "Amazon Linux 2",
        icon: "/images/amazon-linux.webp",
        slug: "amazon-linux-2-els",
        eol: "June 2026"
    },
    {
        name: "Alpine Linux 3.18",
        icon: "/images/alpine-linux.webp",
        slug: "alpine-linux-3-18-els",
        eol: "May 2025"
    },
    {
        name: "CentOS 6",
        icon: "/images/centos.webp",
        slug: "centos-6-els",
        eol: "November 2020"
    },
    {
        name: "CentOS 7",
        icon: "/images/centos.webp",
        slug: "centos-7-els",
        eol: "June 2024"
    },
    {
        name: "CentOS 8",
        icon: "/images/centos.webp",
        slug: "centos-8-els",
        eol: "December 2021"
    },
    {
        name: "CentOS Stream 8",
        icon: "/images/centos-stream.webp",
        slug: "centos-stream-8-els",
        eol: "May 2024"
    },
    {
        name: "CloudLinux 7",
        icon: "/images/cloudlinux.webp",
        slug: "cloudlinux-7-els",
        eol: "June 2024"
    },
    {
        name: "Debian 10",
        icon: "/images/debian.webp",
        slug: "debian-10-els",
        eol: "June 2024"
    },
    {
        name: "Debian 11",
        icon: "/images/debian.webp",
        slug: "debian-11-els",
        eol: "August 2026"
    },
    {
        name: "Oracle Linux 6",
        icon: "/images/Oracle-Linux.webp",
        slug: "oracle-linux-6-els",
        eol: "March 2021"
    },
    {
        name: "Oracle Linux 7",
        icon: "/images/Oracle-Linux.webp",
        slug: "oracle-linux-7-els",
        eol: "December 2024"
    },
    {
        name: "Red Hat Enterprise Linux 7",
        icon: "/images/redhat.webp",
        slug: "red-hat-enterprise-linux-7-els",
        eol: "June 2024"
    },
    {
        name: "Red Hat Enterprise Linux 8",
        icon: "/images/redhat.webp",
        slug: "red-hat-enterprise-linux-8-els",
        eol: "May 2029"
    },
    {
        name: "Ubuntu 16.04",
        icon: "/images/Ubuntu.webp",
        slug: "ubuntu-16-04-els",
        eol: "April 2021"
    },
    {
        name: "Ubuntu 18.04",
        icon: "/images/Ubuntu.webp",
        slug: "ubuntu-18-04-els",
        eol: "May 2023"
    },
    {
        name: "Ubuntu 20.04",
        icon: "/images/Ubuntu.webp",
        slug: "ubuntu-20-04-els",
        eol: "May 2025"
    }
]
