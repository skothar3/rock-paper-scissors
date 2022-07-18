
// Function to acquire a random selection of rock, paper or scissors for the computer and return it
function getComputerChoice() {
    let rdmSelection = Math.floor(Math.random()*3) + 1;
    return rdmSelection < 2 ? "rock" : rdmSelection < 3 ? "paper" : "scissors";
}

// Function to prompt and accept a user's selection of rock, paper or scissors and return it
function getPlayerChoice() {
    let playerChoice = prompt("Make a choice: rock, paper, or scissors","rock");
    if(playerChoice.toLowerCase() != "rock" && playerChoice.toLowerCase() != "paper" && playerChoice.toLowerCase() != "scissors") {
        alert("Invalid selection!");
        getPlayerChoice();
    }
    return playerChoice.toLowerCase();
}

// Function to simulate a single round of a rock, paper, scissors game between the computer and a user
// Returns a 0 or 1 depending on who won the round
function playRound(playerSelection,computerSelection) {

    // Condition for a tie game
    if(playerSelection === computerSelection) {
        alert("It's a tie!");
        return null
    // Conditions for other scenarios
    } else {
        if(playerSelection === "rock") {
            if(computerSelection === "paper") {
                alert("Computer wins! Paper beats rock.");
                return 0;
            } else {
                alert("You win! Rock beats scissors.");
                return 1;
            }
        } else if(playerSelection === "paper") {
            if(computerSelection === "rock") {
                alert("You win! Paper beats rock.");
                return 1;
            } else {
                alert("Computer wins! Scissors beat paper.");
                return 0;
            }
        } else {
            if(computerSelection === "rock") {
                alert("Computer wins! Rock beats scissors.");
                return 0;
            } else {
                alert("You win! Scissors beat paper.");
                return 1;
            }
    }}
}

// Function to simulate a round of 5 games (best 3/5) between the computer and a user
// Returns the result of each game, the final result and score
function game() {
    let playerScore = 0;
    let computerScore = 0;

    let gameCount = 1;
    
    while(gameCount < 6) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let winOrLose = playRound(playerChoice,computerChoice);
        if(winOrLose != null) {
            winOrLose === 1 ? playerScore++ : computerScore++;
            gameCount++;
        }
        alert("Current score: You - " + playerScore + " Computer - " + computerScore);
    }

    if(playerScore < computerScore) {
        alert("You lost the game! Final score: You - " + playerScore + " Computer - " + computerScore);
    } else {
        alert("You won the game! Final score: You - " + playerScore + " Computer - " + computerScore);
    }
}

game();