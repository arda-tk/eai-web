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
    "test@example.com",
    "password123"
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

function signUp(event) {
    if(event)
    {
        event.preventDefault();
    }

    const email = document.getElementById("email").value;
    const pwd = document.getElementById("password").value;
    const cpwd = document.getElementById("confirmpwd").value;


    fetch('https://yjnlwskyyxfmqmbk3zqhrzpssm0wurmx.lambda-url.us-east-1.on.aws/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        if(pwd !== cpwd)
            {
                alert("passwords do not match, please check for typos.");
            }
            else
            {
                alert("successfully registered.");
                window.location.href = "../index.html";
            }
    })
    .catch(error => console.error('Error:', error));
    
}

function logIn(event) {
    if(event)
    {
        event.preventDefault();
    }
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    fetch('https://yjnlwskyyxfmqmbk3zqhrzpssm0wurmx.lambda-url.us-east-1.on.aws/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success)
        {
            alert("Login successful.");
            window.location.href = "../index.html";
        }
        else
        {
            alert("Invalid credentials.");
        }
    })
    .catch(error => console.error('Error:', error));
}
