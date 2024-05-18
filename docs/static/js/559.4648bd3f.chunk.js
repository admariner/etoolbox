"use strict";(self.webpackChunkweb_toolbox=self.webpackChunkweb_toolbox||[]).push([[559],{84142:(e,t,o)=>{o.d(t,{A:()=>S});var l=o(98587),r=o(58168),n=o(9950),i=o(72004),a=o(74061),s=o(24184),c=o(61676),d=o(48283),u=o(59254),b=o(80863),p=o(68483);function f(e){return(0,p.Ay)("MuiTab",e)}const h=(0,b.A)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);var v=o(44414);const m=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],w=(0,u.Ay)(s.A,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t["textColor".concat((0,c.A)(o.textColor))],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((e=>{let{theme:t,ownerState:o}=e;return(0,r.A)({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},o.label&&{flexDirection:"top"===o.iconPosition||"bottom"===o.iconPosition?"column":"row"},{lineHeight:1.25},o.icon&&o.label&&{minHeight:72,paddingTop:9,paddingBottom:9,["& > .".concat(h.iconWrapper)]:(0,r.A)({},"top"===o.iconPosition&&{marginBottom:6},"bottom"===o.iconPosition&&{marginTop:6},"start"===o.iconPosition&&{marginRight:t.spacing(1)},"end"===o.iconPosition&&{marginLeft:t.spacing(1)})},"inherit"===o.textColor&&{color:"inherit",opacity:.6,["&.".concat(h.selected)]:{opacity:1},["&.".concat(h.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity}},"primary"===o.textColor&&{color:(t.vars||t).palette.text.secondary,["&.".concat(h.selected)]:{color:(t.vars||t).palette.primary.main},["&.".concat(h.disabled)]:{color:(t.vars||t).palette.text.disabled}},"secondary"===o.textColor&&{color:(t.vars||t).palette.text.secondary,["&.".concat(h.selected)]:{color:(t.vars||t).palette.secondary.main},["&.".concat(h.disabled)]:{color:(t.vars||t).palette.text.disabled}},o.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},o.wrapped&&{fontSize:t.typography.pxToRem(12)})})),S=n.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiTab"}),{className:s,disabled:u=!1,disableFocusRipple:b=!1,fullWidth:p,icon:h,iconPosition:S="top",indicator:x,label:A,onChange:g,onClick:y,onFocus:C,selected:B,selectionFollowsFocus:M,textColor:I="inherit",value:W,wrapped:E=!1}=o,R=(0,l.A)(o,m),T=(0,r.A)({},o,{disabled:u,disableFocusRipple:b,selected:B,icon:!!h,iconPosition:S,label:!!A,fullWidth:p,textColor:I,wrapped:E}),N=(e=>{const{classes:t,textColor:o,fullWidth:l,wrapped:r,icon:n,label:i,selected:s,disabled:d}=e,u={root:["root",n&&i&&"labelIcon","textColor".concat((0,c.A)(o)),l&&"fullWidth",r&&"wrapped",s&&"selected",d&&"disabled"],iconWrapper:["iconWrapper"]};return(0,a.A)(u,f,t)})(T),P=h&&A&&n.isValidElement(h)?n.cloneElement(h,{className:(0,i.A)(N.iconWrapper,h.props.className)}):h;return(0,v.jsxs)(w,(0,r.A)({focusRipple:!b,className:(0,i.A)(N.root,s),ref:t,role:"tab","aria-selected":B,disabled:u,onClick:e=>{!B&&g&&g(e,W),y&&y(e)},onFocus:e=>{M&&!B&&g&&g(e,W),C&&C(e)},ownerState:T,tabIndex:B?0:-1},R,{children:["top"===S||"start"===S?(0,v.jsxs)(n.Fragment,{children:[P,A]}):(0,v.jsxs)(n.Fragment,{children:[A,P]}),x]}))}))},38200:(e,t,o)=>{o.d(t,{A:()=>_});var l=o(98587),r=o(58168),n=o(9950),i=(o(26429),o(72004)),a=o(43161),s=o(74061),c=o(44730),d=o(59254),u=o(48283),b=o(14857),p=o(21209);let f;function h(){if(f)return f;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),f="reverse",e.scrollLeft>0?f="default":(e.scrollLeft=1,0===e.scrollLeft&&(f="negative")),document.body.removeChild(e),f}function v(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(h()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var w=o(79044),S=o(70827),x=o(44414);const A=["onChange"],g={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var y=o(30099),C=o(88090),B=o(24184),M=o(80863),I=o(68483);function W(e){return(0,I.Ay)("MuiTabScrollButton",e)}const E=(0,M.A)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),R=["className","slots","slotProps","direction","orientation","disabled"],T=(0,d.Ay)(B.A,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})((e=>{let{ownerState:t}=e;return(0,r.A)({width:40,flexShrink:0,opacity:.8,["&.".concat(E.disabled)]:{opacity:0}},"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})})),N=n.forwardRef((function(e,t){var o,n;const d=(0,u.A)({props:e,name:"MuiTabScrollButton"}),{className:b,slots:p={},slotProps:f={},direction:h}=d,v=(0,l.A)(d,R),m=(0,c.I)(),w=(0,r.A)({isRtl:m},d),S=(e=>{const{classes:t,orientation:o,disabled:l}=e,r={root:["root",o,l&&"disabled"]};return(0,s.A)(r,W,t)})(w),A=null!=(o=p.StartScrollButtonIcon)?o:y.A,g=null!=(n=p.EndScrollButtonIcon)?n:C.A,B=(0,a.Q)({elementType:A,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:w}),M=(0,a.Q)({elementType:g,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:w});return(0,x.jsx)(T,(0,r.A)({component:"div",className:(0,i.A)(S.root,b),ref:t,role:null,ownerState:w,tabIndex:null},v,{children:"left"===h?(0,x.jsx)(A,(0,r.A)({},B)):(0,x.jsx)(g,(0,r.A)({},M))}))}));var P=o(1976);function k(e){return(0,I.Ay)("MuiTabs",e)}const F=(0,M.A)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var L=o(27402);const z=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],H=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,j=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,X=(e,t,o)=>{let l=!1,r=o(e,t);for(;r;){if(r===e.firstChild){if(l)return;l=!0}const t=r.disabled||"true"===r.getAttribute("aria-disabled");if(r.hasAttribute("tabindex")&&!t)return void r.focus();r=o(e,r)}},Y=(0,d.Ay)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{["& .".concat(F.scrollButtons)]:t.scrollButtons},{["& .".concat(F.scrollButtons)]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((e=>{let{ownerState:t,theme:o}=e;return(0,r.A)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{["& .".concat(F.scrollButtons)]:{[o.breakpoints.down("sm")]:{display:"none"}}})})),D=(0,d.Ay)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((e=>{let{ownerState:t}=e;return(0,r.A)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})})),O=(0,d.Ay)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((e=>{let{ownerState:t}=e;return(0,r.A)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})})),V=(0,d.Ay)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((e=>{let{ownerState:t,theme:o}=e;return(0,r.A)({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})})),Q=(0,d.Ay)((function(e){const{onChange:t}=e,o=(0,l.A)(e,A),i=n.useRef(),a=n.useRef(null),s=()=>{i.current=a.current.offsetHeight-a.current.clientHeight};return(0,w.A)((()=>{const e=(0,p.A)((()=>{const e=i.current;s(),e!==i.current&&t(i.current)})),o=(0,S.A)(a.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{s(),t(i.current)}),[t]),(0,x.jsx)("div",(0,r.A)({style:g,ref:a},o))}))({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),q={};const _=n.forwardRef((function(e,t){const o=(0,u.A)({props:e,name:"MuiTabs"}),d=(0,b.A)(),f=(0,c.I)(),{"aria-label":w,"aria-labelledby":A,action:g,centered:y=!1,children:C,className:B,component:M="div",allowScrollButtonsMobile:I=!1,indicatorColor:W="primary",onChange:E,orientation:R="horizontal",ScrollButtonComponent:T=N,scrollButtons:F="auto",selectionFollowsFocus:_,slots:G={},slotProps:K={},TabIndicatorProps:U={},TabScrollButtonProps:J={},textColor:Z="primary",value:$,variant:ee="standard",visibleScrollbar:te=!1}=o,oe=(0,l.A)(o,z),le="scrollable"===ee,re="vertical"===R,ne=re?"scrollTop":"scrollLeft",ie=re?"top":"left",ae=re?"bottom":"right",se=re?"clientHeight":"clientWidth",ce=re?"height":"width",de=(0,r.A)({},o,{component:M,allowScrollButtonsMobile:I,indicatorColor:W,orientation:R,vertical:re,scrollButtons:F,textColor:Z,variant:ee,visibleScrollbar:te,fixed:!le,hideScrollbar:le&&!te,scrollableX:le&&!re,scrollableY:le&&re,centered:y&&!le,scrollButtonsHideMobile:!I}),ue=(e=>{const{vertical:t,fixed:o,hideScrollbar:l,scrollableX:r,scrollableY:n,centered:i,scrollButtonsHideMobile:a,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",l&&"hideScrollbar",r&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[r&&"scrollableX"],hideScrollbar:[l&&"hideScrollbar"]};return(0,s.A)(d,k,c)})(de),be=(0,a.Q)({elementType:G.StartScrollButtonIcon,externalSlotProps:K.startScrollButtonIcon,ownerState:de}),pe=(0,a.Q)({elementType:G.EndScrollButtonIcon,externalSlotProps:K.endScrollButtonIcon,ownerState:de});const[fe,he]=n.useState(!1),[ve,me]=n.useState(q),[we,Se]=n.useState(!1),[xe,Ae]=n.useState(!1),[ge,ye]=n.useState(!1),[Ce,Be]=n.useState({overflow:"hidden",scrollbarWidth:0}),Me=new Map,Ie=n.useRef(null),We=n.useRef(null),Ee=()=>{const e=Ie.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:v(e,f?"rtl":"ltr"),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==$){const e=We.current.children;if(e.length>0){const t=e[Me.get($)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},Re=(0,P.A)((()=>{const{tabsMeta:e,tabMeta:t}=Ee();let o,l=0;if(re)o="top",t&&e&&(l=t.top-e.top+e.scrollTop);else if(o=f?"right":"left",t&&e){const r=f?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;l=(f?-1:1)*(t[o]-e[o]+r)}const r={[o]:l,[ce]:t?t[ce]:0};if(isNaN(ve[o])||isNaN(ve[ce]))me(r);else{const e=Math.abs(ve[o]-r[o]),t=Math.abs(ve[ce]-r[ce]);(e>=1||t>=1)&&me(r)}})),Te=function(e){let{animation:t=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t?function(e,t,o){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:()=>{};const{ease:n=m,duration:i=300}=l;let a=null;const s=t[e];let c=!1;const d=()=>{c=!0},u=l=>{if(c)return void r(new Error("Animation cancelled"));null===a&&(a=l);const d=Math.min(1,(l-a)/i);t[e]=n(d)*(o-s)+s,d>=1?requestAnimationFrame((()=>{r(null)})):requestAnimationFrame(u)};s===o?r(new Error("Element already at target position")):requestAnimationFrame(u)}(ne,Ie.current,e,{duration:d.transitions.duration.standard}):Ie.current[ne]=e},Ne=e=>{let t=Ie.current[ne];re?t+=e:(t+=e*(f?-1:1),t*=f&&"reverse"===h()?-1:1),Te(t)},Pe=()=>{const e=Ie.current[se];let t=0;const o=Array.from(We.current.children);for(let l=0;l<o.length;l+=1){const r=o[l];if(t+r[se]>e){0===l&&(t=e);break}t+=r[se]}return t},ke=()=>{Ne(-1*Pe())},Fe=()=>{Ne(Pe())},Le=n.useCallback((e=>{Be({overflow:null,scrollbarWidth:e})}),[]),ze=(0,P.A)((e=>{const{tabsMeta:t,tabMeta:o}=Ee();if(o&&t)if(o[ie]<t[ie]){const l=t[ne]+(o[ie]-t[ie]);Te(l,{animation:e})}else if(o[ae]>t[ae]){const l=t[ne]+(o[ae]-t[ae]);Te(l,{animation:e})}})),He=(0,P.A)((()=>{le&&!1!==F&&ye(!ge)}));n.useEffect((()=>{const e=(0,p.A)((()=>{Ie.current&&Re()}));let t;const o=o=>{o.forEach((e=>{e.removedNodes.forEach((e=>{var o;null==(o=t)||o.unobserve(e)})),e.addedNodes.forEach((e=>{var o;null==(o=t)||o.observe(e)}))})),e(),He()},l=(0,S.A)(Ie.current);let r;return l.addEventListener("resize",e),"undefined"!==typeof ResizeObserver&&(t=new ResizeObserver(e),Array.from(We.current.children).forEach((e=>{t.observe(e)}))),"undefined"!==typeof MutationObserver&&(r=new MutationObserver(o),r.observe(We.current,{childList:!0})),()=>{var o,n;e.clear(),l.removeEventListener("resize",e),null==(o=r)||o.disconnect(),null==(n=t)||n.disconnect()}}),[Re,He]),n.useEffect((()=>{const e=Array.from(We.current.children),t=e.length;if("undefined"!==typeof IntersectionObserver&&t>0&&le&&!1!==F){const o=e[0],l=e[t-1],r={root:Ie.current,threshold:.99},n=new IntersectionObserver((e=>{Se(!e[0].isIntersecting)}),r);n.observe(o);const i=new IntersectionObserver((e=>{Ae(!e[0].isIntersecting)}),r);return i.observe(l),()=>{n.disconnect(),i.disconnect()}}}),[le,F,ge,null==C?void 0:C.length]),n.useEffect((()=>{he(!0)}),[]),n.useEffect((()=>{Re()})),n.useEffect((()=>{ze(q!==ve)}),[ze,ve]),n.useImperativeHandle(g,(()=>({updateIndicator:Re,updateScrollButtons:He})),[Re,He]);const je=(0,x.jsx)(V,(0,r.A)({},U,{className:(0,i.A)(ue.indicator,U.className),ownerState:de,style:(0,r.A)({},ve,U.style)}));let Xe=0;const Ye=n.Children.map(C,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?Xe:e.props.value;Me.set(t,Xe);const o=t===$;return Xe+=1,n.cloneElement(e,(0,r.A)({fullWidth:"fullWidth"===ee,indicator:o&&!fe&&je,selected:o,selectionFollowsFocus:_,onChange:E,textColor:Z,value:t},1!==Xe||!1!==$||e.props.tabIndex?{}:{tabIndex:0}))})),De=(()=>{const e={};e.scrollbarSizeListener=le?(0,x.jsx)(Q,{onChange:Le,className:(0,i.A)(ue.scrollableX,ue.hideScrollbar)}):null;const t=le&&("auto"===F&&(we||xe)||!0===F);return e.scrollButtonStart=t?(0,x.jsx)(T,(0,r.A)({slots:{StartScrollButtonIcon:G.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:be},orientation:R,direction:f?"right":"left",onClick:ke,disabled:!we},J,{className:(0,i.A)(ue.scrollButtons,J.className)})):null,e.scrollButtonEnd=t?(0,x.jsx)(T,(0,r.A)({slots:{EndScrollButtonIcon:G.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:pe},orientation:R,direction:f?"left":"right",onClick:Fe,disabled:!xe},J,{className:(0,i.A)(ue.scrollButtons,J.className)})):null,e})();return(0,x.jsxs)(Y,(0,r.A)({className:(0,i.A)(ue.root,B),ownerState:de,ref:t,as:M},oe,{children:[De.scrollButtonStart,De.scrollbarSizeListener,(0,x.jsxs)(D,{className:ue.scroller,ownerState:de,style:{overflow:Ce.overflow,[re?"margin".concat(f?"Left":"Right"):"marginBottom"]:te?void 0:-Ce.scrollbarWidth},ref:Ie,children:[(0,x.jsx)(O,{"aria-label":w,"aria-labelledby":A,"aria-orientation":"vertical"===R?"vertical":null,className:ue.flexContainer,ownerState:de,onKeyDown:e=>{const t=We.current,o=(0,L.A)(t).activeElement;if("tab"!==o.getAttribute("role"))return;let l="horizontal"===R?"ArrowLeft":"ArrowUp",r="horizontal"===R?"ArrowRight":"ArrowDown";switch("horizontal"===R&&f&&(l="ArrowRight",r="ArrowLeft"),e.key){case l:e.preventDefault(),X(t,o,j);break;case r:e.preventDefault(),X(t,o,H);break;case"Home":e.preventDefault(),X(t,null,H);break;case"End":e.preventDefault(),X(t,null,j)}},ref:We,role:"tablist",children:Ye}),fe&&je]}),De.scrollButtonEnd]}))}))}}]);