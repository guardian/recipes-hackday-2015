module.exports = new Speaker();

function Speaker() {
	this.speak = function(text) {
		var msg = new SpeechSynthesisUtterance();
		msg.volume = 1; // 0 to 1
		msg.rate = 0.8; // 0.1 to 10
		msg.pitch = 1; //0 to 2
		msg.text = text;
		msg.lang = 'en-GB';

		window.speechSynthesis.speak(msg);
	};
}