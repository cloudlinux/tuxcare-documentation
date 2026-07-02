import{_ as o}from"./eye-bd28630a.js";import{_ as p}from"./shield-alert-226df5e9.js";import{_ as b}from"./unlock-alt-12fd40c9.js";import{_ as x}from"./bolt-90ed8319.js";import{_ as v,U as r,n as g,p as j,a8 as f,E as a,C as l,L as s,q as e}from"./framework-520e1760.js";const h={},k={id:"update-dependencies"};function y(w,n){const i=r("ELSBadge"),t=r("ELSPrerequisites"),u=r("TableTabs"),d=r("ELSSteps"),c=r("RouterLink"),m=r("WhatsNext");return g(),j("div",null,[n[20]||(n[20]=f('<h1 id="emberjs" tabindex="-1"><a class="header-anchor" href="#emberjs" aria-hidden="true">#</a> Ember.js</h1><p>Endless Lifecycle Support (ELS) for Ember.js from TuxCare provides security fixes for Ember.js versions that have reached their end of life. This allows you to continue running Ember.js applications without vulnerability concerns, even after official support has ended.</p><h2 id="supported-emberjs-versions" tabindex="-1"><a class="header-anchor" href="#supported-emberjs-versions" aria-hidden="true">#</a> Supported Ember.js Versions</h2><ul><li>Ember.js 0.2.7, 1.13.11, 2.18.2, 3.28.6, 4.12.13</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',5)),a(i,{heading:""},{default:l(()=>n[0]||(n[0]=[s("Docker compatible",-1)])),_:1,__:[0]}),n[21]||(n[21]=e("p",null,[s("TuxCare publishes patched "),e("strong",null,"transitive"),s(" dependencies for supported Ember.js versions as NPM packages on a secure internal registry. Choose your Ember.js version below for the exact package list and "),e("code",null,"overrides"),s(".")],-1)),a(t,null,{default:l(()=>n[1]||(n[1]=[e("ul",null,[e("li",null,[e("strong",null,"npm"),s(" package manager installed")]),e("li",null,[s("TuxCare registry token — contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com")]),e("li",null,[s("To browse available artifacts, visit TuxCare "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_js",target:"_blank",rel:"noopener noreferrer"},"Nexus"),s(" and click Sign in in the top right corner. You may need to refresh the page after logging in.")])],-1)])),_:1,__:[1]}),a(d,null,{default:l(()=>[e("ol",null,[n[9]||(n[9]=e("li",{id:"create-or-update-the-npmrc-file"},[e("p",null,[e("strong",null,"Create or update the .npmrc file")]),e("p",null,[s("Navigate to the root directory of your Ember.js project and create a "),e("code",null,".npmrc"),s(" file or update it if it already exists.")]),e("p",null,[e("strong",null,"Example:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`my-ember-project/
├── node_modules/
├── package.json
├── .npmrc         ⚠️ ← Create it here
└── package-lock.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),n[10]||(n[10]=e("li",{id:"configure-the-npm-registry"},[e("p",null,[e("strong",null,"Configure the npm registry")]),e("p",null,[s("Use an editor of your choice (e.g., VS Code) to add the following registry address lines to the "),e("code",null,".npmrc"),s(" file:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`registry=https://registry.npmjs.org/
@els-js:registry=https://nexus.repo.tuxcare.com/repository/els_js/
//nexus.repo.tuxcare.com/repository/els_js/:_auth=\${TOKEN}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[s("Replace "),e("code",null,"${TOKEN}"),s(" with the token you received from "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com"),s(".")])])],-1)),e("li",k,[n[7]||(n[7]=e("p",null,[e("strong",null,"Update dependencies")],-1)),n[8]||(n[8]=e("p",null,[s("Update your "),e("code",null,"package.json"),s(" so the transitive versions for your Ember.js version resolve to TuxCare packages. You can do this in two ways:")],-1)),a(u,{label:"Choose Ember.js version: "},{"ember_0.2.7":l(()=>n[2]||(n[2]=[e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "body-parser": "npm:@els-js/body-parser@>=1.8.4-tuxcare.1",
  "chownr": "npm:@els-js/chownr@>=0.0.2-tuxcare.1",
  "clean-css": "npm:@els-js/clean-css@>=2.2.23-tuxcare.1",
  "concat-stream": "npm:@els-js/concat-stream@>=1.4.8-tuxcare.1",
  "cross-spawn": "npm:@els-js/cross-spawn@>=0.2.9-tuxcare.1",
  "decompress-zip": "npm:@els-js/decompress-zip@>=0.1.0-tuxcare.1",
  "deep-extend": "npm:@els-js/deep-extend@>=0.2.11-tuxcare.1",
  "es5-ext": "npm:@els-js/es5-ext@>=0.10.7-tuxcare.1",
  "forwarded": "npm:@els-js/forwarded@>=0.1.0-tuxcare.1",
  "fresh": "npm:@els-js/fresh@>=0.2.4-tuxcare.1",
  "got": "npm:@els-js/got@>=2.9.2-tuxcare.1",
  "hoek": "npm:@els-js/hoek@>=2.14.0-tuxcare.1",
  "ini": "npm:@els-js/ini@>=1.3.3-tuxcare.1",
  "is-my-json-valid": "npm:@els-js/is-my-json-valid@>=2.10.1-tuxcare.1",
  "js-yaml": "npm:@els-js/js-yaml@>=3.3.1-tuxcare.1",
  "json5": "npm:@els-js/json5@>=0.5.1-tuxcare.1",
  "jsonpointer": "npm:@els-js/jsonpointer@>=1.1.0-tuxcare.1",
  "markdown-it": "npm:@els-js/markdown-it@>=4.0.3-tuxcare.1",
  "merge": "npm:@els-js/merge@>=1.2.1-tuxcare.1",
  "morgan": "npm:@els-js/morgan@>=1.5.3-tuxcare.1",
  "mout": "npm:@els-js/mout@>=0.11.0-tuxcare.1",
  "parsejson": "npm:@els-js/parsejson@>=0.0.3-tuxcare.1",
  "path-to-regexp": "npm:@els-js/path-to-regexp@>=0.1.3-tuxcare.1",
  "qs": "npm:@els-js/qs@>=2.4.2-tuxcare.1",
  "semver": "npm:@els-js/semver@>=2.3.2-tuxcare.1",
  "shell-quote": "npm:@els-js/shell-quote@>=1.4.3-tuxcare.1",
  "stringstream": "npm:@els-js/stringstream@>=0.0.4-tuxcare.1",
  "tar": "npm:@els-js/tar@>=2.1.1-tuxcare.1",
  "tar-fs": "npm:@els-js/tar-fs@>=1.5.1-tuxcare.1",
  "tough-cookie": "npm:@els-js/tough-cookie@>=1.2.0-tuxcare.1",
  "tunnel-agent": "npm:@els-js/tunnel-agent@>=0.4.0-tuxcare.1",
  "uglify-js": "npm:@els-js/uglify-js@>=1.1.1-tuxcare.1",
  "websocket-extensions": "npm:@els-js/websocket-extensions@>=0.1.1-tuxcare.1",
  "xmldom": "npm:@els-js/xmldom@>=0.1.31-tuxcare.1"
},
"overrides": {
  "body-parser@1.8.4": "npm:@els-js/body-parser@>=1.8.4-tuxcare.1",
  "chownr@0.0.2": "npm:@els-js/chownr@>=0.0.2-tuxcare.1",
  "clean-css@2.2.23": "npm:@els-js/clean-css@>=2.2.23-tuxcare.1",
  "concat-stream@1.4.8": "npm:@els-js/concat-stream@>=1.4.8-tuxcare.1",
  "cross-spawn@0.2.9": "npm:@els-js/cross-spawn@>=0.2.9-tuxcare.1",
  "decompress-zip@0.1.0": "npm:@els-js/decompress-zip@>=0.1.0-tuxcare.1",
  "deep-extend@0.2.11": "npm:@els-js/deep-extend@>=0.2.11-tuxcare.1",
  "es5-ext@0.10.7": "npm:@els-js/es5-ext@>=0.10.7-tuxcare.1",
  "forwarded@0.1.0": "npm:@els-js/forwarded@>=0.1.0-tuxcare.1",
  "fresh@0.2.4": "npm:@els-js/fresh@>=0.2.4-tuxcare.1",
  "got@2.9.2": "npm:@els-js/got@>=2.9.2-tuxcare.1",
  "hoek@2.12.0": "npm:@els-js/hoek@>=2.12.0-tuxcare.1",
  "hoek@2.14.0": "npm:@els-js/hoek@>=2.14.0-tuxcare.1",
  "ini@1.3.3": "npm:@els-js/ini@>=1.3.3-tuxcare.1",
  "is-my-json-valid@2.10.1": "npm:@els-js/is-my-json-valid@>=2.10.1-tuxcare.1",
  "js-yaml@3.3.1": "npm:@els-js/js-yaml@>=3.3.1-tuxcare.1",
  "json5@0.5.1": "npm:@els-js/json5@>=0.5.1-tuxcare.1",
  "jsonpointer@1.1.0": "npm:@els-js/jsonpointer@>=1.1.0-tuxcare.1",
  "markdown-it@4.0.3": "npm:@els-js/markdown-it@>=4.0.3-tuxcare.1",
  "merge@1.2.1": "npm:@els-js/merge@>=1.2.1-tuxcare.1",
  "morgan@1.5.3": "npm:@els-js/morgan@>=1.5.3-tuxcare.1",
  "mout@0.11.0": "npm:@els-js/mout@>=0.11.0-tuxcare.1",
  "parsejson@0.0.3": "npm:@els-js/parsejson@>=0.0.3-tuxcare.1",
  "path-to-regexp@0.1.3": "npm:@els-js/path-to-regexp@>=0.1.3-tuxcare.1",
  "qs@2.2.5": "npm:@els-js/qs@>=2.2.5-tuxcare.1",
  "qs@2.4.2": "npm:@els-js/qs@>=2.4.2-tuxcare.1",
  "semver@2.3.2": "npm:@els-js/semver@>=2.3.2-tuxcare.1",
  "shell-quote@1.4.3": "npm:@els-js/shell-quote@>=1.4.3-tuxcare.1",
  "stringstream@0.0.4": "npm:@els-js/stringstream@>=0.0.4-tuxcare.1",
  "tar@2.1.1": "npm:@els-js/tar@>=2.1.1-tuxcare.1",
  "tar-fs@1.5.1": "npm:@els-js/tar-fs@>=1.5.1-tuxcare.1",
  "tough-cookie@1.2.0": "npm:@els-js/tough-cookie@>=1.2.0-tuxcare.1",
  "tunnel-agent@0.4.0": "npm:@els-js/tunnel-agent@>=0.4.0-tuxcare.1",
  "uglify-js@1.1.1": "npm:@els-js/uglify-js@>=1.1.1-tuxcare.1",
  "websocket-extensions@0.1.1": "npm:@els-js/websocket-extensions@>=0.1.1-tuxcare.1",
  "xmldom@0.1.31": "npm:@els-js/xmldom@>=0.1.31-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),"ember_1.13.11":l(()=>n[3]||(n[3]=[e("ul",null,[e("li",{id:"option-1-manual-update"},[e("p",null,[e("strong",null,"Option 1: Manual update")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "ember-cli": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
},
"overrides": {
  "ember-cli@1.13.11": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])]),e("li",{id:"option-2-tuxcare-patcher-automated"},[e("p",null,[e("strong",null,"Option 2: TuxCare Patcher (Automated)")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
tuxcare-patch-js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,[s("The patcher will update your "),e("code",null,"package.json"),s(", for example, from:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "ember-cli": "1.13.11"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,"to:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "ember-cli": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
},
"overrides": {
  "ember-cli@1.13.11": "npm:@els-js/ember-cli@>=1.13.11-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])])],-1)])),"ember_2.18.2":l(()=>n[4]||(n[4]=[e("ul",null,[e("li",{id:"option-1-manual-update-1"},[e("p",null,[e("strong",null,"Option 1: Manual update")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "terser": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
  "rollup": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
  "printf": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
  "markdown-it": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
  "clean-css": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
},
"overrides": {
  "terser@3.17.0": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
  "rollup@0.41.6": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
  "printf@0.5.3": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
  "markdown-it@8.4.2": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
  "clean-css@3.4.28": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])]),e("li",{id:"option-2-tuxcare-patcher-automated-1"},[e("p",null,[e("strong",null,"Option 2: TuxCare Patcher (Automated)")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
tuxcare-patch-js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,[s("The patcher will update your "),e("code",null,"package.json"),s(", for example, from:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "terser": "3.17.0",
  "rollup": "0.41.6",
  "printf": "0.5.3",
  "markdown-it": "8.4.2",
  "clean-css": "3.4.28"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,"to:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "terser": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
  "rollup": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
  "printf": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
  "markdown-it": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
  "clean-css": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
},
"overrides": {
  "terser@3.17.0": "npm:@els-js/terser@>=3.17.0-tuxcare.1",
  "rollup@0.41.6": "npm:@els-js/rollup@>=0.41.6-tuxcare.1",
  "printf@0.5.3": "npm:@els-js/printf@>=0.5.3-tuxcare.1",
  "markdown-it@8.4.2": "npm:@els-js/markdown-it@>=8.4.2-tuxcare.1",
  "clean-css@3.4.28": "npm:@els-js/clean-css@>=3.4.28-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])])],-1)])),"ember_3.28.6":l(()=>n[5]||(n[5]=[e("ul",null,[e("li",{id:"option-1-manual-update-2"},[e("p",null,[e("strong",null,"Option 1: Manual update")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "rollup": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
  "markdown-it": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
  "diff": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
},
"overrides": {
  "rollup@0.57.1": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
  "markdown-it@13.0.2": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
  "diff@7.0.0": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])]),e("li",{id:"option-2-tuxcare-patcher-automated-2"},[e("p",null,[e("strong",null,"Option 2: TuxCare Patcher (Automated)")]),e("p",null,[s("Install the Patcher globally and run it. The TuxCare Patcher updates your "),e("code",null,"package.json"),s(" so these library versions use the corresponding TuxCare "),e("code",null,"@els-js/*"),s(" packages.")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
tuxcare-patch-js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,[s("The patcher will update your "),e("code",null,"package.json"),s(", for example, from:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "rollup": "0.57.1",
  "markdown-it": "13.0.2",
  "diff": "7.0.0"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,"to:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "rollup": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
  "markdown-it": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
  "diff": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
},
"overrides": {
  "rollup@0.57.1": "npm:@els-js/rollup@>=0.57.1-tuxcare.1",
  "markdown-it@13.0.2": "npm:@els-js/markdown-it@>=13.0.2-tuxcare.1",
  "diff@7.0.0": "npm:@els-js/diff@>=7.0.0-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])])],-1)])),"ember_4.12.13":l(()=>n[6]||(n[6]=[e("ul",null,[e("li",{id:"option-1-manual-update-3"},[e("p",null,[e("strong",null,"Option 1: Manual update")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "@babel/runtime": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
  "tmp": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
},
"overrides": {
  "@babel/runtime@7.12.18": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
  "tmp@0.0.28": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])]),e("li",{id:"option-2-tuxcare-patcher-automated-3"},[e("p",null,[e("strong",null,"Option 2: TuxCare Patcher (Automated)")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm install -g @els-js/tuxcare-patcher --userconfig ./.npmrc
tuxcare-patch-js
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,[s("The patcher will update your "),e("code",null,"package.json"),s(", for example, from:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "@babel/runtime": "7.12.18",
  "tmp": "0.0.28"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,"to:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`"dependencies": {
  "@babel/runtime": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
  "tmp": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
},
"overrides": {
  "@babel/runtime@7.12.18": "npm:@els-js/babel-runtime@>=7.12.18-tuxcare.1",
  "tmp@0.0.28": "npm:@els-js/tmp@>=0.0.28-tuxcare.1"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])])],-1)])),_:1})]),n[11]||(n[11]=e("li",{id:"refresh-the-project-dependencies"},[e("p",null,[e("strong",null,"Refresh the project dependencies")]),e("p",null,[s("Remove "),e("code",null,"node_modules"),s(", "),e("code",null,"package-lock.json"),s(", and clear the npm cache:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`rm -rf node_modules package-lock.json && npm cache clean --force
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,"Install dependencies:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm install
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,[s("The token for the TuxCare repository is automatically picked up from your "),e("code",null,".npmrc"),s(" file.")])],-1)),n[12]||(n[12]=e("li",{id:"verify-the-setup"},[e("p",null,[e("strong",null,"Verify the setup")]),e("p",null,"Use npm to list the project's dependencies and confirm TuxCare packages are resolved correctly:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm list
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,[s("After reviewing the dependencies, run your application to ensure everything works correctly. The "),e("code",null,"npm"),s(" tool should be able to identify and resolve dependencies from the TuxCare ELS registry.")])],-1))])]),_:1}),n[22]||(n[22]=e("h2",{id:"whats-next",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#whats-next","aria-hidden":"true"},"#"),s(" What's Next?")],-1)),a(m,{"hide-title":""},{default:l(()=>[e("ul",null,[n[17]||(n[17]=e("li",null,[e("img",{src:o,alt:""}),s(),e("a",{href:"https://tuxcare.com/cve-tracker/",target:"_blank",rel:"noopener noreferrer"},"CVE Tracker"),s(" — Track vulnerability fixes and updates")],-1)),n[18]||(n[18]=e("li",null,[e("img",{src:p,alt:""}),s(),e("a",{href:"https://security.tuxcare.com/vex/cyclonedx/els_lang_javascript",target:"_blank",rel:"noopener noreferrer"},"VEX feed"),s(" — Vulnerability Exploitability eXchange feed")],-1)),n[19]||(n[19]=e("li",null,[e("img",{src:b,alt:""}),s(),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els-js-sbom",target:"_blank",rel:"noopener noreferrer"},"SBOM"),s(" — Software Bill of Materials (Nexus, credentials required)")],-1)),e("li",null,[n[14]||(n[14]=e("img",{src:x,alt:""},null,-1)),n[15]||(n[15]=s()),a(c,{to:"/els-for-libraries/managing-els-repository/#JavaScript"},{default:l(()=>n[13]||(n[13]=[s("Package updates",-1)])),_:1,__:[13]}),n[16]||(n[16]=s(" — Update an installed package to a newer TuxCare release",-1))])])]),_:1})])}const q=v(h,[["render",y],["__file","index.html.vue"]]);export{q as default};
