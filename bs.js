// ADD THIS IN SCRIPT

// CHANGE DATE HERE
const loveDate = new Date("2024-01-01");

const today = new Date();

const diffTime = today - loveDate;

const daysTogether = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
);

document.getElementById("days").innerHTML =
daysTogether + " Days";

// Typing Effect

const message =
"You're my favorite notification ❤️";

let i = 0;

function typing(){

    if(i < message.length){

        document.getElementById("text").innerHTML +=
        message.charAt(i);

        i++;

        setTimeout(typing,80);
    }
}

typing();

function openLetter(){
    document.getElementById("letterBox")
    .classList.add("active");
}

function closeLetter(){
    document.getElementById("letterBox")
    .classList.remove("active");
}