"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[883],{8883:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(5861),a=n(885),c=n(7757),s=n.n(c),u=n(501),i=n(6871),o=n(2791),p=n(6373),f=n(6066),l=(n(5462),n(6355)),h=n(4390),d=n(184);var v=function(){var t,e,n=(0,o.useState)(!1),c=(0,a.Z)(n,2),v=c[0],x=c[1],m=(0,o.useState)(null),w=(0,a.Z)(m,2),k=w[0],y=w[1],j=(0,i.UO)().movieId,b=(0,i.TH)();return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,h.TP)(j);case 4:e=t.sent,y(e),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),f.Am.error("Not found"),console.log(t.t0);case 12:return t.prev=12,x(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[j]),(0,d.jsxs)("div",{children:[v&&(0,d.jsx)(p.g4,{color:"#00BFFF",height:80,width:80}),(0,d.jsxs)(u.rU,{to:null!==(t=null===b||void 0===b||null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/",children:[(0,d.jsx)(l.x_l,{})," Go back"]}),k&&(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:k.title}),(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(k.poster_path),alt:k.title}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:k.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:k.genres.map((function(t){return t.name})).join(", ")}),(0,d.jsxs)("p",{children:["User Score: ",k.vote_average]}),(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsx)(u.OL,{to:"cast",children:"Cast"}),(0,d.jsx)(u.OL,{to:"reviews",children:"Reviews"})]}),(0,d.jsx)(i.j3,{})]})}},4390:function(t,e,n){n.d(e,{Hg:function(){return o},TP:function(){return h},V0:function(){return f},tx:function(){return m},zv:function(){return v}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),u=n.n(s);u().defaults.baseURL="https://api.themoviedb.org/3";var i="c46f114dbea28bcbc0da4b37aad3806b";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=883.3364d5b1.chunk.js.map