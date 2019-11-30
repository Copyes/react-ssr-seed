const NODE_ENV = 'NODE_ENV';
const DEV_ENV = 'development';
const PROD_ENV = 'production';

module.exports = {
  setDev() {
    process.env[NODE_ENV] = DEV_ENV;
  },
  setProd() {
    process.env[NODE_ENV] = PROD_ENV;
  },
  isDev() {
    return process.env[NODE_ENV] === DEV_ENV;
  },
  isProd() {
    return process.env[NODE_ENV] === PROD_ENV;
  }
}