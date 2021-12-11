'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  stats: 'minimal',
  entry: {
    index: './src/index.js',
  },
  output: {
    clean: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 是否代码压缩和模块合并
  optimization: {
    minimize: true,
    concatenateModules: true,
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
};
