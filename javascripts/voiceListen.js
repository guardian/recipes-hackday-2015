module.exports = voiceListen;

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;
recognition.start();

function voiceListen(key, callback) {
    recognition.onresult = function (event) {
        var lastResult = event.results[event.results.length - 1];
        var transcript = lastResult[0].transcript;
        var words = transcript.split(' ');
        var lastWord = words[words.length -1];

        console.log(lastWord, lastResult[0].confidence);
    };
}