!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1032)}({10:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var r=t(67),i=o(r),a=t(64),s=o(a),l=t(62),u=o(l),c=t(21),f=o(c);e.default=function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));n.prototype=(0,u.default)(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(s.default?(0,s.default)(n,e):(0,i.default)(n,e))}},1032:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(22),r=(t.n(o),t(3)),i=t.n(r),a=t(592);t.i(o.render)(function(){return i.a.createElement(a.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}(),document.getElementById("example"))},11:function(n,e,t){"use strict";e.__esModule=!0;var o=t(21),r=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,r.default)(e))&&"function"!=typeof e?n:e}},12:function(n,e){function t(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},13:function(n,e,t){n.exports=t(2)(396)},14:function(n,e,t){"use strict";e.__esModule=!0;var o=t(23),r=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=r.default||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}},15:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,':root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},16:function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){var t={};for(var o in n)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}},17:function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=b[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(f(o.parts[i],e));b[o.id]={id:o.id,refs:1,parts:a}}}}function r(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s=i[1],l=i[2],u=i[3],c={css:s,media:l,sourceMap:u};o[a]?o[a].parts.push(c):t.push(o[a]={id:a,parts:[c]})}return t}function i(n,e){var t=x(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=_[_.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),_.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=x(n.insertAt.before,t);t.insertBefore(e,r)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=_.indexOf(n);e>=0&&_.splice(e,1)}function s(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=c();t&&(n.attrs.nonce=t)}return u(e,n.attrs),i(n,e),e}function l(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",u(e,n.attrs),i(n,e),e}function u(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function c(){return t.nc}function f(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var u=y++;t=v||(v=s(e)),o=d.bind(null,t,u,!1),r=d.bind(null,t,u,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(e),o=h.bind(null,t,e),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),o=p.bind(null,t),r=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function d(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=C(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function h(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=w(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var b={},m=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(n,e){return e?e.querySelector(n):document.querySelector(n)},x=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=g.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),v=null,y=0,_=[],w=t(59);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=r(n,e);return o(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var s=t[a],l=b[s.id];l.refs--,i.push(l)}n&&o(r(n,e),e);for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete b[l.id]}}}};var C=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},18:function(n,e,t){"use strict";e.__esModule=!0;var o=t(26),r=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=function(n,e,t){return e in n?(0,r.default)(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},19:function(n,e,t){n.exports=t(2)(566)},2:function(n,e){n.exports=vendor_lib},20:function(n,e,t){n.exports=t(2)(645)},21:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var r=t(66),i=o(r),a=t(65),s=o(a),l="function"==typeof s.default&&"symbol"==typeof i.default?function(n){return typeof n}:function(n){return n&&"function"==typeof s.default&&n.constructor===s.default&&n!==s.default.prototype?"symbol":typeof n};e.default="function"==typeof s.default&&"symbol"===l(i.default)?function(n){return void 0===n?"undefined":l(n)}:function(n){return n&&"function"==typeof s.default&&n.constructor===s.default&&n!==s.default.prototype?"symbol":void 0===n?"undefined":l(n)}},22:function(n,e,t){n.exports=t(2)(402)},23:function(n,e,t){n.exports={default:t(53),__esModule:!0}},24:function(n,e,t){n.exports=t(2)(529)},26:function(n,e,t){n.exports={default:t(43),__esModule:!0}},3:function(n,e,t){n.exports=t(2)(128)},4:function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},43:function(n,e,t){t(60);var o=t(9).Object;n.exports=function(n,e,t){return o.defineProperty(n,e,t)}},44:function(n,e,t){t(70);var o=t(9).Object;n.exports=function(n,e){return o.create(n,e)}},45:function(n,e,t){t(71);var o=t(9).Object;n.exports=function(n,e){return o.getOwnPropertyDescriptor(n,e)}},46:function(n,e,t){t(73),n.exports=t(9).Object.getPrototypeOf},47:function(n,e,t){t(74),n.exports=t(9).Object.setPrototypeOf},48:function(n,e,t){t(75),t(24),t(76),t(77),n.exports=t(9).Symbol},49:function(n,e,t){t(19),t(20),n.exports=t(69).f("iterator")},494:function(n,e,t){"use strict";var o=t(14),r=t.n(o),i=t(18),a=t.n(i),s=t(16),l=t.n(s),u=t(8),c=t.n(u),f=t(4),d=t.n(f),p=t(5),h=t.n(p),b=t(11),m=t.n(b),g=t(10),x=t.n(g),v=t(3),y=t.n(v),_=t(6),w=t.n(_),C=t(13),M=t.n(C),k=t(558),N=t(589),O=t.n(N),R="above",L="inside",U=function(n){function e(){var n,t,o,r;d()(this,e);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=o=m()(this,(n=e.__proto__||c()(e)).call.apply(n,[this].concat(a))),o.state={topIsOutside:!0,bottomIsOutside:!0},o.handleTopWaypoint=function(n){var e=n.currentPosition;o.setState({topIsOutside:e===R})},o.handleBottomWaypoint=function(n){var e=n.currentPosition,t=n.waypointTop;o.setState({sidebarVisibleHeight:t,bottomIsOutside:e!==L})},o.sidebarRef=function(n){o.sidebarNode=n},r=t,m()(o,r)}return x()(e,n),h()(e,[{key:"shouldUseFixation",value:function(){var n=this.props.contentNode,e=this.sidebarNode;return!(!n||!e)&&n.offsetHeight>=e.offsetHeight}},{key:"shouldFixateBottom",value:function(){var n=this.state,e=n.topIsOutside;return!n.bottomIsOutside&&e&&this.shouldUseFixation()}},{key:"render",value:function(){var n,e=this.props,t=e.right,o=e.children,i=e.className,s=e.containerClassName,u=e.fixedClassName,c=(e.contentNode,l()(e,["right","children","className","containerClassName","fixedClassName","contentNode"])),f=this.state,d=f.topIsOutside,p=f.bottomIsOutside,h=f.sidebarVisibleHeight,b=p&&d&&this.shouldUseFixation(),m=this.shouldFixateBottom(),g=M()(O.a.sidebarContainer,s,a()({},O.a.sidebarContainerRight,t)),x=M()(O.a.sidebar,i,(n={},a()(n,O.a.sidebarRight,t),a()(n,O.a.sidebarFixedTop,b),a()(n,O.a.sidebarFixedBottom,m),a()(n,u,b||m),n)),v={maxHeight:m&&h?h+"px":null};return y.a.createElement("div",{className:g,ref:this.sidebarRef},y.a.createElement(k.default,{onEnter:this.handleTopWaypoint,onLeave:this.handleTopWaypoint}),y.a.createElement("div",r()({},c,{style:v,className:x}),o),y.a.createElement("div",{className:O.a.bottomMarker},y.a.createElement(k.default,{onEnter:this.handleBottomWaypoint,onLeave:this.handleBottomWaypoint})))}}]),e}(v.Component);U.propTypes={right:w.a.bool,children:w.a.node,className:w.a.string,containerClassName:w.a.string,fixedClassName:w.a.string,contentNode:w.a.object},e.a=U},5:function(n,e,t){"use strict";e.__esModule=!0;var o=t(26),r=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}()},50:function(n,e,t){n.exports={default:t(45),__esModule:!0}},53:function(n,e,t){t(78),n.exports=t(9).Object.assign},558:function(n,e,t){n.exports=t(2)(403)},589:function(n,e,t){var o=t(653);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(17)(o,r),o.locals&&(n.exports=o.locals)},59:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},592:function(n,e,t){"use strict";var o=t(14),r=t.n(o),i=t(18),a=t.n(i),s=t(16),l=t.n(s),u=t(8),c=t.n(u),f=t(4),d=t.n(f),p=t(5),h=t.n(p),b=t(11),m=t.n(b),g=t(10),x=t.n(g),v=t(3),y=t.n(v),_=t(6),w=t.n(_),C=t(13),M=t.n(C),k=t(494),N=t(589),O=t.n(N);t.d(e,"b",function(){return k.a});var R=function(n){function e(){var n,t,o,r;d()(this,e);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=o=m()(this,(n=e.__proto__||c()(e)).call.apply(n,[this].concat(a))),o.state={},o.saveContentNode=function(n){o.setState({contentNode:n})},r=t,m()(o,r)}return x()(e,n),h()(e,[{key:"render",value:function(){var n=this.props,e=n.children,o=n.className,i=n.contentClassName,s=n.responsive,u=l()(n,["children","className","contentClassName","responsive"]),c=M()(O.a.contentLayout,o,a()({},O.a.contentLayoutResponsive,s)),f=M()(O.a.contentLayoutContent,i),d=y.a.Children.toArray(e),p=d.filter(function(n){return n&&n.type===k.a})[0],h=p&&t.i(v.cloneElement)(p,{contentNode:this.state.contentNode}),b=d.filter(function(n){return n!==p});return y.a.createElement("div",r()({},u,{className:c}),h,y.a.createElement("div",{className:f,ref:this.saveContentNode},b))}}]),e}(v.Component);R.propTypes={children:w.a.node,className:w.a.string,contentClassName:w.a.string,responsive:w.a.bool},R.defaultProps={responsive:!0},e.a=R},6:function(n,e,t){n.exports=t(2)(187)},60:function(n,e,t){n.exports=t(2)(516)},62:function(n,e,t){n.exports={default:t(44),__esModule:!0}},63:function(n,e,t){n.exports={default:t(68),__esModule:!0}},64:function(n,e,t){n.exports={default:t(47),__esModule:!0}},65:function(n,e,t){n.exports={default:t(48),__esModule:!0}},653:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(15),""),e.i(t(7),void 0),e.push([n.i,".contentLayout_2c6 {\n  position: relative;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n}\n\n.contentLayoutContent_edc {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n\n  width: 100%; /* without this hack IE11 render contentLayoutContent wider than its container */\n  margin: 0 32px;\n}\n\n.sidebarContainer_479 {\n  min-width: 240px;\n  max-width: 240px;\n}\n\n.sidebarContainerRight_0af {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n.sidebar_f88 {\n  overflow: auto;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n  min-width: 240px;\n  max-width: 240px;\n  height: 100%;\n  padding-right: 16px;\n  padding-left: 32px;\n}\n\n.sidebarRight_4ed {\n  padding-right: 32px;\n  padding-left: 16px;\n}\n\n.sidebarFixedTop_416 {\n  top: 0;\n  bottom: 0\n}\n\n.sidebarFixedTop_416.sidebarFixedTop_416 {\n  position: fixed;\n}\n\n.sidebarFixedBottom_117.sidebarFixedBottom_117 {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n}\n\n.bottomMarker_bed {\n  position: absolute;\n  bottom: 0;\n}\n\n@media (max-width: 639px), (min-width: 640px) and (max-width: 959px) {\n\n  .contentLayoutResponsive_ae8 .contentLayoutContent_edc {\n    margin: 0 16px;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebar_f88 {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    padding: 0 16px;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarFixedTop_416 {\n    position: fixed;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarFixedBottom_117 {\n    top: auto;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarRight_4ed {\n    right: 0;\n    left: auto;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarContainer_479 {\n    min-width: 0;\n    max-width: 0;\n  }\n}\n\n@media (max-width: 639px) {\n\n  .contentLayoutResponsive_ae8 .sidebar_f88 {\n    width: 80%;\n    min-width: 0;\n    max-width: none;\n  }\n}\n\n",""]),e.locals={unit:""+t(7).locals.unit,"extra-small-screen-media":""+t(7).locals["extra-small-screen-media"],"small-screen-media":""+t(7).locals["small-screen-media"],sidebarWidth:"240px",contentLayout:"contentLayout_2c6",contentLayoutContent:"contentLayoutContent_edc",sidebarContainer:"sidebarContainer_479",sidebarContainerRight:"sidebarContainerRight_0af",sidebar:"sidebar_f88",sidebarRight:"sidebarRight_4ed",sidebarFixedTop:"sidebarFixedTop_416",sidebarFixedBottom:"sidebarFixedBottom_117",bottomMarker:"bottomMarker_bed",contentLayoutResponsive:"contentLayoutResponsive_ae8"}},66:function(n,e,t){n.exports={default:t(49),__esModule:!0}},67:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var r=t(26),i=o(r),a=t(50),s=o(a),l=t(63),u=o(l);e.default=function(n,e){for(var t=(0,u.default)(e),o=0;o<t.length;o++){var r=t[o],a=(0,s.default)(e,r);a&&a.configurable&&void 0===n[r]&&(0,i.default)(n,r,a)}return n}},68:function(n,e,t){t(72);var o=t(9).Object;n.exports=function(n){return o.getOwnPropertyNames(n)}},69:function(n,e,t){n.exports=t(2)(222)},7:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.input-disabled_f9c {\n  border-color: #dedede;\n  background-color: #f8f8f8;\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e","input-disabled":"input-disabled_f9c",ellipsis:"ellipsis_894"}},70:function(n,e,t){n.exports=t(2)(514)},71:function(n,e,t){n.exports=t(2)(518)},72:function(n,e,t){n.exports=t(2)(519)},73:function(n,e,t){n.exports=t(2)(520)},74:function(n,e,t){n.exports=t(2)(528)},75:function(n,e,t){n.exports=t(2)(576)},76:function(n,e,t){n.exports=t(2)(638)},77:function(n,e,t){n.exports=t(2)(639)},78:function(n,e,t){n.exports=t(2)(513)},8:function(n,e,t){n.exports={default:t(46),__esModule:!0}},9:function(n,e,t){n.exports=t(2)(24)}});