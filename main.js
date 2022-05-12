speech_recognition = window.webkitSpeechRecognition;

recognition = new speech_recognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    var speakdata = "Taking your selfie in 10 seconds";
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function() {
        takeSnapShot();
        save();
    }, 10000);
}

Webcam.set(function(data_uri) {
    document.getElementById("camera").innerHTML = '<img id="live" src="' + data_uri + '">';
});

function takeSnapShot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="' + data_uri + '">';
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}