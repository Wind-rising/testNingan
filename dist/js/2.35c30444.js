(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{455:function(t,s,i){"use strict";i.r(s);var e=i(488),a=i(466);for(var n in a)"default"!==n&&function(t){i.d(s,t,function(){return a[t]})}(n);i(499);var c=i(11),r=Object(c.a)(a.default,e.a,e.b,!1,null,null,null);s.default=r.exports},464:function(t,s,i){},465:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e,a=i(449),n=i(450);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,s,i,e,a,n,c){try{var r=t[n](c),o=r.value}catch(t){return void i(t)}r.done?s(o):Promise.resolve(o).then(e,a)}function o(t,s){for(var i=0;i<s.length;i++){var e=s[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function l(t,s){return!s||"object"!==c(s)&&"function"!=typeof s?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):s}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,s){return(u=Object.setPrototypeOf||function(t,s){return t.__proto__=s,t})(t,s)}var v=(0,a.Component)(e=function(t){function s(){var t,i;!function(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}(this,s);for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return(i=l(this,(t=_(s)).call.apply(t,[this].concat(a)))).bgAudio=null,i.isMusic=!0,i.isFirstCP=0,i.isGetRed=0,i.maxRed=0,i.max=0,i.currentRed=[],i.rule_showClass=!1,i.show_showClass=!1,i.isOver=!0,i.nowIndex=0,i.isFirstCP=!1,i.max=1,i.min=0,i.effectContent=null,i.Contentanimate=null,i.showContent="rule_content_1",i.isOver2=!0,i.nowIndex2=0,i.showArrImage=["show_content_1","show_content_2","show_content_3","show_content_4","show_content_5"],i.effectContent2=null,i.Contentanimate2=null,i.showContent2="show_content_1",i.cp_show=!1,i.red_show=!1,i.passCp=null,i}return function(t,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(s&&s.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),s&&u(t,s)}(s,a.Vue),function(t,s,i){s&&o(t.prototype,s),i&&o(t,i)}(s,[{key:"_clickShowMusic",value:function(){this.isMusic=!this.isMusic,this._MusicInit()}},{key:"_MusicInit",value:function(){this.isMusic?this.bgAudio.play():this.bgAudio.pause()}},{key:"_music",value:function(){this.bgAudio=document.getElementById("music1"),console.log(this.bgAudio,"vf"),document.addEventListener("WeixinJSBridgeReady",function(){this.bgAudio.play(),this.bgAudio.pause()})}},{key:"mounted",value:function(){this._music(),this._MusicInit()}},{key:"created",value:function(){console.log(12312312),console.log(this.$route.query.data),this.userData=this.$route.query.data,this.isFirstCP=this.userData.isFirstCP,this.currentRed=this.userData.currentRed,this.isGetRed=this.userData.isGetRed,this.maxRed=this.userData.maxRed,this.max=this.userData.max,this.isMusic=this.$route.query.music,this._MusicInit(),console.log(this.userData,"this.userData2")}},{key:"_ClickRule",value:function(){console.log(1111),this.rule_showClass=!0}},{key:"_ClickRuleClose",value:function(){this.rule_showClass=!1}},{key:"_ClickShow",value:function(){this.show_showClass=!0}},{key:"_ClickShowClose",value:function(){this.show_showClass=!1}},{key:"_pageTurnNext",value:function(){var t=this;this.isOver&&(this.nowIndex++,this.nowIndex>this.max?this.nowIndex=this.max:(this.isOver=!1,this.effectContent="rule_left",this.Contentanimate="rule_content_1",this.showContent="rule_content_2",setTimeout(function(){t.isOver=!0,t.effectContent="",t.Contentanimate=""},970)))}},{key:"_pageTurnPrev",value:function(){var t=this;this.isOver&&(this.nowIndex--,this.nowIndex<this.min?this.nowIndex=this.min:(this.isOver=!1,this.effectContent="rule_right",this.Contentanimate="rule_content_1",this.showContent="rule_content_2",setTimeout(function(){t.isOver=!0,t.effectContent="",t.Contentanimate="",t.showContent="rule_content_1"},970)))}},{key:"_pageTurnNext2",value:function(){var t=this;this.isOver2&&(console.log(this.nowIndex2),this.nowIndex2++,console.log(this.nowIndex2),this.nowIndex2>this.showArrImage.length-1?this.nowIndex2=this.showArrImage.length-1:(this.isOver2=!1,this.effectContent2="rule_left",console.log(this.nowIndex2),this.Contentanimate2=this.showArrImage[this.nowIndex2-1],this.showContent2=this.showArrImage[this.nowIndex2],setTimeout(function(){t.isOver2=!0,t.effectContent2="",t.Contentanimate2=""},970)))}},{key:"_pageTurnPrev2",value:function(){var t=this;this.isOver2&&(this.nowIndex2--,this.nowIndex2<0?this.nowIndex2=0:(this.isOver2=!1,this.effectContent2="rule_right",this.Contentanimate2=this.showArrImage[this.nowIndex2],this.showContent2=this.showArrImage[this.nowIndex2+1],setTimeout(function(){t.isOver2=!0,t.effectContent2="",t.Contentanimate2="",t.showContent2=t.showArrImage[t.nowIndex2]},970)))}},{key:"_ClickCp",value:function(){this.cp_show=!0}},{key:"_ClickCLoseCp",value:function(){this.cp_show=!1}},{key:"_ClickRed",value:function(){this.red_show=!0}},{key:"_ClickCLoseRed",value:function(){this.red_show=!1}},{key:"_OpenQuestion",value:function(t){t>this.maxRed+1||this.$router.push({path:"/question",query:{level:t,music:this.isMusic}})}},{key:"_clickGetRed",value:function(){var t=function(t){return function(){var s=this,i=arguments;return new Promise(function(e,a){var n=t.apply(s,i);function c(t){r(n,e,a,c,o,"next",t)}function o(t){r(n,e,a,c,o,"throw",t)}c(void 0)})}}(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(s,"getRed"),1!=this.isGetRed){t.next=5;break}alert("红包已领取请到公众号页面领取！"),t.next=16;break;case 5:if(!(this.currentRed[s]<=0)){t.next=8;break}return alert("当前关卡红包以领取完毕！"),t.abrupt("return");case 8:if(0!=s){t.next=11;break}if(0!=this.isFirstCP){t.next=11;break}return t.abrupt("return");case 11:if(!(this.maxRed>=s)){t.next=16;break}return t.next=14,(0,n.getRed)({level:s});case 14:t.sent,alert("红包领取成功请到公众号页面领取！");case 16:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}()}]),s}())||e;s.default=v},466:function(t,s,i){"use strict";i.r(s);var e=i(465),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);s.default=a.a},488:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"bg bg_style1 main"},[t._m(0),t._v(" "),i("div",{ref:"title_style1",class:["title","title_style1"]}),t._v(" "),i("div",{class:["music",t.isMusic||"on"],on:{click:t._clickShowMusic}}),t._v(" "),i("div",{class:["title_word"]},[i("div",{staticClass:"button button2 rule_show ",on:{click:t._ClickRule}},[i("div",{staticClass:"button_word button_rule_word"})])]),t._v(" "),i("ul",{staticClass:"button_wrap"},[i("li",{staticClass:"button style1",on:{click:t._ClickCp}},[i("div",{staticClass:"button_word button_start_word"})]),t._v(" "),i("li",{staticClass:"button style1",on:{click:t._ClickRed}},[i("div",{staticClass:"button_word button_red_word"})]),t._v(" "),i("li",{staticClass:"button style1",on:{click:t._ClickShow}},[i("div",{staticClass:"button_word button_show_word"})])]),t._v(" "),i("div",{staticClass:"bg_down"}),t._v(" "),i("div",{class:["rule_wrap animateShow",t.rule_showClass?"on":null]},[i("div",{staticClass:"rule_title"}),t._v(" "),i("div",{staticClass:"rule_close",on:{click:t._ClickRuleClose}}),t._v(" "),i("div",{staticClass:"rule_main"},[i("ul",{staticClass:"rule_content"},[i("li",{class:["rule_content_main",t.showContent]}),t._v(" "),i("li",{class:["rule_content_main",t.effectContent,t.Contentanimate]})]),t._v(" "),i("div",{staticClass:"rule_prev rule_button",on:{click:t._pageTurnPrev}}),t._v(" "),i("div",{staticClass:"rule_next rule_button",on:{click:t._pageTurnNext}})])]),t._v(" "),i("div",{class:["rule_wrap animateShow",t.show_showClass?"on":null]},[i("div",{staticClass:"rule_title2"}),t._v(" "),i("div",{staticClass:"rule_close",on:{click:t._ClickShowClose}}),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"rule_main2"},[i("ul",{staticClass:"rule_content"},[i("li",{class:["rule_content_main",t.showContent2]}),t._v(" "),i("li",{class:["rule_content_main",t.effectContent2,t.Contentanimate2]})]),t._v(" "),i("div",{staticClass:"rule_prev rule_button",on:{click:t._pageTurnPrev2}}),t._v(" "),i("div",{staticClass:"rule_next rule_button",on:{click:t._pageTurnNext2}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.cp_show,expression:"cp_show"}],staticClass:"cp_style"},[t._m(2),t._v(" "),i("div",{staticClass:"cp_close",on:{click:t._ClickCLoseCp}}),t._v(" "),i("ul",{staticClass:"cp_list"},[i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(3),t._v(" "),i("div",{class:["cp_button",t.max<=4||"opacity0"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.max<=4,expression:"max<=4"}],class:[t.max>=4?"cp_go":"cp_lock"],on:{click:function(s){return t._OpenQuestion(4)}}})])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(4),t._v(" "),i("div",{class:["cp_button",t.max<=3||"opacity0"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.max<=3,expression:"max<=3"}],class:[t.max>=3?"cp_go":"cp_lock"],on:{click:function(s){return t._OpenQuestion(3)}}})])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(5),t._v(" "),i("div",{class:["cp_button",t.max<=2||"opacity0"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.max<=2,expression:"max<=2"}],class:[t.max>=2?"cp_go":"cp_lock"],on:{click:function(s){return t._OpenQuestion(2)}}})])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(6),t._v(" "),i("div",{class:["cp_button",t.max<=1||"opacity0"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.max<=1,expression:"max<=1"}],class:[t.max>=1?"cp_go":"cp_lock"],on:{click:function(s){return t._OpenQuestion(1)}}})])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(7),t._v(" "),i("div",{class:["cp_button",t.max<=0||"opacity0"]},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.max<=0,expression:"max<=0"}],class:["cp_go"],on:{click:function(s){return t._OpenQuestion(0)}}})])])]),t._v(" "),i("div",{staticClass:"cp_tips",on:{click:t._ClickRule}},[t._v("查看规则>>")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.red_show,expression:"red_show"}],staticClass:"cp_style"},[t._m(8),t._v(" "),i("div",{staticClass:"cp_close",on:{click:t._ClickCLoseRed}}),t._v(" "),i("ul",{staticClass:"cp_list"},[i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(9),t._v(" "),i("div",{class:["red_box red_box5 ",1==t.isGetRed?null:t.maxRed>=4&&"on"],on:{click:function(s){return t._clickGetRed(4)}}},[i("div",{staticClass:"have"}),t._v(" "),i("div",{staticClass:"red_num"},[t._v(t._s(t.currentRed[4]>0?"剩余"+t.currentRed[4]:"已领完"))])])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(10),t._v(" "),i("div",{class:["red_box red_box4 ",1==t.isGetRed?null:t.maxRed>=3&&"on"],on:{click:function(s){return t._clickGetRed(3)}}},[i("div",{staticClass:"have"}),t._v(" "),i("div",{staticClass:"red_num"},[t._v(t._s(t.currentRed[3]>0?"剩余"+t.currentRed[3]:"已领完"))])])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(11),t._v(" "),i("div",{class:["red_box red_box3 ",1==t.isGetRed?null:t.maxRed>=2&&"on"],on:{click:function(s){return t._clickGetRed(2)}}},[i("div",{staticClass:"have"}),t._v(" "),i("div",{staticClass:"red_num"},[t._v(t._s(t.currentRed[2]>0?"剩余"+t.currentRed[2]:"已领完"))])])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(12),t._v(" "),i("div",{class:["red_box red_box2 ",1==t.isGetRed?null:t.maxRed>=1&&"on"],on:{click:function(s){return t._clickGetRed(1)}}},[i("div",{staticClass:"have"}),t._v(" "),i("div",{staticClass:"red_num"},[t._v(t._s(t.currentRed[1]>0?"剩余"+t.currentRed[1]:"已领完"))])])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(13),t._v(" "),i("div",{class:["red_box red_box1 ",1==t.isGetRed?null:t.maxRed>=0&&"on"],on:{click:function(s){return t._clickGetRed(0)}}},[i("div",{staticClass:"have"}),t._v(" "),i("div",{staticClass:"red_num"},[t._v(t._s(t.currentRed[0]>0?"剩余"+t.currentRed[0]:"已领完"))])])])]),t._v(" "),i("div",{staticClass:"red_tips"},[t._v("*点击礼包领取关卡奖励")]),t._v(" "),i("div",{staticClass:"cp_tips",on:{click:t._ClickRule}},[t._v("查看规则>>")])])])},a=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"videobox"},[s("video",{staticStyle:{display:"none"},attrs:{autoplay:"",name:"media",id:"music1",loop:"loop","webkit-playsinline":"webkit-playsinline"}},[s("source",{attrs:{src:i(453),type:"audio/mp3"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"show_title"},[s("div",{staticClass:"show_word"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_title"},[s("div",{staticClass:"cp_word"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_5"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_4"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_3"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_1"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_title"},[s("div",{staticClass:"cp_word"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_5"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_4"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_3"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_1"})])}];i.d(s,"a",function(){return e}),i.d(s,"b",function(){return a})},499:function(t,s,i){"use strict";var e=i(464);i.n(e).a}}]);