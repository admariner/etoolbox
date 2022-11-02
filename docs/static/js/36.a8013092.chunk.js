(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[36],{1169:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return N})),n.d(t,"mapDispatchToProps",(function(){return J}));var r=n(13),a=n(0),o=n.n(a),i=n(164),c=n.n(i),s=n(340),d=n(349),l=n(334),u=n(410),b=n(327),p=n(139),j=n(141),f=n(1162),h=n(142),g=n(363),x=n(360),O=n(387),v=n(57);function m(e){this.message=e}m.prototype=new Error,m.prototype.name="InvalidCharacterError";var w="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new m("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,a=0,o=0,i="";r=t.charAt(o++);~r&&(n=a%4?64*n+r:r,a++%4)?i+=String.fromCharCode(255&n>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return i};function y(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(w(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return w(t)}}function k(e){this.message=e}k.prototype=new Error,k.prototype.name="InvalidTokenError";var C=function(e,t){if("string"!=typeof e)throw new k("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(y(e.split(".")[n]))}catch(e){throw new k("Invalid token specified: "+e.message)}};function T(e,t){if(!e)return"";try{var n=C(e,{header:t});return JSON.stringify(n,null,4)}catch(m){return JSON.stringify(m)}}var I=n(1),S=Object(b.a)((function(e){return{root:{margin:e.spacing(1)},decoded:{padding:e.spacing(1),borderColor:e.palette.text.disabled,borderStyle:"solid",borderWidth:1,borderRadius:e.shape.borderRadius,width:"100%",overflow:"auto"},toolbar:{margin:0,padding:0}}}));function N(e){return{inputText:e.textInputs.lastJWT}}function J(e){return{storeInputText:function(t,n){return e(Object(h.b)(t,n))}}}t.default=Object(j.b)(N,J)((function(e){var t="JWT decoder\u2026",n=S(),a=Object(v.e)("md"),i=Object(O.a)(),b=e.inputText,j=e.storeInputText,h=o.a.useState(T(b,!0)),m=Object(r.a)(h,2),w=m[0],y=m[1],k=o.a.useState(T(b,!1)),C=Object(r.a)(k,2),N=C[0],J=C[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(p.a,{title:t}),Object(I.jsxs)("div",{className:n.root,children:[Object(I.jsx)(x.a,{iconType:c.a,title:t}),Object(I.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(I.jsx)(u.a,{autoFocus:a,id:"jwt",label:"JSON web token to decode",placeholder:"Paste or type the content here",multiline:!0,minRows:10,maxRows:a?20:10,variant:"outlined",margin:"normal",fullWidth:!0,value:b,onChange:function(e){return j("lastJWT",e.target.value)}})}),Object(I.jsxs)(s.a,{className:n.toolbar,children:[Object(I.jsx)(d.a,{display:"flex",flexGrow:1}),Object(I.jsx)(g.a,{data:N,sx:{mr:1}}),Object(I.jsx)(l.a,{variant:"contained",title:"Decode the JWT Token",color:"primary",endIcon:Object(I.jsx)(c.a,{children:"Decode"}),disabled:!b,onClick:function(){y(T(b,!0)),J(T(b,!1))},children:"Decode"})]}),Object(I.jsx)("div",{className:n.decoded,children:Object(I.jsxs)("div",{children:[Object(I.jsx)(f.a,{language:"json",style:i,children:w}),Object(I.jsx)(f.a,{language:"json",style:i,children:N})]})})]})]})}))},360:function(e,t,n){"use strict";n(0);var r=n(96),a=n(327),o=n(1),i=Object(a.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.title,n=e.iconType,a=i();return Object(o.jsx)("div",{className:a.titleContainer,children:Object(o.jsxs)("div",{className:a.titleWithIcon,children:[Object(o.jsx)(n,{className:a.icon}),Object(o.jsx)(r.a,{variant:"h5",className:a.title,children:t})]})})}},363:function(e,t,n){"use strict";var r=n(28),a=n(371),o=(n(0),n(376)),i=n.n(o),c=n(334),s=n(369),d=n.n(s),l=n(140),u=n(1),b=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.a=function(e){var t=e.data,n=e.isDisabled,o=e.hoverMessage,s=e.feedbackMessage,p=e.Icon,j=void 0===p?i.a:p,f=Object(a.a)(e,b),h=Object(l.c)().setToasterState;return Object(u.jsx)(c.a,Object(r.a)(Object(r.a)({},f),{},{onClick:function(){if(t){var e=null!==s&&void 0!==s?s:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");d.a(t,{format:"text/plain"}),h({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!t||n,title:null!==o&&void 0!==o?o:"Copy to clipboard",variant:"contained",color:"primary",children:Object(u.jsx)(j,{})}))}},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1150),a=n(1151),o=n(125),i=function(){return Object(o.c)().isDark?r.a:a.a}}}]);
//# sourceMappingURL=36.a8013092.chunk.js.map