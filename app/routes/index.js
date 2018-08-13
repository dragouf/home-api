module.exports = function routes(server) {
  var yasController = require('../controllers/yasController');
  var climController = require('../controllers/climController');
  var indexController = require('../controllers/indexController');
  var sfrController = require('../controllers/sfrController');
  var tvController = require('../controllers/tvController');
  var ribbonLightController = require('../controllers/ribbonLightController');

  server.get('/', indexController.index);

  server.get('/yas/power', yasController.power);
  server.get('/yas/mute', yasController.mute);
  server.get('/yas/volup/:val', yasController.volup);
  server.get('/yas/voldown/:val', yasController.voldown);
  server.get('/yas/bassup/:val', yasController.bassup);
  server.get('/yas/bassdown/:val', yasController.bassdown);
  server.get('/yas/bass', yasController.bass);
  server.get('/yas/clearvoice', yasController.clearvoice);

  server.get('/clim/powerOn', climController.powerOn);
  server.get('/clim/powerOff', climController.powerOff);
  server.get('/clim/power', climController.power);
  server.get('/clim/high', climController.high);
  server.get('/clim/medium', climController.medium);
  server.get('/clim/low', climController.low);
  server.get('/clim/up/:val', climController.up);
  server.get('/clim/down/:val', climController.down);
  server.get('/clim/cool', climController.cool);
  server.get('/clim/dry', climController.dry);
  server.get('/clim/fan', climController.fan);
  server.get('/clim/swing', climController.swing);
  server.get('/clim/timer', climController.timer);

  server.get('/tv/powerOn', tvController.powerOn);
  server.get('/tv/powerOff', tvController.powerOff);
  server.get('/tv/source', tvController.source);
  server.get('/tv/start', tvController.start);
  server.get('/tv/stop', tvController.stop);

  server.get('/sfr/mosaic', sfrController.mosaic);
  server.get('/sfr/guide', sfrController.guide);
  server.get('/sfr/info', sfrController.info);
  server.get('/sfr/quit', sfrController.quit);
  server.get('/sfr/ok', sfrController.ok);
  server.get('/sfr/up', sfrController.up);
  server.get('/sfr/down', sfrController.down);
  server.get('/sfr/left', sfrController.left);
  server.get('/sfr/right', sfrController.right);
  server.get('/sfr/play', sfrController.playpause);
  server.get('/sfr/pause', sfrController.playpause);
  server.get('/sfr/forward', sfrController.forward);
  server.get('/sfr/rewind', sfrController.rewind);
  server.get('/sfr/down', sfrController.down);
  server.get('/sfr/up', sfrController.up);
  server.get('/sfr/right', sfrController.right);
  server.get('/sfr/left', sfrController.left);
  server.get('/sfr/ok', sfrController.ok);
  server.get('/sfr/key/:key', sfrController.key);
  server.get('/sfr/record', sfrController.record);
  server.get('/sfr/power', sfrController.power);

  server.get('/sfr/zap/:number', sfrController.zap);

  server.get('/led/on', ribbonLightController.on);
  server.get('/led/off', ribbonLightController.off);
  server.get('/led/lightUp', ribbonLightController.lightUp);
  server.get('/led/lightDown', ribbonLightController.lightDown);
  server.get('/led/color/:color', ribbonLightController.color);
  server.get('/led/lightMode/:mode', ribbonLightController.lightMode);
}
