"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[973],{7973:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n=r(5861),a=r(885),c=r(7757),s=r.n(c),u=r(501),o=r(6871),i=r(2791),p=r(828),f=r(6066),l=(r(5462),{form:"SearchForm_form__o80os",input:"SearchForm_input__HOxJo",btn:"SearchForm_btn__TXrR3",icon:"SearchForm_icon__bCza5"}),h=r(184);var m=function(t){var e=t.onSubmit,r=(0,i.useState)(""),n=(0,a.Z)(r,2),c=n[0],s=n[1];return(0,h.jsxs)("form",{className:l.form,onSubmit:function(t){if(t.preventDefault(),""===c.trim())return f.Am.error("Please try again.");e(c),s("")},children:[(0,h.jsx)("input",{className:l.input,onChange:function(t){s(t.currentTarget.value.toLowerCase())},value:c,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search"}),(0,h.jsxs)("button",{className:l.btn,type:"submit",children:[(0,h.jsxs)("span",{className:l.icon,children:[" ",(0,h.jsx)(p.Yfv,{})]}),(0,h.jsx)("span",{className:l.textBtn,children:"Search"})]})]})},v=r(4390),d=r(6373),_="Movies_list__hqYjd",x="Movies_item__Ba4aJ",b="Movies_img__8sw1H",y="Movies_text__FlKVm";var w=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],p=(0,i.useState)(!1),l=(0,a.Z)(p,2),w=l[0],g=l[1],k=(0,o.TH)(),j=(0,u.lr)(),S=(0,a.Z)(j,2),F=S[0],N=S[1],Z=F.get("query");return(0,i.useEffect)((function(){function t(){return(t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Z){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,g(!0),t.next=6,(0,v.V0)(Z);case 6:e=t.sent,c(e),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),f.Am.error("Not found"),console.log(t.t0);case 14:return t.prev=14,g(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[2,10,14,17]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[Z]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{onSubmit:function(t){N({query:t})}}),w&&(0,h.jsx)(d.g4,{color:"#00BFFF",height:80,width:80}),r&&(0,h.jsx)("ul",{className:_,children:r.map((function(t){var e=t.id,r=t.title,n=t.poster_path;return(0,h.jsx)("li",{className:x,children:(0,h.jsxs)(u.rU,{to:"/movies/".concat(e),state:{from:k},children:[(0,h.jsx)("img",{className:b,src:"https://image.tmdb.org/t/p/w300".concat(n),alt:r}),(0,h.jsx)("p",{className:y,children:r})]})},e)}))})]})}},4390:function(t,e,r){r.d(e,{Hg:function(){return i},TP:function(){return h},V0:function(){return f},tx:function(){return _},zv:function(){return v}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),u=r.n(s);u().defaults.baseURL="https://api.themoviedb.org/3";var o="c46f114dbea28bcbc0da4b37aad3806b";function i(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("search/movie?api_key=".concat(o,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(e,"?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(e,"/credits?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=973.1073837c.chunk.js.map