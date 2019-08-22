const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const prodConfig = {
  mode: 'production',
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'react'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'react-dom'
    }
  }
}

module.exports = merge([baseConfig, prodConfig])