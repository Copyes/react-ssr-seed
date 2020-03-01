const { spawn } = require('child_process');
const chalk = require('chalk');
const { SVR_CODE_COMPLETED } = require('./constant');

const { nsPort } = require('../../src/share/config');
const log = console.log;

const getIp = require('../../src/server/common/get-ip');
const localHostIP = getIp();

log(chalk.blue('servers start listening...'));

// client watch
const clientWatchProcess = spawn('npm', ['run', 'wds:watch', localHostIP], {
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

// server watch
const serverWatchProcess = spawn('npm', ['run', 'svr:watch'], {
  shell: process.platform === 'win32'
})

let nodeServerProcess = null;

const startNodeServer = () => {
  nodeServerProcess && nodeServerProcess.kill();
  nodeServerProcess = spawn('node', ['./webpack/scripts/svr-dev-server.js'], {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });
}

const print = (data) => {
  let str = data.toString();
  if(str.indexOf(SVR_CODE_COMPLETED) > -1) {
    startNodeServer();
  } else {
    log(chalk.red(str));
  }
}

const killChild = () => {
  serverWatchProcess && serverWatchProcess.kill();
  nodeServerProcess && serverWatchProcess.kill();
  clientWatchProcess && clientWatchProcess.kill();
}

serverWatchProcess.stdout.on('data', print);

process.on('close', (res) => {
  log(chalk.red(`the master process closed, ${res}`));
  killChild();
})

process.on('exit', (res) => {
  log(chalk.red(`the master process exited, ${res}`));
  killChild();
})
// 非正常推出
process.on('SIGINT', () => {
  serverWatchProcess.stdin.write('exit', (error) => {
    console.log('server watcher process exited!');
  });
  killChild();
})