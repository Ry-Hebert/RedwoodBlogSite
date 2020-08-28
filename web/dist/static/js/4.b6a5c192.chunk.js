(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{456:
/*!**********************************************!*\
  !*** ./src/layouts/BlogLayout/BlogLayout.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */1),l=n.n(a),r=n(/*! @redwoodjs/router */28),u=r.routes,c=r.Link;t.a=function(e){var t=e.children;return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("div",{class:"logo"},l.a.createElement("h1",null,l.a.createElement(c,{to:u.home()},"Developing in the Woods"))),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c,{to:u.home()},"Blog Posts"))))),l.a.createElement("main",null,t))}},457:
/*!*********************************************!*\
  !*** ./src/components/BlogPost/BlogPost.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */1),l=n.n(a),r=n(/*! @redwoodjs/router */28);t.a=function(e){var t=e.post;return l.a.createElement("article",{key:t.id},l.a.createElement("header",null,l.a.createElement("h2",null,l.a.createElement(r.Link,{to:r.routes.blogPost({id:t.id})},t.title))),l.a.createElement("p",null,t.body),l.a.createElement("time",null,"Posted at: ",t.createdAt))}},465:
/*!****************************************************!*\
  !*** ./src/pages/HomePage/HomePage.js + 1 modules ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime-corejs3/core-js/instance/map.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime-corejs3/helpers/taggedTemplateLiteral.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@redwoodjs/web/dist/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/BlogPost/BlogPost.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/layouts/BlogLayout/BlogLayout.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/graphql-tag/src/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(456),u=n(65),c=n.n(u),o=n(452),i=n.n(o),s=n(82),m=n(83),E=n.n(m),d=(n(28),n(457));function v(){var e=i()(["\n  query BlogPostsQuery {\n    posts {\n      id\n      title\n      body\n      createdAt\n    }\n  }\n"]);return v=function(){return e},e}var f=E()(v()),p=Object(s.withCell)({QUERY:f,Loading:function(){return l.a.createElement("div",null,"Loading...")},Empty:function(){return l.a.createElement("div",null,"Empty")},Failure:function(e){var t=e.error;return l.a.createElement("div",null,"Error: ",t.message)},Success:function(e){var t=e.posts;return c()(t).call(t,(function(e){return l.a.createElement(d.a,{key:e.id,post:e})}))}});t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(p,null))}}}]);
//# sourceMappingURL=4.b6a5c192.chunk.js.map