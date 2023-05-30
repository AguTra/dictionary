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
        note.style.backgroundColor = 'green';



        recognition.onresult = function (e) {
            document.getElementById('transcript').value = e.results[0][0].transcript;
            recognition.stop();
            back = document.getElementById('probando-sobreescribir').innerText = 'Translate text'
            const note = document.querySelector('.sobreescribir-color');
            note.style.backgroundColor = 'blue';
            //alert("se escucho")
        };

        recognition.onerror = function (e) {
            edit = document.getElementById('probando-sobreescribir').innerText = 'ERROR, try again'
            const note = document.querySelector('.sobreescribir-color');
            note.style.backgroundColor = 'red';
            //alert("Error")
            recognition.stop();
        };

        recognition.nomatch = function (e) {
            edit = document.getElementById("probando-sobreescribir").innerText = "ERROR, try again"
            const note = document.querySelector('.sobreescribir-color');
            note.style.backgroundColor = 'red';
            //alert("no-Match")
            recognition.stop();
        }

        // recognition.onend = function (e) {
        //     edit = document.getElementById("probando-sobreescribir").innerText = "ERROR, try again"
        //     const note = document.querySelector('.sobreescribir-color');
        //     note.style.backgroundColor = 'red';
        //     alert("onend")
        // }

        // recognition.onspeechend = () => {
        //     recognition.stop();
        //     edit = document.getElementById("probando-sobreescribir").innerText = "ERROR, try again"
        //     const note = document.querySelector('.sobreescribir-color');
        //     note.style.backgroundColor = 'red';
        //     //alert("No se reconocio voz, por favor trate de nuevo");
        // };

    }
}


