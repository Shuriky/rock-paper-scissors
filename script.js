console.log("Hello World")

// Generate a random number between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

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

