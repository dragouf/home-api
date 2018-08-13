/*************
* Decodeur SFR (IP)
**************/
(function () {
    "use strict";

    var sfrManager = require('../managers/sfrManager');

    module.exports = {
      mosaic: function (req, res, next) {
        sfrManager.mosaic();
        res.send({result: 'ok'});
        return next();
      },
      guide: function (req, res, next) {
        sfrManager.guide();
        res.send({result: 'ok'});
        return next();
      },
      info: function (req, res, next) {
        sfrManager.info();
        res.send({result: 'ok'});
        return next();
      },
      quit: function (req, res, next) {
        sfrManager.quit();
        res.send({result: 'ok'});
        return next();
      },
      playpause: function (req, res, next) {
        sfrManager.playpause();
        res.send({result: 'ok'});
        return next();
      },
      forward: function (req, res, next) {
        sfrManager.forward();
        res.send({result: 'ok'});
        return next();
      },
      rewind: function (req, res, next) {
        sfrManager.rewind();
        res.send({result: 'ok'});
        return next();
      },
      down: function (req, res, next) {
        sfrManager.down();
        res.send({result: 'ok'});
        return next();
      },
      up: function (req, res, next) {
        sfrManager.up();
        res.send({result: 'ok'});
        return next();
      },
      right: function (req, res, next) {
        sfrManager.right();
        res.send({result: 'ok'});
        return next();
      },
      left: function (req, res, next) {
        sfrManager.left();
        res.send({result: 'ok'});
        return next();
      },
      ok: function (req, res, next) {
        sfrManager.ok();
        res.send({result: 'ok'});
        return next();
      },
      key: function (req, res, next) {
        sfrManager.key(req.params.key);
        res.send({result: 'ok'});
        return next();
      },
      zap: function (req, res, next) {
        sfrManager.zap(req.params.number);
        res.send({result: 'ok'});
        return next();
      },
      record: function (req, res, next) {
        sfrManager.record();
        res.send({result: 'ok'});
        return next();
      },
      power: function (req, res, next) {
        sfrManager.power();
        res.send({result: 'ok'});
        return next();
      },
    }
}())
