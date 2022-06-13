const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true,
    host: 'localhost',
  },
});
