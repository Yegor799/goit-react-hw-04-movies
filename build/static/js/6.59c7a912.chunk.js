(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{40:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return i}));var n=c(32),a=c(0),l=c(8),s=c(33),r=(c(36),c(1));function i(){var e=Object(a.useState)(null),t=Object(n.a)(e,2),c=t[0],i=t[1],o=Object(a.useState)(null),u=Object(n.a)(o,2),j=u[0],b=u[1];console.log(j);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.e(c).then(b)},children:[Object(r.jsx)("label",{htmlFor:"",children:Object(r.jsx)("input",{type:"text",onChange:function(e){console.log(e.target.value),i(e.target.value)}})}),Object(r.jsx)("button",{children:"Search"})]}),Object(r.jsx)("ul",{className:"MovieGallery",children:j&&j.results.map((function(e){return Object(r.jsx)("li",{className:"MovieGalleryItem",children:Object(r.jsx)(l.b,{to:"movies/".concat(e.id),children:Object(r.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"",className:"MovieGalleryItem-image"})})},e.id)}))})]})}}}]);
//# sourceMappingURL=6.59c7a912.chunk.js.map