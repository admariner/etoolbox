(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[23],{1176:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return T})),n.d(t,"mapDispatchToProps",(function(){return A}));var o=n(13),a=n(0),r=n.n(a),i=n(469),c=n.n(i),s=n(161),l=n.n(s),u=n(340),d=n(349),f=n(334),p=n(410),b=n(327),v=n(139),j=n(141),m=n(1162),h=n(142),O=n(363),w=n(360),x=n(387),g=n(466),y=n(57),S=function(e,t){return t instanceof Object&&!(t instanceof Array)?Object.keys(t).sort().reduce((function(e,n){return e[n]=t[n],e}),{}):t};var k=n(1),R=Object(b.a)((function(e){return{root:{margin:e.spacing(1)},formatted:{borderColor:e.palette.text.disabled,borderStyle:"solid",borderWidth:1,borderRadius:e.shape.borderRadius,maxHeight:"500px",width:"100%",overflow:"auto"},toolbar:{margin:0,padding:0}}}));function T(e){return{inputText:e.textInputs.lastJSONFormatterValue}}function A(e){return{storeInputText:function(t,n){return e(Object(h.b)(t,n))}}}t.default=Object(j.b)(T,A)((function(e){var t="JSON Formatter",n=R(),a=Object(y.e)("md"),i=Object(x.a)(),s=e.inputText,b=e.storeInputText,j=r.a.useState(""),h=Object(o.a)(j,2),T=h[0],A=h[1];r.a.useEffect((function(){A(function(e){if(!e)return"";try{var t=JSON.parse(e);return JSON.stringify(t,S,4)}catch(n){return e}}(s))}),[s]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.a,{title:t}),Object(k.jsxs)("div",{className:n.root,children:[Object(k.jsx)(w.a,{iconType:l.a,title:t}),Object(k.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(k.jsx)("div",{children:Object(k.jsx)(p.a,{autoFocus:a,label:"JSON Content",placeholder:"Paste or type the json content here",multiline:!0,minRows:10,maxRows:a?20:10,variant:"outlined",margin:"normal",fullWidth:!0,value:s,onChange:function(e){return b("lastJSONFormatterValue",e.target.value)}})})}),Object(k.jsxs)(u.a,{className:n.toolbar,children:[Object(k.jsx)(d.a,{display:"flex",flexGrow:1}),Object(k.jsx)(O.a,{data:T,sx:{mr:1}}),Object(k.jsx)(f.a,{endIcon:Object(k.jsx)(c.a,{children:"Save As..."}),disabled:!T,variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),g.a(T)},children:"Save As..."})]}),Object(k.jsx)(m.a,{style:i,language:"json",className:n.formatted,children:T})]})]})}))},360:function(e,t,n){"use strict";n(0);var o=n(96),a=n(327),r=n(1),i=Object(a.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.title,n=e.iconType,a=i();return Object(r.jsx)("div",{className:a.titleContainer,children:Object(r.jsxs)("div",{className:a.titleWithIcon,children:[Object(r.jsx)(n,{className:a.icon}),Object(r.jsx)(o.a,{variant:"h5",className:a.title,children:t})]})})}},363:function(e,t,n){"use strict";var o=n(28),a=n(371),r=(n(0),n(376)),i=n.n(r),c=n(334),s=n(369),l=n.n(s),u=n(140),d=n(1),f=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.a=function(e){var t=e.data,n=e.isDisabled,r=e.hoverMessage,s=e.feedbackMessage,p=e.Icon,b=void 0===p?i.a:p,v=Object(a.a)(e,f),j=Object(u.c)().setToasterState;return Object(d.jsx)(c.a,Object(o.a)(Object(o.a)({},v),{},{onClick:function(){if(t){var e=null!==s&&void 0!==s?s:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");l.a(t,{format:"text/plain"}),j({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!t||n,title:null!==r&&void 0!==r?r:"Copy to clipboard",variant:"contained",color:"primary",children:Object(d.jsx)(b,{})}))}},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(1150),a=n(1151),r=n(125),i=function(){return Object(r.c)().isDark?o.a:a.a}},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(467);function a(e){if(window.require){window.require("electron").ipcRenderer.send("saveJsonAs",e)}else{var t=new Blob([e],{type:"application/json"});Object(o.saveAs)(t,"data.json")}}},467:function(e,t,n){(function(n){var o,a,r;a=[],o=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){s(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,c=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var c=i.URL||i.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?r(s):a(s.href)?o(e,t,n):r(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){r(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(a(e))o(e,n,i);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){r(c)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var r="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&s||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,f=d.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});i.saveAs=s.saveAs=s,e.exports=s},void 0===(r="function"===typeof o?o.apply(t,a):o)||(e.exports=r)}).call(this,n(84))},469:function(e,t,n){"use strict";var o=n(25);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(26)),r=n(1),i=(0,a.default)((0,r.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=i}}]);
//# sourceMappingURL=23.0bde5b95.chunk.js.map