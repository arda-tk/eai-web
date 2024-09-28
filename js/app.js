let notesNotes = [
    "Multiplying two matrices is easy lol.",
    "To complete the challenge, write a function that multiplies two matrices."
];

let averageNotes = [
    "Explanation here.",
    "Write a variadic macro that averages an arbitrary number of N items        \
                        passed as an input.                                     \
                        <br /><br /><br />                                      \
                        Usage: \"float avg = AVERAGE(2, 5, 1, 7, 14, 3, 25);\"  \
                        <br />                                                  \
                        Output: \"avg --&gt 8.142857\"                          \
                        <br /><br />                                            \
                        or                                                      \
                        <br /><br />                                            \
                        Usage: \"float avg = AVERAGE(7, 7, 5);\"                \
                        <br />                                                  \
                        Output: \"avg --&gt 6.333333\""
];

let notesButton = [
    "Task",
    "Details"
];

let testUser = [
    "aaa@foo.com",
    "sifree000"
];

let counter = 0;

function displayChallengeNotes() {

    document.getElementById("desc").innerHTML = notesNotes[counter];
    document.getElementById("btn").innerHTML = notesButton[counter];  

    counter++;
    counter = counter % 2;
}

function displayAverageNotes() {

    document.getElementById("desc").innerHTML = averageNotes[counter];
    document.getElementById("btn").innerHTML = notesButton[counter];  

    counter++;
    counter = counter % 2;
}

function submitCode() {
    console.log("not implemented yet");
}

function signUp () {
    if(document.getElementById("password") !== document.getElementById("confirmpwd"))
    {
        alert("passwords do not match, please check for typos.");
    }
    else
    {
        alert("successfully registered.");
    }
}

function logIn() {
    if(document.getElementById("email").value === testUser[0]
       &&
       document.getElementById("password").value === testUser[1])
    {
        alert("login successful.");
    }
    else
    {
        alert("login credentials incorrect.");
    }
}