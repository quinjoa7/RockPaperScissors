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

function playerPlay() {
    let result = prompt("Rock, Paper or Scissors?").toLowerCase();
    return result;
}

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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log('player chose ' + playerSelection + ' and pc chose ' + computerSelection);
    return match(playerSelection,computerSelection);
}

function game(){ 
    let player = 0;
    let computer = 0;

    while (player < 5 && computer < 5) {
        let result = playRound();
        console.log('Round: ' + result);
        if (result === 'player wins') {
            player++;
        } else if (result === 'computer wins') {
            computer++;
        }
    }

    if (player > computer) {
        console.log('PLAYER WINS THE GAME')
    } else {
        console.log('COMPUTER WINS THE GAME')
    }
    console.log('Player: ' + player + ' - Computer: ' + computer)
}

game();