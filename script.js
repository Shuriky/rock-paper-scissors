console.log("Hello World")

// Generate a random number between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = getRandomInt(2);
    let result = "";
    if (x == 0) {
        result = "rock";
    }
    else if (x == 1) {
        result = "paper";
    }
    else if (x == 2) {
        result = "scissors";
    }
    return result
}

function getHumanChoice() {
    let choice = prompt("Enter your move: (rock/paper/scissors)", "rock");
    choice = choice.toLowerCase();
    console.log(choice);
    return choice
}

function playRound(humanChoice, computerChoice) {
    let result = "";
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            result = "draw";
        }
        else if (computerChoice === "paper") {
            result = "lost";
        }
        else if (computerChoice === "scissors") {
            result = "won";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            result = "won";
        }
        else if (computerChoice === "paper") {
            result = "draw";
        }
        else if (computerChoice === "scissors") {
            result = "lost";
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "lost";
        }
        else if (computerChoice === "paper") {
            result = "won";
        }
        else if (computerChoice === "scissors") {
            result = "draw";
        }
    }
    if (result == "won") {
        return 1
    }
    else if (result == "lost"){
        return -1
    }
    else if (result == "draw") {
        return 0
    }
    return 0
}
let myScore = 1;
while (true) {
    const humanSelection = getHumanChoice();
    if (humanSelection == "exit") {
        alert("Your final score is: " + myScore + ". Congratulation!")
        break;
    }
    const computerSelection = getComputerChoice();

    i = playRound(humanSelection, computerSelection);
    alert("You choose " + humanSelection + ", the bot choose " + computerSelection + ".");
    switch (i) {
        case 1:
        myScore *= 3;
        alert("You won and gained a score! Your score: " + myScore);
        break;

        case -1:
        myScore = 1;
        alert("You lost and your score got reset! Your score: " + myScore);
        break;

        case 0:
        alert("Both of you draw! Your score: " + myScore);
        break;

        default:
        alert("error")
    }
}
//dwawada