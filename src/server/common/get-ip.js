const os = require('os');

const getNetworkAddr = () => {
  const netInterface = os.networkInterfaces();
  for(const name of Object.keys(netInterface)) {
    for(const obj of netInterface[name]) {
      const {address, internal, family} = obj;
      if(family === 'IPV4' && !internal) {
        return address;
      }
    }
  }
}
module.exports = getNetworkAddr;