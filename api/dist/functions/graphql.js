"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.handler = void 0;

var _api = require("@redwoodjs/api");

var schemas_po_sdl_js = _interopRequireWildcard(require("../graphql/posts.sdl"));

var services_po_posts_js = _interopRequireWildcard(require("../services/posts/posts"));

var _db = require("../lib/db");

let schemas = {};
schemas.po_sdl_js = schemas_po_sdl_js;
let services = {};
services.po_posts_js = services_po_posts_js;
const handler = (0, _api.createGraphQLHandler)({
  schema: (0, _api.makeMergedSchema)({
    schemas,
    services: (0, _api.makeServices)({
      services
    })
  }),
  db: _db.db
});
exports.handler = handler;