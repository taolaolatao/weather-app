(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),s=t.n(r),o=t(1),u=t.n(o),l=t(5),i=t(2),m="9af6cd68130f3da7437aeabdc87cd4c8",p="http://api.openweathermap.org/data/2.5/",d=function(){var e=Object(n.useState)("London"),a=Object(i.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)({}),o=Object(i.a)(s,2),d=o[0],h=o[1],b=function(){var e=Object(l.a)(u.a.mark((function e(a){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==a.which){e.next=9;break}return e.next=3,fetch("".concat(p,"weather?q=").concat(t,"&units=metric&appid=").concat(m));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,h(c),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:d.main&&d.main.temp>30?"app warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",defaultValue:t,className:"search-bar",placeholder:"Search...",onKeyPress:b,onChange:function(e){return r(e.target.value)}})),d.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},d.name," - ",d.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(d.main.temp),"\xb0c"),c.a.createElement("div",{className:"weather"},d.weather[0].main))):null))};t(12);s.a.render(c.a.createElement(d,null),document.getElementById("root"))},6:function(e,a,t){e.exports=t(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.cf7f91b6.chunk.js.map