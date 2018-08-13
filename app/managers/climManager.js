(function () {
    "use strict";
    var config = require('config');
    var mqtt = require('mqtt');
    var mqttUri = config.mqtt.server;
    var mqttTopic = config.mqtt.irTopic;
    var mqttPlugTopic = 'cmnd/prise1/POWER';
    var multipleCommandInterval = 500;

    module.exports = {
        powerOn: function() {
          sendPlugMqtt('ON');
          return new Promise(function(resolve, reject) {
            setTimeout(() => {
              sendMqtt('149356799', 1);
              resolve();
            }, 2000);
          });
        },

        powerOff: function() {
          sendMqtt('149356799', 1);
          return new Promise(function(resolve, reject) {
            setTimeout(() => {
              sendPlugMqtt('OFF');
              resolve();
            }, 4000);
          });
        },

        power: function() {
          sendMqtt('149356799', 1);
        },

        high: function() {
          sendMqtt('149383319', 1);
        },

        medium: function () {
          sendMqtt('149385359', 1);
        },

        low: function () {
          sendMqtt('149377199', 1);
        },

        up: function (val) {
          sendMqtt('149399639', val);
        },

        down: function (val) {
          sendMqtt('149401679', val);
        },

        cool: function() {
          sendMqtt('149366999', 1);
        },

        dry: function() {
          sendMqtt('149369039', 1);
        },

        fan: function() {
          sendMqtt('149360879', 1);
        },

        swing: function() {
          sendMqtt('149381279', 1);
        },

        timer: function() {
          sendMqtt('149389439', 1);
        },
    }

    function sendMqtt(val, repeat) {
      var trame = `IRSend {"Protocol": "NEC","Bits":  32, "Data": ${val}}; Delay 10;`;
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

    function sendPlugMqtt(payload) {
      var client  = mqtt.connect(mqttUri)
      client.on('connect', function () {
        client.publish(mqttPlugTopic, payload, {}, function() {
          client.end();
        });
      });
    }
}())
