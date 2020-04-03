const webpack = require('webpack');
const config = require('..wenpack.server.config');
const constant = require('./constant');

const localIP = process.argv[process.argv.length - 1] || 'localhost';
// compile mode
config.mode = 'development'; 
// the babel mode
process.env.BABEL_MODE = 'node';

const compiler = webpack(config);

const watching = compiler.watch({
  aggregateTimeout: 300,
  ignored: /node_modules/,
  poll: 2000,
  'info-verbosity': 'verbose'
}, (err, stats) => {
  let jsonStats = stats.toJson('minimal');
  if(jsonStats.errors) {
    jsonStats.errors.forEach((error) => console.log(error));
  }
  if(jsonStats.warnings) {
    jsonStats.warnings.forEach(warning => console.log(warning));
  }
  // compiling finished
  console.log(constant.SVR_CODE_COMPLETED);
});

compiler.hooks.done.tap('done', (data) => {
  console.log('\n server code done');
});

process.stdin.on('data', (data) => {
  if(data.toString === 'exit') {
    process.exit();
  }
});

