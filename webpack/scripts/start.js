const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const spawnSync = require('cross-spawn');
//监听client server文件 change时用babel编译该文件
const chokidar = require('chokidar');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const env = require('./env');

const args = process.argv;

const isDevByWdsServer = () => process.env.EnvDevByWds;

env.setDev();
