'use strict';

var recipe = require('./recipe');
var ko = require('knockout');
var voiceListen = require('./voiceListen');
var speaker = require('./speaker');
var model = require('./model');

voiceListen.register('next', function() {
	console.log('next');
	model.next();
});

voiceListen.register('previous', function() {
    console.log('previous');
    model.previous();
});

voiceListen.register('repeat', function() {
	console.log('repeat');
	speaker.speak(model.currentText());
});

voiceListen.call();

ko.computed(function() {
	var currentText = model.currentText();
	speaker.speak(currentText);
});