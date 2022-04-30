function game(){
    for (let round = 0; round < 5; round++) {
        const playerMove = prompt("What's your move?");
        const computerMove = computerPlay();
        playRound(playerMove, computerMove);
        console.log(playerMove + ' vs ' + computerMove);
        console.log(playRound(playerMove, computerMove));
    }
}

function computerPlay(){
    let hands = [ "Rock", "Paper", "Scissors" ];
    return hands[ Math.floor(Math.random() * hands.length)];
}

function playRound(playerPlay, computerPlay){
    if (playerPlay === computerPlay){
        return result = 'Draw'
    }
    else if (playerPlay === 'Paper' && computerPlay === 'Rock'){
        return result = 'Paper beats rock, player wins!';
    }
    else if (playerPlay === 'Scissors' && computerPlay === 'Rock'){
        return result = 'Rock beats scissors, computer wins!';
    }
    else if (playerPlay === 'Rock' && computerPlay === 'Paper'){
        return result = 'Rock beats paper, player wins!';
    }
    else if (playerPlay === 'Scissors' && computerPlay === 'Paper'){
        return result = 'Scissors beats paper, player wins!';
    }
    else if (playerPlay === 'Paper' && computerPlay === 'Scissors'){
        return result = 'Scissors beats paper, computer wins!';
    }
    else if (playerPlay === 'Rock' && computerPlay === 'Scissors'){
        return result = 'Scissors beats paper, computer wins!';
    }
    else{
        return result ='Please input a valid move!'
    }
}

game();