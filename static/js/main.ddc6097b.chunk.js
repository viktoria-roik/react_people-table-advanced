(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(26),n=c(8),a=(c(36),c(37),c(3)),r=(c(38),c(9)),l=c.n(r),i=c(1),o=function(){var e=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(n.c,{to:"/",className:e,children:"Home"}),Object(i.jsx)(n.c,{to:"/people",className:e,children:"People"})]})})})},j=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(5),b=c(0),u=(c(40),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),h=c(4),p=c(7),x="https://mate-academy.github.io/react_people-table/api/people.json";function O(e){return new Promise((function(t){return setTimeout(t,e)}))}function m(){return(m=Object(p.a)(Object(h.a)().mark((function e(){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O(500).then((function(){return fetch(x)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f="f",v="m",N=["16","17","18","19","20"],g=function(e){var t=e.person,c=t.sex,s=t.name,a=t.slug,r=Object(n.d)(),o=Object(d.a)(r,1)[0];return Object(i.jsx)("td",{children:Object(i.jsx)(n.b,{to:"../".concat(a,"?").concat(o.toString()),state:{personSlug:a},className:l()({"has-text-danger":c===f}),children:s})})},y=function(e){var t=e.person,c=e.selectedPerson,s=t.sex,n=t.born,a=t.died,r=t.mother,o=t.father,j=t.motherName,d=t.fatherName,b=t.slug;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":c===b}),children:[Object(i.jsx)(g,{person:t}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),r?Object(i.jsx)(g,{person:r}):Object(i.jsx)("td",{children:j||"-"}),o?Object(i.jsx)(g,{person:o}):Object(i.jsx)("td",{children:d||"-"})]},b)},w=c(15),S=c(27);function k(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(d.a)(e,2),s=t[0],n=t[1];null===n?c.delete(s):Array.isArray(n)?(c.delete(s),n.forEach((function(e){c.append(s,e)}))):c.set(s,n)})),c.toString()}var L=["children","params"],C=function(e){var t=e.children,c=e.params,s=Object(S.a)(e,L),a=Object(n.d)(),r=Object(d.a)(a,1)[0];return Object(i.jsx)(n.b,Object(w.a)(Object(w.a)({to:{search:k(r,c)}},s),{},{children:t}))},P=function(e){var t=e.people,c=Object(a.q)().personSlug,s=void 0===c?"":c,r=Object(n.d)(),o=Object(d.a)(r,1)[0],j=o.get("sort"),b=o.get("order"),u=function(e){return null===j&&null===b||j===e&&null===b?e:null},h=function(e){return null===j&&null===b?null:j===e&&null===b?"desc":null};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(i.jsx)(C,{params:{sort:u("name"),order:h("name")},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":"desc"===b&&"name"===j})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(i.jsx)(C,{params:{sort:u("sex"),order:h("sex")},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":"desc"===b&&"sex"===j})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(i.jsx)(C,{params:{sort:u("born"),order:h("born")},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":"desc"===b&&"born"===j})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(i.jsx)(C,{params:{sort:u("died"),order:h("died")},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas fa-sort",{"fa-sort-up":"desc"===b&&"died"===j})})})})]})}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(y,{person:e,selectedPerson:s},e.slug)}))})]})},A=c(10),F=function(){var e=Object(n.d)(),t=Object(d.a)(e,2),c=t[0],s=t[1],a=c.get("sex"),r=c.getAll("centuries"),o=c.get("query");return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)(C,{className:l()({"is-active":null===a}),params:{sex:null},children:"All"}),Object(i.jsx)(C,{className:l()({"is-active":a===v}),params:{sex:v},children:"Male"}),Object(i.jsx)(C,{className:l()({"is-active":a===f}),params:{sex:f},children:"Female"})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:o,onChange:function(e){s(k(c,{query:e.target.value||null}))}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:N.map((function(e){var t=r.includes(e)?r.filter((function(t){return t!==e})):[].concat(Object(A.a)(r),[e]);return Object(i.jsx)(C,{"data-cy":"century",className:l()("button","mr-1",{"is-info":r.includes(e)}),params:{centuries:t},children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(C,{"data-cy":"centuryALL",className:"button is-success is-outlined",params:{centuries:null},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)("a",{className:"button is-link is-outlined is-fullwidth",href:"#/people",children:"Reset all filters"})})]})};function E(e,t,c){return"string"===typeof e&&"string"===typeof t&&null===c?e.localeCompare(t):"string"===typeof e&&"string"===typeof t&&"desc"===c?t.localeCompare(e):"number"===typeof e&&"number"===typeof t&&null===c?e-t:t-e}var _=function(){var e=Object(b.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(b.useState)(!1),r=Object(d.a)(a,2),l=r[0],o=r[1],j=Object(b.useState)(!1),h=Object(d.a)(j,2),p=h[0],x=h[1],O=Object(n.d)(),g=Object(d.a)(O,1)[0],y=g.getAll("centuries")||N,S=g.get("query"),k=g.get("order"),L=g.get("sort");Object(b.useEffect)((function(){o(!0),function(){return m.apply(this,arguments)}().then(s).catch((function(){return x(!0)})).finally((function(){return o(!1)}))}),[]);var C=function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),s=e.find((function(e){return e.name===t.fatherName}));return Object(w.a)(Object(w.a)({},t),{},{mother:c,father:s})}))}(c),A=C.filter((function(e){return g.toString().includes(v)?e.sex===v:g.toString().includes(f)?e.sex===f:e})).filter((function(e){return 0!==y.length?y.includes(Math.ceil(e.born/100).toString()):e})).filter((function(e){var t,c;return null!==S?e.name.toLowerCase().includes(S.toLowerCase())||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(S.toLowerCase()))||(null===(c=e.fatherName)||void 0===c?void 0:c.toLowerCase().includes(S.toLowerCase())):e})).sort((function(e,t){return"name"===L?E(e.name,t.name,k):"sex"===L?E(e.sex,t.sex,k):"born"===L?E(e.born,t.born,k):"died"===L?E(e.died,t.died,k):0})),_=!c.length&&!l&&!p,q=!l&&!A.length;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!l&&Object(i.jsx)(F,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[l&&Object(i.jsx)(u,{}),p&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),_&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),q&&Object(i.jsx)("p",{children:"There are no people matching the current search criteria"}),!l&&Object(i.jsx)(P,{people:A})]})})]})})]})},q=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},M=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(a.d,{children:[Object(i.jsx)(a.b,{path:"/",element:Object(i.jsx)(j,{})}),Object(i.jsx)(a.b,{path:"/people",children:Object(i.jsx)(a.b,{path:":personSlug?",element:Object(i.jsx)(_,{})})}),Object(i.jsx)(a.b,{path:"/home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsx)(a.b,{path:"*",element:Object(i.jsx)(q,{})})]})})})]})};Object(s.createRoot)(document.getElementById("root")).render(Object(i.jsx)(n.a,{children:Object(i.jsx)(M,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ddc6097b.chunk.js.map