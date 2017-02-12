// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  voltaire = require('bespoke-theme-voltaire'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  backdrop = require('bespoke-backdrop'),
  hash = require('bespoke-hash');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  backdrop(),
  hash()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
