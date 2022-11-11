"use strict";(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[261],{84121:function(e,t,n){var a=n(45987),r=n(47313),i=n(94622),l=n(73477),o=n(92229),c=n.n(o),s=n(13729),u=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.Z=function(e){var t=e.data,n=e.isDisabled,o=e.hoverMessage,m=e.feedbackMessage,d=e.Icon,g=void 0===d?i.Z:d,f=(0,a.Z)(e,u),p=(0,s.IR)().setToasterState;return r.createElement(l.Z,Object.assign({disabled:!t||n,title:null!==o&&void 0!==o?o:"Copy to clipboard",variant:"contained","data-testid":"copy-to-clipboard",color:"primary"},f,{onClick:function(){if(t){var e=null!==m&&void 0!==m?m:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");c()(t,{format:"text/plain"}),p({open:!0,message:e,type:"success",autoHideDuration:2e3})}}}),r.createElement(g,null))}},87591:function(e,t,n){var a=n(47313),r=n(42669),i=(0,n(48070).Z)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:e.spacing(1)},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.Z=function(e){var t=e.title,n=e.iconType,l=i();return a.createElement("div",{className:l.titleWithIcon},a.createElement(n,{className:l.icon}),a.createElement(r.Z,{variant:"h5",className:l.title},t))}},13470:function(e,t,n){n.d(t,{$:function(){return s}});var a=n(47313),r=n(48070),i=n(92145),l=n(8334),o=n.n(l),c=(0,r.Z)((function(){return{root:{"& .spinner_overlay":{background:"rgba(0, 0, 0, 0.3)"}}}})),s=function(e){var t=e.active,n=e.children,r=c();return a.createElement(i.Z,{classNamePrefix:"spinner_",className:r.root,active:t,spinner:a.createElement(o(),{color:"#bf3a2b"})},n)}},35261:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(29439),r=n(40918),i=n(47313),l=n(51997),o=n(92029),c=n(32803),s=n(10383),u=n(67881),m=n(81962),d=n(92484),g=n(16157),f=n(42669),p=n(82821),v=n(28566),E=n(70800),Z=n(73477),b=n(30161),h=n(90182),y=n(84121),x=n(87591),w=n(13470),C=n(13729),k=n(63063),I={workerId:"",jobId:"",status:"",progress:0},N=n(74165),R=n(15861),D=n(8361);function S(){return(S=(0,R.Z)((0,N.Z)().mark((function e(t,n,a,r){var i,l;return(0,N.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,D.createWorker)({logger:a}),e.next=3,i.load();case 3:return e.next=5,i.loadLanguage(t);case 5:return e.next=7,i.initialize(t);case 7:return e.next=9,i.recognize(n);case 9:return l=e.sent,r(l.data.text),e.next=13,i.terminate();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=n(48070),F={marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px blue"},T=(0,W.Z)((function(e){return{root:{margin:e.spacing(1)},form:{marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120},image:{width:"100%"},imageSelector:{margin:e.spacing(2),textAlign:"center"},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},formatted:{padding:e.spacing(1),border:"1px solid grey",wordWrap:"break-word",height:116}}})),j=function(){var e="Image OCR (text extraction)",t=T(),n=(0,k.NR)("md"),N=(0,C.IR)().setToasterState,R=i.useState("eng"),D=(0,a.Z)(R,2),W=D[0],j=D[1],L=i.useState(I),A=(0,a.Z)(L,2),M=A[0],P=A[1],_=i.useState(""),z=(0,a.Z)(_,2),B=z[0],H=z[1],O=i.useState(""),U=(0,a.Z)(O,2),$=U[0],q=U[1];function G(e){P(e),q("Processing the image\n\t \u2192 ".concat(e.status,"\u2026"))}function V(e){!function(e,t){if(e)for(var n=0;n<e.length;n++){var a=e[n];if(a.type.startsWith("image")){var r=new FileReader;r.onload=t,r.readAsDataURL(a.getAsFile());break}}}((e.clipboardData||e.originalEvent.clipboardData||e.originalEvent.clipboard).items,(function(e){var t;return H(null===(t=e.target)||void 0===t?void 0:t.result)}))}return i.useEffect((function(){return document.onpaste=V,function(){return document.removeEventListener("onpaste",V)}}),[]),i.createElement(i.Fragment,null,i.createElement(h.q,{title:e}),i.createElement("div",{className:t.root},i.createElement(x.Z,{iconType:c.Z,title:e}),i.createElement("form",{noValidate:!0,autoComplete:"off",className:t.form},i.createElement(s.Z,{className:t.formControl},i.createElement(u.Z,{select:!0,label:"Image language",id:"language",style:{width:160},value:W,autoFocus:n,onChange:function(e){return j(e.target.value)}},i.createElement(m.Z,{value:"eng"},"English"),i.createElement(m.Z,{value:"fra"},"French")))),i.createElement(d.Z,null,i.createElement(g.Z,{display:"flex",alignItems:"center",justifyContent:"center",className:t.imageSelector},!B&&i.createElement("div",null,i.createElement(f.Z,null,"paste image from clipboard"),i.createElement(f.Z,null,"or select a file"),i.createElement("input",{type:"file",color:"primary",accept:"image/*",onChange:function(e){var t;return function(e){if(e){var t=new FileReader;t.onload=function(e){var t;return H(null===(t=e.target)||void 0===t?void 0:t.result)},t.readAsDataURL(e)}}(null===(t=e.target.files)||void 0===t?void 0:t[0])},id:"files-selector-action",style:{display:"none"}}),i.createElement("label",{htmlFor:"files-selector-action"},i.createElement(Z.Z,{variant:"contained",component:"span",color:"primary"},i.createElement(o.Z,null)))),B&&i.createElement(b.e,{style:F,defaultSize:{width:300,height:"100%"}},i.createElement("img",{src:B,alt:"Clipboard content",className:t.image}))),B&&i.createElement(g.Z,{display:"flex",alignItems:"center",justifyContent:"center"},i.createElement(Z.Z,{endIcon:i.createElement(l.Z,null),variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),P(I),H(""),q("")}},"Clear")),i.createElement(p.Z,null,i.createElement(w.$,{active:$.startsWith("Processing")},i.createElement(u.Z,{label:"Extracted text",fullWidth:!0,value:$,margin:"normal",variant:"outlined",multiline:!0,minRows:"8"})),i.createElement(v.Z,{variant:"determinate",value:100*M.progress}),i.createElement(E.Z,{className:t.toolbar},i.createElement(g.Z,{display:"flex",flexGrow:1}),i.createElement(y.Z,{data:$,sx:{mr:1}}),i.createElement(Z.Z,{variant:"contained",title:"Run optical caracters recognition process to extract text",color:"primary",onClick:function(e){if(e.preventDefault(),B){q("Processing the image, please wait\u2026");var t=r.Buffer.from(B.split(",")[1],"base64");(function(e,t,n,a){return S.apply(this,arguments)})(W,t,G,q).then()}else N({open:!0,message:"There is no image to process",type:"error",autoHideDuration:2e3})},disabled:!B,endIcon:i.createElement(c.Z,null)},"Run"))))))}}}]);