(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[43],{1182:function(t,e,n){"use strict";n.r(e),n.d(e,"mapStateToProps",(function(){return U})),n.d(e,"mapDispatchToProps",(function(){return k}));var o=n(13),a=n(0),c=n.n(a),r=n(607),i=n.n(r),l=n(605),s=n.n(l),u=n(606),d=n.n(u),b=n(340),j=n(349),p=n(334),x=n(410),m=n(327),O=n(139),h=n(141),f=n(142),v=n(363),g=n(360),w=n(413),C=n(57);function T(t,e){return t?e?decodeURIComponent(t):encodeURIComponent(t):""}var y=n(1),R=Object(m.a)((function(t){return{root:{margin:t.spacing(1)},toolbar:{margin:0,padding:0}}}));function U(t){return{inputText:t.textInputs.lastUrlEncoderValue}}function k(t){return{storeInputText:function(e,n){return t(Object(f.b)(e,n))}}}e.default=Object(h.b)(U,k)((function(t){var e="URL Encoder / decoder",n=R(),a=Object(C.e)("md"),r=t.inputText,l=t.storeInputText,u=c.a.useState(T(r,!1)),m=Object(o.a)(u,2),h=m[0],f=m[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(O.a,{title:e}),Object(y.jsxs)("div",{className:n.root,children:[Object(y.jsx)(g.a,{iconType:s.a,title:e}),Object(y.jsx)(x.a,{autoFocus:a,label:"Content to encode/decode",placeholder:"Paste or type the content here",multiline:!0,minRows:4,maxRows:a?20:4,variant:"outlined",margin:"normal",fullWidth:!0,value:r,onChange:function(t){return l("lastUrlEncoderValue",t.target.value)}}),Object(y.jsxs)(b.a,{className:n.toolbar,children:[Object(y.jsx)(p.a,{variant:"contained",component:"span",color:"primary",disabled:!h,onClick:function(){l("lastUrlEncoderValue",h),f("")},title:"Switch data content",children:Object(y.jsx)(d.a,{})}),Object(y.jsx)(j.a,{display:"flex",flexGrow:1}),Object(y.jsx)(v.a,{data:h,sx:{mr:1}}),Object(y.jsx)(p.a,{sx:{mr:1},variant:"contained",title:"Encode the content",color:"primary",disabled:!r,onClick:function(){return f(T(r,!1))},children:Object(y.jsx)(i.a,{})}),Object(y.jsx)(p.a,{variant:"contained",title:"Decode the content",color:"primary",disabled:!r,onClick:function(){return f(T(r,!0))},children:Object(y.jsx)(s.a,{})})]}),Object(y.jsx)(w.a,{label:"Result",result:h})]})]})}))}}]);
//# sourceMappingURL=43.713a9866.chunk.js.map