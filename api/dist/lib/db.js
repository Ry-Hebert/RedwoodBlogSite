"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.db = void 0;

var _client = require("@prisma/client");

// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.
const db = new _client.PrismaClient();
exports.db = db;