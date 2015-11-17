var voiceListen = {}

voiceListen.registry = {}

voiceListen.register = function(key, callback){
    voiceListen.registry[key] = callback;
    return true;
}

voiceListen.call = function() {    
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.start();

    recognition.onresult = function (event) {
        var lastResult = event.results[event.results.length - 1];
        var transcript = lastResult[0].transcript;
        var words = transcript.split(' ');
        var lastWord = words[words.length -1];
        if(Object.keys(voiceListen.registry).indexOf(lastWord.trim()) !== -1) {
            var key = lastWord.trim()
            console.log("key:")
            console.log(key)
            console.log("callback:")
            console.log(voiceListen.registry[key])
            voiceListen.registry[key]();
        }
    };
}


module.exports = voiceListen;
