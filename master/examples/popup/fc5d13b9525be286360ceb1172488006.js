!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=1046)}({10:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var r=t(67),i=o(r),s=t(64),a=o(s),u=t(62),c=o(u),l=t(21),f=o(l);n.default=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":(0,f.default)(n)));e.prototype=(0,c.default)(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(a.default?(0,a.default)(e,n):(0,i.default)(e,n))}},100:function(e,n,t){"use strict";function o(){var e=void 0,n=void 0;return function(t){e=t,n||(n=window.requestAnimationFrame(function(){e(),n=null,e=null}))}}n.a=o},101:function(e,n,t){t(19),t(103),e.exports=t(9).Array.from},103:function(e,n,t){e.exports=t(2)(463)},104:function(e,n,t){e.exports={default:t(199),__esModule:!0}},1046:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(3),r=t.n(o),i=t(22),s=(t.n(i),t(205)),a=s.a.PopupProps.Directions,u=r.a.createElement("span",{className:"popup"},"This is a popup"),c=r.a.createElement("div",null,r.a.createElement("div",{className:"message"},"Popup should change open direction when reaching window borders",r.a.createElement(s.a,{directions:[a.TOP_CENTER]},u)),r.a.createElement("div",{className:"message vert"},"Popup should change open direction when reaching window borders",r.a.createElement(s.a,{directions:[a.RIGHT_CENTER]},u)),r.a.createElement("div",{className:"anchor left"},"Left side open popup",r.a.createElement(s.a,{directions:[a.LEFT_BOTTOM,a.RIGHT_BOTTOM]},u)),r.a.createElement("div",{className:"anchor right"},"Right side open popup",r.a.createElement(s.a,{directions:[a.RIGHT_BOTTOM,a.LEFT_BOTTOM]},u)),r.a.createElement("div",{className:"anchor bottom"},"Downside open popup",r.a.createElement(s.a,{directions:[a.BOTTOM_RIGHT,a.TOP_LEFT]},u)),r.a.createElement("div",{className:"anchor top"},"Upside open popup",r.a.createElement(s.a,{directions:[a.TOP_LEFT,a.BOTTOM_RIGHT]},u)));t.i(i.render)(c,document.getElementById("example"))},11:function(e,n,t){"use strict";n.__esModule=!0;var o=t(21),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==(void 0===n?"undefined":(0,r.default)(n))&&"function"!=typeof n?e:n}},12:function(e,n){function t(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var o=t(n,e);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},13:function(e,n,t){e.exports=t(2)(396)},14:function(e,n,t){"use strict";n.__esModule=!0;var o=t(23),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default=r.default||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}},15:function(e,n,t){n=e.exports=t(12)(!1),n.push([e.i,':root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},17:function(e,n,t){function o(e,n){for(var t=0;t<e.length;t++){var o=e[t],r=g[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],n))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(f(o.parts[i],n));g[o.id]={id:o.id,refs:1,parts:s}}}}function r(e,n){for(var t=[],o={},r=0;r<e.length;r++){var i=e[r],s=n.base?i[0]+n.base:i[0],a=i[1],u=i[2],c=i[3],l={css:a,media:u,sourceMap:c};o[s]?o[s].parts.push(l):t.push(o[s]={id:s,parts:[l]})}return t}function i(e,n){var t=_(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=T[T.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),T.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=_(e.insertAt.before,t);t.insertBefore(n,r)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=T.indexOf(e);n>=0&&T.splice(n,1)}function a(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var t=l();t&&(e.attrs.nonce=t)}return c(n,e.attrs),i(e,n),n}function u(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",c(n,e.attrs),i(e,n),n}function c(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function l(){return t.nc}function f(e,n){var t,o,r,i;if(n.transform&&e.css){if(!(i=n.transform(e.css)))return function(){};e.css=i}if(n.singleton){var c=y++;t=b||(b=a(n)),o=p.bind(null,t,c,!1),r=p.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=u(n),o=h.bind(null,t,n),r=function(){s(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(n),o=d.bind(null,t),r=function(){s(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}function p(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=O(n,r);else{var i=document.createTextNode(r),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function d(e,n){var t=n.css,o=n.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function h(e,n,t){var o=t.css,r=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=x(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var g={},m=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e,n){return n?n.querySelector(e):document.querySelector(e)},_=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var o=v.call(this,e,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}}(),b=null,y=0,T=[],x=t(59);e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=m()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=r(e,n);return o(t,n),function(e){for(var i=[],s=0;s<t.length;s++){var a=t[s],u=g[a.id];u.refs--,i.push(u)}e&&o(r(e,n),n);for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete g[u.id]}}}};var O=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},18:function(e,n,t){"use strict";n.__esModule=!0;var o=t(26),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default=function(e,n,t){return n in e?(0,r.default)(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},19:function(e,n,t){e.exports=t(2)(566)},199:function(e,n,t){t(24),t(19),t(20),t(200),t(203),t(202),t(201),e.exports=t(9).Set},2:function(e,n){e.exports=vendor_lib},20:function(e,n,t){e.exports=t(2)(645)},200:function(e,n,t){e.exports=t(2)(225)},201:function(e,n,t){e.exports=t(2)(629)},202:function(e,n,t){e.exports=t(2)(630)},203:function(e,n,t){e.exports=t(2)(631)},204:function(e,n,t){e.exports=t(2)(818)},205:function(e,n,t){"use strict";var o=t(18),r=t.n(o),i=t(83),s=t.n(i),a=t(14),u=t.n(a),c=t(8),l=t.n(c),f=t(4),p=t.n(f),d=t(5),h=t.n(d),g=t(11),m=t.n(g),v=t(10),_=t.n(v),b=t(3),y=t.n(b),T=t(22),x=(t.n(T),t(6)),O=t.n(x),w=t(13),E=t.n(w),M=t(33),R=(t.n(M),t(58)),C=(t.n(R),t(35)),k=t(100),S=t(37),P=t(51),H=t(25),L=t(209),I=t(254),N=t.n(I),A=function(e){return e.stopPropagation()},B=function(e){function n(){var e,o,r,i;p()(this,n);for(var a=arguments.length,c=Array(a),f=0;f<a;f++)c[f]=arguments[f];return o=r=m()(this,(e=n.__proto__||l()(n)).call.apply(e,[this].concat(c))),r.state={shortcuts:r.props.shortcuts&&!r.props.hidden,display:L.a.SHOWING},r.listeners=new S.c,r.redrawScheduler=t.i(k.a)(),r.uid=t.i(C.a)("popup-"),r.calculateDisplay=function(e){return u()({},e,{display:r.props.hidden?L.a.SHOWING:L.a.SHOWN})},r.portalRef=function(e){r.node=e,r.parent=e&&e.parentElement,e&&r.getContainer()&&r._redraw()},r.popupRef=function(e){r.popup=e,r._redraw()},r.containerRef=function(e){r.container=e},r._updatePosition=function(){if(r.popup){if(r.isVisible()){var e=r.position();s()(e).forEach(function(n){var t=e[n];r.popup.style[n]="number"==typeof t?t+"px":t.toString()})}r.setState(r.calculateDisplay)}},r._redraw=function(){r.isVisible()&&r.redrawScheduler(r._updatePosition)},r._onEscPress=function(e){r.props.onEscPress(e),r._onCloseAttempt(e,!0)},r._onDocumentClick=function(e){r.container&&r.container.contains(e.target)||!r._listenersEnabled||r.props.dontCloseOnAnchorClick&&r._getAnchor()&&r._getAnchor().contains(e.target)||(r.props.onOutsideClick(e),r._onCloseAttempt(e,!1))},r.shortcutsScope=r.uid,r.shortcutsMap={esc:r._onEscPress},i=o,m()(r,i)}return _()(n,e),h()(n,[{key:"getChildContext",value:function(){return{ringPopupTarget:this.uid}}},{key:"componentDidMount",value:function(){this.setState({client:!0}),this.props.hidden||this._setListenersEnabled(!0)}},{key:"componentWillUpdate",value:function(e){var n=e.shortcuts&&!e.hidden;this.state.shortcuts!==n&&this.setState({shortcuts:n})}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var n=this.props.hidden;e.hidden!==n&&this._setListenersEnabled(!n),this._redraw()}}},{key:"componentWillUnmount",value:function(){this._setListenersEnabled(!1),this.popup=null}},{key:"getContainer",value:function(){var e=this.props.target||this.context.ringPopupTarget;return e&&document.querySelector("[data-portaltarget="+e+"]")}},{key:"position",value:function(){var e=this,n=L.b.reduce(function(n,t){return n[t]=e.props[t],n},{}),o=this.getContainer();return t.i(L.c)(u()({popup:this.popup,container:o&&"static"!==t.i(S.d)(o).position?o:null,anchor:this._getAnchor()},n))}},{key:"_getAnchor",value:function(){return this.props.anchorElement||this.parent}},{key:"_setListenersEnabled",value:function(e){var n=this;if(e&&!this._listenersEnabled)return void setTimeout(function(){n._listenersEnabled=!0,n.listeners.add(window,"resize",n._redraw),n.listeners.add(window,"scroll",n._redraw),n.listeners.add(document,"click",n._onDocumentClick);for(var e=n._getAnchor();e;)n.listeners.add(e,"scroll",n._redraw),e=e.parentElement},0);!e&&this._listenersEnabled&&(this.listeners.removeAll(),this._listenersEnabled=!1)}},{key:"isVisible",value:function(){return!this.props.hidden}},{key:"_onCloseAttempt",value:function(e,n){this.props.onCloseAttempt(e,n)}},{key:"getInternalContent",value:function(){return this.props.children}},{key:"render",value:function(){var e,n=this.props,o=n.className,i=n.style,s=n.hidden,a=n.attached,u=n.keepMounted,c=n.onMouseDown,l=n.onMouseUp,f=n.onMouseOver,p=n.onMouseOut,d=n.onContextMenu,h=n["data-test"],g=this.state.display===L.a.SHOWING,m=E()(o,N.a.popup,(e={},r()(e,N.a.attached,a),r()(e,N.a.hidden,s),r()(e,N.a.showing,g),e));return y.a.createElement("span",{onClick:A,ref:this.portalRef},this.state.shortcuts&&y.a.createElement(P.a,{map:this.shortcutsMap,scope:this.shortcutsScope}),this.state.client&&(u||!s)&&t.i(T.createPortal)(y.a.createElement("div",{"data-portaltarget":this.uid,ref:this.containerRef,onMouseOver:f,onMouseOut:p,onContextMenu:d},y.a.createElement("div",{"data-test":t.i(H.a)("ring-popup",h),"data-test-shown":!s&&!g,ref:this.popupRef,className:m,style:i,onMouseDown:c,onMouseUp:l},this.getInternalContent())),this.getContainer()||document.body))}}]),n}(b.Component);B.PopupProps={Directions:L.d,Dimension:L.e,MinWidth:L.f,MaxHeight:L.g},B.propTypes={anchorElement:O.a.instanceOf(Node),target:O.a.string,className:O.a.string,style:O.a.object,hidden:O.a.bool.isRequired,onOutsideClick:O.a.func,onEscPress:O.a.func,onCloseAttempt:O.a.func,children:O.a.oneOfType([O.a.arrayOf(O.a.node),O.a.node]),dontCloseOnAnchorClick:O.a.bool,shortcuts:O.a.bool,keepMounted:O.a.bool,"data-test":O.a.string,directions:O.a.arrayOf(O.a.string),autoPositioning:O.a.bool,autoCorrectTopOverflow:O.a.bool,left:O.a.number,top:O.a.number,maxHeight:O.a.number,minWidth:O.a.number,sidePadding:O.a.number,attached:O.a.bool,onMouseDown:O.a.func,onMouseUp:O.a.func,onMouseOver:O.a.func,onMouseOut:O.a.func,onContextMenu:O.a.func},B.contextTypes={ringPopupTarget:O.a.string},B.childContextTypes={ringPopupTarget:O.a.string},B.defaultProps={shortcuts:!0,hidden:!1,onOutsideClick:function(){},onEscPress:function(){},onCloseAttempt:function(){},dontCloseOnAnchorClick:!1,keepMounted:!1,directions:L.h,autoPositioning:!0,autoCorrectTopOverflow:!0,left:0,top:0,offset:0,sidePadding:8,attached:!1,legacy:!1},n.a=B},207:function(e,n,t){e.exports=t(2)(525)},209:function(e,n,t){"use strict";function o(e){return null!==e?{top:e.scrollTop,left:e.scrollLeft}:{top:t.i(h.e)(),left:t.i(h.f)()}}function r(e,n,t,o,r){var i,s=e.clientWidth,a=e.clientHeight,u=o+n.height,c=t+n.width,l=t-s,p=o-a,d=c-s,h=t+n.width/2-s/2,m=o+n.height/2-a/2,v=u-a;return i={},f()(i,g.BOTTOM_RIGHT,{left:t,top:u+r}),f()(i,g.BOTTOM_LEFT,{left:d,top:u+r}),f()(i,g.BOTTOM_CENTER,{left:h,top:u+r}),f()(i,g.TOP_RIGHT,{left:t,top:p-r}),f()(i,g.TOP_LEFT,{left:d,top:p-r}),f()(i,g.TOP_CENTER,{left:h,top:p-r}),f()(i,g.LEFT_BOTTOM,{left:l-r,top:o}),f()(i,g.LEFT_TOP,{left:l-r,top:v}),f()(i,g.LEFT_CENTER,{left:l-r,top:m}),f()(i,g.RIGHT_BOTTOM,{left:c+r,top:o}),f()(i,g.RIGHT_TOP,{left:c+r,top:v}),f()(i,g.RIGHT_CENTER,{left:c+r,top:m}),i}function i(e,n,o){var r=null!==o.container?o.container.clientHeight:t.i(h.g)(),i=n.top+o.sidePadding,s=n.top+r-o.sidePadding,a=Math.max(i-e.top,0),u=o.popup.clientHeight,c=e.top+u-s;return a+Math.max(c,0)}function s(e,n,t){var o=null!==t.container?t.container.clientWidth:window.innerWidth,r=n.left+t.sidePadding,i=n.left+o-t.sidePadding,s=Math.max(r-e.left,0),a=t.popup.clientWidth,u=e.left+a-i;return s+Math.max(u,0)}function a(e){var n=e.sidePadding,t=e.styles,o=e.anchorRect,r=e.maxHeight,i=e.popupScrollHeight,s=e.direction,a=g.TOP_LEFT,u=g.TOP_RIGHT,c=g.TOP_CENTER;if(![a,u,c,g.RIGHT_TOP,g.LEFT_TOP].includes(s))return t;var l=[a,c,u].includes(s),f=l?o.top:o.bottom;return f-(r?Math.min(i,r):i)<=n&&(t.top=n,t.maxHeight=f-n+1),t}function u(e,n,t){t=t||document.documentElement;var o=n.getBoundingClientRect(),r=t.getBoundingClientRect(),i=Math.max(o.top-r.top,0),s=Math.max(r.height,t===document.documentElement?t.clientHeight:0),a=Math.max(s-(i+o.height),0);switch(e){case g.TOP_LEFT:case g.TOP_CENTER:case g.TOP_RIGHT:return i;case g.BOTTOM_LEFT:case g.BOTTOM_CENTER:case g.BOTTOM_RIGHT:case g.LEFT_BOTTOM:case g.RIGHT_BOTTOM:return a;case g.LEFT_TOP:case g.RIGHT_TOP:return o.height+a;case g.RIGHT_CENTER:case g.LEFT_CENTER:return o.height/2+a;default:return null}}function c(e){var n=e.popup,u=e.anchor,c=e.container,l=e.directions,f=e.autoPositioning,p=e.sidePadding,d=e.top,g=e.left,m=e.offset,y=e.maxHeight,T=e.minWidth,O=e.autoCorrectTopOverflow,w=void 0===O||O,E={top:0,left:0},M=null,R=null!==c?t.i(h.a)(c):x,C=null!==c?c:document.body,k=t.i(h.a)(t.i(h.h)(u)?u:C),S=o(c),P=k.left+S.left+g-R.left,H=k.top+S.top+d-R.top;if(n){var L=r(n,k,P,H,m);if(f&&1!==l.length){var I=l.concat(l[0]).filter(function(e){return L[e]}).map(function(e){return{styles:L[e],direction:e}}).sort(function(n,t){var o=n.styles,r=t.styles;return i(o,S,e)+s(o,S,e)-(i(r,S,e)+s(r,S,e))});E=I[0].styles,M=I[0].direction}else E=L[l[0]],M=l[0]}return y===b.SCREEN||"screen"===y?E.maxHeight=window.innerHeight+S.top-E.top-v.MARGIN:y&&(E.maxHeight=y),w&&(E=a({sidePadding:p,styles:E,anchorRect:k,maxHeight:y,direction:M,popupScrollHeight:n.scrollHeight})),T===_.TARGET||"target"===T?E.minWidth=k.width:T&&(E.minWidth=k.width<T?T:k.width),E}t.d(n,"d",function(){return g}),t.d(n,"h",function(){return m}),t.d(n,"e",function(){return v}),t.d(n,"f",function(){return _}),t.d(n,"g",function(){return b}),t.d(n,"a",function(){return y}),t.d(n,"b",function(){return T}),n.i=u,n.c=c;var l=t(18),f=t.n(l),p=t(33),d=(t.n(p),t(58)),h=(t.n(d),t(37)),g={BOTTOM_RIGHT:"BOTTOM_RIGHT",BOTTOM_LEFT:"BOTTOM_LEFT",BOTTOM_CENTER:"BOTTOM_CENTER",TOP_LEFT:"TOP_LEFT",TOP_RIGHT:"TOP_RIGHT",TOP_CENTER:"TOP_CENTER",RIGHT_TOP:"RIGHT_TOP",RIGHT_BOTTOM:"RIGHT_BOTTOM",RIGHT_CENTER:"RIGHT_CENTER",LEFT_TOP:"LEFT_TOP",LEFT_BOTTOM:"LEFT_BOTTOM",LEFT_CENTER:"LEFT_CENTER"},m=[g.BOTTOM_RIGHT,g.BOTTOM_LEFT,g.TOP_LEFT,g.TOP_RIGHT,g.RIGHT_TOP,g.RIGHT_BOTTOM,g.LEFT_TOP,g.LEFT_BOTTOM],v={MARGIN:16,BORDER_WIDTH:1},_={TARGET:-1},b={SCREEN:-1},y={HIDDEN:0,SHOWING:1,SHOWN:2},T=["directions","autoPositioning","autoCorrectTopOverflow","sidePadding","top","left","offset","maxHeight","minWidth"],x={top:0,left:0}},21:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var r=t(66),i=o(r),s=t(65),a=o(s),u="function"==typeof a.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":typeof e};n.default="function"==typeof a.default&&"symbol"===u(i.default)?function(e){return void 0===e?"undefined":u(e)}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":void 0===e?"undefined":u(e)}},219:function(e,n,t){"use strict";var o=t(21),r=t.n(o),i=t(23),s=t.n(i),a=t(4),u=t.n(a),c=t(5),l=t.n(c),f=t(222),p=(t.n(f),t(33)),d=(t.n(p),t(221)),h=t.n(d),g=t(39),m=function(){function e(){var n=this;u()(this,e),this.ALLOW_SHORTCUTS_SELECTOR=".ring-js-shortcuts",this.ROOT_SCOPE={scopeId:"ROOT",options:{}},this._scopes={},this.combokeys=new h.a(document.documentElement),this.trigger=function(e){return n.combokeys.trigger(e)},this._dispatcher=function(e,t){for(var o=void 0,r=n._scopeChain.length-1;r>=0;r--){var i=n._scopeChain[r];if((o=n._scopes[i.scopeId])&&o[t]){var s=o[t](e,t,i.scopeId);if(!0!==s)return s}if(i.options.modal)return!0}},this._defaultFilter=function(e,t){return t!==document&&!t.matches(n.ALLOW_SHORTCUTS_SELECTOR)&&!t.closest(n.ALLOW_SHORTCUTS_SELECTOR)&&(t.matches("input,select,textarea")||t.contentEditable&&"true"===t.contentEditable)},this.setFilter(),this.setScope()}return l()(e,[{key:"bind",value:function(e){if(!(e instanceof Object)||"function"!=typeof e.handler)throw new Error("Shortcut handler should exist");if(e.scope||(e.scope=this.ROOT_SCOPE.scopeId),Array.isArray(e.key))for(var n=0;n<e.key.length;n++)this.bind(s()({},e,{key:e.key[n]}));else{if("string"!=typeof e.key)throw new Error("Shortcut key should exist");this._scopes[e.scope]||(this._scopes[e.scope]={}),this._scopes[e.scope][e.key]=e.handler,this.combokeys.bind(e.key,this._dispatcher,this._getKeyboardEventType(e))}}},{key:"bindMap",value:function(e,n){if(!(e instanceof Object))throw new Error("Shortcuts map shouldn't be empty");for(var t in e)e.hasOwnProperty(t)&&this.bind(s()({},n||{},{key:t,handler:e[t]}))}},{key:"unbindScope",value:function(e){this._scopes[e]=null}},{key:"getScope",value:function(){return this._scopeChain.slice(1)}},{key:"hasScope",value:function(e){return-1!==this.indexOfScope(e)}},{key:"pushScope",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e){var t=this.indexOfScope(e);-1!==t&&this._scopeChain.splice(t,1),this._scopeChain.push(this.wrapScope(e,n))}}},{key:"popScope",value:function(e){if(e){var n=this.indexOfScope(e);if(-1!==n)return this._scopeChain.splice(n,this._scopeChain.length-1)}}},{key:"spliceScope",value:function(e){if(e){var n=this.indexOfScope(e);-1!==n&&this._scopeChain.splice(n,1)}}},{key:"setScope",value:function(e){var n=this;if(e){var t=void 0;if(t="string"==typeof e||!Array.isArray(e)&&"object"===(void 0===e?"undefined":r()(e))&&null!==e?[e]:e,!Array.isArray(t))return;t=t.map(function(e){return"string"==typeof e?n.wrapScope(e):e}),this._scopeChain=[this.ROOT_SCOPE].concat(t)}else this._scopeChain=[this.ROOT_SCOPE]}},{key:"wrapScope",value:function(e){return{scopeId:e,options:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}}}},{key:"hasKey",value:function(e,n){return!(!this._scopes[n]||!this._scopes[n][e])}},{key:"_getKeyboardEventType",value:function(e){return!e.type&&"windows"===g.a.os.name&&e.key.match(/ctrl/i)&&e.key.match(/shift/i)&&e.key.match(/[0-9]/)?"keyup":e.type}},{key:"setFilter",value:function(e){this.combokeys.stopCallback="function"==typeof e?e:this._defaultFilter}},{key:"indexOfScope",value:function(e){return this._scopeChain.findIndex(function(n){return n.scopeId===e})}},{key:"reset",value:function(){this._scopes={},this.setScope(),this.combokeys.reset()}}]),e}();n.a=new m},22:function(e,n,t){e.exports=t(2)(402)},221:function(e,n,t){e.exports=t(2)(397)},222:function(e,n,t){e.exports=t(2)(670)},23:function(e,n,t){e.exports={default:t(53),__esModule:!0}},24:function(e,n,t){e.exports=t(2)(529)},25:function(e,n,t){"use strict";function o(e){return p()(e).reduce(function(e,n){var t=l()(n,2),o=t[0];return t[1]?[].concat(u()(e),[o]):e},[])}function r(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(function(e){return!!e}).reduce(function(e,n){return"object"===(void 0===n?"undefined":s()(n))?[].concat(u()(e),u()(o(n))):[].concat(u()(e),[n])},[]).join(" ")}n.a=r;var i=t(21),s=t.n(i),a=t(61),u=t.n(a),c=t(28),l=t.n(c),f=t(34),p=t.n(f)},253:function(e,n,t){n=e.exports=t(12)(!1),n.i(t(15),""),n.i(t(7),void 0),n.push([e.i,".popup_b24 {\n\n  position: absolute;\n  z-index: 5;\n  z-index: var(--ring-overlay-z-index);\n  top: -100vh;\n  left: -100vw;\n\n  overflow-y: auto;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n\n  border: 1px solid rgba(0, 42, 76, .1);\n\n  border: 1px solid var(--ring-popup-border-color);\n  border-radius: 3px;\n  border-radius: var(--ring-border-radius);\n\n  background-color: #fff;\n\n  background-color: var(--ring-content-background-color);\n  -webkit-box-shadow: 0 2px 16px 0 rgba(0, 42, 76, .15);\n          box-shadow: 0 2px 16px 0 rgba(0, 42, 76, .15);\n  -webkit-box-shadow: 0 2px 16px 0 var(--ring-popup-shadow-color);\n          box-shadow: 0 2px 16px 0 var(--ring-popup-shadow-color);\n}\n\n.hidden_2b7 {\n  display: none;\n}\n\n.showing_152 {\n  opacity: 0;\n}\n\n.attached_ebc {\n  border-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n",""]),n.locals={popup:"popup_b24 "+t(7).locals.font,hidden:"hidden_2b7",showing:"showing_152",attached:"attached_ebc"}},254:function(e,n,t){var o=t(253);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(17)(o,r),o.locals&&(e.exports=o.locals)},26:function(e,n,t){e.exports={default:t(43),__esModule:!0}},28:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var r=t(91),i=o(r),s=t(86),a=o(s);n.default=function(){function e(e,n){var t=[],o=!0,r=!1,i=void 0;try{for(var s,u=(0,a.default)(e);!(o=(s=u.next()).done)&&(t.push(s.value),!n||t.length!==n);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if((0,i.default)(Object(n)))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},3:function(e,n,t){e.exports=t(2)(128)},33:function(e,n,t){e.exports=t(2)(400)},34:function(e,n,t){e.exports={default:t(98),__esModule:!0}},35:function(e,n,t){"use strict";function o(e){if(!e)throw Error('Argument "name" is required in getUID()');return r[e]||(r[e]=0),e+String(r[e]++)}n.a=o;var r={}},37:function(e,n,t){"use strict";function o(e){return e===document||e instanceof Node&&document.documentElement.contains(e.parentNode)}function r(e){if(e instanceof Range||o(e)){var n=e.getBoundingClientRect();return{top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height}}return _()({},T)}function i(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function s(){return window.innerHeight}function a(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function u(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function c(e){e.preventDefault&&e.preventDefault()}t.d(n,"d",function(){return y}),n.h=o,n.a=r,n.b=i,n.g=s,n.e=a,n.f=u,t.d(n,"c",function(){return x}),n.i=c;var l=t(104),f=t.n(l),p=t(4),d=t.n(p),h=t(5),g=t.n(h),m=t(34),v=(t.n(m),t(23)),_=t.n(v),b=t(204),y=(t.n(b),window.getComputedStyle.bind(window)),T={top:0,right:0,bottom:0,left:0,width:0,height:0},x=function(){function e(){d()(this,e),this._all=new f.a}return g()(e,[{key:"add",value:function(e,n,t,o){e.addEventListener(n,t,o);var r=function(){return e.removeEventListener(n,t,o)};return this._all.add(r),r}},{key:"remove",value:function(e){e(),this._all.delete(e)}},{key:"removeAll",value:function(){var e=this;this._all.forEach(function(n){return e.remove(n)})}}]),e}()},39:function(e,n,t){"use strict";var o=t(90),r=t.n(o),i=new r.a;i.sniff(),n.a=i},4:function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},43:function(e,n,t){t(60);var o=t(9).Object;e.exports=function(e,n,t){return o.defineProperty(e,n,t)}},44:function(e,n,t){t(70);var o=t(9).Object;e.exports=function(e,n){return o.create(e,n)}},45:function(e,n,t){t(71);var o=t(9).Object;e.exports=function(e,n){return o.getOwnPropertyDescriptor(e,n)}},46:function(e,n,t){t(73),e.exports=t(9).Object.getPrototypeOf},47:function(e,n,t){t(74),e.exports=t(9).Object.setPrototypeOf},48:function(e,n,t){t(75),t(24),t(76),t(77),e.exports=t(9).Symbol},49:function(e,n,t){t(19),t(20),e.exports=t(69).f("iterator")},5:function(e,n,t){"use strict";n.__esModule=!0;var o=t(26),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}()},50:function(e,n,t){e.exports={default:t(45),__esModule:!0}},51:function(e,n,t){"use strict";var o=t(8),r=t.n(o),i=t(4),s=t.n(i),a=t(5),u=t.n(a),c=t(11),l=t.n(c),f=t(10),p=t.n(f),d=t(3),h=(t.n(d),t(6)),g=t.n(h),m=t(219),v=function(e){function n(){return s()(this,n),l()(this,(n.__proto__||r()(n)).apply(this,arguments))}return p()(n,e),u()(n,[{key:"componentWillMount",value:function(){var e=this.props,n=e.map,t=e.scope,o=e.options;m.a.bindMap(n,this.props),m.a.pushScope(t,o)}},{key:"componentWillUnmount",value:function(){var e=this.props.scope;m.a.unbindScope(e),m.a.spliceScope(e)}},{key:"render",value:function(){return this.props.children||null}}]),n}(d.Component);v.propTypes={map:g.a.object.isRequired,scope:g.a.string.isRequired,options:g.a.object,children:g.a.node},v.defaultProps={options:{}},n.a=v},53:function(e,n,t){t(78),e.exports=t(9).Object.assign},58:function(e,n,t){e.exports=t(2)(797)},59:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var r=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},6:function(e,n,t){e.exports=t(2)(187)},60:function(e,n,t){e.exports=t(2)(516)},61:function(e,n,t){"use strict";n.__esModule=!0;var o=t(95),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return(0,r.default)(e)}},62:function(e,n,t){e.exports={default:t(44),__esModule:!0}},63:function(e,n,t){e.exports={default:t(68),__esModule:!0}},64:function(e,n,t){e.exports={default:t(47),__esModule:!0}},65:function(e,n,t){e.exports={default:t(48),__esModule:!0}},66:function(e,n,t){e.exports={default:t(49),__esModule:!0}},67:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var r=t(26),i=o(r),s=t(50),a=o(s),u=t(63),c=o(u);n.default=function(e,n){for(var t=(0,c.default)(n),o=0;o<t.length;o++){var r=t[o],s=(0,a.default)(n,r);s&&s.configurable&&void 0===e[r]&&(0,i.default)(e,r,s)}return e}},68:function(e,n,t){t(72);var o=t(9).Object;e.exports=function(e){return o.getOwnPropertyNames(e)}},69:function(e,n,t){e.exports=t(2)(222)},7:function(e,n,t){n=e.exports=t(12)(!1),n.push([e.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.input-disabled_f9c {\n  border-color: #dedede;\n  background-color: #f8f8f8;\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),n.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e","input-disabled":"input-disabled_f9c",ellipsis:"ellipsis_894"}},70:function(e,n,t){e.exports=t(2)(514)},71:function(e,n,t){e.exports=t(2)(518)},72:function(e,n,t){e.exports=t(2)(519)},73:function(e,n,t){e.exports=t(2)(520)},74:function(e,n,t){e.exports=t(2)(528)},75:function(e,n,t){e.exports=t(2)(576)},76:function(e,n,t){e.exports=t(2)(638)},77:function(e,n,t){e.exports=t(2)(639)},78:function(e,n,t){e.exports=t(2)(513)},8:function(e,n,t){e.exports={default:t(46),__esModule:!0}},83:function(e,n,t){e.exports={default:t(97),__esModule:!0}},86:function(e,n,t){e.exports={default:t(88),__esModule:!0}},88:function(e,n,t){t(20),t(19),e.exports=t(89)},89:function(e,n,t){e.exports=t(2)(447)},9:function(e,n,t){e.exports=t(2)(24)},90:function(e,n,t){e.exports=t(2)(405)},91:function(e,n,t){e.exports={default:t(93),__esModule:!0}},93:function(e,n,t){t(20),t(19),e.exports=t(94)},94:function(e,n,t){e.exports=t(2)(223)},95:function(e,n,t){e.exports={default:t(101),__esModule:!0}},97:function(e,n,t){t(207),e.exports=t(9).Object.keys},98:function(e,n,t){t(99),e.exports=t(9).Object.entries},99:function(e,n,t){e.exports=t(2)(612)}});