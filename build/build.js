!function a(i,r,o){function s(t,e){if(!r[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=r[t]={exports:{}},i[t][0].call(n.exports,function(e){return s(i[t][1][e]||e)},n,n.exports,a,i,r,o)}return r[t].exports}for(var l="function"==typeof require&&require,e=0;e<o.length;e++)s(o[e]);return s}({1:[function(e,t,n){t.exports=function(){return function(a){var i;function e(e){var t,n;e&&(t=i.indexOf(e),n=a.slide(),r(e,"active"),r(e,"inactive"),r(e,"before"),r(e,"after"),t!==n?(o(e,"inactive"),o(e,t<n?"before":"after")):o(e,"active"))}function r(e,t){e.classList.remove("bespoke-backdrop-"+t)}function o(e,t){e.classList.add("bespoke-backdrop-"+t)}i=a.slides.map(function(e){var t=e.getAttribute("data-bespoke-backdrop");if(t){e=document.createElement("div");return e.className=t,e.classList.add("bespoke-backdrop"),a.parent.appendChild(e),e}}),a.on("activate",function(){i.forEach(e)})}}},{}],2:[function(e,t,n){t.exports=function(o){return function(e){var t,n,r=e.slides.map(function(e){return[].slice.call(e.querySelectorAll("string"==typeof o?o:"[data-bespoke-bullet]"),0)}),a=function(a,i){t=a,n=i,r.forEach(function(e,n){e.forEach(function(e,t){e.classList.add("bespoke-bullet"),n<a||n===a&&t<=i?(e.classList.add("bespoke-bullet-active"),e.classList.remove("bespoke-bullet-inactive")):(e.classList.add("bespoke-bullet-inactive"),e.classList.remove("bespoke-bullet-active")),n===a&&t===i?e.classList.add("bespoke-bullet-current"):e.classList.remove("bespoke-bullet-current")})})},i=function(e){return void 0!==r[t][n+e]};e.on("next",function(){var e=t+1;if(i(1))return a(t,n+1),!1;r[e]&&a(e,0)}),e.on("prev",function(){var e=t-1;if(i(-1))return a(t,n-1),!1;r[e]&&a(e,r[e].length-1)}),e.on("slide",function(e){a(e.index,0)}),a(0,0)}}},{}],3:[function(e,t,n){t.exports=function(){return function(i){function r(e,t){e.classList.add("bespoke-"+t)}function o(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()}function t(e,t){var n=i.slides[i.slide()],a=t-i.slide(),t=0<a?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(o.bind(null,e)),e!==n&&["inactive",t,t+"-"+Math.abs(a)].map(r.bind(null,e))}r(i.parent,"parent"),i.slides.map(function(e){r(e,"slide")}),i.on("activate",function(e){i.slides.map(t),r(e.slide,"active"),o(e.slide,"inactive")})}}},{}],4:[function(e,t,n){t.exports=function(i){return function(t){var n=(i=i&&(i.object||i.name||i.scope)?i:{object:i}).object,e=i.name||"bespoke",a=i.scope||window;n?a[e]=n:n=a[e]||(a[e]={}),(Array.isArray(n.decks)?n.decks:n.decks=[]).push(n.deck=t),t.on("destroy",function(){var e=n.decks.indexOf(t);0<=e&&n.decks.splice(e,1),delete n.deck})}}},{}],5:[function(e,t,n){t.exports=function(){return function(e){function a(){var e,t=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?(e=document).exitFullscreen||e.webkitExitFullscreen||e.mozCancelFullScreen||e.msExitFullscreen:(e=document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.mozRequestFullScreen||e.msRequestFullscreen;t.apply(e)}function t(e){var t,n=e.which;70!==n&&122!==n||((t=e).ctrlKey||t.shiftKey||t.altKey||t.metaKey)||(a(),122===n&&e.preventDefault())}var n="keydown";(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&(e.on("destroy",function(){document.removeEventListener(n,t)}),e.on("fullscreen.toggle",a),document.addEventListener(n,t))}}},{}],6:[function(e,t,n){t.exports=function(){return function(t){function e(){var n=window.location.hash.slice(1),e=parseInt(n,10);n&&(e?a(e-1):t.slides.forEach(function(e,t){e.getAttribute("data-bespoke-hash")===n&&a(t)}))}var a=function(e){e=-1<e&&e<t.slides.length?e:0;e!==t.slide()&&t.slide(e)};setTimeout(function(){e(),t.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",e)},0)}}},{}],7:[function(e,t,n){t.exports=function(){return function(t){function n(e,t,n,a){for(var i=-1,r=t.querySelectorAll(e+(a||"")),o=r.length;++i<o;n(r[i]));}function a(e,t){e.contentWindow.postMessage(JSON.stringify(t),"*")}function i(e){var t=e.hasAttribute("data-rewind"),n=Math.min(Math.max(parseFloat(e.getAttribute("data-volume")),0),10);if(e.play)t&&e.readyState&&(e.currentTime=0),0<=n&&(e.volume=n/10),e.play();else if(f.test(e.src))t&&a(e,{event:g,func:"seekTo",args:[0]}),0<=n&&a(e,{event:g,func:"setVolume",args:[10*n]}),a(e,{event:g,func:"playVideo"});else if(d.test(e.src)){if(m)return console.warn("WARNING: Cannot play Vimeo video when deck is loaded via file://.");t&&a(e,{method:"seekTo",value:0}),0<=n&&a(e,{method:"setVolume",value:n/10}),a(e,{method:"play"})}}function r(e){e.pause?e.pause():f.test(e.src)?a(e,{event:g,func:"pauseVideo"}):!m&&d.test(e.src)&&a(e,{method:"pause"})}function o(e,t){e[t||"src"]=e.getAttribute(t||"src")}function s(e){try{return e.contentDocument.rootElement}catch(e){}}function l(e,t){(s(e)||e).classList[t||"add"]("active")}function c(e){e.hasAttribute("data-reload")?o(e,"data"):s(e)?l(e):e.onload=function(){t.slides[t.slide()].contains(e)&&l(e)}}function u(e){l(e,"remove")}function p(e){b(e,r)}var d=/\/\/player\.vimeo\.com\//,f=/\/\/www\.youtube\.com\/embed\//,g="command",m="file:"===location.protocol,b=n.bind(null,"audio,video,iframe"),h=n.bind(null,'object[type="image/svg+xml"]');t.on("activate",function(e){if(e.preview)return p(e.slide);var t;t=e.slide,b(t,i),t=e.slide,h(t,c),n('img[data-reload][src$=".gif"]',e.slide,o)}),t.on("deactivate",function(e){p(e.slide),e=e.slide,h(e,u,":not([data-reload])")})}}},{}],8:[function(e,t,n){t.exports=function(){return function(a){function e(e){if(n=(t=e).which,!(t.ctrlKey||t.shiftKey&&(36===n||35===n)||t.altKey||t.metaKey))switch(e.which){case 32:return(e.shiftKey?a.prev:a.next)();case 39:case 34:case 76:return a.next();case 37:case 33:case 72:return a.prev();case 36:return a.slide(0);case 35:return a.slide(a.slides.length-1)}var t,n}var t="keydown";a.on("destroy",function(){document.removeEventListener(t,e)}),document.addEventListener(t,e)}}},{}],9:[function(e,t,n){t.exports=function(f){return function(t){function e(e){u=1===e.touches.length?e.touches[0][p]:null}function n(e){if(null!==u)return void 0===u?e.preventDefault():void(Math.abs(a=e.touches[0][p]-u)>d&&((0<a?t.prev:t.next)(),u=e.preventDefault()))}var a,i=f||{},r="touchstart",o="touchmove",s="addEventListener",l="removeEventListener",c=t.parent,u=null,p="page"+("y"===i.axis?"Y":"X"),d="number"==typeof i.threshold?i.threshold:50/window.devicePixelRatio;t.on("destroy",function(){c[l](r,e),c[l](o,n)}),c[s](r,e),c[s](o,n)}}},{}],10:[function(a,e,t){e.exports=function(e){e=e||{};var t=a("bespoke-nav-kbd")(e.kbd),n=a("bespoke-nav-touch")(e.touch);return function(e){t(e),n(e)}}},{"bespoke-nav-kbd":8,"bespoke-nav-touch":9}],11:[function(e,t,n){t.exports=function(i){return function(t){var e=document.createElement("div"),n=document.createElement("div"),a="vertical"===i?"height":"width";e.className="bespoke-progress-parent",n.className="bespoke-progress-bar",e.appendChild(n),t.parent.appendChild(e),t.on("activate",function(e){n.style[a]=100*e.index/(t.slides.length-1)+"%"})}}},{}],12:[function(e,t,n){t.exports=function(c){return function(e){var n,a=e.parent,t=e.slides[0],i=t.offsetHeight,r=t.offsetWidth,t="zoom"===c||"zoom"in a.style&&"transform"!==c,o=t?e.slides:e.slides.map(function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t}),s=(n="Transform","Moz Webkit O ms".split(" ").reduce(function(e,t){return t+n in a.style?t+n:e},n.toLowerCase())),l=t?function(e,t){t.style.zoom=e}:function(e,t){t.style[s]="scale("+e+")"},t=function(){var e=a.offsetWidth/r,t=a.offsetHeight/i;o.forEach(l.bind(null,Math.min(e,t)))};window.addEventListener("resize",t),t()}}},{}],13:[function(c,a,i){(function(n){(function(){var e,t;e=function(){return function a(i,r,o){function s(n,e){if(!r[n]){if(!i[n]){var t="function"==typeof c&&c;if(!e&&t)return t(n,!0);if(l)return l(n,!0);throw new Error("Cannot find module '"+n+"'")}t=r[n]={exports:{}};i[n][0].call(t.exports,function(e){var t=i[n][1][e];return s(t||e)},t,t.exports,a,i,r,o)}return r[n].exports}for(var l="function"==typeof c&&c,e=0;e<o.length;e++)s(o[e]);return s}({1:[function(e,t,n){var a=e("bespoke-classes"),i=e("insert-css");t.exports=function(){return i('/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0}mark{background:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{box-sizing:border-box;margin:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}article{transition:all .3s ease;display:none}article.bespoke-parent{display:block;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;-webkit-perspective:600px;perspective:600px}@media print{article.bespoke-parent{overflow:visible;position:static}}article.bespoke-parent.green{background:#00f3a5}article.bespoke-parent.white{background:#fff}.bespoke-slide{transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:0 0;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0}}.bespoke-before{-webkit-transform:translateX(640px) translateX(-320px) rotateY(-20deg) translateX(-320px);transform:translateX(640px) translateX(-320px) rotateY(-20deg) translateX(-320px)}.bespoke-after{-webkit-transform:translateX(-640px) translateX(320px) rotateY(20deg) translateX(320px);transform:translateX(-640px) translateX(320px) rotateY(20deg) translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1;transition-delay:.2s}.bespoke-bullet{transition:all .3s ease}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(-10px) translateZ(-10px) rotateY(20deg);transform:translateX(-10px) translateZ(-10px) rotateY(20deg)}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:5px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:10px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{transition:width .6s ease;position:absolute;height:100%;background:#00c284}.emphatic,.emphatic .bespoke-slide{background:#00f3a5}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);transition:opacity .6s ease;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px;border:none!important;box-shadow:none!important}pre span{text-shadow:none!important}body{background:#303030;font-family:\'open sans\',helvetica,arial,sans-serif;font-weight:300;font-size:18px;color:#f0f0f0}body .gif{color:rgba(255,255,255,.8)}body .bespoke-slide.emphatic-text{color:rgba(0,0,0,.5)}h1{font-size:72px;font-weight:600;line-height:82px;letter-spacing:-2px;margin-bottom:16px;margin-top:0}h2{font-weight:300;font-size:42px;letter-spacing:-1px;margin-bottom:8px;color:#f0f0f0}.bespoke-slide.emphatic-text h2{color:rgba(0,0,0,.6)}h3{font-size:24px;font-weight:300;margin-bottom:24px;color:#e0e0e0}.bespoke-slide.emphatic-text h3{color:rgba(0,0,0,.5)}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 50px 12px;line-height:22px}blockquote{max-width:75%}small{font-size:75%}a{color:#00f3a5;text-decoration:none}a.black{color:#000}.bespoke-slide.emphatic-text a{color:rgba(0,0,0,.7)}.bespoke-slide.emphatic-text h1 a{color:#00f3a5}.avatar{display:block;margin:0 auto;width:120px;height:120px;border-radius:120px}.avatar--small{width:70px;height:70px}.logo,.gif{background-position:center;background-repeat:no-repeat}.gif{background-size:cover}',{prepend:!0}),i("@import url('https://fonts.googleapis.com/css?family=Open+Sans:300italic,300,600,700');",{prepend:!0}),function(e){a()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(i){function r(e,t){e.classList.add("bespoke-"+t)}function o(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()}function t(e,t){var n=i.slides[i.slide()],a=t-i.slide(),t=0<a?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(o.bind(null,e)),e!==n&&["inactive",t,t+"-"+Math.abs(a)].map(r.bind(null,e))}r(i.parent,"parent"),i.slides.map(function(e){r(e,"slide")}),i.on("activate",function(e){i.slides.map(t),r(e.slide,"active"),o(e.slide,"inactive")})}}},{}],3:[function(e,t,n){var a={};t.exports=function(e,t){var n;a[e]||(a[e]=!0,(n=document.createElement("style")).setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e,e=document.getElementsByTagName("head")[0],t&&t.prepend?e.insertBefore(n,e.childNodes[0]):e.appendChild(n))}},{}]},{},[1])(1)},"object"==typeof i?a.exports=e():"function"==typeof define&&define.amd?define(e):("undefined"!=typeof window?t=window:void 0!==n?t=n:"undefined"!=typeof self&&(t=self),(t=(t=(t=t).bespoke||(t.bespoke={})).themes||(t.themes={})).buildWars=e())}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(e,t,n){t.exports={from:function(e,t){function a(e,t){i[e]&&(l("deactivate",c(r,t)),r=i[e],l("activate",c(r,t)))}var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),r=i[0],o={},e=function(e,t){var n=i.indexOf(r)+e;l(0<e?"next":"prev",c(r,t))&&a(n,t)},s=function(e,t){o[e]=(o[e]||[]).filter(function(e){return e!==t})},l=function(e,n){return(o[e]||[]).reduce(function(e,t){return e&&!1!==t(n)},!0)},c=function(e,t){return(t=t||{}).index=i.indexOf(e),t.slide=e,t},u={on:function(e,t){return(o[e]||(o[e]=[])).push(t),s.bind(null,e,t)},off:s,fire:l,slide:function(e,t){if(!arguments.length)return i.indexOf(r);l("slide",c(i[e],t))&&a(e,t)},next:e.bind(null,1),prev:e.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(u)}),a(0),u}}},{}],15:[function(e,t,n){Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m}},{}],16:[function(e,n,t){(function(t){(function(){var o,s,l,c,u,a,e,i=function(l){var c=/\blang(?:uage)?-([\w-]+)\b/i,t=0,C={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof _?new _(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function n(e,a){var i,t;switch(a=a||{},C.util.type(e)){case"Object":if(t=C.util.objId(e),a[t])return a[t];for(var r in i={},a[t]=i,e)e.hasOwnProperty(r)&&(i[r]=n(e[r],a));return i;case"Array":return(t=C.util.objId(e),a[t])?a[t]:(i=[],a[t]=i,e.forEach(function(e,t){i[t]=n(e,a)}),i);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var t=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(t){var n,a=document.getElementsByTagName("script");for(n in a)if(a[n].src==t)return a[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n,a=C.util.clone(C.languages[e]);for(n in t)a[n]=t[n];return a},insertBefore:function(n,e,t,a){var i,r=(a=a||C.languages)[n],o={};for(i in r)if(r.hasOwnProperty(i)){if(i==e)for(var s in t)t.hasOwnProperty(s)&&(o[s]=t[s]);t.hasOwnProperty(i)||(o[i]=r[i])}var l=a[n];return a[n]=o,C.languages.DFS(C.languages,function(e,t){t===l&&e!=n&&(this[e]=o)}),o},DFS:function e(t,n,a,i){i=i||{};var r,o,s,l=C.util.objId;for(r in t)t.hasOwnProperty(r)&&(n.call(t,r,t[r],a||r),o=t[r],"Object"!==(s=C.util.type(o))||i[l(o)]?"Array"!==s||i[l(o)]||(i[l(o)]=!0,e(o,n,r,i)):(i[l(o)]=!0,e(o,n,null,i)))}},plugins:{},highlightAll:function(e,t){C.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),C.hooks.run("before-all-elements-highlight",a);for(var i,r=0;i=a.elements[r++];)C.highlightElement(i,!0===t,a.callback)},highlightElement:function(e,t,n){var a=C.util.getLanguage(e),i=C.languages[a];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+a;var r=e.parentElement;r&&"pre"===r.nodeName.toLowerCase()&&(r.className=r.className.replace(c,"").replace(/\s+/g," ")+" language-"+a);var o={element:e,language:a,grammar:i,code:e.textContent};function s(e){o.highlightedCode=e,C.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,C.hooks.run("after-highlight",o),C.hooks.run("complete",o),n&&n.call(o.element)}if(C.hooks.run("before-sanity-check",o),!o.code)return C.hooks.run("complete",o),void(n&&n.call(o.element));C.hooks.run("before-highlight",o),o.grammar?t&&l.Worker?((t=new Worker(C.filename)).onmessage=function(e){s(e.data)},t.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))):s(C.highlight(o.code,o.grammar,o.language)):s(C.util.encode(o.code))},highlight:function(e,t,n){n={code:e,grammar:t,language:n};return C.hooks.run("before-tokenize",n),n.tokens=C.tokenize(n.code,n.grammar),C.hooks.run("after-tokenize",n),_.stringify(C.util.encode(n.tokens),n.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var i=new r;return N(i,i.head,e),function e(t,n,a,i,r,o){for(var s in a)if(a.hasOwnProperty(s)&&a[s]){var l=a[s];l=Array.isArray(l)?l:[l];for(var c=0;c<l.length;++c){if(o&&o.cause==s+","+c)return;var u,p=l[c],d=p.inside,f=!!p.lookbehind,g=!!p.greedy,m=0,b=p.alias;g&&!p.pattern.global&&(u=p.pattern.toString().match(/[imsuy]*$/)[0],p.pattern=RegExp(p.pattern.source,u+"g"));for(var h=p.pattern||p,v=i.next,k=r;v!==n.tail&&!(o&&k>=o.reach);k+=v.value.length,v=v.next){var x=v.value;if(n.length>t.length)return;if(!(x instanceof _)){var y,w,F,A,E=1;if(g&&v!=n.tail.prev){h.lastIndex=k;var $=h.exec(t);if(!$)break;var S=$.index+(f&&$[1]?$[1].length:0),z=$.index+$[0].length,j=k;for(j+=v.value.length;j<=S;)v=v.next,j+=v.value.length;if(j-=v.value.length,k=j,v.value instanceof _)continue;for(var L=v;L!==n.tail&&(j<z||"string"==typeof L.value);L=L.next)E++,j+=L.value.length;E--,x=t.slice(k,j),$.index-=k}else{h.lastIndex=0;var $=h.exec(x)}$&&(f&&(m=$[1]?$[1].length:0),S=$.index+m,A=$[0].slice(m),z=S+A.length,y=x.slice(0,S),w=x.slice(z),F=k+x.length,o&&F>o.reach&&(o.reach=F),x=v.prev,y&&(x=N(n,x,y),k+=y.length),O(n,x,E),A=new _(s,d?C.tokenize(A,d):A,b,A),v=N(n,x,A),w&&N(n,v,w),1<E&&e(t,n,a,v.prev,k,{cause:s+","+c,reach:F}))}}}}}(e,i,t,i.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(i)},hooks:{all:{},add:function(e,t){var n=C.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=C.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:_};function _(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function r(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function N(e,t,n){var a=t.next,n={value:n,prev:t,next:a};return t.next=n,a.prev=n,e.length++,n}function O(e,t,n){for(var a=t.next,i=0;i<n&&a!==e.tail;i++)a=a.next;(t.next=a).prev=t,e.length-=i}if(l.Prism=C,_.stringify=function t(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var a="";return e.forEach(function(e){a+=t(e,n)}),a}var i={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},e=e.alias;e&&(Array.isArray(e)?Array.prototype.push.apply(i.classes,e):i.classes.push(e)),C.hooks.run("wrap",i);var r,o="";for(r in i.attributes)o+=" "+r+'="'+(i.attributes[r]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!l.document)return l.addEventListener&&(C.disableWorkerMessageHandler||l.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,e=t.code,t=t.immediateClose;l.postMessage(C.highlight(e,C.languages[n],n)),t&&l.close()},!1)),C;var e,n=C.util.currentScript();function a(){C.manual||C.highlightAll()}return n&&(C.filename=n.src,n.hasAttribute("data-manual")&&(C.manual=!0)),C.manual||("loading"===(e=document.readyState)||"interactive"===e&&n&&n.defer?document.addEventListener("DOMContentLoaded",a):window.requestAnimationFrame?window.requestAnimationFrame(a):window.setTimeout(a,16)),C}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});function p(e,t){var n=(n=e.className).replace(a," ")+" language-"+t;e.className=n.replace(/\s+/g," ").trim()}void 0!==n&&n.exports&&(n.exports=i),void 0!==t&&(t.Prism=i),i.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};n["language-"+t]={pattern:/[\s\S]+/,inside:i.languages[t]};t={};t[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},i.languages.insertBefore("markup","cdata",t)}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.markup.tag.addInlined("script","javascript"),i.languages.js=i.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&(o=window.Prism,s={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},u="pre[data-src]:not(["+(l="data-src-status")+'="loaded"]):not(['+l+'="'+(c="loading")+'"])',a=/\blang(?:uage)?-([\w-]+)\b/i,o.hooks.add("before-highlightall",function(e){e.selector+=", "+u}),o.hooks.add("before-sanity-check",function(e){var t,n,a,i,r=e.element;r.matches(u)&&(e.code="",r.setAttribute(l,c),(t=r.appendChild(document.createElement("CODE"))).textContent="Loading…",n=r.getAttribute("data-src"),"none"===(e=e.language)&&(a=(/\.(\w+)$/.exec(n)||[,"none"])[1],e=s[a]||a),p(t,e),p(r,e),(a=o.plugins.autoloader)&&a.loadLanguages(e),(i=new XMLHttpRequest).open("GET",n,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?(r.setAttribute(l,"loaded"),t.textContent=i.responseText,o.highlightElement(t)):(r.setAttribute(l,"failed"),400<=i.status?t.textContent="✖ Error "+i.status+" while fetching file: "+i.statusText:t.textContent="✖ Error: File does not exist or is empty"))},i.send(null))}),e=!(o.plugins.fileHighlight={highlight:function(e){for(var t,n=(e||document).querySelectorAll(u),a=0;t=n[a++];)o.highlightElement(t)}}),o.fileHighlight=function(){e||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),e=!0),o.plugins.fileHighlight.highlight.apply(this,arguments)})}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],17:[function(e,t,n){var a=e("bespoke"),i=e("bespoke-classes"),r=e("bespoke-nav"),o=e("bespoke-scale"),s=e("bespoke-bullets"),l=e("bespoke-hash"),c=e("bespoke-multimedia"),u=e("bespoke-extern"),p=e("bespoke-theme-build-wars"),d=e("bespoke-backdrop"),f=e("bespoke-fullscreen"),g=e("bespoke-progress");a.from({parent:"article.deck",slides:"section"},[p(),i(),r(),o(),s("li, .bullet"),l(),c(),d(),f(),g(),u(a)]),e("prismjs"),e("prismjs/components/prism-git")},{bespoke:14,"bespoke-backdrop":1,"bespoke-bullets":2,"bespoke-classes":3,"bespoke-extern":4,"bespoke-fullscreen":5,"bespoke-hash":6,"bespoke-multimedia":7,"bespoke-nav":10,"bespoke-progress":11,"bespoke-scale":12,"bespoke-theme-build-wars":13,prismjs:16,"prismjs/components/prism-git":15}]},{},[17]);