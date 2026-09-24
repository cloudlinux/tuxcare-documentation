import{_ as m}from"./eye-bd28630a.js";import{_ as x}from"./bolt-90ed8319.js";import{_ as b}from"./shield-alert-226df5e9.js";import{_ as g}from"./wrench-730959f9.js";import{_ as h,U as a,n as f,p as v,a8 as l,E as o,C as s,q as e,L as r}from"./framework-520e1760.js";const q={id:"add-your-tuxcare-credentials"},_={id:"register-the-tuxcare-repository"},C={id:"install-the-package"},y=`{
  "http-basic": {
    "nexus.repo.tuxcare.com": {
      "username": "USERNAME",
      "password": "PASSWORD"
    }
  }
}`,j=`{
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
}`,k=`composer config repositories.tuxcare '{"type":"composer","url":"https://nexus.repo.tuxcare.com/repository/els_php/","options":{"http":{"verify":true}}}' --json`,L=`{
    "require": {
        "drupal/core": "9.5.11-p6+tuxcare"
    }
}`,T=`{
    "require": {
        "drupal/access_code": "7.1.1-p1+tuxcare"
    }
}`,I=`{
    "require": {
        "drupal/bootstrap_site_alert": "7.1.6-p1+tuxcare"
    }
}`,D=`{
    "require": {
        "drupal/coffee": "7.2.3-p1+tuxcare"
    }
}`,S=`{
    "require": {
        "drupal/colorbox": "7.2.19-p1+tuxcare"
    }
}`,w=`{
    "require": {
        "drupal/commerce_paybox": "7.1.5-p1+tuxcare"
    }
}`,P=`{
    "require": {
        "drupal/facebook_pixel": "7.1.1-p1+tuxcare"
    }
}`,E=`{
    "require": {
        "drupal/filefield_paths": "7.1.2-p1+tuxcare"
    }
}`,A=`{
    "require": {
        "drupal/flag": "7.3.9-p1+tuxcare"
    }
}`,N=`{
    "require": {
        "drupal/form_builder": "7.1.22-p1+tuxcare"
    }
}`,R=`{
    "require": {
        "drupal/gdpr": "7.1.0-p1+tuxcare"
    }
}`,F=`{
    "require": {
        "drupal/i18n": "7.1.35-p1+tuxcare"
    }
}`,U=`{
    "require": {
        "drupal/link": "7.1.13-p1+tuxcare"
    }
}`,V=`{
    "require": {
        "drupal/openid_connect": "7.1.3-p1+tuxcare"
    }
}`,W=`{
    "require": {
        "drupal/protected_pages": "7.2.4-p1+tuxcare"
    }
}`,B=`{
    "require": {
        "drupal/shs": "7.1.10-p1+tuxcare"
    }
}`,O=`{
    "require": {
        "drupal/spamspan": "7.1.4-p1+tuxcare"
    }
}`,M=`{
    "require": {
        "drupal/term_reference_tree": "7.1.11-p1+tuxcare"
    }
}`,H=`{
    "require": {
        "drupal/tfa_basic": "7.1.2-p1+tuxcare"
    }
}`,X=`{
    "require": {
        "drupal/webform_multifile": "7.1.6-p1+tuxcare"
    }
}`,z={__name:"index.html",setup(G){return(Y,t)=>{const i=a("ELSPrerequisites"),n=a("CodeTabs"),u=a("TableTabs"),p=a("ELSSteps"),c=a("RouterLink"),d=a("WhatsNext");return f(),v("div",null,[t[18]||(t[18]=l('<h1 id="drupal" tabindex="-1"><a class="header-anchor" href="#drupal" aria-hidden="true">#</a> Drupal</h1><p>Endless Lifecycle Support (ELS) for Drupal from TuxCare provides security fixes for Drupal core and contributed modules that have reached their end-of-life. This allows you to continue running your applications without vulnerability concerns, even after official support has ended.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li><strong>drupal/core</strong> 8.9.x, 9.5.x</li><li><strong>drupal/access_code</strong> 7.1.1</li><li><strong>drupal/bootstrap_site_alert</strong> 7.1.6</li><li><strong>drupal/coffee</strong> 7.2.3</li><li><strong>drupal/colorbox</strong> 2.1.2, 7.2.19</li><li><strong>drupal/commerce_paybox</strong> 7.1.5</li><li><strong>drupal/facebook_pixel</strong> 7.1.1</li><li><strong>drupal/filefield_paths</strong> 7.1.2</li><li><strong>drupal/flag</strong> 7.3.9</li><li><strong>drupal/form_builder</strong> 7.1.22</li><li><strong>drupal/gdpr</strong> 3.1.0, 7.1.0</li><li><strong>drupal/i18n</strong> 7.1.35</li><li><strong>drupal/link</strong> 7.1.13</li><li><strong>drupal/openid_connect</strong> 7.1.3</li><li><strong>drupal/protected_pages</strong> 7.2.4</li><li><strong>drupal/shs</strong> 7.1.10</li><li><strong>drupal/spamspan</strong> 3.2.0, 7.1.4</li><li><strong>drupal/term_reference_tree</strong> 7.1.11</li><li><strong>drupal/tfa_basic</strong> 7.1.2</li><li><strong>drupal/webform_multifile</strong> 7.1.6</li></ul><p>Other versions upon request.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',6)),o(i,null,{default:s(()=>t[0]||(t[0]=[e("ul",null,[e("li",null,[r("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[r("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_php",target:"_blank",rel:"noopener noreferrer"},"Nexus"),r(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),o(p,null,{default:s(()=>[e("ol",null,[t[10]||(t[10]=e("li",{id:"locate-the-authjson-file"},[e("p",null,[r("Locate the "),e("code",null,"auth.json"),r(" file")]),e("p",null,[r("Composer reads credentials from a per-user "),e("code",null,"auth.json"),r(". Create or edit the file at:")]),e("ul",null,[e("li",{id:"linuxmacos"},[e("p",null,[e("strong",null,"Linux/macOS"),r(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`~/.composer/auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])]),e("li",{id:"windows"},[e("p",null,[e("strong",null,"Windows"),r(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`%APPDATA%\\Composer\\auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])])])],-1)),e("li",q,[t[1]||(t[1]=e("p",null,"Add your TuxCare credentials",-1)),t[2]||(t[2]=e("p",null,[r("Use either the Composer CLI or edit "),e("code",null,"auth.json"),r(" directly to add credentials for "),e("code",null,"nexus.repo.tuxcare.com"),r(":")],-1)),o(n,{tabs:[{title:"Composer CLI",content:"composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD"},{title:"auth.json",content:y}]},null,8,["tabs"]),t[3]||(t[3]=e("p",null,[r("Replace "),e("code",null,"USERNAME"),r(" and "),e("code",null,"PASSWORD"),r(" with your TuxCare credentials (see "),e("a",{href:"#prerequisites"},"Prerequisites"),r(" above).")],-1))]),e("li",_,[t[4]||(t[4]=e("p",null,"Register the TuxCare repository",-1)),t[5]||(t[5]=e("p",null,[r("Add the "),e("code",null,"els_php"),r(" Composer repository either via CLI or by editing "),e("code",null,"composer.json"),r(":")],-1)),o(n,{tabs:[{title:"Composer CLI",content:k},{title:"composer.json",content:j}]},null,8,["tabs"])]),e("li",C,[t[6]||(t[6]=e("p",null,"Install the package",-1)),t[7]||(t[7]=e("p",null,"Select your package, then install the TuxCare-maintained release that matches your project:",-1)),o(u,{label:"Choose package: "},{Drupal_Core:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/core:9.5.11-p6+tuxcare"},{title:"composer.json",content:L}]},null,8,["tabs"])]),Drupal_Access_Code:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/access_code:7.1.1-p1+tuxcare"},{title:"composer.json",content:T}]},null,8,["tabs"])]),Drupal_Bootstrap_Site_Alert:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/bootstrap_site_alert:7.1.6-p1+tuxcare"},{title:"composer.json",content:I}]},null,8,["tabs"])]),Drupal_Coffee:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/coffee:7.2.3-p1+tuxcare"},{title:"composer.json",content:D}]},null,8,["tabs"])]),Drupal_Colorbox:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/colorbox:7.2.19-p1+tuxcare"},{title:"composer.json",content:S}]},null,8,["tabs"])]),Drupal_Commerce_Paybox:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/commerce_paybox:7.1.5-p1+tuxcare"},{title:"composer.json",content:w}]},null,8,["tabs"])]),Drupal_Facebook_Pixel:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/facebook_pixel:7.1.1-p1+tuxcare"},{title:"composer.json",content:P}]},null,8,["tabs"])]),Drupal_File_Field_Paths:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/filefield_paths:7.1.2-p1+tuxcare"},{title:"composer.json",content:E}]},null,8,["tabs"])]),Drupal_Flag:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/flag:7.3.9-p1+tuxcare"},{title:"composer.json",content:A}]},null,8,["tabs"])]),Drupal_Form_Builder:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/form_builder:7.1.22-p1+tuxcare"},{title:"composer.json",content:N}]},null,8,["tabs"])]),Drupal_GDPR:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/gdpr:7.1.0-p1+tuxcare"},{title:"composer.json",content:R}]},null,8,["tabs"])]),Drupal_Internationalization:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/i18n:7.1.35-p1+tuxcare"},{title:"composer.json",content:F}]},null,8,["tabs"])]),Drupal_Link:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/link:7.1.13-p1+tuxcare"},{title:"composer.json",content:U}]},null,8,["tabs"])]),Drupal_OpenID_Connect:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/openid_connect:7.1.3-p1+tuxcare"},{title:"composer.json",content:V}]},null,8,["tabs"])]),Drupal_Protected_Pages:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/protected_pages:7.2.4-p1+tuxcare"},{title:"composer.json",content:W}]},null,8,["tabs"])]),Drupal_Simple_Hierarchical_Select:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/shs:7.1.10-p1+tuxcare"},{title:"composer.json",content:B}]},null,8,["tabs"])]),Drupal_SpamSpan:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/spamspan:7.1.4-p1+tuxcare"},{title:"composer.json",content:O}]},null,8,["tabs"])]),Drupal_Taxonomy_Term_Reference_Tree:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/term_reference_tree:7.1.11-p1+tuxcare"},{title:"composer.json",content:M}]},null,8,["tabs"])]),Drupal_TFA_Basic:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/tfa_basic:7.1.2-p1+tuxcare"},{title:"composer.json",content:H}]},null,8,["tabs"])]),Drupal_Webform_Multiple_File_Upload:s(()=>[o(n,{tabs:[{title:"Composer CLI",content:"composer require drupal/webform_multifile:7.1.6-p1+tuxcare"},{title:"composer.json",content:X}]},null,8,["tabs"])]),_:1}),t[8]||(t[8]=e("p",null,[e("strong",null,"Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.")],-1)),t[9]||(t[9]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[r("If you edited "),e("code",null,"composer.json"),r(" manually, run "),e("code",null,"composer update"),r(" to install the package:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer update
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,"Composer will resolve dependencies against the TuxCare repository and install the patched releases.")],-1))])])]),_:1}),t[19]||(t[19]=l(`<h3 id="composer-repository-configuration" tabindex="-1"><a class="header-anchor" href="#composer-repository-configuration" aria-hidden="true">#</a> Composer Repository Configuration</h3><p>If you encounter dependency resolution errors like:</p><p><code>packages from higher priority repository do not match your constraint</code></p><p>it usually means your project requires a package version that is not yet available in the TuxCare repository.</p><p><strong>Solution</strong>: Update your <code>composer.json</code> to set the TuxCare repository as non-canonical:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;repositories&quot;: [
        {
            &quot;type&quot;: &quot;composer&quot;,
            &quot;url&quot;: &quot;https://nexus.repo.tuxcare.com/repository/els_php/&quot;,
            &quot;canonical&quot;: false
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows Composer to fall back to Packagist for packages not available in the TuxCare repository, while still preferring TuxCare patches when available.</p><h2 id="customer-instructions" tabindex="-1"><a class="header-anchor" href="#customer-instructions" aria-hidden="true">#</a> Customer Instructions</h2><h3 id="for-legacy-project-customers" tabindex="-1"><a class="header-anchor" href="#for-legacy-project-customers" aria-hidden="true">#</a> For legacy-project customers</h3><p>No special steps are needed. The <code>^9.5</code> range matches <code>9.5.11-p6+tuxcare</code> directly:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;repositories&quot;: [
        {&quot;type&quot;: &quot;composer&quot;, &quot;url&quot;: &quot;https://nexus.repo.tuxcare.com/repository/els_php/&quot;},
        {&quot;type&quot;: &quot;composer&quot;, &quot;url&quot;: &quot;https://packages.drupal.org/8&quot;}
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then run:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer update drupal/core --with-all-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="for-recommended-project-customers-needs-an-alias" tabindex="-1"><a class="header-anchor" href="#for-recommended-project-customers-needs-an-alias" aria-hidden="true">#</a> For recommended-project customers (needs an alias)</h3><p>Because <code>drupal/core-recommended:9.5.11</code> requires exactly <code>drupal/core:9.5.11</code>, customers need a Composer inline alias to tell Composer that <code>9.5.11-p6+tuxcare</code> should be treated as <code>9.5.11</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;repositories&quot;: [
        {&quot;type&quot;: &quot;composer&quot;, &quot;url&quot;: &quot;https://nexus.repo.tuxcare.com/repository/els_php/&quot;},
        {&quot;type&quot;: &quot;composer&quot;, &quot;url&quot;: &quot;https://packages.drupal.org/8&quot;}
    ],
    &quot;require&quot;: {
        &quot;drupal/core&quot;: &quot;9.5.11-p6+tuxcare as 9.5.11&quot;,
        &quot;drupal/core-recommended&quot;: &quot;^9.5&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then run:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer update &quot;drupal/core-*&quot; drupal/core --with-all-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>&quot;9.5.11-p6+tuxcare as 9.5.11&quot;</code> alias is the key — it tells Composer to install the Satis version but pretend it&#39;s <code>9.5.11</code> for dependency resolution, satisfying <code>core-recommended</code>&#39;s exact version constraint.</p><h2 id="whats-next" tabindex="-1"><a class="header-anchor" href="#whats-next" aria-hidden="true">#</a> What&#39;s Next?</h2>`,20)),o(d,{"hide-title":""},{default:s(()=>[e("ul",null,[t[15]||(t[15]=e("li",null,[e("img",{src:m,alt:""}),r(),e("a",{href:"https://tuxcare.com/cve-tracker/?q=drupal%2Fcore",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),r(" — Track vulnerability fixes and updates")],-1)),t[16]||(t[16]=e("li",null,[e("img",{src:x,alt:""}),r(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?q=drupal%2Fcore",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),r(" — Patched versions and changelogs")],-1)),t[17]||(t[17]=e("li",null,[e("img",{src:b,alt:""}),r(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_php/drupal/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),r(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[t[12]||(t[12]=e("img",{src:g,alt:""},null,-1)),t[13]||(t[13]=r()),o(c,{to:"/els-for-libraries/managing-els-repository/#PHP"},{default:s(()=>t[11]||(t[11]=[r("Package updates",-1)])),_:1,__:[11]}),t[14]||(t[14]=r(" — Upgrade to a newer version",-1))])])]),_:1})])}}},ee=h(z,[["__file","index.html.vue"]]);export{ee as default};
