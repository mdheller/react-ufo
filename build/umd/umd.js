!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("react-ufo",[],t):"object"==typeof exports?exports["react-ufo"]=t():e["react-ufo"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=2)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(e){return n({loading:e.loading,error:e.error,data:e.data},Symbol.iterator,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loading;case 2:return e.next=4,this.error;case 4:return e.next=6,this.data;case 6:case"end":return e.stop()}},e,this)}))};t.a=o},function(e,t,r){e.exports=r(3)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4);r.d(t,"useFetcher",function(){return n.a})},function(e,t,r){"use strict";function n(e,t){return c(e)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}}function c(e){if(Array.isArray(e))return e}var a=r(0),i=(r.n(a),r(5)),f=r(6),l=r(8),s=r(9),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(a.useRef)(!1),o=Object(a.useRef)(Object(s.a)()),u=Object(f.a)(t),c=n(u,2),b=c[0],p=c[1],d=function(){r.current=!1,o.current=Object(s.a)();var t=Object(l.a)(),n=t.promise,u=t.resolve,c=t.reject,a=o.current.signal;p({loading:!0,error:null,data:null});for(var i=arguments.length,f=new Array(i),b=0;b<i;b++)f[b]=arguments[b];return e.apply(void 0,f.concat([a])).then(function(e){r.current||a.aborted||u(e),n.then(function(){r.current||a.aborted||p({loading:!1,error:null,data:e})})}).catch(function(e){"AbortError"===(null===e||void 0===e?void 0:e.name)||r.current||a.aborted||(c(e),p({loading:!1,error:e,data:null}))}),n};d.abort=function(){p({loading:!1,error:null,data:null}),o.current.abort()},d.ignore=function(){r.current=!0};var y=Object(a.useCallback)(d,[e]);Object(a.useEffect)(function(){return function(){y.ignore()}},[y]);var O=Object(a.useRef)(Object(i.a)());return O.current.callback=y,O.current.requestState=b,O.current.setRequestState=p,O.current};t.a=b},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n({callback:e.callback,requestState:e.requestState,setRequestState:e.setRequestState},Symbol.iterator,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.callback;case 2:return e.next=4,this.requestState;case 4:return e.next=6,this.setRequestState;case 6:case"end":return e.stop()}},e,this)}))};t.a=o},function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return f(e)||i(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}}function f(e){if(Array.isArray(e))return e}var l=r(0),s=(r.n(l),r(1)),b=r(7),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(l.useState)(Object(s.a)(o({loading:!1,error:null,data:null},e))),r=c(t,2),n=r[0],u=r[1],a=Object(l.useRef)([]);return a.current[0]=n,a.current[1]=Object(l.useCallback)(Object(b.a)(u),[u]),a.current};t.a=p},function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=r(1),a=function(e){var t=function(e){return r(e)};t.setLoading=function(e){return r(e,"loading")},t.setError=function(e){return r(e,"error")},t.setData=function(e){return r(e,"data")};var r=function(t,r){return e(function(e){var n=t;"function"==typeof t&&(n=t(r?e[r]:e));var u=o({},e);return r?u[r]=n:u=n,Object(c.a)(u)})};return t[Symbol.iterator]=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setLoading;case 2:return e.next=4,t.setError;case 4:return e.next=6,t.setData;case 6:case"end":return e.stop()}},e)}),t};t.a=a},function(e,t,r){"use strict";var n=function(){var e={};return e.promise=new Promise(function(t,r){e.resolve=t,e.reject=r}),e};t.a=n},function(e,t,r){"use strict";var n=function(){return window.AbortController?new window.AbortController:{abort:function(){return console.warn("react-ufo: you invocation of `.abort()` will do nothing because no `window.AbortController` was detected in your environment")}}};t.a=n}])});
//# sourceMappingURL=umd.js.map