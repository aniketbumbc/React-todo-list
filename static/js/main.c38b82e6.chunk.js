(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{12:function(t,e,a){t.exports=a(21)},17:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(4),o=a.n(i),r=(a(17),a(9)),c=a(2),l=a.n(c),d=a(5),h=a(6),u=a(7),m=a(10),v=a(8),f=a(1),k=a(11),g=(a(19),a(20),"/React-todo-list/delete-icon.png");var p=function(t){return s.a.createElement("div",{className:"todo-item"},s.a.createElement("img",{className:"image-delete",src:g,alt:"Delete",onClick:function(){return t.handleChange(t.id)}}),s.a.createElement("p",null," ",t.text," "))},b=[{id:1,text:"work on React"},{id:2,text:"work on Angular"},{id:3,text:"work on Node"}],w=function(t){function e(){var t;return Object(h.a)(this,e),(t=Object(m.a)(this,Object(v.a)(e).call(this))).handleOnChangeTask=function(){var t=Object(d.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({value:e.target.value});case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),t.state={todos:b,task:{id:"",text:""},value:"",stateWord:"What it Today's Do-List"},t.handleChange=t.handleChange.bind(Object(f.a)(t)),t}return Object(k.a)(e,t),Object(u.a)(e,[{key:"handleChange",value:function(t){this.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))}},{key:"addTask",value:function(){var t=this.state.value.trim();if(t.length){var e={id:100*Math.random(),text:t};this.setState({todos:[].concat(Object(r.a)(this.state.todos),[e])}),this.setState({value:" "})}else alert("Please Add Task")}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return s.a.createElement(p,{key:e.id,text:e.text,id:e.id,handleChange:t.handleChange.bind(t)})}));return s.a.createElement("div",{className:"todo-list"},s.a.createElement("h3",{className:"header-class"},this.state.stateWord),s.a.createElement("div",{className:"container"},s.a.createElement("input",{type:"text",size:"50",height:"20px",value:this.state.value,onChange:this.handleOnChangeTask.bind(this)})," ",s.a.createElement("button",{className:"add-btn",onClick:this.addTask.bind(this)}," ","Add Task"," ")),e.length?e:s.a.createElement("h1",{className:"header-class"}," Please Add Task"))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.c38b82e6.chunk.js.map