let notesNotes = [
    "Multiplying two matrices is easy lol.",
    "To complete the challenge, write a function that multiplies two matrices."
];

let notesButton = [
    "Task",
    "Details"
];

let counter = 0;

function displayChallengeNotes() {

    document.getElementById("desc").innerHTML = notesNotes[counter];
    document.getElementById("btn").innerHTML = notesButton[counter];  

    counter++;
    counter = counter % 2;
}

function submitCode() {
    console.log("not implemented yet");
}

function signUp () {
    console.log(document.getElementById("password").innerHTML);
    console.log(document.getElementById("confirmpwd").innerHTML);
}

function logIn() {
    console.log("not implemented yet");
}