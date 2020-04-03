const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('../src/share/config');

const resolvePath = pathStr => path.resolve(__dirname, pathStr);

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'node',
  entry: resolvePath('../src/server/app.js'),
  output: {
    filename: 'app.js',
    path: resolvePath('../dist/server')
  },
  externals: [nodeExternals()],
  moduel: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          emitFile: false,
          name: isProd ? 'img/[name].[hash:8].[ext]' : 'img/[name].[ext]',
          publicPath: isProd ? '/' : `http://${__LOCAL_IP__}:${config.wdsPort}`
        }
      }
    }]
  },
  plugins:[
    new webpack.DefinePlugin({
    'process.env': { NODE_ENV: `"${process.env.NODE_ENV}"`},
    '__IS_PROD__':isProd,
    '__SERVER__': true
    })
  ],
  resolve: {
      alias: {
          //定义dist 目录别名，方便导入模块
          '@dist': resolvePath('../dist')
      }
  }
}