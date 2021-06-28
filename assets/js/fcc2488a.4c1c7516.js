(self.webpackChunkreact_native_sensitive_info=self.webpackChunkreact_native_sensitive_info||[]).push([[9298],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1635:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=t(4034),i=t(9973),o=(t(7294),t(3905)),a=["components"],c={id:"android_options",title:"Android",sidebar_label:"Android"},s=void 0,l={unversionedId:"android_options",id:"android_options",isDocsHomePage:!1,title:"Android",description:"Android specific configurations",source:"@site/docs/android_options.md",sourceDirName:".",slug:"/android_options",permalink:"/react-native-sensitive-info/docs/next/android_options",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/docs/android_options.md",version:"current",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1624916702,formattedLastUpdatedAt:"6/28/2021",frontMatter:{id:"android_options",title:"Android",sidebar_label:"Android"},sidebar:"someSidebar",previous:{title:"setItem",permalink:"/react-native-sensitive-info/docs/next/setItem"},next:{title:"iOS",permalink:"/react-native-sensitive-info/docs/next/ios_options"}},d=[{value:"sharedPreferencesName",id:"sharedpreferencesname",children:[]},{value:"touchID",id:"touchid",children:[]},{value:"showModal &amp; strings",id:"showmodal--strings",children:[]},{value:"setInvalidatedByBiometricEnrollment",id:"setinvalidatedbybiometricenrollment",children:[]}],p={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Android specific configurations"),(0,o.kt)("h2",{id:"sharedpreferencesname"},"sharedPreferencesName"),(0,o.kt)("p",null,"You can choose the shared preferences' name which you want to use. Otherwise, the default is ",(0,o.kt)("strong",{parentName:"p"},"shared_preferences")),(0,o.kt)("h2",{id:"touchid"},"touchID"),(0,o.kt)("p",null,"Enable fingerprint authentication for Android and TouchID for iOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"SInfo.setItem('key1', 'value1', {\n  ...\n  touchID: true,\n});\n")),(0,o.kt)("h2",{id:"showmodal--strings"},"showModal & strings"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"showModal")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", an Android native prompt will show up asking for user's authentication."),(0,o.kt)("p",null,"You can control strings associated with a modal prompt via ",(0,o.kt)("inlineCode",{parentName:"p"},"strings")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"strings: {\n    header: 'Sign in',\n    description: 'Place finger to authenticate',\n    hint: 'Touch',\n    success: 'Fingerprint recognized',\n    notRecognized: 'Fingerprint not recognized, try again',\n    cancel: 'Cancel',\n    cancelled: 'Authentication was cancelled', // reject error message\n}\n")),(0,o.kt)("h2",{id:"setinvalidatedbybiometricenrollment"},"setInvalidatedByBiometricEnrollment"),(0,o.kt)("p",null,"If you want to control the behaviour on android when new fingers are enrolled or removed on the device on any device with API level greater than 24. You should call during the initialization of your app to the function ",(0,o.kt)("inlineCode",{parentName:"p"},"setInvalidatedByBiometricEnrollment"),". This will re-initialise the internal android Key generator with the flag set to keep/invalidate the credentials upon fingers change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import SInfo from "react-native-sensitive-info";\n\nSInfo.setInvalidatedByBiometricEnrollment(false);\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder#setInvalidatedByBiometricEnrollment(boolean)"},"You can check out more here")))}u.isMDXComponent=!0}}]);