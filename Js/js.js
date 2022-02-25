
function runSpeechRecognation() {
    var output = document.getElementById("output");
    var action = document.getElementById("action");
    var sonuc = " ";
    var SpeechRecognation = SpeechRecognation || webkitSpeechRecognition;
    var recognation = new SpeechRecognation();
    recognation.lang = "tr-TR";
    recognation.continuous = false;
    recognation.interimResults = false;
    recognation.maxAlternatives = 10;

    recognation.onstart = function () {
        action.textContent = "Dinleniyor...";
    };

    recognation.onspeechend = function () {
        action.textContent = "Dinleme Tamamlandı.";
        recognation.stop();
    }

    recognation.onerror = function () {
        alert("Mikrofon kullanımına izin verin.");
    }

    recognation.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        sonuc += event.results[0][0].transcript + " ";
        console.log(sonuc);
        output.textContent = transcript;
    };

    recognation.start();
}

