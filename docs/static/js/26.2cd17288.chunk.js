(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[26],{1068:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return E})),n.d(t,"mapDispatchToProps",(function(){return _}));var c=n(15),a=n(0),r=n.n(a),i=n(92),s=n(90),o=n(273),u=n(251),l=n(335),j=n(1025),b=n(257),h=n(214),d=n(258),p=n(406),O=n(255),f=n(259),g=n(389),x=n(106),m=n.n(x),w=n(848),P=n.n(w),v=n(286),C=n(362),N=n(38),S=n(8),y=n(254),T=n(247),k=Object(S.a)((function(){return{body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}}}))(y.a),F=Object(S.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(O.a),U=Object(T.a)((function(e){return{root:{margin:e.spacing(1)},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},tableHeader:{backgroundColor:e.palette.primary.main},dateColumn:{textAlign:"center",minWidth:120},watchColumn:{textAlign:"center"}}})),G=n(138),I=n(445),R=n(93),W=n(351),D=n(2);function E(e){return{inputText:e.textInputs.lastGithubUsernameValue,projects:e.githubUserProjects.projects,searching:e.githubUserProjects.searching}}function _(e){return{listGithubUserProjectsRequested:function(t){return e(Object(N.c)(t))},storeInputText:function(t,n){return e(Object(R.b)(t,n))}}}t.default=Object(i.b)(E,_)(Object(o.a)()((function(e){var t="Github user projects",n=U(),a=e.inputText,i=e.searching,x=e.projects,w=e.listGithubUserProjectsRequested,N=e.storeInputText,S=r.a.useState(a),y=Object(c.a)(S,2),T=y[0],R=y[1],E=Object(G.c)().setGlobalSpinnerState,_=Object(W.a)(),A=_.page,q=_.setPage,z=_.rowsPerPage,B=_.handleChangeRowsPerPage;return r.a.useEffect((function(){i&&a?E({open:!0}):setTimeout((function(){return E({open:!1})}),500)}),[i,a,E]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(s.a,{title:t}),Object(D.jsxs)("div",{className:n.root,children:[Object(D.jsx)(v.a,{iconType:m.a,title:t}),Object(D.jsxs)(u.a,{className:n.toolbar,children:[Object(D.jsx)(C.a,{autofocus:Object(o.c)("md",e.width),label:"Username",initialFilter:T,onFilterChange:function(e){R(e),w(e),N("lastGithubUsernameValue",e)}}),Object(D.jsx)(l.a,{display:"flex",flexGrow:1}),Object(D.jsx)(I.a,{count:x.length,searching:i})]}),Object(D.jsx)(j.a,{rowsPerPageOptions:[5,10,25,50,100],component:"div",count:x.length,rowsPerPage:z,page:A,onPageChange:function(e,t){return q(t)},onRowsPerPageChange:B}),Object(D.jsx)(b.a,{component:h.a,children:Object(D.jsxs)(d.a,{size:Object(o.c)("md",e.width)?"medium":"small",children:[Object(D.jsx)(p.a,{className:n.tableHeader,children:Object(D.jsxs)(O.a,{children:[Object(D.jsx)(k,{component:"th",scope:"row",children:"Project"}),Object(D.jsx)(k,{component:"th",scope:"row",children:"Description"}),Object(D.jsx)(k,{component:"th",scope:"row",className:n.dateColumn,children:"Updated"}),Object(D.jsx)(k,{component:"th",scope:"row",children:Object(D.jsx)(P.a,{})})]})}),Object(D.jsx)(f.a,{children:x.slice(A*z,A*z+z).map((function(e){return Object(D.jsxs)(F,{children:[Object(D.jsx)(k,{children:Object(D.jsx)(g.a,{href:e.html_url,target:"_blank",rel:"noreferrer",children:e.name})}),Object(D.jsx)(k,{children:e.description}),Object(D.jsx)(k,{className:n.dateColumn,children:new Date(e.updated_at).toLocaleDateString()}),Object(D.jsx)(k,{className:n.watchColumn,children:e.watchers_count})]},e.id)}))})]})})]})]})})))},286:function(e,t,n){"use strict";var c=n(60),a=n(247),r=(n(0),n(2)),i=Object(a.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=i(),n=e.iconType;return Object(r.jsx)("div",{className:t.titleContainer,children:Object(r.jsxs)("div",{className:t.titleWithIcon,children:[Object(r.jsx)(n,{className:t.icon}),Object(r.jsx)(c.a,{variant:"h5",className:t.title,children:e.title})]})})}},351:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(15),a=n(0),r=function(){var e=Object(a.useState)(0),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(10),s=Object(c.a)(i,2),o=s[0],u=s[1];return{page:n,setPage:r,rowsPerPage:o,handleChangeRowsPerPage:function(e){u(+e.target.value),r(0)}}}},362:function(e,t,n){"use strict";var c=n(15),a=n(0),r=n.n(a),i=n(1042),s=n(1075),o=n(1040),u=n(481),l=n(252),j=n(372),b=n.n(j),h=n(247),d=Object(h.a)((function(e){return{root:{margin:e.spacing(1)}}})),p=n(329),O=n(2);t.a=function(e){var t=e.autofocus,n=e.initialFilter,a=e.label,j=e.onFilterChange,h=e.fullWidth,f=r.a.useState(""),g=Object(c.a)(f,2),x=g[0],m=g[1],w=d(),P=a||"Search",v=Object(p.a)((function(e){return j(e)}),300);return r.a.useEffect((function(){m(n)}),[n]),r.a.useEffect((function(){return v(x)}),[x,v]),Object(O.jsxs)(i.a,{fullWidth:h,className:w.root,children:[Object(O.jsx)(s.a,{htmlFor:"searchField",children:P}),Object(O.jsx)(o.a,{id:"searchField",autoFocus:t,type:"text",value:x,onChange:function(e){return m(e.target.value)},endAdornment:Object(O.jsx)(u.a,{position:"end",children:Object(O.jsx)(l.a,{children:Object(O.jsx)(b.a,{})})})})]})}},445:function(e,t,n){"use strict";var c=n(15),a=n(0),r=n.n(a),i=n(60),s=n(247),o=Object(s.a)((function(e){return{root:{margin:e.spacing(1)}}})),u=n(53),l=n(2);t.a=function(e){var t=o(),n=r.a.useState(u.b),a=Object(c.a)(n,2),s=a[0],j=a[1],b=e.count,h=e.searching;return r.a.useEffect((function(){h?j("filtering\u2026"):setTimeout((function(){return j(u.b)}),800)}),[h]),Object(l.jsxs)("div",{className:t.root,children:[Object(l.jsx)(i.a,{align:"right",children:s}),Object(l.jsx)(i.a,{align:"right",children:b})]})}}}]);
//# sourceMappingURL=26.2cd17288.chunk.js.map