import{_ as m}from"./eye-bd28630a.js";import{_ as f}from"./bolt-90ed8319.js";import{_ as x}from"./clipboard-notes-eeeedcf5.js";import{_ as h}from"./shield-alert-226df5e9.js";import{_ as b}from"./unlock-alt-12fd40c9.js";import{_ as g}from"./wrench-730959f9.js";import{_ as v,X as a,n as k,p as w,a9 as i,H as o,w as n,t as e,y as t}from"./framework-0e2f11f3.js";const y={id:"add-your-tuxcare-credentials"},C={id:"register-the-tuxcare-repository"},z={id:"install-the-package"},q=`{
  "http-basic": {
    "nexus.repo.tuxcare.com": {
      "username": "USERNAME",
      "password": "PASSWORD"
    }
  }
}`,S=`{
    "repositories": [
        {
        "type": "composer",
        "url": "https://nexus.repo.tuxcare.com/repository/els_php/",
        "options": {
            "http": {
            "verify": true
            }
        }
        }
    ]
}`,j=`composer config repositories.tuxcare '{"type":"composer","url":"https://nexus.repo.tuxcare.com/repository/els_php/","options":{"http":{"verify":true}}}' --json`,T=`{
    "require": {
        "zendframework/zendframework1": "1.12.10-p1+tuxcare"
    }
}`,_=`{
    "require": {
        "zendframework/zendframework": "2.4.13-p1+tuxcare"
    }
}`,L=`{
    "require": {
        "zendframework/zend-form": "2.1.6-p1+tuxcare"
    }
}`,E=`{
    "require": {
        "zendframework/zend-http": "2.5.6-p2+tuxcare"
    }
}`,I=`{
    "require": {
        "zendframework/zend-view": "2.1.6-p1+tuxcare"
    }
}`,P=`{
    "require": {
        "zendframework/zend-session": "2.1.6-p2+tuxcare"
    }
}`,N={__name:"index.html",setup(A){return(R,r)=>{const u=a("ELSPrerequisites"),s=a("CodeTabs"),d=a("TableTabs"),p=a("ELSSteps"),l=a("RouterLink"),c=a("WhatsNext");return k(),w("div",null,[r[23]||(r[23]=i('<h1 id="zend-framework" tabindex="-1"><a class="header-anchor" href="#zend-framework" aria-hidden="true" tabindex="-1">#</a> Zend Framework</h1><p>Endless Lifecycle Support (ELS) for Zend Framework from TuxCare provides security fixes for end-of-life Zend Framework packages. With ELS, you can continue running your applications without vulnerability concerns, even after official support has ended.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true" tabindex="-1">#</a> Supported Versions</h2><ul><li><strong>Zend Framework 1</strong> 1.10.6, 1.11.0, 1.12.10</li><li><strong>Zend Framework</strong> 2.4.13, 2.5.3</li><li><strong>Zend Form</strong> 2.1.6</li><li><strong>Zend View</strong> 2.1.6</li><li><strong>Zend HTTP</strong> 2.5.6</li><li><strong>Zend Session</strong> 2.1.6</li><li><strong>Zend Test</strong> 2.6.1</li></ul><p>Other versions upon request.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true" tabindex="-1">#</a> Installation</h2>',6)),o(u,null,{default:n(()=>r[0]||(r[0]=[e("ul",null,[e("li",null,[t("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[t("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_php",target:"_blank",rel:"noopener noreferrer"},"Nexus"),t(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),o(p,null,{default:n(()=>[e("ol",null,[r[10]||(r[10]=e("li",{id:"locate-the-authjson-file"},[e("p",null,[t("Locate the "),e("code",null,"auth.json"),t(" file")]),e("p",null,[t("Composer reads credentials from a per-user "),e("code",null,"auth.json"),t(". Create or edit the file at:")]),e("ul",null,[e("li",{id:"linuxmacos"},[e("p",null,[e("strong",null,"Linux/macOS"),t(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`~/.composer/auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])]),e("li",{id:"windows"},[e("p",null,[e("strong",null,"Windows"),t(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`%APPDATA%\\Composer\\auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])])])],-1)),e("li",y,[r[1]||(r[1]=e("p",null,"Add your TuxCare credentials",-1)),r[2]||(r[2]=e("p",null,[t("Use either the Composer CLI or edit "),e("code",null,"auth.json"),t(" directly to add credentials for "),e("code",null,"nexus.repo.tuxcare.com"),t(":")],-1)),o(s,{tabs:[{title:"Composer CLI",content:"composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD"},{title:"auth.json",content:q}]},null,8,["tabs"]),r[3]||(r[3]=e("p",null,[t("Replace "),e("code",null,"USERNAME"),t(" and "),e("code",null,"PASSWORD"),t(" with your TuxCare credentials (see "),e("a",{href:"#prerequisites"},"Prerequisites"),t(" above).")],-1))]),e("li",C,[r[4]||(r[4]=e("p",null,"Register the TuxCare repository",-1)),r[5]||(r[5]=e("p",null,[t("Add the "),e("code",null,"els_php"),t(" Composer repository either via CLI or by editing "),e("code",null,"composer.json"),t(":")],-1)),o(s,{tabs:[{title:"Composer CLI",content:j},{title:"composer.json",content:S}]},null,8,["tabs"])]),e("li",z,[r[6]||(r[6]=e("p",null,"Install the package",-1)),r[7]||(r[7]=e("p",null,"Select your package, then install the TuxCare-maintained release that matches your project:",-1)),o(d,{label:"Choose package: "},{zendframework:n(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require zendframework/zendframework:2.4.13-p1+tuxcare"},{title:"composer.json",content:_}]},null,8,["tabs"])]),zendframework1:n(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require zendframework/zendframework1:1.12.10-p1+tuxcare"},{title:"composer.json",content:T}]},null,8,["tabs"])]),"zend-form":n(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require zendframework/zend-form:2.1.6-p1+tuxcare"},{title:"composer.json",content:L}]},null,8,["tabs"])]),"zend-http":n(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require zendframework/zend-http:2.5.6-p2+tuxcare"},{title:"composer.json",content:E}]},null,8,["tabs"])]),"zend-view":n(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require zendframework/zend-view:2.1.6-p1+tuxcare"},{title:"composer.json",content:I}]},null,8,["tabs"])]),"zend-session":n(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require zendframework/zend-session:2.1.6-p2+tuxcare"},{title:"composer.json",content:P}]},null,8,["tabs"])]),_:1}),r[8]||(r[8]=e("p",null,[e("strong",null,"Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.")],-1)),r[9]||(r[9]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[t("If you edited "),e("code",null,"composer.json"),t(" manually, run "),e("code",null,"composer update"),t(" to install the package:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer update
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,"Composer will resolve dependencies against the TuxCare repository and install the patched releases.")],-1))])])]),_:1}),r[24]||(r[24]=i(`<h3 id="composer-repository-configuration" tabindex="-1"><a class="header-anchor" href="#composer-repository-configuration" aria-hidden="true" tabindex="-1">#</a> Composer Repository Configuration</h3><p>If you encounter dependency resolution errors like:</p><p><code>packages from higher priority repository do not match your constraint</code></p><p>it usually means your project requires a package version that is not yet available in the TuxCare repository.</p><p><strong>Solution</strong>: Update your <code>composer.json</code> to set the TuxCare repository as non-canonical:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;repositories&quot;: [
        {
            &quot;type&quot;: &quot;composer&quot;,
            &quot;url&quot;: &quot;https://nexus.repo.tuxcare.com/repository/els_php/&quot;,
            &quot;canonical&quot;: false
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows Composer to fall back to Packagist for packages not available in the TuxCare repository, while still preferring TuxCare patches when available.</p><h2 id="whats-next" tabindex="-1"><a class="header-anchor" href="#whats-next" aria-hidden="true" tabindex="-1">#</a> What&#39;s Next?</h2>`,8)),o(c,{"hide-title":""},{default:n(()=>[e("ul",null,[r[19]||(r[19]=e("li",null,[e("img",{src:m,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/?q=zendframework",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),t(" — Track vulnerability fixes and updates")],-1)),r[20]||(r[20]=e("li",null,[e("img",{src:f,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?q=zendframework",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),t(" — Patched versions and changelogs")],-1)),r[21]||(r[21]=e("li",null,[e("img",{src:x,alt:""}),t(),e("a",{href:"https://tuxcare.com/cve-tracker/technologies/?q=zendframework%2Fzendframework",target:"_blank",rel:"noopener noreferrer"},"Supported components"),t(" — Full list of product parts covered by ELS")],-1)),r[22]||(r[22]=e("li",null,[e("img",{src:h,alt:""}),t(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_php/zendframework/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),t(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[r[12]||(r[12]=e("img",{src:b,alt:""},null,-1)),r[13]||(r[13]=t()),o(l,{to:"/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom"},{default:n(()=>r[11]||(r[11]=[t("SBOM",-1)])),_:1,__:[11]}),r[14]||(r[14]=t(" — Software Bill of Materials (security.tuxcare.com)",-1))]),e("li",null,[r[16]||(r[16]=e("img",{src:g,alt:""},null,-1)),r[17]||(r[17]=t()),o(l,{to:"/els-for-libraries/managing-els-repository/#PHP"},{default:n(()=>r[15]||(r[15]=[t("Package updates",-1)])),_:1,__:[15]}),r[18]||(r[18]=t(" — Upgrade to a newer version",-1))])])]),_:1})])}}},M=v(N,[["__file","index.html.vue"]]);export{M as default};
