'use strict';

var recipe = require('./recipe');
var ko = require('knockout');
var voiceListen = require('./voiceListen');
var speaker = require('./speaker');
var model = require('./model');

voiceListen.register(['next', 'continue'], function() {
	console.log('next');
	model.next();
});

voiceListen.register(['previous', 'back'], function() {
    console.log('previous');
    model.previous();
});

voiceListen.register(['repeat', 'what', 'again'], function() {
	console.log('repeat');
	speaker.speak(model.currentText());
});

voiceListen.call();

ko.computed(function() {
	var currentText = model.currentText();
	speaker.speak(currentText);
});

ko.applyBindings(model, document.body);

// If device supports it, stop standby
if (window.navigator.requestWakeLock) {
	window.navigator.requestWakeLock('screen');
}