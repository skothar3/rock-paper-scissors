
// Function to acquire a random selection of rock, paper or scissors for the computer and return it
function getComputerChoice() {
    let rdmSelection = Math.floor(Math.random()*3) + 1;
    return rdmSelection < 2 ? "rock" : rdmSelection < 3 ? "paper" : "scissors";
    
}

// Function to prompt and accept a user's selection of rock, paper or scissors and return it
function getPlayerChoice(e) {
    // Initialize str variable to store player choice from input
    let playerChoice; 
    
    // Conditions to parse input and assign playerChoice value
    if(e.type === 'keydown') {
        if(e.key === "r") {
            playerChoice = 'rock';
        } else if(e.key === "p") {
            playerChoice = 'paper';
        } else if(e.key === "s") {
            playerChoice = 'scissors';
        } else playerChoice = 'none';
    } else if(e.type === 'click') {
        if(e.target.className.includes('rock')) {
            playerChoice = 'rock';
        } else if(e.target.className.includes('paper')) {
            playerChoice = 'paper';
        } else if(e.target.className.includes('scissors')) {
            playerChoice = 'scissors';
        } else playerChoice = 'none';
    } else playerChoice = 'none';

    // Return playerChoice to play a round of the game
    return playerChoice;
}
function updateScore(result) {
    // Get score and commentary element nodes
    const playerID = document.querySelector("#playerScore");
    const computerID = document.querySelector("#computerScore");
    const commentaryID = document.querySelector("#commentary");

    // Parse numerical scores from raw text
    let playerScore = parseInt(playerID.textContent);
    let computerScore = parseInt(computerID.textContent);

    // Update score and commentary based on the round result
    if(result ==='T') {
        commentaryID.textContent = `Tie game, try again...`;
    }
    else if(result === 'W') {
        playerID.textContent = `${++playerScore}`;
        commentaryID.textContent = `You win this round...`;
    } else if(result === 'L') {
        computerID.textContent = `${++computerScore}`;
        commentaryID.textContent = `Too bad you lost...`;}
    // Conditions to declare winner and reset game scores once the player or computer reach 5 points
    if(playerScore === 5) {
        commentaryID.textContent = `I don't believe it... you've beaten the computers!! Huzzah!`;
        playerID.textContent = `${0}`;
        computerID.textContent = `${0}`;
    } else if(computerScore === 5) {
        commentaryID.textContent = `The computers have won again... humanity is in peril :(`;
        playerID.textContent = `${0}`;
        computerID.textContent = `${0}`;
    } 
}

// Function to simulate a single round of a rock, paper, scissors game between the computer and a user
// Returns a W, L, or T str depending on the result
function getRoundResult(playerChoice,computerChoice) {

    // Initialize str variable to contain round result (win, loss, tie)
    let result;

    // Condition for a tie game
    if(playerChoice === computerChoice) {
        result = 'T';
    // Conditions for other scenarios
    } else {
        if(playerChoice === "rock") {
            if(computerChoice === "paper") {
                result = 'L';
            } else {
                result = 'W';
            }
        } else if(playerChoice === "paper") {
            if(computerChoice === "rock") {
                result = 'W';
            } else {
                result = 'L';
            }
        } else {
            if(computerChoice === "rock") {
                result = 'L';
            } else {
                result = 'W';
            }
    }}
    return result;
}
function playRound(e) {
    let playerChoice = getPlayerChoice(e);
    
    if(playerChoice === 'none') return;
    else {
        document.querySelector(`.section1 button.${playerChoice}`).classList.toggle('chosen');
        let roundResult = getRoundResult(playerChoice,getComputerChoice());

        updateScore(roundResult);
        
        document.querySelector(`.section1 button.${playerChoice}`).classList.toggle('chosen');
    }
    // Add class 'chosen' to the corresponding button for transform effect
    
}
// Receive player input via keydown (r, p, or s)
window.addEventListener('keydown',playRound);


// Receive player input via clickable buttons (R, P, or S)
const choices = document.querySelector('.section1 .buttonContainer');
choices.addEventListener('click', playRound);
