(this["webpackJsonplive-timing"]=this["webpackJsonplive-timing"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(76),a(22)),s=a.n(i),o=a(33),u=a(12),m=a(57),p=a(58),f=function(){function e(t,a,n,r,l){Object(m.a)(this,e),this.clazz=t,this.name=a,this.time=this.parseTime(n),this.number=r,this.rawTimes=l}return Object(p.a)(e,[{key:"parseTime",value:function(e){return e=parseFloat(e,10),isNaN(e)?999:e}}]),e}(),d=a(78),E=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n,r,l,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(t);case 2:return a=e.sent,n=new DOMParser,r=n.parseFromString(a.data.contents,"text/html"),l={},c="",r.querySelectorAll("body > a > table:nth-child(4) > tbody > tr").forEach((function(e){if(e.querySelector("th"))c=e.querySelector("a").name,l[c]=[];else{var t=e.querySelector("td:nth-child(2)").innerText,a=e.querySelector("td:nth-child(3)").innerText,n=e.querySelector("td:nth-child(4)").innerText,r=Array.prototype.slice.call(e.querySelectorAll("td:nth-child(n+7)"));r=r.slice(0,r.length-2);var i=[],s=[];r.forEach((function(e){var t=e.innerText.split("+").map((function(e){return e.trim()}));if(s.push(e.innerText.trim()),1===t.length){if(""===t[0])return;i.push(parseFloat(t,10))}else if(2===t.length){if("dnf"===t[1]||"dns"===t[1])return void i.push(999);var a=parseFloat(t[1],10);return void i.push(parseFloat(t,10)+2*a)}}));var o=i.sort((function(e,t){return e-t}))[0];l[c].push(new f(t,n,o,a,s))}})),e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=a(129),b=a(135),w=a(139),g=a(138),v=a(132),y=a(136),O=a(137),T=a(134),j=Object(n.createContext)(),x=function(e){var t=e.initialState,a=e.children,l=e.reducer;return r.a.createElement(j.Provider,{value:Object(n.useReducer)(l,t)},a)},z=function(){return Object(n.useContext)(j)},D=Object(h.a)({table:{minWidth:500},height:"35px"});function S(e){var t=e.data,a=z(),n=Object(u.a)(a,2)[1],l=t.map((function(e){return t=e.name,a=e.number,n=e.time,r=e.clazz,l=e.rawTimes,{name:t,number:a,time:n,clazz:r,rawTimes:l};var t,a,n,r,l})),c=D(),i=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{component:T.a},r.a.createElement("div",null,r.a.createElement(b.a,{className:c.table,"aria-label":"simple table"},r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(g.a,{style:{width:25},align:"left"},"Position"),r.a.createElement(g.a,{align:"left"},"Number"),r.a.createElement(g.a,null,"Name"),r.a.createElement(g.a,{align:"left"},"Best"),r.a.createElement(g.a,{align:"left"},"1"),r.a.createElement(g.a,{align:"left"},"2"),r.a.createElement(g.a,{align:"left"},"3"),r.a.createElement(g.a,{align:"left"},"4"),r.a.createElement(g.a,{align:"left"},"5"),r.a.createElement(g.a,{align:"left"},"6"))),r.a.createElement(w.a,null,l.map((function(e){return i++,r.a.createElement(O.a,{key:e.name},r.a.createElement(g.a,{align:"left"},i),r.a.createElement(g.a,{align:"left"},e.number+" "+e.clazz.toUpperCase()),r.a.createElement(g.a,{onClick:function(){return n({type:"SELECTED_DRIVER",data:e})},component:"th",scope:"row"},r.a.createElement("div",{style:{color:"blue",cursor:"pointer"}},e.name)),r.a.createElement(g.a,{align:"left"},e.time),r.a.createElement(g.a,{align:"left"},e.rawTimes.length>0?e.rawTimes[0]:""),r.a.createElement(g.a,{align:"left"},e.rawTimes.length>1?e.rawTimes[1]:""),r.a.createElement(g.a,{align:"left"},e.rawTimes.length>2?e.rawTimes[2]:""),r.a.createElement(g.a,{align:"left"},e.rawTimes.length>3?e.rawTimes[3]:""),r.a.createElement(g.a,{align:"left"},e.rawTimes.length>4?e.rawTimes[4]:""),r.a.createElement(g.a,{align:"left"},e.rawTimes.length>5?e.rawTimes[5]:""))})))))))}a(99);var k=a(143),C=Object(h.a)({table:{minWidth:500,maxWidth:500,width:500}});function R(e){var t=C(),a=z(),n=Object(u.a)(a,1)[0].selected,l=n.clazz,c=n.name,i=n.rawTimes,s=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{component:T.a},r.a.createElement("div",{style:{overflow:"auto"}},r.a.createElement("h2",{style:{marginLeft:"15px"}},c," (",l.toUpperCase(),")"),r.a.createElement(b.a,{className:t.table,"aria-label":"simple table",style:{tableLayout:"fixed"}},r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(g.a,{align:"left"},"Run"),r.a.createElement(g.a,{align:"left"},"Time"))),r.a.createElement(w.a,null,i.map((function(e){return s++,r.a.createElement(O.a,null,r.a.createElement(g.a,{align:"left"},s),r.a.createElement(g.a,{align:"left"},e))})))))))}function P(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var N=Object(h.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),A=function(){var e=z(),t=Object(u.a)(e,2),a=t[0].selected,n=t[1],l=N(),c=r.a.useState(P),i=Object(u.a)(c,1)[0];return a?r.a.createElement("div",null,r.a.createElement(k.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:!!a,onClose:function(){return n({type:"DESELECT_DRIVER"})}},r.a.createElement("div",{style:i,className:l.paper},r.a.createElement(R,null)))):r.a.createElement("div",null)},W=a(144),F=a(142),_=a(140),q=a(141),U=Object(h.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),L=function(e){var t=e.clazzes,a=U(),n=z(),l=Object(u.a)(n,2),c=l[0].dropdown,i=l[1];return r.a.createElement(_.a,{className:a.formControl},r.a.createElement(W.a,null,"Class"),r.a.createElement(q.a,{value:c,onChange:function(e){window.history.pushState("","","".concat(window.location.pathname,"?class=").concat(e.target.value)),i({type:"UPDATE_DROPDOWN",data:e.target.value})}},t.map((function(e){return r.a.createElement(F.a,{value:e},e.toUpperCase())}))))},I={ss:.822,as:.819,bs:.814,cs:.809,ds:.806,es:.794,fs:.803,gs:.792,hs:.78,hcs:.792,ssr:.843,"xs-a":.844,"xs-b":.864,ev:.824,ssp:.853,asp:.849,bsp:.852,csp:.865,dsp:.842,esp:.839,fsf:.823,sts:.812,stx:.816,str:.827,stu:.828,sth:.813,ssc:.801,smf:.841,sm:.854,ssm:.875,xp:.88,bp:.867,cp:.851,dp:.866,ep:.85,fp:.868,hcr:.815,am:1,bm:.962,cm:.893,dm:.895,em:.896,fm:.911,fsae:.963,km:.93,ja:.855,jb:.82,jc:.718,camc:.818,camt:.817,cams:.833},V=function(e){var t=[];return Object.keys(e).forEach((function(a){t="n"===a?t.concat(e[a].map((function(e){var t=e.time;if(999!==t){var a=e.clazz.substring(1);t=(e.time/I[a]).toFixed(3)}return new f(e.clazz,e.name,t,e.number,e.rawTimes)}))):t.concat(e[a])})),t.sort((function(e,t){return e.time-t.time})),t},B=function(e){var t=[];return Object.keys(e).forEach((function(a){t="n"===a?t.concat(e[a].map((function(e){return new f(e.clazz,e.name,e.time,e.number,e.rawTimes)}))):t.concat(function(e,t){return e.map((function(e){return new f(e.clazz,e.name,(e.time*I[t]).toFixed(3),e.number,e.rawTimes)}))}(e[a],a))})),t.sort((function(e,t){return e.time-t.time})),t},X=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),p=m[0],f=m[1],d=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=z(),b=Object(u.a)(h,2),w=b[0].dropdown,g=b[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(E("https://api.allorigins.win/get?url=stcsolo.com/live/results_live.htm?cache="+(new Date).getTime()));case 2:t=e.sent,a=V(t),n=B(t),t.RAW=a,t.PAX=n,c(t),r=Object.keys(t),f(r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),window.onpopstate=function(e){return function(){if(window.location.search&&window.location.search.includes("?class=")){var e=window.location.search.replace("?class=","").trim();console.log(e),p.includes(e)&&g({type:"UPDATE_DROPDOWN",data:e})}else g({type:"UPDATE_DROPDOWN",data:"PAX"})}()},r.a.createElement(r.a.Fragment,null,l&&p&&r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(L,{clazzes:p}),r.a.createElement(S,{class:"col",data:l[w],name:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(44);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,{initialState:{selected:null,dropdown:"PAX"},reducer:function(e,t){switch(t.type){case"SELECTED_DRIVER":return Object(J.a)({},e,{selected:t.data});case"DESELECT_DRIVER":return Object(J.a)({},e,{selected:null});case"UPDATE_DROPDOWN":return Object(J.a)({},e,{dropdown:t.data});default:return e}}},r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a(100)},76:function(e,t,a){},99:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.198158cc.chunk.js.map