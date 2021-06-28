(self.webpackChunkreact_native_sensitive_info=self.webpackChunkreact_native_sensitive_info||[]).push([[3142],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),v=i,d=f["".concat(s,".").concat(v)]||f[v]||u[v]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},223:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o=["components"],l={id:"isSensorAvailable",title:"isSensorAvailable",sidebar_label:"isSensorAvailable"},s=void 0,c={unversionedId:"isSensorAvailable",id:"version-5.x/isSensorAvailable",isDocsHomePage:!1,title:"isSensorAvailable",description:"Indicates the overall availability of fingerprint sensor. It will resolve to true or false",source:"@site/versioned_docs/version-5.x/isSensorAvailable.md",sourceDirName:".",slug:"/isSensorAvailable",permalink:"/react-native-sensitive-info/docs/5.x/isSensorAvailable",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/versioned_docs/version-5.x/isSensorAvailable.md",version:"5.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596129524,formattedLastUpdatedAt:"7/30/2020",frontMatter:{id:"isSensorAvailable",title:"isSensorAvailable",sidebar_label:"isSensorAvailable"},sidebar:"version-5.x/someSidebar",previous:{title:"hasEnrolledFingerprints",permalink:"/react-native-sensitive-info/docs/5.x/hasEnrolledFingerprints"},next:{title:"setItem",permalink:"/react-native-sensitive-info/docs/5.x/setItem"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Indicates the overall availability of fingerprint sensor. It will resolve to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'isSensorAvailable(): Promise<\n  "Touch ID" | "Face ID" | boolean\n>;\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import RNSInfo from 'react-native-sensitive-info';\n\nSINFo.isSensorAvailable();\n")))}f.isMDXComponent=!0}}]);