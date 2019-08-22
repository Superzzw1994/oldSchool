const baseConfig = require('./webpack.config.js');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = {
  mode: 'development',
  plugins: [new htmlWebpackPlugin({
    template: './index.html'
  })]
}

module.exports = merge([baseConfig, devConfig])