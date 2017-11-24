'use strict';

var _eventscontroller = require('../controller/eventscontroller');

var _eventscontroller2 = _interopRequireDefault(_eventscontroller);

var _centerscontroller = require('../controller/centerscontroller');

var _centerscontroller2 = _interopRequireDefault(_centerscontroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  app.get('/api', function (req, res) {
    return res.status(200).send({
      message: 'Welcome to the Events API!'
    });
  });

  app.post('/api/events', _eventscontroller2.default.create);
  //app.get('/api/events/:eventsId', eventscontroller.retrieve);
  app.get('/api/events/', _eventscontroller2.default.getAll);
  app.put('/api/events/:eventsId', _eventscontroller2.default.update);
  app.delete('/api/events/:eventsId', _eventscontroller2.default.delete);

  app.post('/api/centers', _centerscontroller2.default.create);
  // app.get('/api/centers/:centersId', eventscontroller.retrieve);
  app.get('/api/events/', _eventscontroller2.default.getAll);
  app.put('/api/centers/:eventsId', _eventscontroller2.default.update);
  app.delete('/api/centers/:eventsId', _eventscontroller2.default.delete);
};