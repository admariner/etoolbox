(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[37],{1159:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return ge})),n.d(t,"mapDispatchToProps",(function(){return ve}));var a=n(17),r=n(31),o=n(13),i=n(0),c=n(1003),s=n.n(c),l=n(1001),u=n.n(l),d=n(152),m=n.n(d),b=n(465),j=n.n(b),p=n(487),f=n.n(p),h=n(1002),O=n.n(h),g=n(434),v=n(342),x=n(205),k=n(343),y=n(526),N=n(341),P=n(337),C=n(344),S=n(96),w=n(334),I=n(554),U=n.n(I),D=n(139),T=n(141),L=n(14),E=n(142),R=n(171),W=n(363),H=n(360),M=n(140),J=n(429),A=n(99),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{type:"vote",payload:{username:e,estimate:t,estimatedAtISO8601:t?(new Date).toISOString():void 0}}},X=["?","0","0.5","1","1.5","2","2.5","3","3.5","4","4.5","5","8","13","20","40","100"],z=["?","0","1","2","3","5","8","13","20","40","100"],B=["?","S","M","L","XL"],G=["?","XS","S","M","L","XL","XXL"],F=function(e){return function(t,n){var a,r;return e.indexOf(null!==(a=t.estimate)&&void 0!==a?a:"?")-e.indexOf(null!==(r=n.estimate)&&void 0!==r?r:"?")}},Q={fibonnacy:{values:z,displayValue:z.slice(2).join(" "),sorter:F(z)},"fibonnacy-variant-1":{values:X,displayValue:X.slice(2).map((function(e){return e.replace("0.5","\xbd")})).map((function(e){return e.replace(".5","\xbd")})).join(" "),sorter:F(X)},"t-shirt":{values:B,displayValue:B.slice(1).join(" "),sorter:F(B)},"t-shirt-variant-1":{values:G,displayValue:G.slice(1).join(" "),sorter:F(G)}},Y="fibonnacy",_="localhost",q=new Map([[WebSocket.CLOSED,"closed"],[WebSocket.OPEN,"open"],[WebSocket.CLOSING,"closing"],[WebSocket.CONNECTING,"connecting"]]),K=n(34),Z=n(57),$=n(1),ee=function(e){var t=e.value,n=e.isDisabled,a=e.isSelected,r=e.onClick,o=Object(K.a)(),i=Object(Z.e)("md")?"70px":"48px";return Object($.jsx)(w.a,{style:{maxWidth:i,maxHeight:i,minWidth:i,minHeight:i,margin:o.spacing(1)},variant:a?"contained":"outlined",disabled:n,title:"Estimate the current story point as: [".concat(t,"]"),color:"primary",onClick:function(){return r(t)},children:Object($.jsx)(S.a,{variant:"h5",children:t})})},te=n(999),ne=n.n(te),ae=n(1189),re=n(635),oe=n(462),ie=n(410),ce=n(348),se=n(347),le=n(327),ue=Object(se.a)((function(){return{body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}}}))(ce.a),de=Object(se.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(N.a),me=Object(le.a)((function(e){return{root:{margin:e.spacing(1)},toolbar:{height:"100%",margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},formControl:{marginRight:e.spacing(1)},submitEstimate:{marginTop:e.spacing(2),display:"flex",justifyContent:"center",flexWrap:"wrap"},teamEstimates:{marginTop:e.spacing(4)},tableHeader:{backgroundColor:e.palette.primary.main}}}));var be=Object(T.b)((function(e){return{lastPokerPlanningHostName:e.textInputs.lastPokerPlanningHostName,lastPokerPlanningRoomName:e.textInputs.lastPokerPlanningRoomName,lastPokerPlanningUsername:e.textInputs.lastPokerPlanningUsername,lastPokerCardsListingCategoryName:e.textInputs.lastPokerCardsListingCategoryName}}),(function(e){return{storeInputText:function(t,n){return e(Object(E.b)(t,n))}}}))((function(e){var t=e.lastPokerPlanningRoomName,n=e.lastPokerPlanningUsername,a=e.lastPokerPlanningHostName,r=e.lastPokerCardsListingCategoryName,i=e.storeInputText,c=e.socketState,s=me(),l=Object(K.a)(),u=Object(L.p)(),d=u.hostName,m=u.roomUUID,b=u.roomName,j=Object(J.b)(b)&&Object(J.b)(d)&&Object(J.b)(m),p=r||Y;return Object($.jsxs)(g.a,{container:!0,spacing:1,children:[Object($.jsx)(g.a,{item:!0,md:4,xs:6,children:Object($.jsx)(ae.a,{className:s.formControl,fullWidth:!0,children:Object($.jsx)(ie.a,{label:"Serveur (channel ".concat(c,")"),placeholder:"Type the poker plannind hostname here",variant:"outlined",fullWidth:!0,margin:"normal",value:a,title:a,disabled:j,onChange:function(e){return i("lastPokerPlanningHostName",e.target.value)},InputProps:{endAdornment:Object($.jsx)(re.a,{position:"end",children:Object($.jsx)(P.a,{title:"Instruction to setup a poker planning server",target:"_blank",href:"https://github.com/amwebexpert/ws-poker-planning#wspokerplanning-server-production-deployment",children:Object($.jsx)(ne.a,{})})})}})})}),Object($.jsx)(g.a,{item:!0,md:2,xs:6,children:Object($.jsx)(ae.a,{className:s.formControl,fullWidth:!0,children:Object($.jsx)(ie.a,{label:"Team name",placeholder:"Type the team name here",variant:"outlined",fullWidth:!0,margin:"normal",value:t,title:t,disabled:j,onChange:function(e){return i("lastPokerPlanningRoomName",e.target.value)}})})}),Object($.jsx)(g.a,{item:!0,md:2,xs:6,children:Object($.jsx)(ae.a,{className:s.formControl,fullWidth:!0,children:Object($.jsx)(ie.a,{label:"Your name",placeholder:"Type your name here",variant:"outlined",fullWidth:!0,margin:"normal",value:n,onChange:function(e){return i("lastPokerPlanningUsername",e.target.value)}})})}),Object($.jsx)(g.a,{item:!0,md:4,xs:6,children:Object($.jsx)(ae.a,{className:s.formControl,fullWidth:!0,children:Object($.jsx)(ie.a,{select:!0,label:"Poker card types",style:{marginTop:l.spacing(2)},variant:"outlined",fullWidth:!0,title:p,value:p,onChange:function(e){return i("lastPokerCardsListingCategoryName",e.target.value)},children:Object.entries(Q).map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return Object($.jsx)(oe.a,{value:n,title:n,children:a.displayValue},n)}))})})})]})})),je=n(1e3),pe=n(1123),fe=function(e){var t;return null!==(t=q.get(e))&&void 0!==t?t:"closed"},he=function(e){var t=e.hostName,n=void 0===t?_:t,a=e.roomName,r=void 0===a?"default":a,o=e.roomUUID,i=void 0===o?Object(pe.a)():o;return"/PokerPlanning/".concat(n,"/").concat(i,"/").concat(r)},Oe=function(e){return document.location.href.split("/#/")[0]+"/#"+he(e)};function ge(e){return{lastPokerPlanningHostName:e.textInputs.lastPokerPlanningHostName,lastPokerPlanningRoomName:e.textInputs.lastPokerPlanningRoomName,lastPokerPlanningUsername:e.textInputs.lastPokerPlanningUsername,lastPokerCardsListingCategoryName:e.textInputs.lastPokerCardsListingCategoryName}}function ve(e){return{storeInputText:function(t,n){return e(Object(E.b)(t,n))}}}t.default=Object(T.b)(ge,ve)((function(e){var t,n=me(),c=Object(L.n)(),l=Object(R.b)().showConfirmationDialog,d=Object(M.c)().setToasterState,b=Object(L.p)(),p=b.hostName,h=b.roomUUID,I=b.roomName,T=e.lastPokerPlanningRoomName,E=e.lastPokerPlanningUsername,X=e.lastPokerPlanningHostName,z=e.lastPokerCardsListingCategoryName,B=e.storeInputText,G=Object(i.useRef)(),F=Object(i.useState)("closed"),q=Object(o.a)(F,2),K=q[0],Z=q[1],te=Object(i.useState)(),ne=Object(o.a)(te,2),ae=ne[0],re=ne[1],oe=Object(i.useState)(),ie=Object(o.a)(oe,2),ce=ie[0],se=ie[1],le=Object(i.useState)(!1),ge=Object(o.a)(le,2),ve=ge[0],xe=ge[1],ke=Object(i.useState)(),ye=Object(o.a)(ke,2),Ne=ye[0],Pe=ye[1],Ce="Poker planning ".concat(null!==T&&void 0!==T?T:"").trim(),Se=null!==(t=null===Ne||void 0===Ne?void 0:Ne.estimates)&&void 0!==t?t:[],we=Q[z||Y],Ie=function(e,t){var n=e.map((function(e){return e.estimate})).filter((function(e){return!!e})).filter((function(e){return Object(J.c)(e)})).map((function(e){return Number(e)})),a=n.reduce((function(e,t){return e+Number(t)}),0),r=n.length>0?a/n.length:0;return{values:n,estimatesSum:a,estimatesAverage:Math.round(10*r+Number.EPSILON)/10,isEstimatesCleared:e.length>0&&e.every((function(e){return void 0===e.estimate})),isUserMemberOfRoom:!(null===t||void 0===t||!t.trim())&&e.some((function(e){return e.username===t}))}}(Se,E),Ue=Ie.estimatesAverage,De=Ie.isEstimatesCleared,Te=Ie.isUserMemberOfRoom,Le=G&&Object(J.b)(I)&&Object(J.b)(p)&&Object(J.b)(h),Ee=Le&&Object(J.b)(E),Re=Object(J.b)(X)&&Object(J.b)(T);Object(i.useEffect)((function(){Le&&(B("lastPokerPlanningRoomName",null!==I&&void 0!==I?I:""),B("lastPokerPlanningHostName",null!==p&&void 0!==p?p:""))}),[I,p,B,Le]),Object(i.useEffect)((function(){if(Ne&&E){A.a&&console.info("poker session",Ne);var e=Ne.estimates.find((function(e){return e.username===E}));e&&re(e.estimate)}}),[E,Ne]),Object(i.useEffect)((function(){if(Le)return G.current=function(e){var t=e.hostName,n=void 0===t?_:t,a=e.roomUUID,r=void 0===a?Object(pe.a)():a,o=e.onSocketStateUpdate,i=e.onSessionUpdate,c="https:"===document.location.protocol?"wss":"ws",s="".concat(c,"://").concat(n,"/ws?roomUUID=").concat(r),l=new je.a(s);return l.onopen=function(){return o(fe(l.readyState))},l.onerror=function(){return o(fe(l.readyState))},l.onclose=function(){return o(fe(l.readyState))},l.onmessage=function(e){var t=JSON.parse(e.data);i(t)},l}({hostName:p,roomUUID:h,onSessionUpdate:Pe,onSocketStateUpdate:Z}),function(){var e;return null===(e=G.current)||void 0===e?void 0:e.close()}}),[G,Le,p,h]);Object(i.useEffect)((function(){De&&(xe(!1),re(void 0))}),[De]);var We=function(e){G.current&&"open"===K?G.current.send(JSON.stringify(e)):se(e)};Object(i.useEffect)((function(){G.current&&"open"===K&&ce&&(G.current.send(JSON.stringify(ce)),se(void 0))}),[ce,K]);var He=function(){var e=Object(r.a)(Object(a.a)().mark((function e(){var t,n,r,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Oe({hostName:p,roomUUID:h,roomName:I}),e.next=4,U.a.toDataURL(t,{type:"image/png",width:200});case 4:return n=e.sent,e.next=7,fetch(n);case 7:return r=e.sent,e.next=10,r.blob();case 10:return o=e.sent,e.next=13,navigator.clipboard.write([new ClipboardItem({"image/png":o})]);case 13:d({open:!0,message:"Image copied",type:"success",autoHideDuration:2e3}),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0),"Unexpected copy error, see detail on console",d({open:!0,message:"Unexpected copy error, see detail on console",type:"warning",autoHideDuration:2e3});case 21:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(D.a,{title:Ce}),Object($.jsxs)("div",{className:n.root,children:[Object($.jsx)(H.a,{iconType:u.a,title:Ce}),Object($.jsxs)(g.a,{container:!0,children:[Object($.jsx)(g.a,{item:!0,md:9,xs:12,children:Object($.jsx)(be,{socketState:K})}),Object($.jsx)(g.a,{item:!0,md:3,xs:12,children:Object($.jsxs)(g.a,{container:!0,justifyContent:"flex-end",alignItems:"center",className:n.toolbar,children:[Object($.jsx)(w.a,{sx:{mr:1},variant:"contained",title:"Register the team and start planning in a new room",color:"primary",disabled:!Re,onClick:function(){var e=he({hostName:X,roomName:T});c(e,{replace:!0})},children:"New"}),Object($.jsx)(w.a,{sx:{mr:1},variant:"contained",title:"Enter existing room",color:"primary",disabled:Te||!Ee,onClick:function(){return We(V(E))},children:"Join"}),Object($.jsx)(W.a,{sx:{mr:1},isDisabled:!Le,data:Oe({hostName:p,roomUUID:h,roomName:I}),Icon:j.a,hoverMessage:"Copy link to clipboard for sharing",feedbackMessage:"Link copied to clipboard, you can now share to all members"}),Object($.jsx)(w.a,{variant:"contained",title:"Copy QRCode for sharing",disabled:!Le,onClick:He,color:"primary",children:Object($.jsx)(m.a,{})})]})})]}),Object($.jsx)("div",{className:n.submitEstimate,children:we.values.map((function(e){return Object($.jsx)(ee,{isDisabled:!Ee,isSelected:ae===e,value:e,onClick:function(){return function(e){e!==ae?(re(e),We(V(E,e))):(re(void 0),We(V(E)))}(e)}},e)}))}),Object($.jsx)(v.a,{component:x.a,className:n.teamEstimates,children:Object($.jsxs)(k.a,{size:"small",children:[Object($.jsx)(y.a,{className:n.tableHeader,children:Object($.jsxs)(N.a,{children:[Object($.jsx)(ue,{component:"th",scope:"row",width:30}),Object($.jsx)(ue,{component:"th",scope:"row",children:"Team member"}),Object($.jsxs)(ue,{component:"th",scope:"row",align:"center",children:["Points",Object($.jsx)(P.a,{title:"Toggle story points visibility",disabled:!Te,onClick:function(){return xe((function(e){return!e}))},children:ve?Object($.jsx)(O.a,{}):Object($.jsx)(f.a,{})}),Object($.jsx)(P.a,{onClick:function(){return l({title:"Confirmation",description:"Are you sure you want to delete all votes?",onConfirm:function(){return We({type:"reset"})}})},title:"Clear all votes",disabled:!Te,children:Object($.jsx)(s.a,{})})]})]})}),Object($.jsxs)(C.a,{children:[Se.sort(we.sorter).map((function(e){var t=e.username,n=e.estimate,a=null!==n&&void 0!==n?n:"\u2026",r=n?"\u2714":"\u2026";return Object($.jsxs)(de,{children:[Object($.jsx)(ue,{width:30,children:Object($.jsx)(P.a,{disabled:!Te,onClick:function(){return We(function(){return{type:"remove",payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t))},title:'Remove user "'.concat(t,'"'),children:Object($.jsx)(s.a,{})})}),Object($.jsx)(ue,{children:t}),Object($.jsx)(ue,{align:"center",children:ve?a:r})]},t)})),Object($.jsxs)(de,{children:[Object($.jsx)(ue,{width:30}),Object($.jsx)(ue,{children:Object($.jsx)(S.a,{children:"Story points average"})}),Object($.jsx)(ue,{align:"center",children:Object($.jsx)(S.a,{children:ve?Ue:""})})]},"average")]})]})})]})]})}))},360:function(e,t,n){"use strict";n(0);var a=n(96),r=n(327),o=n(1),i=Object(r.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.a=function(e){var t=e.title,n=e.iconType,r=i();return Object(o.jsx)("div",{className:r.titleContainer,children:Object(o.jsxs)("div",{className:r.titleWithIcon,children:[Object(o.jsx)(n,{className:r.icon}),Object(o.jsx)(a.a,{variant:"h5",className:r.title,children:t})]})})}},363:function(e,t,n){"use strict";var a=n(28),r=n(371),o=(n(0),n(376)),i=n.n(o),c=n(334),s=n(369),l=n.n(s),u=n(140),d=n(1),m=["data","isDisabled","hoverMessage","feedbackMessage","Icon"];t.a=function(e){var t=e.data,n=e.isDisabled,o=e.hoverMessage,s=e.feedbackMessage,b=e.Icon,j=void 0===b?i.a:b,p=Object(r.a)(e,m),f=Object(u.c)().setToasterState;return Object(d.jsx)(c.a,Object(a.a)(Object(a.a)({},p),{},{onClick:function(){if(t){var e=null!==s&&void 0!==s?s:"Content copied into clipboard: ".concat(t.substring(0,25)," \u2026");l.a(t,{format:"text/plain"}),f({open:!0,message:e,type:"success",autoHideDuration:2e3})}},disabled:!t||n,title:null!==o&&void 0!==o?o:"Copy to clipboard",variant:"contained",color:"primary",children:Object(d.jsx)(j,{})}))}},429:function(e,t,n){"use strict";function a(e){return!e||0===e.trim().length}function r(e){return!a(e)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o}));var o=function(e){return!isNaN(Number(e))}}}]);
//# sourceMappingURL=37.247fa341.chunk.js.map