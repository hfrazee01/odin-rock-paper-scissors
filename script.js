// Used for easy access to game choices
const GameChoices = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors"
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
function playRound(playerSelection, computerSelection) {
    // Check if there is a tie
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === GameChoices.Rock) {  // Check possibilities against Rock
        if (computerSelection === GameChoices.Paper) {  // Rock against Paper
            return 1;
        } else if (computerSelection === GameChoices.Scissors) {  // Rock against Scissors
            return 2;
        }
    } else if (playerSelection === GameChoices.Paper) {  // Check possibilities against Paper
        if (computerSelection === GameChoices.Rock) {  // Paper against Rock
            return 2;
        } else if (computerSelection === GameChoices.Scissors) {  // Paper against Scissors
            return 1;
        }
    } else if (playerSelection === GameChoices.Scissors) {  // Check possibilities against Scissors
        if (computerSelection === GameChoices.Rock) {  // Scissors against Rock
            return 1;
        } else if (computerSelection === GameChoices.Paper) { // Scissors against Paper
            return 2;
        }
    } else {  // Check possibility of wrong entry
        return -1;
    }
}


// Plays 5 rounds of Rock, Paper, Scissors and shows winner
function game() {
    console.log("Welcome to Rock, Paper, Scissors! Let's play!");

    let rounds = 5; // counter for rounds
    let playerWins = 0; // counter for player wins
    let computerWins = 0;  // counter for computer wins

    // loop to play five rounds
    while (rounds > 0) {
        const computerSelection = getComputerChoice();  // stores the computer's choice
        const playerSelection = prompt("Please choose Rock, Paper, or Scissors:");  // prompt for the player's choice
        const formattedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); // format the player's choice
        
        // Play round
        console.log("Rock, Paper, Scissors... Shoot!")
        let result = playRound(formattedPlayerSelection, computerSelection);

        // Interpret the round results (0 = tie, 1 = player loss, 2 = player win)
        if (result === 0) {
            console.log("You must think like a computer. You tied using " + computerSelection);
        } else if (result === 1) {
            console.log("You lose this round! " + computerSelection + " beats " + formattedPlayerSelection);
            computerWins++; // Increase computer win after player loss
        } else if (result === 2) {
            console.log("You win this round! " + formattedPlayerSelection + " beats " + computerSelection);
            playerWins++; // Increase player win after player win
        } else {
            console.log("Sorry. This is not an option! Please try again.");
            rounds++;  // Increase round when wrong option is entered
        }

        rounds--; // decrease number of rounds
    }

    // Interpret game results
    console.log("Game Results!");
    if (playerWins > computerWins) {
        console.log("You win! Score: " + playerWins + ":" + computerWins);
    } else if (playerWins < computerWins) {
        console.log("You lose! Score: " + playerWins + ":" + computerWins);
    } else {
        console.log("You must be as smart as a computer! You tied!");
    }
}

game();
