//array with questions and answers
var questions = [
    ["What year will SilkSong Release?", 0, "2025", "2026", "2125"],
    ["What were followers of Caravaggio called?", 2, "Chiarscurists", "Tenebrists", "Caravaggisti"],
    ["What color is the flag of a bad sign in a person?", 1, "orange", "red", "yellow"]
];

var count = 0;

//Creates play game button
function loadPlayGameButton() {
    const buttonHTML = '<button id="playButton" onclick="playGame()">Play Game</button>';
    document.getElementById('prompt').innerHTML = buttonHTML;
}

// Function to start the game
function playGame() {
    //restarts when there are no more questions
    if (questions.length === 0) {
        document.getElementById('prompt').innerHTML = '<button onclick="location.reload()">Restart Game</button>';
        return;
    }

    // Get the current question
    const currentQuestion = questions.shift();  // gets and removes first question
    const questionText = currentQuestion[0];    // Text for question
    const correctAnswerIndex = currentQuestion[1]; // finds correct index pos for questions

    // Display the question
    document.getElementById('question').innerText = questionText;

    //Generates answer list
    let answersHTML = '';
    for (let i = 2; i < currentQuestion.length; i++) {
        answersHTML += `<li><a href="#" onclick="checkAnswer(${i - 2}, ${correctAnswerIndex})">${currentQuestion[i]}</a></li>`;
    }
    document.getElementById('answers').innerHTML = answersHTML;

    //prompts user to click answer
    document.getElementById('prompt').innerText = "Click the best answer!";
}

//Checks user answer
function checkAnswer(selectedIndex, correctIndex) {
    let feedback = '';
    if (selectedIndex === correctIndex) {
        feedback = 'Correct! Well done.';
    } else {
        feedback = 'Incorrect! Try again.';
    }

    alert(feedback);  //displays on page feedback

    //reloads game
    if (questions.length > 0) {
        playGame();
    } else {
        //dispay restart button if no more questions are left
        document.getElementById('prompt').innerHTML = '<button onclick="location.reload()">Restart Game</button>';
    }
}

//initial call to start game
loadPlayGameButton();