"use strict";(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[679],{32376:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(9950),l=a(69935),o=a(10226),c=a(67243),r=a.n(c),i=a(77671);const m=e=>{let{data:t,isDisabled:a,hoverMessage:c,feedbackMessage:m,Icon:s=l.A,...u}=e;const{setToasterState:d}=(0,i.dq)();return n.createElement(o.A,Object.assign({disabled:!t||a,title:null!==c&&void 0!==c?c:"Copy to clipboard",variant:"contained","data-testid":"copy-to-clipboard",color:"primary"},u,{onClick:()=>{if(!t)return;const e=null!==m&&void 0!==m?m:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");r()(t,{format:"text/plain"}),d({open:!0,message:e,type:"success",autoHideDuration:2e3})}}),n.createElement(s,null))}},50057:(e,t,a)=>{a.d(t,{n:()=>i});var n=a(9950),l=a(25131),o=a(72772),c=a(73931);const r=(0,l.A)((e=>({root:{margin:e.spacing(1)}}))),i=e=>{let{title:t,iconType:a,children:l}=e;const i=r();return n.createElement(n.Fragment,null,n.createElement(o.m,{titleTemplate:"Web Toolbox - %s",defaultTitle:"Web Toolbox",title:t}),n.createElement("div",{className:i.root},n.createElement(c.A,{iconType:a,title:t}),l))}},73931:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(9950),l=a(82053);const o=(0,a(25131).A)((e=>({title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:e.spacing(1)},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}))),c=e=>{let{title:t,iconType:a}=e;const c=o();return n.createElement("div",{className:c.titleWithIcon},n.createElement(a,{className:c.icon}),n.createElement(l.A,{variant:"h5",className:c.title},t))}},93679:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U,mapDispatchToProps:()=>M,mapStateToProps:()=>W});var n=a(9950),l=a(63835),o=a(37246),c=a(16491),r=a(25979),i=a(10226),m=a(60899),s=a(8145),u=a(81831),d=a(33284),v=a(2144),p=a(16410),E=a(10300),g=a(33602),A=a(50057),f=a(1810),S=a(48089),h=a(50704),b=a(82053),w=a(25713),T=a(58042),N=a(32376),y=a(73649);const I="import { utcToZonedTime } from 'date-fns-tz';\n\n// Obtain a Date instance that will render the\n// equivalent Berlin time for the UTC date\nconst utcValue = '#utc_value#';\nconst date = new Date(utcValue);\nconst timezone = 'Europe/Berlin';\nconst result = utcToZonedTime(date, timezone);",O="import { format } from \"date-fns\";\n\nconst utcValue = '#utc_value#';\nconst date = new Date(utcValue);\nconst format = 'yyyy-MM-dd-HH-mm-ss';\nconst formattedDate = format(date, format);";var D=a(21671),C=a(9213),x=a(39287),k=a(25131);const z=(0,x.A)((e=>({body:{fontSize:e.spacing(1.75),whiteSpace:"normal",wordBreak:"break-word"}})))(D.A),L=(0,x.A)((e=>({root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}})))(C.A),_=(0,k.A)((e=>({panel:{marginTop:e.spacing(3),marginBottom:e.spacing(3)},form:{display:"flex",flexWrap:"wrap",marginTop:e.spacing(3)},formControl:{marginRight:e.spacing(1)},value:{fontFamily:"monospace",marginTop:e.spacing(1),marginLeft:e.spacing(1)},tableHeader:{backgroundColor:e.palette.primary.main},timePickerField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:260},formatted:{width:"100%",overflow:"auto",padding:0,margin:0},card:{marginBottom:e.spacing(1)},otherSubtitle:{marginTop:e.spacing(1)}}))),j=e=>{var t,a,l,o,c;let{date:r,epochString:i}=e;const m=_(),s=(0,y.c)();return n.createElement(n.Fragment,null,n.createElement(S.A,{className:m.card},n.createElement(h.A,null,n.createElement(b.A,{variant:"subtitle1"},"ISO string / JSON"),n.createElement("span",{className:m.value},null===r||void 0===r?void 0:r.toISOString())),n.createElement(w.A,null,n.createElement(N.A,{data:null===r||void 0===r?void 0:r.toISOString()}))),n.createElement(S.A,{className:m.card},n.createElement(h.A,null,n.createElement(b.A,{variant:"subtitle1"},"Locale date string"),n.createElement("div",{className:m.value},null===r||void 0===r?void 0:r.toLocaleDateString()," ",null===r||void 0===r?void 0:r.toLocaleTimeString()),n.createElement(b.A,{variant:"subtitle1",className:m.otherSubtitle},"Timezone offset:"," "),n.createElement("div",{className:m.value},null===r||void 0===r?void 0:r.getTimezoneOffset()," min (",(null!==(t=null===r||void 0===r?void 0:r.getTimezoneOffset())&&void 0!==t?t:0)/60," hrs)")),n.createElement(w.A,null,n.createElement(N.A,{data:(null===r||void 0===r?void 0:r.toLocaleDateString())+" "+(null===r||void 0===r?void 0:r.toLocaleTimeString())}))),n.createElement(S.A,{className:m.card},n.createElement(h.A,null,n.createElement(b.A,{variant:"subtitle1"},"Js code using epoch:"),n.createElement(T.A,{style:s,language:"javascript",className:m.formatted},"const date = new Date(".concat(i,");"))),n.createElement(w.A,null,n.createElement(N.A,{data:"const date = new Date(".concat(i,");")}))),n.createElement(S.A,{className:m.card},n.createElement(h.A,null,n.createElement(b.A,{variant:"subtitle1"},"Js code using ISO 8601:"),n.createElement(T.A,{style:s,language:"javascript",className:m.formatted},"const date = new Date('".concat(null===r||void 0===r?void 0:r.toISOString(),"');"))),n.createElement(w.A,null,n.createElement(N.A,{data:"const date = new Date(".concat(i,");")}))),n.createElement(S.A,{className:m.card},n.createElement(h.A,null,n.createElement(b.A,{variant:"subtitle1"},"date-fns timezone convertion example:"),n.createElement(T.A,{style:s,language:"javascript",className:m.formatted},I.replace("#utc_value#",null!==(a=null===r||void 0===r?void 0:r.toISOString())&&void 0!==a?a:""))),n.createElement(w.A,null,n.createElement(N.A,{data:I.replace("#utc_value#",null!==(l=null===r||void 0===r?void 0:r.toISOString())&&void 0!==l?l:"")}))),n.createElement(S.A,{className:m.card},n.createElement(h.A,null,n.createElement(b.A,{variant:"subtitle1"},"date-fns format example:"),n.createElement(T.A,{style:s,language:"javascript",className:m.formatted},O.replace("#utc_value#",null!==(o=null===r||void 0===r?void 0:r.toISOString())&&void 0!==o?o:""))),n.createElement(w.A,null,n.createElement(N.A,{data:O.replace("#utc_value#",null!==(c=null===r||void 0===r?void 0:r.toISOString())&&void 0!==c?c:"")}))))};var V=a(1320),B=a(2235),J=a(15769),F=a(69780),H=a(34075);const P=e=>{var t,a,l,o,c;let{date:r,epochString:i}=e;const m=_(),s=(0,y.c)(),u=(0,f.Pb)("md");return n.createElement(V.A,{component:B.A,className:m.panel},n.createElement(J.A,{size:u?"medium":"small"},n.createElement(F.A,{className:m.tableHeader},n.createElement(C.A,null,n.createElement(z,null,"Description"),n.createElement(z,null,"Value and js code examples using date-fns library"),n.createElement(z,null))),n.createElement(H.A,null,n.createElement(L,null,n.createElement(z,{component:"th",scope:"row"},"ISO string / JSON"),n.createElement(z,null,n.createElement("span",{className:m.value},null===r||void 0===r?void 0:r.toISOString())),n.createElement(z,null,n.createElement(N.A,{data:null===r||void 0===r?void 0:r.toISOString()}))),n.createElement(L,null,n.createElement(z,{component:"th",scope:"row"},"Locale date string"),n.createElement(z,null,n.createElement("span",{className:m.value},null===r||void 0===r?void 0:r.toLocaleDateString()," ",null===r||void 0===r?void 0:r.toLocaleTimeString())),n.createElement(z,null,n.createElement(N.A,{data:(null===r||void 0===r?void 0:r.toLocaleDateString())+" "+(null===r||void 0===r?void 0:r.toLocaleTimeString())}))),n.createElement(L,null,n.createElement(z,{component:"th",scope:"row"},"Js code using epoch"),n.createElement(z,null,n.createElement("span",{className:m.value},"const dt = new Date(",i,");")),n.createElement(z,null,n.createElement(N.A,{data:"const dt = new Date(".concat(i,");")}))),n.createElement(L,null,n.createElement(z,{component:"th",scope:"row"},"Js code using ISO 8601"),n.createElement(z,null,n.createElement("span",{className:m.value},"const dt = new Date('",null===r||void 0===r?void 0:r.toISOString(),"');")),n.createElement(z,null,n.createElement(N.A,{data:"const dt = new Date(".concat(i,");")}))),n.createElement(L,null,n.createElement(z,{component:"th",scope:"row"},"date-fns timezone convertion example"),n.createElement(z,null,n.createElement(T.A,{style:s,language:"javascript",className:m.formatted},I.replace("#utc_value#",null!==(t=null===r||void 0===r?void 0:r.toISOString())&&void 0!==t?t:""))),n.createElement(z,null,n.createElement(N.A,{data:I.replace("#utc_value#",null!==(a=null===r||void 0===r?void 0:r.toISOString())&&void 0!==a?a:"")}))),n.createElement(L,null,n.createElement(z,{component:"th",scope:"row"},"Timezone offset"),n.createElement(z,null,null===r||void 0===r?void 0:r.getTimezoneOffset()," min (",(null!==(l=null===r||void 0===r?void 0:r.getTimezoneOffset())&&void 0!==l?l:0)/60," hrs)"),n.createElement(z,null)),n.createElement(L,null,n.createElement(z,{component:"th",scope:"row"},"date-fns format example"),n.createElement(z,null,n.createElement(T.A,{style:s,language:"javascript",className:m.formatted},O.replace("#utc_value#",null!==(o=null===r||void 0===r?void 0:r.toISOString())&&void 0!==o?o:""))),n.createElement(z,null,n.createElement(N.A,{data:O.replace("#utc_value#",null!==(c=null===r||void 0===r?void 0:r.toISOString())&&void 0!==c?c:"")}))),n.createElement(L,null,n.createElement(z,{component:"th",scope:"row"},"UTC string"),n.createElement(z,null,null===r||void 0===r?void 0:r.toUTCString()),n.createElement(z,null)))))};function W(e){return{inputText:e.textInputs.lastEpochValue}}function M(e){return{storeInputText:(t,a)=>e((0,g.s)(t,a))}}const U=(0,E.Ng)(W,M)((e=>{let{inputText:t,storeInputText:a}=e;const E=_(),[g,S]=(0,n.useState)(null),h=(0,f.Pb)("md"),b=(0,f.E1)("md"),w=e=>{S(e),e&&a("lastEpochValue","".concat(e.getTime()))};return(0,n.useEffect)((()=>{t&&S(new Date(+t))}),[t]),n.createElement(A.n,{iconType:l.A,title:"Date & Epoch"},n.createElement("form",{className:E.form,noValidate:!0},n.createElement(m.Ay,{container:!0,justifyContent:"space-between"},n.createElement(c.A,{component:"div",alignItems:"center"},n.createElement(r.A,{className:E.formControl},n.createElement(s.A,{autoFocus:h,label:"Epoch value",placeholder:"Epoch value",type:"number",variant:"outlined",value:t,onChange:e=>a("lastEpochValue",e.target.value)})),n.createElement(i.A,{variant:"contained",title:"Update value with 'Now' timestamp",color:"primary",onClick:()=>w(new Date)},n.createElement(o.A,null))),n.createElement(c.A,{component:"div",alignItems:"center"},n.createElement(u.$,{dateAdapter:p.h},n.createElement(r.A,{className:E.formControl},n.createElement(d.l,{label:"Date",value:g,onChange:w})),n.createElement(r.A,{className:E.formControl},n.createElement(v.A,{label:"Time",value:g,onChange:w})))))),b&&n.createElement(j,{date:g,epochString:t}),h&&n.createElement(P,{date:g,epochString:t}))}))},73649:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(32284),l=a(71830),o=a(90038);const c=()=>{const{isDark:e}=(0,o.CX)();return e?n.A:l.A}}}]);