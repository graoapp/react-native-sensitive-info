(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),i=(r(0),r(117)),a={id:"how_it_works",title:"How it works",sidebar_label:"How it works"},c={unversionedId:"how_it_works",id:"version-6.x/how_it_works",isDocsHomePage:!1,title:"How it works",description:"Supposing you need to save an authentication token in user's device using RNSInfo.setItem:",source:"@site/versioned_docs/version-6.x/how_it_works.md",slug:"/how_it_works",permalink:"/react-native-sensitive-info/docs/how_it_works",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/versioned_docs/version-6.x/how_it_works.md",version:"6.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596129524,sidebar_label:"How it works",sidebar:"version-6.x/someSidebar",previous:{title:"Overview",permalink:"/react-native-sensitive-info/docs/"},next:{title:"Installation",permalink:"/react-native-sensitive-info/docs/installation"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Supposing you need to save an authentication token in user's device using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"setItem"}),"RNSInfo.setItem"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Android: RNSInfo will automatically encrypt the token using keystore and save it into shared preferences. If you want you will be able to add an extra layer of security by requesting user's fingerprint to unlock the encrypted data. Check out our recipe ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"protectingWithFingerprint"}),"here"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"iOS: RNSInfo will automatically save your data into user's keychain which is handled by OS. You can also add an extra layer of security by requesting user's fingerprint or faceID to unlock the encrypted data. Check out our recipe ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"protectingWithFingerprint"}),"here")))))}l.isMDXComponent=!0},117:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);