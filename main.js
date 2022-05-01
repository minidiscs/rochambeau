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
        return result = 'Draw'
    }
    else if (computerMove == 'paper' && computerMove == 'rock'){
        return result = 'Paper beats rock, player wins!';
    }
    else if (playerMove == 'scissors' && computerMove == 'rock'){
        return result = 'Rock beats scissors, computer wins!';
    }
    else if (playerMove == 'rock' && computerMove == 'paper'){
        return result = 'Rock beats paper, player wins!';
    }
    else if (playerMove == 'scissors' && computerMove == 'paper'){
        return result = 'Scissors beats paper, player wins!';
    }
    else if (playerMove == 'paper' && computerMove == 'scissors'){
        return result = 'Scissors beats paper, computer wins!';
    }
    else if (playerMove == 'rock' && computerMove == 'scissors'){
        return result = 'Scissors beats paper, computer wins!';
    }
    else{
        return result ='Please input a valid move!'
    }
}

game();