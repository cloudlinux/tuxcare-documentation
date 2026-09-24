import{_ as d}from"./eye-bd28630a.js";import{_ as y}from"./bolt-90ed8319.js";import{_ as f}from"./box-440bf211.js";import{_ as x}from"./shield-alert-226df5e9.js";import{_ as h}from"./wrench-730959f9.js";import{_ as g,U as l,n as b,p as v,a8 as i,E as n,C as r,q as e,L as o}from"./framework-520e1760.js";const C={id:"add-your-tuxcare-credentials"},S={id:"register-the-tuxcare-repository"},_={id:"install-the-package"},q=`{
  "http-basic": {
    "nexus.repo.tuxcare.com": {
      "username": "USERNAME",
      "password": "PASSWORD"
    }
  }
}`,k=`{
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
        "symfony/process": "6.4.13-p2+tuxcare"
    }
}`,L=`{
    "require": {
        "symfony/http-foundation": "4.4.49-p2+tuxcare"
    }
}`,I=`{
    "require": {
        "symfony/http-kernel": "7.4.10-p1+tuxcare"
    }
}`,w=`{
    "require": {
        "symfony/mailer": "6.4.34-p1+tuxcare"
    }
}`,E=`{
    "require": {
        "symfony/mime": "7.4.9-p1+tuxcare"
    }
}`,P=`{
    "require": {
        "symfony/routing": "7.4.9-p1+tuxcare"
    }
}`,N=`{
    "require": {
        "symfony/yaml": "4.4.45-p1+tuxcare"
    }
}`,R=`{
    "require": {
        "symfony/polyfill-intl-idn": "v1.30.0-p1+tuxcare"
    }
}`,A={__name:"index.html",setup(V){return(M,t)=>{const a=l("ELSPrerequisites"),s=l("CodeTabs"),u=l("TableTabs"),p=l("ELSSteps"),c=l("RouterLink"),m=l("WhatsNext");return b(),v("div",null,[t[19]||(t[19]=i('<h1 id="symfony" tabindex="-1"><a class="header-anchor" href="#symfony" aria-hidden="true">#</a> Symfony</h1><p>Endless Lifecycle Support (ELS) for Symfony components such as Symfony Process, Symfony HttpFoundation from TuxCare provides security fixes for Symfony component versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li><strong>Symfony Process</strong> 3.4.x, 4.4.x, 5.x, 6.x</li><li><strong>Symfony HttpFoundation</strong> 2.8.x, 3.4.x, 4.4.x</li><li><strong>Symfony HttpKernel</strong> 3.4.x, 7.4.x</li><li><strong>Symfony Mailer</strong> 6.4.x</li><li><strong>Symfony Mime</strong> 5.4.x, 6.4.x, 7.4.x</li><li><strong>Symfony Routing</strong> 3.4.x, 4.4.x, 5.4.x, 6.4.x, 7.4.x</li><li><strong>Symfony Yaml</strong> 2.8.x, 3.4.x, 4.4.x</li><li><strong>Symfony Polyfill Intl IDN</strong> 1.30.x</li></ul><p>Other versions upon request.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',6)),n(a,null,{default:r(()=>t[0]||(t[0]=[e("ul",null,[e("li",null,[o("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[o("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_php",target:"_blank",rel:"noopener noreferrer"},"Nexus"),o(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),n(p,null,{default:r(()=>[e("ol",null,[t[10]||(t[10]=e("li",{id:"locate-the-authjson-file"},[e("p",null,[o("Locate the "),e("code",null,"auth.json"),o(" file")]),e("p",null,[o("Composer reads credentials from a per-user "),e("code",null,"auth.json"),o(". Create or edit the file at:")]),e("ul",null,[e("li",{id:"linuxmacos"},[e("p",null,[e("strong",null,"Linux/macOS"),o(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`~/.composer/auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])]),e("li",{id:"windows"},[e("p",null,[e("strong",null,"Windows"),o(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`%APPDATA%\\Composer\\auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])])])],-1)),e("li",C,[t[1]||(t[1]=e("p",null,"Add your TuxCare credentials",-1)),t[2]||(t[2]=e("p",null,[o("Use either the Composer CLI or edit "),e("code",null,"auth.json"),o(" directly to add credentials for "),e("code",null,"nexus.repo.tuxcare.com"),o(":")],-1)),n(s,{tabs:[{title:"Composer CLI",content:"composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD"},{title:"auth.json",content:q}]},null,8,["tabs"]),t[3]||(t[3]=e("p",null,[o("Replace "),e("code",null,"USERNAME"),o(" and "),e("code",null,"PASSWORD"),o(" with your TuxCare credentials (see "),e("a",{href:"#prerequisites"},"Prerequisites"),o(" above).")],-1))]),e("li",S,[t[4]||(t[4]=e("p",null,"Register the TuxCare repository",-1)),t[5]||(t[5]=e("p",null,[o("Add the "),e("code",null,"els_php"),o(" Composer repository either via CLI or by editing "),e("code",null,"composer.json"),o(":")],-1)),n(s,{tabs:[{title:"Composer CLI",content:j},{title:"composer.json",content:k}]},null,8,["tabs"])]),e("li",_,[t[6]||(t[6]=e("p",null,"Install the package",-1)),t[7]||(t[7]=e("p",null,"Select your package, then install the TuxCare-maintained release that matches your project:",-1)),n(u,{label:"Choose package: "},{Symfony_Process:r(()=>[n(s,{tabs:[{title:"Composer CLI",content:"composer require symfony/process:6.4.13-p2+tuxcare"},{title:"composer.json",content:T}]},null,8,["tabs"])]),Symfony_HttpFoundation:r(()=>[n(s,{tabs:[{title:"Composer CLI",content:"composer require symfony/http-foundation:4.4.49-p2+tuxcare"},{title:"composer.json",content:L}]},null,8,["tabs"])]),Symfony_HttpKernel:r(()=>[n(s,{tabs:[{title:"Composer CLI",content:"composer require symfony/http-kernel:7.4.10-p1+tuxcare"},{title:"composer.json",content:I}]},null,8,["tabs"])]),Symfony_Mailer:r(()=>[n(s,{tabs:[{title:"Composer CLI",content:"composer require symfony/mailer:6.4.34-p1+tuxcare"},{title:"composer.json",content:w}]},null,8,["tabs"])]),Symfony_Mime:r(()=>[n(s,{tabs:[{title:"Composer CLI",content:"composer require symfony/mime:7.4.9-p1+tuxcare"},{title:"composer.json",content:E}]},null,8,["tabs"])]),Symfony_Routing:r(()=>[n(s,{tabs:[{title:"Composer CLI",content:"composer require symfony/routing:7.4.9-p1+tuxcare"},{title:"composer.json",content:P}]},null,8,["tabs"])]),Symfony_Yaml:r(()=>[n(s,{tabs:[{title:"Composer CLI",content:"composer require symfony/yaml:4.4.45-p1+tuxcare"},{title:"composer.json",content:N}]},null,8,["tabs"])]),Symfony_Polyfill_Intl_IDN:r(()=>[n(s,{tabs:[{title:"Composer CLI",content:"composer require symfony/polyfill-intl-idn:v1.30.0-p1+tuxcare"},{title:"composer.json",content:R}]},null,8,["tabs"])]),_:1}),t[8]||(t[8]=e("p",null,[e("strong",null,"Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.")],-1)),t[9]||(t[9]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[o("If you edited "),e("code",null,"composer.json"),o(" manually, run "),e("code",null,"composer update"),o(" to install the package:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer update
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,"Composer will resolve dependencies against the TuxCare repository and install the patched releases.")],-1))])])]),_:1}),t[20]||(t[20]=i(`<h3 id="composer-repository-configuration" tabindex="-1"><a class="header-anchor" href="#composer-repository-configuration" aria-hidden="true">#</a> Composer Repository Configuration</h3><p>If you encounter dependency resolution errors like:</p><p><code>packages from higher priority repository do not match your constraint</code></p><p>it usually means your project requires a package version that is not yet available in the TuxCare repository.</p><p><strong>Solution</strong>: Update your <code>composer.json</code> to set the TuxCare repository as non-canonical:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;repositories&quot;: [
        {
            &quot;type&quot;: &quot;composer&quot;,
            &quot;url&quot;: &quot;https://nexus.repo.tuxcare.com/repository/els_php/&quot;,
            &quot;canonical&quot;: false
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows Composer to fall back to Packagist for packages not available in the TuxCare repository, while still preferring TuxCare patches when available.</p><h2 id="whats-next" tabindex="-1"><a class="header-anchor" href="#whats-next" aria-hidden="true">#</a> What&#39;s Next?</h2>`,8)),n(m,{"hide-title":""},{default:r(()=>[e("ul",null,[t[15]||(t[15]=e("li",null,[e("img",{src:d,alt:""}),o(),e("a",{href:"https://tuxcare.com/cve-tracker/?product=Symfony",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),o(" — Track vulnerability fixes and updates")],-1)),t[16]||(t[16]=e("li",null,[e("img",{src:y,alt:""}),o(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?product=Symfony",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),o(" — Patched versions and changelogs")],-1)),t[17]||(t[17]=e("li",null,[e("img",{src:f,alt:""}),o(),e("a",{href:"https://tuxcare.com/cve-tracker/products?product=Symfony",target:"_blank",rel:"noopener noreferrer"},"Supported components"),o(" — Components covered by ELS")],-1)),t[18]||(t[18]=e("li",null,[e("img",{src:x,alt:""}),o(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_php/symfony/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),o(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[t[12]||(t[12]=e("img",{src:h,alt:""},null,-1)),t[13]||(t[13]=o()),n(c,{to:"/els-for-libraries/managing-els-repository/#PHP"},{default:r(()=>t[11]||(t[11]=[o("Package updates",-1)])),_:1,__:[11]}),t[14]||(t[14]=o(" — Upgrade to a newer version",-1))])])]),_:1})])}}},F=g(A,[["__file","index.html.vue"]]);export{F as default};
