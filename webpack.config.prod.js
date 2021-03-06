//production config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  devServer: {
    port: 3001,
    inline: false
  },
});
