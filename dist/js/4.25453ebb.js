(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{410:function(t,s,i){"use strict";var e=i(51);s.a={loading:function(t){console.log(JSON.stringify(t)),e.a.commit("ui/setLoading",t||{})},hideLoading:function(t){console.log(JSON.stringify(t)),e.a.commit("ui/hideLoading",t||{})},alert:function(t){console.log(JSON.stringify(t)),"string"==typeof t&&(t={title:t}),t.title&&t.msg||(t.title=t.title||t.msg,t.msg=""),Array.isArray(t.btns)||(t.btns=[{msg:t.btns||"确定"}]),e.a.dispatch("ui/alertCallback",t)},hideToast:function(t){console.log(JSON.stringify(t)),e.a.dispatch("ui/toastCallback",t||{})},toast:function(t){console.log(JSON.stringify(t)),e.a.commit("ui/setToast",t),this.hideToast({timeout:t.timeout})}}},411:function(t,s,i){"use strict";i.d(s,"b",(function(){return d})),i.d(s,"c",(function(){return h})),i.d(s,"a",(function(){return p}));i(403);var e=i(404),a=i.n(e),n=i(405),r=i.n(n),c=(i(406),i(109)),o=i(410),l=r.a.create({baseURL:Object(c.a)(),timeout:3e4,headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded;charset=utf8"}});function u(t){var s=t.url,i=t.params,e=void 0===i?{}:i;return new Promise((function(t,i){l.get(s,{params:e}).then((function(s){t(s.data)})).catch((function(t){i(t)}))}))}function _(t,s,i,e,a,n,r){try{var c=t[n](r),o=c.value}catch(t){return void i(t)}c.done?s(o):Promise.resolve(o).then(e,a)}function v(t){return function(){var s=this,i=arguments;return new Promise((function(e,a){var n=t.apply(s,i);function r(t){_(n,e,a,r,c,"next",t)}function c(t){_(n,e,a,r,c,"throw",t)}r(void 0)}))}}l.interceptors.request.use((function(t){return o.a.loading(),t}),(function(t){return a()({message:t.message,position:"bottom",duration:2e3}),Promise.reject(t)})),l.interceptors.response.use((function(t){return o.a.hideLoading(),t}),(function(t){if(o.a.hideLoading(),t&&t.response){var s=function(t){var s="";switch(t){case 400:s="错误请求";break;case 401:s="未授权，请重新登录";break;case 403:s="拒绝访问";break;case 404:s="请求错误,未找到该资源";break;case 405:s="请求方法未允许";break;case 408:s="请求超时";break;case 500:s="服务器端出错";break;case 501:s="网络未实现";break;case 502:s="网络错误";break;case 503:s="服务不可用";break;case 504:s="网络超时";break;case 505:s="http版本不支持该请求";break;default:s="连接错误".concat(t)}return s}(t.response.status);a()({message:s,position:"bottom",duration:2e3})}return Promise.reject(t)}));var d=function(){var t=v(regeneratorRuntime.mark((function t(s){var i,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=s.answerData,t.next=3,u({url:"/activityn/getScore",params:{answer_list:i}});case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(s){return t.apply(this,arguments)}}(),h=function(){var t=v(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u({url:"/activityn/getInfo"});case 2:return s=t.sent,t.abrupt("return",s);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=v(regeneratorRuntime.mark((function t(s){var i,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=s.level,t.next=3,u({url:"/activityn/getRedPack",params:{checkpoint:i}});case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(s){return t.apply(this,arguments)}}()},413:function(t,s,i){t.exports=i.p+"images/98b1eb6f224035088b97a94dacdd9ccf.mp3"},414:function(t,s,i){},417:function(t,s,i){"use strict";var e=i(414);i.n(e).a},423:function(t,s,i){"use strict";i.r(s);var e,a=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"videobox"},[s("audio",{staticStyle:{display:"none"},attrs:{preload:"preload",controls:"",id:"music1",src:i(413),loop:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"top"},[s("div",{staticClass:"shushineWrap"},[s("div",{staticClass:"shunshine1"}),this._v(" "),s("div",{staticClass:"shunshine2"}),this._v(" "),s("div",{staticClass:"shunshine3"}),this._v(" "),s("div",{staticClass:"shunshine4"}),this._v(" "),s("div",{staticClass:"shunshine5"})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"main"},[i("div",{staticClass:"main_title_wrap"}),t._v(" "),i("div",{staticClass:"main_title"},[i("div",{staticClass:"main_word_center"},[i("div",{staticClass:"main_word_style word_shou"}),t._v(" "),i("div",{staticClass:"main_word_style word_hu"}),t._v(" "),i("div",{staticClass:"main_word_style word_zhe"})]),t._v(" "),i("div",{staticClass:"main_title_wrap2"},[i("div",{staticClass:"main_title_l"}),t._v(" "),i("div",{staticClass:"main_title_r"}),t._v(" "),i("div",{staticClass:"main_title_word2"})]),t._v(" "),i("div",{staticClass:"main_image_brid"})]),t._v(" "),i("div",{staticClass:"main_cloud"},[i("div",{staticClass:"main_image_cloud1"}),t._v(" "),i("div",{staticClass:"main_image_cloud3"})]),t._v(" "),i("div",{staticClass:"main_role"},[i("div",{staticClass:"main_style_architecture"},[i("div",{staticClass:"main_image_architecture"}),t._v(" "),i("div",{staticClass:"main_gif"}),t._v(" "),i("div",{staticClass:"main_image_1"}),t._v(" "),i("div",{staticClass:"main_image_2"})]),t._v(" "),i("div",{staticClass:"main_style_soldier"},[i("div",{staticClass:"main_image_soldier"}),t._v(" "),i("div",{staticClass:"main_image_panda"})]),t._v(" "),i("div",{staticClass:"main_image_cloud4"}),t._v(" "),i("div",{staticClass:"main_word_inscription"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom"},[s("div",{staticClass:"map"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bg_top"},[s("div",{staticClass:"bg_top_wrod"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bg_top"},[s("div",{staticClass:"bg_top_wrod"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bg_top"},[s("div",{staticClass:"bg_top_wrod"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bg_top"},[s("div",{staticClass:"bg_top_wrod"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start cp_start2"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start cp_start2"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start cp_start2"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start cp_start2"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start cp_start2"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"})])])}],n=i(407),r=i(411),c=(i(408),i(410)),o=i(409);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,s,i,e,a,n,r){try{var c=t[n](r),o=c.value}catch(t){return void i(t)}c.done?s(o):Promise.resolve(o).then(e,a)}function _(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function v(t,s){for(var i=0;i<s.length;i++){var e=s[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function d(t,s){return(d=Object.setPrototypeOf||function(t,s){return t.__proto__=s,t})(t,s)}function h(t,s){return!s||"object"!==l(s)&&"function"!=typeof s?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):s}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var C=Object(n.a)({components:{swiper:o.swiper,swiperSlide:o.swiperSlide}})(e=function(t){!function(t,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(s&&s.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),s&&d(t,s)}(C,t);var s,i,e,a,n,o,l=(s=C,function(){var t,i=m(s);if(p()){var e=m(this).constructor;t=Reflect.construct(i,arguments,e)}else t=i.apply(this,arguments);return h(this,t)});function C(){var t;_(this,C);for(var s=arguments.length,i=new Array(s),e=0;e<s;e++)i[e]=arguments[e];return(t=l.call.apply(l,[this].concat(i))).bgAudio=null,t.isMusic=!0,t.isFirstCP=0,t.isGetRed=0,t.maxRed=0,t.max=0,t.currentRed=[],t.rule_showClass=!1,t.show_showClass=!1,t.swiperOption={direction:"horizontal",lazy:{loadPrevNext:!0},height:window.innerHeight,effect:"slide",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChangeTransitionEnd:function(){}}},t.isOver=!0,t.nowIndex=0,t.isFirstCP=!1,t.maxA=1,t.min=0,t.effectContent=null,t.Contentanimate=null,t.showContent="rule_content_1",t.isOver2=!0,t.nowIndex2=0,t.showArrImage=["show_content_1","show_content_2","show_content_3","show_content_4","show_content_5"],t.effectContent2=null,t.Contentanimate2=null,t.showContent2="show_content_1",t.cp_show=!1,t.red_show=!1,t.passCp=null,t}return i=C,(e=[{key:"_clickShowMusic",value:function(){this.isMusic=!this.isMusic,this._MusicInit()}},{key:"_MusicInit",value:function(){this.isMusic?this.bgAudio.play():this.bgAudio.pause()}},{key:"destroyed",value:function(){window.cancelAnimationFrame(window.r3),window.cancelAnimationFrame(window.r4),this.bgAudio.pause()}},{key:"_music",value:function(){this.bgAudio=document.getElementById("music1"),this.bgAudio.removeAttribute("x5-video-player-type");var t=this;window.WeixinJSBridge?(t.bgAudio.play(),t._MusicInit(),WeixinJSBridge.invoke("getNetworkType",{},(function(s){t.bgAudio.play(),t._MusicInit()}),!1)):document.addEventListener("WeixinJSBridgeReady",(function(){t.bgAudio.play(),t._MusicInit(),WeixinJSBridge.invoke("getNetworkType",{},(function(s){t.bgAudio.play(),t._MusicInit()}))}),!1),t.bgAudio.play(),t._MusicInit()}},{key:"mounted",value:function(){this._music()}},{key:"created",value:function(){this.userData=this.$route.query.data,this.isFirstCP=this.userData.isFirstCP,this.currentRed=this.userData.currentRed,this.isGetRed=this.userData.isGetRed,this.maxRed=this.userData.maxRed,this.max=this.userData.max,this.isMusic=this.$route.query.music}},{key:"_ClickRule",value:function(){this.rule_showClass=!0}},{key:"_ClickRuleClose",value:function(){this.rule_showClass=!1}},{key:"_ClickShow",value:function(){this.show_showClass=!0}},{key:"_ClickShowClose",value:function(){this.show_showClass=!1}},{key:"_canvas1",value:function(){var t=document.getElementById("canvas1"),s={},i=0;function e(){i++,s[i]=this,this.x=t.width/2,this.y=t.height/2,this.vx=Math.random()/3,this.vy=Math.random()/3,this.growth=.02*(Math.abs(this.vx)+Math.abs(this.vy)),this.id=i,this.size=0,this.color="#ab2c2c"}e.prototype.draw=function(){this.x+=this.vx,this.y+=this.vy,this.size+=this.growth,(this.x<0||this.x>t.width||this.y<0||this.y>t.height)&&delete s[this.id],null.fillStyle=this.color,null.beginPath(),null.arc(this.x,this.y,this.size,0,2*Math.PI),null.fill()},requestAnimationFrame((function t(){window.r3=requestAnimationFrame(t),null.clearRect(0,0,300,300);var i=0;for(var a in s)i++,s[a].draw();i<20&&new e}))}},{key:"_canvas2",value:function(){var t=document.getElementById("canvas2"),s=null,i={},e=0;function a(){e++,i[e]=this,this.x=t.width/2,this.y=t.height/2,this.vx=(Math.random()-1)/3,this.vy=Math.random()/3,this.growth=.02*(Math.abs(this.vx)+Math.abs(this.vy)),this.id=e,this.size=0,this.color="#ab2c2c"}t.getContext&&(s=t.getContext("2d")),t.width=300,t.height=300,a.prototype.draw=function(){this.x+=this.vx,this.y+=this.vy,this.size+=this.growth,(this.x<0||this.x>t.width||this.y<0||this.y>t.height)&&delete i[this.id],s.fillStyle=this.color,s.beginPath(),s.arc(this.x,this.y,this.size,0,2*Math.PI),s.fill()},requestAnimationFrame((function t(){window.r4=requestAnimationFrame(t),s.clearRect(0,0,300,300);var e=0;for(var n in i)e++,i[n].draw();e<20&&new a}))}},{key:"_pageTurnNext",value:function(){var t=this;this.isOver&&(this.nowIndex++,this.nowIndex>this.maxA?this.nowIndex=this.maxA:(this.isOver=!1,this.effectContent="rule_left",this.Contentanimate="rule_content_1",this.showContent="rule_content_2",setTimeout((function(){t.isOver=!0,t.effectContent="",t.Contentanimate=""}),970)))}},{key:"_pageTurnPrev",value:function(){var t=this;this.isOver&&(this.nowIndex--,this.nowIndex<this.min?this.nowIndex=this.min:(this.isOver=!1,this.effectContent="rule_right",this.Contentanimate="rule_content_1",this.showContent="rule_content_2",setTimeout((function(){t.isOver=!0,t.effectContent="",t.Contentanimate="",t.showContent="rule_content_1"}),970)))}},{key:"_pageTurnNext2",value:function(){var t=this;this.isOver2&&(this.nowIndex2++,this.nowIndex2>this.showArrImage.length-1?this.nowIndex2=this.showArrImage.length-1:(this.isOver2=!1,this.effectContent2="rule_left",this.Contentanimate2=this.showArrImage[this.nowIndex2-1],this.showContent2=this.showArrImage[this.nowIndex2],setTimeout((function(){t.isOver2=!0,t.effectContent2="",t.Contentanimate2=""}),970)))}},{key:"_pageTurnPrev2",value:function(){var t=this;this.isOver2&&(this.nowIndex2--,this.nowIndex2<0?this.nowIndex2=0:(this.isOver2=!1,this.effectContent2="rule_right",this.Contentanimate2=this.showArrImage[this.nowIndex2],this.showContent2=this.showArrImage[this.nowIndex2+1],setTimeout((function(){t.isOver2=!0,t.effectContent2="",t.Contentanimate2="",t.showContent2=t.showArrImage[t.nowIndex2]}),970)))}},{key:"_ClickCp",value:function(){this.cp_show=!0}},{key:"_ClickCLoseCp",value:function(){this.cp_show=!1}},{key:"_ClickRed",value:function(){this.red_show=!0}},{key:"_ClickCLoseRed",value:function(){this.red_show=!1}},{key:"_OpenQuestion",value:function(t){t>this.maxRed+1||this.$router.push({path:"/question",query:{level:t,music:this.isMusic}})}},{key:"_clickGetRed",value:(n=regeneratorRuntime.mark((function t(s){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!=this.isGetRed){t.next=4;break}c.a.toast({msg:"您今日已获取红包领取资格，点击《平安静安》公众号下方菜单栏中《领取红包》按钮，领取您的大红包吧!",title:""}),t.next=15;break;case 4:if(!(this.currentRed[s]<=0)){t.next=7;break}return c.a.toast({msg:"当前关卡红包以领取完毕！",title:""}),t.abrupt("return");case 7:if(0!=s){t.next=10;break}if(0!=this.isFirstCP){t.next=10;break}return t.abrupt("return");case 10:if(!(this.maxRed>=s)){t.next=15;break}return t.next=13,Object(r.a)({level:s});case 13:0==(i=t.sent).code?c.a.toast({msg:"请点击《平安静安》公众号下方菜单栏中《领取红包》按钮，领取您的大红包吧！",title:""}):1==i.code?c.a.toast({msg:i.data.reason,title:""}):3==i.code&&(location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa9da81f585c9d3b0&redirect_uri=http%3A%2F%2Fwx.wuliqinggu.com%2Factivityn%2Findex&response_type=code&scope=snsapi_base&state=1#wechat_redirect");case 15:case"end":return t.stop()}}),t,this)})),o=function(){var t=this,s=arguments;return new Promise((function(i,e){var a=n.apply(t,s);function r(t){u(a,i,e,r,c,"next",t)}function c(t){u(a,i,e,r,c,"throw",t)}r(void 0)}))},function(t){return o.apply(this,arguments)})}])&&v(i.prototype,e),a&&v(i,a),C}(n.b))||e,f=(i(417),i(12)),w=Object(f.a)(C,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"homePage pageWrap main2"},[i("div",{staticClass:"page_wrap page_bg1"},[t._m(0),t._v(" "),i("div",{class:["music",t.isMusic||"on"],staticStyle:{"z-index":"104"},on:{click:t._clickShowMusic}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("div",{staticClass:"btn_wrap"},[i("div",{staticClass:"btn_s",on:{click:t._ClickCp}}),t._v(" "),i("div",{staticClass:"btn_c",on:{click:t._ClickShow}}),t._v(" "),i("div",{staticClass:"btn_j",on:{click:t._ClickRed}}),t._v(" "),i("div",{staticClass:"btn_r",on:{click:t._ClickRule}})])]),t._v(" "),i("div",{class:["rule_wrap2 bg_wrap4",t.rule_showClass?"on":null]},[t._m(4),t._v(" "),i("div",{staticClass:"ruleBg"},[i("div",{staticClass:"btn_back btn_back_style1",on:{click:t._ClickRuleClose}})])]),t._v(" "),i("div",{class:["rule_wrap3","bg_wrap4",t.show_showClass?"on":null]},[t._m(5),t._v(" "),i("div",{staticClass:"bg_bottom"}),t._v(" "),i("swiper",{ref:"mySwiper",staticClass:"rule_bg",attrs:{options:t.swiperOption}},[i("swiper-slide",[i("div",{staticClass:"d1"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d2"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d3"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d4"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d5"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d6"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d7"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d8"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d9"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d10"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d11"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d12"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d13"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d14"})]),t._v(" "),i("swiper-slide",[i("div",{staticClass:"d15"})]),t._v(" "),i("div",{staticClass:"swiper-button-prev next",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),i("div",{staticClass:"swiper-button-next prev",attrs:{slot:"button-next"},slot:"button-next"})],1),t._v(" "),i("div",{staticClass:"btn_back btn_back_style11",on:{click:t._ClickShowClose}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.cp_show,expression:"cp_show"}],staticClass:"cp_style bg_wrap4"},[t._m(6),t._v(" "),i("div",{staticClass:"bg_bottom"}),t._v(" "),i("ul",{staticClass:"cp_list"},[i("li",{staticClass:"cp_sub ",on:{click:function(s){return t._OpenQuestion(4)}}},[i("div",{staticClass:"cp_name cp_5"}),t._v(" "),t._m(7),t._v(" "),i("div",{class:[t.max<=4||"opacity0"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.max<=4,expression:"max<=4"}],class:[t.max>=4?"cp_go":"cp_lock"]})])]),t._v(" "),i("li",{staticClass:"cp_sub",on:{click:function(s){return t._OpenQuestion(3)}}},[i("div",{staticClass:"cp_name cp_4"}),t._v(" "),t._m(8),t._v(" "),i("div",{class:["",t.max<=3||"opacity0"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.max<=3,expression:"max<=3"}],class:[t.max>=3?"cp_go":"cp_lock"]})])]),t._v(" "),i("li",{staticClass:"cp_sub",on:{click:function(s){return t._OpenQuestion(2)}}},[i("div",{staticClass:"cp_name cp_3"}),t._v(" "),t._m(9),t._v(" "),i("div",{class:["",t.max<=2||"opacity0"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.max<=2,expression:"max<=2"}],class:[t.max>=2?"cp_go":"cp_lock"]})])]),t._v(" "),i("li",{staticClass:"cp_sub",on:{click:function(s){return t._OpenQuestion(1)}}},[i("div",{staticClass:"cp_name cp_2"}),t._v(" "),t._m(10),t._v(" "),i("div",{class:["",t.max<=1||"opacity0"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.max<=1,expression:"max<=1"}],class:[t.max>=1?"cp_go":"cp_lock"]})])]),t._v(" "),i("li",{staticClass:"cp_sub",on:{click:function(s){return t._OpenQuestion(0)}}},[i("div",{staticClass:"cp_name cp_1"}),t._v(" "),t._m(11),t._v(" "),i("div",{class:["",t.max<=0||"opacity0"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.max<=0,expression:"max<=0"}],class:["cp_go"]})])]),t._v(" "),i("div",{staticClass:"btn_back btn_back_style2",on:{click:t._ClickCLoseCp}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.red_show,expression:"red_show"}],staticClass:"cp_style bg_wrap4"},[t._m(12),t._v(" "),i("div",{staticClass:"bg_bottom"}),t._v(" "),i("ul",{staticClass:"cp_list cp_list2"},[i("li",{staticClass:"cp_sub cp_sub2"},[i("div",{staticClass:"cp_name cp_5"}),t._v(" "),t._m(13),t._v(" "),i("div",{class:["red_box red_box5 ",1==t.isGetRed?null:t.maxRed>=4&&"on"],on:{click:function(s){return t._clickGetRed(4)}}},[i("div",{staticClass:"left2"},[i("div",{staticClass:"red_status"},[t._v(t._s(1==t.isGetRed?"不可领取":t.maxRed>=4?"可领取":"不可领取"))]),t._v(" "),i("div",{staticClass:"red_num"},[i("span",{staticClass:"red_num2"},[t._v("剩余:")]),t._v(t._s(t.currentRed[4]>0?""+t.currentRed[4]:"已领完"))])]),t._v(" "),i("div",{staticClass:"right2"})])]),t._v(" "),i("li",{staticClass:"cp_sub cp_sub2"},[i("div",{staticClass:"cp_name cp_4"}),t._v(" "),t._m(14),t._v(" "),i("div",{class:["red_box red_box4 ",1==t.isGetRed?null:t.maxRed>=3&&"on"],on:{click:function(s){return t._clickGetRed(3)}}},[i("div",{staticClass:"left2"},[i("div",{staticClass:"red_status"},[t._v(t._s(1==t.isGetRed?"不可领取":t.maxRed>=3?"可领取":"不可领取"))]),t._v(" "),i("div",{staticClass:"red_num"},[i("span",{staticClass:"red_num2"},[t._v("剩余:")]),t._v(t._s(t.currentRed[4]>0?""+t.currentRed[4]:"已领完"))])]),t._v(" "),i("div",{staticClass:"right2"})])]),t._v(" "),i("li",{staticClass:"cp_sub cp_sub2"},[i("div",{staticClass:"cp_name cp_3"}),t._v(" "),t._m(15),t._v(" "),i("div",{class:["red_box red_box3 ",1==t.isGetRed?null:t.maxRed>=2&&"on"],on:{click:function(s){return t._clickGetRed(2)}}},[i("div",{staticClass:"left2"},[i("div",{staticClass:"red_status"},[t._v(t._s(1==t.isGetRed?"不可领取":t.maxRed>=2?"可领取":"不可领取"))]),t._v(" "),i("div",{staticClass:"red_num"},[i("span",{staticClass:"red_num2"},[t._v("剩余:")]),t._v(t._s(t.currentRed[4]>0?""+t.currentRed[4]:"已领完"))])]),t._v(" "),i("div",{staticClass:"right2"})])]),t._v(" "),i("li",{staticClass:"cp_sub cp_sub2"},[i("div",{staticClass:"cp_name cp_2"}),t._v(" "),t._m(16),t._v(" "),i("div",{class:["red_box red_box2 ",1==t.isGetRed?null:t.maxRed>=1&&"on"],on:{click:function(s){return t._clickGetRed(1)}}},[i("div",{staticClass:"left2"},[i("div",{staticClass:"red_status"},[t._v(t._s(1==t.isGetRed?"不可领取":t.maxRed>=1?"可领取":"不可领取"))]),t._v(" "),i("div",{staticClass:"red_num"},[i("span",{staticClass:"red_num2"},[t._v("剩余:")]),t._v(t._s(t.currentRed[4]>0?""+t.currentRed[4]:"已领完"))])]),t._v(" "),i("div",{staticClass:"right2"})])]),t._v(" "),i("li",{staticClass:"cp_sub cp_sub2"},[i("div",{staticClass:"cp_name cp_1"}),t._v(" "),t._m(17),t._v(" "),i("div",{class:["red_box red_box1 ",1==t.isGetRed?null:t.maxRed>=0&&"on"],on:{click:function(s){return t._clickGetRed(0)}}},[i("div",{staticClass:"left2"},[i("div",{staticClass:"red_status"},[t._v(t._s(1==t.isGetRed?"不可领取":t.maxRed>=0?"可领取":"不可领取"))]),t._v(" "),i("div",{staticClass:"red_num"},[i("span",{staticClass:"red_num2"},[t._v("剩余:")]),t._v(t._s(t.currentRed[4]>0?""+t.currentRed[4]:"已领完"))])]),t._v(" "),i("div",{staticClass:"right2"})])]),t._v(" "),i("div",{staticClass:"btn_back btn_back_style2",on:{click:t._ClickCLoseRed}})])])])}),a,!1,null,null,null);s.default=w.exports}}]);