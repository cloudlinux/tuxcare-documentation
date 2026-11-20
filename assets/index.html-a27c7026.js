import{_ as m}from"./eye-bd28630a.js";import{_ as b}from"./bolt-90ed8319.js";import{_ as x}from"./shield-alert-226df5e9.js";import{_ as g}from"./unlock-alt-12fd40c9.js";import{_ as h}from"./wrench-730959f9.js";import{_ as f,X as n,n as v,p as q,a9 as i,H as r,w as s,t as e,y as o}from"./framework-0e2f11f3.js";const _={id:"add-your-tuxcare-credentials"},C={id:"register-the-tuxcare-repository"},y={id:"install-the-package"},j=`{
  "http-basic": {
    "nexus.repo.tuxcare.com": {
      "username": "USERNAME",
      "password": "PASSWORD"
    }
  }
}`,D=`{
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
}`,S=`{
    "require": {
        "drupal/access_code": "7.1.1-p1+tuxcare"
    }
}`,T=`{
    "require": {
        "drupal/bootstrap_site_alert": "7.1.6-p1+tuxcare"
    }
}`,I=`{
    "require": {
        "drupal/coffee": "7.2.3-p1+tuxcare"
    }
}`,w=`{
    "require": {
        "drupal/colorbox": "7.2.19-p1+tuxcare"
    }
}`,P=`{
    "require": {
        "drupal/commerce_paybox": "7.1.5-p1+tuxcare"
    }
}`,A=`{
    "require": {
        "drupal/facebook_pixel": "7.1.1-p1+tuxcare"
    }
}`,F=`{
    "require": {
        "drupal/filefield_paths": "7.1.2-p1+tuxcare"
    }
}`,E=`{
    "require": {
        "drupal/flag": "7.3.9-p1+tuxcare"
    }
}`,R=`{
    "require": {
        "drupal/form_builder": "7.1.22-p1+tuxcare"
    }
}`,N=`{
    "require": {
        "drupal/gdpr": "7.1.0-p1+tuxcare"
    }
}`,B=`{
    "require": {
        "drupal/i18n": "7.1.35-p1+tuxcare"
    }
}`,W=`{
    "require": {
        "drupal/link": "7.1.13-p1+tuxcare"
    }
}`,O=`{
    "require": {
        "drupal/openid_connect": "7.1.3-p1+tuxcare"
    }
}`,U=`{
    "require": {
        "drupal/protected_pages": "7.2.4-p1+tuxcare"
    }
}`,V=`{
    "require": {
        "drupal/shs": "7.1.10-p1+tuxcare"
    }
}`,M=`{
    "require": {
        "drupal/spamspan": "7.1.4-p1+tuxcare"
    }
}`,H=`{
    "require": {
        "drupal/term_reference_tree": "7.1.11-p1+tuxcare"
    }
}`,X=`{
    "require": {
        "drupal/tfa_basic": "7.1.2-p1+tuxcare"
    }
}`,z=`{
    "require": {
        "drupal/webform_multifile": "7.1.6-p1+tuxcare"
    }
}`,G={__name:"index.html",setup(Y){return(J,t)=>{const u=n("ELSPrerequisites"),a=n("CodeTabs"),p=n("TableTabs"),c=n("ELSSteps"),l=n("RouterLink"),d=n("WhatsNext");return v(),q("div",null,[t[22]||(t[22]=i('<h1 id="drupal" tabindex="-1"><a class="header-anchor" href="#drupal" aria-hidden="true" tabindex="-1">#</a> Drupal</h1><p>Endless Lifecycle Support (ELS) for Drupal from TuxCare provides security fixes for Drupal core and contributed modules that have reached their end-of-life. With ELS, you can continue running your applications without vulnerability concerns, even after official support has ended.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true" tabindex="-1">#</a> Supported Versions</h2><ul><li><strong>Drupal</strong> (<code>drupal/core</code>) 8.9.20, 9.5.11, 10.5.12, 10.6.17</li><li><strong>Drupal Access Code</strong> (<code>drupal/access_code</code>) 7.1.1</li><li><strong>Drupal Bootstrap Site Alert</strong> (<code>drupal/bootstrap_site_alert</code>) 7.1.6</li><li><strong>Drupal Coffee</strong> (<code>drupal/coffee</code>) 7.2.3</li><li><strong>Drupal Colorbox</strong> (<code>drupal/colorbox</code>) 2.1.2, 7.2.19</li><li><strong>Drupal Commerce Paybox</strong> (<code>drupal/commerce_paybox</code>) 7.1.5</li><li><strong>Drupal Facebook Pixel</strong> (<code>drupal/facebook_pixel</code>) 7.1.1</li><li><strong>Drupal File (Field) Paths</strong> (<code>drupal/filefield_paths</code>) 7.1.2</li><li><strong>Drupal Flag</strong> (<code>drupal/flag</code>) 7.3.9</li><li><strong>Drupal Form Builder</strong> (<code>drupal/form_builder</code>) 7.1.22</li><li><strong>Drupal GDPR</strong> (<code>drupal/gdpr</code>) 3.0.0, 3.1.0, 7.1.0</li><li><strong>Drupal Internationalization</strong> (<code>drupal/i18n</code>) 7.1.35</li><li><strong>Drupal Link</strong> (<code>drupal/link</code>) 7.1.13</li><li><strong>Drupal OpenID Connect</strong> (<code>drupal/openid_connect</code>) 7.1.3</li><li><strong>Drupal Protected Pages</strong> (<code>drupal/protected_pages</code>) 7.2.4</li><li><strong>Drupal Simple Hierarchical Select</strong> (<code>drupal/shs</code>) 7.1.10</li><li><strong>Drupal SpamSpan</strong> (<code>drupal/spamspan</code>) 3.2.0, 7.1.4</li><li><strong>Drupal Taxonomy Term Reference Tree</strong> (<code>drupal/term_reference_tree</code>) 7.1.11</li><li><strong>Drupal TFA Basic</strong> (<code>drupal/tfa_basic</code>) 7.1.2</li><li><strong>Drupal Webform Multiple File Upload</strong> (<code>drupal/webform_multifile</code>) 7.1.6</li></ul><p>Other versions upon request.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true" tabindex="-1">#</a> Installation</h2>',6)),r(u,null,{default:s(()=>t[0]||(t[0]=[e("ul",null,[e("li",null,[o("Nexus repository access credentials (username and password) — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[o("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_php",target:"_blank",rel:"noopener noreferrer"},"Nexus"),o(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[0]}),r(c,null,{default:s(()=>[e("ol",null,[t[10]||(t[10]=e("li",{id:"locate-the-authjson-file"},[e("p",null,[o("Locate the "),e("code",null,"auth.json"),o(" file")]),e("p",null,[o("Composer reads credentials from a per-user "),e("code",null,"auth.json"),o(". Create or edit the file at:")]),e("ul",null,[e("li",{id:"linuxmacos"},[e("p",null,[e("strong",null,"Linux/macOS"),o(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`~/.composer/auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])]),e("li",{id:"windows"},[e("p",null,[e("strong",null,"Windows"),o(":")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`%APPDATA%\\Composer\\auth.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])])])],-1)),e("li",_,[t[1]||(t[1]=e("p",null,"Add your TuxCare credentials",-1)),t[2]||(t[2]=e("p",null,[o("Use either the Composer CLI or edit "),e("code",null,"auth.json"),o(" directly to add credentials for "),e("code",null,"nexus.repo.tuxcare.com"),o(":")],-1)),r(a,{tabs:[{title:"Composer CLI",content:"composer config --global --auth http-basic.nexus.repo.tuxcare.com USERNAME PASSWORD"},{title:"auth.json",content:j}]},null,8,["tabs"]),t[3]||(t[3]=e("p",null,[o("Replace "),e("code",null,"USERNAME"),o(" and "),e("code",null,"PASSWORD"),o(" with your TuxCare credentials (see "),e("a",{href:"#prerequisites"},"Prerequisites"),o(" above).")],-1))]),e("li",C,[t[4]||(t[4]=e("p",null,"Register the TuxCare repository",-1)),t[5]||(t[5]=e("p",null,[o("Add the "),e("code",null,"els_php"),o(" Composer repository either via CLI or by editing "),e("code",null,"composer.json"),o(":")],-1)),r(a,{tabs:[{title:"Composer CLI",content:k},{title:"composer.json",content:D}]},null,8,["tabs"])]),e("li",y,[t[6]||(t[6]=e("p",null,"Install the package",-1)),t[7]||(t[7]=e("p",null,"Select your package, then install the TuxCare-maintained release that matches your project:",-1)),r(p,{label:"Choose package: "},{Drupal_Core:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/core:9.5.11-p6+tuxcare"},{title:"composer.json",content:L}]},null,8,["tabs"])]),Drupal_Access_Code:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/access_code:7.1.1-p1+tuxcare"},{title:"composer.json",content:S}]},null,8,["tabs"])]),Drupal_Bootstrap_Site_Alert:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/bootstrap_site_alert:7.1.6-p1+tuxcare"},{title:"composer.json",content:T}]},null,8,["tabs"])]),Drupal_Coffee:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/coffee:7.2.3-p1+tuxcare"},{title:"composer.json",content:I}]},null,8,["tabs"])]),Drupal_Colorbox:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/colorbox:7.2.19-p1+tuxcare"},{title:"composer.json",content:w}]},null,8,["tabs"])]),Drupal_Commerce_Paybox:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/commerce_paybox:7.1.5-p1+tuxcare"},{title:"composer.json",content:P}]},null,8,["tabs"])]),Drupal_Facebook_Pixel:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/facebook_pixel:7.1.1-p1+tuxcare"},{title:"composer.json",content:A}]},null,8,["tabs"])]),Drupal_File_Field_Paths:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/filefield_paths:7.1.2-p1+tuxcare"},{title:"composer.json",content:F}]},null,8,["tabs"])]),Drupal_Flag:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/flag:7.3.9-p1+tuxcare"},{title:"composer.json",content:E}]},null,8,["tabs"])]),Drupal_Form_Builder:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/form_builder:7.1.22-p1+tuxcare"},{title:"composer.json",content:R}]},null,8,["tabs"])]),Drupal_GDPR:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/gdpr:7.1.0-p1+tuxcare"},{title:"composer.json",content:N}]},null,8,["tabs"])]),Drupal_Internationalization:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/i18n:7.1.35-p1+tuxcare"},{title:"composer.json",content:B}]},null,8,["tabs"])]),Drupal_Link:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/link:7.1.13-p1+tuxcare"},{title:"composer.json",content:W}]},null,8,["tabs"])]),Drupal_OpenID_Connect:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/openid_connect:7.1.3-p1+tuxcare"},{title:"composer.json",content:O}]},null,8,["tabs"])]),Drupal_Protected_Pages:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/protected_pages:7.2.4-p1+tuxcare"},{title:"composer.json",content:U}]},null,8,["tabs"])]),Drupal_Simple_Hierarchical_Select:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/shs:7.1.10-p1+tuxcare"},{title:"composer.json",content:V}]},null,8,["tabs"])]),Drupal_SpamSpan:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/spamspan:7.1.4-p1+tuxcare"},{title:"composer.json",content:M}]},null,8,["tabs"])]),Drupal_Taxonomy_Term_Reference_Tree:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/term_reference_tree:7.1.11-p1+tuxcare"},{title:"composer.json",content:H}]},null,8,["tabs"])]),Drupal_TFA_Basic:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/tfa_basic:7.1.2-p1+tuxcare"},{title:"composer.json",content:X}]},null,8,["tabs"])]),Drupal_Webform_Multiple_File_Upload:s(()=>[r(a,{tabs:[{title:"Composer CLI",content:"composer require drupal/webform_multifile:7.1.6-p1+tuxcare"},{title:"composer.json",content:z}]},null,8,["tabs"])]),_:1}),t[8]||(t[8]=e("p",null,[e("strong",null,"Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.")],-1)),t[9]||(t[9]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[o("If you edited "),e("code",null,"composer.json"),o(" manually, run "),e("code",null,"composer update"),o(" to install the package:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer update
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,"Composer will resolve dependencies against the TuxCare repository and install the patched releases.")],-1))])])]),_:1}),t[23]||(t[23]=i(`<h3 id="composer-repository-configuration" tabindex="-1"><a class="header-anchor" href="#composer-repository-configuration" aria-hidden="true" tabindex="-1">#</a> Composer Repository Configuration</h3><p>If you encounter dependency resolution errors like:</p><p><code>packages from higher priority repository do not match your constraint</code></p><p>it usually means your project requires a package version that is not yet available in the TuxCare repository.</p><p><strong>Solution</strong>: Update your <code>composer.json</code> to set the TuxCare repository as non-canonical:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;repositories&quot;: [
        {
            &quot;type&quot;: &quot;composer&quot;,
            &quot;url&quot;: &quot;https://nexus.repo.tuxcare.com/repository/els_php/&quot;,
            &quot;canonical&quot;: false
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows Composer to fall back to Packagist for packages not available in the TuxCare repository, while still preferring TuxCare patches when available.</p><h2 id="customer-instructions" tabindex="-1"><a class="header-anchor" href="#customer-instructions" aria-hidden="true" tabindex="-1">#</a> Customer Instructions</h2><h3 id="for-legacy-project-customers" tabindex="-1"><a class="header-anchor" href="#for-legacy-project-customers" aria-hidden="true" tabindex="-1">#</a> For Legacy-Project Customers</h3><p>No special steps are needed. The <code>^9.5</code> range matches <code>9.5.11-p6+tuxcare</code> directly:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;repositories&quot;: [
        {&quot;type&quot;: &quot;composer&quot;, &quot;url&quot;: &quot;https://nexus.repo.tuxcare.com/repository/els_php/&quot;},
        {&quot;type&quot;: &quot;composer&quot;, &quot;url&quot;: &quot;https://packages.drupal.org/8&quot;}
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then run:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer update drupal/core --with-all-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="for-recommended-project-customers-needs-an-alias" tabindex="-1"><a class="header-anchor" href="#for-recommended-project-customers-needs-an-alias" aria-hidden="true" tabindex="-1">#</a> For Recommended-Project Customers (Needs an Alias)</h3><p>Because <code>drupal/core-recommended:9.5.11</code> requires exactly <code>drupal/core:9.5.11</code>, customers need a Composer inline alias to tell Composer that <code>9.5.11-p6+tuxcare</code> should be treated as <code>9.5.11</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>&quot;9.5.11-p6+tuxcare as 9.5.11&quot;</code> alias is the key — it tells Composer to install the Satis version but pretend it&#39;s <code>9.5.11</code> for dependency resolution, satisfying <code>core-recommended</code>&#39;s exact version constraint.</p><h2 id="whats-next" tabindex="-1"><a class="header-anchor" href="#whats-next" aria-hidden="true" tabindex="-1">#</a> What&#39;s Next?</h2>`,20)),r(d,{"hide-title":""},{default:s(()=>[e("ul",null,[t[19]||(t[19]=e("li",null,[e("img",{src:m,alt:""}),o(),e("a",{href:"https://tuxcare.com/cve-tracker/?q=drupal%2Fcore",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),o(" — Track vulnerability fixes and updates")],-1)),t[20]||(t[20]=e("li",null,[e("img",{src:b,alt:""}),o(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?q=drupal%2Fcore",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),o(" — Patched versions and changelogs")],-1)),t[21]||(t[21]=e("li",null,[e("img",{src:x,alt:""}),o(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_php/drupal/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),o(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[t[12]||(t[12]=e("img",{src:g,alt:""},null,-1)),t[13]||(t[13]=o()),r(l,{to:"/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom"},{default:s(()=>t[11]||(t[11]=[o("SBOM",-1)])),_:1,__:[11]}),t[14]||(t[14]=o(" — Software Bill of Materials (security.tuxcare.com)",-1))]),e("li",null,[t[16]||(t[16]=e("img",{src:h,alt:""},null,-1)),t[17]||(t[17]=o()),r(l,{to:"/els-for-libraries/managing-els-repository/#PHP"},{default:s(()=>t[15]||(t[15]=[o("Package updates",-1)])),_:1,__:[15]}),t[18]||(t[18]=o(" — Upgrade to a newer version",-1))])])]),_:1})])}}},oe=f(G,[["__file","index.html.vue"]]);export{oe as default};
