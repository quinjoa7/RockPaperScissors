const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');

const roundResult = document.getElementById('roundResult');
const score = document.getElementById('score');
const gameResult = document.getElementById('gameResult');

btnRock.addEventListener('click', function() {
    playRound('rock', );
})
btnPaper.addEventListener('click', function() {
    playRound('paper', );
})
btnScissors.addEventListener('click', function() {
    playRound('scissors', );
})

let playerCounter = 0;
let computerCounter = 0;

function match(p, c) {
    if (p === c) {
        return 'tie';
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer wins';
        } else {
            return 'player wins';
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer wins';
        } else {
            return 'player wins';
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer wins';
        } else {
            return 'player wins';
        }
    } else {
        return 'wrong input'
    }
}

function computerPlay() {
    let result = Math.floor(Math.random()*100) +1;
    if (result <= 33) {
        return 'rock';
    }else if (result <= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    let result = match(playerSelection,computerSelection);

    if (playerCounter < 5 && computerCounter < 5) {
        if (result === 'player wins') {
            playerCounter++;
        } else if (result === 'computer wins') {
            computerCounter++;
        }
    }
    
    if (playerCounter === 5) {
        gameResult.textContent = 'PLAYER WINS THE GAME';
    } else if (computerCounter === 5) {
        gameResult.textContent = 'COMPUTER WINS THE GAME';
    }

    roundResult.textContent = 'Player chose ' + playerSelection + ' and pc chose ' + computerSelection + ' so ' + result;
    score.textContent = 'Player: ' + playerCounter + ' || Computer: ' + computerCounter;
}
