import{_ as h}from"./eye-bd28630a.js";import{_ as m}from"./bolt-90ed8319.js";import{_ as x}from"./shield-alert-226df5e9.js";import{_ as b}from"./wrench-730959f9.js";import{_ as f,U as i,n as g,p as v,a8 as l,E as o,C as r,q as e,L as n}from"./framework-520e1760.js";const y={id:"add-your-tuxcare-credentials"},C={id:"register-the-tuxcare-repository"},P={id:"install-phpunit"},q=`{
  "http-basic": {
    "nexus.repo.tuxcare.com": {
      "username": "USERNAME",
      "password": "PASSWORD"
    }
  }
}`,_=`{
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
        "phpunit/phpunit": "6.5.14-p1+tuxcare"
    }
}`,k=`{
    "require": {
        "phpunit/phpunit": "7.5.20-p1+tuxcare"
    }
}`,L=`{
    "require": {
        "phpunit/phpunit": "8.4.3-p1+tuxcare"
    }
}`,S=`{
    "require": {
        "phpunit/phpunit": "9.5.28-p1+tuxcare"
    }
}`,U=`{
    "require": {
        "phpunit/phpunit": "10.4.2-p1+tuxcare"
    }
}`,w=`{
    "require": {
        "phpunit/phpunit": "11.4.4-p1+tuxcare"
    }
}`,E=`{
    "require": {
        "phpunit/phpunit": "12.4.5-p1+tuxcare"
    }
}`,I={__name:"index.html",setup(H){return(N,t)=>{const a=i("ELSPrerequisites"),s=i("CodeTabs"),p=i("TableTabs"),u=i("ELSSteps"),c=i("RouterLink"),d=i("WhatsNext");return g(),v("div",null,[t[18]||(t[18]=l('<h1 id="phpunit" tabindex="-1"><a class="header-anchor" href="#phpunit" aria-hidden="true">#</a> PHPUnit</h1><p>Endless Lifecycle Support (ELS) for PHPUnit from TuxCare provides security fixes for PHPUnit versions that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li><strong>PHPUnit</strong> 4.8.10, 6.5.14, 7.5.20, 8.4.3, 9.5.28, 10.4.2, 11.4.4, 12.4.5</li></ul><p>Other versions upon request.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',6)),o(a,null,{default:r(()=>t[0]||(t[0]=[e("ul",null,[e("li",null,[n("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[n("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_php",target:"_blank",rel:"noopener noreferrer"},"Nexus"),n(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),o(u,null,{default:r(()=>[e("ol",null,[t[10]||(t[10]=e("li",{id:"locate-the-authjson-file"},[e("p",null,[n("Locate the "),e("code",null,"auth.json"),n(" file")]),e("p",null,[n("Composer reads credentials from a per-user "),e("code",null,"auth.json"),n(". Create or edit the file at:")]),e("ul",null,[e("li",{id:"linuxmacos"},[e("p",null,[e("strong",null,"Linux/macOS"),n(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`~/.composer/auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])]),e("li",{id:"windows"},[e("p",null,[e("strong",null,"Windows"),n(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`%APPDATA%\\Composer\\auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])])])],-1)),e("li",y,[t[1]||(t[1]=e("p",null,"Add your TuxCare credentials",-1)),t[2]||(t[2]=e("p",null,[n("Use either the Composer CLI or edit "),e("code",null,"auth.json"),n(" directly to add credentials for "),e("code",null,"nexus.repo.tuxcare.com"),n(":")],-1)),o(s,{tabs:[{title:"Composer CLI",content:"composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD"},{title:"auth.json",content:q}]},null,8,["tabs"]),t[3]||(t[3]=e("p",null,[n("Replace "),e("code",null,"USERNAME"),n(" and "),e("code",null,"PASSWORD"),n(" with your TuxCare credentials (see "),e("a",{href:"#prerequisites"},"Prerequisites"),n(" above).")],-1))]),e("li",C,[t[4]||(t[4]=e("p",null,"Register the TuxCare repository",-1)),t[5]||(t[5]=e("p",null,[n("Add the "),e("code",null,"els_php"),n(" Composer repository either via CLI or by editing "),e("code",null,"composer.json"),n(":")],-1)),o(s,{tabs:[{title:"Composer CLI",content:j},{title:"composer.json",content:_}]},null,8,["tabs"])]),e("li",P,[t[6]||(t[6]=e("p",null,"Install PHPUnit",-1)),t[7]||(t[7]=e("p",null,"Install the TuxCare-maintained PHPUnit release that matches your project:",-1)),o(p,{label:"Choose version: "},{"PHPUnit_6.5":r(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require phpunit/phpunit:6.5.14-p1+tuxcare"},{title:"composer.json",content:T}]},null,8,["tabs"])]),"PHPUnit_7.5":r(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require phpunit/phpunit:7.5.20-p1+tuxcare"},{title:"composer.json",content:k}]},null,8,["tabs"])]),"PHPUnit_8.4":r(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require phpunit/phpunit:8.4.3-p1+tuxcare"},{title:"composer.json",content:L}]},null,8,["tabs"])]),"PHPUnit_9.5":r(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require phpunit/phpunit:9.5.28-p1+tuxcare"},{title:"composer.json",content:S}]},null,8,["tabs"])]),"PHPUnit_10.4":r(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require phpunit/phpunit:10.4.2-p1+tuxcare"},{title:"composer.json",content:U}]},null,8,["tabs"])]),"PHPUnit_11.4":r(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require phpunit/phpunit:11.4.4-p1+tuxcare"},{title:"composer.json",content:w}]},null,8,["tabs"])]),"PHPUnit_12.4":r(()=>[o(s,{tabs:[{title:"Composer CLI",content:"composer require phpunit/phpunit:12.4.5-p1+tuxcare"},{title:"composer.json",content:E}]},null,8,["tabs"])]),_:1}),t[8]||(t[8]=e("p",null,[e("strong",null,"Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.")],-1)),t[9]||(t[9]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[n("If you edited "),e("code",null,"composer.json"),n(" manually, run "),e("code",null,"composer update"),n(" to install the package:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer update
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,"Composer will resolve dependencies against the TuxCare repository and install the patched releases.")],-1))])])]),_:1}),t[19]||(t[19]=l(`<h3 id="composer-repository-configuration" tabindex="-1"><a class="header-anchor" href="#composer-repository-configuration" aria-hidden="true">#</a> Composer Repository Configuration</h3><p>If you encounter dependency resolution errors like:</p><p><code>packages from higher priority repository do not match your constraint</code></p><p>it usually means your project requires a package version that is not yet available in the TuxCare repository.</p><p><strong>Solution</strong>: Update your <code>composer.json</code> to set the TuxCare repository as non-canonical:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;repositories&quot;: [
        {
            &quot;type&quot;: &quot;composer&quot;,
            &quot;url&quot;: &quot;https://nexus.repo.tuxcare.com/repository/els_php/&quot;,
            &quot;canonical&quot;: false
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows Composer to fall back to Packagist for packages not available in the TuxCare repository, while still preferring TuxCare patches when available.</p><h2 id="whats-next" tabindex="-1"><a class="header-anchor" href="#whats-next" aria-hidden="true">#</a> What&#39;s Next?</h2>`,8)),o(d,{"hide-title":""},{default:r(()=>[e("ul",null,[t[15]||(t[15]=e("li",null,[e("img",{src:h,alt:""}),n(),e("a",{href:"https://tuxcare.com/cve-tracker/?q=phpunit%2Fphpunit",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),n(" — Track vulnerability fixes and updates")],-1)),t[16]||(t[16]=e("li",null,[e("img",{src:m,alt:""}),n(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?q=phpunit%2Fphpunit",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),n(" — Patched versions and changelogs")],-1)),t[17]||(t[17]=e("li",null,[e("img",{src:x,alt:""}),n(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_php/sebastianbergmann/phpunit/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),n(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[t[12]||(t[12]=e("img",{src:b,alt:""},null,-1)),t[13]||(t[13]=n()),o(c,{to:"/els-for-libraries/managing-els-repository/#PHP"},{default:r(()=>t[11]||(t[11]=[n("Package updates",-1)])),_:1,__:[11]}),t[14]||(t[14]=n(" — Upgrade to a newer version",-1))])])]),_:1})])}}},D=f(I,[["__file","index.html.vue"]]);export{D as default};
