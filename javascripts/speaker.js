module.exports = new Speaker();

function Speaker() {
	var self = this;

	self.speak = function(text) {
		self.cancel;
		window.speechSynthesis.speak(new Sentence(text));
	};

	self.cancel = window.speechSynthesis.cancel;
}

function Sentence(text) {
	var sentence = new SpeechSynthesisUtterance(text);
	sentence.lang = 'en-US';
	return sentence;
}