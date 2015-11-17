'use strict';

var recipe = require('./recipe');
var speak = require('./speak');
var ko = require('knockout');
var voiceListen = require('./voiceListen');
var lodash = require('lodash');

voiceListen.register('next', function() {
    window.alert('next!')
});

voiceListen.register('previous', function() {
    window.alert('back!')
});

voiceListen.call()

