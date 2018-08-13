module.exports = {
    app: {
      name: 'homeapi',
      version: '1.0.0'
    },
    server: {
      port: 3001
    },
    mqtt: {
      server: 'mqtt://192.168.1.12',
      irTopic: 'cmnd/bridge/Backlog'
    },
    sfr: {
      stbUri: 'ws://192.168.1.73:7682'
    },
    tv: {
      macAddress: 'f8:1a:51:42:91:fe',
      samsungUri: 'ws://192.168.1.18:8001/api/v2/channels/samsung.remote.control?name=homeapi'
    }
};
