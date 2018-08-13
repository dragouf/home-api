/*******************
* Chinese ribbon light (IR)
********************/
(function () {
    "use strict";

    var ribbonLightManager = require('../managers/ribbonLightManager');

    module.exports = {
      on: function (req, res, next) {
        ribbonLightManager.on();
        res.send({result: 'ok'});
        return next();
      },

      off: function (req, res, next) {
        ribbonLightManager.off();
        res.send({result: 'ok'});
        return next();
      },

      lightUp: function (req, res, next) {
        ribbonLightManager.lightUp();
        res.send({result: 'ok'});
        return next();
      },

      lightDown: function (req, res, next) {
        ribbonLightManager.lightDown();
        res.send({result: 'ok'});
        return next();
      },

      color: function (req, res, next) {
        ribbonLightManager.color(req.params.color);
        res.send({result: 'ok'});
        return next();
      },

      lightMode: function (req, res, next) {
        ribbonLightManager.lightMode(req.params.mode);
        res.send({result: 'ok'});
        return next();
      }
    }
}())
