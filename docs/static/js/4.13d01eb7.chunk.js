(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[4],{524:function(t,e,i){"use strict";i.d(e,"a",(function(){return R}));var s=i(0),o=i(45),n=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}(),r=function(){return r=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},h={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},a={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},p={width:"20px",height:"20px",position:"absolute"},d={top:r(r({},h),{top:"-5px"}),right:r(r({},a),{left:void 0,right:"-5px"}),bottom:r(r({},h),{top:void 0,bottom:"-5px"}),left:r(r({},a),{left:"-5px"}),topRight:r(r({},p),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:r(r({},p),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:r(r({},p),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:r(r({},p),{left:"-10px",top:"-10px",cursor:"nw-resize"})},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onMouseDown=function(t){e.props.onResizeStart(t,e.props.direction)},e.onTouchStart=function(t){e.props.onResizeStart(t,e.props.direction)},e}return n(e,t),e.prototype.render=function(){return s.createElement("div",{className:this.props.className||"",style:r(r({position:"absolute",userSelect:"none"},d[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},e}(s.PureComponent),u=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}(),c=function(){return c=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)},f={width:"auto",height:"auto"},g=function(t,e,i){return Math.max(Math.min(t,i),e)},w=function(t,e){return Math.round(t/e)*e},b=function(t,e){return new RegExp(t,"i").test(e)},z=function(t){return Boolean(t.touches&&t.touches.length)},v=function(t,e,i){void 0===i&&(i=0);var s=e.reduce((function(i,s,o){return Math.abs(s-t)<Math.abs(e[i]-t)?o:i}),0),o=Math.abs(e[s]-t);return 0===i||o<i?e[s]:t},y=function(t){return"auto"===(t=t.toString())||t.endsWith("px")||t.endsWith("%")||t.endsWith("vh")||t.endsWith("vw")||t.endsWith("vmax")||t.endsWith("vmin")?t:t+"px"},m=function(t,e,i,s){if(t&&"string"===typeof t){if(t.endsWith("px"))return Number(t.replace("px",""));if(t.endsWith("%"))return e*(Number(t.replace("%",""))/100);if(t.endsWith("vw"))return i*(Number(t.replace("vw",""))/100);if(t.endsWith("vh"))return s*(Number(t.replace("vh",""))/100)}return t},x=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],S="__resizable_base__",R=function(t){function e(e){var i=t.call(this,e)||this;return i.ratio=1,i.resizable=null,i.parentLeft=0,i.parentTop=0,i.resizableLeft=0,i.resizableRight=0,i.resizableTop=0,i.resizableBottom=0,i.targetLeft=0,i.targetTop=0,i.appendBase=function(){if(!i.resizable||!i.window)return null;var t=i.parentNode;if(!t)return null;var e=i.window.document.createElement("div");return e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.transform="scale(0, 0)",e.style.left="0",e.style.flex="0 0 100%",e.classList?e.classList.add(S):e.className+=S,t.appendChild(e),e},i.removeBase=function(t){var e=i.parentNode;e&&e.removeChild(t)},i.ref=function(t){t&&(i.resizable=t)},i.state={isResizing:!1,width:"undefined"===typeof(i.propsSize&&i.propsSize.width)?"auto":i.propsSize&&i.propsSize.width,height:"undefined"===typeof(i.propsSize&&i.propsSize.height)?"auto":i.propsSize&&i.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},i.onResizeStart=i.onResizeStart.bind(i),i.onMouseMove=i.onMouseMove.bind(i),i.onMouseUp=i.onMouseUp.bind(i),i}return u(e,t),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||f},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){var t=0,e=0;if(this.resizable&&this.window){var i=this.resizable.offsetWidth,s=this.resizable.offsetHeight,o=this.resizable.style.position;"relative"!==o&&(this.resizable.style.position="relative"),t="auto"!==this.resizable.style.width?this.resizable.offsetWidth:i,e="auto"!==this.resizable.style.height?this.resizable.offsetHeight:s,this.resizable.style.position=o}return{width:t,height:e}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeStyle",{get:function(){var t=this,e=this.props.size,i=function(e){if("undefined"===typeof t.state[e]||"auto"===t.state[e])return"auto";if(t.propsSize&&t.propsSize[e]&&t.propsSize[e].toString().endsWith("%")){if(t.state[e].toString().endsWith("%"))return t.state[e].toString();var i=t.getParentSize();return Number(t.state[e].toString().replace("px",""))/i[e]*100+"%"}return y(t.state[e])};return{width:e&&"undefined"!==typeof e.width&&!this.state.isResizing?y(e.width):i("width"),height:e&&"undefined"!==typeof e.height&&!this.state.isResizing?y(e.height):i("height")}},enumerable:!1,configurable:!0}),e.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var t=this.appendBase();if(!t)return{width:0,height:0};var e=!1,i=this.parentNode.style.flexWrap;"wrap"!==i&&(e=!0,this.parentNode.style.flexWrap="wrap"),t.style.position="relative",t.style.minWidth="100%",t.style.minHeight="100%";var s={width:t.offsetWidth,height:t.offsetHeight};return e&&(this.parentNode.style.flexWrap=i),this.removeBase(t),s},e.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},e.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},e.prototype.componentDidMount=function(){if(this.resizable&&this.window){var t=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==t.flexBasis?t.flexBasis:void 0})}},e.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},e.prototype.createSizeForCssProperty=function(t,e){var i=this.propsSize&&this.propsSize[e];return"auto"!==this.state[e]||this.state.original[e]!==t||"undefined"!==typeof i&&"auto"!==i?t:"auto"},e.prototype.calculateNewMaxFromBoundary=function(t,e){var i,s,o=this.props.boundsByDirection,n=this.state.direction,r=o&&b("left",n),h=o&&b("top",n);if("parent"===this.props.bounds){var a=this.parentNode;a&&(i=r?this.resizableRight-this.parentLeft:a.offsetWidth+(this.parentLeft-this.resizableLeft),s=h?this.resizableBottom-this.parentTop:a.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(i=r?this.resizableRight:this.window.innerWidth-this.resizableLeft,s=h?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(i=r?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),s=h?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return i&&Number.isFinite(i)&&(t=t&&t<i?t:i),s&&Number.isFinite(s)&&(e=e&&e<s?e:s),{maxWidth:t,maxHeight:e}},e.prototype.calculateNewSizeFromDirection=function(t,e){var i=this.props.scale||1,s=this.props.resizeRatio||1,o=this.state,n=o.direction,r=o.original,h=this.props,a=h.lockAspectRatio,p=h.lockAspectRatioExtraHeight,d=h.lockAspectRatioExtraWidth,l=r.width,u=r.height,c=p||0,f=d||0;return b("right",n)&&(l=r.width+(t-r.x)*s/i,a&&(u=(l-f)/this.ratio+c)),b("left",n)&&(l=r.width-(t-r.x)*s/i,a&&(u=(l-f)/this.ratio+c)),b("bottom",n)&&(u=r.height+(e-r.y)*s/i,a&&(l=(u-c)*this.ratio+f)),b("top",n)&&(u=r.height-(e-r.y)*s/i,a&&(l=(u-c)*this.ratio+f)),{newWidth:l,newHeight:u}},e.prototype.calculateNewSizeFromAspectRatio=function(t,e,i,s){var o=this.props,n=o.lockAspectRatio,r=o.lockAspectRatioExtraHeight,h=o.lockAspectRatioExtraWidth,a="undefined"===typeof s.width?10:s.width,p="undefined"===typeof i.width||i.width<0?t:i.width,d="undefined"===typeof s.height?10:s.height,l="undefined"===typeof i.height||i.height<0?e:i.height,u=r||0,c=h||0;if(n){var f=(d-u)*this.ratio+c,w=(l-u)*this.ratio+c,b=(a-c)/this.ratio+u,z=(p-c)/this.ratio+u,v=Math.max(a,f),y=Math.min(p,w),m=Math.max(d,b),x=Math.min(l,z);t=g(t,v,y),e=g(e,m,x)}else t=g(t,a,p),e=g(e,d,l);return{newWidth:t,newHeight:e}},e.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var t=this.parentNode;if(t){var e=t.getBoundingClientRect();this.parentLeft=e.left,this.parentTop=e.top}}if(this.props.bounds&&"string"!==typeof this.props.bounds){var i=this.props.bounds.getBoundingClientRect();this.targetLeft=i.left,this.targetTop=i.top}if(this.resizable){var s=this.resizable.getBoundingClientRect(),o=s.left,n=s.top,r=s.right,h=s.bottom;this.resizableLeft=o,this.resizableRight=r,this.resizableTop=n,this.resizableBottom=h}},e.prototype.onResizeStart=function(t,e){if(this.resizable&&this.window){var i,s=0,o=0;if(t.nativeEvent&&function(t){return Boolean((t.clientX||0===t.clientX)&&(t.clientY||0===t.clientY))}(t.nativeEvent)?(s=t.nativeEvent.clientX,o=t.nativeEvent.clientY):t.nativeEvent&&z(t.nativeEvent)&&(s=t.nativeEvent.touches[0].clientX,o=t.nativeEvent.touches[0].clientY),this.props.onResizeStart)if(this.resizable)if(!1===this.props.onResizeStart(t,e,this.resizable))return;this.props.size&&("undefined"!==typeof this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),"undefined"!==typeof this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"===typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var n=this.window.getComputedStyle(this.resizable);if("auto"!==n.flexBasis){var r=this.parentNode;if(r){var h=this.window.getComputedStyle(r).flexDirection;this.flexDir=h.startsWith("row")?"row":"column",i=n.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var a={original:{x:s,y:o,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:c(c({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(t.target).cursor||"auto"}),direction:e,flexBasis:i};this.setState(a)}},e.prototype.onMouseMove=function(t){var e=this;if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&z(t))try{t.preventDefault(),t.stopPropagation()}catch(L){}var i=this.props,s=i.maxWidth,n=i.maxHeight,r=i.minWidth,h=i.minHeight,a=z(t)?t.touches[0].clientX:t.clientX,p=z(t)?t.touches[0].clientY:t.clientY,d=this.state,l=d.direction,u=d.original,c=d.width,f=d.height,g=this.getParentSize(),b=function(t,e,i,s,o,n,r){return s=m(s,t.width,e,i),o=m(o,t.height,e,i),n=m(n,t.width,e,i),r=m(r,t.height,e,i),{maxWidth:"undefined"===typeof s?void 0:Number(s),maxHeight:"undefined"===typeof o?void 0:Number(o),minWidth:"undefined"===typeof n?void 0:Number(n),minHeight:"undefined"===typeof r?void 0:Number(r)}}(g,this.window.innerWidth,this.window.innerHeight,s,n,r,h);s=b.maxWidth,n=b.maxHeight,r=b.minWidth,h=b.minHeight;var y=this.calculateNewSizeFromDirection(a,p),x=y.newHeight,S=y.newWidth,R=this.calculateNewMaxFromBoundary(s,n);this.props.snap&&this.props.snap.x&&(S=v(S,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(x=v(x,this.props.snap.y,this.props.snapGap));var W=this.calculateNewSizeFromAspectRatio(S,x,{width:R.maxWidth,height:R.maxHeight},{width:r,height:h});if(S=W.newWidth,x=W.newHeight,this.props.grid){var M=w(S,this.props.grid[0]),E=w(x,this.props.grid[1]),N=this.props.snapGap||0;S=0===N||Math.abs(M-S)<=N?M:S,x=0===N||Math.abs(E-x)<=N?E:x}var H={width:S-u.width,height:x-u.height};if(c&&"string"===typeof c)if(c.endsWith("%"))S=S/g.width*100+"%";else if(c.endsWith("vw")){S=S/this.window.innerWidth*100+"vw"}else if(c.endsWith("vh")){S=S/this.window.innerHeight*100+"vh"}if(f&&"string"===typeof f)if(f.endsWith("%"))x=x/g.height*100+"%";else if(f.endsWith("vw")){x=x/this.window.innerWidth*100+"vw"}else if(f.endsWith("vh")){x=x/this.window.innerHeight*100+"vh"}var B={width:this.createSizeForCssProperty(S,"width"),height:this.createSizeForCssProperty(x,"height")};"row"===this.flexDir?B.flexBasis=B.width:"column"===this.flexDir&&(B.flexBasis=B.height),Object(o.flushSync)((function(){e.setState(B)})),this.props.onResize&&this.props.onResize(t,l,this.resizable,H)}},e.prototype.onMouseUp=function(t){var e=this.state,i=e.isResizing,s=e.direction,o=e.original;if(i&&this.resizable){var n={width:this.size.width-o.width,height:this.size.height-o.height};this.props.onResizeStop&&this.props.onResizeStop(t,s,this.resizable,n),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:c(c({},this.state.backgroundStyle),{cursor:"auto"})})}},e.prototype.updateSize=function(t){this.setState({width:t.width,height:t.height})},e.prototype.renderResizer=function(){var t=this,e=this.props,i=e.enable,o=e.handleStyles,n=e.handleClasses,r=e.handleWrapperStyle,h=e.handleWrapperClass,a=e.handleComponent;if(!i)return null;var p=Object.keys(i).map((function(e){return!1!==i[e]?s.createElement(l,{key:e,direction:e,onResizeStart:t.onResizeStart,replaceStyles:o&&o[e],className:n&&n[e]},a&&a[e]?a[e]:null):null}));return s.createElement("div",{className:h,style:r},p)},e.prototype.render=function(){var t=this,e=Object.keys(this.props).reduce((function(e,i){return-1!==x.indexOf(i)||(e[i]=t.props[i]),e}),{}),i=c(c(c({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(i.flexBasis=this.state.flexBasis);var o=this.props.as||"div";return s.createElement(o,c({ref:this.ref,style:i,className:this.props.className},e),this.state.isResizing&&s.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},e.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},e}(s.PureComponent)}}]);
//# sourceMappingURL=4.13d01eb7.chunk.js.map