(function () {
    "use strict";
    var config = require('config');
    var mqtt = require('mqtt');
    var mqttUri = config.mqtt.server;
    var mqttTopic = config.mqtt.irTopic;

    module.exports = {
        on: function() {
          sendMqtt('16236607');
        },

        off: function() {
          sendMqtt('16203967');
        },

        lightUp: function () {
            sendMqtt('16187647');
        },

        lightDown: function () {
          sendMqtt('16220287');
        },

        color: function (color) {
          color = color.replace('en', '').trim();
          switch(color) {
            case 'rouge': sendMqtt('16195807'); break;
            case 'orange foncé': sendMqtt('16191727'); break;
            case 'orange': sendMqtt('16199887'); break;
            case 'orange clair': sendMqtt('16189687'); break;
            case 'jaune': sendMqtt('16195807'); break;

            case 'vert': sendMqtt('16228447'); break;
            case 'vert foncé': sendMqtt('16224367'); break;
            case 'bleu': sendMqtt('16232527'); break;
            case 'turquoise': sendMqtt('16222327'); break;
            case 'bleu foncé': sendMqtt('16230487'); break;

            case 'bleu lagon': sendMqtt('16212127'); break;
            case 'bleu océan': sendMqtt('16208047'); break;
            case 'violet': sendMqtt('16216207'); break;
            case 'violet clair': sendMqtt('16206007'); break;
            case 'rose': sendMqtt('16214167'); break;

            case 'white': sendMqtt('16244767'); break;
          }
        },

        lightMode: function (val) {
          switch(color) {
            case 'flash': sendMqtt('16240687'); break;
            case 'strobe': sendMqtt('16248847'); break;
            case 'fondu': sendMqtt('16238647'); break;
            case 'doux': sendMqtt('16197847'); break;
          }
        }
    }

    function sendMqtt(val, repeat) {
      repeat = repeat || 1;
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
