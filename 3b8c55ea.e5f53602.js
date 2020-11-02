(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{117:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return j}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=b(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(t),u=a,j=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return t?i.a.createElement(j,o(o({ref:n},s),{},{components:t})):i.a.createElement(j,o({ref:n},s))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<r;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(2),i=t(6),r=(t(0),t(117)),c={id:"installation",title:"Installation",sidebar_label:"Installation"},o={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"First of all, install it using npm or yarn",source:"@site/docs/installation.md",slug:"/installation",permalink:"/react-native-sensitive-info/docs/next/installation",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/website/docs/installation.md",version:"current",lastUpdatedBy:"Bartosz Sosnowski",lastUpdatedAt:1604345276,sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/react-native-sensitive-info/docs/next/"},next:{title:"Security",permalink:"/react-native-sensitive-info/docs/next/security"}},l=[{value:"Master branch (using Keychain and Android Shared Preferences)",id:"master-branch-using-keychain-and-android-shared-preferences",children:[]},{value:"Keystore branch (using Keychain and Keystore)",id:"keystore-branch-using-keychain-and-keystore",children:[]},{value:"Next (v6.0.0)",id:"next-v600",children:[]},{value:"Linking",id:"linking",children:[{value:"React-Native &gt;= 0.60",id:"react-native--060",children:[]},{value:"React-Native &lt; 0.60",id:"react-native--060-1",children:[]}]}],s={rightToc:l};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"First of all, install it using ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(r.b)("inlineCode",{parentName:"p"},"yarn")),Object(r.b)("h3",{id:"master-branch-using-keychain-and-android-shared-preferences"},"Master branch (using Keychain and Android Shared Preferences)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save react-native-sensitive-info\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-sensitive-info\n")),Object(r.b)("h3",{id:"keystore-branch-using-keychain-and-keystore"},"Keystore branch (using Keychain and Keystore)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save git://github.com/mCodex/react-native-sensitive-info#keystore\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add git://github.com/mCodex/react-native-sensitive-info#keystore\n")),Object(r.b)("h3",{id:"next-v600"},"Next (v6.0.0)"),Object(r.b)("p",null,"This version includes keystore usage by default. Also, includes many fixes and improvements which were outdated in keystore's branch due to lack of maintenance and only available in master's branch. You can read more ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mCodex/react-native-sensitive-info/releases/tag/v6.0.0"}),"here"),". "),Object(r.b)("p",null,"You can install by running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save react-native-sensitive-info@next\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-sensitive-info@next\n")),Object(r.b)("h2",{id:"linking"},"Linking"),Object(r.b)("h3",{id:"react-native--060"},"React-Native >= 0.60"),Object(r.b)("h4",{id:"ios"},"iOS"),Object(r.b)("p",null,"Should be automatically linked when you run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pod install\n")),Object(r.b)("p",null,"Then:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn ios\n")),Object(r.b)("h4",{id:"android"},"Android"),Object(r.b)("p",null,"Should be automatically linked when you run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn android\n")),Object(r.b)("h4",{id:"windows-with-react-native-windows--063"},"Windows with react-native-windows >= 0.63"),Object(r.b)("p",null,"The C++ module should be automatically linked when you run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn windows\n")),Object(r.b)("h3",{id:"react-native--060-1"},"React-Native < 0.60"),Object(r.b)("h4",{id:"ios-1"},"iOS"),Object(r.b)("h5",{id:"using-cocoapods"},"Using cocoapods"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-pod"}),"pod 'react-native-sensitive-info', path: \"../node_modules/react-native-sensitive-info\"\n")),Object(r.b)("h5",{id:"not-using-cocoapods"},"Not using cocoapods?"),Object(r.b)("p",null,"Go to your XCode, in the project navigator:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Right click Libraries"),Object(r.b)("li",{parentName:"ul"},"Add Files to ","[your project's name]"),Object(r.b)("li",{parentName:"ul"},"Go to ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules/react-native-sensitive-info")),Object(r.b)("li",{parentName:"ul"},"Add the .xcodeproj file")),Object(r.b)("p",null,"In XCode, in the project navigator, select your project."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add the libRNSensitiveInfo.a from the RNSensitiveInfo project to your project's Build Phases \u279c Link Binary With Libraries"),Object(r.b)("li",{parentName:"ul"},"Click .xcodeproj file you added before in the project navigator and go the Build Settings tab. Make sure ",Object(r.b)("inlineCode",{parentName:"li"},"All")," is toggled on (instead of 'Basic')."),Object(r.b)("li",{parentName:"ul"},"Look for Header Search Paths and make sure it contains both ",Object(r.b)("inlineCode",{parentName:"li"},"$(SRCROOT)/../react-native/React")," and ",Object(r.b)("inlineCode",{parentName:"li"},"$(SRCROOT)/../../React")," - mark both as recursive. (Should be OK by default.)")),Object(r.b)("h4",{id:"macos"},"MacOS"),Object(r.b)("p",null,"Same steps as iOS but change the Base SDK to macOS in ",Object(r.b)("strong",{parentName:"p"},"Libraries/RNSensitiveInfo.xcodeproj"),"."),Object(r.b)("h4",{id:"android-1"},"Android"),Object(r.b)("p",null,"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"settings.gradle")," inside your android project folder and paste this lines there:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"include ':react-native-sensitive-info'\n\nproject(':react-native-sensitive-info').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-sensitive-info/android')\n")),Object(r.b)("p",null,"and paste it into build.gradle:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"compile project(':react-native-sensitive-info')\n")),Object(r.b)("p",null,"In your ",Object(r.b)("inlineCode",{parentName:"p"},"MainApplication.java")," add:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"import br.com.classapp.RNSensitiveInfo.RNSensitiveInfoPackage; //<- You must import this\n\nprotected List<ReactPackage> getPackages() {\n    return Arrays.<ReactPackage>asList(\n        new MainReactPackage(),\n        new RNSensitiveInfoPackage(), // <- Add this line\n    );\n}\n")),Object(r.b)("h4",{id:"windows-using-c-on-rnw--062"},"Windows using C++ on RNW >= 0.62"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"npm install react-native-sensitive-info --save")),Object(r.b)("li",{parentName:"ul"},"Open your solution in Visual Studio 2019 (eg. ",Object(r.b)("inlineCode",{parentName:"li"},"windows\\yourapp.sln"),")"),Object(r.b)("li",{parentName:"ul"},"Right-click Solution icon in Solution Explorer > Add > Existing Project..."),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules\\react-native-sensitive-info\\windows\\RNSensitiveInfoCPP\\RNSensitiveInfoCPP.vcxproj")),Object(r.b)("li",{parentName:"ul"},"Right-click main application project > Add > Reference..."),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"RNSensitiveInfoCPP")," in Solution Projects"),Object(r.b)("li",{parentName:"ul"},"In app ",Object(r.b)("inlineCode",{parentName:"li"},"pch.h")," add ",Object(r.b)("inlineCode",{parentName:"li"},'#include "winrt/RNSensitiveInfoCPP.h"')),Object(r.b)("li",{parentName:"ul"},"In ",Object(r.b)("inlineCode",{parentName:"li"},"App.cpp")," add ",Object(r.b)("inlineCode",{parentName:"li"},"PackageProviders().Append(winrt::RNSensitiveInfoCPP::ReactPackageProvider());")," before ",Object(r.b)("inlineCode",{parentName:"li"},"InitializeComponent();"))),Object(r.b)("h4",{id:"windows-using-c-on-rnw-061"},"Windows using C++ on RNW 0.61"),Object(r.b)("p",null,"Do the same steps as for 0.62, but use ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules\\RNSensitiveInfoCPP\\windows\\RNSensitiveInfoCPP61\\RNSensitiveInfoCPP.vcxproj")," in the 4th step."),Object(r.b)("h5",{id:"windows-c-module"},"Windows C# Module"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the solution in Visual Studio for your Windows apps.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Right click your in the Explorer and click Add > Existing Project....")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Navigate to ",Object(r.b)("inlineCode",{parentName:"p"},"./node_modules/react-native-sensitive-info/windows/RNSensitiveInfo/RNSensitiveInfo/")," and add RNSensitiveInfo.csproj.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Right click on your React Native Windows app under your solutions directory and click ",Object(r.b)("inlineCode",{parentName:"p"},"Add > Reference"),"....")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Check the RNSensitiveInfo you just added and press Ok")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open MainPage.cs in your app"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c#"}),"using RNSqlite2;\n\nget\n  {\n      return new List<IReactPackage>\n      {\n          new MainReactPackage(),\n          new RNSensitiveInfoPackage(),\n      };\n  }\n")))}b.isMDXComponent=!0}}]);