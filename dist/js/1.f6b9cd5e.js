(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{454:function(i,t,o){"use strict";o.r(t);var s=o(486),e=o(463);for(var n in e)"default"!==n&&function(i){o.d(t,i,function(){return e[i]})}(n);o(490);var r=o(11),u=Object(r.a)(e.default,s.a,s.b,!1,null,null,null);t.default=u.exports},461:function(i,t,o){},462:function(i,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,e=o(449),n=o(450),r=o(495),u=o(494),c=o(493),a=o(492),d=o(491);function p(i){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(i)}function l(i,t,o,s,e,n,r){try{var u=i[n](r),c=u.value}catch(i){return void o(i)}u.done?t(c):Promise.resolve(c).then(s,e)}function b(i,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}function C(i,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(i){if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(i):t}function h(i){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(i)}function S(i,t){return(S=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i})(i,t)}var _=(0,e.Component)(s=function(i){function t(){var i,o;!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,e=new Array(s),n=0;n<s;n++)e[n]=arguments[n];return(o=C(this,(i=h(t)).call.apply(i,[this].concat(e)))).sMusic=null,o.fMusic=null,o.isMusic=!0,o.bgAudio=null,o.isShow=!1,o.isOverShow=!1,o.level=0,o.score=0,o.questionIndex=0,o.questionData=null,o.questionSubData=null,o.answerData=[],o.answerCount=0,o.answerCount2=0,o.sendData={},o.cp=[r.cp_0,u.cp_1,c.cp_2,a.cp_3,d.cp_4],o.timer=null,o.countDown=20,o.noWstate="",o.errorState=-1,o.userData=123,o.max=null,o}return function(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),t&&S(i,t)}(t,e.Vue),function(i,t,o){t&&b(i.prototype,t),o&&b(i,o)}(t,[{key:"_clickShowMusic",value:function(){this.isMusic=!this.isMusic,this._MusicInit()}},{key:"_MusicInit",value:function(){console.log(this.isMusic),this.isMusic?this.bgAudio.play():this.bgAudio.pause()}},{key:"_music",value:function(){this.sMusic=document.getElementById("music2"),this.fMusic=document.getElementById("music3"),this.bgAudio=document.getElementById("music4"),document.addEventListener("WeixinJSBridgeReady",function(){this.sMusic.play(),this.sMusic.pause(),this.fMusic.play(),this.fMusic.pause(),this.bgAudio.play(),this.bgAudio.pause()})}},{key:"mounted",value:function(){this._music(),this._MusicInit()}},{key:"created",value:function(){this._initA()}},{key:"_againClick",value:function(){console.log(this.max,"a"),this.max>=5||(this.level=this.max,this._initA2())}},{key:"_countClick",value:function(){console.log(this.max,"b"),this.max>=5||(this.level=this.max,this._initA2())}},{key:"_HomeClick",value:function(){this.$router.push({path:"/main",query:{data:this.userData}})}},{key:"_initA",value:function(){this.isShow=!1,this.isOverShow=!1,this.level=0,this.score=0,this.questionIndex=0,this.questionData=null,this.questionSubData=null,this.answerData=[],this.answerCount=0,this.answerCount2=0,this.sendData={},this.level=this.$route.query.level,this._getQustion(this.level,10),this._startOneQuestion(),this.isMusic=this.$route.query.music,console.log(this.$route.query),console.log(this.isMusic,"this.isMusic"),this._MusicInit()}},{key:"_initA2",value:function(){this.isShow=!1,this.isOverShow=!1,this.score=0,this.questionIndex=0,this.questionData=null,this.questionSubData=null,this.answerData=[],this.answerCount=0,this.answerCount2=0,this.sendData={},this._getQustion(this.level,10),this._startOneQuestion(),this.isMusic=this.$route.query.music}},{key:"_countDownFn",value:function(){var i=this;this.timer&&clearInterval(this.timer),this.countDown=20,this.timer=setInterval(function(){i.countDown--,console.log(i.countDown),i.countDown<=0&&(clearInterval(i.timer),i._questionOver())},1e3)}},{key:"_questionOver",value:function(){console.log("时间到"),this.errorState=1,this._errorTips()}},{key:"_getQustion",value:function(i,t){this.score=0,this.questionIndex=0,this.questionData=void 0,this.questionSubData=void 0,this.answerData=[],this.answerCount=0,this.sendData={};var o=this.cp[this.level].data,s=[];for(console.log(this.cp,this.level,"data");s.length<t;){for(var e=this._rnd(0,o.length-1),n=!1,r=0;r<s.length;r++)if(s[r].id==e){n=!0;break}n||s.push(o[e])}this.sendData={},this.sendData.checkpointID=i,this.sendData.answer=[],this.answerData=s}},{key:"_startOneQuestion",value:function(){this.answerCount=0,this.answerCount2=0,this.clickState=[];var i=this.answerData[this.questionIndex];this.sendData.answer[this.questionIndex]={},this.sendData.answer[this.questionIndex].questionID=i.id,this.sendData.answer[this.questionIndex].selectID=[];for(var t=[];t.length<i.option.length;){for(var o=this._rnd(0,i.option.length-1),s=!1,e=0;e<t.length;e++)t[e].id==i.option[o].id&&(s=!0);s||t.push(i.option[o])}this.questionSubData=t,console.log(this.questionSubData);for(var n=0;n<t.length;n++)t[n].on=!1,t[n].isCorrect&&(this.answerCount2++,this.answerCount++);2==t.length?this.noWstate="(判断题)":3!=t.length&&4!=t.length||(this.answerCount>1?this.noWstate="(多选题)":this.noWstate="(单选题)"),this._countDownFn()}},{key:"_subClick",value:function(i){if(console.log(i),!this.questionSubData[i].on){this.questionSubData[i].on=!0;var t=this.questionSubData;this.questionSubData=null,this.questionSubData=t;for(var o=0,s=this.sendData.answer[this.questionIndex].selectID,e=0;e<s.length;e++){if(s[e]>this.questionSubData[i].id){o=e;break}o=e+1}s.splice(o,0,this.questionSubData[i].id);this.questionSubData[i].isCorrect;0==this.questionSubData[i].isCorrect?(this.errorState=0,this._errorTips()):1==this.questionSubData[i].isCorrect&&(this.answerCount--,0==this.answerCount&&(this.score+=10,this.isShow=!0,clearInterval(this.timer)))}}},{key:"_nextQuestion",value:function(){var i=function(i){return function(){var t=this,o=arguments;return new Promise(function(s,e){var n=i.apply(t,o);function r(i){l(n,s,e,r,u,"next",i)}function u(i){l(n,s,e,r,u,"throw",i)}r(void 0)})}}(regeneratorRuntime.mark(function i(){var t;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(this.isShow=!1,this.errorState=-1,this.questionIndex++,!(this.questionIndex>=10)){i.next=17;break}return this.score>=90?this.isMusic&&this.sMusic.play():(console.log(this.isMusic,this.fMusic),this.isMusic&&this.fMusic.play()),this.questionIndex=9,this.isOverShow=!0,i.next=9,(0,n.getScoreApi)({answerData:JSON.stringify(this.sendData)});case 9:return t=i.sent,console.log(this.userData,"this.userData"),this.userData=t,console.log(t,"scoreResult"),console.log(this.userData,"this.userData"),this.max=this.userData.max,0==t.code||3==t.code&&(location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa9da81f585c9d3b0&redirect_uri=http%3A%2F%2Fwx.wuliqinggu.com%2Factivityn%2Findex&response_type=code&scope=snsapi_base&state=1#wechat_redirect"),i.abrupt("return");case 17:if(!(this.questionIndex>=10)){i.next=19;break}return i.abrupt("return");case 19:this._startOneQuestion();case 20:case"end":return i.stop()}},i,this)}));return function(){return i.apply(this,arguments)}}()},{key:"_successTips",value:function(){}},{key:"_errorTips",value:function(){clearInterval(this.timer),this.isShow=!0}},{key:"_rnd",value:function(i,t){return Math.floor(Math.random()*(t-i+1))+i}}]),t}())||s;t.default=_},463:function(i,t,o){"use strict";o.r(t);var s=o(462),e=o.n(s);for(var n in s)"default"!==n&&function(i){o.d(t,i,function(){return s[i]})}(n);t.default=e.a},486:function(i,t,o){"use strict";var s=function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("div",{staticClass:"game_bg"},[i._m(0),i._v(" "),o("div",{staticClass:"game_top"},[o("div",{staticClass:"game_top_ele"},[o("div",{staticClass:"game_level"},[o("div",{staticClass:"game_level_img"}),i._v(" "),o("div",{staticClass:"game_level_star"},i._l(i.level+1,function(i){return o("div",{staticClass:"game_star"})}),0)]),i._v(" "),o("div",{staticClass:"game_score"},[o("div",{staticClass:"game_score_img"}),i._v(" "),o("div",{staticClass:"game_score_num"},[i._v(i._s(i.score))])])]),i._v(" "),o("div",{class:["music",i.isMusic||"on"],on:{click:i._clickShowMusic}})]),i._v(" "),o("dl",{staticClass:"game_main"},[o("dt",{staticClass:"question"},[i._v(i._s(i.questionIndex+1+"、")+" "),o("span",{staticClass:"orig"},[i._v(i._s(i.noWstate))]),i._v(" "+i._s(i.answerData&&i.answerData[i.questionIndex]?i.answerData[i.questionIndex].question:i.answerData[i.questionIndex-1].question))]),i._v(" "),i._l(i.questionSubData,function(t,s){return o("dl",{key:s,class:["answer"],on:{click:function(t){return i._subClick(s)}}},[o("div",{staticClass:"select"},[o("div",{class:["gou",i.questionSubData[s].on?"on":null]})]),o("div",{staticClass:"answer_content"},[i._v(i._s(String.fromCharCode(65+s)+"."+t.optionSub))])])})],2),i._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:i.isShow,expression:"isShow"}],staticClass:"tips_popup"},[o("div",{staticClass:"tips_wrap"},[-1==i.errorState?o("div",{staticClass:"tips_success"},[i._m(1),i._v(" "),o("div",{staticClass:"button button_s",on:{click:i._nextQuestion}},[o("div",{staticClass:"button_word button_next_word"})])]):o("div",{staticClass:"tips_error"},[o("dl",{staticClass:"tips_anwser"},[o("div",{staticClass:"tips_wrap2"},[o("div",{staticClass:"tips_s1"}),i._v(" "),o("div",{staticClass:"tips_s2"}),i._v(" "),o("div",{class:[0==i.errorState?"tips_e_word":"tips_e2_word"]})]),i._v(" "),o("dt",{staticClass:"tips_error_top"},[i._v("正确答案")]),i._v(" "),i._l(i.questionSubData,function(t,s){return 1==t.isCorrect?o("dl",{staticClass:"tips_error_sub"},[i._v(i._s(String.fromCharCode(65+s)+"."+t.optionSub))]):i._e()})],2),i._v(" "),o("div",{staticClass:"button button_s",on:{click:i._nextQuestion}},[o("div",{staticClass:"button_word button_next_word"})])])])]),i._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:i.isOverShow,expression:"isOverShow"}],staticClass:"tips_popup"},[o("div",{staticClass:"tips_wrap"},[i.score>=80?o("div",{staticClass:"tips_success"},[i._m(2),i._v(" "),o("div",{staticClass:"button button_s2",on:{click:i._countClick}},[o("div",{staticClass:"button_word button_count_word"})]),i._v(" "),o("div",{staticClass:"button button_s",on:{click:i._HomeClick}},[o("div",{staticClass:"button_word button_pass_word"})])]):o("div",{staticClass:"tips_error2"},[i._m(3),i._v(" "),o("div",{staticClass:"button button_s2",on:{click:i._againClick}},[o("div",{staticClass:"button_word button_again_word"})]),i._v(" "),o("div",{staticClass:"button button_s",on:{click:i._HomeClick}},[o("div",{staticClass:"button_word button_back_word"})])])])]),i._v(" "),o("div",{staticClass:"game_bottom"},[o("div",{staticClass:"game_countDown"},[i._v(i._s("0:"+i.countDown))])])])},e=[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"videobox"},[t("video",{staticStyle:{display:"none"},attrs:{name:"media",id:"music2","webkit-playsinline":"webkit-playsinline"}},[t("source",{attrs:{src:o(497),type:"audio/mp3"}})]),this._v(" "),t("video",{staticStyle:{display:"none"},attrs:{name:"media",id:"music3","webkit-playsinline":"webkit-playsinline"}},[t("source",{attrs:{src:o(496),type:"audio/mp3"}})]),this._v(" "),t("video",{staticStyle:{display:"none"},attrs:{autoplay:"",name:"media",id:"music4","webkit-playsinline":"webkit-playsinline",loop:"loop"}},[t("source",{attrs:{src:o(453),type:"audio/mp3"}})])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"tips_wrap2"},[t("div",{staticClass:"tips_s1"}),this._v(" "),t("div",{staticClass:"tips_s2"}),this._v(" "),t("div",{staticClass:"tips_s_word"})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"tips_wrap2"},[t("div",{staticClass:"tips_s1"}),this._v(" "),t("div",{staticClass:"tips_s2"}),this._v(" "),t("div",{staticClass:"tips_overS_word"})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"tips_wrap2"},[t("div",{staticClass:"tips_s1"}),this._v(" "),t("div",{staticClass:"tips_s2"}),this._v(" "),t("div",{staticClass:"tips_overF_word"})])}];o.d(t,"a",function(){return s}),o.d(t,"b",function(){return e})},490:function(i,t,o){"use strict";var s=o(461);o.n(s).a},491:function(i,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cp_4=void 0;t.cp_4={name:"静安扫黑一图组4",data:[{id:0,question:"“软暴力”的具体表现是什么？ ( )",option:[{id:0,optionSub:"暴力、威胁色彩不明显",isCorrect:1},{id:1,optionSub:"实施者有暴力威胁的可能性",isCorrect:1},{id:2,optionSub:"会使人产生恐惧、恐慌，影响他人正常生产、工作、生活",isCorrect:1},{id:3,optionSub:"通过“谈判”及滋扰、纠缠、哄闹、聚众造势等手段实施",isCorrect:1}]},{id:1,question:"在建筑工地、居民小区盘踞的“砂霸”“水泥霸”类的黑恶势力表现情形有哪些?（ ）",option:[{id:0,optionSub:"涉嫌多次强行供应砂石、建材",isCorrect:1},{id:1,optionSub:"涉嫌多次强装强卸",isCorrect:1},{id:2,optionSub:"涉嫌多次随意殴打、威胁商户及业主",isCorrect:1},{id:3,optionSub:"上门推销、发放宣传单",isCorrect:0}]},{id:2,question:"下列哪些是在征地、租地、拆迁、工程建设等过程中重点打击黑恶势力的情形?（ ）",option:[{id:0,optionSub:"多次在征地过程中煽动闹事",isCorrect:1},{id:1,optionSub:"有组织的在租地过程中煽动闹事",isCorrect:1},{id:2,optionSub:"有组织的在拆迁过程中煽动闹事",isCorrect:1},{id:3,optionSub:"有组织的在拆迁过程中煽动闹事",isCorrect:1}]},{id:3,question:"下列哪些是被确定的重点打击黑恶势力的情形?（ ）",option:[{id:0,optionSub:"威胁政治安全特别是制度安全、政权安全以及向政治领域渗透的黑恶势力",isCorrect:1},{id:1,optionSub:"非法高利放贷、暴力讨债的黑恶势力",isCorrect:1},{id:2,optionSub:"把持基层政权、操纵破坏基层换届选举、垄断农村资源、侵吞集体资产的黑恶势力",isCorrect:1},{id:3,optionSub:"插手民间纠纷，充当“地下执法队”的黑恶势力",isCorrect:1}]},{id:4,question:"盘踞在商贸集市、农副产品批发、小商品零售、建筑材料等各类市场破坏正常经营秩序的“市霸”、“行霸”类黑恶势力表现情形有哪些？（ ）",option:[{id:0,optionSub:"欺行霸市",isCorrect:1},{id:1,optionSub:"强买强卖 ",isCorrect:1},{id:2,optionSub:"敲诈勒索",isCorrect:1},{id:3,optionSub:"暴力收取保护费、看场费、进场费",isCorrect:1}]},{id:5,question:"随着打击力度的加大，黑恶势力活动逐渐趋于隐藏，主要表现为：（）",option:[{id:0,optionSub:"渗透的重点领域发生变化",isCorrect:1},{id:1,optionSub:"组织头目“幕后化”",isCorrect:0},{id:2,optionSub:"披着合法外衣隐蔽性更强",isCorrect:1},{id:3,optionSub:"“软暴力”、非暴力手段胁迫",isCorrect:1}]},{id:6,question:"黑社会性质组织的“组织特征”主要指什么？（ ）",option:[{id:0,optionSub:"较稳定的犯罪组织",isCorrect:1},{id:1,optionSub:"人数较多，有明确的组织者、领导者",isCorrect:1},{id:2,optionSub:"骨干成员基本固定",isCorrect:1},{id:3,optionSub:"比较明确的层级和职责分工",isCorrect:1}]},{id:7,question:"扫黑除恶”与“打黑除恶”相比，对广度、深度、力度提出新的更高要求，虽一字之差，反映的是党中央国务院保障人民安全乐业、保障社会安定有序、保障国家长治久安的坚定决心。( )",option:[{id:0,optionSub:"错误",isCorrect:0},{id:1,optionSub:"正确",isCorrect:1}]},{id:8,question:'在客运、货运、仓储物流场所的"路霸""货霸"等黑恶势力表现情形有哪些?（ ）',option:[{id:0,optionSub:"有组织的在客运控制运营路线强拉客源",isCorrect:1},{id:1,optionSub:"有组织的在货运、仓储物流控制运营路线抢占货源",isCorrect:1},{id:2,optionSub:"非法经营",isCorrect:1},{id:3,optionSub:"多次暴力打压竞争对手 ",isCorrect:1}]},{id:9,question:"扫黑除恶专项斗争中，要对举报人个人信息严格保密，依法保护举报人合法权益。对泄露举报人信息或打击报复举报人的，一经查实，将依法依纪从重处罚，构成犯罪的依法移交司法机关依法惩处。（ ）",option:[{id:0,optionSub:"错误",isCorrect:0},{id:1,optionSub:"正确",isCorrect:1}]}]}},492:function(i,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cp_3=void 0;t.cp_3={name:"静安扫黑一图组3",data:[{id:0,question:"《中华人民共和国刑法》第二百九十四条的规定：组织、领导和积极参加以暴力、威胁或者其他手段,有组织地进行违法犯罪活动,称霸一方,为非作恶,欺压、残害群众,严重破坏经济、社会生活秩序的黑社会性质的组织的,处（）有期徒刑;其他参加的,处三年以下有期徒刑、拘役、管制或者剥夺政治权利。（ ）",option:[{id:0,optionSub:"一年以上三年以下",isCorrect:0},{id:1,optionSub:"三年以上十年以下",isCorrect:1},{id:2,optionSub:"三年以上五年以下",isCorrect:0},{id:3,optionSub:"五年以上十年以下",isCorrect:0}]},{id:1,question:"“软暴力”违法犯罪手段通常的表现形式有（ ）：（1）侵犯人身权利、民主权利、财产权利的手段；（2）侵犯人身财产安全、殴打他人、抢劫抢夺等手段；（3）扰乱正常生活、工作、生产、经营秩序的手段；（4）扰乱社会秩序的手段。",option:[{id:0,optionSub:"（1）（2）",isCorrect:0},{id:1,optionSub:"（1）（2）（3）",isCorrect:0},{id:2,optionSub:"（3）（4）",isCorrect:0},{id:3,optionSub:"（1）（3）（4）",isCorrect:1}]},{id:2,question:"在城中村、城乡结合部、流动人口聚集地，破坏治安秩序的黑恶势力表现形式有哪些？（）",option:[{id:0,optionSub:"拉帮结派",isCorrect:1},{id:1,optionSub:"寻衅滋事",isCorrect:1},{id:2,optionSub:"打架斗殴",isCorrect:1},{id:3,optionSub:"强拿硬要",isCorrect:1},{id:4,optionSub:"称王称霸",isCorrect:1}]},{id:3,question:"扫黑除恶专项斗争，是我国在全面建成小康社会的决胜阶段、中国特色社会主义进入新时代的关键时期部署开展的，对于保障（）、（）、（）进一步巩固党的执政基础具有重大意义。",option:[{id:0,optionSub:"人民安居乐业、社会安定有序、国家长治久安",isCorrect:1},{id:1,optionSub:"人民安居乐业、社会安全有序、国家长治久安",isCorrect:0},{id:2,optionSub:"人民安稳乐业、社会安全有序、国家长治久安",isCorrect:0},{id:3,optionSub:"无正确答案",isCorrect:0}]},{id:4,question:"2017年1月23日,中央政法委召开全国扫黑除恶专项斗争电视电话会议,全国扫黑除恶专项斗争开始。（ ）",option:[{id:0,optionSub:"错误",isCorrect:1},{id:1,optionSub:"正确",isCorrect:0}]},{id:5,question:"黑恶势力犯罪人员的亲友应当积极规劝其尽快投案自首，经亲友规劝、陪同投案的，或者亲友主动报案后将犯罪人员送去投案的，视为自动投案。( )",option:[{id:0,optionSub:"错误",isCorrect:0},{id:1,optionSub:"正确",isCorrect:1}]},{id:6,question:"扫黑除恶专项斗争的基本原则是：坚持党的领导、发挥政治优势;坚持人民主体地位、紧紧依靠群众;坚持综合治理、齐抓共管;坚持依法严惩、打早打小;坚持标本兼治、源头治理。( )",option:[{id:0,optionSub:"错误",isCorrect:0},{id:1,optionSub:"正确",isCorrect:1}]},{id:7,question:"举报人必须实事求是，不得虚构、夸大、捏造事实，严禁借举报名义对他人诬告、陷害，否则将依法追究相关法律责任。( )",option:[{id:0,optionSub:"错误",isCorrect:0},{id:1,optionSub:"正确",isCorrect:1}]},{id:8,question:"开展扫黑除恶专项斗争，要聚焦涉黑涉恶问题突出的重点地区、重点行业和重点领域。( )",option:[{id:0,optionSub:"错误",isCorrect:0},{id:1,optionSub:"正确",isCorrect:1}]},{id:9,question:"“恶势力”的特征及具体表现是什么?( )",option:[{id:0,optionSub:"一般为3人以上（相对固定），经常纠集在一起；",isCorrect:1},{id:1,optionSub:"使用暴力、威胁或者其他手段",isCorrect:1},{id:2,optionSub:"共同故意实施3次以上恶势力惯常实施的犯罪活动",isCorrect:1},{id:3,optionSub:"形成黑社会性质组织",isCorrect:0}]}]}},493:function(i,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cp_2=void 0;t.cp_2={name:"静安扫黑一图组2",data:[{id:0,question:"扫黑除恶专项斗争坚持“一案三查”，既要（ ）黑恶势力犯罪，又要（ ）黑恶势力背后的保护伞，还要（ ）党委政府的主体责任和部门的监督管理责任。",option:[{id:0,optionSub:"查办、追究、倒查",isCorrect:0},{id:1,optionSub:"查究、追究、倒查",isCorrect:0},{id:2,optionSub:"查办、追查、倒查",isCorrect:1},{id:3,optionSub:"查究、追查、倒查",isCorrect:0}]},{id:1,question:"习近平总书记亲自决策部署扫黑除恶专项斗争，先后（ ）次作出重要批示，并亲自批准了《全国扫黑除恶专项斗争督导工作方案》。",option:[{id:0,optionSub:"6",isCorrect:0},{id:1,optionSub:"7",isCorrect:1},{id:2,optionSub:"8",isCorrect:0},{id:3,optionSub:"9",isCorrect:0}]},{id:2,question:"在全国开展扫黑除恶专项斗争，是以习近平同志为核心的党中央作出的重大决策部署，自（ ）开始，至（ ）年底结束。",option:[{id:0,optionSub:"2017，2019",isCorrect:0},{id:1,optionSub:"2018，2020",isCorrect:1},{id:2,optionSub:"2019，2021",isCorrect:0},{id:3,optionSub:"2018，2021",isCorrect:0}]},{id:3,question:"恶势力是指以（ ）等手段，在一定区域内或行业内多次实施违法犯罪活动，严重扰乱经济、社会生活秩序，造成恶劣影响的犯罪组织。",option:[{id:0,optionSub:"暴力、威胁、滋扰",isCorrect:1},{id:1,optionSub:"暴力、威胁、骚扰",isCorrect:0},{id:2,optionSub:"胁迫、滋扰、威胁",isCorrect:0},{id:3,optionSub:"暴力、胁迫、骚扰",isCorrect:0}]},{id:4,question:"开展扫黑除恶专项斗争，各级（ ）要切实担负起第一责任人的责任。",option:[{id:0,optionSub:"党委政府主要负责同志",isCorrect:1},{id:1,optionSub:"党委政法委主要负责同志",isCorrect:0},{id:2,optionSub:"公安机关主要负责同志",isCorrect:0},{id:3,optionSub:"各部门主要负责同志",isCorrect:0}]},{id:5,question:"扫黑除恶工作中出现的新动向是向（ ）渗透，企图操控、把持基层政权；向新行业、新领域扩张，追求非法利益最大化。向隐蔽化转型，逃避打击能力增强。",option:[{id:0,optionSub:"旅游领域",isCorrect:0},{id:1,optionSub:"经济领域",isCorrect:0},{id:2,optionSub:"政治领域",isCorrect:1},{id:3,optionSub:"社会领域",isCorrect:0}]},{id:6,question:"以下选项不属于扫黑除恶专项斗争的重大意义的是（ ）。",option:[{id:0,optionSub:"事关社会大局稳定和国家长治久安",isCorrect:0},{id:1,optionSub:"事关人心向背和基层政权巩固",isCorrect:0},{id:2,optionSub:"事关进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想",isCorrect:0},{id:3,optionSub:"事关经济发展和人民生活水平提高",isCorrect:1}]},{id:7,question:"扫黑除恶的工作措施有摸线索、打犯罪、挖“保护伞”、治源头、强组织。( )",option:[{id:0,optionSub:"错误",isCorrect:0},{id:1,optionSub:"正确",isCorrect:1}]},{id:8,question:"联合发布《关于依法严厉打击黑恶势力违法犯罪的通告》四部门是哪四个？",option:[{id:0,optionSub:"最高法、最高检、公安部、安全部",isCorrect:0},{id:1,optionSub:"最高法、最高检、公安部、司法部",isCorrect:1},{id:2,optionSub:"最高检、公安部、安全部、司法部",isCorrect:0},{id:3,optionSub:"最高检、公安部、中宣部、司法部 ",isCorrect:0}]},{id:9,question:"扫黑除恶专项斗争中，着力解决的5类违法犯罪活动包括“淫秽、吸毒、传销、拐卖”和（ ）",option:[{id:0,optionSub:"强买强卖",isCorrect:0},{id:1,optionSub:"赌博",isCorrect:1},{id:2,optionSub:"盗窃",isCorrect:0},{id:3,optionSub:"故意伤害",isCorrect:0}]}]}},494:function(i,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cp_1=void 0;t.cp_1={name:"静安扫黑一图组1",data:[{id:0,question:"中共中央、国务院《关于开展扫黑除恶专项斗争的通知》指出，扫黑除恶与反腐败斗争和基层（）结合起来，深挖黑恶势力“保护伞”。（ ）",option:[{id:0,optionSub:"“打伞”",isCorrect:0},{id:1,optionSub:"“拍蝇”",isCorrect:1},{id:2,optionSub:"“打虎”",isCorrect:0},{id:3,optionSub:"“打地头蛇”",isCorrect:0}]},{id:1,question:"黑社会性质组织的行为特征，是指以暴力、威胁或者其它手段，有（ ）地多次进行违法犯罪活动，为非作恶、残害欺压群众。",option:[{id:0,optionSub:"计划",isCorrect:0},{id:1,optionSub:"预谋",isCorrect:0},{id:2,optionSub:"组织",isCorrect:1},{id:3,optionSub:"规律",isCorrect:0}]},{id:2,question:"中共中央、国务院就扫黑除恶专项斗争进行专题部署，充分表明开展扫黑除恶专项斗争的极端（）和（），彰显了党中央扫除黑恶势力的坚强（）和（）。",option:[{id:0,optionSub:"紧迫性 重要性  决心 初心",isCorrect:0},{id:1,optionSub:"紧迫性 重要性 决心 信心",isCorrect:1},{id:2,optionSub:"艰巨性 重要性 决心 信心",isCorrect:0},{id:3,optionSub:"紧迫性 艰巨性 决心 信心",isCorrect:0}]},{id:3,question:"扫黑除恶专项斗争三年工作的重点分别是：2018年：严态势，（ ）；2019年：攻案件，提升群众满意度；2020年：建机制，取得压倒性胜利。",option:[{id:0,optionSub:"营造人人喊打的氛围",isCorrect:1},{id:1,optionSub:"营造人人参与的氛围",isCorrect:0},{id:2,optionSub:"营造人人监督的氛围",isCorrect:0},{id:3,optionSub:"营造人人举报的氛围",isCorrect:0}]},{id:4,question:"扫黑除恶专项斗争聚焦打击的重点内容是聚焦涉黑涉恶问题突出的重点地区、重点行业、重点领域，把打击锋芒始终对准（ ）、最深恶痛绝的各类黑恶势力违法犯罪。",option:[{id:0,optionSub:"群众最关心的",isCorrect:0},{id:1,optionSub:"群众最热心的",isCorrect:0},{id:2,optionSub:"群众最反感的",isCorrect:0},{id:3,optionSub:"群众反映最强烈",isCorrect:1}]},{id:5,question:"扫黑除恶的基本要求：有黑扫黑、（ ）、有乱治乱。",option:[{id:0,optionSub:"无黑除恶",isCorrect:0},{id:1,optionSub:"无黑扫恶",isCorrect:0},{id:2,optionSub:"有恶除恶",isCorrect:1},{id:3,optionSub:"无恶扫黑",isCorrect:0}]},{id:6,question:"中共中央、国务院《关于开展扫黑除恶专项斗争的通知》指出：要大力加强（ ）建设，为铲除黑恶势力滋生土壤提供坚强组织保障。",option:[{id:0,optionSub:"纪律作风",isCorrect:0},{id:1,optionSub:"党委政府",isCorrect:0},{id:2,optionSub:"基层组织",isCorrect:1},{id:3,optionSub:"专业队伍",isCorrect:0}]},{id:7,question:"扫黑除恶专项斗争“两个一律”：对涉黑涉恶犯罪案件，一律深挖其背后腐败问题。对黑恶势力“关系网”“保护伞”，一律（ ）、绝不姑息。",option:[{id:0,optionSub:"追溯根源",isCorrect:0},{id:1,optionSub:"一查到底",isCorrect:1},{id:2,optionSub:"追查到底",isCorrect:0},{id:3,optionSub:"依法查办",isCorrect:0}]},{id:8,question:"寄生在医疗机构、车站码头、旅游景点等场所的黑恶势力表现情形有哪些？（  ）",option:[{id:0,optionSub:"强买强卖、敲诈勒索",isCorrect:1},{id:1,optionSub:"热心帮助，回答问题",isCorrect:0},{id:2,optionSub:"票价虚高",isCorrect:0},{id:3,optionSub:"收费项目名目多",isCorrect:0}]},{id:9,question:"扫黑除恶专项斗争涉黑涉恶线索举报包括：电话、微信公众号、电子邮箱、来访、信件邮寄等举报方式。（）",option:[{id:0,optionSub:"错误",isCorrect:0},{id:1,optionSub:"正确",isCorrect:1}]}]}},495:function(i,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cp_0=void 0;t.cp_0={name:"静安扫黑一图组0",data:[{id:0,question:"在全国开展扫黑除恶专项斗争，是（）年开展的？（ ）",option:[{id:0,optionSub:"2016",isCorrect:0},{id:1,optionSub:"2017",isCorrect:0},{id:2,optionSub:"2018",isCorrect:1},{id:3,optionSub:"2019",isCorrect:0}]},{id:1,question:"2018年（ ），全国扫黑除恶专项斗争电视电话会议在北京召开。",option:[{id:0,optionSub:"2月23日",isCorrect:0},{id:1,optionSub:"1月23日",isCorrect:1},{id:2,optionSub:"3月5日",isCorrect:0},{id:3,optionSub:"4月13日",isCorrect:0}]},{id:2,question:"要切实把扫黑除恶专项斗争和系统治理、综合治理、依法治理、（ ）治理结合起来。",option:[{id:0,optionSub:"整体",isCorrect:0},{id:1,optionSub:"源头",isCorrect:1},{id:2,optionSub:"全面",isCorrect:0},{id:3,optionSub:"彻底",isCorrect:0}]},{id:3,question:"全国扫黑除恶专项斗争第三个阶段，建立健全遏制黑恶势力滋生蔓延的长效机制，取得扫黑除恶专项斗争 （ ）胜利。",option:[{id:0,optionSub:"全面性",isCorrect:0},{id:1,optionSub:"压倒性",isCorrect:1},{id:2,optionSub:"针对性",isCorrect:0},{id:3,optionSub:"持久性",isCorrect:0}]},{id:4,question:"对于各种黑恶势力违法犯罪，依法严惩、（ ） 、除恶务尽。",option:[{id:0,optionSub:"打早打小",isCorrect:1},{id:1,optionSub:"养大再打",isCorrect:0},{id:2,optionSub:"打晚打大",isCorrect:0},{id:3,optionSub:"即发即打",isCorrect:0}]},{id:5,question:"对于举报、提供线索者，纪检、公安机关将（）。",option:[{id:0,optionSub:"对其身份予以保密",isCorrect:1},{id:1,optionSub:"有权公开其身份",isCorrect:0},{id:2,optionSub:"随意告诉他人",isCorrect:0},{id:3,optionSub:"随意谈论举报线索",isCorrect:0}]},{id:6,question:"发现身边的涉黑涉恶违法犯罪，应怎么办？( )",option:[{id:0,optionSub:"及时举报",isCorrect:1},{id:1,optionSub:"假装看不见",isCorrect:0},{id:2,optionSub:"打抱不平",isCorrect:0},{id:3,optionSub:"收集证据",isCorrect:0}]},{id:7,question:"对于黑恶势力的“保护伞”，一定要（ ）。",option:[{id:0,optionSub:"放任不管",isCorrect:0},{id:1,optionSub:"依法查办",isCorrect:1},{id:2,optionSub:"及时教育",isCorrect:0},{id:3,optionSub:"以上都不是",isCorrect:0}]},{id:8,question:"以下哪类情形不属于扫黑除恶专项斗争打击重点情形：（  ）",option:[{id:0,optionSub:"村霸",isCorrect:0},{id:1,optionSub:"保护伞",isCorrect:0},{id:2,optionSub:"套路贷",isCorrect:0},{id:3,optionSub:"邪教",isCorrect:1}]},{id:9,question:"“扫黑除恶”中的“黑”是指黑社会性质的组织;“恶”是指恶势力、恶势力犯罪集团。（）",option:[{id:0,optionSub:"错误",isCorrect:0},{id:1,optionSub:"正确",isCorrect:1}]}]}},496:function(i,t,o){i.exports=o.p+"images/6cf1877bc24c7efa7c4ad78592286b2e.mp3"},497:function(i,t,o){i.exports=o.p+"images/9c96878aafe3dc85db83bd822bf933d2.mp3"}}]);