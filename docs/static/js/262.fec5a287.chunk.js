"use strict";(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[262],{50057:(e,t,n)=>{n.d(t,{n:()=>c});var a=n(9950),r=n(25131),o=n(72772),l=n(73931);const s=(0,r.A)((e=>({root:{margin:e.spacing(1)}}))),c=e=>{let{title:t,iconType:n,children:r}=e;const c=s();return a.createElement(a.Fragment,null,a.createElement(o.m,{titleTemplate:"Web Toolbox - %s",defaultTitle:"Web Toolbox",title:t}),a.createElement("div",{className:c.root},a.createElement(l.A,{iconType:n,title:t}),r))}},73931:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(9950),r=n(82053);const o=(0,n(25131).A)((e=>({title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:e.spacing(1)},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}))),l=e=>{let{title:t,iconType:n}=e;const l=o();return a.createElement("div",{className:l.titleWithIcon},a.createElement(n,{className:l.icon}),a.createElement(r.A,{variant:"h5",className:l.title},t))}},70778:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(9950),r=n(19223),o=n(25979),l=n(3788),s=n(19890),c=n(2046),i=n(25333),m=n(52097);const u=(0,n(25131).A)((e=>({root:{margin:e.spacing(1)}}))),p=e=>{let{label:t="Search",autofocus:n=!1,fullWidth:p=!1,initialFilter:d="",onFilterChange:h}=e;const[g,A]=a.useState(d),f=u(),E=(0,m.YQ)((e=>h(e)),300);return a.useEffect((()=>E(g)),[g,E]),a.createElement(o.A,{fullWidth:p,className:f.root},a.createElement(l.A,{htmlFor:"searchField"},t),a.createElement(s.A,{id:"searchField",autoFocus:n,type:"text",value:g,onChange:e=>A(e.target.value),endAdornment:a.createElement(c.A,{position:"end"},a.createElement(i.A,null,a.createElement(r.A,null)))}))}},99083:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(9950),r=n(82053),o=n(67270);const l=(0,n(25131).A)((e=>({root:{margin:e.spacing(1)}}))),s=e=>{let{count:t,searching:n}=e;const s=l(),[c,i]=a.useState(o.t);return a.useEffect((()=>{n?i("filtering\u2026"):setTimeout((()=>i(o.t)),800)}),[n]),a.createElement("div",{className:s.root},a.createElement(r.A,{align:"right"},c),a.createElement(r.A,{align:"right"},t))}},56262:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I,mapDispatchToProps:()=>W,mapStateToProps:()=>F});var a=n(9950),r=n(71616),o=n(62375),l=n(83239),s=n(16491),c=n(6258),i=n(1320),m=n(2235),u=n(15769),p=n(69780),d=n(9213),h=n(34075),g=n(36080),A=n(10300),f=n(71822),E=n(33602),b=n(50057),w=n(70778),P=n(99083),v=n(27839),x=n(65579),C=n(1810),T=n(21671),N=n(39287),y=n(25131);const j=(0,N.A)((()=>({body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}})))(T.A),k=(0,N.A)((e=>({root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}})))(d.A),S=(0,y.A)((e=>({toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},tableHeader:{backgroundColor:e.palette.primary.main},dateColumn:{textAlign:"center",minWidth:120},watchColumn:{textAlign:"center"}})));function F(e){return{inputText:e.textInputs.lastGithubUsernameValue,projects:e.githubUserProjects.projects,searching:e.githubUserProjects.searching}}function W(e){return{listGithubUserProjectsRequested:t=>e((0,f.bP)(t)),storeInputText:(t,n)=>e((0,E.s)(t,n))}}const I=(0,A.Ng)(F,W)((e=>{let{inputText:t,searching:n,projects:A,listGithubUserProjectsRequested:f,storeInputText:E}=e;const T=S(),N=(0,C.Pb)("md"),[y,F]=a.useState(t),{setGlobalSpinnerState:W}=(0,v.Z0)(),{page:I,setPage:R,rowsPerPage:U,handleChangeRowsPerPage:G}=(0,x.W)(),_=I*U;return a.useEffect((()=>{n&&t?W({open:!0}):setTimeout((()=>W({open:!1})),500)}),[n,t,W]),a.createElement(b.n,{iconType:r.A,title:"Github user projects"},a.createElement(l.A,{className:T.toolbar},a.createElement(w.A,{autofocus:N,label:"Username",initialFilter:y,onFilterChange:function(e){F(e),f(e),E("lastGithubUsernameValue",e)}}),a.createElement(s.A,{component:"div",flexGrow:1}),a.createElement(P.A,{count:A.length,searching:n})),a.createElement(c.A,{rowsPerPageOptions:[5,10,25,50,100],component:"div",count:A.length,rowsPerPage:U,page:I,onPageChange:(e,t)=>R(t),onRowsPerPageChange:G}),a.createElement(i.A,{component:m.A},a.createElement(u.A,{size:N?"medium":"small"},a.createElement(p.A,{className:T.tableHeader},a.createElement(d.A,null,a.createElement(j,{component:"th",scope:"row"},"Project"),a.createElement(j,{component:"th",scope:"row"},"Description"),a.createElement(j,{component:"th",scope:"row",className:T.dateColumn},"Updated"),a.createElement(j,{component:"th",scope:"row"},a.createElement(o.A,null)))),a.createElement(h.A,null,A.slice(_,_+U).map((e=>a.createElement(k,{key:e.id},a.createElement(j,null,a.createElement(g.A,{href:e.html_url,target:"_blank",rel:"noreferrer"},e.name)),a.createElement(j,null,e.description),a.createElement(j,{className:T.dateColumn},new Date(e.updated_at).toLocaleDateString()),a.createElement(j,{className:T.watchColumn},e.watchers_count))))))))}))},65579:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(9950);const r=()=>{const[e,t]=(0,a.useState)(0),[n,r]=(0,a.useState)(10);return{page:e,setPage:t,rowsPerPage:n,handleChangeRowsPerPage:e=>{r(+e.target.value),t(0)}}}},62375:(e,t,n)=>{var a=n(24994);t.A=void 0;var r=a(n(79526)),o=n(44414);t.A=(0,r.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},16491:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(58168),r=n(98587),o=n(9950),l=n(72004),s=n(10116),c=n(70505),i=n(80237),m=n(7148),u=n(44414);const p=["className","component"];var d=n(41681),h=n(58258),g=n(67550);const A=(0,n(80863).A)("MuiBox",["root"]),f=(0,h.A)(),E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n,defaultClassName:d="MuiBox-root",generateClassName:h}=e,g=(0,s.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(c.A);return o.forwardRef((function(e,o){const s=(0,m.A)(n),c=(0,i.A)(e),{className:A,component:f="div"}=c,E=(0,r.A)(c,p);return(0,u.jsx)(g,(0,a.A)({as:f,ref:o,className:(0,l.A)(A,h?h(d):d),theme:t&&s[t]||s},E))}))}({themeId:g.A,defaultTheme:f,defaultClassName:A.root,generateClassName:d.A.generate}),b=E},39287:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(58168),r=n(98587),o=n(9950),l=n(23876),s=n.n(l),c=n(25131);var i=n(80806),m=n(44414);const u=["defaultTheme","withTheme","name"],p=["classes"],d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=>{const{defaultTheme:l,withTheme:d=!1,name:h}=t,g=(0,r.A)(t,u);let A=h;const f=(0,c.A)(e,(0,a.A)({defaultTheme:l,Component:n,name:h||n.displayName,classNamePrefix:A},g)),E=o.forwardRef((function(e,t){const o=(0,r.A)(e,p),s=f((0,a.A)({},n.defaultProps,e));let c,u=o;return("string"===typeof h||d)&&(c=(0,i.A)()||l,h&&(u=function(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n]||!t.components[n].defaultProps)return r;const o=(0,a.A)({},r),l=t.components[n].defaultProps;let s;for(s in l)void 0===o[s]&&(o[s]=l[s]);return o}({theme:c,name:h,props:o})),d&&!u.theme&&(u.theme=c)),(0,m.jsx)(n,(0,a.A)({ref:t,classes:s},u))}));return s()(E,n),E}}}}]);