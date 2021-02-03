"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.port = exports.databaseName = exports.databasePassword = exports.databaseUsername = void 0;
var databaseUsername = process.env.DATABASE_USERNAME || '';
exports.databaseUsername = databaseUsername;
var databasePassword = process.env.DATABASE_PASSWORD || '';
exports.databasePassword = databasePassword;
var databaseName = process.env.DATABASE_NAME || 'main';
exports.databaseName = databaseName;
var port = Number(process.env.PORT) || 3000;
exports.port = port;