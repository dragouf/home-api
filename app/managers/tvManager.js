(function () {
    "use strict";

    var config = require('config');
    const WebSocket = require('ws');
    var wol = require('wol');
    //var btoa = require('btoa');

    module.exports = {
        powerOff: function() {
          sendKey('KEY_POWER');
        },
        powerOn: function() {
          wol.wake(config.tv.macAddress);
        },
        changeSource: function() {
          sendKey('KEY_SOURCE');
        },
        control: function(key) {
          sendKey(key);
        }
    }

    function sendKey(key) {
      var payload = {
          "method": "ms.remote.control",
          "params": {
              "Cmd": "Click",
              "DataOfCmd": key,
              "Option": "false",
              "TypeOfRemote": "SendRemoteKey"
          }
      };
      sendWS(payload);
    }

    function sendWS(trame) {
      //console.log("sending...:", trame);
      const ws = new WebSocket(config.tv.samsungUri);

      ws.on('open', function open() {
        //console.log('tv ws connection opened');
      });

      ws.on('message', function incoming(data) {
        var parsedData = JSON.parse(data);
        if(parsedData.event === 'ms.channel.connect') {
          //console.log('connected ! sending:', trame);
          ws.send(JSON.stringify(trame));
        }

        //console.log(data);
      });
    }
}())
