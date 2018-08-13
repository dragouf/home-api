Home Api
=========

some simple commands to send to your home automation.
All IR commands are sent by MQTT to a tasmota device with IR led.

TV and SFR use IP network, all other are IR commands.

See app/routes/index.js to find all possible requests.

quick start
===========

```sh
$ vi config/default.js
```

```sh
$ npm install
$ npm start
```
