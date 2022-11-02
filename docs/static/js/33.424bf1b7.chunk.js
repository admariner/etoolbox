(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[33],{1173:function(e,t,n){"use strict";n.r(t);var a=n(28),c=n(23),i=n(13),r=n(0),s=n(1005),o=n.n(s),l=n(460),d=n(96),j=n(349),b=n(461),u=n(410),O=n(340),f=n(450),h=n(524),m=n(1120),x=n(139),p=n(363),g=n(360),v=n(477),y=25e4;var w=n(327),z={marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px blue"},k=Object(w.a)((function(e){return{root:{margin:e.spacing(1),flexGrow:1},header:{padding:"20px 0"},dropzone:{flex:"1",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},image:{width:"100%"},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}}}})),C=n(1);t.default=function(){var e="Base64 file encoder",t=k(),n=Object(r.useState)([]),s=Object(i.a)(n,2),w=s[0],N=s[1],I=Object(r.useState)([]),D=Object(i.a)(I,2),F=D[0],W=D[1],E=Object(r.useCallback)((function(e,t){W(t.map((function(e){return{name:e.file.name,size:e.file.size,error:"Exceeds size limit: ".concat(Object(f.a)(y))}}))),N([]),e.forEach((function(e){return function(e){return new Promise((function(t,n){var c=new FileReader,i={name:e.name,size:e.size};c.addEventListener("abort",(function(e){return n("File upload aborted: ".concat(e))})),c.addEventListener("error",(function(e){return n("File upload error: ".concat(e))})),c.addEventListener("load",(function(){return t(Object(a.a)(Object(a.a)({},i),{},{encoded:c.result}))}),!1),c.readAsDataURL(e)}))}(e).then((function(e){return N((function(t){return[].concat(Object(c.a)(t),[e])}))})).catch((function(t){return W((function(n){return[].concat(Object(c.a)(n),[{name:e.name,size:e.size,error:t}])}))}))}))}),[]),L=Object(m.a)({maxSize:y,multiple:!0,onDrop:E}),P=L.acceptedFiles,R=L.getRootProps,S=L.getInputProps,B=P.length!==w.length;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(x.a,{title:e}),Object(C.jsxs)("div",{className:t.root,children:[Object(C.jsx)(g.a,{iconType:o.a,title:e}),Object(C.jsx)(v.a,{active:B,children:Object(C.jsxs)(l.a,Object(a.a)(Object(a.a)({},R({className:t.dropzone})),{},{children:[Object(C.jsx)("input",Object(a.a)({},S())),Object(C.jsx)(d.a,{variant:"body1",children:"Drag 'n' drop some files here"}),Object(C.jsx)(d.a,{variant:"body1",children:"or just click to select files"})]}))}),Object(C.jsx)("div",{children:F&&F.map((function(e,t){var n=Object(f.a)(e.size);return Object(C.jsx)("div",{children:Object(C.jsxs)(d.a,{variant:"body1",children:[Object(C.jsx)("strong",{children:e.name})," (",n," bytes): ",e.error]})},t)}))}),Object(C.jsx)("div",{children:B&&Object(C.jsxs)(d.a,{color:"secondary",variant:"h5",children:["Processing ",P.length-w.length," file(s)"]})}),w.map((function(e,n){return Object(C.jsx)("div",{children:Object(C.jsxs)(l.a,{children:[e.encoded.startsWith("data:image/")&&Object(C.jsx)(j.a,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(C.jsx)(h.a,{style:z,defaultSize:{width:300,height:"100%"},children:Object(C.jsx)("img",{src:e.encoded,alt:e.name,className:t.image})})}),Object(C.jsxs)(b.a,{children:[Object(C.jsxs)(d.a,{gutterBottom:!0,align:"center",variant:"h5",component:"h2",children:[Object(C.jsx)("b",{children:e.name})," (",Object(f.a)(e.size),")"]}),e.encoded.startsWith("data:image/")&&Object(C.jsx)(u.a,{label:"Full img tag",fullWidth:!0,value:'<img alt="'.concat(e.name,'" src="').concat(e.encoded,'"/>'),margin:"normal",variant:"outlined"}),Object(C.jsx)(u.a,{label:"Base64 encoded. Copy-paste into 'src' attribute",fullWidth:!0,value:e.encoded,margin:"normal",variant:"outlined",multiline:!0,minRows:"8"}),Object(C.jsxs)(O.a,{className:t.toolbar,children:[Object(C.jsx)(j.a,{display:"flex",flexGrow:1}),Object(C.jsx)(p.a,{data:e.encoded})]})]})]})},n)}))]})]})}},360:function(e,t,n){"use strict";n(0);var a=n(96),c=n(327),i=n(1),r=Object(c.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.title,n=e.iconType,c=r();return Object(i.jsx)("div",{className:c.titleContainer,children:Object(i.jsxs)("div",{className:c.titleWithIcon,children:[Object(i.jsx)(n,{className:c.icon}),Object(i.jsx)(a.a,{variant:"h5",className:c.title,children:t})]})})}},363:function(e,t,n){"use strict";var a=n(28),c=n(371),i=(n(0),n(376)),r=n.n(i),s=n(334),o=n(369),l=n.n(o),d=n(140),j=n(1),b=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.a=function(e){var t=e.data,n=e.isDisabled,i=e.hoverMessage,o=e.feedbackMessage,u=e.Icon,O=void 0===u?r.a:u,f=Object(c.a)(e,b),h=Object(d.c)().setToasterState;return Object(j.jsx)(s.a,Object(a.a)(Object(a.a)({},f),{},{onClick:function(){if(t){var e=null!==o&&void 0!==o?o:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");l.a(t,{format:"text/plain"}),h({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!t||n,title:null!==i&&void 0!==i?i:"Copy to clipboard",variant:"contained",color:"primary",children:Object(j.jsx)(O,{})}))}},477:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(0);var a=n(327),c=n(154),i=n.n(c),r=n(155),s=n.n(r),o=n(1),l=Object(a.a)((function(){return{root:{"& .spinner_overlay":{background:"rgba(0, 0, 0, 0.3)"}}}})),d=function(e){var t=l();return Object(o.jsx)(i.a,{classNamePrefix:"spinner_",className:t.root,active:e.active,spinner:Object(o.jsx)(s.a,{color:"#bf3a2b"}),children:e.children})}}}]);
//# sourceMappingURL=33.424bf1b7.chunk.js.map