(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[454],{1254:function(e,t,n){"use strict";var o=n(4836);t.__esModule=!0,t.default=void 0;var a=o(n(434)),i=o(n(6556)),r=o(n(7867)),s=o(n(7294)),c=o(n(5697)),l=n(989),u=(0,l.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="lucasflores-github-io",n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,l.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,l.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.className,o=e.placeholder,r=(0,i.default)(e,["config","className","placeholder"]),c="disqus-comment-count"+(n?" "+n:"");return s.default.createElement("span",(0,a.default)({className:c,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r),o)},t}(s.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string}),placeholder:c.default.string,className:c.default.string}},4294:function(e,t,n){"use strict";var o=n(4836);t.__esModule=!0,t.default=void 0;var a=o(n(434)),i=o(n(6556)),r=o(n(7867)),s=o(n(7294)),c=o(n(5697)),l=function(e){function t(){return e.apply(this,arguments)||this}(0,r.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,i.default)(e,["commentId","showMedia","showParentComment"]));return s.default.createElement("iframe",(0,a.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(s.default.Component);t.default=l,l.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},l.propTypes={commentId:c.default.oneOfType([c.default.number,c.default.string]).isRequired,width:c.default.number,height:c.default.number,showMedia:c.default.bool,showParentComment:c.default.bool}},2605:function(e,t,n){"use strict";var o=n(4836);t.__esModule=!0,t.default=void 0;var a=o(n(434)),i=o(n(6556)),r=o(n(7867)),s=o(n(7294)),c=o(n(5697)),l=n(989),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="lucasflores-github-io",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,l.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,l.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(o){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var n=window.document.getElementById(t.id);n.parentNode.removeChild(n)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,a.default)({id:"disqus_thread"},t))},t}(s.default.Component);t.default=u,u.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string,language:c.default.string,remoteAuthS3:c.default.string,apiKey:c.default.string})}},8200:function(e,t,n){"use strict";var o=n(4836);var a=o(n(2605));t.h$=a.default;var i=o(n(1254));t.dS=i.default,o(n(4294)).default,a.default},989:function(e,t,n){"use strict";var o=n(4836);t.__esModule=!0,t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o;return function(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];var s=this,c=n&&!o;window.clearTimeout(o),o=setTimeout((function(){o=null,n||e.apply(s,i)}),t),c&&e.apply(s,i)}},t.isReactElement=r,t.shallowComparison=function e(t,n){var o,i=new Set(Object.keys(t).concat(Object.keys(n))),s=(o=[]).concat.apply(o,(0,a.default)(i)).filter((function(o){if("object"==typeof t[o]){if(e(t[o],n[o]))return!0}else if(t[o]!==n[o]&&!r(t[o]))return!0;return!1}));return 0!==s.length};var a=o(n(861)),i=o(n(7294));function r(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},2448:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var o=n(1804),a=n.n(o),i=n(1151),r=n(7294),s=n.p+"static/keypacitancelogo-03b718e08e468ce78a86c2a5c2d9324f.png",c=n.p+"static/keyschematic-8a31408c2e008c063f657ab88e8703ee.png",l=n.p+"static/circuit-31b538ca872d4f613de7ed1e94e20a8f.jpg",u=n.p+"static/pennappsXVIIphotobooth-e1da6efddcb0c4b8055a71c052cdc02f.jpg";function d(e){const t=Object.assign({blockquote:"blockquote",h3:"h3",h1:"h1",p:"p",em:"em",strong:"strong",ol:"ol",li:"li"},(0,i.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.blockquote,null,"\n",r.createElement(t.h3,null,"This time around we pursue one of my ideas. Effectively a keyboard with capacitive touch key caps that enable an entire new layer of input and interaction with your computer. We demonstrate this new peripheral with A VR killer app that allows you to see where your fingers are on the keyboard while in VR (via a VR keybaord displaying read outs from the real 'touch' keybaord)"),"\n"),"\n",r.createElement(t.h1,null,"Introduction"),"\n",r.createElement("div",{className:"image-right"},r.createElement("img",{src:s,alt:"Pennapps XVII"}),r.createElement("figcaption",{className:"fig-spacing"},r.createElement("i",null,"Another logo creation by me. Potentially a bit dated now but the easter egg here is that the capacitor 'plates' are a profile view of older Apple bluetooth keybaords"))),"\n",r.createElement(t.p,null,r.createElement(t.em,null,r.createElement(t.strong,null,"keypacitance"))," adds a whole new layer of touch input into your computer by way of capacitance touch sensing.\nBy adding capacitive touch sensors to the individual keys on your keyboard, a new way of interacting with your computer can be realized.\nThe potential applications and neat projects you can do with this are as numerous as developers are creative.\nThat being said, our hack focuses on one specific application that we think is pretty cool, VR."),"\n",r.createElement(t.p,null,"#VR Application\nEven the expert typists out there can fumble up on the keyboard if they need to hit a special key or two while in VR.\nAnd it is silly to think that you have to rip yourself out of the VR world or type something out every time you need to re-orient yourself on your keyboard.\nThe keypacitence VR application allows you to type on your keyboard unimpeded while experiencing VR.\nWether you are browsing the web, writing some software, or playing games with your VR headset on you will never have to rip off that headset to see where the hell your hands are again.\nBy simply resting your hands on or dragging your fingers across the keys you are able to see (in VR) exactly which keys are at your fingertips on a VR keyboard in the application.\nNo need to blindly type a key to see where you’re at or take off your headset.\nWorking on your desktop in VR just became so much easier!"),"\n",r.createElement(t.p,null,"#Hacking it Together"),"\n",r.createElement("div",{className:"page-image"},r.createElement("div",{className:"image-right"},r.createElement("img",{src:c,alt:"Pennapps XVII"}),r.createElement("figcaption",{className:"fig-spacing"},r.createElement("i",null,"The circuit diagram for a single capacitive touch sensor using a Arduino UNO"))),r.createElement("div",{className:"image-credit"},"image source: ",r.createElement("a",{href:"https://circuits4you.com/2016/05/13/capacitance-measurement-arduino/",itemprop:"citation"},"circuits4you")," ",r.createElement("font",{size:"1"},"(and edited by me)"))),"\n",r.createElement("div",{className:"image-right"},r.createElement("img",{src:l,alt:"Pennapps XVII"}),r.createElement("figcaption",{className:"fig-spacing"},r.createElement("i",null,"Using our basic circuits education we get in E&M to get some capacitors working"))),"\n",r.createElement(t.p,null,"There were 3 main parts to then project."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Building an Arduino circuit to detect the capacitance of the keys and deliver that information to the computer."),"\n",r.createElement(t.li,null,"Writing the Unity code to interpret the information on serial connection and translate it into color changes for the keys."),"\n",r.createElement(t.li,null,"Designing a virtual keyboard in Unity and interfacing that with the code written in step 2."),"\n"),"\n",r.createElement(t.p,null,'Due to the obvious time constraints of the competition we decided to begin with converting just three keys on the keyboard, with the option to scale to more if time allowed.\nWe were also limited to the number of useable pins on the Arduino (sourcing another Arduino was possible but would have made the project unnecessarily complicated).\nWe used a simple RC circuit design to turn the keys into capacitance sensors.\nThe circuit diagram for a single capacitor is shown in the figure to the right.\nBy using one pin on the Arduino as a voltage source, and a second as a sensor, we\'re able to determine a "charge time" associated with the natural capacitance of the circuit.\nA finger touching the copper foil changes the capacitance of the circuit and therefore its charging time.\nThe Arduino code detects this change, and above a certain threshold indicates the "key" as being touched.\nEvery 10 milliseconds, all the state of all 3 keys is calculated, and the output is sent from the Arduino to computer via a serial connection.\nThe fully connected circuit for the three capacitive keys is shown below on the right.'),"\n",r.createElement(t.p,null,"We then pull this data using a C# script in ",r.createElement("a",{href:"https://en.wikipedia.org/wiki/Unity_(game_engine)"}," Unity")," (Links to Arduino and Unity code to come once I get things organized in a repository, or just ask for them in the comments if I am taking forever!).\nWe treat each key on the virtual keyboard as its own object, and set conditions for the color they manifest based on the information we've pulled from the serial port.\nIf the Arduino data indicates a key is being touched, we change its color.\nSince we treat each key as its own object this method is easily scalable (provided enough power; there is a voltage drop in the source pin associated with the capacitive charging due to multiple key presses) and we are able to register multiple independent key-presses simultaneously."),"\n",r.createElement(t.p,null,"#The Competition\nThe competition was effectively a disaster for us this year.\nThis time around it was actually the earliest we ever had a fully functional proof-of-concept ready to show at the expo.\nSo we were going in pretty confident.\nHowever our hack required a lot of setup.\nSebastian had to bring his PC from home to be able to even run the Oculus (VR headset).\nSo in our rush to re-set up everything something went wrong.\nNot completely wrong though.\nThe hack kind-of worked, i.e. it worked sometimes.\nWhich was in some ways worse.\nWe tried to trouble shoot on the fly but we could not figure out the issue before the judge came to our table.\nAnd while I think we did a good job at explaining the hack we were really counting on the pizazz of the judge putting on the VR headset and the hack working as expected.\nThis of course didn't happen because it was immediately buggy and the judge was underwhelmed.\nOf course by the end of the expo we did figure out the issue, a loose (not really 'loose' but not shoved in all the way) USB connection into the Arduino.\nSomething none of us really considered as we all assumed if there was a faulty connection (which was a leading theory given how it was behaving) it would obviously be somewhere in the hacky wiring of the circuit coming in/out of the Arduino/breadboard and not a standard USB connection.\nAnd so all our time troubleshooting before judgement was spent checking and re-checking those connections.\nUltimately our first place dreams were dahsed as we did not even make it to the second round this time.\nBut lessons learned and I still think this was a pretty cool hack and something I could easily see existing in today's keybaords.\nThanks for reading!"),"\n",r.createElement("div",{className:"page-image"},r.createElement("img",{src:u,alt:"Pennapps XVII"}),r.createElement("div",{className:"image-credit"},"image source: ",r.createElement("a",{href:"https://www.facebook.com/pg/pennapps/photos/",itemprop:"citation"},"PennApps facebook"))),"\n",r.createElement("figcaption",{className:"fig-spacing"},r.createElement("i",null,"Sebastian (right) and I (left) getting in an early morning photobooth sesh while monchin some bagels on the second day of hacking")))}var h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?r.createElement(t,e,r.createElement(d,e)):d(e)},p=n(1883),m=n(8032),f=n(8200),g=n(3304),y=n(9357);const w=e=>{let{data:t,location:n,children:o}=e;const i=t.mdx;let s={identifier:i.id,title:i.frontmatter.title.mdx};return r.createElement(g.Z,null,r.createElement(y.Z,{title:i.frontmatter.title.mdx,description:i.excerpt}),r.createElement("div",{className:"clearfix post-content-box"},r.createElement("article",{className:"article-page"},r.createElement("div",{className:"page-content"},i.frontmatter.img&&r.createElement("div",{className:"page-cover-image"},r.createElement("figure",null,r.createElement(m.G,{image:i.frontmatter.img.childImageSharp.gatsbyImageData,className:"page-image",key:i.frontmatter.img.childImageSharp.gatsbyImageData.src,alt:""}))),r.createElement("div",{className:"wrap-content"},r.createElement("header",{className:"header-page"},r.createElement("h1",{className:"page-title"},i.frontmatter.title),r.createElement("div",{className:"page-date"},r.createElement("span",null,i.frontmatter.date))),r.createElement("div",{itemProp:"articleBody"},o),r.createElement("div",{className:"page-footer"},r.createElement("div",{className:"page-tag"},i.frontmatter.tags&&i.frontmatter.tags.map((e=>r.createElement("span",{key:e},r.createElement(p.Link,{className:"tag",to:"/tags/"+a()(e)+"/"},e))))))),r.createElement(f.dS,{config:s,placeholder:"..."}),r.createElement(f.h$,{config:s})))))};function b(e){return r.createElement(w,e,r.createElement(h,e))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,n){var o=n(3897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},6556:function(e){e.exports=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var o=n(3405),a=n(9498),i=n(6116),r=n(2281);e.exports=function(e){return o(e)||a(e)||i(e)||r()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,n){var o=n(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},1151:function(e,t,n){"use strict";n.d(t,{ah:function(){return i}});var o=n(7294);const a=o.createContext({});function i(e){const t=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-users-lucasflores-documents-flexible-gatsby-content-blog-keypacitance-index-md-44e2d51c5ce3959e82ca.js.map