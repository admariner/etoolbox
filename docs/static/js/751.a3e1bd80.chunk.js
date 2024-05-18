(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[751],{32376:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var o=n(9950),a=n(81143),r=n(10226),i=n(67243),s=n.n(i),c=n(77671);const l=e=>{let{data:t,isDisabled:n,hoverMessage:i,feedbackMessage:l,Icon:u=a.A,...d}=e;const{setToasterState:p}=(0,c.dq)();return o.createElement(r.A,Object.assign({disabled:!t||n,title:null!==i&&void 0!==i?i:"Copy to clipboard",variant:"contained","data-testid":"copy-to-clipboard",color:"primary"},d,{onClick:()=>{if(!t)return;const e=null!==l&&void 0!==l?l:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");s()(t,{format:"text/plain"}),p({open:!0,message:e,type:"success",autoHideDuration:2e3})}}),o.createElement(u,null))}},50057:(e,t,n)=>{"use strict";n.d(t,{n:()=>c});var o=n(9950),a=n(25131),r=n(72772),i=n(73931);const s=(0,a.A)((e=>({root:{margin:e.spacing(1)}}))),c=e=>{let{title:t,iconType:n,children:a}=e;const c=s();return o.createElement(o.Fragment,null,o.createElement(r.m,{titleTemplate:"Web Toolbox - %s",defaultTitle:"Web Toolbox",title:t}),o.createElement("div",{className:c.root},o.createElement(i.A,{iconType:n,title:t}),a))}},73931:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var o=n(9950),a=n(82053);const r=(0,n(25131).A)((e=>({title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:e.spacing(1)},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}))),i=e=>{let{title:t,iconType:n}=e;const i=r();return o.createElement("div",{className:i.titleWithIcon},o.createElement(n,{className:i.icon}),o.createElement(a.A,{variant:"h5",className:i.title},t))}},28751:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x,mapDispatchToProps:()=>E,mapStateToProps:()=>A});var o=n(9950),a=n(92098),r=n(90988),i=n(83239),s=n(16491),c=n(10226),l=n(8145),u=n(25131),d=n(10300),p=n(58042),f=n(33602),m=n(32376),v=n(50057),b=n(73649),g=n(62160),w=n(1810);const h=(e,t)=>t instanceof Object&&!(t instanceof Array)?Object.keys(t).sort().reduce(((e,n)=>(e[n]=t[n],e)),{}):t;const y=(0,u.A)((e=>({formatted:{borderColor:e.palette.text.disabled,borderStyle:"solid",borderWidth:1,borderRadius:e.shape.borderRadius,maxHeight:"500px",width:"100%",overflow:"auto"},toolbar:{margin:0,padding:0}})));function A(e){return{inputText:e.textInputs.lastJSONFormatterValue}}function E(e){return{storeInputText:(t,n)=>e((0,f.s)(t,n))}}const x=(0,d.Ng)(A,E)((e=>{let{inputText:t,storeInputText:n}=e;const u=y(),d=(0,w.Pb)("md"),f=(0,b.c)(),[A,E]=o.useState("");o.useEffect((()=>{E(function(e){if(!e)return"";try{const t=JSON.parse(e);return JSON.stringify(t,h,4)}catch(t){return e}}(t))}),[t]);return o.createElement(v.n,{iconType:r.A,title:"JSON Formatter"},o.createElement("form",{noValidate:!0,autoComplete:"off"},o.createElement("div",null,o.createElement(l.A,{autoFocus:d,label:"JSON Content",placeholder:"Paste or type the json content here",multiline:!0,minRows:10,maxRows:d?20:10,variant:"outlined",margin:"normal",fullWidth:!0,value:t,onChange:e=>n("lastJSONFormatterValue",e.target.value)}))),o.createElement(i.A,{className:u.toolbar},o.createElement(s.A,{component:"div",flexGrow:1}),o.createElement(m.A,{data:A,sx:{mr:1}}),o.createElement(c.A,{endIcon:o.createElement(a.A,null,"Save As\u2026"),disabled:!A,variant:"contained",color:"primary",onClick:e=>{e.preventDefault(),g.Q(A)}},"Save As\u2026")),o.createElement(p.A,{style:f,language:"json",className:u.formatted},A))}))},73649:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});var o=n(32284),a=n(71830),r=n(90038);const i=()=>{const{isDark:e}=(0,r.CX)();return e?o.A:a.A}},62160:(e,t,n)=>{"use strict";n.d(t,{Q:()=>a});var o=n(34691);function a(e){if(window.require){window.require("electron").ipcRenderer.send("saveJsonAs",e)}else{const t=new Blob([e],{type:"application/json"});(0,o.saveAs)(t,"data.json")}}},92098:(e,t,n)=>{"use strict";var o=n(24994);t.A=void 0;var a=o(n(79526)),r=n(44414);t.A=(0,a.default)((0,r.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save")},34691:function(e,t,n){var o,a,r;a=[],void 0===(r="function"===typeof(o=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=i.URL||i.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):a(c.href)?o(e,t,n):r(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(a(e))o(e,n,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var r="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&c||s)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,p=d.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});i.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,a):o)||(e.exports=r)}}]);