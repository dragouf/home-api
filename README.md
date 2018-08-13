Home Api
=========

some simple commands to send to your home automation.  
All IR commands are sent by MQTT to a tasmota device with IR led.

TV and SFR use IP network, all other are IR commands send to MQTT IR Device (an esp8266 chip running on tasmota firmware).

See app/routes/index.js to find all possible requests.

quick start
===========

```sh
$ mv config/default.example.js config/default.js
$ vi config/default.js
```

```sh
$ npm install
$ npm start
```
