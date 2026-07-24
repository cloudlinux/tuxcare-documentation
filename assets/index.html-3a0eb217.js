import{_ as i,U as o,n as d,p as c,q as e,L as n,E as r,C as t}from"./framework-520e1760.js";const p=`<packageSourceMapping>
  <!-- Allow nuget.org to serve any package -->
  <packageSource key="nuget">
    <package pattern="*" />
  </packageSource>

  <!-- Route specific packages to TuxCare feed -->
  <packageSource key="TuxCare">
    <package pattern="Newtonsoft.*" />
  </packageSource>
</packageSourceMapping>`,g=`<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <!-- To inherit the global NuGet package sources remove the <clear/> line below -->
    <clear />
    <add key="TuxCare" value="https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" />
    <add key="nuget" value="https://api.nuget.org/v3/index.json" />
  </packageSources>

  <packageSourceCredentials>
      <TuxCare>
          <add key="Username" value="username" />
          <add key="Password" value="passwordHash" />
      </TuxCare>
  </packageSourceCredentials>

  <packageSourceMapping>
    <!-- Allow nuget.org to serve any package -->
    <packageSource key="nuget">
      <package pattern="*" />
    </packageSource>

    <!-- Route specific packages to TuxCare feed -->
    <packageSource key="TuxCare">
      <package pattern="Newtonsoft.*" />
    </packageSource>
  </packageSourceMapping>
</configuration>`,m={__name:"index.html",setup(x){return(v,a)=>{const s=o("ELSSteps"),l=o("TableTabs"),u=o("CodeTabs");return d(),c("div",null,[a[16]||(a[16]=e("h1",{id:"managing-the-els-repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#managing-the-els-repository","aria-hidden":"true"},"#"),n(" Managing the ELS repository")],-1)),a[17]||(a[17]=e("p",null,"This page provides instructions for upgrading to newer TuxCare package versions, accessing source code for ELS-patched libraries, and managing the TuxCare NuGet source for .NET projects.",-1)),a[18]||(a[18]=e("h2",{id:"how-to-upgrade-to-a-newer-version",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-upgrade-to-a-newer-version","aria-hidden":"true"},"#"),n(" How to Upgrade to a Newer Version")],-1)),r(l,{label:"Choose the Ecosystem: ",labels:{java:"Java",dotnet:".NET"}},{java:t(()=>a[0]||(a[0]=[e("p",null,[n("If you have already installed a package with a "),e("code",null,"tuxcare.1"),n(" suffix and want to upgrade to a newer release (for example, "),e("code",null,"tuxcare.3"),n("), update the version string in your Maven or Gradle build file with the version listed in your TuxCare Nexus account.")],-1)])),PHP:t(()=>[a[2]||(a[2]=e("p",null,[n("If you have already installed a TuxCare-patched package and want to upgrade to a newer release, update the version string in your "),e("code",null,"composer.json"),n(" file or run the "),e("code",null,"composer require"),n(" command with the new version.")],-1)),r(s,null,{default:t(()=>a[1]||(a[1]=[e("ol",null,[e("li",{id:"update-the-required-version"},[e("p",null,"Update the required version"),e("p",null,[n("Replace "),e("code",null,"VENDOR/PACKAGE"),n(" with the package name and "),e("code",null,"VERSION-pN+tuxcare"),n(" with the version listed in your TuxCare Nexus account:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer require VENDOR/PACKAGE:VERSION-pN+tuxcare
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])]),e("li",{id:"apply-the-changes"},[e("p",null,"Apply the changes"),e("p",null,[n("Run "),e("code",null,"composer update"),n(" to resolve dependencies and install the new release:")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`composer update
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])])],-1)])),_:1,__:[1]}),a[3]||(a[3]=e("p",null,[e("strong",null,"Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.")],-1))]),Python:t(()=>a[4]||(a[4]=[e("p",null,[n("To upgrade to a newer TuxCare release (for example, from "),e("code",null,"version.post1+tuxcare"),n(" to "),e("code",null,"version.post2+tuxcare"),n("), use the same installation method you used during setup and specify the newer package version listed in your TuxCare Nexus account.")],-1)])),JavaScript:t(()=>a[5]||(a[5]=[e("p",null,[n("To upgrade to a newer TuxCare release (for example, from "),e("code",null,"tuxcare.1"),n(" to "),e("code",null,"tuxcare.3"),n("), remove "),e("code",null,"node_modules"),n(", clear the npm cache to avoid conflicts, and then run the installation command:")],-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`rm -rf node_modules package-lock.json && npm cache clean --force
npm install
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),dotnet:t(()=>a[6]||(a[6]=[e("p",null,[e("strong",null,"Check the exact version listed in your TuxCare Nexus account to ensure you receive the most recent patched release.")],-1),e("p",null,"To upgrade to a newer TuxCare release, update the package in your project:",-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`dotnet add package <PACKAGE_NAME> --version <NEW_VERSION>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),e("p",null,"Then rebuild the project to verify the upgrade:",-1),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`dotnet build
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1)])),_:1}),a[19]||(a[19]=e("h2",{id:"source-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#source-code","aria-hidden":"true"},"#"),n(" Source code")],-1)),r(l,{label:"Choose the Ecosystem: ",labels:{javaSources:"Java",dotnetSources:".NET"}},{javaSources:t(()=>a[7]||(a[7]=[e("p",null,[n("Source code is available for TuxCare-patched "),e("strong",null,"Java"),n(" libraries. Source JARs follow the standard Maven naming convention with a "),e("code",null,"-sources"),n(" classifier and are published to the "),e("a",{href:"https://nexus.repo.tuxcare.com/#browse/browse:els_java",target:"_blank",rel:"noopener noreferrer"},"Nexus repository"),n(".")],-1),e("p",null,[n("For example: "),e("a",{href:"https://nexus.repo.tuxcare.com/repository/els_java/commons-lang/commons-lang/2.6-tuxcare.1/commons-lang-2.6-tuxcare.1-sources.jar",target:"_blank",rel:"noopener noreferrer"},"https://nexus.repo.tuxcare.com/repository/els_java/commons-lang/commons-lang/2.6-tuxcare.1/commons-lang-2.6-tuxcare.1-sources.jar"),n(".")],-1),e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"}),e("p",null,[n("If a source JAR is not available for a specific package, please contact "),e("a",{href:"mailto:sales@tuxcare.com"},"sales@tuxcare.com"),n(".")])],-1)])),dotnetSources:t(()=>[a[15]||(a[15]=e("p",null,[n("The TuxCare NuGet source is configured per-project in "),e("code",null,"nuget.config"),n(". Use the "),e("code",null,"dotnet"),n(" CLI or edit "),e("code",null,"nuget.config"),n(" directly to manage it. Replace "),e("code",null,"<els_dotnet_customerN>"),n(" with your customer repository name.")],-1)),e("ul",null,[a[11]||(a[11]=e("li",null,[e("p",null,[e("strong",null,"Add the TuxCare source")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`dotnet nuget add source "https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" \\
  --name TuxCare \\
  --username USERNAME \\
  --password PASSWORD
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),a[12]||(a[12]=e("li",null,[e("p",null,[e("strong",null,"List configured sources")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`dotnet nuget list source
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])]),e("p",null,"Example output:"),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Registered Sources:
  1.  TuxCare [Enabled]
      https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json
  2.  nuget [Enabled]
      https://api.nuget.org/v3/index.json
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),a[13]||(a[13]=e("li",null,[e("p",null,[e("strong",null,"Update source credentials")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`dotnet nuget remove source TuxCare
dotnet nuget add source "https://nexus.repo.tuxcare.com/repository/<els_dotnet_customerN>/index.json" \`
  --name TuxCare \`
  --username <NEW_USERNAME> \`
  --password <NEW_PASSWORD>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1)),a[14]||(a[14]=e("li",null,[e("p",null,[e("strong",null,"Remove the source")]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`dotnet nuget remove source TuxCare
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])],-1)),e("li",null,[a[8]||(a[8]=e("p",null,[e("strong",null,"Route specific packages to TuxCare (Package Source Mapping)")],-1)),a[9]||(a[9]=e("p",null,[n("If you use a "),e("code",null,"nuget.config"),n(" file, you can add package source mapping to route specific packages to the TuxCare feed. This ensures certain packages are always fetched from TuxCare while others come from NuGet.org.")],-1)),a[10]||(a[10]=e("p",null,[n("Add a "),e("code",null,"<packageSourceMapping>"),n(" section inside "),e("code",null,"<configuration>"),n(" in your "),e("code",null,"nuget.config"),n(". For example, to route Newtonsoft.Json to TuxCare:")],-1)),r(u,{tabs:[{title:"Snippet to Add",content:p},{title:"Full nuget.config",content:g}]},null,8,["tabs"])])])]),_:1})])}}},b=i(m,[["__file","index.html.vue"]]);export{b as default};
