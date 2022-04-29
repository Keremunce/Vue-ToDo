(function(){"use strict";var e={539:function(e,t,o){var i=o(963),s=o(252);const n={class:"container mx-auto relative py-5"};function r(e,t,o,i,r,l){const d=(0,s.up)("Card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",n,[(0,s.Wm)(d)])])}var l=o(577);const d=e=>((0,s.dD)("data-v-1461405e"),e=e(),(0,s.Cn)(),e),a=d((()=>(0,s._)("div",{class:"text-center mx-auto font-bold"},[(0,s._)("div",{class:"mb-5"},[(0,s._)("h1",{class:"text-white text-5xl title"},"To Do List")])],-1))),c={class:"cardDivInner w-10/12 sm:w-10/12 lg:w-1/2 text-center mx-auto border border-zinc-500 rounded shadow-lg font-bold p-5"},u={class:"text-gray-500 text-right"},f={class:"Date"},p={class:"text-gray-500"},h={class:"mt-6"},g={class:""},v=d((()=>(0,s._)("h1",{class:"text-white text-left my-5 text-lg"},"Tasks",-1))),m=["onClick"],x=["id"],w=["for"],y={class:"priority flex items-center justify-between text-white"},_=["onClick"],b=["onClick"],k=["onClick"],C=["onClick"],T=d((()=>(0,s._)("svg",{class:"fill-current text-red-500",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[(0,s._)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),(0,s._)("path",{d:"M0 0h24v24H0z",fill:"none"})],-1))),O=[T],D=d((()=>(0,s._)("h1",{class:"text-white text-left my-5 text-lg"},"Completed",-1))),L={id:"checklist",class:"w-1/2 break-all text-white transition duration-200 ease-out text-1xl text-left my-5 transition ease-in-out delay-150 duration-200 cursor-pointer flex justify-start align-center"},S=["id"],j=["for"],z=["onClick"],I=d((()=>(0,s._)("svg",{class:"fill-current text-red-500",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[(0,s._)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),(0,s._)("path",{d:"M0 0h24v24H0z",fill:"none"})],-1))),R=[I];function Y(e,t,o,n,r,d){return(0,s.wg)(),(0,s.iD)("div",null,[a,(0,s._)("div",c,[(0,s._)("div",u,[(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>d.resetLocal&&d.resetLocal(...e))},"Reset LocalStorage")]),(0,s._)("div",f,[(0,s._)("p",p,(0,l.zw)(r.date),1)]),(0,s._)("div",h,[(0,s._)("div",g,[(0,s._)("input",{type:"text",onKeyup:t[1]||(t[1]=(0,i.D2)(((...e)=>d.addTodo&&d.addTodo(...e)),["enter"])),class:"focus:border-gray-500 focus:ring-0 focus:offset-0 addTodo text-gray-title border border-gray-500 rounded-lg text-left px-3 py-2 drop-shadow-2xl bg-transparent w-full",placeholder:"+ Add To List"},null,32)]),(0,s._)("div",null,[(0,s._)("div",null,[v,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.todos,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:e.id},[(0,s._)("div",{class:(0,l.C_)([{"bg-red-500":r.isRed,"bg-yellow-500":r.isYellow,"bg-green-500":r.isGreen},"rounded transition ease-in-out delay-200 duraiton-200 flex align-middle justify-between"])},[(0,s._)("div",{id:"checklist",onClick:e=>d.addCompleted(t),class:"w-1/2 break-all text-white transition duration-200 ease-out text-1xl text-left my-5 transition ease-in-out delay-150 duration-200 cursor-pointer flex justify-start align-center"},[(0,s._)("input",{id:e.id,type:"checkbox",name:"checkbox",class:"outline-0 offset-0 ring-0 border-0 focus:outline-0 focus:ring-0 focus:offset-0 focus:border-0 focus:ring-offset-0"},null,8,x),(0,s._)("label",{for:e.id},(0,l.zw)(e.text),9,w)],8,m),(0,s._)("div",y,[(0,s._)("div",{onClick:e=>d.priortiy_red(t),class:"red rounded-full bg-red-500 p-2"},null,8,_),(0,s._)("div",{onClick:e=>d.priortiy_yellow(t),class:"yellow rounded-full bg-yellow-500 p-2 mx-2"},null,8,b),(0,s._)("div",{onClick:e=>d.priortiy_green(t),class:"green rounded-full bg-green-500 p-2"},null,8,k)]),(0,s._)("span",{class:"X-icon items-center justify-end inline-flex cursor-pointer",onClick:e=>d.removeTodo(t)},O,8,C)],2)])))),128))]),(0,s._)("div",null,[D,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.completed,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:e.id,class:"transition ease-in-out delay-200 duraiton-200 flex align-middle"},[(0,s._)("div",L,[(0,s._)("input",{id:e.id,type:"checkbox",name:"checkbox",class:"outline-0 offset-0 ring-0 border-0 focus:outline-0 focus:ring-0 focus:offset-0 focus:border-0 focus:ring-offset-0"},null,8,S),(0,s._)("label",{for:e.id},(0,l.zw)(e.text),9,j)]),(0,s._)("span",{class:"X-icon w-2/4 items-center justify-end inline-flex cursor-pointer",onClick:e=>d.removeCompleted(t)},R,8,z)])))),128))])])])])])}var G={name:"App",data(){return{todos:[{id:1,text:"Learn Vue",completed:!1},{id:2,text:"Learn Vuex",completed:!1},{id:3,text:"Learn Vue Router",completed:!1}],completed:[{id:4,text:"Learn Vue",completed:!0}],date:(new Date).toLocaleDateString(),isRed:!1,isYellow:!1,isGreen:!1}},mounted(){this.getTodos()},methods:{getTodos(){localStorage.getItem("todos")&&localStorage.getItem("completed")&&(this.todos=JSON.parse(localStorage.getItem("todos")),this.completed=JSON.parse(localStorage.getItem("completed")))},addTodo(e){this.todos.push({id:this.todos.length+1,text:e.target.value,completed:!1}),e.target.value="",this.saveTodos()},addCompleted(e){this.todos[e].completed=!0,this.completed.push(this.todos[e]),this.todos.splice(e,1),this.saveTodos()},removeTodo(e){this.todos.splice(e,1),this.saveTodos()},removeCompleted(e){this.completed.splice(e,1),this.saveTodos()},saveTodos(){localStorage.setItem("todos",JSON.stringify(this.todos)),localStorage.setItem("completed",JSON.stringify(this.completed))},resetLocal(){localStorage.clear()},priortiy_red(){this.isRed=!this.isRed,this.isYellow=!1,this.isGreen=!1,this.saveTodos()},priortiy_yellow(){this.isYellow=!this.isYellow,this.isRed=!1,this.isGreen=!1,this.saveTodos()},priortiy_green(){this.isGreen=!this.isGreen,this.isRed=!1,this.isYellow=!1,this.saveTodos()}}},H=o(744);const J=(0,H.Z)(G,[["render",Y],["__scopeId","data-v-1461405e"]]);var M=J,N={name:"App",components:{Card:M}};const V=(0,H.Z)(N,[["render",r]]);var A=V;(0,i.ri)(A).mount("#app")}},t={};function o(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,i,s,n){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],n=e[c][2];for(var l=!0,d=0;d<i.length;d++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](i[d])}))?i.splice(d--,1):(l=!1,n<r&&(r=n));if(l){e.splice(c--,1);var a=s();void 0!==a&&(t=a)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,s,n]}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,n,r=i[0],l=i[1],d=i[2],a=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(d)var c=d(o)}for(t&&t(i);a<r.length;a++)n=r[a],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},i=self["webpackChunkvue_tailwind_settingup"]=self["webpackChunkvue_tailwind_settingup"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(539)}));i=o.O(i)})();
//# sourceMappingURL=app.7dbfcbb9.js.map