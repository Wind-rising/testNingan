(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{419:function(t,s,i){},426:function(t,s,i){"use strict";var a=i(419);i.n(a).a},434:function(t,s,i){"use strict";i.r(s);var a,e=i(405);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,s){for(var i=0;i<s.length;i++){var a=s[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function l(t,s){return!s||"object"!==n(s)&&"function"!=typeof s?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):s}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,s){return(_=Object.setPrototypeOf||function(t,s){return t.__proto__=s,t})(t,s)}var r=Object(e.a)(a=function(t){function s(){var t,i;!function(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}(this,s);for(var a=arguments.length,e=new Array(a),n=0;n<a;n++)e[n]=arguments[n];return(i=l(this,(t=o(s)).call.apply(t,[this].concat(e)))).rule_showClass=!1,i.show_showClass=!1,i.isOver=!0,i.nowIndex=0,i.isFirstCP=!1,i.max=1,i.min=0,i.effectContent=null,i.Contentanimate=null,i.showContent="rule_content_1",i.isOver2=!0,i.nowIndex2=0,i.showArrImage=["show_content_1","show_content_2","show_content_3","show_content_4","show_content_5"],i.effectContent2=null,i.Contentanimate2=null,i.showContent2="show_content_1",i.cp_show=!1,i.red_show=!1,i.nowCp=0,i.passCp=null,i}var i,a,n;return function(t,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(s&&s.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),s&&_(t,s)}(s,e["b"]),i=s,(a=[{key:"created",value:function(){this.userData=this.$route.query.userData,console.log(this.userData)}},{key:"_ClickRule",value:function(){console.log(1111),this.rule_showClass=!0}},{key:"_ClickRuleClose",value:function(){this.rule_showClass=!1}},{key:"_ClickShow",value:function(){this.show_showClass=!0}},{key:"_ClickShowClose",value:function(){this.show_showClass=!1}},{key:"_pageTurnNext",value:function(){var t=this;this.isOver&&(this.nowIndex++,this.nowIndex>this.max?this.nowIndex=this.max:(this.isOver=!1,this.effectContent="rule_left",this.Contentanimate="rule_content_1",this.showContent="rule_content_2",setTimeout(function(){t.isOver=!0,t.effectContent="",t.Contentanimate=""},970)))}},{key:"_pageTurnPrev",value:function(){var t=this;this.isOver&&(this.nowIndex--,this.nowIndex<this.min?this.nowIndex=this.min:(this.isOver=!1,this.effectContent="rule_right",this.Contentanimate="rule_content_1",this.showContent="rule_content_2",setTimeout(function(){t.isOver=!0,t.effectContent="",t.Contentanimate="",t.showContent="rule_content_1"},970)))}},{key:"_pageTurnNext2",value:function(){var t=this;this.isOver2&&(console.log(this.nowIndex2),this.nowIndex2++,console.log(this.nowIndex2),this.nowIndex2>this.showArrImage.length-1?this.nowIndex2=this.showArrImage.length-1:(this.isOver2=!1,this.effectContent2="rule_left",console.log(this.nowIndex2),this.Contentanimate2=this.showArrImage[this.nowIndex2-1],this.showContent2=this.showArrImage[this.nowIndex2],setTimeout(function(){t.isOver2=!0,t.effectContent2="",t.Contentanimate2=""},970)))}},{key:"_pageTurnPrev2",value:function(){var t=this;this.isOver2&&(this.nowIndex2--,this.nowIndex2<0?this.nowIndex2=0:(this.isOver2=!1,this.effectContent2="rule_right",this.Contentanimate2=this.showArrImage[this.nowIndex2],this.showContent2=this.showArrImage[this.nowIndex2+1],setTimeout(function(){t.isOver2=!0,t.effectContent2="",t.Contentanimate2="",t.showContent2=t.showArrImage[t.nowIndex2]},970)))}},{key:"_ClickCp",value:function(){this.cp_show=!0}},{key:"_ClickCLoseCp",value:function(){this.cp_show=!1}},{key:"_ClickRed",value:function(){this.red_show=!0}},{key:"_ClickCLoseRed",value:function(){this.red_show=!1}},{key:"_OpenQuestion",value:function(t){t>this.nowCp||this.$router.push({path:"/question",query:{level:t}})}}])&&c(i.prototype,a),n&&c(i,n),s}())||a,v=(i(426),i(11)),u=Object(v.a)(r,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"bg bg_style1 main"},[i("div",{ref:"title_style1",class:["title","title_style1"]}),t._v(" "),i("div",{staticClass:"music"}),t._v(" "),i("div",{class:["title_word"]},[i("div",{staticClass:"button button2 rule_show ",on:{click:t._ClickRule}},[i("div",{staticClass:"button_word button_rule_word"})])]),t._v(" "),i("ul",{staticClass:"button_wrap"},[i("li",{staticClass:"button style1",on:{click:t._ClickCp}},[i("div",{staticClass:"button_word button_start_word"})]),t._v(" "),i("li",{staticClass:"button style1",on:{click:t._ClickRed}},[i("div",{staticClass:"button_word button_red_word"})]),t._v(" "),i("li",{staticClass:"button style1",on:{click:t._ClickShow}},[i("div",{staticClass:"button_word button_show_word"})])]),t._v(" "),i("div",{staticClass:"bg_down"}),t._v(" "),i("div",{class:["rule_wrap animateShow",t.rule_showClass?"on":null]},[i("div",{staticClass:"rule_title"}),t._v(" "),i("div",{staticClass:"rule_close",on:{click:t._ClickRuleClose}}),t._v(" "),i("div",{staticClass:"rule_main"},[i("ul",{staticClass:"rule_content"},[i("li",{class:["rule_content_main",t.showContent]}),t._v(" "),i("li",{class:["rule_content_main",t.effectContent,t.Contentanimate]})]),t._v(" "),i("div",{staticClass:"rule_prev rule_button",on:{click:t._pageTurnPrev}}),t._v(" "),i("div",{staticClass:"rule_next rule_button",on:{click:t._pageTurnNext}})])]),t._v(" "),i("div",{class:["rule_wrap animateShow",t.show_showClass?"on":null]},[i("div",{staticClass:"rule_title2"}),t._v(" "),i("div",{staticClass:"rule_close",on:{click:t._ClickShowClose}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"rule_main2"},[i("ul",{staticClass:"rule_content"},[i("li",{class:["rule_content_main",t.showContent2]}),t._v(" "),i("li",{class:["rule_content_main",t.effectContent2,t.Contentanimate2]})]),t._v(" "),i("div",{staticClass:"rule_prev rule_button",on:{click:t._pageTurnPrev2}}),t._v(" "),i("div",{staticClass:"rule_next rule_button",on:{click:t._pageTurnNext2}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.cp_show,expression:"cp_show"}],staticClass:"cp_style"},[t._m(1),t._v(" "),i("div",{staticClass:"cp_close",on:{click:t._ClickCLoseCp}}),t._v(" "),i("ul",{staticClass:"cp_list"},[i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"cp_button",on:{click:function(s){return t._OpenQuestion(4)}}},[i("div",{staticClass:"cp_lock"})])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(3),t._v(" "),i("div",{staticClass:"cp_button",on:{click:function(s){return t._OpenQuestion(3)}}},[i("div",{staticClass:"cp_lock"})])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(4),t._v(" "),i("div",{staticClass:"cp_button",on:{click:function(s){return t._OpenQuestion(2)}}},[i("div",{staticClass:"cp_lock"})])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(5),t._v(" "),i("div",{staticClass:"cp_button",on:{click:function(s){return t._OpenQuestion(1)}}},[i("div",{staticClass:"cp_lock"})])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),t._m(6),t._v(" "),i("div",{staticClass:"cp_button",on:{click:function(s){return t._OpenQuestion(0)}}},[i("div",{staticClass:"cp_lock"})])])]),t._v(" "),i("div",{staticClass:"cp_tips",on:{click:t._ClickRule}},[t._v("查看规则>>")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.red_show,expression:"red_show"}],staticClass:"cp_style"},[t._m(7),t._v(" "),i("div",{staticClass:"cp_close",on:{click:t._ClickCLoseRed}}),t._v(" "),t._m(8),t._v(" "),i("div",{staticClass:"red_tips"},[t._v("*点击礼包领取关卡奖励")]),t._v(" "),i("div",{staticClass:"cp_tips",on:{click:t._ClickRule}},[t._v("查看规则>>")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"show_title"},[s("div",{staticClass:"show_word"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_title"},[s("div",{staticClass:"cp_word"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_5"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_4"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_3"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"}),this._v(" "),s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_start"},[s("div",{staticClass:"star_wrap"},[s("div",{staticClass:"start"})]),this._v(" "),s("div",{staticClass:"cp_name cp_1"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cp_title"},[s("div",{staticClass:"cp_word"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"cp_list"},[i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),i("div",{staticClass:"cp_start"},[i("div",{staticClass:"star_wrap"},[i("div",{staticClass:"start"}),t._v(" "),i("div",{staticClass:"start"}),t._v(" "),i("div",{staticClass:"start"}),t._v(" "),i("div",{staticClass:"start"}),t._v(" "),i("div",{staticClass:"start"})]),t._v(" "),i("div",{staticClass:"cp_name cp_5"})]),t._v(" "),i("div",{staticClass:"red_box red_box5"},[i("div",{staticClass:"have"}),t._v(" "),i("div",{staticClass:"red_num"},[t._v("剩余1000")])])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),i("div",{staticClass:"cp_start"},[i("div",{staticClass:"star_wrap"},[i("div",{staticClass:"start"}),t._v(" "),i("div",{staticClass:"start"}),t._v(" "),i("div",{staticClass:"start"}),t._v(" "),i("div",{staticClass:"start"})]),t._v(" "),i("div",{staticClass:"cp_name cp_4"})]),t._v(" "),i("div",{staticClass:"red_box red_box4"},[i("div",{staticClass:"have"}),t._v(" "),i("div",{staticClass:"red_num"},[t._v("剩余1000")])])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),i("div",{staticClass:"cp_start"},[i("div",{staticClass:"star_wrap"},[i("div",{staticClass:"start"}),t._v(" "),i("div",{staticClass:"start"}),t._v(" "),i("div",{staticClass:"start"})]),t._v(" "),i("div",{staticClass:"cp_name cp_3"})]),t._v(" "),i("div",{staticClass:"red_box red_box3"},[i("div",{staticClass:"have"}),t._v(" "),i("div",{staticClass:"red_num"},[t._v("剩余1000")])])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),i("div",{staticClass:"cp_start"},[i("div",{staticClass:"star_wrap"},[i("div",{staticClass:"start"}),t._v(" "),i("div",{staticClass:"start"})]),t._v(" "),i("div",{staticClass:"cp_name cp_2"})]),t._v(" "),i("div",{staticClass:"red_box red_box2"},[i("div",{staticClass:"have"}),t._v(" "),i("div",{staticClass:"red_num"},[t._v("剩余1000")])])]),t._v(" "),i("li",{staticClass:"cp_sub"},[i("div",{staticClass:"cp_name"}),t._v(" "),i("div",{staticClass:"cp_start"},[i("div",{staticClass:"star_wrap"},[i("div",{staticClass:"start"})]),t._v(" "),i("div",{staticClass:"cp_name cp_1"})]),t._v(" "),i("div",{staticClass:"red_box red_box1"},[i("div",{staticClass:"have"}),t._v(" "),i("div",{staticClass:"red_num"},[t._v("剩余1000")])])])])}],!1,null,null,null);s.default=u.exports}}]);