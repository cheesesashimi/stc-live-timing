(this["webpackJsonplive-timing"]=this["webpackJsonplive-timing"]||[]).push([[0],{45:function(e,t,a){e.exports=a(75)},50:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=(a(50),a(11)),o=a.n(i),s=a(15),u=a(17),m=a(34),p=a(35),f=function(){function e(t,a,n,r,c){Object(m.a)(this,e),this.clazz=t,this.name=a,this.time=this.parseTime(n),this.number=r,this.rawTimes=c}return Object(p.a)(e,[{key:"parseTime",value:function(e){return e=parseFloat(e,10),isNaN(e)?999:e}}]),e}(),h=a(52),d=function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n,r,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(t);case 2:return a=e.sent,n=new DOMParser,r=n.parseFromString(a.data.contents,"text/html"),c={},l="",r.querySelectorAll("body > a > table:nth-child(4) > tbody > tr").forEach((function(e){if(e.querySelector("th"))l=e.querySelector("a").name,c[l]=[];else{var t=e.querySelector("td:nth-child(2)").innerText,a=e.querySelector("td:nth-child(3)").innerText,n=e.querySelector("td:nth-child(4)").innerText,r=Array.prototype.slice.call(e.querySelectorAll("td:nth-child(n+7)"));r=r.slice(0,r.length-2);var i=[],o=[];r.forEach((function(e){var t=e.innerText.split("+").map((function(e){return e.trim()}));if(o.push(e.innerText.trim()),1===t.length){if(""===t[0])return;i.push(parseFloat(t,10))}else if(2===t.length){if("dnf"===t[1]||"dns"===t[1])return void i.push(999);var a=parseFloat(t[1],10);return void i.push(parseFloat(t,10)+2*a)}}));var s=i.sort((function(e,t){return e-t}))[0];c[l].push(new f(t,n,s,a,o))}})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=a(90),E=a(95),v=a(98),g=a(100),w=a(92),y=a(96),x=a(97),j=a(94),z=Object(b.a)({table:{minWidth:500,maxWidth:500,width:500},height:"35px"});function O(e){var t=e.data,a=e.name,n=e.showModal,c=t.map((function(e){return function(e,t,a,n,r){return{name:e,number:t,time:a,clazz:n,rawTimes:r}}(e.name,e.number,e.time,e.clazz,e.rawTimes)})),l=z(),i=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{component:j.a},r.a.createElement("div",{style:{overflow:"auto",height:"350px",borderStyle:"solid"}},r.a.createElement("h2",{style:{marginLeft:"15px"}},a.toUpperCase()),r.a.createElement(E.a,{className:l.table,"aria-label":"simple table",style:{tableLayout:"fixed"}},r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(g.a,{align:"left"},"Position"),r.a.createElement(g.a,{align:"left"},"Number"),r.a.createElement(g.a,null,"Name"),r.a.createElement(g.a,{align:"right"},"Time"))),r.a.createElement(v.a,null,c.map((function(e){return i++,r.a.createElement(x.a,{key:e.name},r.a.createElement(g.a,{align:"left"},i),r.a.createElement(g.a,{align:"left"},e.number+" "+e.clazz.toUpperCase()),r.a.createElement(g.a,{onClick:function(){n(e)},component:"th",scope:"row"},r.a.createElement("div",{style:{color:"blue",cursor:"pointer"}},e.name)),r.a.createElement(g.a,{align:"right"},e.time))})))))))}a(74);var k=a(99),T=Object(b.a)({table:{minWidth:500,maxWidth:500,width:500}});function S(e){var t=e.clazz,a=e.name,n=e.rawTimes,c=T(),l=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{component:j.a},r.a.createElement("div",{style:{overflow:"auto"}},r.a.createElement("h2",{style:{marginLeft:"15px"}},a," (",t.toUpperCase(),")"),r.a.createElement(E.a,{className:c.table,"aria-label":"simple table",style:{tableLayout:"fixed"}},r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(g.a,{align:"left"},"Run"),r.a.createElement(g.a,{align:"left"},"Time"))),r.a.createElement(v.a,null,n.map((function(e){return l++,r.a.createElement(x.a,null,r.a.createElement(g.a,{align:"left"},l),r.a.createElement(g.a,{align:"left"},e))})))))))}function A(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var F=Object(b.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function W(e){var t=F(),a=r.a.useState(A),n=Object(u.a)(a,1)[0];return r.a.createElement("div",null,r.a.createElement(k.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:e.open,onClose:e.close},r.a.createElement("div",{style:n,className:t.paper},r.a.createElement(S,e.driver))))}var q={ss:.822,as:.819,bs:.814,cs:.809,ds:.806,es:.794,fs:.803,gs:.792,hs:.78,hcs:.792,ssr:.843,"xs-a":.844,"xs-b":.864,ev:.824,ssp:.853,asp:.849,bsp:.852,csp:.865,dsp:.842,esp:.839,fsf:.823,sts:.812,stx:.816,str:.827,stu:.828,sth:.813,ssc:.801,smf:.841,sm:.854,ssm:.875,xp:.88,bp:.867,cp:.851,dp:.866,ep:.85,fp:.868,hcr:.815,am:1,bm:.962,cm:.893,dm:.895,em:.896,fm:.911,fsae:.963,km:.93,ja:.855,jb:.82,jc:.718,camc:.818,camt:.817,cams:.833},N=function(e){var t=[];return Object.keys(e).forEach((function(a){t="n"===a?t.concat(e[a].map((function(e){var t=e.time;if(999!==t){var a=e.clazz.substring(1);t=(e.time/q[a]).toFixed(3)}return new f(e.clazz,e.name,t,e.number,e.rawTimes)}))):t.concat(e[a])})),t.sort((function(e,t){return e.time-t.time})),t},C=function(e){var t=[];return Object.keys(e).forEach((function(a){t="n"===a?t.concat(e[a].map((function(e){return new f(e.clazz,e.name,e.time,e.number,e.rawTimes)}))):t.concat(function(e,t){return e.map((function(e){return new f(e.clazz,e.name,(e.time*q[t]).toFixed(3),e.number,e.rawTimes)}))}(e[a],a))})),t.sort((function(e,t){return e.time-t.time})),t},M=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(),m=Object(u.a)(i,2),p=m[0],f=m[1],h=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(d("https://api.allorigins.win/get?url=stcsolo.com/live/results_live.htm"));case 2:t=e.sent,a=N(t),n=C(t),t.RAW=a,t.PAX=n,l(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,p&&r.a.createElement(W,{open:!0,driver:p,close:function(){f(null)}}),r.a.createElement("div",{class:"flex-grid"},c&&r.a.createElement(O,{class:"col",data:c.PAX,name:"PAX",showModal:function(e){f(e)}}),c&&r.a.createElement(O,{class:"col",data:c.RAW,name:"RAW",showModal:function(e){f(e)}}),c&&Object.keys(c).map((function(e){return"RAW"===e||"PAX"===e?null:r.a.createElement(O,{class:"col",data:c[e],name:e,showModal:function(e){f(e)}})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.86671c5c.chunk.js.map