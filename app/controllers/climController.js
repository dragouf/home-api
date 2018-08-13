/**************************************************
* Klarstein Metrobreeze 9 New York air conditioner (IR)
***************************************************/
(function () {
    "use strict";

    var climManager = require('../managers/climManager');

    module.exports = {
      powerOn: function (req, res, next) {
        climManager.powerOn().then(() => {
          res.send({result: 'ok'});
          return next();
        });
      },

      powerOff: function (req, res, next) {
        climManager.powerOff().then(() => {
          res.send({result: 'ok'});
          return next();
        });
      },

      power: function (req, res, next) {
        climManager.power();
        res.send({result: 'ok'});
        return next();
      },

      high: function (req, res, next) {
        climManager.high();
        res.send({result: 'ok'});
        return next();
      },

      medium: function (req, res, next) {
        climManager.medium();
        res.send({result: 'ok'});
        return next();
      },

      low: function (req, res, next) {
        climManager.low();
        res.send({result: 'ok'});
        return next();
      },

      up: function (req, res, next) {
        climManager.up(req.params.val);
        res.send({result: 'ok'});
        return next();
      },

      down: function (req, res, next) {
        climManager.down(req.params.val);
        res.send({result: 'ok'});
        return next();
      },

      cool: function (req, res, next) {
        climManager.cool();
        res.send({result: 'ok'});
        return next();
      },

      dry: function (req, res, next) {
        climManager.dry();
        res.send({result: 'ok'});
        return next();
      },

      fan: function (req, res, next) {
        climManager.fan();
        res.send({result: 'ok'});
        return next();
      },

      swing: function (req, res, next) {
        climManager.swing();
        res.send({result: 'ok'});
        return next();
      },

      timer: function (req, res, next) {
        climManager.timer();
        res.send({result: 'ok'});
        return next();
      },
    }
}())
