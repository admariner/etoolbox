(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[25],{1180:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return z})),n.d(t,"mapDispatchToProps",(function(){return G}));var r=n(13),a=n(0),o=n.n(a),c=n(153),i=n.n(c),s=n(487),u=n.n(s),l=n(340),b=n(349),j=n(1165),d=n(342),h=n(205),p=n(343),O=n(526),f=n(341),m=n(344),x=n(522),g=n(139),v=n(141),w=n(56),y=n(142),P=n(360),C=n(435),S=n(525),k=n(172),N=n(424),F=n(57),T=n(348),R=n(347),D=n(327),A=Object(R.a)((function(){return{body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}}}))(T.a),V=Object(R.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(f.a),M=Object(D.a)((function(e){return{root:{margin:e.spacing(1)},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},tableHeader:{backgroundColor:e.palette.primary.main},dateColumn:{textAlign:"center",minWidth:120},watchColumn:{textAlign:"center"}}})),U=n(1);function z(e){return{inputText:e.textInputs.lastGithubUsernameValue,projects:e.githubUserProjects.projects,searching:e.githubUserProjects.searching}}function G(e){return{listGithubUserProjectsRequested:function(t){return e(Object(w.c)(t))},storeInputText:function(t,n){return e(Object(y.b)(t,n))}}}t.default=Object(v.b)(z,G)((function(e){var t="Github user projects",n=M(),a=Object(F.e)("md"),c=e.inputText,s=e.searching,v=e.projects,w=e.listGithubUserProjectsRequested,y=e.storeInputText,T=o.a.useState(c),R=Object(r.a)(T,2),D=R[0],z=R[1],G=Object(k.c)().setGlobalSpinnerState,W=Object(N.a)(),B=W.page,I=W.setPage,L=W.rowsPerPage,_=W.handleChangeRowsPerPage;return o.a.useEffect((function(){s&&c?G({open:!0}):setTimeout((function(){return G({open:!1})}),500)}),[s,c,G]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(g.a,{title:t}),Object(U.jsxs)("div",{className:n.root,children:[Object(U.jsx)(P.a,{iconType:i.a,title:t}),Object(U.jsxs)(l.a,{className:n.toolbar,children:[Object(U.jsx)(C.a,{autofocus:a,label:"Username",initialFilter:D,onFilterChange:function(e){z(e),w(e),y("lastGithubUsernameValue",e)}}),Object(U.jsx)(b.a,{display:"flex",flexGrow:1}),Object(U.jsx)(S.a,{count:v.length,searching:s})]}),Object(U.jsx)(j.a,{rowsPerPageOptions:[5,10,25,50,100],component:"div",count:v.length,rowsPerPage:L,page:B,onPageChange:function(e,t){return I(t)},onRowsPerPageChange:_}),Object(U.jsx)(d.a,{component:h.a,children:Object(U.jsxs)(p.a,{size:a?"medium":"small",children:[Object(U.jsx)(O.a,{className:n.tableHeader,children:Object(U.jsxs)(f.a,{children:[Object(U.jsx)(A,{component:"th",scope:"row",children:"Project"}),Object(U.jsx)(A,{component:"th",scope:"row",children:"Description"}),Object(U.jsx)(A,{component:"th",scope:"row",className:n.dateColumn,children:"Updated"}),Object(U.jsx)(A,{component:"th",scope:"row",children:Object(U.jsx)(u.a,{})})]})}),Object(U.jsx)(m.a,{children:v.slice(B*L,B*L+L).map((function(e){return Object(U.jsxs)(V,{children:[Object(U.jsx)(A,{children:Object(U.jsx)(x.a,{href:e.html_url,target:"_blank",rel:"noreferrer",children:e.name})}),Object(U.jsx)(A,{children:e.description}),Object(U.jsx)(A,{className:n.dateColumn,children:new Date(e.updated_at).toLocaleDateString()}),Object(U.jsx)(A,{className:n.watchColumn,children:e.watchers_count})]},e.id)}))})]})})]})]})}))},360:function(e,t,n){"use strict";n(0);var r=n(96),a=n(327),o=n(1),c=Object(a.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.title,n=e.iconType,a=c();return Object(o.jsx)("div",{className:a.titleContainer,children:Object(o.jsxs)("div",{className:a.titleWithIcon,children:[Object(o.jsx)(n,{className:a.icon}),Object(o.jsx)(r.a,{variant:"h5",className:a.title,children:t})]})})}},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(13),a=n(0),o=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(10),i=Object(r.a)(c,2),s=i[0],u=i[1];return{page:n,setPage:o,rowsPerPage:s,handleChangeRowsPerPage:function(e){u(+e.target.value),o(0)}}}},435:function(e,t,n){"use strict";var r=n(13),a=n(0),o=n.n(a),c=n(484),i=n.n(c),s=n(1189),u=n(1167),l=n(1187),b=n(635),j=n(337),d=n(483),h=n(327),p=Object(h.a)((function(e){return{root:{margin:e.spacing(1)}}})),O=n(1);t.a=function(e){var t=e.label,n=void 0===t?"Search":t,a=e.autofocus,c=void 0!==a&&a,h=e.fullWidth,f=void 0!==h&&h,m=e.initialFilter,x=void 0===m?"":m,g=e.onFilterChange,v=o.a.useState(x),w=Object(r.a)(v,2),y=w[0],P=w[1],C=p(),S=Object(d.a)((function(e){return g(e)}),300);return o.a.useEffect((function(){return S(y)}),[y,S]),Object(O.jsxs)(s.a,{fullWidth:f,className:C.root,children:[Object(O.jsx)(u.a,{htmlFor:"searchField",children:n}),Object(O.jsx)(l.a,{id:"searchField",autoFocus:c,type:"text",value:y,onChange:function(e){return P(e.target.value)},endAdornment:Object(O.jsx)(b.a,{position:"end",children:Object(O.jsx)(j.a,{children:Object(O.jsx)(i.a,{})})})})]})}},487:function(e,t,n){"use strict";var r=n(25);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(26)),o=n(1),c=(0,a.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=c},522:function(e,t,n){"use strict";var r=n(23),a=n(13),o=n(6),c=n(10),i=n(2),s=n(0),u=n(5),l=n(94),b=n(16),j=n(11),d=n(15),h=n(97),p=n(43),O=n(96),f=n(95),m=n(82);function x(e){return Object(m.a)("MuiLink",e)}var g=Object(f.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),v=n(12),w=n(253),y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},P=function(e){var t=e.theme,n=e.ownerState,r=function(e){return y[e]||e}(n.color),a=Object(v.b)(t,"palette.".concat(r),!1)||n.color,o=Object(v.b)(t,"palette.".concat(r,"Channel"));return"vars"in t&&o?"rgba(".concat(o," / 0.4)"):Object(w.a)(a,.4)},C=n(1),S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=Object(j.a)(O.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&Object(i.a)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:P({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&Object(o.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),N=s.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiLink"}),o=n.className,j=n.color,O=void 0===j?"primary":j,f=n.component,m=void 0===f?"a":f,g=n.onBlur,v=n.onFocus,w=n.TypographyClasses,P=n.underline,N=void 0===P?"always":P,F=n.variant,T=void 0===F?"inherit":F,R=n.sx,D=Object(c.a)(n,S),A=Object(h.a)(),V=A.isFocusVisibleRef,M=A.onBlur,U=A.onFocus,z=A.ref,G=s.useState(!1),W=Object(a.a)(G,2),B=W[0],I=W[1],L=Object(p.a)(t,z),_=Object(i.a)({},n,{color:O,component:m,focusVisible:B,underline:N,variant:T}),H=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,o={root:["root","underline".concat(Object(b.a)(a)),"button"===n&&"button",r&&"focusVisible"]};return Object(l.a)(o,x,t)}(_);return Object(C.jsx)(k,Object(i.a)({color:O,className:Object(u.a)(H.root,o),classes:w,component:m,onBlur:function(e){M(e),!1===V.current&&I(!1),g&&g(e)},onFocus:function(e){U(e),!0===V.current&&I(!0),v&&v(e)},ref:L,ownerState:_,variant:T,sx:[].concat(Object(r.a)(Object.keys(y).includes(O)?[]:[{color:O}]),Object(r.a)(Array.isArray(R)?R:[R]))},D))}));t.a=N},525:function(e,t,n){"use strict";var r=n(13),a=n(0),o=n.n(a),c=n(96),i=n(73),s=n(327),u=Object(s.a)((function(e){return{root:{margin:e.spacing(1)}}})),l=n(1);t.a=function(e){var t=u(),n=o.a.useState(i.b),a=Object(r.a)(n,2),s=a[0],b=a[1],j=e.count,d=e.searching;return o.a.useEffect((function(){d?b("filtering\u2026"):setTimeout((function(){return b(i.b)}),800)}),[d]),Object(l.jsxs)("div",{className:t.root,children:[Object(l.jsx)(c.a,{align:"right",children:s}),Object(l.jsx)(c.a,{align:"right",children:j})]})}}}]);
//# sourceMappingURL=25.5d07a47c.chunk.js.map