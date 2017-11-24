'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('../db.json');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const db = console.log(JSON.parse(JSON.stringify(centers)));
/**
 *
 */
var CenterController = function () {
  function CenterController() {
    _classCallCheck(this, CenterController);
  }

  _createClass(CenterController, null, [{
    key: 'create',

    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {json} returns created center
     */
    value: function create(req, res) {

      if (!req.body.name) return res.status(400).json({ message: 'center name is required' });
      if (!req.body.date) return res.status(400).json({ message: 'date is required' });
      if (!req.body.address) return res.status(400).json({ message: 'address is required' });

      var newId = _db2.default.length + 1;
      var newCenter = new Center(newId, req.body.name, req.body.address, req.body.capacity);
      store.centers.push(newCenter);
      res.status(201).json(newCenter);
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
      return res.status(200).json(store.centers);
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {json} returns a single center by id
     */

  }, {
    key: 'get',
    value: function get(req, res) {
      var singleCenter = store.centers.find(function (centers) {
        return centers.id === Number(req.params.centerId);
      });
      return res.status(200).json(singleCenter);
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns {json} returns the updated center object
     */

  }, {
    key: 'update',
    value: function update(req, res) {
      var singleCenter = store.centers.find(function (centers) {
        return centers.id === Number(req.params.centerId);
      });
      if (singleCenter === null || singleCenter === undefined) {
        return res.status(404).json({ message: 'Center doesnot exist' });
      }
      singleCenter.name = req.body.name;
      singleCenter.address = req.body.address;

      var pos = store.centers.map(function (event) {
        return event.id;
      }).indexOf(singleCenter.id);
      store.centers[pos] = singleCenter;
      return res.status(200).json(store.centers[pos]);
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
      var singleCenter = store.centers.find(function (center) {
        return center.id === Number(req.params.centerId);
      });
      if (singleCenter === null || singleCenter === undefined) {
        return res.status(404).json({ message: 'Center doesnot exist' });
      }
      var centerPos = store.centers.map(function (center) {
        return center.id;
      }).indexOf(req.params.centerId);
      store.centers.splice(centerPos, 1);
      res.status(200).json({ message: 'Center was successfully deleted' });
    }
  }]);

  return CenterController;
}();

exports.default = CenterController;