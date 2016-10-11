'use strict';

const config = require('./webpack.config');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

exports = merge.smart(config, {
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /(node_modules\/(?!bluecore-ui-kit))/,
      loader: 'react-hot!babel'
    }, {
      test: /\.coffee/,
      loader: 'react-hot!coffee'
    }]
  },

  devServer: {
    port: 8083,
    historyApiFallback: true
  },

  devtool: 'source-map'
});

module.exports = validate(exports, {
  rules: {
    'no-root-files-node-modules-nameclash': false
  }
});
