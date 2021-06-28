(self.webpackChunkreact_native_sensitive_info=self.webpackChunkreact_native_sensitive_info||[]).push([[3647],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1299:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(4034),i=n(9973),o=(n(7294),n(3905)),a=["components"],c={id:"getItem",title:"getItem",sidebar_label:"getItem"},s=void 0,l={unversionedId:"getItem",id:"version-5.x/getItem",isDocsHomePage:!1,title:"getItem",description:"Get an item from storage",source:"@site/versioned_docs/version-5.x/getItem.md",sourceDirName:".",slug:"/getItem",permalink:"/react-native-sensitive-info/docs/5.x/getItem",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/versioned_docs/version-5.x/getItem.md",version:"5.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596129524,formattedLastUpdatedAt:"7/30/2020",frontMatter:{id:"getItem",title:"getItem",sidebar_label:"getItem"},sidebar:"version-5.x/someSidebar",previous:{title:"getAllItems",permalink:"/react-native-sensitive-info/docs/5.x/getAllItems"},next:{title:"hasEnrolledFingerprints",permalink:"/react-native-sensitive-info/docs/5.x/hasEnrolledFingerprints"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Get an item from storage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"getItem(key, options) : Promise<string>\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import RNSInfo from 'react-native-sensitive-info';\n\nconst myFunc = async () => {\n    return SInfo.getItem('key1', {\n        sharedPreferencesName: 'mySharedPrefs',\n        keychainService: 'myKeychain'\n    });\n}\n\nawait myFunc();\n\n// The data is retrieved\n")))}m.isMDXComponent=!0}}]);