(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{456:function(e,t,n){"use strict";n.r(t);var i=n(484),r=n(471);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n(504);var u=n(11),s=Object(u.a)(r.default,i.a,i.b,!1,null,null,null);t.default=s.exports},469:function(e,t,n){},470:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(449);n(452);var r,o,u,s,c=n(451);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=(r=(0,i.Component)({components:{swiper:c.swiper,swiperSlide:c.swiperSlide}}),o=(0,i.Watch)("myswiper",{immediate:!0,deep:!0}),r((function(e,t,n,i,r){var o={};Object.keys(i).forEach(function(e){o[e]=i[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,i){return i(e,t,n)||n},o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null)}((s=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=f(this,(e=p(t)).call.apply(e,[this].concat(r)))).swiperOption={direction:"vertical",lazy:{loadPrevNext:!0},height:window.innerHeight,effect:"slide",on:{touchEnd:function(){setTimeout(function(){console.log("activeIndex:",n.swiper.activeIndex),console.log("this.swiper1111:",n.swiper)},0)}}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,i.Vue),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(t,[{key:"mounted",value:function(){}},{key:"_toLevelPage",value:function(){this.$router.push({path:"/levelPage"})}},{key:"_toWhichFloor",value:function(){this.swiper.slideTo(2,200,!1)}},{key:"onProgressChange",value:function(e,t){console.log("newVal:oldVal",e,t)}},{key:"swiper",get:function(){return this.$refs.mySwiper.swiper}}]),t}()).prototype,"onProgressChange",[o],Object.getOwnPropertyDescriptor(s.prototype,"onProgressChange"),s.prototype),u=s))||u);t.default=y},471:function(e,t,n){"use strict";n.r(t);var i=n(470),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t.default=r.a},484:function(e,t,n){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"homePage"},[t("swiper",{ref:"mySwiper",staticClass:"homeSwiper",attrs:{options:this.swiperOption}},[t("swiper-slide",{staticClass:"slide1"}),this._v(" "),t("swiper-slide",{staticClass:"slide2"},[this._v("Slide 2")]),this._v(" "),t("swiper-slide",{staticClass:"slide3"},[this._v("Slide 3")])],1)],1)},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})},504:function(e,t,n){"use strict";var i=n(469);n.n(i).a}}]);