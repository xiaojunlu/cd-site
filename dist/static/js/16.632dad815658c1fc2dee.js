webpackJsonp([16],{407:function(t,e,n){function o(t){n(541)}var i=n(149)(n(461),n(571),o,"data-v-4ea56312",null);t.exports=i.exports},426:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(428),i=n.n(o);e.default={props:["code"],data:function(){return{isShowCode:!1}},methods:{toggleCode:function(){this.isShowCode=!this.isShowCode}},created:function(){cd.tooltip({el:'[data-toggle="code-tooltip"]'})},mounted:function(){new i.a(".js-copy-code").on("success",function(t){cd.message({type:"success",message:"复制成功"})})}}},427:function(t,e,n){var o,i,a;!function(s,r){i=[t,n(435)],o=r,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=s})},428:function(t,e,n){var o,i,a;!function(s,r){i=[t,n(427),n(436),n(434)],o=r,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),d=i(n),u=i(o),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),h=function(t){function e(t,n){a(this,e);var o=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return r(e,t),p(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===f(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return c("action",t)}},{key:"defaultTarget",value:function(t){var e=c("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return c("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(d.default);t.exports=h})},429:function(t,e,n){e=t.exports=n(391)(!0),e.push([t.i,'.site-clearfix[data-v-bd097140]:after,.site-clearfix[data-v-bd097140]:before{content:" ";display:table}.site-clearfix[data-v-bd097140]:after{clear:both}.cd-panel[data-v-bd097140],.cd-panel[data-v-bd097140]:hover{-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.cd-panel[data-v-bd097140]:hover{-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.02),0 0 8px 0 rgba(0,0,0,.04),0 8px 8px 0 rgba(0,0,0,.06);-moz-box-shadow:0 0 8px 0 rgba(0,0,0,.02),0 0 8px 0 rgba(0,0,0,.04),0 8px 8px 0 rgba(0,0,0,.06);box-shadow:0 0 8px 0 rgba(0,0,0,.02),0 0 8px 0 rgba(0,0,0,.04),0 8px 8px 0 rgba(0,0,0,.06)}.cd-panel .cd-panel-action i.active[data-v-bd097140],.cd-panel .cd-panel-action i[data-v-bd097140],.cd-panel .cd-panel-action i[data-v-bd097140]:hover{-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.cd-panel .cd-panel-action i.active[data-v-bd097140],.cd-panel .cd-panel-action i[data-v-bd097140]:hover{cursor:pointer;opacity:.56}',"",{version:3,sources:["/Users/ketu/Sites/cd-site/src/components/Panel.vue"],names:[],mappings:"AACA,6EAEE,YAAa,AACb,aAAe,CAChB,AACD,sCACE,UAAY,CACb,AAOD,4DALE,gCAAkC,AAClC,6BAA+B,AAC/B,2BAA6B,AAC7B,uBAA0B,CAU3B,AARD,iCAKE,mGAAkH,AAClH,gGAA+G,AAC/G,0FAA0G,CAC3G,AAOD,uJALE,gCAAkC,AAClC,6BAA+B,AAC/B,2BAA6B,AAC7B,uBAA0B,CAU3B,AARD,yGAME,eAAgB,AAChB,WAAc,CACf",file:"Panel.vue",sourcesContent:['\n.site-clearfix[data-v-bd097140]:after,\n.site-clearfix[data-v-bd097140]:before {\n  content: " ";\n  display: table;\n}\n.site-clearfix[data-v-bd097140]:after {\n  clear: both;\n}\n.cd-panel[data-v-bd097140] {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.cd-panel[data-v-bd097140]:hover {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.04), 0 8px 8px 0 rgba(0, 0, 0, 0.06);\n  -moz-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.04), 0 8px 8px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.04), 0 8px 8px 0 rgba(0, 0, 0, 0.06);\n}\n.cd-panel .cd-panel-action i[data-v-bd097140] {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.cd-panel .cd-panel-action i[data-v-bd097140]:hover,\n.cd-panel .cd-panel-action i.active[data-v-bd097140] {\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  opacity: 0.56;\n}\n'],sourceRoot:""}])},430:function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}t.exports=n},431:function(t,e,n){function o(t,e,n,o,a){var s=i.apply(this,arguments);return t.addEventListener(n,s,a),{destroy:function(){t.removeEventListener(n,s,a)}}}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(430);t.exports=o},432:function(t,e,n){var o=n(429);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(392)("18dd775a",o,!0)},433:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},434:function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return i(t,e,n);if(r.nodeList(t))return a(t,e,n);if(r.string(t))return s(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function a(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function s(t,e,n){return c(document.body,t,e,n)}var r=n(433),c=n(431);t.exports=o},435:function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}t.exports=n},436:function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var a=0,s=o.length;a<s;a++)o[a].fn!==e&&o[a].fn._!==e&&i.push(o[a]);return i.length?n[t]=i:delete n[t],this}},t.exports=n},437:function(t,e,n){function o(t){n(432)}var i=n(149)(n(426),n(438),o,"data-v-bd097140",null);t.exports=i.exports},438:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cd-panel cd-panel-sm",class:{active:t.isShowCode}},[n("div",{staticClass:"cd-panel-heading"},[n("div",{staticClass:"cd-panel-title"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"cd-panel-action"},[t.isShowCode?n("i",{staticClass:"cd-icon cd-icon-copy js-copy-code",attrs:{"data-toggle":"code-tooltip","data-title":"复制代码","data-clipboard-text":t.code}}):t._e(),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.isShowCode,expression:"isShowCode"}],staticClass:"cd-icon cd-icon-close active",attrs:{"data-toggle":"code-tooltip","data-title":"隐藏代码"},on:{click:t.toggleCode}}),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:!t.isShowCode,expression:"!isShowCode"}],staticClass:"cd-icon cd-icon-code",attrs:{"data-toggle":"code-tooltip","data-title":"显示代码"},on:{click:t.toggleCode}})])]),t._v(" "),n("div",{staticClass:"cd-panel-body"},[t.isShowCode?t._t("code"):t._e(),t._v(" "),t._t("style"),t._v(" "),t._t("dec")],2)])},staticRenderFns:[]}},461:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(489),i=n(437),a=n.n(i);e.default={components:{XPanel:a.a},data:function(){return{code:o}},methods:{}}},489:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"input_base",function(){return o}),n.d(e,"input_size",function(){return i}),n.d(e,"input_search",function(){return a}),n.d(e,"input_disabled",function(){return s}),n.d(e,"input_textarea",function(){return r});var o='\n<input type="text" class="cd-form-control" placeholder="输入框内容" />\n',i='\n<input type="text" class="cd-form-control cd-form-control-lg\n" placeholder="最大输入框" />\n<input type="text" class="cd-form-control\n" placeholder="中等输入框" />\n<input type="text" class="cd-form-control cd-form-control-sm\n" placeholder="最小输入框" />\n',a='\n<div class="cd-form-group cd-form-group-button">\n  <input name="q" type="text" class="cd-form-control cd-form-control-sm" placeholder="搜索框预设内容">\n  <button><i class="cd-icon cd-icon-search"></i></button>\n</div>\n',s='\n<input type="text" class="cd-form-control" placeholder="输入框内容" disabled />\n',r='\n<textarea rows="2" class="cd-form-control" placeholder="文本域预设内容"></textarea>\n'},515:function(t,e,n){e=t.exports=n(391)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Input.vue",sourceRoot:""}])},541:function(t,e,n){var o=n(515);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(392)("1875c5b6",o,!0)},571:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"site-content-title"},[t._v("单选框")]),t._v(" "),n("div",{staticClass:"site-content-des"},[t._v("\n    输入框是表单结构中最为基本的输入组件。\n  ")]),t._v(" "),n("div",{staticClass:"cd-row"},[n("div",{staticClass:"col-xs-6"},[n("x-panel",{attrs:{code:t._f("trim")(t.code.input_base)}},[n("span",{slot:"title"},[t._v("\n          基础输入框\n        ")]),t._v(" "),n("div",{slot:"code"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"html"},[t._v("\n            "+t._s(t.code.input_base)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"cd-row cd-mb16",slot:"style"},[n("div",{staticClass:"col-xs-8",domProps:{innerHTML:t._s(t.code.input_base)}})]),t._v(" "),n("div",{staticClass:"cd-text-xs",slot:"dec"},[t._v("\n          基础输入框不带标题，宽度根据具体场景设定。\n        ")])]),t._v(" "),n("x-panel",{attrs:{code:t._f("trim")(t.code.input_search)}},[n("span",{slot:"title"},[t._v("\n          搜索输入框\n        ")]),t._v(" "),n("div",{slot:"code"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"html"},[t._v("\n            "+t._s(t.code.input_search)+"\n          ")])])]),t._v(" "),n("div",{slot:"style"},[n("form",{staticClass:"cd-form-inline",attrs:{action:""}},[n("div",{staticClass:"form-group cd-form-group cd-form-group-button"},[n("input",{staticClass:"form-control form-control form-control-sm",attrs:{name:"q",type:"text",placeholder:"搜索框预设内容"}}),t._v(" "),n("button",[n("i",{staticClass:"cd-icon cd-icon-search"})])])])]),t._v(" "),n("div",{staticClass:"cd-text-xs",slot:"dec"},[t._v("\n          基础输入框不带标题，宽度根据具体场景设定。\n        ")])]),t._v(" "),n("x-panel",{attrs:{code:t._f("trim")(t.code.input_textarea)}},[n("span",{slot:"title"},[t._v("\n          文本域\n        ")]),t._v(" "),n("div",{slot:"code"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"html"},[t._v("\n            "+t._s(t.code.input_textarea)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"cd-row cd-mb16",slot:"style"},[n("div",{staticClass:"col-xs-8",domProps:{innerHTML:t._s(t.code.input_textarea)}})]),t._v(" "),n("div",{staticClass:"cd-text-xs",slot:"dec"},[t._v("\n          基础输入框不带标题，宽度根据具体场景设定。\n        ")])])],1),t._v(" "),n("div",{staticClass:"col-xs-6"},[n("x-panel",{attrs:{code:t._f("trim")(t.code.input_size)}},[n("span",{slot:"title"},[t._v("\n          输入框尺寸\n        ")]),t._v(" "),n("div",{slot:"code"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"html"},[t._v("\n            "+t._s(t.code.input_size)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"cd-row",slot:"style"},[n("div",{staticClass:"col-xs-8"},[n("input",{staticClass:"cd-form-control cd-form-control-lg cd-mb16\n            ",attrs:{type:"text",placeholder:"最大输入框"}}),t._v(" "),n("input",{staticClass:"cd-form-control cd-mb16\n            ",attrs:{type:"text",placeholder:"中等输入框"}}),t._v(" "),n("input",{staticClass:"cd-form-control cd-form-control-sm cd-mb16\n            ",attrs:{type:"text",placeholder:"最小输入框"}})])]),t._v(" "),n("div",{staticClass:"cd-text-xs",slot:"dec"},[t._v("\n          基础输入框不带标题，宽度根据具体场景设定。\n        ")])]),t._v(" "),n("x-panel",{attrs:{code:t._f("trim")(t.code.input_disabled)}},[n("span",{slot:"title"},[t._v("\n          禁用输入框\n        ")]),t._v(" "),n("div",{slot:"code"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"html"},[t._v("\n            "+t._s(t.code.input_disabled)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"cd-row cd-mb16",slot:"style"},[n("div",{staticClass:"col-xs-8",domProps:{innerHTML:t._s(t.code.input_disabled)}})]),t._v(" "),n("div",{staticClass:"cd-text-xs",slot:"dec"},[t._v("\n          禁用输入框样式。\n        ")])])],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=16.632dad815658c1fc2dee.js.map