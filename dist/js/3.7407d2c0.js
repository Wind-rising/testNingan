(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{455:function(t,e,i){"use strict";i.r(e);var n=i(465),s=i(464);for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i(484);var o=i(11),r=Object(o.a)(s.default,n.a,n.b,!1,null,null,null);e.default=r.exports},462:function(t,e,i){},463:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(448);c(i(485));i(454);var s,a=i(450),o=i(165),r=i(449),l=c(i(453));function c(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,i,n,s,a,o){try{var r=t[a](o),l=r.value}catch(t){return void i(t)}r.done?e(l):Promise.resolve(l).then(n,s)}function d(t){return function(){var e=this,i=arguments;return new Promise(function(n,s){var a=t.apply(e,i);function o(t){f(a,n,s,o,r,"next",t)}function r(t){f(a,n,s,o,r,"throw",t)}o(void 0)})}}function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=(0,n.Component)({components:{swiper:a.swiper,swiperSlide:a.swiperSlide}})(s=function(t){function e(){var t,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(i=v(this,(t=p(e)).call.apply(t,[this].concat(s)))).effectContent=null,i.Contentanimate=null,i.showContent="rule_content_1",i.count=0,i.isPageOver=!1,i.isShowUp=!1,i.imageArr=[],i.isLoadingOver=!1,i.isFirstAnimate=!1,i.r1=null,i.r2=null,i.r3=null,i.isOver=!0,i.nowIndex=0,i.max=1,i.min=0,i.rule_showClass="asdads",i.swiperOption={direction:"vertical",lazy:{loadPrevNext:!0},height:window.innerHeight,allowSlidePrev:!1,effect:"slide",on:{slideChangeTransitionEnd:function(){1==i.swiper.activeIndex&&function(){for(var t=document.getElementById("sw_bg2"),e=function(e){var n="f"+(e+1),s=document.getElementById(n);(0,o.setTimeout)(function(){s.style.transform=e%2?"translateX(-200px)":"translateX(400px)",s.style.display="block",t.scrollTop=s.offsetTop,(0,o.setTimeout)(function(){s.style.transition="transform 0.3s",s.style.transform="translateX(0)"},10),11==e&&(0,o.setTimeout)(function(){var e=document.getElementById("canvas3"),n=document.getElementById("canvas4");e.style.top=t.clientHeight+100+"px",n.style.top=t.clientHeight+100+"px",i._canvas1(),i._canvas2(),i._go()},300)},200*e)},n=0;n<12;n++)e(n)}(),2==i.swiper.activeIndex&&(i.$refs.title_style3.className="title title_style1 title_style2 title_style5",i.$refs.button_style1.className="button_style1 btn_activity animateShow opacity1",i.$refs.bg_down.className="bg_down animateShow opacity1")}}},i.userData=null,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,n.Vue),function(t,e,i){e&&h(t.prototype,e),i&&h(t,i)}(e,[{key:"mounted",value:function(){}},{key:"_loadingImage",value:function(){for(var t=this,e=0;e<this.imageArr.length;e++){var i=new Image;i.src=this.imageArr[e],i.onload=function(){t.count++,t.count>=t.imageArr.length&&t._loadingOver()}}}},{key:"_loadingOver",value:function(){var t=this;(0,o.setTimeout)(function(){t.isFirstAnimate=!0,t.$refs.title_style1.style.marginTop=window.innerHeight/2-t.$refs.title_style1.clientHeight+"px",(0,o.setTimeout)(function(){t.isLoadingOver=!0},1e3)},500)}},{key:"_canvas1",value:function(){var t=document.getElementById("canvas3"),e=null,i={},n=0;function s(){i[++n]=this,this.x=t.width/2,this.y=t.height/2,this.vx=Math.random()+1,this.vy=Math.random()+4,this.growth=.01*(Math.abs(this.vx)+Math.abs(this.vy)),this.id=n,this.size=0,this.color="#ffee5d"}t.getContext&&(e=t.getContext("2d")),t.width=300,t.height=300,s.prototype.draw=function(){this.x+=this.vx,this.y+=this.vy,this.size+=this.growth,(this.x<0||this.x>t.width||this.y<0||this.y>t.height)&&delete i[this.id],e.fillStyle=this.color,e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI),e.fill()},requestAnimationFrame(function t(){window.r1=requestAnimationFrame(t),e.clearRect(0,0,300,300);var n=0;for(var a in i)n++,i[a].draw();n<30&&new s})}},{key:"_canvas2",value:function(){var t=document.getElementById("canvas4"),e=null,i={},n=0;function s(){i[++n]=this,this.x=t.width/2,this.y=t.height/2,this.vx=Math.random()-1,this.vy=Math.random()+4,this.growth=.02*(Math.abs(this.vx)+Math.abs(this.vy)),this.id=n,this.size=0,this.color="#ffee5d"}t.getContext&&(e=t.getContext("2d")),t.width=300,t.height=300,s.prototype.draw=function(){this.x+=this.vx,this.y+=this.vy,this.size+=this.growth,(this.x<0||this.x>t.width||this.y<0||this.y>t.height)&&delete i[this.id],e.fillStyle=this.color,e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI),e.fill()},requestAnimationFrame(function t(){window.r2=requestAnimationFrame(t),e.clearRect(0,0,300,300);var n=0;for(var a in i)n++,i[a].draw();n<30&&new s})}},{key:"_go",value:function(){var t=document.getElementById("sw_bg2");window.r3=setInterval(function(){var e=document.getElementById("canvas3"),i=document.getElementById("canvas4");if(parseInt(e.style.top)<-100){document.getElementById("up_down_2").className="up_down up_down_2 on",window.cancelAnimationFrame(window.r1),window.cancelAnimationFrame(window.r2),clearInterval(window.r3),e.style.display="none",i.style.display="none";var n=document.getElementById("slide2"),s=!1;t.onscroll=function(){t.scrollTop+t.offsetHeight+20>t.scrollHeight?(console.log(3),s=!0,n.className="slide2 swiper-slide swiper-slide-active"):(console.log(2),n.className="slide2 swiper-no-swiping swiper-slide swiper-slide-active")};var a="a";t.ontouchstart=function(t){s&&(a=t.changedTouches[0].clientY)},t.ontouchmove=function(t){s&&"a"!=a&&(console.log(t.changedTouches[0].clientY,a,t.changedTouches[0].clientY-a),t.changedTouches[0].clientY-a>20&&(console.log(4),s=!1,n.className="slide2 swiper-no-swiping swiper-slide swiper-slide-active"))},t.ontouchend=function(t){a="a"}}parseInt(t.scrollTop)>0?t.scrollTop=parseInt(t.scrollTop)-1:t.scrollTop=0,e.style.top=parseInt(e.style.top)-3+"px",i.style.top=parseInt(e.style.top)-3+"px"},10)}},{key:"_pageTurnNext",value:function(){var t=this;this.isOver&&(this.nowIndex++,this.nowIndex>this.max?this.nowIndex=this.max:(this.isOver=!1,this.effectContent="rule_left",this.Contentanimate="rule_content_1",this.showContent="rule_content_2",(0,o.setTimeout)(function(){t.isOver=!0,t.effectContent="",t.Contentanimate=""},970)))}},{key:"_pageTurnPrev",value:function(){var t=this;this.isOver&&(this.nowIndex--,this.nowIndex<this.min?this.nowIndex=this.min:(this.isOver=!1,this.effectContent="rule_right",this.Contentanimate="rule_content_1",this.showContent="rule_content_2",(0,o.setTimeout)(function(){t.isOver=!0,t.effectContent="",t.Contentanimate="",t.showContent="rule_content_1"},970)))}},{key:"_toMain",value:function(){var t=d(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,r.initApi)();case 2:e=t.sent,this.userData=e.data,this.$router.push({path:"/main",query:{data:this.userData,music:!0}});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"created",value:function(){var t=d(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this._loadingImage(),this._loadingOver(),l.default.ready(function(){l.default.onMenuShareTimeline({title:"12312313",link:"",imgUrl:"",success:function(){}})});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"swiper",get:function(){return this.$refs.mySwiper.swiper}}]),e}())||s;e.default=y},464:function(t,e,i){"use strict";i.r(e);var n=i(463),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e.default=s.a},465:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"homePage"},[i("swiper",{ref:"mySwiper",staticClass:"bg bg_style1",attrs:{options:t.swiperOption}},[i("swiper-slide",{class:["slide1",t.isLoadingOver?null:"swiper-no-swiping"]},[i("div",{staticClass:"bg bg_style1"},[i("div",{staticClass:"videobox"}),t._v(" "),i("div",{ref:"title_style1",class:["title","title_style1",t.isFirstAnimate?"animateShow2":null]}),t._v(" "),i("div",{staticClass:"bg_down"}),t._v(" "),i("div",{staticClass:"up_down up_down_1"}),t._v(" "),i("div",{staticClass:"logia"},[t._v("静安区委政法委"),i("br"),t._v("静安区禁毒办")])])]),t._v(" "),i("swiper-slide",{staticClass:"slide2 swiper-no-swiping",attrs:{id:"slide2"}},[i("div",{staticClass:"sw_bg2",attrs:{id:"sw_bg2"}},[i("div",{staticClass:"sw_bg2_content"},[i("div",{staticClass:"ff",attrs:{id:"f1"}}),t._v(" "),i("div",{staticClass:"ff",attrs:{id:"f2"}}),t._v(" "),i("div",{staticClass:"ff",attrs:{id:"f3"}}),t._v(" "),i("div",{staticClass:"ff",attrs:{id:"f4"}}),t._v(" "),i("div",{staticClass:"ff",attrs:{id:"f5"}}),t._v(" "),i("div",{staticClass:"ff",attrs:{id:"f6"}}),t._v(" "),i("div",{staticClass:"ff",attrs:{id:"f7"}}),t._v(" "),i("div",{staticClass:"ff",attrs:{id:"f8"}}),t._v(" "),i("div",{staticClass:"ff",attrs:{id:"f9"}}),t._v(" "),i("div",{staticClass:"ff",attrs:{id:"f10"}}),t._v(" "),i("div",{attrs:{id:"fh"}},[i("div",{staticClass:"ff",attrs:{id:"f11"}}),t._v(" "),i("div",{staticClass:"ff",attrs:{id:"f12"}})]),t._v(" "),i("div",{staticClass:"up_down up_down_2",attrs:{id:"up_down_2"}}),t._v(" "),i("canvas",{staticClass:"canvas2 right1",attrs:{id:"canvas3"}}),t._v(" "),i("canvas",{staticClass:"canvas2 left1",attrs:{id:"canvas4"}})])])]),t._v(" "),i("swiper-slide",{ref:"slide3",class:["slide3"]},[i("div",{staticClass:"bg"},[i("div",{ref:"title_style3",class:["title","title_style1","title_style4","title_style5"]}),t._v(" "),i("div",{ref:"button_style1",class:["btn_activity","button_style1 opacity0"],on:{click:t._toMain}}),t._v(" "),i("div",{ref:"bg_down",staticClass:"bg_down opacity0"}),t._v(" "),i("div",{staticClass:"logia"},[t._v("静安区委政法委"),i("br"),t._v("静安区禁毒办")])])])],1)],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},484:function(t,e,i){"use strict";var n=i(462);i.n(n).a},485:function(t,e,i){"use strict"}}]);