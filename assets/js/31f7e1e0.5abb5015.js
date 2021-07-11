(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(101)),o={id:"Environment-Variables",title:"Export Environment Variables"},l={unversionedId:"Environment-Variables",id:"Environment-Variables",isDocsHomePage:!1,title:"Export Environment Variables",description:"Please consider the environment-variables.md document as the more updated version",source:"@site/docs/Environment-Variables.md",slug:"/Environment-Variables",permalink:"/mentorship-backend/docs/Environment-Variables",editUrl:"https://github.com/anitab-org/mentorship-backend/tree/develop/docs/docs/Environment-Variables.md",version:"current",sidebar:"docs",previous:{title:"Fork, Clone & Remote",permalink:"/mentorship-backend/docs/Fork,-Clone-&-Remote"},next:{title:"Tech Stack",permalink:"/mentorship-backend/docs/Tech-Stack"}},b=[{value:"Environment variables description",id:"environment-variables-description",children:[{value:"Run configuration",id:"run-configuration",children:[]},{value:"Security",id:"security",children:[]},{value:"Email Verification",id:"email-verification",children:[]}]},{value:"Exporting environment variables",id:"exporting-environment-variables",children:[]}],c={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Please consider the ",Object(i.b)("a",{parentName:"strong",href:"https://github.com/anitab-org/mentorship-backend/blob/develop/docs/environment-variables.md"},"environment-variables.md")," document as the more updated version")),Object(i.b)("hr",null),Object(i.b)("p",null,"To run the backend you need to export environment variables."),Object(i.b)("p",null,"These are the needed environment variables:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"export FLASK_ENVIRONMENT_CONFIG=<dev-or-test-or-prod>\nexport SECRET_KEY=<your-secret-key>\nexport SECURITY_PASSWORD_SALT=<your-security-password-salt>\nexport MAIL_DEFAULT_SENDER=<mail-default-sender>\nexport MAIL_SERVER=<mail-server>\nexport APP_MAIL_USERNAME=<app-mail-username>\nexport APP_MAIL_PASSWORD=<app-mail-password>\n")),Object(i.b)("h2",{id:"environment-variables-description"},"Environment variables description"),Object(i.b)("h3",{id:"run-configuration"},"Run configuration"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Environment Variable"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"FLASK_ENVIRONMENT_CONFIG"),Object(i.b)("td",{parentName:"tr",align:null},"Short running environment name so that Flask know which configuration to load. Currently, there are 3 options for this: ",Object(i.b)("inlineCode",{parentName:"td"},"dev"),", ",Object(i.b)("inlineCode",{parentName:"td"},"test")," and ",Object(i.b)("inlineCode",{parentName:"td"},"prod"),'.  To use the development environment configuration you should use "dev" as a value.'),Object(i.b)("td",{parentName:"tr",align:null},"dev")))),Object(i.b)("p",null,"These are the currently available run configurations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"dev:")," Development environment used when developing locally"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"test:")," Testing environment used when running tests"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"prod:")," Production environment used when a server is deployed")),Object(i.b)("h3",{id:"security"},"Security"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Environment Variable"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"SECRET_KEY"),Object(i.b)("td",{parentName:"tr",align:null},"Variable used to encrypt or hash sensitive data.  JWT based authentication uses this variable to calculate the hash of the access token. Its also used to calculate the password hash to avoid saving it in plain text. This is in string format."),Object(i.b)("td",{parentName:"tr",align:null},"'some random key'")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"SECURITY_PASSWORD_SALT"),Object(i.b)("td",{parentName:"tr",align:null},"Variable used for email confirmation token generation. This is in string format."),Object(i.b)("td",{parentName:"tr",align:null},"'some password salt'")))),Object(i.b)("h3",{id:"email-verification"},"Email Verification"),Object(i.b)("p",null,"Email verification is when a user registers into the application and to be able to login, this user has to verify/confirm its email. To do this the user has to go to its emails and click the link from the mail sent by our application email."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Environment Variable"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MAIL_DEFAULT_SENDER"),Object(i.b)("td",{parentName:"tr",align:null},"Email used to send email verification emails. This is in string format."),Object(i.b)("td",{parentName:"tr",align:null},"'",Object(i.b)("a",{parentName:"td",href:"mailto:some_username@gmail.com"},"some_username@gmail.com"),"'")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MAIL_SERVER"),Object(i.b)("td",{parentName:"tr",align:null},"SMTP server address/name used by the email account that sends the verification emails. This is in string format."),Object(i.b)("td",{parentName:"tr",align:null},"'smtp.gmail.com'")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"APP_MAIL_USERNAME"),Object(i.b)("td",{parentName:"tr",align:null},"Username of the email account used to send verification emails. This is in string format."),Object(i.b)("td",{parentName:"tr",align:null},"'some_username'")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"APP_MAIL_PASSWORD"),Object(i.b)("td",{parentName:"tr",align:null},"Password of the email account used to send verification emails. This is in string format."),Object(i.b)("td",{parentName:"tr",align:null},"'some_password'")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the examples we use Gmail account example, but you are not restricted to use a Gmail account to send the verification email. If you use other email providers make sure to research about the correct SMTP server name."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"'")," character may be optional for environment variables without space on them.")),Object(i.b)("h2",{id:"exporting-environment-variables"},"Exporting environment variables"),Object(i.b)("p",null,"Assume that KEY is the name of the variable and VALUE is the actual value of the environment variable.\nTo export an environment variable you have to run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"export KEY=VALUE\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"export FLASK_ENVIRONMENT_CONFIG=dev\n")),Object(i.b)("p",null,"Another way to do this in flask applications is by having a file called ",Object(i.b)("inlineCode",{parentName:"p"},".env")," which will have all of the environment variables. When a flask application runs, it will load these variables from the file."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Content of ",Object(i.b)("inlineCode",{parentName:"li"},".env")," file:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"FLASK_ENVIRONMENT_CONFIG=dev\nSECRET_KEY='some_random_key'\n(...)\n")))}s.isMDXComponent=!0}}]);