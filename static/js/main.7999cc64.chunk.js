(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{171:function(e,t,a){},194:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(17),s=a.n(c),i=a(19),l=(a(72),a(1)),o=function(e){var t=e.inputValue,a=e.inputHandler,n=Object(r.useRef)(null);return Object(r.useEffect)((function(){n.current.focus()}),[]),Object(l.jsx)("input",{type:"text",className:"search-input",placeholder:"Where do you live?",value:t,onChange:function(e){return a(e)},ref:n})},u=a(31),j=function(e){return"".concat("http://openweathermap.org/img/wn","/").concat(e,"@2x.png")},d=function(e){return new Date(1e3*e).toLocaleTimeString().slice(0,5)},b=function(e){var t=e.data,a=t.city,r=a.name,n=a.sunrise,c=a.sunset,s=t.list[0].main.temp,i=t.list[4].main.temp,o=t.list[0].weather[0],b=o.main,p=o.icon;return Object(l.jsxs)("div",{className:"main-weather",children:[Object(l.jsxs)("span",{className:"main-weather__sunrise-sunset",children:[Object(l.jsx)(u.a,{})," ",d(n)," | ",d(c)," ",Object(l.jsx)(u.b,{})]}),Object(l.jsx)("h2",{className:"main-weather__city",children:r}),Object(l.jsx)("span",{className:"main-weather__description",children:b}),Object(l.jsxs)("h1",{className:"main-weather__temperature",children:[Math.round(s),"\xb0"]}),Object(l.jsxs)("span",{className:"main-weather__day-night",children:[Math.round(s),"\xb0/",Math.round(i),"\xb0"]}),Object(l.jsx)("img",{src:j(p),alt:"Weather icon",className:"main-weather__icon"})]})},p=a(59),h="rgba(106, 38, 207, 0.6)",O="rgba(55, 185, 241, 0.6)",m=function(e){var t=e.futureData,a={labels:t.map((function(e){return e.dt_txt})),datasets:[{label:"Temperature",data:t.map((function(e){return e.main.temp})),borderColor:[h],backgroundColor:[h],pointBackgroundColor:h,pointBorderColor:h},{label:"Wind chill",data:t.map((function(e){return e.main.feels_like})),borderColor:[O],backgroundColor:[O],pointBackgroundColor:O,pointBorderColor:O}]};return Object(l.jsx)("div",{className:"chart-container",children:Object(l.jsx)(p.Line,{data:a,options:{scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Temperature (\xb0C)",fontSize:24}}],xAxes:[{scaleLabel:{display:!0,labelString:"Date and hour",fontSize:24}}]}}})})},f=function(e){var t=e.futureData;return Object(l.jsx)("ul",{className:"bar-container",children:t.filter((function(e,t){return!(t%8)&&0!==t&&e})).map((function(e){var t,a=e.dt,r=e.weather[0].icon,n=e.main.temp;return Object(l.jsxs)("li",{className:"bar-container__item",children:[Object(l.jsx)("span",{className:"bar-container__week-day",children:(t=a,new Date(1e3*t).toLocaleString("en-US",{weekday:"short"}))}),Object(l.jsx)("img",{src:j(r),alt:"Weather icon",className:"bar-container__icon"}),Object(l.jsxs)("span",{className:"bar-container__temp",children:[Math.round(n),"\xb0C"]})]},a)}))})},x=a(60),_=a(61),v=a(62),g=function(e){var t=e.futureData;if(e.loading)return"Loading...";var a,r=t[0].main,n=r.pressure,c=r.humidity,s=t[0].wind,i=s.speed,o=s.deg;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"tile",children:[Object(l.jsx)(x.a,{className:"tile__icon"}),Object(l.jsx)("div",{className:"tile__specific",children:Object(l.jsxs)("span",{className:"tile__specific--description",children:["Speed: ",Object(l.jsxs)("b",{children:[i," m/s"]}),Object(l.jsx)("br",{}),"Direction: ",Object(l.jsx)("b",{children:(a=o,a>337.5?"Northerly":a>292.5?"North Westerly":a>247.5?"Westerly":a>202.5?"South Westerly":a>157.5?"Southerly":a>122.5?"South Easterly":a>67.5?"Easterly":a>22.5?"North Easterly":"Northerly")})]})})]}),Object(l.jsxs)("div",{className:"tile",children:[Object(l.jsx)(_.a,{className:"tile__icon"}),Object(l.jsx)("div",{className:"tile__specific",children:Object(l.jsxs)("span",{className:"tile__specific--description",children:["Humidity: ",Object(l.jsxs)("b",{children:[c,"%"]})]})})]}),Object(l.jsxs)("div",{className:"tile",children:[Object(l.jsx)(v.a,{className:"tile__icon"}),Object(l.jsx)("div",{className:"tile__specific",children:Object(l.jsxs)("span",{className:"tile__specific--description",children:["Pressure: ",Object(l.jsxs)("b",{children:[n,"hPa"]})]})})]})]})},y=function(){return Object(l.jsx)("p",{className:"error",children:"City not found"})},N=(a(171),function(){return Object(l.jsxs)("div",{className:"loader",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}),w=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1];return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;clearTimeout(a);var r=setTimeout((function(){return e()}),t);n(r)}},E=a(63),S=a(32),C=a.n(S),D=a(64),T=a.n(D),k="FETCH_WEATHER_REQUEST",W="FETCH_WEATHER_SUCCESS",H="FETCH_WEATHER_FAILURE",R="SET_ERROR",A=a(10);var L=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=w(),s=Object(A.b)(),u=Object(A.c)((function(e){return e})),j=u.data,d=u.futureData,p=u.error,h=u.loading;return Object(r.useEffect)((function(){a||""===a||s((function(){return function(e){return{type:R,payload:e}}(!1)}))}),[a,p,s]),Object(r.useEffect)((function(){a&&c((function(){return s(function(e){return function(){var t=Object(E.a)(C.a.mark((function t(a){var r,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:k}),t.prev=1,r="".concat("http://api.openweathermap.org","/data/2.5/forecast?q=").concat(e,"&units=metric&appid=").concat("9b94faac6c6bff6bfe721c217e191eba"),t.next=5,T.a.get(r);case 5:n=t.sent,a({type:W,payload:n.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:H,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(a))}))}),[a,s]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{inputValue:a,inputHandler:function(e){n(e.target.value)}}),p&&Object(l.jsx)(y,{}),h&&Object(l.jsx)(N,{}),j&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{data:j}),Object(l.jsx)(m,{futureData:d}),Object(l.jsx)(f,{futureData:d}),Object(l.jsx)(g,{futureData:d,loading:h})]})]})},F=a(18),M=a(4),B={data:null,futureData:[],error:null,loading:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(M.a)(Object(M.a)({},e),{},{error:null,loading:!0});case W:return Object(M.a)(Object(M.a)({},e),{},{error:null,data:t.payload,futureData:t.payload.list,loading:!1});case H:return Object(M.a)(Object(M.a)({},e),{},{error:t.error,loading:!1});case R:return Object(M.a)(Object(M.a)({},e),{},{error:t.payload});default:return e}},z=a(67),I=a(66),J=Object(F.createStore)(U,Object(I.composeWithDevTools)(Object(F.applyMiddleware)(z.a)));s.a.render(Object(l.jsx)(A.a,{store:J,children:Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(L,{})})}),document.getElementById("root"))},72:function(e,t,a){}},[[194,1,2]]]);
//# sourceMappingURL=main.7999cc64.chunk.js.map