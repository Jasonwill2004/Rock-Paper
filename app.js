const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!';
        resultDisplay.style.color = '#fff'; // Default color for draw
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win!';
        resultDisplay.style.color = '#90EE90'; // Green for win
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!';
        resultDisplay.style.color = 'red'; // Red for loss
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!';
        resultDisplay.style.color = '#90EE90'; // Green for win
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost!';
        resultDisplay.style.color = 'red'; // Red for loss
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!';
        resultDisplay.style.color = '#90EE90'; // Green for win
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost!';
        resultDisplay.style.color = 'red'; // Red for loss
    }

    resultDisplay.innerHTML = result;
}
