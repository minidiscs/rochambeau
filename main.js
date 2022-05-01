function game(){
    for (let round = 0; round < 5; round++) {
        const playerInput = prompt("What's your move?");
        const computerInput = computerPlay();
        playRound(playerInput, computerInput);
        console.log(playerInput + ' vs ' + computerInput);
        console.log(playRound(playerInput, computerInput));
    }
}

function computerPlay(){
    let hands = [ "Rock", "Paper", "Scissors" ];
    return hands[ Math.floor(Math.random() * hands.length)];
}

function playRound(playerPlay, computerPlay){
    let playerMove = playerPlay.toLowerCase();
    let computerMove = computerPlay.toLowerCase();
    if (playerPlay === computerPlay){
        let winner = 0;
        return result = 'Draw';
    }
    else if (computerMove == 'paper' && computerMove == 'rock'){
        let winner = 'player';
        return result = 'Paper beats rock, player wins!';
    }
    else if (playerMove == 'scissors' && computerMove == 'rock'){
        let winner = 'computer';
        return result = 'Rock beats scissors, computer wins!';
    }
    else if (playerMove == 'rock' && computerMove == 'paper'){
        let winner = 'player';
        return result = 'Rock beats paper, player wins!';
    }
    else if (playerMove == 'scissors' && computerMove == 'paper'){
        let winner = 'player';
        return result = 'Scissors beats paper, player wins!';
    }
    else if (playerMove == 'paper' && computerMove == 'scissors'){
        let winner = 'computer';
        return result = 'Scissors beats paper, computer wins!';
    }
    else if (playerMove == 'rock' && computerMove == 'scissors'){
        let winner = 'computer';
        return result = 'Scissors beats paper, computer wins!';
    }
    else{
        return result ='Please input a valid move!'
    }

    if (winner == 'player'){
        console.log("Player wins, player's ${playerMove} beats computer's ${computerMove}")
    }
    else if (winner == 'computer'){
        console.log("Computer wins, player's ${playerMove} does not beat computer's ${computerMove}")
    }
    else {
        console.log("Draw, player's ${playerMove} equals computer's ${computerMove}")
    }
}

game();