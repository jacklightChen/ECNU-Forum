module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/app"]},,function(t,e){t.exports=flarum.core.compat["forum/components/SignUpModal"]},function(t,e,r){t.exports=r(8)},function(t,e){t.exports=flarum.core.compat["forum/components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["forum/components/ReplyComposer"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function h(){}function l(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=l.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=p(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=m.constructor=l,l.constructor=h,h.displayName=c(l,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(m),c(m,i,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(5),i=r.n(a),c=r(6),u=r.n(c),p=r(0),s=r(3),f=r.n(s);function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var d=r(4),v=r.n(d),y=r(7),g=r.n(y),b=function(){function t(t){return function(e){return new Promise((function(r,n){var o=document.createElement(t),a="body",i="src";switch(o.onload=function(){r(e)},o.onerror=function(){n(e)},t){case"script":o.async=!0;break;case"link":o.type="text/css",o.rel="stylesheet",i="href",a="head"}o[i]=e,document[a].appendChild(o)}))}}return{css:t("link"),js:t("script"),img:t("img")}}(),w=function(){var t,e=(t=v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o.a.recaptchaLoaded){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,b.js("https://www.recaptcha.net/recaptcha/api.js?hl="+o.a.translator.locale+"&render=explicit");case 4:o.a.recaptchaLoaded=!0;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){l(a,n,o,i,c,"next",t)}function c(t){l(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),x=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,h(e,r);var a=n.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e)},a.view=function(){return m("div",{className:"Form-group"},m("div",{className:"g-recaptcha"}))},a.oncreate=function(e){var r=this;if(t.prototype.oncreate.call(this,e),w().then((function(){var t=setInterval((function(){window.recaptcha&&(clearInterval(t),r.attrs.state.render(e.dom.querySelector(".g-recaptcha")))}),250)})),"invisible"===o.a.data["fof-recaptcha.type"]){var n=e.dom.querySelector("iframe");n&&(n.tabIndex=-1)}},n}(g.a),j=function(){function t(t,e){void 0===e&&(e=null),this.callback=t,this.errorCallback=e||function(t){app.alerts.show(t)},this.widgetId=null}var e=t.prototype;return e.render=function(t){var e=this;this.widgetId=grecaptcha.render(t,{sitekey:app.data["fof-recaptcha.credentials.site"],theme:app.forum.attribute("darkMode")?"dark":"light",type:app.data["fof-recaptcha.type"],size:"invisible"===app.data["fof-recaptcha.type"]?"invisible":"normal",callback:this.callback,"error-callback":function(){var t={type:"error",content:app.translator.trans("fof-recaptcha.forum.error")};e.errorCallback(t)}})},e.getResponse=function(){return grecaptcha.getResponse(this.widgetId)},e.execute=function(){return grecaptcha.execute(this.widgetId)},e.reset=function(){return grecaptcha.reset(this.widgetId)},t}(),O=function(t){var e="invisible"===app.data["fof-recaptcha.type"];Object(p.extend)(t.prototype,"oninit",(function(){var t=this;app.forum.attribute("postWithoutCaptcha")||(this.recaptcha=new j((function(){e&&t.onsubmit("recaptchaSecondStep")})))})),Object(p.extend)(t.prototype,"data",(function(t){app.forum.attribute("postWithoutCaptcha")||(t["g-recaptcha-response"]=this.recaptcha.getResponse())})),Object(p.extend)(t.prototype,"headerItems",(function(t){app.forum.attribute("postWithoutCaptcha")||t.add("recaptcha",x.component({state:this.recaptcha}),-5)})),Object(p.extend)(t.prototype,"loaded",(function(){app.forum.attribute("postWithoutCaptcha")||this.recaptcha.reset()})),Object(p.override)(t.prototype,"onsubmit",(function(t,r){return!app.forum.attribute("postWithoutCaptcha")&&e&&"recaptchaSecondStep"!==r?(this.loading=!0,void this.recaptcha.execute()):t()}))};o.a.initializers.add("fof/recaptcha",(function(){var t;o.a.recaptchaLoaded=!1,t="invisible"===app.data["fof-recaptcha.type"],Object(p.extend)(f.a.prototype,"oninit",(function(){var e=this;this.recaptcha=new j((function(){if(t){var r=new Event("submit");r.isRecaptchaSecondStep=!0,e.onsubmit(r)}}),(function(t){e.loaded(),e.alertAttrs=t}))})),Object(p.extend)(f.a.prototype,"submitData",(function(t){t["g-recaptcha-response"]=this.recaptcha.getResponse()})),Object(p.extend)(f.a.prototype,"fields",(function(t){t.add("recaptcha",x.component({state:this.recaptcha}),-5)})),Object(p.extend)(f.a.prototype,"onerror",(function(){this.recaptcha.reset()})),Object(p.override)(f.a.prototype,"onsubmit",(function(e,r){return t&&!r.isRecaptchaSecondStep?(r.preventDefault(),this.loading=!0,void this.recaptcha.execute()):e(r)})),O(i.a),O(u.a)}))}]);
//# sourceMappingURL=forum.js.map