!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((o=o.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=s(n(1)),f=s(n(3));n(5);var u=n(9),p=n(10),l=window.innerWidth<550,d=function(e){return void 0===e&&(e={heading:"",body:""}),"\n  "+(l?'<button class="hovercard-close" aria-label="Close">&times;</button>':"")+'\n  <div class="hovercard-card'+(e.image?" hovercard-has-image":"")+'">\n    <h3 class="hovercard-title">'+e.heading+'</h3>\n    <p class="hovercard-description">'+e.body+"</p>\n    "+(e.image?'<div class="hovercard-image" style="background-image: url(\''+e.image+"')\"></div>":"")+"\n  </div>\n"},h=function(e){return e&&e.parentElement&&e.parentElement.querySelector(":hover")===e},m=function(e){function t(t){var n=e.call(this)||this;return n.isVisible=!1,n.isLoading=!1,n.settings=t||{},n.popperElement=document.createElement("div"),n.popperElement.classList.add("hovercard-element"),l?n.popperElement.classList.add("hovercard-mobile"):n.popperElement.addEventListener("mouseout",n.mouseOut.bind(n)),n.popperElement.innerHTML="function"==typeof n.settings.template?n.settings.template():d(),(document.body||document.documentElement).appendChild(n.popperElement),n.start(),n}return r(t,e),t.prototype.repositionPopper=function(e){this.isVisible?(!l&&e&&new f.default(e,this.popperElement),this.popperElement.classList.add("visible")):this.popperElement.classList.remove("visible")},t.prototype.start=function(){var e=this;this.elements=Array.prototype.slice.call(document.querySelectorAll(this.settings.selector||".hovercard")),this.elements.forEach(function(t){t.removeEventListener("mouseover",e.mouseOver.bind(e)),t.removeEventListener("click",e.mouseOver.bind(e)),t.removeEventListener("mouseout",e.mouseOut.bind(e)),l?t.addEventListener("click",e.mouseOver.bind(e)):(t.addEventListener("mouseover",e.mouseOver.bind(e)),t.addEventListener("mouseout",e.mouseOut.bind(e)))}),this.emitter.emit(u.Events.CREATED)},t.prototype.removeHoverCardElement=function(e){if(this.elements){var t=this.elements.filter(function(t){return t.innerText===e});t.forEach(function(e){return e.classList.remove("hovercard")}),this.elements=this.elements.filter(function(t){return t.innerText!==e}),this.emitter.emit(u.Events.REMOVED_ELEMENT,t)}},t.prototype.mouseOver=function(e){var t=this;if(this.isLoading=!0,this.isVisible=!0,e.target){var n=e.target,o=n.innerText;this.getData(o).then(function(e){return t.getText(e)}).then(function(e){return t.updateText(e)}).then(function(){return t.repositionPopper(n)}).catch(function(){t.removeHoverCardElement(o),t.mouseOut()}),this.emitter.emit(u.Events.SHOW,e.target)}},t.prototype.mouseOut=function(e,t){void 0===t&&(t=!1);var n=!t&&h(this.popperElement);if(!t&&this.elements)for(var o=0;o<this.elements.length;o++)h(this.elements[o])&&(n=!0);n||this.close()},t.prototype.close=function(){this.isVisible=!1,this.repositionPopper(),this.emitter.emit(u.Events.HIDE)},t.prototype.updateText=function(e){this.popperElement.innerHTML="function"==typeof this.settings.template?this.settings.template(e):d(e);var t=document.querySelector(".hovercard-close");t&&(t.removeEventListener("click",this.close.bind(this)),t.addEventListener("click",this.close.bind(this))),this.emitter.emit(u.Events.UPDATE)},t.prototype.getText=function(e){var t,n,o;return"function"==typeof this.settings.getBody&&(n=this.settings.getBody(e)),"function"==typeof this.settings.getHeading&&(t=this.settings.getHeading(e)),"function"==typeof this.settings.getImage&&(o=this.settings.getImage(e)),t||(t=e.displaytitle),n||(n=e.extract),!o&&e.thumbnail&&e.thumbnail.source&&(o=e.thumbnail.source),{heading:t,body:n,image:o}},t.prototype.getData=function(e){return i(this,void 0,void 0,function(){var t,n,o;return a(this,function(r){switch(r.label){case 0:return t="hovercard-cache-"+btoa(e),!this.settings.noCache&&(this.settings.storage||localStorage).getItem(t)?[2,JSON.parse((this.settings.storage||localStorage).getItem(t))]:"function"!=typeof this.settings.getData?[3,2]:[4,this.settings.getData(e)];case 1:n=r.sent(),r.label=2;case 2:return[4,fetch("function"==typeof this.settings.getFetchEndpoint?this.settings.getFetchEndpoint(e):"https://"+(this.settings.wikipediaLanguage||"en")+".wikipedia.org/api/rest_v1/page/summary/"+p.encode(e),this.settings.fetchConfig)];case 3:if((o=r.sent()).status>=300)throw new Error(o.statusText);return[4,o.json()];case 4:return n=r.sent(),this.isLoading=!1,this.settings.noCache||(this.settings.storage||localStorage).setItem(t,JSON.stringify(n)),[2,n]}})})},t}(c.default);t.default=m,window.Hovercard=m},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(2)),i=function(){function e(){this.emitter=new r.default}return e.prototype.on=function(e,t){return this.emitter.on(e,t)},e.prototype.off=function(e,t){return this.emitter.off(e,t)},e}();t.default=i},function(e,t,n){"use strict";n.r(t),t.default=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}},function(e,t,n){"use strict";n.r(t),function(e){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,o=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(n&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var r=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},o))}};function i(e){return e&&"[object Function]"==={}.toString.call(e)}function a(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function s(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function c(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=a(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+o)?e:c(s(e))}function f(e){return e&&e.referenceNode?e.referenceNode:e}var u=n&&!(!window.MSInputMethodContext||!document.documentMode),p=n&&/MSIE 10/.test(navigator.userAgent);function l(e){return 11===e?u:10===e?p:u||p}function d(e){if(!e)return document.documentElement;for(var t=l(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===a(n,"position")?d(n):n:e?e.ownerDocument.documentElement:document.documentElement}function h(e){return null!==e.parentNode?h(e.parentNode):e}function m(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var a,s,c=i.commonAncestorContainer;if(e!==c&&t!==c||o.contains(r))return"BODY"===(s=(a=c).nodeName)||"HTML"!==s&&d(a.firstElementChild)!==a?d(c):c;var f=h(e);return f.host?m(f.host,t):m(e,h(t).host)}function v(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var o=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||o)[t]}return e[t]}function g(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+o+"Width"],10)}function b(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],l(10)?parseInt(n["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function y(e){var t=e.body,n=e.documentElement,o=l(10)&&getComputedStyle(n);return{height:b("Height",t,n,o),width:b("Width",t,n,o)}}var w=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),E=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function L(e){return O({},e,{right:e.left+e.width,bottom:e.top+e.height})}function T(e){var t={};try{if(l(10)){t=e.getBoundingClientRect();var n=v(e,"top"),o=v(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?y(e.ownerDocument):{},s=i.width||e.clientWidth||r.width,c=i.height||e.clientHeight||r.height,f=e.offsetWidth-s,u=e.offsetHeight-c;if(f||u){var p=a(e);f-=g(p,"x"),u-=g(p,"y"),r.width-=f,r.height-=u}return L(r)}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=l(10),r="HTML"===t.nodeName,i=T(e),s=T(t),f=c(e),u=a(t),p=parseFloat(u.borderTopWidth,10),d=parseFloat(u.borderLeftWidth,10);n&&r&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var h=L({top:i.top-s.top-p,left:i.left-s.left-d,width:i.width,height:i.height});if(h.marginTop=0,h.marginLeft=0,!o&&r){var m=parseFloat(u.marginTop,10),g=parseFloat(u.marginLeft,10);h.top-=p-m,h.bottom-=p-m,h.left-=d-g,h.right-=d-g,h.marginTop=m,h.marginLeft=g}return(o&&!n?t.contains(f):t===f&&"BODY"!==f.nodeName)&&(h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=v(t,"top"),r=v(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}(h,t)),h}function M(e){if(!e||!e.parentElement||l())return document.documentElement;for(var t=e.parentElement;t&&"none"===a(t,"transform");)t=t.parentElement;return t||document.documentElement}function S(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},u=r?M(e):m(e,f(t));if("viewport"===o)i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=C(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:v(n),s=t?0:v(n,"left");return L({top:a-o.top+o.marginTop,left:s-o.left+o.marginLeft,width:r,height:i})}(u,r);else{var p=void 0;"scrollParent"===o?"BODY"===(p=c(s(t))).nodeName&&(p=e.ownerDocument.documentElement):p="window"===o?e.ownerDocument.documentElement:o;var l=C(p,u,r);if("HTML"!==p.nodeName||function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===a(t,"position"))return!0;var o=s(t);return!!o&&e(o)}(u))i=l;else{var d=y(e.ownerDocument),h=d.height,g=d.width;i.top+=l.top-l.marginTop,i.bottom=h+l.top,i.left+=l.left-l.marginLeft,i.right=g+l.left}}var b="number"==typeof(n=n||0);return i.left+=b?n:n.left||0,i.top+=b?n:n.top||0,i.right-=b?n:n.right||0,i.bottom-=b?n:n.bottom||0,i}function D(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=S(n,o,i,r),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},c=Object.keys(s).map(function(e){return O({key:e},s[e],{area:(t=s[e],t.width*t.height)});var t}).sort(function(e,t){return t.area-e.area}),f=c.filter(function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight}),u=f.length>0?f[0].key:c[0].key,p=e.split("-")[1];return u+(p?"-"+p:"")}function k(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return C(n,o?M(t):m(t,f(n)),o)}function N(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),o=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function _(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function j(e,t,n){n=n.split("-")[0];var o=N(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",c=i?"height":"width",f=i?"width":"height";return r[a]=t[a]+t[c]/2-o[c]/2,r[s]=n===s?t[s]-o[f]:t[_(s)],r}function P(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function F(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var o=P(e,function(e){return e[t]===n});return e.indexOf(o)}(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&i(n)&&(t.offsets.popper=L(t.offsets.popper),t.offsets.reference=L(t.offsets.reference),t=n(t,e))}),t}function H(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function A(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==document.body.style[i])return i}return null}function I(e){var t=e.ownerDocument;return t?t.defaultView:window}function W(e,t,n,o){n.updateBound=o,I(e).addEventListener("resize",n.updateBound,{passive:!0});var r=c(e);return function e(t,n,o,r){var i="BODY"===t.nodeName,a=i?t.ownerDocument.defaultView:t;a.addEventListener(n,o,{passive:!0}),i||e(c(a.parentNode),n,o,r),r.push(a)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function B(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,I(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function R(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&R(t[n])&&(o="px"),e.style[n]=t[n]+o})}var V=n&&/Firefox/i.test(navigator.userAgent);function q(e,t,n){var o=P(e,function(e){return e.name===t}),r=!!o&&e.some(function(e){return e.name===n&&e.enabled&&e.order<o.order});if(!r){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}var z=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Y=z.slice(3);function G(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Y.indexOf(e),o=Y.slice(n+1).concat(Y.slice(0,n));return t?o.reverse():o}var J={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function K(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=a.indexOf(P(a,function(e){return-1!==e.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var c=/\s*,\s*|\s+/,f=-1!==s?[a.slice(0,s).concat([a[s].split(c)[0]]),[a[s].split(c)[1]].concat(a.slice(s+1))]:[a];return(f=f.map(function(e,o){var r=(1===o?!i:i)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],a=r[2];if(!i)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=o}return L(s)[t]/100*i}if("vh"===a||"vw"===a)return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i;return i}(e,r,t,n)})})).forEach(function(e,t){e.forEach(function(n,o){R(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))})}),r}var $={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,a=r.popper,s=-1!==["bottom","top"].indexOf(n),c=s?"left":"top",f=s?"width":"height",u={start:E({},c,i[c]),end:E({},c,i[c]+i[f]-a[f])};e.offsets.popper=O({},a,u[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,a=r.reference,s=o.split("-")[0],c=void 0;return c=R(+n)?[+n,0]:K(n,i,a,s),"left"===s?(i.top+=c[0],i.left-=c[1]):"right"===s?(i.top+=c[0],i.left+=c[1]):"top"===s?(i.left+=c[0],i.top-=c[1]):"bottom"===s&&(i.left+=c[0],i.top+=c[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||d(e.instance.popper);e.instance.reference===n&&(n=d(n));var o=A("transform"),r=e.instance.popper.style,i=r.top,a=r.left,s=r[o];r.top="",r.left="",r[o]="";var c=S(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=i,r.left=a,r[o]=s,t.boundaries=c;var f=t.priority,u=e.offsets.popper,p={primary:function(e){var n=u[e];return u[e]<c[e]&&!t.escapeWithReference&&(n=Math.max(u[e],c[e])),E({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=u[n];return u[e]>c[e]&&!t.escapeWithReference&&(o=Math.min(u[n],c[e]-("right"===e?u.width:u.height))),E({},n,o)}};return f.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=O({},u,p[t](e))}),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(r),s=a?"right":"bottom",c=a?"left":"top",f=a?"width":"height";return n[s]<i(o[c])&&(e.offsets.popper[c]=i(o[c])-n[f]),n[c]>i(o[s])&&(e.offsets.popper[c]=i(o[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!q(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,s=i.popper,c=i.reference,f=-1!==["left","right"].indexOf(r),u=f?"height":"width",p=f?"Top":"Left",l=p.toLowerCase(),d=f?"left":"top",h=f?"bottom":"right",m=N(o)[u];c[h]-m<s[l]&&(e.offsets.popper[l]-=s[l]-(c[h]-m)),c[l]+m>s[h]&&(e.offsets.popper[l]+=c[l]+m-s[h]),e.offsets.popper=L(e.offsets.popper);var v=c[l]+c[u]/2-m/2,g=a(e.instance.popper),b=parseFloat(g["margin"+p],10),y=parseFloat(g["border"+p+"Width"],10),w=v-e.offsets.popper[l]-b-y;return w=Math.max(Math.min(s[u]-m,w),0),e.arrowElement=o,e.offsets.arrow=(E(n={},l,Math.round(w)),E(n,d,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(H(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=S(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],r=_(o),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case J.FLIP:a=[o,r];break;case J.CLOCKWISE:a=G(o);break;case J.COUNTERCLOCKWISE:a=G(o,!0);break;default:a=t.behavior}return a.forEach(function(s,c){if(o!==s||a.length===c+1)return e;o=e.placement.split("-")[0],r=_(o);var f=e.offsets.popper,u=e.offsets.reference,p=Math.floor,l="left"===o&&p(f.right)>p(u.left)||"right"===o&&p(f.left)<p(u.right)||"top"===o&&p(f.bottom)>p(u.top)||"bottom"===o&&p(f.top)<p(u.bottom),d=p(f.left)<p(n.left),h=p(f.right)>p(n.right),m=p(f.top)<p(n.top),v=p(f.bottom)>p(n.bottom),g="left"===o&&d||"right"===o&&h||"top"===o&&m||"bottom"===o&&v,b=-1!==["top","bottom"].indexOf(o),y=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v),w=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&d||!b&&"start"===i&&v||!b&&"end"===i&&m),x=y||w;(l||g||x)&&(e.flipped=!0,(l||g)&&(o=a[c+1]),x&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=O({},e.offsets.popper,j(e.instance.popper,e.offsets.reference,e.placement)),e=F(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=i[n]-(s?r[a?"width":"height"]:0),e.placement=_(t),e.offsets.popper=L(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=P(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=P(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=d(e.instance.popper),c=T(s),f={position:r.position},u=function(e,t){var n=e.offsets,o=n.popper,r=n.reference,i=Math.round,a=Math.floor,s=function(e){return e},c=i(r.width),f=i(o.width),u=-1!==["left","right"].indexOf(e.placement),p=-1!==e.placement.indexOf("-"),l=t?u||p||c%2==f%2?i:a:s,d=t?i:s;return{left:l(c%2==1&&f%2==1&&!p&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:l(o.right)}}(e,window.devicePixelRatio<2||!V),p="bottom"===n?"top":"bottom",l="right"===o?"left":"right",h=A("transform"),m=void 0,v=void 0;if(v="bottom"===p?"HTML"===s.nodeName?-s.clientHeight+u.bottom:-c.height+u.bottom:u.top,m="right"===l?"HTML"===s.nodeName?-s.clientWidth+u.right:-c.width+u.right:u.left,a&&h)f[h]="translate3d("+m+"px, "+v+"px, 0)",f[p]=0,f[l]=0,f.willChange="transform";else{var g="bottom"===p?-1:1,b="right"===l?-1:1;f[p]=v*g,f[l]=m*b,f.willChange=p+", "+l}var y={"x-placement":e.placement};return e.attributes=O({},y,e.attributes),e.styles=O({},f,e.styles),e.arrowStyles=O({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return U(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=k(r,t,e,n.positionFixed),a=D(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),U(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},X=function(){function e(t,n){var o=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};w(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=r(this.update.bind(this)),this.options=O({},e.Defaults,a),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(O({},e.Defaults.modifiers,a.modifiers)).forEach(function(t){o.options.modifiers[t]=O({},e.Defaults.modifiers[t]||{},a.modifiers?a.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return O({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&i(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return x(e,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=k(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=D(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=j(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=F(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,H(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[A("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=W(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return B.call(this)}}]),e}();X.Utils=("undefined"!=typeof window?window:e).PopperUtils,X.placements=z,X.Defaults=$,t.default=X}.call(this,n(4))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var o=n(6),r=n(7);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(e.i,r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a={};function s(e,t,n){for(var o=0;o<t.length;o++){var r={css:t[o][1],media:t[o][2],sourceMap:t[o][3]};a[e][o]?a[e][o](r):a[e].push(h(r,n))}}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach(function(e){t.setAttribute(e,o[e])}),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var f,u=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}var l=null,d=0;function h(e,t){var n,o,r;if(t.singleton){var i=d++;n=l||(l=c(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=c(t),o=function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r()),e=n.base?e+n.base:e,t=t||[],a[e]||(a[e]=[]),s(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){a[e]||(a[e]=[]),s(e,t,n);for(var o=t.length;o<a[e].length;o++)a[e][o]();a[e].length=t.length,0===a[e].length&&delete a[e]}}}},function(e,t,n){(t=n(8)(!1)).push([e.i,'.hovercard{white-space:nowrap}.hovercard-element{position:absolute;display:none;text-decoration:none;color:inherit;z-index:15;padding-top:1rem}.hovercard-element .hovercard-card{background-color:#fff;width:330px;padding:15px 20px;border-radius:5px;box-sizing:border-box;box-shadow:0px 5px 10px rgba(0,0,0,0.1);max-height:200px;overflow:hidden}.hovercard-element .hovercard-card h3{padding-top:0;margin-top:0}.hovercard-element .hovercard-card p:last-child{margin-bottom:0}.hovercard-element.visible{display:block}.hovercard-mobile{position:fixed;left:0;right:0;overflow:auto;bottom:0;max-height:100%}.hovercard-mobile .hovercard-description::after{display:none}.hovercard-mobile .hovercard-card{border-radius:0;max-height:none;width:100%}.hovercard-card.hovercard-has-image{width:400px}.hovercard-arrow{position:absolute;z-index:17;height:20px;width:330px;box-sizing:border-box;display:none}.hovercard-card.hovercard-has-image+.hovercard-arrow{width:400px}.hovercard-arrow::before{position:absolute;bottom:0;left:50%;margin-left:-5px;content:"";width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid whitesmoke}[x-placement="top"]+.hovercard-arrow::before{border-bottom:none !important;bottom:auto;top:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid whitesmoke}.hovercard-element.hovercard-visible,.hovercard-arrow.hovercard-visible{display:block}.hovercard-close{position:absolute;right:1rem;top:1.5rem;font:inherit;line-height:1;background:none;border:0;padding:0;appearance:none;font-size:150%}.hovercard-element .hovercard-title{margin-top:0;margin-bottom:1rem}.hovercard-element .hovercard-description{margin-bottom:0}.hovercard-card.hovercard-has-image .hovercard-description{max-width:210px}.hovercard-element .hovercard-image{position:absolute;right:0;top:1rem;bottom:0;width:150px;background-size:cover;background-position:center}.hovercard-element .hovercard-description::after{content:"";position:absolute;left:0;right:0;top:175px;height:55px;background:linear-gradient(#fff, #fff)}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[n].concat(i).concat([r]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var r=[].concat(e[o]);n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),t.push(r)}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CREATED="created",e.REMOVED_ELEMENT="removed-element",e.SHOW="show",e.HIDE="hide",e.UPDATE="update"}(t.Events||(t.Events={}))},function(e,t,n){"use strict";const o=n(11),r=n(14);e.exports={encode:o,decode:r}},function(e,t,n){"use strict";const o=n(12),r=n(13)(),i=[[/%2C/g,","],[/%3A/g,":"],[/%28/g,"("],[/%29/g,")"],[/%20/g,"_"],[/%21/g,"!"]];for(let e of i)e[2]=!r.test(e[1]);e.exports=(e,t=!1)=>{let n=o(e);for(let e of i)t&&!e[2]||(n=n.replace(e[0],e[1]));return n}},function(e,t,n){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},function(e,t,n){"use strict";e.exports=()=>/[<>:"\/\\|?*\x00-\x1F]/g,e.exports.windowsNames=()=>/^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/i},function(e,t,n){"use strict";const o=/_/g;e.exports=e=>decodeURIComponent(e).replace(o," ")}])});
