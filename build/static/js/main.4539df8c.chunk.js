(this["webpackJsonptypography-editor"]=this["webpackJsonptypography-editor"]||[]).push([[0],{111:function(t,e){},112:function(t,e){},113:function(t,e){},128:function(t,e){},267:function(t,e,a){},268:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(7),i=a.n(r),o=(a(66),a(53)),l=a(1),c=a(2),h=a(4),u=a(3),m=a(10),p=a(5),d=a(54),b=a.n(d),f=a(55),v=a.n(f),k=(a(9),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).eventHandler=t.eventHandler,a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("button",{onClick:this.eventHandler,className:this.props.classes,name:this.props.text},this.props.text||"Tag")}}]),e}(s.a.Component)),g=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).state=t.param,a.eventHandler=t.eventHandler,a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=Object.keys(this.state.format\u0421ommand).map((function(e,a){return s.a.createElement(k,{key:a,param:t.state,eventHandler:t.eventHandler,text:e,classes:"tag"})}));return s.a.createElement("div",{className:this.props.classes},e)}}]),e}(s.a.Component),j=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).clickEvent=t.clickEvent,a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return this.props.on_off?s.a.createElement("button",{className:this.props.on_off_status?"on":"off",onClick:this.clickEvent},s.a.createElement("b",{className:"uppercase"},this.props.on_off_status?"on":"off"),this.props.text||"Button"):s.a.createElement("button",{onClick:this.clickEvent},this.props.text||"Button")}}]),e}(s.a.Component),O=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).state=t.param,a.setGlobalParam=t.setGlobalParam,a.reset=t.reset,a.switchEditText=t.switchEditText,a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"setParam",value:function(t){this.setGlobalParam(t.target.value,t.target.name)}},{key:"reset",value:function(){this.reset()}},{key:"switchEditText",value:function(){this.switchEditText()}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.classes},s.a.createElement(j,{param:this.props.param,on_off:"true",on_off_status:this.props.param.editText,clickEvent:this.switchEditText,text:this.props.param.buttons.edit}))}}]),e}(s.a.Component),y=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).state=t.param,a.eventHandler=t.eventHandler,a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("label",null,this.props.text||"Input",s.a.createElement("input",{type:this.props.type||"text",name:this.props.name||"btn",value:this.props.param,step:this.props.step||"",onChange:function(e){return t.eventHandler(e.target.value,e.target.name)}}))}}]),e}(s.a.Component),E=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).state=t.param,a.eventHandler=t.eventHandler,a.reset=t.reset,a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"setParam",value:function(t){this.eventHandler(t.target.value,t.target.name)}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.classes},s.a.createElement(j,{param:this.props.param,clickEvent:this.reset,text:this.props.param.buttons.reset}),s.a.createElement(y,{param:this.props.param.styles.fontSize,eventHandler:this.eventHandler,type:"number",name:"fontSize",text:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430"}),s.a.createElement(y,{param:this.props.param.styles.lineHeight,eventHandler:this.eventHandler,type:"number",name:"lineHeight",step:"0.1",text:"\u0412\u044b\u0441\u043e\u0442\u0430 \u0441\u0442\u0440\u043e\u043a\u0438"}))}}]),e}(s.a.Component),x=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).setGlobalParam=t.setGlobalParam,a.reset=t.reset,a.switchEditText=t.switchEditText,a.setTag=t.setTag,a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"setParam",value:function(t){this.setGlobalParam(t.target.value,t.target.name)}},{key:"reset",value:function(){this.reset()}},{key:"switchEditText",value:function(){this.switchEditText()}},{key:"render",value:function(){return s.a.createElement("div",{className:"editor-panel"},s.a.createElement("h3",{className:"editor-panel__title"},"\u041f\u0430\u043d\u0435\u043b\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),s.a.createElement(E,{param:this.props.param,classes:"editor-panel__inner",eventHandler:this.setGlobalParam,reset:this.reset}),s.a.createElement(g,{param:this.props.param,classes:"editor-panel__inner",eventHandler:this.setTag}),s.a.createElement(O,{param:this.props.param,classes:"editor-panel__inner editor-panel__buttons",setGlobalParam:this.setGlobalParam,reset:this.reset,switchEditText:this.switchEditText}))}}]),e}(s.a.Component),T=(a(267),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).sanitize=function(){a.setState({html:v()(a.state.html,a.props.data.sanitizeParam)})},a.setNewText=function(t){a.setState({html:t.target.value})},a.state=t.data,console.log("*** \u041d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 ***\n",a.state),a.setGlobalParam=a.setGlobalParam.bind(Object(m.a)(a)),a.reset=a.reset.bind(Object(m.a)(a)),a.switchEditText=a.switchEditText.bind(Object(m.a)(a)),a.setTag=a.setTag.bind(Object(m.a)(a)),a}return Object(p.a)(e,t),Object(c.a)(e,[{key:"setGlobalParam",value:function(t,e){this.setState({styles:Object(o.a)({},e,[t])})}},{key:"setTag",value:function(t){t.preventDefault();var e=t.target.name,a=this.state.format\u0421ommand[e];if(a)for(var n=0;n<a.length;n++)console.log(a[n][0]),document.execCommand(a[n][0],a[n][1],a[n][2].toUpperCase());else console.log("\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0442\u0435\u0433\u0430 \u043d\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u044b. \u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u044d\u0442\u043e \u0432 \u0444\u0430\u0439\u043b\u0435 index.js \u0432 data.format\u0421ommand")}},{key:"reset",value:function(){this.setState({styles:{fontSize:this.props.data.styles.fontSize,lineHeight:this.props.data.styles.lineHeight}})}},{key:"switchEditText",value:function(){this.setState({editText:!this.state.editText})}},{key:"render",value:function(){var t=this;return s.a.createElement("main",{className:"App"},s.a.createElement(x,{param:this.state,setGlobalParam:this.setGlobalParam,reset:this.reset,switchEditText:this.switchEditText,setTag:this.setTag}),s.a.createElement(b.a,{className:this.state.editText?"editable content edit":"editable content",style:{fontSize:"".concat(this.state.styles.fontSize,"px"),lineHeight:"".concat(this.state.styles.lineHeight,"em")},tagName:"div",html:this.state.html,disabled:!this.state.editText,onChange:function(e){return t.setNewText(e)},onBlur:this.sanitize}))}}]),e}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(T,{data:{styles:{fontSize:16,lineHeight:2.2},states:{editText:!1},sanitizeParam:{allowedTags:["h1","h2","h3","h4","h5","h6","blockquote","p","a","ul","ol","li","b","i","strong","em","strike","code","hr","br","div","sub","sup","span","blockquote"],allowedAttributes:{a:["href","name","target"],"*":["style"]}},"format\u0421ommand":{clearFormat:[["removeFormat",!1,""],["unlink",!1,""]],h1:[["formatBlock",!1,"h1"]],h2:[["formatBlock",!1,"h2"]],h3:[["formatBlock",!1,"h3"]],h4:[["formatBlock",!1,"h4"]],h5:[["formatBlock",!1,"h5"]],h6:[["formatBlock",!1,"h6"]],p:[["formatBlock",!1,"p"]],a:[["createLink",!1,"#"]],ul:[["insertUnorderedList",!1,""]],ol:[["insertOrderedList",!1,""]],b:[["bold",!1,""]],i:[["italic",!1,""]],strike:[["strikeThrough",!1,""]],bgcolor:[["styleWithCSS",!1,"true"],["hiliteColor",!1,"rgba(255, 255, 0, 1)"],["styleWithCSS",!1,"false"]],color:[["styleWithCSS",!1,"true"],["foreColor",!1,"rgba(255, 0, 0, 1)"],["styleWithCSS",!1,"false"]],sup:[["superscript",!1,""]],sub:[["subscript",!1,""]],underline:[["underline",!1,""]],blockquote:[["formatBlock",!1,"blockquote"]]},buttons:{edit:"\u0420\u0435\u0436\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430",reset:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},html:"<h1>\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0442\u0435\u043a\u0441\u0442</h1><p>\u0422\u0435\u043a\u0441\u0442 \u0438 \u0435\u0433\u043e \u0441\u0442\u0438\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 <b>\u0420\u0435\u0436\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430</b>.</p><p>\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 \u0442\u0435\u043a\u0441\u0442\u0430 \u043c\u043e\u0436\u043d\u043e, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 <b>clearFormat</b>.</p>"}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},62:function(t,e,a){t.exports=a(268)},66:function(t,e,a){},93:function(t,e){}},[[62,1,2]]]);
//# sourceMappingURL=main.4539df8c.chunk.js.map