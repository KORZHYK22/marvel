(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{37:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",r=c(0);t.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})}},38:function(e,t,c){"use strict";var a=c(41),r=c.n(a),n=c(42),s=c(35),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1],h=Object(i.useCallback)(function(){var e=Object(n.a)(r.a.mark((function e(t){var c,n,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,a(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:c,error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[]),request:h}}(),t=e.loading,c=e.error,a=e.clearError,o=e.request,l="https://gateway.marvel.com:443/v1/public/",u="apikey=58e8360b38a88134dd5765053b2023c1",j=210,h=function(){var e=Object(n.a)(r.a.mark((function e(){var t,c,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:j,e.next=3,o("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("".concat(l,"characters?name=").concat(t,"&").concat(u));case 2:return c=e.sent,e.abrupt("return",c.data.results.map(f));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(r.a.mark((function e(){var t,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>0&&void 0!==c[0]?c[0]:j,e.next=3,o("".concat(l,"comics?limit=8&offset=210&").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return c=e.sent,e.abrupt("return",f(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(n.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return c=e.sent,e.abrupt("return",p(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price):"Not avalible"}},f=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}};return{loading:t,error:c,getAllCharacters:h,getCharacter:m,clearError:a,getAllComics:d,getComic:O,getCharacterByName:b}}},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},69:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var a=c(35),r=c(1),n=c(12),s=(c(58),c.p+"static/media/mjolnir.61f31e18.png"),i=c(38),o=c(37),l=c(0),u=function(e){var t=e.char,c=t.name,a=t.description,r=t.homepage,n=t.wiki,s=t.thumbnail,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:s,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:n,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(r.useState)({}),t=Object(a.a)(e,2),c=t[0],j=t[1],h=Object(i.a)(),b=h.loading,d=h.error,m=h.getCharacter,O=h.clearError;Object(r.useEffect)((function(){f();var e=setInterval(f,6e4);return function(){clearInterval(e)}}),[]);var p=function(e){j(e)},f=function(){O();var e=Math.floor(400*Math.random()+1011e3);m(e).then(p)},v=d?Object(l.jsx)(o.a,{}):null,x=b?Object(l.jsx)(n.a,{}):null,_=d||b?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[v,x,_,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",children:Object(l.jsx)("div",{className:"inner",onClick:f,children:"try it"})}),Object(l.jsx)("img",{src:s,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=c(44),b=(c(59),function(e){var t=Object(r.useState)([]),c=Object(a.a)(t,2),s=c[0],u=c[1],j=Object(r.useState)(!1),b=Object(a.a)(j,2),d=b[0],m=b[1],O=Object(r.useState)(210),p=Object(a.a)(O,2),f=p[0],v=p[1],x=Object(r.useState)(!1),_=Object(a.a)(x,2),g=_[0],N=_[1],k=Object(i.a)(),y=k.loading,w=k.error,C=k.getAllCharacters;Object(r.useEffect)((function(){S(f,!0)}),[]);var S=function(e,t){m(!t),C(e).then(E)},E=function(e){var t=!1;e<9&&(t=!0),u([].concat(Object(h.a)(s),Object(h.a)(e))),m(!1),v(f+9),N(t)},F=Object(r.useRef)([]),T=function(e){F.current.forEach((function(e){return e.classList.remove("char__item_selected")})),F.current[e].classList.add("char__item_selected"),F.current[e].focus()};var I=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return F.current[c]=e},onClick:function(){e.onCharSelected(t.id),T(c)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),T(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:c})}(s),q=w?Object(l.jsx)(o.a,{}):null,A=y&&!d?Object(l.jsx)(n.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[q,A,I,Object(l.jsx)("button",{className:"button button__main button__long",disabled:d,style:{display:g?"none":"block"},onClick:function(){return S(f)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),d=(c(60),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),m=(c(61),function(e){var t=e.char,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:r,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),O=function(e){var t=Object(r.useState)(null),c=Object(a.a)(t,2),s=c[0],u=c[1],j=Object(i.a)(),h=j.loading,b=j.error,O=j.getCharacter,p=j.clearError;Object(r.useEffect)((function(){f()}),[e.charId]);var f=function(){var t=e.charId;t&&(p(),O(t).then(v))},v=function(e){u(e)},x=s||h||b?null:Object(l.jsx)(d,{}),_=b?Object(l.jsx)(o.a,{}):null,g=h?Object(l.jsx)(n.a,{}):null,N=b||!s||h?null:Object(l.jsx)(m,{char:s});return Object(l.jsxs)("div",{className:"char__info",children:[x,_,g,N]})},p=c(49),f=c(50),v=c(51),x=c(57),_=function(e){Object(v.a)(c,e);var t=Object(x.a)(c);function c(){var e;Object(p.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(f.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)("h2",{children:Object(l.jsx)(o.a,{})}):this.props.children}}]),c}(c(62).Component),g=c.p+"static/media/vision.067d4ae1.png",N=c(74),k=c(75),y=c(8),w=(c(69),function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.a)(),u=s.loading,j=s.error,h=s.getCharacterByName,b=s.clearError,d=function(e){n(e)},m=j?Object(l.jsx)("div",{className:"char__search-critical-error",children:Object(l.jsx)(o.a,{})}):null,O=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(y.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(N.d,{initialValues:{charName:""},validationSchema:k.a({charName:k.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,b(),h(t).then(d)},children:Object(l.jsxs)(N.c,{children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(N.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:u,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(N.a,{component:"div",className:"char__search-error",name:"charName"})]})}),O,m]})});t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(_,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(_,{children:Object(l.jsx)(b,{onCharSelected:function(e){n(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(_,{children:Object(l.jsx)(O,{charId:c})}),Object(l.jsx)(_,{children:Object(l.jsx)(w,{})})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:g,alt:"vision"})]})}}}]);
//# sourceMappingURL=5.afa1c1fe.chunk.js.map