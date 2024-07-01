"use strict";(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[279],{50057:(e,t,r)=>{r.d(t,{n:()=>s});var a=r(9950),o=r(25131),n=r(72772),l=r(73931);const i=(0,o.A)((e=>({root:{margin:e.spacing(1)}}))),s=e=>{let{title:t,iconType:r,children:o}=e;const s=i();return a.createElement(a.Fragment,null,a.createElement(n.m,{titleTemplate:"Web Toolbox - %s",defaultTitle:"Web Toolbox",title:t}),a.createElement("div",{className:s.root},a.createElement(l.A,{iconType:r,title:t}),o))}},73931:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(9950),o=r(82053);const n=(0,r(25131).A)((e=>({title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:e.spacing(1)},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}))),l=e=>{let{title:t,iconType:r}=e;const l=n();return a.createElement("div",{className:l.titleWithIcon},a.createElement(r,{className:l.icon}),a.createElement(o.A,{variant:"h5",className:l.title},t))}},65279:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T,mapDispatchToProps:()=>E,mapStateToProps:()=>y});var a=r(9950),o=r(58531),n=r(2235),l=r(15769),i=r(34075),s=r(1320),c=r(69780),d=r(9213),u=r(8145),m=r(10300),p=r(33602),h=r(50057),A=r(1810);var f=r(21671),v=r(39287),b=r(25131);const g=(0,v.A)((e=>({body:{fontSize:e.spacing(1.75),whiteSpace:"normal",wordBreak:"break-word"}})))(f.A),x=(0,v.A)((e=>({root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}})))(d.A),w=(0,b.A)((e=>({panel:{marginBottom:e.spacing(3)},tableHeader:{backgroundColor:e.palette.primary.main}})));function y(e){return{inputText:e.textInputs.lastUrlParserValue}}function E(e){return{storeInputText:(t,r)=>e((0,p.s)(t,r))}}const T=(0,m.Ng)(y,E)((e=>{let{inputText:t,storeInputText:r}=e;const m=w(),p=(0,A.Pb)("md"),[f,v]=a.useState(new Map),[b,y]=a.useState(new Map);return a.useEffect((()=>{v(function(e){const t=new Map;if(!e)return t;try{const r=new URL(e);t.set("host",r.host),t.set("protocol",r.protocol),t.set("hash",r.hash),t.set("origin",r.origin),t.set("pathname",r.pathname),t.set("port",r.port?r.port:"<default>"),t.set("search",r.search)}catch(r){}return t}(t)),y(function(e){const t=new Map;if(!e)return t;try{new URL(e).searchParams.forEach(((e,r)=>t.set(r,e)))}catch(r){}return t}(t))}),[t]),a.createElement(h.n,{iconType:o.A,title:"URL Parser"},a.createElement(u.A,{autoFocus:p,label:"URL",placeholder:"Paste or type the url here",multiline:!0,minRows:4,maxRows:p?20:4,variant:"outlined",margin:"normal",fullWidth:!0,value:t,className:m.panel,onChange:e=>r("lastUrlParserValue",e.target.value)}),t&&a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},"Click the link to open the URL in a new tab"))),a.createElement(s.A,{component:n.A,className:m.panel},a.createElement(l.A,{size:p?"medium":"small"},a.createElement(c.A,{className:m.tableHeader},a.createElement(d.A,null,a.createElement(g,null,"Fragment"),a.createElement(g,null,"Value"))),a.createElement(i.A,null,[...f.keys()].sort().map((e=>a.createElement(x,{key:e},a.createElement(g,{component:"th",scope:"row"},e),a.createElement(g,null,f.get(e)))))))),a.createElement(s.A,{component:n.A},a.createElement(l.A,{size:p?"medium":"small"},a.createElement(c.A,{className:m.tableHeader},a.createElement(d.A,null,a.createElement(g,null,"Parameter"),a.createElement(g,null,"Value"))),a.createElement(i.A,null,[...b.keys()].sort().map((e=>a.createElement(x,{key:e},a.createElement(g,{component:"th",scope:"row"},e),a.createElement(g,null,b.get(e)))))))))}))},58531:(e,t,r)=>{var a=r(24994);t.A=void 0;var o=a(r(79526)),n=r(44414);t.A=(0,o.default)((0,n.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}),"Link")},24516:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(98587),o=r(58168),n=r(9950),l=r(72004),i=r(74061),s=r(68624),c=r(39766),d=r(59254),u=r(61676),m=r(80863),p=r(68483);function h(e){return(0,p.Ay)("MuiFormHelperText",e)}const A=(0,m.A)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var f,v=r(48283),b=r(44414);const g=["children","className","component","disabled","error","filled","focused","margin","required","variant"],x=(0,d.Ay)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.size&&t["size".concat((0,u.A)(r.size))],r.contained&&t.contained,r.filled&&t.filled]}})((e=>{let{theme:t,ownerState:r}=e;return(0,o.A)({color:(t.vars||t).palette.text.secondary},t.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,["&.".concat(A.disabled)]:{color:(t.vars||t).palette.text.disabled},["&.".concat(A.error)]:{color:(t.vars||t).palette.error.main}},"small"===r.size&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})})),w=n.forwardRef((function(e,t){const r=(0,v.A)({props:e,name:"MuiFormHelperText"}),{children:n,className:d,component:m="p"}=r,p=(0,a.A)(r,g),A=(0,c.A)(),w=(0,s.A)({props:r,muiFormControl:A,states:["variant","size","disabled","error","filled","focused","required"]}),y=(0,o.A)({},r,{component:m,contained:"filled"===w.variant||"outlined"===w.variant,variant:w.variant,size:w.size,disabled:w.disabled,error:w.error,filled:w.filled,focused:w.focused,required:w.required}),E=(e=>{const{classes:t,contained:r,size:a,disabled:o,error:n,filled:l,focused:s,required:c}=e,d={root:["root",o&&"disabled",n&&"error",a&&"size".concat((0,u.A)(a)),r&&"contained",s&&"focused",l&&"filled",c&&"required"]};return(0,i.A)(d,h,t)})(y);return(0,b.jsx)(x,(0,o.A)({as:m,ownerState:y,className:(0,l.A)(E.root,d),ref:t},p,{children:" "===n?f||(f=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):n}))}))},69780:(e,t,r)=>{r.d(t,{A:()=>g});var a=r(58168),o=r(98587),n=r(9950),l=r(72004),i=r(74061),s=r(89330),c=r(48283),d=r(59254),u=r(80863),m=r(68483);function p(e){return(0,m.Ay)("MuiTableHead",e)}(0,u.A)("MuiTableHead",["root"]);var h=r(44414);const A=["className","component"],f=(0,d.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),v={variant:"head"},b="thead",g=n.forwardRef((function(e,t){const r=(0,c.A)({props:e,name:"MuiTableHead"}),{className:n,component:d=b}=r,u=(0,o.A)(r,A),m=(0,a.A)({},r,{component:d}),g=(e=>{const{classes:t}=e;return(0,i.A)({root:["root"]},p,t)})(m);return(0,h.jsx)(s.A.Provider,{value:v,children:(0,h.jsx)(f,(0,a.A)({as:d,className:(0,l.A)(g.root,n),ref:t,role:d===b?null:"rowgroup",ownerState:m},u))})}))},8145:(e,t,r)=>{r.d(t,{A:()=>R});var a=r(58168),o=r(98587),n=r(9950),l=r(72004),i=r(74061),s=r(28767),c=r(59254),d=r(48283),u=r(19890),m=r(78089),p=r(3198),h=r(3788),A=r(25979),f=r(24516),v=r(10024),b=r(80863),g=r(68483);function x(e){return(0,g.Ay)("MuiTextField",e)}(0,b.A)("MuiTextField",["root"]);var w=r(44414);const y=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],E={standard:u.A,filled:m.A,outlined:p.A},T=(0,c.Ay)(A.A,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),R=n.forwardRef((function(e,t){const r=(0,d.A)({props:e,name:"MuiTextField"}),{autoComplete:n,autoFocus:c=!1,children:u,className:m,color:p="primary",defaultValue:A,disabled:b=!1,error:g=!1,FormHelperTextProps:R,fullWidth:F=!1,helperText:P,id:k,InputLabelProps:M,inputProps:N,InputProps:H,inputRef:z,label:C,maxRows:S,minRows:j,multiline:q=!1,name:I,onBlur:L,onChange:W,onFocus:V,placeholder:B,required:U=!1,rows:_,select:D=!1,SelectProps:G,type:J,value:K,variant:O="outlined"}=r,Q=(0,o.A)(r,y),X=(0,a.A)({},r,{autoFocus:c,color:p,disabled:b,error:g,fullWidth:F,multiline:q,required:U,select:D,variant:O}),Y=(e=>{const{classes:t}=e;return(0,i.A)({root:["root"]},x,t)})(X);const Z={};"outlined"===O&&(M&&"undefined"!==typeof M.shrink&&(Z.notched=M.shrink),Z.label=C),D&&(G&&G.native||(Z.id=void 0),Z["aria-describedby"]=void 0);const $=(0,s.A)(k),ee=P&&$?"".concat($,"-helper-text"):void 0,te=C&&$?"".concat($,"-label"):void 0,re=E[O],ae=(0,w.jsx)(re,(0,a.A)({"aria-describedby":ee,autoComplete:n,autoFocus:c,defaultValue:A,fullWidth:F,multiline:q,name:I,rows:_,maxRows:S,minRows:j,type:J,value:K,id:$,inputRef:z,onBlur:L,onChange:W,onFocus:V,placeholder:B,inputProps:N},Z,H));return(0,w.jsxs)(T,(0,a.A)({className:(0,l.A)(Y.root,m),disabled:b,error:g,fullWidth:F,ref:t,required:U,color:p,variant:O,ownerState:X},Q,{children:[null!=C&&""!==C&&(0,w.jsx)(h.A,(0,a.A)({htmlFor:$,id:te},M,{children:C})),D?(0,w.jsx)(v.A,(0,a.A)({"aria-describedby":ee,id:$,labelId:te,value:K,input:ae},G,{children:u})):ae,P&&(0,w.jsx)(f.A,(0,a.A)({id:ee},R,{children:P}))]}))}))}}]);