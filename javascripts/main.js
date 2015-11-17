'use strict';

var recipe = require('./recipe');
var speak = require('./speak');
var ko = require('knockout');
var voiceListen = require('./voiceListen');

voiceListen('stop', function() {
    window.alert('stop!')
});

console.log(JSON.stringify(recipe));

speak();