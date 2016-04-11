/* jshint node:true */
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    cssModules: {
      plugins: [
        require('postcss-import'),
        require('postcss-custom-properties')
      ]
    }
  });

  return app.toTree();
};
