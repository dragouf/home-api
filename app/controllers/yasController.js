/**************************
* Yamaha sound bar YAS-105 (IR)
****************************/
(function () {
    "use strict";

    var yasManager = require('../managers/yasManager');

    module.exports = {
      power: function (req, res, next) {
        yasManager.power();
        res.send({result: 'ok'});
        return next();
      },

      mute: function (req, res, next) {
        yasManager.mute();
        res.send({result: 'ok'});
        return next();
      },

      volup: function (req, res, next) {
        yasManager.volup(req.params.val);
        res.send({result: 'ok'});
        return next();
      },

      voldown: function (req, res, next) {
        yasManager.voldown(req.params.val);
        res.send({result: 'ok'});
        return next();
      },

      bassup: function (req, res, next) {
        yasManager.bassup(req.params.val);
        res.send({result: 'ok'});
        return next();
      },

      bassdown: function (req, res, next) {
        yasManager.bassdown(req.params.val);
        res.send({result: 'ok'});
        return next();
      },

      bass: function (req, res, next) {
        yasManager.bass();
        res.send({result: 'ok'});
        return next();
      },

      clearvoice: function (req, res, next) {
        yasManager.clearvoice();
        res.send({result: 'ok'});
        return next();
      }
    }
}())
