(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7evw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentCount",{enumerable:!0,get:function(){return o.CommentCount}}),Object.defineProperty(t,"CommentEmbed",{enumerable:!0,get:function(){return r.CommentEmbed}}),Object.defineProperty(t,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}}),Object.defineProperty(t,"Recommendations",{enumerable:!0,get:function(){return a.Recommendations}}),t.default=void 0;var o=n("UZsz"),r=n("Bp/N"),i=n("HhXV"),a=n("FB9E"),u={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed,Recommendations:a.Recommendations};t.default=u},"Bp/N":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o=a(n("q1tI")),r=a(n("17x9")),i=n("IJ13");function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,r,i=p(a);function a(){return s(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,r=(e.commentId,e.showMedia,e.showParentComment,l(e,["width","height","commentId","showMedia","showParentComment"]));return o.default.createElement("iframe",c({},r,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}])&&f(t.prototype,n),r&&f(t,r),a}(o.default.Component);t.CommentEmbed=h,h.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},h.propTypes={commentId:r.default.string.isRequired,showMedia:r.default.bool,showParentComment:r.default.bool,width:r.default.number,height:r.default.number,className:r.default.string}},FB9E:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0;var o=u(n("q1tI")),r=u(n("17x9")),i=n("ZMnY"),a=n("IJ13");function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,r,u=m(c);function c(){return f(this,c),u.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(a.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),a.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(a.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(a.RECOMMENDATIONS_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,s(e,["shortname","config"]));return o.default.createElement("div",l({},t,{id:a.RECOMMENDATIONS_ID}))}}])&&d(t.prototype,n),r&&d(t,r),c}(o.default.Component);t.Recommendations=b,b.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,language:r.default.string})}},HS01:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){1!==e&&(t+="s");return e+" "+t+" "+n};!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(n("q1tI"))},HhXV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o=u(n("q1tI")),r=u(n("17x9")),i=n("ZMnY"),a=n("IJ13");function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,r,u=m(c);function c(){return f(this,c),u.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById(a.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),a.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(a.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById(a.THREAD_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),a.CALLBACKS.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,s(e,["shortname","config"]));return o.default.createElement("div",l({},t,{id:a.THREAD_ID}))}}])&&d(t.prototype,n),r&&d(t,r),c}(o.default.Component);t.DiscussionEmbed=b,b.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,language:r.default.string,categoryID:r.default.string,remoteAuthS3:r.default.string,apiKey:r.default.string,preData:r.default.func,preInit:r.default.func,onInit:r.default.func,onReady:r.default.func,afterRender:r.default.func,preReset:r.default.func,onIdentify:r.default.func,beforeComment:r.default.func,onNewComment:r.default.func,onPaginate:r.default.func}).isRequired}},IJ13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CALLBACKS=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.COMMENT_EMBED_HEIGHT=t.COMMENT_EMBED_WIDTH=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.EMBED_SCRIPT_ID=t.THREAD_ID=void 0;t.THREAD_ID="disqus_thread";t.EMBED_SCRIPT_ID="dsq-embed-scr";t.COMMENT_COUNT_CLASS="disqus-comment-count";t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr";t.COMMENT_EMBED_WIDTH=420;t.COMMENT_EMBED_HEIGHT=320;t.RECOMMENDATIONS_ID="disqus_recommendations";t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr";t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},LlRK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(c){r=!0,i=c}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("q1tI")),u=l(n("HS01")),c=l(n("zcrH"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=a.Component,p=86400,m=function(e){function t(){var e,n,o;s(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.isStillMounted=!1,o.tick=function(e){if(o.isStillMounted&&o.props.live){var t=(0,c.default)(o.props.date).valueOf();if(t){var n=o.props.now(),r=Math.round(Math.abs(n-t)/1e3),i=r<60?1e3:r<3600?6e4:r<p?36e5:0,a=Math.min(Math.max(i,1e3*o.props.minPeriod),1e3*o.props.maxPeriod);a&&(o.timeoutId&&clearTimeout(o.timeoutId),o.timeoutId=setTimeout(o.tick,a)),e||o.forceUpdate()}else console.warn("[react-timeago] Invalid Date provided")}},f(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.props.live&&this.tick(!0)}},{key:"componentDidUpdate",value:function(e){this.props.live===e.live&&this.props.date===e.date||(!this.props.live&&this.timeoutId&&clearTimeout(this.timeoutId),this.tick())}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1,this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}},{key:"render",value:function(){var e=this.props,t=e.date,n=e.formatter,i=e.component,l=(e.live,e.minPeriod,e.maxPeriod,e.title),s=e.now,f=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["date","formatter","component","live","minPeriod","maxPeriod","title","now"]),d=(0,c.default)(t).valueOf();if(!d)return null;var m=s(),y=Math.round(Math.abs(m-d)/1e3),h=d<m?"ago":"from now",b=y<60?[Math.round(y),"second"]:y<3600?[Math.round(y/60),"minute"]:y<p?[Math.round(y/3600),"hour"]:y<604800?[Math.round(y/p),"day"]:y<2592e3?[Math.round(y/604800),"week"]:y<31536e3?[Math.round(y/2592e3),"month"]:[Math.round(y/31536e3),"year"],g=r(b,2),v=g[0],w=g[1],O=void 0===l?"string"==typeof t?t:(0,c.default)(t).toISOString().substr(0,16).replace("T"," "):l,_="time"===i?Object.assign({},f,{dateTime:(0,c.default)(t).toISOString()}):f,I=u.default.bind(null,v,w,h);return a.createElement(i,o({},_,{title:O}),n(v,w,h,d,I,s))}}]),t}(d);m.displayName="TimeAgo",m.defaultProps={live:!0,component:"time",minPeriod:0,maxPeriod:1/0,formatter:u.default,now:function(){return Date.now()}},t.default=m},UZsz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o=u(n("q1tI")),r=u(n("17x9")),i=n("ZMnY"),a=n("IJ13");function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,r,u=m(c);function c(){return f(this,c),u.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById(a.COMMENT_COUNT_SCRIPT_ID)?b():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),a.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(a.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config),n=e.children,r=e.className,i=s(e,["shortname","config","children","className"]),u=r?" ".concat(r):"";return o.default.createElement("span",l({},i,{className:"".concat(a.COMMENT_COUNT_CLASS).concat(u),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}])&&d(t.prototype,n),r&&d(t,r),c}(o.default.Component);t.CommentCount=g,g.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string}).isRequired,className:r.default.string,children:r.default.node}},ZMnY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((function(e){return e.remove()}))},t.debounce=function(e,t,n){var o;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},u=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),u&&e.apply(r,i)}},t.isReactElement=u,t.shallowComparison=function e(t,n){var o,r=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,u=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){u=!0,r=e},f:function(){try{i||null==o.return||o.return()}finally{if(u)throw r}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(r.s();!(o=r.n()).done;){var c=o.value;if("object"===i(t[c])){if(e(t[c],n[c]))return!0}else if(t[c]!==n[c]&&!u(t[c]))return!0}}catch(l){r.e(l)}finally{r.f()}return!1};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function u(e){return!!r.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return r.default.isValidElement(e)}))}},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"disqusConfig",(function(){return S}));var o=n("q1tI"),r=n.n(o),i=n("LlRK"),a=n.n(i),u=n("dv3O"),c=(n("p/d+"),n("vOnD")),l=n("dI71"),s=n("+ZDr"),f=n.n(s),d=c.default.ol.withConfig({displayName:"breadcrumb__Base",componentId:"sc-1tnfc9j-0"})(["padding-top:10px;list-style:none;margin:0;& li a,& li{font-family:'Raleway','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:24px;font-weight:400;text-transform:uppercase;letter-spacing:2px;font-weight:700;font-size:11px;font-weight:600;text-decoration:none;display:inline-block;color:#fff;}& > li + li:before{padding:0 8px;color:#ccc;content:'>';}& > li:last-child > a{color:#777;pointer-events:none;cursor:default;}@media (min-width:831px){float:right;}",""],(function(e){return e.dark&&Object(c.css)(["& li a,& li{color:#444;}"])})),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props.crumbs.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(f.a,{to:e.link},e.name))}));return r.a.createElement(d,this.props,e)},t}(r.a.Component),m=c.default.hr.withConfig({displayName:"bar__Bar",componentId:"sc-7kfhr0-0"})(["margin-bottom:48px;border:none;border-top:1px solid #555;margin:0 0 24px;width:100%;height:0;box-sizing:content-box;"]),y=(n("vg9a"),n("7evw")),h=n("W/9C"),b=(n("AlkZ"),Object(c.createGlobalStyle)(['@import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";html{max-width:100vw;overflow-x:hidden;}'])),g=c.default.div.withConfig({displayName:"blog-post__Body",componentId:"sc-1g2ojw6-0"})(["display:flex;flex-direction:column;width:100vw;img{margin-bottom:0;}"]),v=(c.default.div.withConfig({displayName:"blog-post__imgRight",componentId:"sc-1g2ojw6-1"})(["& > div{float:right;width:54%;padding-left:25px;}"]),c.default.div.withConfig({displayName:"blog-post__Header",componentId:"sc-1g2ojw6-2"})(["height:fit-contents;padding:0;background:#292929;position:relative;overflow:hidden;& > div{padding-top:30px;margin:auto;max-width:1100px;}"])),w=c.default.ol.withConfig({displayName:"blog-post__Tags",componentId:"sc-1g2ojw6-3"})(["float:right;list-style:none;margin:0;& li a,& li{font-weight:600;text-transform:uppercase;text-decoration:none;display:inline-block;color:#222;}& > li + li:before{padding:0 8px;font-weight:400;color:#444;content:'|';}"]),O=c.default.div.withConfig({displayName:"blog-post__Content",componentId:"sc-1g2ojw6-4"})(["margin:0 auto;max-width:960px;min-width:0;padding:0px 1.0875rem 1.45rem;padding-top:5vh;hr{margin:0 0 40px;}"]),_=c.default.h1.withConfig({displayName:"blog-post__Title",componentId:"sc-1g2ojw6-5"})(["margin-top:0;text-transform:capitalize;color:#fff;"]),I=c.default.i.withConfig({displayName:"blog-post__Timestamp",componentId:"sc-1g2ojw6-6"})(["float:right;"]),E=c.default.h5.withConfig({displayName:"blog-post__TimeToRead",componentId:"sc-1g2ojw6-7"})(["text-transform:uppercase;margin-top:0.5em;display:inline-block;"]),S=function(e){e.slug;var t=e.title;return{shortname:{}.GATSBY_DISQUS_NAME,config:{identifier:t}}};t.default=function(e){var t=e.data,n=e.location,o=t.markdownRemark,i=[{name:"home",link:"/"},{name:"blogfolio",link:"/#blogfolio"},{name:o.frontmatter.title,link:n.pathname}],c=o.frontmatter.tags.map((function(e){return r.a.createElement("li",{key:e},e)})),l=o.frontmatter,s=(o.excerpt,o.body,o.timeToRead,l.title),f=l.slug;l.cover,l.showToc;return r.a.createElement("div",null,r.a.createElement(g,null,r.a.createElement(b,null),r.a.createElement(v,null,r.a.createElement(u.Flex,{flexWrap:"wrap"},r.a.createElement(u.Box,{px:2,width:[1,2/3,1/3]},r.a.createElement(_,null,o.frontmatter.title)),r.a.createElement(u.Box,{px:2,width:[1,2/3]},r.a.createElement(p,{crumbs:i})),r.a.createElement(u.Box,{px:2,width:[1]},r.a.createElement(m,null)))),r.a.createElement(O,null,r.a.createElement(E,null,o.timeToRead," min read"),r.a.createElement(w,null,c),r.a.createElement(m,null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.html}}),r.a.createElement(y.DiscussionEmbed,S({slug:f,title:s})),r.a.createElement(I,null,"Posted: ",r.a.createElement(a.a,{date:o.frontmatter.date}))),r.a.createElement(h.a,null)))}},zcrH:function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Date(e);if(!Number.isNaN(t.valueOf()))return t;var n=String(e).match(/\d+/g);if(null==n||n.length<=2)return t;var r=n.map((function(e){return parseInt(e)})),i=(s=r,Array.isArray(s)?s:Array.from(s)),a=i[0],u=i[1],c=i.slice(2),l=[a,u-1].concat(o(c));return new Date(Date.UTC.apply(Date,o(l)));var s}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5344c1e69bac2cdb94df.js.map