function runSpeechRecognation() {
    var output = document.getElementById("output");
    var action = document.getElementById("action");
    var sonuc = " ";
    var SpeechRecognation = SpeechRecognation || webkitSpeechRecognition;
    var recognation = new SpeechRecognation();
    recognation.lang = "tr-TR";
    recognation.continuous = false;

    recognation.onstart = function () {
        action.textContent = "Dinleniyor...";
    };

    recognation.onspeechend = function () {
        action.textContent = "Dinleme Tamamlandı.";
        recognation.stop();
    }

    recognation.onerror = function () {
        alert("Mikrofon kullanımına izin verin.");
        action.textContent = "Hata Oluştu.";
    }

    recognation.onresult = function (event) {
        let transcript = event.results[0][0].transcript;
        output.textContent = transcript;
    }
    recognation.start();
}
