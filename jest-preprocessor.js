const coffee = require('coffee-script');
const babel = require('babel-core');
require('babel-register');

module.exports = {
  process: function(src, path) {
    if (path.match(/\.(s?css|gif)/)) {
      return '';
    }
    if (coffee.helpers.isCoffee(path)) {
      return coffee.compile(src, {'bare': true});
    }
    if ((path.indexOf('node_modules') === -1) &&
      babel.util.canCompile(path)) {
      return babel.transform(src, {
        filename: path,
        babelrc: true
      }).code;
    }
    return src;
  }
};
