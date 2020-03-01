const localIP = process.argv[process.argv.length - 1]; // 获取本地ip地址
const { nsPort } = require('../../src/share/config');

global._LOCAL_IP_ = localIP;

require('./free-port')(nsPort);
require('../../dist/server/app.js');

