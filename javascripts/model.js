var ko = require('knockout');
var recipe = require('./recipe');

module.exports = new Model();

function Model() {
	var position = ko.observable(1);

	this.next = function () {
		if (position() < recipe.length) {
			position(position() + 1);
		}
	};
	this.previous = function () {
		if (position() > 0) {
			position(position() - 1);
		}
	};

	this.currentText = ko.computed(function(){
		return recipe[position() -1];
	});
}