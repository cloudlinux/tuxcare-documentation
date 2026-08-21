import{_ as u}from"./wrench-730959f9.js";import{_ as c,U as n,n as m,p,q as e,L as s,E as l,C as t,v as b}from"./framework-520e1760.js";const h={};function f(v,a){const i=n("ELSPrerequisites"),r=n("ELSSteps"),o=n("RouterLink"),d=n("WhatsNext");return m(),p("div",null,[a[6]||(a[6]=e("h1",{id:"debian-11-els",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debian-11-els","aria-hidden":"true"},"#"),s(" Debian 11 ELS")],-1)),a[7]||(a[7]=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),s(" Installation")],-1)),l(i,null,{default:t(()=>a[0]||(a[0]=[e("ul",null,[e("li",null,"A valid TuxCare Endless Lifecycle Support (ELS) license key"),e("li",null,"Root access to the server"),e("li",null,[s("TCP port 443 open to "),e("code",null,"cln.cloudlinux.com"),s(" and "),e("code",null,"repo.tuxcare.com")]),e("li",null,[s("Architecture: x86_64. For other architectures, please contact our "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com"),s(".")])],-1)])),_:1,__:[0]}),l(r,null,{default:t(()=>a[1]||(a[1]=[e("ol",null,[e("li",{id:"download-the-install-script"},[e("p",null,"Download the install script"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`wget https://repo.tuxcare.com/debian11-els/install-debian11-els-repo.sh
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])]),e("li",{id:"run-with-your-license-key-see-prerequisites-above"},[e("p",null,[s("Run with your license key (see "),e("a",{href:"#prerequisites"},"Prerequisites"),s(" above)")]),e("p",null,"The script registers the server in the CLN with the key, adds a PGP key to the server."),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`bash install-debian11-els-repo.sh --license-key XXXXXXXXXXX
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])]),e("li",{id:"verify-that-the-installation-was-successful-by-running-the-following-command"},[e("p",null,"Verify that the installation was successful by running the following command"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`apt-cache show els-os-release
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,[s("It should return information about the available package. If the package information is displayed, the installation was successful. After that, you can install updates from the repository using a standard "),e("code",null,"apt upgrade"),s(" command.")]),e("p",null,"Example:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`root@localhost:~# apt-cache show els-os-release
Package: els-os-release
Version: 1.0.0-2
Architecture: amd64
Maintainer: Koba Karaputadze <kkaraputadze@cloudlinux.com>
Installed-Size: 17
Conflicts: els-define
Replaces: els-define
Homepage: https://tuxcare.com/extended-lifecycle-support/
Priority: optional
Section: utils
Filename: pool/main/e/els-os-release/els-os-release_1.0.0-2_amd64.deb
Size: 5306
SHA256: 7dcf088f7bf1b3f52d0cbed9fe5d28d8ab1f500dd3b074c6870080304536e089
SHA1: 88017e5910372c00a27dc0df1de53faf3894affb
MD5sum: 44f0dae3fa554ac69d9c666d83540bae
Description: ELS os release package for deb systems
Description-md5: f3fdfd5cb5f71a4ebb6f1f40c8d57483
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])])],-1)])),_:1,__:[1]}),a[8]||(a[8]=e("h2",{id:"whats-next",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#whats-next","aria-hidden":"true"},"#"),s(" What's Next?")],-1)),l(d,{"hide-title":""},{default:t(()=>[b(` re-enable when available
* ![](/images/shield-alert.webp) [OVAL](https://security.tuxcare.com/oval/els_os/debian11els/oval.xml) — Open Vulnerability and Assessment Language (OVAL) security data
* ![](/images/unlock-alt.webp) [CSAF](https://security.tuxcare.com/csaf/v2/els_os/debian11els/) — Common Security Advisory Framework (CSAF) security advisories

* ![](/images/eye.webp) [CVE Tracker](https://tuxcare.com/cve-tracker/?product=Debian+11+ELS) — Track vulnerability fixes and updates
<!-- re-enable when available
* ![](/images/shield.webp) [Machine-Readable Security Data](/els-for-os/machine-readable-security-data/) — Errata, OVAL, CSAF
* ![](/images/box.webp) [Supported packages list](https://tuxcare.com/cve-tracker/products/?product=Debian+11+ELS) — Full list of packages covered by ELS
`),e("ul",null,[e("li",null,[a[3]||(a[3]=e("img",{src:u,alt:""},null,-1)),a[4]||(a[4]=s()),l(o,{to:"/els-for-os/managing-els-repository/"},{default:t(()=>a[2]||(a[2]=[s("Managing the ELS repository",-1)])),_:1,__:[2]}),a[5]||(a[5]=s(" — Updates and other repository operations",-1))])])]),_:1})])}const y=c(h,[["render",f],["__file","index.html.vue"]]);export{y as default};
