

//##############################################
// const texts = document.querySelector(".texts");

// window.SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.interimResults = true;

// let p = document.createElement("p");


// recognition.addEventListener("result", (e) => {
//     p.classList.add("from-text");
//     texts.appendChild(p);
//     const text = Array.from(e.results)
//         .map((result) => result[0])
//         .map((result) => result.transcript)
//         .join("");

//     p.innerText = text;
//     if (e.results[0].isFinal) {
//         p = document.createElement("p");
//     }
//     $("#chatTextBox").val(e.results[0][0].transcript);
// });

// recognition.addEventListener("end", () => {
//     recognition.start();
// });

// recognition.start();


////

function startDictation() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        var recognition = new webkitSpeechRecognition();
//
        recognition.continuous = false;
        recognition.interimResults = false;
        //recognition.lang = document.querySelector("#select_dialect").value;
        recognition.start();
    
        recognition.onresult = function (e) {
            document.getElementById('transcript').value = e.results[0][0].transcript;
            recognition.stop();
            document.getElementById('labnol').submit();
        };

        recognition.onerror = function (e) {
            recognition.stop();
        };
    }
}
