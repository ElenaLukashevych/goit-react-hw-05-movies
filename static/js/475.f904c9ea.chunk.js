"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[475],{2475:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),s=e(6373),i=e(2791),o=e(501),p=e(4390),f=e(184);var h=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],h=(0,i.useState)(!1),l=(0,a.Z)(h,2),v=l[0],d=l[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,(0,p.Hg)();case 4:n=t.sent,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,d(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)("section",{children:[v&&(0,f.jsx)(s.g4,{color:"#00BFFF",height:80,width:80}),(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.title;return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(n),children:e})},n)}))})]})}},4390:function(t,n,e){e.d(n,{Hg:function(){return o},TP:function(){return l},V0:function(){return f},tx:function(){return y},zv:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var i="c46f114dbea28bcbc0da4b37aad3806b";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=475.f904c9ea.chunk.js.map