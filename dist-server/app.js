"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes"));

var _users = _interopRequireDefault(require("./routes/users"));

var _http = require("http");

var _env = require("./env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.use('/', _routes["default"]);
app.use('/users', _users["default"]);
var server = (0, _http.createServer)(app);
server.listen(_env.port, '0.0.0.0');
server.on('listening', function () {
  console.log('Express src started on port %s at %s', server.address().port, server.address().address);
});