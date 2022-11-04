const CleanCSS = require('clean-css');

module.exports = {
  cssmin: code => {
    return new CleanCSS({}).minify(code).styles;
  },
}
