const express = require('express');
var router = express.Router();

var Centers = require('../models/centers.js');

/* GET /todos listing. */
router.get('/', function (req, res, next) {
    Centers.find(function (err, centers) {
        if (err) return next(err);
        res.json(centers);
    });
});

/* POST /centers */
router.post('/', function (req, res, next) {
    Centers.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /tcenters/id */
router.get('/:id', function (req, res, next) {
    Centers.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /centers/:id */
router.put('/:id', function (req, res, next) {
    Centers.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /centers/:id */
router.delete('/:id', function (req, res, next) {
    Centers.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;