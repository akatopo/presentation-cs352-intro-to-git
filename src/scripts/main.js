// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var multimedia = require('bespoke-multimedia');
var extern = require('bespoke-extern');
var theme = require('bespoke-theme-build-wars');
var backdrop = require('bespoke-backdrop');
var fullscreen = require('bespoke-fullscreen');
var progress = require('bespoke-progress');

// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
  theme(),
  classes(),
  nav(),
  scale(),
  bullets('li, .bullet'),
  hash(),
  multimedia(),
  backdrop(),
  fullscreen(),
  progress(),
  extern(bespoke)
]);

require('prismjs');
require('prismjs/components/prism-git');
