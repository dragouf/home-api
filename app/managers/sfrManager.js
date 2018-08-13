(function () {
    "use strict";

    var config = require('config');
    const WebSocket = require('ws');
    var mqtt = require('mqtt');
    var mqttUri = config.mqtt.server;
    var mqttTopic = config.mqtt.irTopic;

    const _buttonEventmappings = {
        "VUP": 308,
        "VDOWN": 307,
        "RIGHT": 222,
        "LEFT": 293,
        "UP": 297,
        "DOWN": 294,
        "PUP": 290,
        "PDOWN": 291,
        "INFO": 301,
        "RETURN": 27,
        "OK": 13,
        "NUMBER": "THIRDARGUMENT_UTF8DECIMALCODE",
        "PLAYPAUSE": 306,
        "FORWARD": 305,
        "REWIND": 304,
        "MUTE": 302,
        "POWER": 303
    }

    const _appKeymappings = {
        "MOSAIC": "Mosaic",
        "TVGUIDE": "Epg",
        "VOD": "Vod",
        "REPLAY": "Replay",
        "RECORDING": "Pvr",
        "MEDIACENTER": "MediaCenter",
        "SETTINGS": "Settings",
    }

    const _keyboardEventmappings = {
        "SEARCH": 32,
        "VALUE": "THIRDARGUMENT_UTF8DECIMALCODE",
    }

    const _mappings = {
      // use _buttonEventmappings for the value. In case of NUMBER get a third argument as a value
      "BUTTONEVENT": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Action":"ButtonEvent","Press":[0],"DeviceModel":"iPhone"}},
      // no conversion for the value, just a digit
      "ZAP": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Params":["0","zapdigit"],"Action":"CustomEvent","DeviceModel":"iPhone","Event":"GotoLive"}},
      // use _appKeymappings for the value
      "APP": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Action":"GotoApp","AppName":"","DeviceModel":"iPhone","DeviceId":"375CC21F-2E8D-4C31-B728-7790E6D24BD0"}},
      // use number between 1 and 100
      "SETVOLUME": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","IsMute":false,"Action":"SetVolume","DeviceModel":"iPhone","Level":"12"}},
      // keyboard mode (for example when in search input). Use special key search else use third argument value converted to utf8 decimal code
      "KEYBOARD": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Action":"KeyboardEvent","Press":[32],"DeviceModel":"iPhone"}},
      // special packet to ask for STB7 device current state information
      "GETINFO": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Action":"GetSessionsStatus","DeviceModel":"iPhone","DeviceId":"375CC21F-2E8D-4C31-B728-7790E6D24BD0"}},
      "GETVERSION": {"Params":{"Token":"LAN","DeviceSoftVersion":"11.2.2","Action":"GetVersions","DeviceModel":"iPhone","DeviceId":"375CC21F-2E8D-4C31-B728-7790E6D24BD0"}}
  }

    module.exports = {
        power: function(number) {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['POWER']
          sendWS(_mappings['BUTTONEVENT']);
        },
        mosaic: function() {
          _mappings['APP']["Params"]["AppName"] = _appKeymappings['MOSAIC'];
          sendWS(_mappings['APP']);
        },
        guide: function() {
          _mappings['APP']["Params"]["AppName"] = _appKeymappings['TVGUIDE'];
          sendWS(_mappings['APP']);
        },
        info: function() {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['INFO']
          sendWS(_mappings['BUTTONEVENT']);
        },
        quit: function() {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['RETURN']
          sendWS(_mappings['BUTTONEVENT']);
        },
        playpause: function() {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['PLAYPAUSE']
          sendWS(_mappings['BUTTONEVENT']);
        },
        forward: function() {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['FORWARD']
          sendWS(_mappings['BUTTONEVENT']);
        },
        rewind: function() {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['REWIND']
          sendWS(_mappings['BUTTONEVENT']);
        },
        down: function() {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['DOWN']
          sendWS(_mappings['BUTTONEVENT']);
        },
        up: function() {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['UP']
          sendWS(_mappings['BUTTONEVENT']);
        },
        right: function() {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['RIGHT']
          sendWS(_mappings['BUTTONEVENT']);
        },
        left: function() {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['LEFT']
          sendWS(_mappings['BUTTONEVENT']);
        },
        ok: function() {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = _buttonEventmappings['OK']
          sendWS(_mappings['BUTTONEVENT']);
        },
        key: function(key) {
          _mappings['BUTTONEVENT']["Params"]["Press"][0] = key.charCodeAt(0);
          sendWS(_mappings['BUTTONEVENT']);
        },
        zap: function(number) {
          _mappings['ZAP']["Params"]["Params"][0] = parseInt(number);
          sendWS(_mappings['ZAP']);
        },
        record: function() {
          sendMqtt('2160007654', 1);
        },
    }

    function sendWS(trame) {
      //console.log("sending...:", trame);
      const ws = new WebSocket(config.sfr.stbUri, {protocol: 'lws-bidirectional-protocol'});

      ws.on('open', function open() {
        ws.send(JSON.stringify(trame));
      });
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
