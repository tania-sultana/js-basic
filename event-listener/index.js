let buttons = document.querySelectorAll(".myButton");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let text;
        if (this.classList.contains("a")) {
            text = "a";
        } else if (this.classList.contains("b")) {
            text = "b";
        } else if (this.classList.contains("c")) {
            text = "c";
        } else {
            return; // no valid class
        }

        document.querySelector("h1").innerHTML = text + " is clicked";

        audioPlay(text);
        playAnimation(text);
    });
}
document.addEventListener("keypress", function (event) {
    let text = event.key;
    audioPlay(text);
    playAnimation(text);
});

function audioPlay(text) {
    let audio;

    switch (text) {
        case "a":
            audio = new Audio("audios/a.mp3");
            break;
        case "b":
            audio = new Audio("audios/b.mp3");
            break;
        case "c":
            audio = new Audio("audios/c.mp3");
            break;
        default:
            console.log("No audio found for:", text);
            return;
    }

    audio.play();
}

function playAnimation(text) {
    let selectedButton = document.querySelector("." + text);
    if (selectedButton) {
        selectedButton.classList.add("anim");
        setTimeout(function () {
            selectedButton.classList.remove("anim");
        }, 500);
    }
}

let count = 0;
document.querySelector("textarea").addEventListener("keypress", function (event) 
{
    count++;
    document.querySelector("h1").innerHTML = "You have pressed " + count + " times";
    let text = event.key;
    document.querySelector("p").innerHTML = "You have pressed " + text + " " + count ;
    
});