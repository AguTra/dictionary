function startDictation() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        var recognition = new webkitSpeechRecognition();
        //
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = document.querySelector("#select_dialect").value;
        recognition.start();
        trear = document.getElementById('probando-sobreescribir').innerText = 'Listening'
        const note = document.querySelector('.sobreescribir-color');
        note.style.backgroundColor = 'red';



        recognition.onresult = function (e) {
            document.getElementById('transcript').value = e.results[0][0].transcript;
            recognition.stop();
            back = document.getElementById('probando-sobreescribir').innerText = 'Translate text'
            const note = document.querySelector('.sobreescribir-color');
            note.style.backgroundColor = 'blue';
            document.getElementById('labnol').submit();
        };

        recognition.onerror = function (e) {
            edit = document.getElementById('probando-sobreescribir').innerText = 'Translate text'
            const note = document.querySelector('.sobreescribir-color');
            note.style.backgroundColor = 'blue';
            recognition.stop();
        };
    }
}


