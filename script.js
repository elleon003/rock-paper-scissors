let computerScore = 0;
let playerScore = 0;
let roundResult;
const playerOptions = document.querySelectorAll('button');
const gameResults = document.querySelectorAll('#gameResults');


function computerPlay() {
    // Allows computer to randomly select rock, paper or scissors for game play
    let options = ['Rock', 'Paper', 'Scissors'];
    let selection = options[Math.floor(Math.random() * options.length)];
    return selection;
}

function gameRound(playerSelection, computerSelection) {
    // All possible outcomes in a game round
    if (playerSelection == computerSelection) {
        roundResult = "It's a draw!";
    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper')
        || (playerSelection == 'Scissors' && computerSelection == 'Rock')
        || (playerSelection == 'Paper' && computerSelection == 'Scissors')) {
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((playerSelection == 'Paper' && computerSelection == 'Rock')
        || (playerSelection == 'Rock' && computerSelection == 'Scissors')
        || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    alert(roundResult);
    if (roundResult.includes("win")) {
        playerScore++;
    } else if (roundResult.includes("lose")) {
        computerScore++;
    }
}

function finalScore() {
    if (playerScore > computerScore) {
        alert(`You win!\nYour score: ${playerScore}\nComputer Score: ${computerScore}`);
    } else {
        alert(`You lose!\nYour score: ${playerScore}\nComputer Score: ${computerScore}`);
    }
}

// Links the button selection to game play
playerOptions.forEach((selection) => {
    selection.addEventListener('click', (e) => {
        gameRound(selection.innerText, computerPlay());
    });
});