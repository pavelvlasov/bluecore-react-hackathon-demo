'use strict';

const path = require('path');
const validate = require('webpack-validator');

exports = {
  entry: path.resolve('./src/index.js'),

  output: {
    path: path.resolve('./dist'),
    publicPath: '/dist/',
    filename: 'app.bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.coffee'],
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules/bluecore-ui-kit/lib')
    ]
  },

  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel'
    }, {
      test: /\.coffee/, loader: 'coffee'
    }, {
      test: /\.scss/,
      exclude: /\.use\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.woff2?$/,
      loader: 'url?limit=5000&name=[name].[hash:6].[ext]'
    }]
  }
};

module.exports = validate(exports);
