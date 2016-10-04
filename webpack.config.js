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
    root: path.resolve('./src')
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
    }]
  }
};

module.exports = validate(exports);
