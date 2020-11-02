(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,O=b["".concat(a,".").concat(d)]||b[d]||u[d]||c;return n?o.a.createElement(O,i(i({ref:t},s),{},{components:n})):o.a.createElement(O,i({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),c=(n(0),n(117)),a={id:"ios_options",title:"iOS",sidebar_label:"iOS"},i={unversionedId:"ios_options",id:"version-6.x/ios_options",isDocsHomePage:!1,title:"iOS",description:"keychainService",source:"@site/versioned_docs/version-6.x/ios_options.md",slug:"/ios_options",permalink:"/react-native-sensitive-info/docs/ios_options",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/versioned_docs/version-6.x/ios_options.md",version:"6.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1597953054,sidebar_label:"iOS",sidebar:"version-6.x/someSidebar",previous:{title:"Android",permalink:"/react-native-sensitive-info/docs/android_options"},next:{title:"Windows",permalink:"/react-native-sensitive-info/docs/windows_options"}},l=[{value:"keychainService",id:"keychainservice",children:[]},{value:"touchID",id:"touchid",children:[]},{value:"kSecAccessControl",id:"ksecaccesscontrol",children:[]},{value:"kSecAttrSynchronizable",id:"ksecattrsynchronizable",children:[]},{value:"kLocalizedFallbackTitle",id:"klocalizedfallbacktitle",children:[]},{value:"kSecUseOperationPrompt",id:"ksecuseoperationprompt",children:[]},{value:"Enable Face ID",id:"enable-face-id",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"keychainservice"},"keychainService"),Object(c.b)("p",null,"You can choose the keychain's service which you want to use. Otherwise, the default is ",Object(c.b)("strong",{parentName:"p"},"app")),Object(c.b)("h2",{id:"touchid"},"touchID"),Object(c.b)("p",null,"Enable TouchID for iOS and fingerprint authentication for Android"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"SInfo.setItem('key1', 'value1', {\n  ...\n  touchID: true,\n});\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note"),": Check out the full recipe to protect your data using fingerprint ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/protectingWithFingerprint"}),"here")),Object(c.b)("h2",{id:"ksecaccesscontrol"},"kSecAccessControl"),Object(c.b)("p",null,"When passing in the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"#touchID"}),"touchID")," option as ",Object(c.b)("inlineCode",{parentName:"p"},"true"),", you can also set ",Object(c.b)("inlineCode",{parentName:"p"},"kSecAccessControl"),". For example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"SInfo.setItem('key1', 'value1', {\n  keychainService: 'myKeychain',\n  kSecAccessControl: 'kSecAccessControlTouchIDCurrentSet',\n  sharedPreferencesName: 'mySharedPrefs',\n  touchID: true,\n});\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")," By default ",Object(c.b)("inlineCode",{parentName:"p"},"kSecAccessControl")," will get set to ",Object(c.b)("inlineCode",{parentName:"p"},"kSecAccessControlUserPresence"),"."),Object(c.b)("h2",{id:"ksecattrsynchronizable"},"kSecAttrSynchronizable"),Object(c.b)("p",null,"You can set this to ",Object(c.b)("inlineCode",{parentName:"p"},"true")," in order to sync the keychain items with iCloud."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")," By default ",Object(c.b)("inlineCode",{parentName:"p"},"kSecAttrSynchronizable")," will get set to ",Object(c.b)("inlineCode",{parentName:"p"},"false"),"."),Object(c.b)("h2",{id:"klocalizedfallbacktitle"},"kLocalizedFallbackTitle"),Object(c.b)("p",null,"You can set this to a string and fallback to pin code authentication."),Object(c.b)("h2",{id:"ksecuseoperationprompt"},"kSecUseOperationPrompt"),Object(c.b)("p",null,"When ",Object(c.b)("inlineCode",{parentName:"p"},"touchID")," is ",Object(c.b)("inlineCode",{parentName:"p"},"true")," you must pass ",Object(c.b)("inlineCode",{parentName:"p"},"kSecUseOperationPrompt")," to inform users why are you prompting TouchID or FaceID."),Object(c.b)("h2",{id:"enable-face-id"},"Enable Face ID"),Object(c.b)("p",null,"To enable Face ID, for iOS X and above or iPad Pro, set ",Object(c.b)("inlineCode",{parentName:"p"},"kSecAccessControl")," to ",Object(c.b)("inlineCode",{parentName:"p"},"kSecAccessControlBiometryAny"),". For example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"SInfo.setItem('key1', 'value1', {\n  keychainService: 'myKeychain',\n  kSecAccessControl: 'kSecAccessControlBiometryAny',\n  ...\n});\n")))}p.isMDXComponent=!0}}]);