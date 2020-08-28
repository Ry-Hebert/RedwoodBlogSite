(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{187:
/*!****************************************************!*\
  !*** ./src/pages/FatalErrorPage/FatalErrorPage.js ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/Routes.js (referenced with import()) */function(e,n,t){"use strict";t.r(n);var a=t(/*! react */1),o=t.n(a);n.default=function(){return o.a.createElement("main",null,o.a.createElement("style",{dangerouslySetInnerHTML:{__html:'\n              html, body {\n                margin: 0;\n              }\n              html * {\n                box-sizing: border-box;\n              }\n              main {\n                display: flex;\n                align-items: center;\n                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;\n                text-align: center;\n                background-color: #E2E8F0;\n                height: 100vh;\n              }\n              section {\n                background-color: white;\n                border-radius: 0.25rem;\n                width: 32rem;\n                padding: 1rem;\n                margin: 0 auto;\n                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n              }\n              h1 {\n                font-size: 2rem;\n                margin: 0;\n                font-weight: 500;\n                line-height: 1;\n                color: #2D3748;\n              }\n            '}}),o.a.createElement("section",null,o.a.createElement("h1",null,o.a.createElement("span",null,"Something went wrong"))))}},427:
/*!**************************!*\
  !*** ./src/scaffold.css ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,n,t){},428:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,n,t){},451:
/*!**********************************!*\
  !*** ./src/index.js + 1 modules ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@redwoodjs/router/dist/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@redwoodjs/web/dist/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/pages/FatalErrorPage/FatalErrorPage.js (<- Module is referenced from these modules with unsupported syntax: ./src/Routes.js (referenced with import())) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),l=t(181),r=t.n(l),i=t(82),m=t(187),s=t(28);const u={name:"AboutPage",loader:()=>t.e(/*! import() */9).then(t.bind(null,/*! ./src/pages/AboutPage/AboutPage */459))},d={name:"BlogPostPage",loader:()=>Promise.all(/*! import() */[t.e(0),t.e(3)]).then(t.bind(null,/*! ./src/pages/BlogPostPage/BlogPostPage */463))},c={name:"EditPostPage",loader:()=>Promise.all(/*! import() */[t.e(0),t.e(5)]).then(t.bind(null,/*! ./src/pages/EditPostPage/EditPostPage */464))},g={name:"HomePage",loader:()=>Promise.all(/*! import() */[t.e(0),t.e(4)]).then(t.bind(null,/*! ./src/pages/HomePage/HomePage */465))},p={name:"NewPostPage",loader:()=>Promise.all(/*! import() */[t.e(0),t.e(6)]).then(t.bind(null,/*! ./src/pages/NewPostPage/NewPostPage */466))},h={name:"NotFoundPage",loader:()=>t.e(/*! import() */10).then(t.bind(null,/*! ./src/pages/NotFoundPage/NotFoundPage */460))},b={name:"PostPage",loader:()=>Promise.all(/*! import() */[t.e(0),t.e(7)]).then(t.bind(null,/*! ./src/pages/PostPage/PostPage */461))},P={name:"PostsPage",loader:()=>Promise.all(/*! import() */[t.e(0),t.e(8)]).then(t.bind(null,/*! ./src/pages/PostsPage/PostsPage */462))};var E=function(){return o.a.createElement(s.Router,null,o.a.createElement(s.Route,{path:"/blog-post/{id:Int}",page:d,name:"blogPost"}),o.a.createElement(s.Route,{path:"/posts/new",page:p,name:"newPost"}),o.a.createElement(s.Route,{path:"/posts/{id:Int}/edit",page:c,name:"editPost"}),o.a.createElement(s.Route,{path:"/posts/{id:Int}",page:b,name:"post"}),o.a.createElement(s.Route,{path:"/posts",page:P,name:"posts"}),o.a.createElement(s.Route,{path:"/about",page:u,name:"about"}),o.a.createElement(s.Route,{path:"/",page:g,name:"home"}),o.a.createElement(s.Route,{notfound:!0,page:h}))};t(427),t(428);r.a.render(o.a.createElement(i.FatalErrorBoundary,{page:m.default},o.a.createElement(i.RedwoodProvider,null,o.a.createElement(E,null))),document.getElementById("redwood-app"))}},[[451,2,0]]]);
//# sourceMappingURL=app.1ebe5922.chunk.js.map