"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[246],{6246:function(A,E,B){B.r(E),B.d(E,{default:function(){return Q}});var e=B(5861),n=B(885),t=B(7757),r=B.n(t),c=B(2791),a=B(6871),o=B(4390),s=B(3929),u=B(184);var Q=function(){var A=(0,a.UO)().movieId,E=(0,c.useState)(null),B=(0,n.Z)(E,2),t=B[0],Q=B[1];return(0,c.useEffect)((function(){function E(){return(E=(0,e.Z)(r().mark((function E(){var B;return r().wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,E.next=3,(0,o.zv)(A);case 3:B=E.sent,Q(B),E.next=10;break;case 7:E.prev=7,E.t0=E.catch(0),console.log(E.t0);case 10:case"end":return E.stop()}}),E,null,[[0,7]])})))).apply(this,arguments)}!function(){E.apply(this,arguments)}()}),[A]),(0,u.jsx)("div",{children:t&&(0,u.jsx)("ul",{children:t.cast.map((function(A){var E=A.id,B=A.profile_path,e=A.name,n=A.character;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:B?"https://image.tmdb.org/t/p/w300".concat(B):s,alt:e}),(0,u.jsx)("p",{children:e}),(0,u.jsxs)("p",{children:["Character: ",n]})]},E)}))})})}},4390:function(A,E,B){B.d(E,{Hg:function(){return o},TP:function(){return i},V0:function(){return u},tx:function(){return g},zv:function(){return p}});var e=B(5861),n=B(7757),t=B.n(n),r=B(4569),c=B.n(r);c().defaults.baseURL="https://api.themoviedb.org/3";var a="c46f114dbea28bcbc0da4b37aad3806b";function o(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(t().mark((function A(){var E;return t().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("trending/movie/day?api_key=".concat(a));case 2:return E=A.sent,A.abrupt("return",E.data.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function u(A){return Q.apply(this,arguments)}function Q(){return(Q=(0,e.Z)(t().mark((function A(E){var B;return t().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("search/movie?api_key=".concat(a,"&query=").concat(E));case 2:return B=A.sent,A.abrupt("return",B.data.results);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function i(A){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(t().mark((function A(E){var B;return t().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("movie/".concat(E,"?api_key=").concat(a));case 2:return B=A.sent,A.abrupt("return",B.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function p(A){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(t().mark((function A(E){var B;return t().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("movie/".concat(E,"/credits?api_key=").concat(a));case 2:return B=A.sent,A.abrupt("return",B.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function g(A){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(t().mark((function A(E){var B;return t().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("movie/".concat(E,"/reviews?api_key=").concat(a));case 2:return B=A.sent,A.abrupt("return",B.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}},3929:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=246.722e180f.chunk.js.map