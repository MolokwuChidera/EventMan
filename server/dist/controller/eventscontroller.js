'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../db.json');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const db = console.log(JSON.parse(JSON.stringify(data)));


/**
 *
 */
var EventController = function () {
  function EventController() {
    _classCallCheck(this, EventController);
  }

  _createClass(EventController, null, [{
    key: 'create',
    value: function create(req, res) {
      if (!req.body.name) return res.status(400).json({ message: 'center name is required' });
      if (!req.body.date) return res.status(400).json({ message: 'date is required' });
      if (!req.body.address) return res.status(400).json({ message: 'address is required' });

      var newId = _db2.default.length + 1;
      var newdata = new Event(newId, req.body.name, req.body.date, req.body.address);
      _db2.default.push(newdata);
      res.status(201).json(newdata);
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {json} returns a list of all centers
     */

  }, {
    key: 'getAll',
    value: function getAll(req, res) {
      return res.status(200).json(_db2.default);
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {json} returns a single center by id
     */
    // static get(req, res) {
    //   const singleCenter = records.centers.find(center => center.id === Number(req.params.centerId));
    //   return res.status(200).json(singleCenter);
    // }

    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {json} returns the updated center object
     */

  }, {
    key: 'update',
    value: function update(req, res) {
      var oneEvent = _db2.default.find(function (data) {
        return data.id === Number(req.params.dataId);
      });
      if (oneEvent === null || oneEvent === undefined) {
        return res.status(404).json({ message: 'Event does not exist' });
      }
      oneEvent.name = req.body.name;
      oneEvent.date = req.body.date;
      oneEvent.center = req.body.center;

      var position = _db2.default.map(function (data) {
        return data.id;
      }).indexOf(oneEvent.id);
      _db2.default[position] = oneEvent;
      return res.status(200).json(_db2.default[position]);
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {json} returns message object
     */

  }, {
    key: 'delete',
    value: function _delete(req, res) {
      var oneEvent = _db2.default.find(function (data) {
        return data.id === Number(req.params.dataId);
      });
      if (oneEvent === null || oneEvent === undefined) {
        return res.status(404).json({ message: 'Event does not exist' });
      }
      var position = ents.map(function (data) {
        return data.id;
      }).indexOf(req.params.dataId);
      _db2.default.splice(position, 1);
      res.status(200).json({ message: 'Event was successfully deleted' });
    }
  }]);

  return EventController;
}();

exports.default = EventController;