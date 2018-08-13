(function () {
    "use strict";
    var config = require('config');
    var mqtt = require('mqtt');
    var mqttUri = config.mqtt.server;
    var mqttTopic = config.mqtt.irTopic;
    var multipleCommandInterval = 500;

    module.exports = {
        power: function() {
          sendMqtt('518075340', 1);
        },

        mute: function() {
          sendMqtt('518076870', 1);
        },

        volup: function (repeat) {
          sendMqtt('518092935', repeat);
        },

        voldown: function (repeat) {
          sendMqtt('518125575', repeat);
        },

        bassup: function (repeat) {
          sendMqtt('518075085', repeat);
        },

        bassdown: function (repeat) {
          sendMqtt('518107725', repeat);
        },

        bass: function() {
          sendMqtt('518115630', 1);
        },

        clearvoice: function() {
          sendMqtt('518077125', 1);
        },
    }

    function sendMqtt(val, repeat) {
      var trame = `IRSend {"Protocol": "NEC","Bits":  32, "Data": ${val}}; Delay 18;`;
      var payload = '';
      for(var times = 0; times < repeat; times++) {
        payload += trame;
      }
      var client  = mqtt.connect(mqttUri)
      client.on('connect', function () {
        client.publish(mqttTopic, payload, {}, function() {
          client.end();
        });
      });
    }
}())
