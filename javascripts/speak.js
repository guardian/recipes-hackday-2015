module.exports = speak;

function speak() {
    if (!window.speechSynthesis) {
        window.alert('This client does not support speech synthesis');
    }

    const utterance = new SpeechSynthesisUtterance('Hello world');
    speechSynthesis.speak(utterance);
}