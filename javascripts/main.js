'use strict';

var recipe = require('./recipe');
var ko = require('knockout');
var voiceListen = require('./voiceListen');
var speaker = require('./speaker');

voiceListen.register('next', function() {
    window.alert('next!')
});

voiceListen.register('previous', function() {
    window.alert('back!')
});

voiceListen.call();

speaker.speak('Hello, world! This is the voice API');