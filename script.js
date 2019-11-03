let computerScore = 0;
let playerScore = 0;


const playerOptions = document.querySelectorAll('.selections');
const gameDisplay = document.querySelector('#gameDisplay');
const userScoreDisplay = document.querySelector('#userScore');
const computerScoreDisplay = document.querySelector('#computerScore');

const choiceImages = document.querySelectorAll('.itemDisplay');
const rock = choiceImages[0];
const paper = choiceImages[1];
const scissors = choiceImages[2];


const userCounter = document.createElement('P');
const computerCounter = document.createElement('P');
userScoreDisplay.appendChild(userCounter);
computerScoreDisplay.appendChild(computerCounter);
userScoreDisplay.appendChild(playerImage);
computerScoreDisplay.appendChild(computerImage);


const finalScoreDisplay = document.createElement('P');
const newGameButton = document.createElement('Button');
newGameButton.innerText = "New Game?";
const h2 = document.querySelector('H2');
const finalScore = document.querySelector('#finalScore');

function computerPlay() {
    // Allows computer to randomly select rock, paper or scissors for game play
    let options = ['rock', 'paper', 'scissors'];
    let selection = options[Math.floor(Math.random() * options.length)];
    return selection;
}

function playerComparison(playerSelection, computerSelection) {
    // All possible outcomes in a game round
    if (playerSelection == computerSelection) {
        return;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper')
        || (playerSelection == 'scissors' && computerSelection == 'rock')
        || (playerSelection == 'paper' && computerSelection == 'scissors')) {
        return computerScore += 1;
    } else if ((playerSelection == 'paper' && computerSelection == 'rock')
        || (playerSelection == 'rock' && computerSelection == 'scissors')
        || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return playerScore += 1;
    }
}


function displayChoice(playerSelection, computerSelection){
    if (playerSelection == 'rock'){
        playerImage = rock;
    } else if (playerSelection == 'paper') {
        playerImage = paper;
    } else if (playerSelection == 'scissors') {
        playerImage = scissors;
    }
    if (computerSelection == 'rock') {
        computerImage = rock;
    } else if (computerSelection == 'paper') {
        computerImage = paper;
    } else if (computerSelection == 'scissors') {
        computerImage = scissors;
    }
}   

function gamePlay(playerSelection, computerSelection) {
    playerComparison(playerSelection, computerSelection);
    displayChoice(playerSelection, computerSelection);    
    userCounter.innerText = playerScore;
    computerCounter.innerText = computerScore;
    if (playerScore == 3 || computerScore == 3){
        endGame();
    }
}

function endGame() {
    if (playerScore > computerScore) {
        finalScoreDisplay.innerText = `You win!\nYour score: ${playerScore}\nComputer Score: ${computerScore}`;
    } else {
        finalScoreDisplay.innerText = `You lose!\nYour score: ${playerScore}\nComputer Score: ${computerScore}`;
    }
    finalScore.appendChild(finalScoreDisplay);
    playerOptions.forEach((selection) => {
        selection.style.display = 'none';
    });
    finalScore.appendChild(newGameButton);
    newGameButton.style.display = 'inline';
    h2.style.display = 'none';
}

// Links the button selection for game play
playerOptions.forEach((selection) => {
    selection.addEventListener('click', (e) => {
        gamePlay(selection.id, computerPlay());
    });
});

// Restart game
newGameButton.addEventListener('click',() => {
    newGameButton.style.display = 'none';
    playerOptions.forEach((selection) => {
        selection.style.display = 'inline';
    });
    computerScore = 0;
    playerScore = 0;
    userCounter.innerText = playerScore;
    computerCounter.innerText = computerScore;
    finalScore.innerText = " ";
    h2.style.display = 'inline';
});