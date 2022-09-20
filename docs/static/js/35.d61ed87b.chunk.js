(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[35],{1057:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return ee})),n.d(t,"mapDispatchToProps",(function(){return te}));var a=n(12),r=n(348),i=n(1044),c=n(260),o=n(217),s=n(261),l=n(276),u=n(410),d=n(258),j=n(255),m=n(262),b=n(67),O=n(256),f=n(332),h=n(519),p=n.n(h),g=n(906),x=n.n(g),v=n(907),y=n.n(v),k=n(411),P=n.n(k),N=n(908),C=n.n(N),w=n(0),S=n(93),I=n(95),E=n(8),U=n(905),R=n(1026),T=n(96),W=n(1049),D=n(1051),H=n(1050),J=n(1052),M=n(2),L=function(e){var t=e.title,n=e.children,a=e.isOpen,r=e.setIsOpen,i=e.onConfirm;return Object(M.jsxs)(W.a,{open:a,onClose:function(){return r(!1)},"aria-labelledby":"confirm-dialog",children:[Object(M.jsx)(J.a,{id:"confirm-dialog",children:t}),Object(M.jsx)(H.a,{children:n}),Object(M.jsxs)(D.a,{children:[Object(M.jsx)(O.a,{variant:"contained",onClick:function(){return r(!1)},color:"secondary",children:"No"}),Object(M.jsx)(O.a,{variant:"contained",onClick:function(){r(!1),i()},color:"default",children:"Yes"})]})]})},A=n(292),z=n(289),B=n(425),G=["?","0","0.5","1","1.5","2","2.5","3","3.5","4","4.5","5","8","13","20","40","100"],V=new Map([[WebSocket.CLOSED,"closed"],[WebSocket.OPEN,"open"],[WebSocket.CLOSING,"closing"],[WebSocket.CONNECTING,"connecting"]]),Y=n(37),F=Object(l.a)()((function(e){var t=e.width,n=e.value,a=e.isDisabled,r=e.isSelected,i=e.onClick,c=Object(Y.a)(),o=Object(l.c)("md",t)?"70px":"48px";return Object(M.jsx)(O.a,{style:{maxWidth:o,maxHeight:o,minWidth:o,minHeight:o,margin:c.spacing(1)},variant:r?"contained":"outlined",disabled:a,title:"Estimate the current story point as: [".concat(n,"]"),color:"primary",onClick:function(){return i(n)},children:Object(M.jsx)(b.a,{variant:"h5",children:n})})})),q=function(e){var t;return null!==(t=V.get(e))&&void 0!==t?t:"closed"},K=n(11),Q=n(257),X=n(250),Z=Object(K.a)((function(){return{body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}}}))(Q.a),$=Object(K.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(d.a),_=Object(X.a)((function(e){return{root:{margin:e.spacing(1)},toolbar:{height:"100%",margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},formControl:{marginRight:e.spacing(1)},submitEstimate:{marginTop:e.spacing(2),display:"flex",justifyContent:"center",flexWrap:"wrap"},estimatesVisibility:{alignItems:"center"},teamEstimates:{marginTop:e.spacing(4)},tableHeader:{backgroundColor:e.palette.primary.main}}}));function ee(e){return{lastPockerPlanningHostName:e.textInputs.lastPockerPlanningHostName,lastPockerPlanningRoomUUID:e.textInputs.lastPockerPlanningRoomUUID,lastPockerPlanningRoomName:e.textInputs.lastPockerPlanningRoomName,lastPockerPlanningUsername:e.textInputs.lastPockerPlanningUsername}}function te(e){return{storeInputText:function(t,n){return e(Object(T.b)(t,n))}}}t.default=Object(I.b)(ee,te)(Object(l.a)()((function(e){var t="Porker planning",n=_(),h=Object(E.l)(),g=Object(E.n)(),v=g.hostName,k=g.roomUUID,N=g.roomName,I=e.lastPockerPlanningRoomUUID,T=e.lastPockerPlanningRoomName,W=e.lastPockerPlanningUsername,D=e.lastPockerPlanningHostName,H=e.storeInputText,J=Object(w.useRef)(),V=Object(w.useState)(),Y=Object(a.a)(V,2),K=Y[0],Q=Y[1],X=Object(w.useState)("closed"),ee=Object(a.a)(X,2),te=ee[0],ne=ee[1],ae=Object(w.useState)(),re=Object(a.a)(ae,2),ie=re[0],ce=re[1],oe=Object(w.useState)(!1),se=Object(a.a)(oe,2),le=se[0],ue=se[1],de=Object(w.useState)(!1),je=Object(a.a)(de,2),me=je[0],be=je[1],Oe=Object(w.useState)([]),fe=Object(a.a)(Oe,2),he=fe[0],pe=fe[1],ge=function(e,t){var n=e.map((function(e){return e.estimate})).filter((function(e){return null!==e&&void 0!==e&&"?"!==e})).map((function(e){return Number(e)})),a=n.reduce((function(e,t){return e+Number(t)}),0),r=n.length>0?a/n.length:0;return{values:n,estimatesSum:a,estimatesAverage:Math.round(10*r+Number.EPSILON)/10,isEstimatesCleared:e.length>0&&e.every((function(e){return void 0===e.estimate})),isUserMemberOfRoom:!(null===t||void 0===t||!t.trim())&&e.some((function(e){return e.username===t}))}}(he,W),xe=ge.estimatesAverage,ve=ge.isEstimatesCleared,ye=ge.isUserMemberOfRoom,ke=Object(B.b)(D)&&Object(B.b)(I)&&Object(B.b)(v)&&Object(B.b)(k),Pe=Object(B.b)(D)&&Object(B.b)(I)&&Object(B.b)(T)&&Object(B.b)(W);Object(w.useEffect)((function(){N&&k&&v&&(H("lastPockerPlanningRoomName",N),H("lastPockerPlanningRoomUUID",k),H("lastPockerPlanningHostName",v))}),[k,N,v,H]),Object(w.useEffect)((function(){if(ke){var e="https:"===window.location.protocol?"wss":"ws",t="".concat(e,"://").concat(D,"/ws?roomUUID=").concat(I),n=new U.a(t);n.onopen=function(){return ne(q(n.readyState))},n.onerror=function(){return ne(q(n.readyState))},n.onclose=function(){return ne(q(n.readyState))},n.onmessage=function(e){var t=JSON.parse(e.data);pe(t.estimates)},J.current=n}}),[J,ke,D,I]),Object(w.useEffect)((function(){return function(){var e;return null===(e=J.current)||void 0===e?void 0:e.close()}}),[]),Object(w.useEffect)((function(){var e;"open"===te&&ie&&(null===(e=J.current)||void 0===e||e.send(JSON.stringify(ie)),ce(void 0))}),[ie,te]);Object(w.useEffect)((function(){ve&&(be(!1),Q(void 0))}),[ve]);return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(S.a,{title:t}),Object(M.jsxs)("div",{className:n.root,children:[Object(M.jsx)(z.a,{iconType:x.a,title:t}),Object(M.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(M.jsxs)(r.a,{container:!0,spacing:1,children:[Object(M.jsx)(r.a,{item:!0,md:3,sm:6,xs:12,children:Object(M.jsx)(i.a,{className:n.formControl,fullWidth:!0,children:Object(M.jsx)(f.a,{label:"Serveur (channel ".concat(te,")"),placeholder:"Type the poker plannind hostname here",variant:"outlined",fullWidth:!0,margin:"normal",value:D,onChange:function(e){return H("lastPockerPlanningHostName",e.target.value)}})})}),Object(M.jsx)(r.a,{item:!0,md:3,sm:6,xs:12,children:Object(M.jsx)(i.a,{className:n.formControl,fullWidth:!0,children:Object(M.jsx)(f.a,{label:"Team name",placeholder:"Type the team name here",variant:"outlined",fullWidth:!0,margin:"normal",value:T,onChange:function(e){return H("lastPockerPlanningRoomName",e.target.value)}})})}),Object(M.jsx)(r.a,{item:!0,md:3,sm:6,xs:12,children:Object(M.jsx)(i.a,{className:n.formControl,fullWidth:!0,children:Object(M.jsx)(f.a,{label:"Your name",placeholder:"Type your name here",variant:"outlined",fullWidth:!0,margin:"normal",value:W,onChange:function(e){return H("lastPockerPlanningUsername",e.target.value)}})})}),Object(M.jsx)(r.a,{item:!0,md:3,sm:6,xs:12,children:Object(M.jsxs)(r.a,{container:!0,justifyContent:"flex-end",alignItems:"center",className:n.toolbar,children:[Object(M.jsx)(O.a,{variant:"contained",title:"Register the team and start planning in a new room",color:"primary",onClick:function(){var e=Object(R.a)(),t="/PokerPlanning/".concat(D,"/").concat(e,"/").concat(T);h(t,{replace:!0})},children:"New room"}),Object(M.jsx)(O.a,{variant:"contained",title:"Enter existing room",color:"primary",disabled:ye||!Pe,onClick:function(){var e;W&&(null===(e=J.current)||void 0===e||e.send(JSON.stringify({type:"vote",payload:{username:null!==W&&void 0!==W?W:""}})))},children:"Join"}),Object(M.jsx)(A.a,{data:window.location.href,Icon:y.a,hoverMessage:"Copy link to clipboard for sharing",feedbackMessage:"Link copied to clipboard, you can now share to all members"})]})})]})}),Object(M.jsx)("div",{className:n.submitEstimate,children:G.map((function(e){return Object(M.jsx)(F,{isDisabled:!Pe,isSelected:K===e,value:e,onClick:function(){return function(e){var t;Q(e);var n={type:"vote",payload:{username:null!==W&&void 0!==W?W:"",estimate:e,estimatedAt:e?new Date:void 0}};(null===(t=J.current)||void 0===t?void 0:t.readyState)===WebSocket.OPEN?J.current.send(JSON.stringify(n)):ce(n)}(e)}},e)}))}),Object(M.jsx)("div",{className:n.teamEstimates,children:Object(M.jsx)(c.a,{component:o.a,children:Object(M.jsxs)(s.a,{size:Object(l.c)("md",e.width)?"medium":"small",children:[Object(M.jsx)(u.a,{className:n.tableHeader,children:Object(M.jsxs)(d.a,{children:[Object(M.jsx)(Z,{component:"th",scope:"row",width:30}),Object(M.jsx)(Z,{component:"th",scope:"row",children:"Team member"}),Object(M.jsxs)(Z,{component:"th",scope:"row",align:"center",children:["Points",Object(M.jsx)(j.a,{title:"Toggle story points visibility",onClick:function(){return be((function(e){return!e}))},children:me?Object(M.jsx)(P.a,{}):Object(M.jsx)(C.a,{})}),Object(M.jsx)(j.a,{onClick:function(){return ue(!0)},title:"Clear all votes",children:Object(M.jsx)(p.a,{})})]})]})}),Object(M.jsxs)(m.a,{children:[he.sort((function(e,t){return e.username.localeCompare(t.username)})).map((function(e){var t=e.username,n=e.estimate,a=null!==n&&void 0!==n?n:"\u2026",r=n?"\u2714":"\u2026";return Object(M.jsxs)($,{children:[Object(M.jsx)(Z,{width:30,children:Object(M.jsx)(j.a,{onClick:function(){return function(e){var t;return null===(t=J.current)||void 0===t?void 0:t.send(JSON.stringify({type:"remove",payload:e}))}(t)},title:'Remove user "'.concat(t,'"'),children:Object(M.jsx)(p.a,{})})}),Object(M.jsx)(Z,{children:t}),Object(M.jsx)(Z,{align:"center",children:me?a:r})]},t)})),Object(M.jsxs)($,{children:[Object(M.jsx)(Z,{width:30}),Object(M.jsx)(Z,{children:Object(M.jsx)(b.a,{children:"Story points average"})}),Object(M.jsx)(Z,{align:"center",children:Object(M.jsx)(b.a,{children:me?xe:Object(M.jsx)(C.a,{})})})]},"average")]})]})})})]}),Object(M.jsx)(L,{title:"Confirmation",isOpen:le,setIsOpen:ue,onConfirm:function(){var e;return null===(e=J.current)||void 0===e?void 0:e.send(JSON.stringify({type:"reset"}))},children:"Are you sure you want to delete all votes?"})]})})))},289:function(e,t,n){"use strict";var a=n(67),r=n(250),i=(n(0),n(2)),c=Object(r.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=c(),n=e.iconType;return Object(i.jsx)("div",{className:t.titleContainer,children:Object(i.jsxs)("div",{className:t.titleWithIcon,children:[Object(i.jsx)(n,{className:t.icon}),Object(i.jsx)(a.a,{variant:"h5",className:t.title,children:e.title})]})})}},292:function(e,t,n){"use strict";var a=n(256),r=n(299),i=n.n(r),c=n(295),o=n.n(c),s=(n(0),n(94)),l=n(2);t.a=function(e){var t=e.data,n=e.hoverMessage,r=e.feedbackMessage,c=e.Icon,u=void 0===c?i.a:c,d=Object(s.c)().setToasterState;return Object(l.jsx)(a.a,{onClick:function(){if(t){var e=null!==r&&void 0!==r?r:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");o.a(t,{format:"text/plain"}),d({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!t,title:null!==n&&void 0!==n?n:"Copy to clipboard",variant:"contained",color:"primary",children:Object(l.jsx)(u,{})})}},425:function(e,t,n){"use strict";function a(e){return!e||0===e.trim().length}function r(e){return!a(e)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}))}}]);
//# sourceMappingURL=35.d61ed87b.chunk.js.map