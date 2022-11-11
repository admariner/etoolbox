"use strict";(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[508],{87591:function(e,t,n){var r=n(47313),a=n(42669),o=(0,n(48070).Z)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:e.spacing(1)},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}}));t.Z=function(e){var t=e.title,n=e.iconType,l=o();return r.createElement("div",{className:l.titleWithIcon},r.createElement(n,{className:l.icon}),r.createElement(a.Z,{variant:"h5",className:l.title},t))}},37508:function(e,t,n){n.r(t),n.d(t,{default:function(){return R},mapDispatchToProps:function(){return T},mapStateToProps:function(){return N}});var r=n(93433),a=n(29439),o=n(47313),l=n(48268),c=n(32415),u=n(44874),i=n(53805),s=n(39874),m=n(90495),p=n(59629),h=n(67881),f=n(90182),d=n(66135),Z=n(58506),v=n(87591),E=n(63063);var g=n(37982),w=n(46241),b=n(48070),k=(0,w.Z)((function(e){return{body:{fontSize:e.spacing(1.75),whiteSpace:"normal",wordBreak:"break-word"}}}))(g.Z),y=(0,w.Z)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(p.Z),x=(0,b.Z)((function(e){return{root:{margin:e.spacing(1)},panel:{marginBottom:e.spacing(3)},tableHeader:{backgroundColor:e.palette.primary.main}}}));function N(e){return{inputText:e.textInputs.lastUrlParserValue}}function T(e){return{storeInputText:function(t,n){return e((0,Z.j)(t,n))}}}var R=(0,d.$j)(N,T)((function(e){var t=e.inputText,n=e.storeInputText,d="URL Parser",Z=x(),g=(0,E.NR)("md"),w=o.useState(new Map),b=(0,a.Z)(w,2),N=b[0],T=b[1],R=o.useState(new Map),H=(0,a.Z)(R,2),M=H[0],P=H[1];return o.useEffect((function(){T(function(e){var t=new Map;if(!e)return t;try{var n=new URL(e);t.set("host",n.host),t.set("protocol",n.protocol),t.set("hash",n.hash),t.set("origin",n.origin),t.set("pathname",n.pathname),t.set("port",n.port?n.port:"<default>"),t.set("search",n.search)}catch(r){}return t}(t)),P(function(e){var t=new Map;if(!e)return t;try{new URL(e).searchParams.forEach((function(e,n){return t.set(n,e)}))}catch(n){}return t}(t))}),[t]),o.createElement(o.Fragment,null,o.createElement(f.q,{title:d}),o.createElement("div",{className:Z.root},o.createElement(v.Z,{iconType:l.Z,title:d}),o.createElement(h.Z,{autoFocus:g,label:"URL",placeholder:"Paste or type the url here",multiline:!0,minRows:4,maxRows:g?20:4,variant:"outlined",margin:"normal",fullWidth:!0,value:t,className:Z.panel,onChange:function(e){return n("lastUrlParserValue",e.target.value)}}),o.createElement(s.Z,{component:c.Z,className:Z.panel},o.createElement(u.Z,{size:g?"medium":"small"},o.createElement(m.Z,{className:Z.tableHeader},o.createElement(p.Z,null,o.createElement(k,null,"Fragment"),o.createElement(k,null,"Value"))),o.createElement(i.Z,null,(0,r.Z)(N.keys()).sort().map((function(e){return o.createElement(y,{key:e},o.createElement(k,{component:"th",scope:"row"},e),o.createElement(k,null,N.get(e)))}))))),o.createElement(s.Z,{component:c.Z},o.createElement(u.Z,{size:g?"medium":"small"},o.createElement(m.Z,{className:Z.tableHeader},o.createElement(p.Z,null,o.createElement(k,null,"Parameter"),o.createElement(k,null,"Value"))),o.createElement(i.Z,null,(0,r.Z)(M.keys()).sort().map((function(e){return o.createElement(y,{key:e},o.createElement(k,{component:"th",scope:"row"},e),o.createElement(k,null,M.get(e)))})))))))}))},48268:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45045)),o=n(46417),l=(0,a.default)((0,o.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.Z=l},90495:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),a=n(63366),o=n(47313),l=n(83061),c=n(21921),u=n(88976),i=n(53010),s=n(42379),m=n(77430),p=n(32298);function h(e){return(0,p.Z)("MuiTableHead",e)}(0,m.Z)("MuiTableHead",["root"]);var f=n(46417),d=["className","component"],Z=(0,s.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),v={variant:"head"},E="thead",g=o.forwardRef((function(e,t){var n=(0,i.Z)({props:e,name:"MuiTableHead"}),o=n.className,s=n.component,m=void 0===s?E:s,p=(0,a.Z)(n,d),g=(0,r.Z)({},n,{component:m}),w=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},h,t)}(g);return(0,f.jsx)(u.Z.Provider,{value:v,children:(0,f.jsx)(Z,(0,r.Z)({as:m,className:(0,l.Z)(w.root,o),ref:t,role:m===E?null:"rowgroup",ownerState:g},p))})}))}}]);