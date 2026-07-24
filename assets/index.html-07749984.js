import{_ as p}from"./eye-bd28630a.js";import{_ as x}from"./bolt-90ed8319.js";import{_ as g}from"./box-440bf211.js";import{_ as y}from"./shield-alert-226df5e9.js";import{_ as v}from"./wrench-730959f9.js";import{_ as b,U as r,n as f,p as h,a8 as a,E as l,C as t,q as e,L as s}from"./framework-520e1760.js";const S={id:"add-your-tuxcare-credentials"},C={id:"register-the-tuxcare-repository"},q={id:"install-symfony-components"},k=`{
  "http-basic": {
    "nexus.repo.tuxcare.com": {
      "username": "USERNAME",
      "password": "PASSWORD"
    }
  }
}`,T=`{
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
}`,j=`composer config repositories.tuxcare '{"type":"composer","url":"https://nexus.repo.tuxcare.com/repository/els_php/","options":{"http":{"verify":true}}}' --json`,w={__name:"index.html",setup(_){return(E,n)=>{const i=r("ELSPrerequisites"),o=r("CodeTabs"),u=r("TableTabs"),d=r("ELSSteps"),m=r("RouterLink"),c=r("WhatsNext");return f(),h("div",null,[n[26]||(n[26]=a('<h1 id="symfony" tabindex="-1"><a class="header-anchor" href="#symfony" aria-hidden="true">#</a> Symfony</h1><p>Endless Lifecycle Support (ELS) for Symfony components such as Symfony Process, Symfony HttpFoundation from TuxCare provides security fixes for Symfony component versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.</p><h2 id="supported-versions-and-components" tabindex="-1"><a class="header-anchor" href="#supported-versions-and-components" aria-hidden="true">#</a> Supported Versions and Components</h2><ul><li><strong>Symfony Process</strong> 3.4.x, 4.4.x, 5.x, 6.x</li><li><strong>Symfony HttpFoundation</strong> 2.8.x, 3.4.x, 4.4.x</li><li><strong>Symfony HttpKernel</strong> 3.4.x, 7.4.x</li><li><strong>Symfony Mailer</strong> 6.4.x</li><li><strong>Symfony Mime</strong> 5.4.x, 6.4.x, 7.4.x</li><li><strong>Symfony Routing</strong> 3.4.x, 4.4.x, 5.4.x, 6.4.x, 7.4.x</li><li><strong>Symfony Yaml</strong> 2.8.x, 3.4.x, 4.4.x</li></ul><p>Other versions upon request.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',6)),l(i,null,{default:t(()=>n[0]||(n[0]=[e("ul",null,[e("li",null,[s("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[s("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_php",target:"_blank",rel:"noopener noreferrer"},"Nexus"),s(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),l(d,null,{default:t(()=>[e("ol",null,[n[17]||(n[17]=e("li",{id:"locate-the-authjson-file"},[e("p",null,[s("Locate the "),e("code",null,"auth.json"),s(" file")]),e("p",null,[s("Composer reads credentials from a per-user "),e("code",null,"auth.json"),s(". Create or edit the file at:")]),e("ul",null,[e("li",{id:"linuxmacos"},[e("p",null,[e("strong",null,"Linux/macOS"),s(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`~/.composer/auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])]),e("li",{id:"windows"},[e("p",null,[e("strong",null,"Windows"),s(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`%APPDATA%\\Composer\\auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])])])],-1)),e("li",S,[n[1]||(n[1]=e("p",null,"Add your TuxCare credentials",-1)),n[2]||(n[2]=e("p",null,[s("Use either the Composer CLI or edit "),e("code",null,"auth.json"),s(" directly to add credentials for "),e("code",null,"nexus.repo.tuxcare.com"),s(":")],-1)),l(o,{tabs:[{title:"Composer CLI",content:"composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD"},{title:"auth.json",content:k}]},null,8,["tabs"]),n[3]||(n[3]=e("p",null,[s("Replace "),e("code",null,"USERNAME"),s(" and "),e("code",null,"PASSWORD"),s(" with your TuxCare credentials (see "),e("a",{href:"#prerequisites"},"Prerequisites"),s(" above).")],-1))]),e("li",C,[n[4]||(n[4]=e("p",null,"Register the TuxCare repository",-1)),n[5]||(n[5]=e("p",null,[s("Add the "),e("code",null,"els_php"),s(" Composer repository either via CLI or by editing "),e("code",null,"composer.json"),s(":")],-1)),l(o,{tabs:[{title:"Composer CLI",content:j},{title:"composer.json",content:T}]},null,8,["tabs"])]),e("li",q,[n[13]||(n[13]=e("p",null,"Install Symfony components",-1)),n[14]||(n[14]=e("p",null,"Install the TuxCare-maintained Symfony component release that matches your project:",-1)),l(u,{label:"Choose version: "},{Symfony_Process:t(()=>n[6]||(n[6]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer require symfony/process:6.4.13-p2+tuxcare
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),e("p",null,[e("code",null,"composer.json"),s(":")],-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
    "require": {
        "symfony/process": "6.4.13-p2+tuxcare"
    }
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),Symfony_HttpFoundation:t(()=>n[7]||(n[7]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer require symfony/http-foundation:4.4.49-p2+tuxcare
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),e("p",null,[e("code",null,"composer.json"),s(":")],-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
    "require": {
        "symfony/http-foundation": "4.4.49-p2+tuxcare"
    }
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),Symfony_HttpKernel:t(()=>n[8]||(n[8]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer require symfony/http-kernel:7.4.10-p1+tuxcare
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),e("p",null,[e("code",null,"composer.json"),s(":")],-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
    "require": {
        "symfony/http-kernel": "7.4.10-p1+tuxcare"
    }
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),Symfony_Mailer:t(()=>n[9]||(n[9]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer require symfony/mailer:6.4.34-p1+tuxcare
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),e("p",null,[e("code",null,"composer.json"),s(":")],-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
    "require": {
        "symfony/mailer": "6.4.34-p1+tuxcare"
    }
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),Symfony_Mime:t(()=>n[10]||(n[10]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer require symfony/mime:7.4.9-p1+tuxcare
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),e("p",null,[e("code",null,"composer.json"),s(":")],-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
    "require": {
        "symfony/mime": "7.4.9-p1+tuxcare"
    }
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),Symfony_Routing:t(()=>n[11]||(n[11]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer require symfony/routing:7.4.9-p1+tuxcare
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),e("p",null,[e("code",null,"composer.json"),s(":")],-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
    "require": {
        "symfony/routing": "7.4.9-p1+tuxcare"
    }
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),Symfony_Yaml:t(()=>n[12]||(n[12]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer require symfony/yaml:4.4.45-p1+tuxcare
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),e("p",null,[e("code",null,"composer.json"),s(":")],-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
    "require": {
        "symfony/yaml": "4.4.45-p1+tuxcare"
    }
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),n[15]||(n[15]=e("p",null,[e("strong",null,"Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.")],-1)),n[16]||(n[16]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[s("If you edited "),e("code",null,"composer.json"),s(" manually, run "),e("code",null,"composer update"),s(" to install the package:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer update
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,"Composer will resolve dependencies against the TuxCare repository and install the patched releases.")],-1))])])]),_:1}),n[27]||(n[27]=a(`<h3 id="composer-repository-configuration" tabindex="-1"><a class="header-anchor" href="#composer-repository-configuration" aria-hidden="true">#</a> Composer Repository Configuration</h3><p>If you encounter dependency resolution errors like:</p><p><code>packages from higher priority repository do not match your constraint</code></p><p>it usually means your project requires a package version that is not yet available in the TuxCare repository.</p><p><strong>Solution</strong>: Update your <code>composer.json</code> to set the TuxCare repository as non-canonical:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;repositories&quot;: [
        {
            &quot;type&quot;: &quot;composer&quot;,
            &quot;url&quot;: &quot;https://nexus.repo.tuxcare.com/repository/els_php/&quot;,
            &quot;canonical&quot;: false
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows Composer to fall back to Packagist for packages not available in the TuxCare repository, while still preferring TuxCare patches when available.</p><h2 id="whats-next" tabindex="-1"><a class="header-anchor" href="#whats-next" aria-hidden="true">#</a> What&#39;s Next?</h2>`,8)),l(c,{"hide-title":""},{default:t(()=>[e("ul",null,[n[22]||(n[22]=e("li",null,[e("img",{src:p,alt:""}),s(),e("a",{href:"https://tuxcare.com/cve-tracker/?product=Symfony",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),s(" — Track vulnerability fixes and updates")],-1)),n[23]||(n[23]=e("li",null,[e("img",{src:x,alt:""}),s(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?product=Symfony",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),s(" — Patched versions and changelogs")],-1)),n[24]||(n[24]=e("li",null,[e("img",{src:g,alt:""}),s(),e("a",{href:"https://tuxcare.com/cve-tracker/products?product=Symfony",target:"_blank",rel:"noopener noreferrer"},"Supported components"),s(" — Components covered by ELS")],-1)),n[25]||(n[25]=e("li",null,[e("img",{src:y,alt:""}),s(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_php/symfony/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),s(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[n[19]||(n[19]=e("img",{src:v,alt:""},null,-1)),n[20]||(n[20]=s()),l(m,{to:"/els-for-libraries/managing-els-repository/#PHP"},{default:t(()=>n[18]||(n[18]=[s("Package updates",-1)])),_:1,__:[18]}),n[21]||(n[21]=s(" — Upgrade to a newer version",-1))])])]),_:1})])}}},V=b(w,[["__file","index.html.vue"]]);export{V as default};
