'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var path = require('path');
var bodyParser = require('body-parser');
// Set up the express app
var app = (0, _express2.default)();

// import events from "./routes/events";
// import centersfrom "./routes/centers";

// Log requests to the console.
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
//app.get('*', (req, res) => res.status(200).send({
//    message: 'Welcome to the beginning of nothingness.',
//}));

// app.use(express.static(path.join(__dirname, '../template')));
// // Require static assets from template folder
// app.use('../template', express.static(path.join(__dirname + '../template')));

// // view engine setup
// app.set('views', path.join(__dirname, '../template'));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// //app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('Welcome to Event Manager');
});

//app.use('/centers', centers);
//app.use('/events', events);
app.listen(3000, function () {

  console.log('Listening on 3000');
});

(0, _routes2.default)(app);
module.exports = app;