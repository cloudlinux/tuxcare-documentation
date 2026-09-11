import{_ as c}from"./eye-bd28630a.js";import{_ as p}from"./shield-2656a8d0.js";import{_ as v}from"./clipboard-notes-eeeedcf5.js";import{_ as b}from"./shield-alert-226df5e9.js";import{_ as x}from"./unlock-alt-12fd40c9.js";import{_ as g}from"./bolt-90ed8319.js";import{_ as h,U as r,n as f,p as y,a8 as j,E as a,C as l,L as s,q as e}from"./framework-520e1760.js";const k={},L={class:"tip custom-block"},T={id:"update-dependencies"},w={id:"option-1-manual-update"};function C(S,n){const t=r("ELSBadge"),i=r("RouterLink"),d=r("ELSPrerequisites"),o=r("TableTabs"),u=r("ELSSteps"),m=r("WhatsNext");return f(),y("div",null,[n[39]||(n[39]=j('<h1 id="lodash" tabindex="-1"><a class="header-anchor" href="#lodash" aria-hidden="true">#</a> Lodash</h1><p>Endless Lifecycle Support (ELS) for Lodash from TuxCare provides security fixes for Lodash versions that have reached their end of life. This allows you to continue running Lodash applications without vulnerability concerns, even after official support has ended.</p><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions" aria-hidden="true">#</a> Supported Versions</h2><ul><li>Lodash 1.3.1, 2.4.2, 3.10.1, 3.2.0, 4.17.4, 4.17.5, 4.17.11, 4.17.15, 4.17.19, 4.17.21, 4.18.1, 4.5.0</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',5)),a(t,{heading:""},{default:l(()=>n[0]||(n[0]=[s("Docker compatible",-1)])),_:1,__:[0]}),e("div",L,[n[4]||(n[4]=e("p",{class:"custom-block-title"},"Have a SecureChain token?",-1)),e("p",null,[n[2]||(n[2]=s("Follow the ",-1)),a(i,{to:"/securechain/javascript/#ELS"},{default:l(()=>n[1]||(n[1]=[s("SecureChain installation instructions",-1)])),_:1,__:[1]}),n[3]||(n[3]=s(" instead — the steps below are for username & password access.",-1))])]),a(d,null,{default:l(()=>n[5]||(n[5]=[e("ul",null,[e("li",null,[e("strong",null,"npm"),s(" package manager installed")]),e("li",null,[s("TuxCare registry token — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[s("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_js",target:"_blank",rel:"noopener noreferrer"},"Nexus"),s(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[5]}),a(u,null,{default:l(()=>[e("ol",null,[n[23]||(n[23]=e("li",{id:"create-or-update-the-npmrc-file"},[e("p",null,[e("strong",null,"Create or update the .npmrc file")]),e("p",null,[s("Navigate to the root directory of your Lodash project and create a "),e("code",null,".npmrc"),s(" file or update it if it already exists.")]),e("p",null,[e("strong",null,"Example:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`my-lodash-project/
├── node_modules/
├── package.json
├── .npmrc         ⚠️ ← Create it here
└── package-lock.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),n[24]||(n[24]=e("li",{id:"configure-the-npm-registry"},[e("p",null,[e("strong",null,"Configure the npm registry")]),e("p",null,[s("Use an editor of your choice (e.g., VS Code) to add the following registry address lines to the "),e("code",null,".npmrc"),s(" file:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`registry=https://registry.npmjs.org/
@els-js:registry=https://nexus.repo.tuxcare.com/repository/els_js/
//nexus.repo.tuxcare.com/repository/els_js/:_auth=\${TOKEN}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[s("Replace "),e("code",null,"${TOKEN}"),s(" with the token you received from "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com"),s(".")])])],-1)),e("li",T,[n[21]||(n[21]=e("p",null,[e("strong",null,"Update dependencies")],-1)),n[22]||(n[22]=e("p",null,[s("Update your "),e("code",null,"package.json"),s(" file to replace Lodash dependencies with TuxCare-maintained packages. You can do this in two ways:")],-1)),e("ul",null,[e("li",w,[n[18]||(n[18]=e("p",null,[e("strong",null,"Option 1: Manual update")],-1)),n[19]||(n[19]=e("p",null,[s("Manually update your "),e("code",null,"package.json"),s(" file by replacing your Lodash dependencies with the TuxCare packages. This method gives you full control over which packages to update.")],-1)),a(o,{label:"Choose Lodash version: "},{"Lodash_1.3.1":l(()=>n[6]||(n[6]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=1.3.1-tuxcare.1"
},
"overrides": {
  "lodash@1.3.1": "npm:@els-js/lodash@>=1.3.1-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_2.4.2":l(()=>n[7]||(n[7]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=2.4.2-tuxcare.1"
},
"overrides": {
  "lodash@2.4.2": "npm:@els-js/lodash@>=2.4.2-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_3.2.0":l(()=>n[8]||(n[8]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=3.2.0-tuxcare.1"
},
"overrides": {
  "lodash@3.2.0": "npm:@els-js/lodash@>=3.2.0-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_3.10.1":l(()=>n[9]||(n[9]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=3.10.1-tuxcare.1"
},
"overrides": {
  "lodash@3.10.1": "npm:@els-js/lodash@>=3.10.1-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_4.5.0":l(()=>n[10]||(n[10]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=4.5.0-tuxcare.1"
},
"overrides": {
  "lodash@4.5.0": "npm:@els-js/lodash@>=4.5.0-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_4.17.4":l(()=>n[11]||(n[11]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=4.17.4-tuxcare.1"
},
"overrides": {
  "lodash@4.17.4": "npm:@els-js/lodash@>=4.17.4-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_4.17.5":l(()=>n[12]||(n[12]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=4.17.5-tuxcare.1"
},
"overrides": {
  "lodash@4.17.5": "npm:@els-js/lodash@>=4.17.5-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_4.17.11":l(()=>n[13]||(n[13]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=4.17.11-tuxcare.1"
},
"overrides": {
  "lodash@4.17.11": "npm:@els-js/lodash@>=4.17.11-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_4.17.15":l(()=>n[14]||(n[14]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=4.17.15-tuxcare.1"
},
"overrides": {
  "lodash@4.17.15": "npm:@els-js/lodash@>=4.17.15-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_4.17.19":l(()=>n[15]||(n[15]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
},
"overrides": {
  "lodash@4.17.19": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_4.17.21":l(()=>n[16]||(n[16]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=4.17.21-tuxcare.1"
},
"overrides": {
  "lodash@4.17.21": "npm:@els-js/lodash@>=4.17.21-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"Lodash_4.18.1":l(()=>n[17]||(n[17]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=4.18.1-tuxcare.1"
},
"overrides": {
  "lodash@4.18.1": "npm:@els-js/lodash@>=4.18.1-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1})]),n[20]||(n[20]=e("li",{id:"option-2-tuxcare-patcher-automated"},[e("p",null,[e("strong",null,"Option 2: TuxCare Patcher (Automated)")]),e("p",null,[s("Install the Patcher globally and run it. The TuxCare Patcher automatically detects the Lodash version in your "),e("code",null,"package.json"),s(" and updates your "),e("code",null,"dependencies"),s(" and "),e("code",null,"overrides"),s(" to use the corresponding TuxCare "),e("code",null,"@els-js/*"),s(" packages.")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
tuxcare-patch-js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,[s("The patcher will update your "),e("code",null,"package.json"),s(", for example, from:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "^4.17.19"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,"to:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "lodash": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
},
"overrides": {
  "lodash@4.17.19": "npm:@els-js/lodash@>=4.17.19-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1))])]),n[25]||(n[25]=e("li",{id:"refresh-the-project-dependencies"},[e("p",null,[e("strong",null,"Refresh the project dependencies")]),e("p",null,[s("Remove "),e("code",null,"node_modules"),s(", "),e("code",null,"package-lock.json"),s(", and clear the npm cache:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`rm -rf node_modules package-lock.json && npm cache clean --force
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,"Install dependencies:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm install
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,[s("The token for the TuxCare repository is automatically picked up from your "),e("code",null,".npmrc"),s(" file.")])],-1)),n[26]||(n[26]=e("li",{id:"verify-the-setup"},[e("p",null,[e("strong",null,"Verify the setup")]),e("p",null,"Use npm to list the project's dependencies and confirm TuxCare packages are resolved correctly:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm list
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,[s("After reviewing the dependencies, run your application to ensure everything works correctly. The "),e("code",null,"npm"),s(" tool should be able to identify and resolve dependencies from the TuxCare ELS for Lodash repository.")])],-1))])]),_:1}),n[40]||(n[40]=e("h2",{id:"whats-next",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#whats-next","aria-hidden":"true"},"#"),s(" What's Next?")],-1)),a(m,{"hide-title":""},{default:l(()=>[e("ul",null,[n[35]||(n[35]=e("li",null,[e("img",{src:c,alt:""}),s(),e("a",{href:"https://tuxcare.com/cve-tracker/?product=Lodash",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),s(" — Track vulnerability fixes and updates")],-1)),n[36]||(n[36]=e("li",null,[e("img",{src:p,alt:""}),s(),e("a",{href:"https://tuxcare.com/cve-tracker/fixes?product=Lodash",target:"_blank",rel:"noopener noreferrer"},"Available fixes"),s(" — Patched versions and changelogs")],-1)),n[37]||(n[37]=e("li",null,[e("img",{src:v,alt:""}),s(),e("a",{href:"https://tuxcare.com/cve-tracker/products?product=Lodash",target:"_blank",rel:"noopener noreferrer"},"Supported components"),s(" — Full list of product parts covered by ELS")],-1)),n[38]||(n[38]=e("li",null,[e("img",{src:b,alt:""}),s(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript/lodash/",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),s(" — Vulnerability Exploitability eXchange feed")],-1)),e("li",null,[n[28]||(n[28]=e("img",{src:x,alt:""},null,-1)),n[29]||(n[29]=s()),a(i,{to:"/els-for-libraries/machine-readable-security-data/#software-bill-of-materials-sbom"},{default:l(()=>n[27]||(n[27]=[s("SBOM",-1)])),_:1,__:[27]}),n[30]||(n[30]=s(" — Software Bill of Materials (Nexus, credentials required)",-1))]),e("li",null,[n[32]||(n[32]=e("img",{src:g,alt:""},null,-1)),n[33]||(n[33]=s()),a(i,{to:"/els-for-libraries/managing-els-repository/#JavaScript"},{default:l(()=>n[31]||(n[31]=[s("Package updates",-1)])),_:1,__:[31]}),n[34]||(n[34]=s(" — Update an installed package to a newer TuxCare release",-1))])])]),_:1})])}const O=h(k,[["render",C],["__file","index.html.vue"]]);export{O as default};
