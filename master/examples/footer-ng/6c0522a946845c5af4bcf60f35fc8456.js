!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1070)}({10:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var o=t(67),i=r(o),a=t(64),l=r(a),s=t(62),c=r(s),u=t(21),f=r(u);e.default=function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));n.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(l.default?(0,l.default)(n,e):(0,i.default)(n,e))}},101:function(n,e,t){t(19),t(103),n.exports=t(9).Array.from},103:function(n,e,t){n.exports=t(2)(463)},1070:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(54),o=t.n(r),i=t(978),a=t(475);t.n(a),o.a.module("TestApp",[i.a])},11:function(n,e,t){"use strict";e.__esModule=!0;var r=t(21),o=function(n){return n&&n.__esModule?n:{default:n}}(r);e.default=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?n:e}},12:function(n,e){function t(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=t(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},1252:function(n,e){n.exports='<div ng-class=":: $ctrl.styles.footer" data-test=ring-footer> <div ng-class=":: $ctrl.styles.columnLeft"> <div ng-transclude=left ng-class=":: $ctrl.styles.columnItem"></div> </div> <div ng-class=":: $ctrl.styles.columnCenter"> <div ng-transclude=center ng-class=":: $ctrl.styles.columnItem"></div> </div> <div ng-class=":: $ctrl.styles.columnRight"> <div ng-transclude=right ng-class=":: $ctrl.styles.columnItem"></div> </div> </div> '},13:function(n,e,t){n.exports=t(2)(396)},14:function(n,e,t){"use strict";e.__esModule=!0;var r=t(23),o=function(n){return n&&n.__esModule?n:{default:n}}(r);e.default=o.default||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}},15:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,':root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},16:function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}},17:function(n,e,t){function r(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=g[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],e));g[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],l=i[1],s=i[2],c=i[3],u={css:l,media:s,sourceMap:c};r[a]?r[a].parts.push(u):t.push(r[a]={id:a,parts:[u]})}return t}function i(n,e){var t=b(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),x.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=b(n.insertAt.before,t);t.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=x.indexOf(n);e>=0&&x.splice(e,1)}function l(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=u();t&&(n.attrs.nonce=t)}return c(e,n.attrs),i(n,e),e}function s(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",c(e,n.attrs),i(n,e),e}function c(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function u(){return t.nc}function f(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var c=y++;t=_||(_=l(e)),r=d.bind(null,t,c,!1),o=d.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),r=h.bind(null,t,e),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=l(e),r=p.bind(null,t),o=function(){a(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function d(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=k(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function h(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}var g={},m=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(n,e){return e?e.querySelector(n):document.querySelector(n)},b=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=v.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),_=null,y=0,x=[],w=t(59);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=o(n,e);return r(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var l=t[a],s=g[l.id];s.refs--,i.push(s)}n&&r(o(n,e),e);for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete g[s.id]}}}};var k=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},18:function(n,e,t){"use strict";e.__esModule=!0;var r=t(26),o=function(n){return n&&n.__esModule?n:{default:n}}(r);e.default=function(n,e,t){return e in n?(0,o.default)(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},19:function(n,e,t){n.exports=t(2)(566)},197:function(n,e,t){n.exports={default:t(210),__esModule:!0}},198:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(15),""),e.push([n.i,".link_46b {\n  cursor: pointer;\n  -webkit-transition: color 0.15s ease-out;\n  transition: color 0.15s ease-out;\n  -webkit-transition: color var(--ring-fast-ease);\n  transition: color var(--ring-fast-ease);\n  color: #0f5b99;\n  color: var(--ring-link-color);\n}\n\n.link_46b,\n  .link_46b:hover {\n  text-decoration: none;\n}\n\n.link_46b:hover,\n  .link_46b.hover_723 {\n  -webkit-transition: none;\n  transition: none;\n  color: #ff008c;\n  color: var(--ring-link-hover-color);\n}\n\n.link_46b:hover .inner_e7d {\n  border-width: 0;\n  border-bottom: 2px solid;\n  border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n  border-image-slice: 0 0 100% 0;\n}\n\n.link_46b.active_8b4 {\n  color: inherit;\n}\n\n.link_46b.compatibilityUnderlineMode_a72:hover {\n  text-decoration: underline;\n  /* stylelint-disable-next-line selector-max-specificity */\n}\n\n.link_46b.compatibilityUnderlineMode_a72:hover .inner_e7d {\n  border: none;\n}\n\n.link_46b.pseudo_b5d:hover {\n  text-decoration: none;\n  /* stylelint-disable-next-line selector-max-specificity */\n}\n\n.link_46b.pseudo_b5d:hover .inner_e7d {\n  border: none;\n}\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  .link_46b:hover .inner_e7d {\n    border-bottom-width: 1px;\n  }\n}\n\n.inherit_bc0:not(:hover) {\n  color: inherit;\n}\n\n.pseudo_b5d {\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit\n}\n\n.pseudo_b5d::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n",""]),e.locals={link:"link_46b",hover:"hover_723",inner:"inner_e7d",active:"active_8b4",compatibilityUnderlineMode:"compatibilityUnderlineMode_a72",pseudo:"pseudo_b5d",inherit:"inherit_bc0"}},2:function(n,e){n.exports=vendor_lib},20:function(n,e,t){n.exports=t(2)(645)},206:function(n,e,t){"use strict";function r(n){E=n}function o(n){var e,r,o="string"!=typeof n&&n!==U.a;return r=e=function(e){function r(){return h()(this,r),b()(this,(r.__proto__||d()(r)).apply(this,arguments))}return y()(r,e),m()(r,[{key:"getChildren",value:function(){var n=this.props,e=n.children,t=n.innerClassName,r=L(t);return"function"==typeof e?e(r):w.a.createElement(r,null,e)}},{key:"render",value:function(){var e,r=this.props,i=r.active,l=r.inherit,c=r.pseudo,f=r.hover,d=r.className,p=r["data-test"],h=r.href,g=(r.innerClassName,r.children,u()(r,["active","inherit","pseudo","hover","className","data-test","href","innerClassName","children"])),m=c||!o&&!h,v=O()(A.a.link,d,(e={},s()(e,A.a.active,i),s()(e,A.a.inherit,l),s()(e,A.a.hover,f),s()(e,A.a.compatibilityUnderlineMode,E),s()(e,A.a.pseudo,m),e));return o&&!g.activeClassName&&(g.activeClassName=A.a.active),m?w.a.createElement("button",a()({type:"button"},g,{className:v,"data-test":t.i(j.a)("ring-link",p)}),this.getChildren()):w.a.createElement(n,a()({},g,{href:h,className:v,"data-test":t.i(j.a)("ring-link",p)}),this.getChildren())}}]),r}(x.Component),e.propTypes={className:C.a.string,innerClassName:C.a.string,active:C.a.bool,inherit:C.a.bool,pseudo:C.a.bool,hover:C.a.bool,children:C.a.oneOfType([C.a.node,C.a.func]),"data-test":C.a.string,href:C.a.string},r}e.c=r,e.b=o;var i=t(14),a=t.n(i),l=t(18),s=t.n(l),c=t(16),u=t.n(c),f=t(8),d=t.n(f),p=t(4),h=t.n(p),g=t(5),m=t.n(g),v=t(11),b=t.n(v),_=t(10),y=t.n(_),x=t(3),w=t.n(x),k=t(6),C=t.n(k),M=t(13),O=t.n(M),N=t(32),j=t(25),U=t(87),z=t(236),A=t.n(z),E=!1,L=t.i(N.a)(function(n){var e=function(e){var t=e.className,r=e.children,o=O()(A.a.inner,t,n);return w.a.createElement("span",{className:o},r)};return e.propTypes={className:C.a.string,children:C.a.node},e});e.a=o(U.a)},208:function(n,e,t){n.exports={default:t(211),__esModule:!0}},21:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var o=t(66),i=r(o),a=t(65),l=r(a),s="function"==typeof l.default&&"symbol"==typeof i.default?function(n){return typeof n}:function(n){return n&&"function"==typeof l.default&&n.constructor===l.default&&n!==l.default.prototype?"symbol":typeof n};e.default="function"==typeof l.default&&"symbol"===s(i.default)?function(n){return void 0===n?"undefined":s(n)}:function(n){return n&&"function"==typeof l.default&&n.constructor===l.default&&n!==l.default.prototype?"symbol":void 0===n?"undefined":s(n)}},210:function(n,e,t){t(24),t(19),t(20),t(212),t(216),t(215),t(214),n.exports=t(9).Map},211:function(n,e,t){t(24),t(20),t(213),t(218),t(217),n.exports=t(9).WeakMap},212:function(n,e,t){n.exports=t(2)(224)},213:function(n,e,t){n.exports=t(2)(226)},214:function(n,e,t){n.exports=t(2)(595)},215:function(n,e,t){n.exports=t(2)(596)},216:function(n,e,t){n.exports=t(2)(597)},217:function(n,e,t){n.exports=t(2)(641)},218:function(n,e,t){n.exports=t(2)(642)},23:function(n,e,t){n.exports={default:t(53),__esModule:!0}},236:function(n,e,t){var r=t(198);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(17)(r,o),r.locals&&(n.exports=r.locals)},24:function(n,e,t){n.exports=t(2)(529)},25:function(n,e,t){"use strict";function r(n){return d()(n).reduce(function(n,e){var t=u()(e,2),r=t[0];return t[1]?[].concat(s()(n),[r]):n},[])}function o(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter(function(n){return!!n}).reduce(function(n,e){return"object"===(void 0===e?"undefined":a()(e))?[].concat(s()(n),s()(r(e))):[].concat(s()(n),[e])},[]).join(" ")}e.a=o;var i=t(21),a=t.n(i),l=t(61),s=t.n(l),c=t(28),u=t.n(c),f=t(34),d=t.n(f)},26:function(n,e,t){n.exports={default:t(43),__esModule:!0}},28:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var o=t(91),i=r(o),a=t(86),l=r(a);e.default=function(){function n(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,s=(0,l.default)(n);!(r=(a=s.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return t}return function(e,t){if(Array.isArray(e))return e;if((0,i.default)(Object(e)))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},3:function(n,e,t){n.exports=t(2)(128)},312:function(n,e,t){"use strict";var r=t(4),o=t.n(r),i=t(5),a=t.n(i),l=function(){function n(){for(var e=this,t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];o()(this,n),this.$inject={},this.constructor.$inject.forEach(function(n,t){e.$inject[n]=r[t]})}return a()(n,null,[{key:"controller",get:function(){return this}}]),n}();l.$inject=[],e.a=l},32:function(n,e,t){"use strict";function r(n){var e=new l.a,t=new i.a;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"__singleValue__",o=r instanceof Object?t:e;if(o.has(r))return o.get(r);var i=n(r);return o.set(r,i),i}}e.a=r;var o=t(208),i=t.n(o),a=t(197),l=t.n(a)},33:function(n,e,t){n.exports=t(2)(400)},34:function(n,e,t){n.exports={default:t(98),__esModule:!0}},4:function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},43:function(n,e,t){t(60);var r=t(9).Object;n.exports=function(n,e,t){return r.defineProperty(n,e,t)}},44:function(n,e,t){t(70);var r=t(9).Object;n.exports=function(n,e){return r.create(n,e)}},45:function(n,e,t){t(71);var r=t(9).Object;n.exports=function(n,e){return r.getOwnPropertyDescriptor(n,e)}},46:function(n,e,t){t(73),n.exports=t(9).Object.getPrototypeOf},47:function(n,e,t){t(74),n.exports=t(9).Object.setPrototypeOf},475:function(n,e,t){var r=t(571);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(17)(r,o),r.locals&&(n.exports=r.locals)},48:function(n,e,t){t(75),t(24),t(76),t(77),n.exports=t(9).Symbol},49:function(n,e,t){t(19),t(20),n.exports=t(69).f("iterator")},5:function(n,e,t){"use strict";e.__esModule=!0;var r=t(26),o=function(n){return n&&n.__esModule?n:{default:n}}(r);e.default=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}()},50:function(n,e,t){n.exports={default:t(45),__esModule:!0}},53:function(n,e,t){t(78),n.exports=t(9).Object.assign},54:function(n,e,t){n.exports=t(2)(394)},571:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(15),""),e.push([n.i,'/**\n  These styles are deprecated and kept for backward compatibility with direct class usages\n  like `<a class="ring-link">link</a>\n */\n\n.ring-link {\n  cursor: pointer;\n  -webkit-transition: color 0.15s ease-out;\n  transition: color 0.15s ease-out;\n  -webkit-transition: color var(--ring-fast-ease);\n  transition: color var(--ring-fast-ease);\n  text-decoration: none;\n  color: #0f5b99;\n  color: var(--ring-link-color);\n}\n\n.ring-link:hover {\n  -webkit-transition: none;\n  transition: none;\n  text-decoration: underline;\n  color: #ff008c;\n  color: var(--ring-link-hover-color);\n}\n\n.ring-link_inherit:not(:hover) {\n  color: inherit;\n}\n',""])},59:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},6:function(n,e,t){n.exports=t(2)(187)},60:function(n,e,t){n.exports=t(2)(516)},61:function(n,e,t){"use strict";e.__esModule=!0;var r=t(95),o=function(n){return n&&n.__esModule?n:{default:n}}(r);e.default=function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return(0,o.default)(n)}},62:function(n,e,t){n.exports={default:t(44),__esModule:!0}},63:function(n,e,t){n.exports={default:t(68),__esModule:!0}},64:function(n,e,t){n.exports={default:t(47),__esModule:!0}},65:function(n,e,t){n.exports={default:t(48),__esModule:!0}},66:function(n,e,t){n.exports={default:t(49),__esModule:!0}},67:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var o=t(26),i=r(o),a=t(50),l=r(a),s=t(63),c=r(s);e.default=function(n,e){for(var t=(0,c.default)(e),r=0;r<t.length;r++){var o=t[r],a=(0,l.default)(e,o);a&&a.configurable&&void 0===n[o]&&(0,i.default)(n,o,a)}return n}},68:function(n,e,t){t(72);var r=t(9).Object;n.exports=function(n){return r.getOwnPropertyNames(n)}},69:function(n,e,t){n.exports=t(2)(222)},7:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.input-disabled_f9c {\n  border-color: #dedede;\n  background-color: #f8f8f8;\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e","input-disabled":"input-disabled_f9c",ellipsis:"ellipsis_894"}},70:function(n,e,t){n.exports=t(2)(514)},71:function(n,e,t){n.exports=t(2)(518)},72:function(n,e,t){n.exports=t(2)(519)},73:function(n,e,t){n.exports=t(2)(520)},74:function(n,e,t){n.exports=t(2)(528)},75:function(n,e,t){n.exports=t(2)(576)},76:function(n,e,t){n.exports=t(2)(638)},77:function(n,e,t){n.exports=t(2)(639)},78:function(n,e,t){n.exports=t(2)(513)},8:function(n,e,t){n.exports={default:t(46),__esModule:!0}},86:function(n,e,t){n.exports={default:t(88),__esModule:!0}},87:function(n,e,t){"use strict";var r=t(14),o=t.n(r),i=t(16),a=t.n(i),l=t(8),s=t.n(l),c=t(4),u=t.n(c),f=t(5),d=t.n(f),p=t(11),h=t.n(p),g=t(10),m=t.n(g),v=t(3),b=t.n(v),_=t(6),y=t.n(_),x=function(n){return!(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey)},w=function(n){function e(){var n,t,r,o;u()(this,e);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return t=r=h()(this,(n=e.__proto__||s()(e)).call.apply(n,[this].concat(a))),r.onClick=function(n){var e=r.props,t=e.onClick,o=e.onConditionalClick,i=e.onPlainLeftClick,a=x(n);t&&t(n),o&&o(a,n),i&&a&&(n.preventDefault(),i(n))},o=t,h()(r,o)}return m()(e,n),d()(e,[{key:"render",value:function(){var n=this.props,e=(n.onConditionalClick,n.onPlainLeftClick,n.activeClassName,a()(n,["onConditionalClick","onPlainLeftClick","activeClassName"]));return b.a.createElement("a",o()({},e,{onClick:this.onClick}))}}]),e}(v.PureComponent);w.propTypes={onClick:y.a.func,onPlainLeftClick:y.a.func,onConditionalClick:y.a.func,activeClassName:y.a.string},e.a=w},88:function(n,e,t){t(20),t(19),n.exports=t(89)},89:function(n,e,t){n.exports=t(2)(447)},9:function(n,e,t){n.exports=t(2)(24)},91:function(n,e,t){n.exports={default:t(93),__esModule:!0}},919:function(n,e,t){var r=t(945);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(17)(r,o),r.locals&&(n.exports=r.locals)},925:function(n,e,t){"use strict";function r(n){var e=(new Date).getUTCFullYear(),t="Copyright © ";return t+=n>=e?n:n+"–"+e}e.a=r;var o=t(18),i=t.n(o),a=t(8),l=t.n(a),s=t(4),c=t.n(s),u=t(5),f=t.n(u),d=t(11),p=t.n(d),h=t(10),g=t.n(h),m=t(33),v=(t.n(m),t(3)),b=t.n(v),_=t(6),y=t.n(_),x=t(13),w=t.n(x),k=t(206),C=t(919),M=t.n(C),O=function(n){function e(){return c()(this,e),p()(this,(e.__proto__||l()(e)).apply(this,arguments))}return g()(e,n),f()(e,[{key:"render",value:function(){var n,e=this.props,t=e.position,r=e.children,o=w()((n={},i()(n,M.a.columnLeft,"left"===t),i()(n,M.a.columnCenter,"center"===t),i()(n,M.a.columnRight,"right"===t),n));return b.a.createElement("div",{className:o},b.a.createElement("ul",{className:M.a.columnItem},r))}}]),e}(v.PureComponent);O.propTypes={position:y.a.string,children:y.a.node};var N=function(n){function e(){return c()(this,e),p()(this,(e.__proto__||l()(e)).apply(this,arguments))}return g()(e,n),f()(e,[{key:"render",value:function(){function n(n){if(t.i(v.isValidElement)(n))return n;var e=(n.copyright?r(n.copyright):"")+(n.label||n);return n.url?b.a.createElement(k.a,{href:n.url,target:n.target,key:n.url+n.title,title:n.title},e):e}var e=Array.isArray(this.props.item)?this.props.item:[this.props.item];return b.a.createElement("li",{className:M.a.line},e.map(n))}}]),e}(v.PureComponent);N.propTypes={item:y.a.oneOfType([y.a.object,y.a.array,y.a.string])};var j=function(n){function e(){return c()(this,e),p()(this,(e.__proto__||l()(e)).apply(this,arguments))}return g()(e,n),f()(e,[{key:"render",value:function(){function n(n,e){return!!n&&b.a.createElement(O,{key:e,position:e},n.map(function(n,e){return b.a.createElement(N,{key:e,item:n})}))}var e=this.props.floating,t=w()(M.a.footer,this.props.className,i()({},M.a.footerFloating,e));return b.a.createElement("div",{className:t,"data-test":"ring-footer"},[n(this.props.left,"left"),n(this.props.center,"center"),n(this.props.right,"right")])}}]),e}(v.PureComponent);j.propTypes={className:y.a.string,floating:y.a.bool,left:y.a.array,center:y.a.array,right:y.a.array},e.b=j},93:function(n,e,t){t(20),t(19),n.exports=t(94)},94:function(n,e,t){n.exports=t(2)(223)},945:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(15),""),e.i(t(7),void 0),e.push([n.i,".footer_3ef {\n\n  position: relative;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n  height: 64px;\n  margin: 40px 32px 0 32px;\n  padding-top: 16px;\n\n  text-align: center;\n\n  border-top: 1px solid #dfe5eb;\n\n  border-top: 1px solid var(--ring-line-color);\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.footerFloating_0c3 {\n\n  position: absolute;\n  z-index: 1;\n  z-index: var(--ring-fixed-z-index);\n  bottom: 0;\n\n  width: 100%;\n  margin-right: 0;\n  margin-bottom: 8px;\n  margin-left: 0;\n}\n\n.column_fb5 {\n  position: absolute;\n\n  width: 33%;\n}\n\n.columnItem_6d2 {\n  display: inline-block;\n\n  margin: 0;\n  padding: 0;\n\n  vertical-align: top;\n}\n\n.columnLeft_1ba {\n\n  text-align: left;\n}\n\n.columnCenter_567 {\n\n  left: 33.6%;\n}\n\n.columnCenter_567 .line_cd2 {\n  text-align: left;\n}\n\n.columnRight_f89 {\n\n  top: 16px;\n  right: 0;\n\n  text-align: right;\n}\n\n.line_cd2 {\n  padding: 0;\n\n  list-style: none;\n\n  line-height: 16px;\n}\n\n.lineCenter_cc3 {\n  text-align: left;\n}\n",""]),e.locals={unit:""+t(7).locals.unit,"footer-height":""+t(7).locals["footer-height"],footer:"footer_3ef "+t(7).locals.font,footerFloating:"footerFloating_0c3 footer_3ef "+t(7).locals.font,column:"column_fb5",columnItem:"columnItem_6d2",columnLeft:"columnLeft_1ba column_fb5",columnCenter:"columnCenter_567 column_fb5",line:"line_cd2",columnRight:"columnRight_f89 column_fb5",lineCenter:"lineCenter_cc3"}},95:function(n,e,t){n.exports={default:t(101),__esModule:!0}},978:function(n,e,t){"use strict";var r=t(5),o=t.n(r),i=t(8),a=t.n(i),l=t(4),s=t.n(l),c=t(11),u=t.n(c),f=t(10),d=t.n(f),p=t(54),h=t.n(p),g=t(312),m=t(919),v=t.n(m),b=t(925),_=h.a.module("Ring.footer",[]),y=function(n){function e(){var n,t,r,o;s()(this,e);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return t=r=u()(this,(n=e.__proto__||a()(e)).call.apply(n,[this].concat(l))),r.styles=v.a,o=t,u()(r,o)}return d()(e,n),e}(g.a);y.transclude={left:"?rgFooterLeft",center:"?rgFooterCenter",right:"?rgFooterRight"},y.template=t(1252);var x=function(n){function e(){return s()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return d()(e,n),e}(g.a);x.transclude=!0,x.template='<div class="'+v.a.line+'" ng-transclude></div>';var w=function(n){function e(){return s()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return d()(e,n),o()(e,[{key:"$onInit",value:function(){this.copyrightYears=t.i(b.a)(this.year)}}]),e}(g.a);w.template="<span>{{:: $ctrl.copyrightYears}} {{:: $ctrl.companyName}}</span>",w.bindings={year:"@",companyName:"@"},_.component("rgFooter",y),_.component("rgFooterLine",x),_.component("rgFooterCopyright",w),e.a=_.name},98:function(n,e,t){t(99),n.exports=t(9).Object.entries},99:function(n,e,t){n.exports=t(2)(612)}});