// Used for easy access to game choices
const GameChoices = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors"
}

// Helper variables
let computerSelection = "";
let playerSelection = "";
let computerWins = 0;
let playerWins = 0;
let buttons = document.querySelectorAll("button");
let winner = false;

function displayResults(result) {
    // Interpret the round results (0 = tie, 1 = player loss, 2 = player win)
    let messageHTML = document.querySelector(".message");
    let computerScoreHTML = document.querySelector(".computer-wins");
    let playerScoreHTML = document.querySelector(".player-wins");

    if (result === 0) {
        messageHTML.textContent = "You must think like a computer. You tied using " + computerSelection;
    } else if (result === 1) {
        messageHTML.textContent = "You lose this round! " + computerSelection + " beats " + playerSelection;
        computerWins++; // Increase computer win after player loss
        computerScoreHTML.textContent = computerWins;
    } else if (result === 2) {
        messageHTML.textContent = "You win this round! " + playerSelection + " beats " + computerSelection;
        playerWins++; // Increase player win after player win
        playerScoreHTML.textContent = playerWins;
    } else {
        messageHTML.textContent = "Sorry. This is not an option! Please try again.";
    }
}

// Gets the choice of the computer
function getComputerChoice() {
    // randomize the choice
    const numChoice = Math.round(Math.random() * 2) + 1;

    // associate possible random values with possible choices
    if (numChoice === 1) {
        return GameChoices.Rock;
    } else if (numChoice === 2) {
        return GameChoices.Paper;
    } else if (numChoice === 3) {
        return GameChoices.Scissors;
    }
}

// Plays one round of Rock, Paper, Scissors
function playRound(playerChoice) {
    computerSelection = getComputerChoice();
    playerSelection = playerChoice;

    if (!winner) {
        // Check if there is a tie
        if (playerSelection === computerSelection) {
            displayResults(0);
        } else if (playerSelection === GameChoices.Rock) {  // Check possibilities against Rock
            if (computerSelection === GameChoices.Paper) {  // Rock against Paper
                displayResults(1);
            } else if (computerSelection === GameChoices.Scissors) {  // Rock against Scissors
                displayResults(2);
            }
        } else if (playerSelection === GameChoices.Paper) {  // Check possibilities against Paper
            if (computerSelection === GameChoices.Rock) {  // Paper against Rock
                displayResults(2);
            } else if (computerSelection === GameChoices.Scissors) {  // Paper against Scissors
                displayResults(1);
            }
        } else if (playerSelection === GameChoices.Scissors) {  // Check possibilities against Scissors
            if (computerSelection === GameChoices.Rock) {  // Scissors against Rock
                displayResults(1);
            } else if (computerSelection === GameChoices.Paper) { // Scissors against Paper
                displayResults(2);
            }
        } else {  // Check possibility of wrong entry
            displayResults(-1);
        }
    }
    
    if (computerWins === 5 || playerWins === 5) {
        checkGameResults();
    }
    
    playAnimation();
}

function checkGameResults() {
    let messageHTML = document.querySelector(".message");

    if (computerWins === 5) {
        messageHTML.textContent = "YOU LOST!"
    } else if (playerWins === 5) {
        messageHTML.textContent = "YOU WIN!"
    }
    winner = true;
}

function playAnimation() {
    let messageHTML = document.querySelector(".animation");
    let textAnimation = ["Rock", "Paper", "Scissors", "Shoot!"];
    let textCounter = 0;

    let interval = setInterval(() => {
        messageHTML.textContent = textAnimation[textCounter];
        textCounter++;
        if (textCounter >= textAnimation.length) clearInterval(interval);
    }, 1000);
}

// Event listeners
buttons.forEach(button => button.addEventListener("click", () => {
    let image = button.querySelector("img");
    playRound(image.alt);
}));

window.onload(playAnimation());
