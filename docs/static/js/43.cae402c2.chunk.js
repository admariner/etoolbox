(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[43],{1163:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return R})),n.d(t,"mapDispatchToProps",(function(){return U}));var a=n(12),o=n(0),r=n.n(o),c=n(594),l=n.n(c),i=n(592),u=n.n(i),d=n(593),s=n.n(d),m=n(331),p=n(341),E=n(401),b=n(326),f=n(319),h=n(132),x=n(134),v=n(135),w=n(355),g=n(352),I=n(404),C=n(51);function T(e,t){return e?t?decodeURIComponent(e):encodeURIComponent(e):""}var y=Object(f.a)((function(e){return{root:{margin:e.spacing(1)},toolbar:{margin:0,padding:0}}}));function R(e){return{inputText:e.textInputs.lastUrlEncoderValue}}function U(e){return{storeInputText:function(t,n){return e(Object(v.b)(t,n))}}}t.default=Object(x.b)(R,U)((function(e){var t="URL Encoder / decoder",n=y(),o=Object(C.e)("md"),c=e.inputText,i=e.storeInputText,d=r.a.useState(T(c,!1)),f=Object(a.a)(d,2),x=f[0],v=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{title:t}),r.a.createElement("div",{className:n.root},r.a.createElement(g.a,{iconType:u.a,title:t}),r.a.createElement(E.a,{autoFocus:o,label:"Content to encode/decode",placeholder:"Paste or type the content here",multiline:!0,minRows:4,maxRows:o?20:4,variant:"outlined",margin:"normal",fullWidth:!0,value:c,onChange:function(e){var t=e.target.value;i("lastUrlEncoderValue",t),t||v("")}}),r.a.createElement(m.a,{className:n.toolbar},r.a.createElement(b.a,{variant:"contained","data-testid":"switch-content-action",component:"span",color:"primary",disabled:!x,onClick:function(){i("lastUrlEncoderValue",x),v("")},title:"Switch data content"},r.a.createElement(s.a,null)),r.a.createElement(p.a,{display:"flex",flexGrow:1}),r.a.createElement(w.a,{data:x,sx:{mr:1}}),r.a.createElement(b.a,{sx:{mr:1},variant:"contained",endIcon:r.a.createElement(l.a,null),title:"Encode the content",color:"primary",disabled:!c,onClick:function(){return v(T(c,!1))}},"Enc."),r.a.createElement(b.a,{variant:"contained",endIcon:r.a.createElement(u.a,null),title:"Decode the content",color:"primary",disabled:!c,onClick:function(){return v(T(c,!0))}},"Dec.")),r.a.createElement(I.a,{testID:"parsed-result",label:"Result",result:x})))}))}}]);
//# sourceMappingURL=43.cae402c2.chunk.js.map