"use strict";(self.webpackChunktechwriter=self.webpackChunktechwriter||[]).push([[3532],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,s(s({ref:t},i),{},{components:n})):r.createElement(g,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],u={slug:"resolve-unmet-dependecies",title:"Unmet Dependencies in Docusaurus",authors:{name:"Faycal Alami-Hassani",title:"Website's owner",url:"https://github.com/ka2in",image_url:"https://github.com/ka2in.png"},tags:["docusaurus","v. 2.0.0-beta.18","yarn","unmet dependencies"]},l=void 0,c={permalink:"/mydocusaurus/blog/resolve-unmet-dependecies",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-03-26-resolve-unmet-dependencies.md",source:"@site/blog/2022-03-26-resolve-unmet-dependencies.md",title:"Unmet Dependencies in Docusaurus",description:"This is the first time that I am facing issues with unmet dependencies in Docusaurus after a Yarn Upgrade.",date:"2022-03-26T00:00:00.000Z",formattedDate:"March 26, 2022",tags:[{label:"docusaurus",permalink:"/mydocusaurus/blog/tags/docusaurus"},{label:"v. 2.0.0-beta.18",permalink:"/mydocusaurus/blog/tags/v-2-0-0-beta-18"},{label:"yarn",permalink:"/mydocusaurus/blog/tags/yarn"},{label:"unmet dependencies",permalink:"/mydocusaurus/blog/tags/unmet-dependencies"}],readingTime:1.17,truncated:!1,authors:[{name:"Faycal Alami-Hassani",title:"Website's owner",url:"https://github.com/ka2in",image_url:"https://github.com/ka2in.png",imageURL:"https://github.com/ka2in.png"}],frontMatter:{slug:"resolve-unmet-dependecies",title:"Unmet Dependencies in Docusaurus",authors:{name:"Faycal Alami-Hassani",title:"Website's owner",url:"https://github.com/ka2in",image_url:"https://github.com/ka2in.png",imageURL:"https://github.com/ka2in.png"},tags:["docusaurus","v. 2.0.0-beta.18","yarn","unmet dependencies"]},nextItem:{title:"Modify The Welcome Text In GNU Social",permalink:"/mydocusaurus/blog/gnu-social-welcome"}},i={authorsImageUrls:[void 0]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is the first time that I am facing issues with unmet dependencies in Docusaurus after a Yarn Upgrade. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Yarn")," is a JavaScript package manager that was developed to address some shortcomings of ",(0,o.kt)("strong",{parentName:"p"},"npm"),", an older package manager and the default manager for Node.js."),(0,o.kt)("p",null,"If you want to learn more about the differences between yarn and npm, I suggest you read the following article: ",(0,o.kt)("a",{parentName:"p",href:"https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/"},"npm vs. yarn: Which Package Manager Should You Choose?"),"  "),(0,o.kt)("p",null,"Yesterday, I got a warning message prompting me to upgrade Yarn while I was testing Docusaurus locally."),(0,o.kt)("p",null,"After running the upgrade with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest\n")),(0,o.kt)("p",null,"I got several warning messages regarding unmet peer dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ warning "@docusaurus/core > react-dev-utils > fork-ts-checker-webpack-plugin@6.5.0" has unmet peer dependency "typescript@>= 2.7".\n$ warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react@3.0.0" has unmet peer dependency "@types/react@>= 16.8.0 < 18.0.0".\n')),(0,o.kt)("p",null,"To resolve the issue, I had to install the latest versions of the following packages inside my project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ npm i typescript@2.7.2\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ npm install --save @types/react\n")),(0,o.kt)("p",null,"Once the installation has completed, I wanted to make sure that the problem was resolved, so I regenerated the content with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ yarn run build\n")),(0,o.kt)("p",null,"Then I used the following command to test my build locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ yarn run serve\n")),(0,o.kt)("p",null,"That's it! Everything is working fine now \u2600\ufe0f."),(0,o.kt)("p",null,"Copyright \xa9 GlobalTech Translations 2022."))}d.isMDXComponent=!0}}]);