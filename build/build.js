!function e(t,n,i){function a(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(r)return r(o,!0);throw new Error("Cannot find module '"+o+"'")}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return a(n?n:e)},c,c.exports,e,t,n,i)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)a(i[o]);return a}({1:[function(e,t){t.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var i=document.createElement("div");return i.className=n,i.classList.add("bespoke-backdrop"),e.parent.appendChild(i),i}}function n(t){if(t){var n=r.indexOf(t),o=e.slide();i(t,"active"),i(t,"inactive"),i(t,"before"),i(t,"after"),n!==o?(a(t,"inactive"),a(t,o>n?"before":"after")):a(t,"active")}}function i(e,t){e.classList.remove("bespoke-backdrop-"+t)}function a(e,t){e.classList.add("bespoke-backdrop-"+t)}var r;r=e.slides.map(t),e.on("activate",function(){r.forEach(n)})}}},{}],2:[function(e,t){t.exports=function(e){return function(t){var n,i,a=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=n+1;return l(1)?(s(n,i+1),!1):(a[e]&&s(e,0),void 0)},o=function(){var e=n-1;return l(-1)?(s(n,i-1),!1):(a[e]&&s(e,a[e].length-1),void 0)},s=function(e,t){n=e,i=t,a.forEach(function(n,i){n.forEach(function(n,a){n.classList.add("bespoke-bullet"),e>i||i===e&&t>=a?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),i===e&&a===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},l=function(e){return void 0!==a[n][i+e]};t.on("next",r),t.on("prev",o),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}],3:[function(e,t){t.exports=function(e){return function(t){function n(){var e=function(e){console.log("Reeeejected!",e)};navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var t={video:!0,audio:!1};navigator.getUserMedia(t,function(e){l.src=window.URL.createObjectURL(e),l.play(),l.controls=!1,l.onloadedmetadata=function(){}},e)}function i(){c||(c=!0,p.style.visibility="visible",l.style.height="100%",l.style.width="100%")}function a(){c&&(c=!1,p.style.visibility="hidden",l.style.height="",l.style.width=e.width)}function r(){c?a():i()}function o(){l.style.opacity="1",l.style.transition="opacity 0.5s linear",l.style.visibility="visible"}function s(){l.style.opacity="0",l.style.transition="visibility 0s 0.25s, opacity 0.25s linear",l.style.visibility="hidden"}var l=document.createElement("video"),c=!1;e=e||{},e.width=e.width||"640px",l.style.width=e.width,l.style.position="fixed",l.style.top="0px",l.style.right="0px",l.style.visibility="hidden",l.style.opacity="0",l.onclick=function(){r()};var p=document.createElement("div");p.style["background-color"]="black",p.style.width="100%",p.style.height="100%",p.style.position="fixed",p.style.top="0px",p.style.left="0px",p.style.visibility="hidden",document.querySelector("body").appendChild(p),document.querySelector("body").appendChild(l),n(),t.on("activate",function(e){"fullscreen"===e.slide.getAttribute("data-camera")?(o(),i()):null!==e.slide.getAttribute("data-camera")?(o(),a()):(s(),setTimeout(a,500))}),t.video={el:l,show:o,hide:s,requestFullscreen:i,exitFullscreen:a,toggleFullScreen:r}}}},{}],4:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,a){var r=e.slides[e.slide()],o=a-e.slide(),s=o>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==r&&["inactive",s,s+"-"+Math.abs(o)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(a){e.slides.map(i),t(a.slide,"active"),n(a.slide,"inactive")})}}},{}],5:[function(e,t){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),i=parseInt(t,10);t&&(i?n(i-1):e.slides.forEach(function(e,i){e.getAttribute("data-bespoke-hash")===t&&n(i)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],6:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],7:[function(e,t){t.exports=function(e){return function(t){var n=document.createElement("div"),i=document.createElement("div"),a="vertical"===e?"height":"width";n.className="bespoke-progress-parent",i.className="bespoke-progress-bar",n.appendChild(i),t.parent.appendChild(n),t.on("activate",function(e){i.style[a]=100*e.index/(t.slides.length-1)+"%"})}}},{}],8:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,i=t.slides[0],a=i.offsetHeight,r=i.offsetWidth,o="zoom"===e||"zoom"in n.style&&"transform"!==e,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},l=o?t.slides:t.slides.map(s),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,i){return i+e in n.style?i+e:t},e.toLowerCase())}("Transform"),p=o?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},u=function(){var e=n.offsetWidth/r,t=n.offsetHeight/a;l.forEach(p.bind(null,Math.min(e,t)))};window.addEventListener("resize",u),u()}}},{}],9:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var a;"undefined"!=typeof window?a=window:"undefined"!=typeof i?a=i:"undefined"!=typeof self&&(a=self);var r=a;r=r.bespoke||(r.bespoke={}),r=r.themes||(r.themes={}),r.buildWars=e()}}(function(){return function t(n,i,a){function r(s,l){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var p=i[s]={exports:{}};n[s][0].call(p.exports,function(e){var t=n[s][1][e];return r(t?t:e)},p,p.exports,t,n,i,a)}return i[s].exports}for(var o="function"==typeof e&&e,s=0;s<a.length;s++)r(a[s]);return r}({1:[function(e,t){var n=e("bespoke-classes"),i=e("insert-css");t.exports=function(){var e='/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0}mark{background:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{box-sizing:border-box;margin:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}article{transition:all .3s ease;display:none}article.bespoke-parent{display:block;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;-webkit-perspective:600px;perspective:600px}@media print{article.bespoke-parent{overflow:visible;position:static}}article.bespoke-parent.green{background:#00f3a5}article.bespoke-parent.white{background:#fff}.bespoke-slide{transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:0 0;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0}}.bespoke-before{-webkit-transform:translateX(640px) translateX(-320px) rotateY(-20deg) translateX(-320px);transform:translateX(640px) translateX(-320px) rotateY(-20deg) translateX(-320px)}.bespoke-after{-webkit-transform:translateX(-640px) translateX(320px) rotateY(20deg) translateX(320px);transform:translateX(-640px) translateX(320px) rotateY(20deg) translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1;transition-delay:.2s}.bespoke-bullet{transition:all .3s ease}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(-10px) translateZ(-10px) rotateY(20deg);transform:translateX(-10px) translateZ(-10px) rotateY(20deg)}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:5px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:10px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{transition:width .6s ease;position:absolute;height:100%;background:#00c284}.emphatic,.emphatic .bespoke-slide{background:#00f3a5}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);transition:opacity .6s ease;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px;border:none!important;box-shadow:none!important}pre span{text-shadow:none!important}body{background:#303030;font-family:\'open sans\',helvetica,arial,sans-serif;font-weight:300;font-size:18px;color:#f0f0f0}body .gif{color:rgba(255,255,255,.8)}body .bespoke-slide.emphatic-text{color:rgba(0,0,0,.5)}h1{font-size:72px;font-weight:600;line-height:82px;letter-spacing:-2px;margin-bottom:16px;margin-top:0}h2{font-weight:300;font-size:42px;letter-spacing:-1px;margin-bottom:8px;color:#f0f0f0}.bespoke-slide.emphatic-text h2{color:rgba(0,0,0,.6)}h3{font-size:24px;font-weight:300;margin-bottom:24px;color:#e0e0e0}.bespoke-slide.emphatic-text h3{color:rgba(0,0,0,.5)}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 50px 12px;line-height:22px}blockquote{max-width:75%}small{font-size:75%}a{color:#00f3a5;text-decoration:none}a.black{color:#000}.bespoke-slide.emphatic-text a{color:rgba(0,0,0,.7)}.bespoke-slide.emphatic-text h1 a{color:#00f3a5}.avatar{display:block;margin:0 auto;width:120px;height:120px;border-radius:120px}.avatar--small{width:70px;height:70px}.logo,.gif{background-position:center;background-repeat:no-repeat}.gif{background-size:cover}';return i(e,{prepend:!0}),i("@import url('https://fonts.googleapis.com/css?family=Open+Sans:300italic,300,600,700');",{prepend:!0}),function(e){n()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,a){var r=e.slides[e.slide()],o=a-e.slide(),s=o>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==r&&["inactive",s,s+"-"+Math.abs(o)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(a){e.slides.map(i),t(a.slide,"active"),n(a.slide,"inactive")})}}},{}],3:[function(e,t){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var i=document.createElement("style");i.setAttribute("type","text/css"),"textContent"in i?i.textContent=e:i.styleSheet.cssText=e;var a=document.getElementsByTagName("head")[0];t&&t.prepend?a.insertBefore(i,a.childNodes[0]):a.appendChild(i)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t){t.exports=function(e){return function(t){var n,i,a="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+a],i=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),i=e.touches[0]["page"+a]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(i)>50&&t[i>0?"prev":"next"]()})}}},{}],11:[function(e,t){var n=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),a=i[0],r={},o=function(e,t){i[e]&&(u("deactivate",d(a,t)),a=i[e],u("activate",d(a,t)))},s=function(e,t){return arguments.length?(u("slide",d(i[e],t))&&o(e,t),void 0):i.indexOf(a)},l=function(e,t){var n=i.indexOf(a)+e;u(e>0?"next":"prev",d(a,t))&&o(n,t)},c=function(e,t){return(r[e]||(r[e]=[])).push(t),p.bind(null,e,t)},p=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},u=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},d=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},f={on:c,off:p,fire:u,slide:s,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(f)}),o(0),f};t.exports={from:n}},{}],12:[function(){Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m}},{}],13:[function(e,t){(function(e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},i=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,i=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,i.util.encode(e.content),e.alias):"Array"===i.util.type(e)?e.map(i.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=i.util.type(e);switch(t){case"Object":var n={};for(var a in e)e.hasOwnProperty(a)&&(n[a]=i.util.clone(e[a]));return n;case"Array":return e.map(function(e){return i.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){a=a||i.languages;var r=a[e];if(2==arguments.length){n=arguments[1];for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);return r}var s={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);s[l]=r[l]}return i.languages.DFS(i.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=s)}),a[e]=s},DFS:function(e,t,n,a){a=a||{};for(var r in e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],n||r),"Object"!==i.util.type(e[r])||a[i.util.objId(e[r])]?"Array"!==i.util.type(e[r])||a[i.util.objId(e[r])]||(a[i.util.objId(e[r])]=!0,i.languages.DFS(e[r],t,r,a)):(a[i.util.objId(e[r])]=!0,i.languages.DFS(e[r],t,null,a)))}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",a);for(var r,o=a.elements||e.querySelectorAll(a.selector),s=0;r=o[s++];)i.highlightElement(r,t===!0,a.callback)},highlightElement:function(t,a,r){for(var o,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1].toLowerCase(),s=i.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,t.parentNode&&(l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o));var c=t.textContent,p={element:t,language:o,grammar:s,code:c};if(i.hooks.run("before-sanity-check",p),!p.code||!p.grammar)return p.code&&(i.hooks.run("before-highlight",p),p.element.textContent=p.code,i.hooks.run("after-highlight",p)),i.hooks.run("complete",p),void 0;if(i.hooks.run("before-highlight",p),a&&n.Worker){var u=new Worker(i.filename);u.onmessage=function(e){p.highlightedCode=e.data,i.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,r&&r.call(p.element),i.hooks.run("after-highlight",p),i.hooks.run("complete",p)},u.postMessage(JSON.stringify({language:p.language,code:p.code,immediateClose:!0}))}else p.highlightedCode=i.highlight(p.code,p.grammar,p.language),i.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,r&&r.call(t),i.hooks.run("after-highlight",p),i.hooks.run("complete",p)},highlight:function(e,t,n){var r=i.tokenize(e,t);return a.stringify(i.util.encode(r),n)},matchGrammar:function(e,t,n,a,r,o,s){var l=i.Token;for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==s)return;var p=n[c];p="Array"===i.util.type(p)?p:[p];for(var u=0;u<p.length;++u){var d=p[u],f=d.inside,g=!!d.lookbehind,h=!!d.greedy,m=0,b=d.alias;if(h&&!d.pattern.global){var v=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,v+"g")}d=d.pattern||d;for(var y=a,k=r;y<t.length;k+=t[y].length,++y){var x=t[y];if(t.length>e.length)return;if(!(x instanceof l)){d.lastIndex=0;var w=d.exec(x),F=1;if(!w&&h&&y!=t.length-1){if(d.lastIndex=k,w=d.exec(e),!w)break;for(var S=w.index+(g?w[1].length:0),A=w.index+w[0].length,E=y,z=k,j=t.length;j>E&&(A>z||!t[E].type&&!t[E-1].greedy);++E)z+=t[E].length,S>=z&&(++y,k=z);if(t[y]instanceof l||t[E-1].greedy)continue;F=E-y,x=e.slice(k,z),w.index-=k}if(w){g&&(m=w[1].length);var S=w.index+m,w=w[0].slice(m),A=S+w.length,L=x.slice(0,S),C=x.slice(A),N=[y,F];L&&(++y,k+=L.length,N.push(L));var O=new l(c,f?i.tokenize(w,f):w,b,w,h);if(N.push(O),C&&N.push(C),Array.prototype.splice.apply(t,N),1!=F&&i.matchGrammar(e,t,n,y,k,!0,c),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],a=t.rest;if(a){for(var r in a)t[r]=a[r];delete t.rest}return i.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var a,r=0;a=n[r++];)a(t)}}},a=i.Token=function(e,t,n,i,a){this.type=e,this.content=t,this.alias=n,this.length=0|(i||"").length,this.greedy=!!a};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===i.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var r={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var o="Array"===i.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,o)}i.hooks.run("wrap",r);var s=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(s?" "+s:"")+">"+r.content+"</"+r.tag+">"},!n.document)return n.addEventListener?(i.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,o=t.immediateClose;n.postMessage(i.highlight(r,i.languages[a],a)),o&&n.close()},!1),n.Prism):n.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(i.filename=r.src,i.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(i.highlightAll):window.setTimeout(i.highlightAll,16):document.addEventListener("DOMContentLoaded",i.highlightAll))),n.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=i),"undefined"!=typeof e&&(e.Prism=i),i.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),i.languages.xml=i.languages.markup,i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},i.languages.css.atrule.inside.rest=i.util.clone(i.languages.css),i.languages.markup&&(i.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:i.languages.css,alias:"language-css",greedy:!0}}),i.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:i.languages.css}},alias:"language-css"}},i.languages.markup.tag)),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(?:true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),i.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"}}),i.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:i.languages.javascript,alias:"language-javascript",greedy:!0}}),i.languages.js=i.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),r=t,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;r&&!o.test(r.className);)r=r.parentNode;if(r&&(n=(t.className.match(o)||[,""])[1]),!n){var s=(a.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",a,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,i.highlightElement(l)):l.textContent=c.status>=400?"✖ Error "+c.status+" while fetching file: "+c.statusText:"✖ Error: File does not exist or is empty")},c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(e){var t=e("bespoke"),n=e("bespoke-theme-build-wars"),i=e("bespoke-camera"),a=e("bespoke-classes"),r=e("bespoke-keys"),o=e("bespoke-touch"),s=e("bespoke-bullets"),l=e("bespoke-backdrop"),c=e("bespoke-scale"),p=e("bespoke-hash"),u=e("bespoke-progress");t.from("article",[n(),a(),r(),o(),s("li, .bullet"),l(),c(),p(),u(),i()]),e("prismjs"),e("prismjs/components/prism-git")},{bespoke:11,"bespoke-backdrop":1,"bespoke-bullets":2,"bespoke-camera":3,"bespoke-classes":4,"bespoke-hash":5,"bespoke-keys":6,"bespoke-progress":7,"bespoke-scale":8,"bespoke-theme-build-wars":9,"bespoke-touch":10,prismjs:13,"prismjs/components/prism-git":12}]},{},[14]);