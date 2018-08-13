/************
* Samsung TV (IP)
**************/
(function () {
    "use strict";

    var tvManager = require('../managers/tvManager');
    var sfrManager = require('../managers/sfrManager');
    var yasManager = require('../managers/yasManager');

    module.exports = {
      powerOn: function (req, res, next) {
        tvManager.powerOn();
        res.send({result: 'ok'});
        return next();
      },
      powerOff: function (req, res, next) {
        tvManager.powerOff();
        res.send({result: 'ok'});
        return next();
      },
      source: function (req, res, next) {
        tvManager.changeSource();
        res.send({result: 'ok'});
        return next();
      },
      start: function (req, res, next) {
        // switch on tv
        tvManager.powerOn();
        // switch on sound
        yasManager.power();
        // switch on sfr
        sfrManager.power();

        var differed = new Promise(function(resolve, reject) {
          setTimeout(() => {
            // send 2
            sfrManager.zap(2);
            // change source
            tvManager.changeSource();
            resolve();
          }, 2000);
        });

        differed.then(()=>{
          res.send({result: 'ok'});
          return next();
        });
      },
      stop: function (req, res, next) {
        // switch on tv
        tvManager.powerOff();
        // switch on sound
        yasManager.power();
        // switch on sfr
        sfrManager.power();

        res.send({result: 'ok'});
        return next();
      },
    }
}())
