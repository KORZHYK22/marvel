(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{44:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(40);var a=c(39);function r(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},71:function(t,e,c){},81:function(t,e,c){"use strict";c.r(e);var n=c(56),a=c(44),r=c(35),i=(c(71),c(8)),s=c(38),o=c(1),l=c(12),u=c(37),b=c(0),j=function(t){var e=Object(o.useState)(210),c=Object(r.a)(e,2),n=c[0],j=c[1],m=Object(o.useState)(!1),O=Object(r.a)(m,2),d=O[0],f=O[1],h=Object(o.useState)([]),v=Object(r.a)(h,2),_=v[0],x=v[1],p=Object(o.useState)(!1),y=Object(r.a)(p,2),g=y[0],N=y[1],S=Object(s.a)(),w=S.loading,k=S.error,A=S.getAllComics;Object(o.useEffect)((function(){C(n,!0)}),[]);var C=function(t,e){f(!e),A(t).then(E)},E=function(t){var e=!1;t.length<8&&(e=!0),x([].concat(Object(a.a)(_),Object(a.a)(t))),f((function(t){return!1})),j(n+8),N(e)};var I=function(t){var e=t.map((function(t,e){return Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(i.b,{to:"/comics/".concat(t.id),children:[Object(b.jsx)("img",{src:t.thumbnail,alt:"ultimate war",className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:t.title}),Object(b.jsxs)("div",{className:"comics__item-price",children:[t.price," $"]})]})},e)}));return Object(b.jsx)("ul",{className:"comics__grid",children:e})}(_),J=k?Object(b.jsx)(u.a,{}):null,F=w&&!d?Object(b.jsx)(l.a,{}):null;return Object(b.jsxs)("div",{className:"comics__list",children:[J,F,I,Object(b.jsx)("button",{disabled:d,style:{display:g?"none":"block"},className:"button button__main button__long",onClick:function(){return C(n)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})};e.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(n.a,{}),Object(b.jsx)(j,{})]})}}}]);
//# sourceMappingURL=6.e111da99.chunk.js.map