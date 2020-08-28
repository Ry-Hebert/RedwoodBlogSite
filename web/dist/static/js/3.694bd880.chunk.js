(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{456:
/*!**********************************************!*\
  !*** ./src/layouts/BlogLayout/BlogLayout.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */1),r=n.n(a),l=n(/*! @redwoodjs/router */28),c=l.routes,u=l.Link;t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{class:"logo"},r.a.createElement("h1",null,r.a.createElement(u,{to:c.home()},"Developing in the Woods"))),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u,{to:c.home()},"Blog Posts"))))),r.a.createElement("main",null,t))}},457:
/*!*********************************************!*\
  !*** ./src/components/BlogPost/BlogPost.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! react */1),r=n.n(a),l=n(/*! @redwoodjs/router */28);t.a=function(e){var t=e.post;return r.a.createElement("article",{key:t.id},r.a.createElement("header",null,r.a.createElement("h2",null,r.a.createElement(l.Link,{to:l.routes.blogPost({id:t.id})},t.title))),r.a.createElement("p",null,t.body),r.a.createElement("time",null,"Posted at: ",t.createdAt))}},463:
/*!************************************************************!*\
  !*** ./src/pages/BlogPostPage/BlogPostPage.js + 1 modules ***!
  \************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime-corejs3/helpers/taggedTemplateLiteral.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@redwoodjs/web/dist/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/BlogPost/BlogPost.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/layouts/BlogLayout/BlogLayout.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/graphql-tag/src/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=(n(28),n(456)),c=n(452),u=n.n(c),i=n(82),o=n(83),m=n.n(o),d=n(457);function s(){var e=u()(["\n  query($id: Int!) {\n    post(id: $id) {\n      id\n      title\n      body\n      createdAt\n    }\n  }\n"]);return s=function(){return e},e}var E=m()(s()),v=Object(i.withCell)({QUERY:E,Loading:function(){return r.a.createElement("div",null,"Loading...")},Empty:function(){return r.a.createElement("div",null,"Empty")},Failure:function(e){var t=e.error;return r.a.createElement("div",null,"Error: ",t.message)},Success:function(e){var t=e.post;return r.a.createElement(d.a,{post:t})}});t.default=function(e){var t=e.id;return r.a.createElement(l.a,null,r.a.createElement(v,{id:t}))}}}]);
//# sourceMappingURL=3.694bd880.chunk.js.map