(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{454:function(t,s,e){"use strict";e.r(s);var i=e(487),a=e(465);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);e(496);var c=e(11),r=Object(c.a)(a.default,i.a,i.b,!1,null,null,null);s.default=r.exports},463:function(t,s,e){},464:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i,a=e(449),n=e(450);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,s,e,i,a,n,c){try{var r=t[n](c),o=r.value}catch(t){return void e(t)}r.done?s(o):Promise.resolve(o).then(i,a)}function o(t,s){for(var e=0;e<s.length;e++){var i=s[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,s){return!s||"object"!==c(s)&&"function"!=typeof s?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):s}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,s){return(u=Object.setPrototypeOf||function(t,s){return t.__proto__=s,t})(t,s)}var v=(0,a.Component)(i=function(t){function s(){var t,e;!function(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=l(this,(t=_(s)).call.apply(t,[this].concat(a)))).isFirstCP=0,e.isGetRed=0,e.maxRed=0,e.currentRed=[1,2,3,4,5],e.rule_showClass=!1,e.show_showClass=!1,e.isOver=!0,e.nowIndex=0,e.isFirstCP=!1,e.max=1,e.min=0,e.effectContent=null,e.Contentanimate=null,e.showContent="rule_content_1",e.isOver2=!0,e.nowIndex2=0,e.showArrImage=["show_content_1","show_content_2","show_content_3","show_content_4","show_content_5"],e.effectContent2=null,e.Contentanimate2=null,e.showContent2="show_content_1",e.cp_show=!1,e.red_show=!1,e.passCp=null,e}return function(t,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(s&&s.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),s&&u(t,s)}(s,a.Vue),function(t,s,e){s&&o(t.prototype,s),e&&o(t,e)}(s,[{key:"created",value:function(){console.log(12312312),console.log(this.$route.query.data),this.userData=this.$route.query.data,this.isFirstCP=this.userData.isFirstCP,this.currentRed=this.userData.currentRed,this.isGetRed=this.userData.isGetRed,this.maxRed=this.userData.maxRed,console.log(this.userData,"this.userData2")}},{key:"_ClickRule",value:function(){console.log(1111),this.rule_showClass=!0}},{key:"_ClickRuleClose",value:function(){this.rule_showClass=!1}},{key:"_ClickShow",value:function(){this.show_showClass=!0}},{key:"_ClickShowClose",value:function(){this.show_showClass=!1}},{key:"_pageTurnNext",value:function(){var t=this;this.isOver&&(this.nowIndex++,this.nowIndex>this.max?this.nowIndex=this.max:(this.isOver=!1,this.effectContent="rule_left",this.Contentanimate="rule_content_1",this.showContent="rule_content_2",setTimeout(function(){t.isOver=!0,t.effectContent="",t.Contentanimate=""},970)))}},{key:"_pageTurnPrev",value:function(){var t=this;this.isOver&&(this.nowIndex--,this.nowIndex<this.min?this.nowIndex=this.min:(this.isOver=!1,this.effectContent="rule_right",this.Contentanimate="rule_content_1",this.showContent="rule_content_2",setTimeout(function(){t.isOver=!0,t.effectContent="",t.Contentanimate="",t.showContent="rule_content_1"},970)))}},{key:"_pageTurnNext2",value:function(){var t=this;this.isOver2&&(console.log(this.nowIndex2),this.nowIndex2++,console.log(this.nowIndex2),this.nowIndex2>this.showArrImage.length-1?this.nowIndex2=this.showArrImage.length-1:(this.isOver2=!1,this.effectContent2="rule_left",console.log(this.nowIndex2),this.Contentanimate2=this.showArrImage[this.nowIndex2-1],this.showContent2=this.showArrImage[this.nowIndex2],setTimeout(function(){t.isOver2=!0,t.effectContent2="",t.Contentanimate2=""},970)))}},{key:"_pageTurnPrev2",value:function(){var t=this;this.isOver2&&(this.nowIndex2--,this.nowIndex2<0?this.nowIndex2=0:(this.isOver2=!1,this.effectContent2="rule_right",this.Contentanimate2=this.showArrImage[this.nowIndex2],this.showContent2=this.showArrImage[this.nowIndex2+1],setTimeout(function(){t.isOver2=!0,t.effectContent2="",t.Contentanimate2="",t.showContent2=t.showArrImage[t.nowIndex2]},970)))}},{key:"_ClickCp",value:function(){this.cp_show=!0}},{key:"_ClickCLoseCp",value:function(){this.cp_show=!1}},{key:"_ClickRed",value:function(){this.red_show=!0}},{key:"_ClickCLoseRed",value:function(){this.red_show=!1}},{key:"_OpenQuestion",value:function(t){t>this.maxRed+1||this.$router.push({path:"/question",query:{level:t}})}},{key:"_clickGetRed",value:function(){var t=function(t){return function(){var s=this,e=arguments;return new Promise(function(i,a){var n=t.apply(s,e);function c(t){r(n,i,a,c,o,"next",t)}function o(t){r(n,i,a,c,o,"throw",t)}c(void 0)})}}(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(s,"getRed"),1!=this.isGetRed){t.next=5;break}alert("红包已领取请到公众号页面领取！"),t.next=16;break;case 5:if(!(this.currentRed[s]<=0)){t.next=8;break}return alert("当前关卡红包以领取完毕！"),t.abrupt("return");case 8:if(0!=s){t.next=11;break}if(0!=this.isFirstCP){t.next=11;break}return t.abrupt("return");case 11:if(!(this.maxRed>=s)){t.next=16;break}return t.next=14,(0,n.getRed)({level:s});case 14:t.sent,alert("红包领取成功请到公众号页面领取！");case 16:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}()}]),s}())||i;s.default=v},465:function(t,s,e){"use strict";e.r(s);var i=e(464),a=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s.default=a.a},487:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg bg_style1 main"},[e("div",{ref:"title_style1",class:["title","title_style1"]}),t._v(" "),e("div",{staticClass:"music"}),t._v(" "),e("div",{class:["title_word"]},[e("div",{staticClass:"button button2 rule_show ",on:{click:t._ClickRule}},[e("div",{staticClass:"button_word button_rule_word"})])]),t._v(" "),e("ul",{staticClass:"button_wrap"},[e("li",{staticClass:"button style1",on:{click:t._ClickCp}},[e("div",{staticClass:"button_word button_start_word"})]),t._v(" "),e("li",{staticClass:"button style1",on:{click:t._ClickRed}},[e("div",{staticClass:"button_word button_red_word"})]),t._v(" "),e("li",{staticClass:"button style1",on:{click:t._ClickShow}},[e("div",{staticClass:"button_word button_show_word"})])]),t._v(" "),e("div",{staticClass:"bg_down"}),t._v(" "),e("div",{class:["rule_wrap animateShow",t.rule_showClass?"on":null]},[e("div",{staticClass:"rule_title"}),t._v(" "),e("div",{staticClass:"rule_close",on:{click:t._ClickRuleClose}}),t._v(" "),e("div",{staticClass:"rule_main"},[e("ul",{staticClass:"rule_content"},[e("li",{class:["rule_content_main",t.showContent]}),t._v(" "),e("li",{class:["rule_content_main",t.effectContent,t.Contentanimate]})]),t._v(" "),e("div",{staticClass:"rule_prev rule_button",on:{click:t._pageTurnPrev}}),t._v(" "),e("div",{staticClass:"rule_next rule_button",on:{click:t._pageTurnNext}})])]),t._v(" "),e("div",{class:["rule_wrap animateShow",t.show_showClass?"on":null]},[e("div",{staticClass:"rule_title2"}),t._v(" "),e("div",{staticClass:"rule_close",on:{click:t._ClickShowClose}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"rule_main2"},[e("ul",{staticClass:"rule_content"},[e("li",{class:["rule_content_main",t.showContent2]}),t._v(" "),e("li",{class:["rule_content_main",t.effectContent2,t.Contentanimate2]})]),t._v(" "),e("div",{staticClass:"rule_prev rule_button",on:{click:t._pageTurnPrev2}}),t._v(" "),e("div",{staticClass:"rule_next rule_button",on:{click:t._pageTurnNext2}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cp_show,expression:"cp_show"}],staticClass:"cp_style"},[t._m(1),t._v(" "),e("div",{staticClass:"cp_close",on:{click:t._ClickCLoseCp}}),t._v(" "),e("ul",{staticClass:"cp_list"},[e("li",{staticClass:"cp_sub"},[e("div",{staticClass:"cp_name"}),t._v(" "),t._m(2),t._v(" "),e("div",{class:["cp_button",t.maxRed<=3||"opacity0"]},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.maxRed<=3,expression:"maxRed<=3"}],class:[t.maxRed>=3?"cp_go":"cp_lock"],on:{click:function(s){return t._OpenQuestion(4)}}})])]),t._v(" "),e("li",{staticClass:"cp_sub"},[e("div",{staticClass:"cp_name"}),t._v(" "),t._m(3),t._v(" "),e("div",{class:["cp_button",t.maxRed<=2||"opacity0"]},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.maxRed<=2,expression:"maxRed<=2"}],class:[t.maxRed>=2?"cp_go":"cp_lock"],on:{click:function(s){return t._OpenQuestion(3)}}})])]),t._v(" "),e("li",{staticClass:"cp_sub"},[e("div",{staticClass:"cp_name"}),t._v(" "),t._m(4),t._v(" "),e("div",{class:["cp_button",t.maxRed<=1||"opacity0"]},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.maxRed<=1,expression:"maxRed<=1"}],class:[t.maxRed>=1?"cp_go":"cp_lock"],on:{click:function(s){return t._OpenQuestion(2)}}})])]),t._v(" "),e("li",{staticClass:"cp_sub"},[e("div",{staticClass:"cp_name"}),t._v(" "),t._m(5),t._v(" "),e("div",{class:["cp_button",t.maxRed<=0||"opacity0"]},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.maxRed<=0,expression:"maxRed<=0"}],class:[t.maxRed>=0?"cp_go":"cp_lock"],on:{click:function(s){return t._OpenQuestion(1)}}})])]),t._v(" "),e("li",{staticClass:"cp_sub"},[e("div",{staticClass:"cp_name"}),t._v(" "),t._m(6),t._v(" "),e("div",{class:["cp_button",t.maxRed<=0||"opacity0"]},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.maxRed<=0,expression:"maxRed<=0"}],class:["cp_go"],on:{click:function(s){return t._OpenQuestion(0)}}})])])]),t._v(" "),e("div",{staticClass:"cp_tips",on:{click:t._ClickRule}},[t._v("查看规则>>")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.red_show,expression:"red_show"}],staticClass:"cp_style"},[t._m(7),t._v(" "),e("div",{staticClass:"cp_close",on:{click:t._ClickCLoseRed}}),t._v(" "),e("ul",{staticClass:"cp_list"},[e("li",{staticClass:"cp_sub"},[e("div",{staticClass:"cp_name"}),t._v(" "),t._m(8),t._v(" "),e("div",{class:["red_box red_box5 ",t.isGetRed?null:t.maxRed>=4&&"on"],on:{click:function(s){return t._clickGetRed(4)}}},[e("div",{staticClass:"have"}),t._v(" "),e("div",{staticClass:"red_num"},[t._v(t._s(t.currentRed[4]>0?"剩余"+t.currentRed[4]:"已领完"))])])]),t._v(" "),e("li",{staticClass:"cp_sub"},[e("div",{staticClass:"cp_name"}),t._v(" "),t._m(9),t._v(" "),e("div",{class:["red_box red_box4 ",t.isGetRed?null:t.maxRed>=3&&"on"],on:{click:function(s){return t._clickGetRed(3)}}},[e("div",{staticClass:"have"}),t._v(" "),e("div",{staticClass:"red_num"},[t._v(t._s(t.currentRed[3]>0?"剩余"+t.currentRed[3]:"已领完"))])])]),t._v(" "),e("li",{staticClass:"cp_sub"},[e("div",{staticClass:"cp_name"}),t._v(" "),t._m(10),t._v(" "),e("div",{class:["red_box red_box3 ",t.isGetRed?null:t.maxRed>=2&&"on"],on:{click:function(s){return t._clickGetRed(2)}}},[e("div",{staticClass:"have"}),t._v(" "),e("div",{staticClass:"red_num"},[t._v(t._s(t.currentRed[2]>0?"剩余"+t.currentRed[2]:"已领完"))])])]),t._v(" "),e("li",{staticClass:"cp_sub"},[e("div",{staticClass:"cp_name"}),t._v(" "),t._m(11),t._v(" "),e("div",{class:["red_box red_box2 ",t.isGetRed?null:t.maxRed>=1&&"on"],on:{click:function(s){return t._clickGetRed(1)}}},[e("div",{staticClass:"have"}),t._v(" "),e("div",{staticClass:"red_num"},[t._v(t._s(t.currentRed[1]>0?"剩余"+t.currentRed[1]:"已领完"))])])]),t._v(" "),e("li",{staticClass:"cp_sub"},[e("div",{staticClass:"cp_name"}),t._v(" "),t._m(12),t._v(" "),e("div",{class:["red_box red_box1 ",t.isGetRed?null:t.maxRed>=0&&"on"],on:{click:function(s){return t._clickGetRed(0)}}},[e("div",{staticClass:"have"}),t._v(" "),e("div",{staticClass:"red_num"},[t._v(t._s(t.currentRed[0]>0?"剩余"+t.currentRed[0]:"已领完"))])])])]),t._v(" "),e("div",{staticClass:"red_tips"},[t._v("*点击礼包领取关卡奖励")]),t._v(" "),e("div",{staticClass:"cp_tips",on:{click:t._ClickRule}},[t._v("查看规则>>")])])])},a=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"show_title"},[s("div",{staticClass:"show_word"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_title"},[s("div",{staticClass:"cp_word"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_5"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_4"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_3"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_1"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_title"},[s("div",{staticClass:"cp_word"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_5"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_4"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_3"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_1"})])}];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return a})},496:function(t,s,e){"use strict";var i=e(463);e.n(i).a}}]);