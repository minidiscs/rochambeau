function game(){
    for (let round = 0; round < 5; round++) {
        let playerInput = prompt("What's your move?");
        playerInput = playerInput.toLocaleLowerCase();
        let computerInput = computerPlay();
        computerInput = computerInput.toLocaleLowerCase();
        let winner = calcRoundWinner(playerInput, computerInput);

        console.log(`So it's ${playerInput} vs ${computerInput}:`);

        if (winner == 'player'){
            console.log(`Player wins, player's ${playerInput} beats computer's ${computerInput}`)
        }
        else if (winner == 'computer'){
            console.log(`Computer wins, player's ${playerInput} succumbs to computer's ${computerInput}`)
        }
        else if (winner == 'none') {
            round -= 1;
            console.log(`Draw, player's ${playerInput} equals computer's ${computerInput}. Play round again.`)
        }
        else {
            round -= 1;
            console.log(`There has been an error. Is "${playerInput}" a valid move? Play round again.`);
        }
    }
}

function computerPlay(){
    let hands = [ "Rock", "Paper", "Scissors" ];
    return hands[ Math.floor(Math.random() * hands.length)];
}

function calcRoundWinner(playerPlay, computerPlay){
    
    if (playerPlay === computerPlay){
        return 'none';
    }
    else if ((playerPlay === 'rock' && computerPlay === 'scissors') || 
    (playerPlay === 'paper' && computerPlay === 'rock') || 
    (playerPlay === 'scissors' && computerPlay === 'paper')){
        return 'player';
    }
    else if ((playerPlay === 'rock' && computerPlay === 'paper') || 
    (playerPlay === 'paper' && computerPlay === 'scissors') || 
    (playerPlay === 'scissors' && computerPlay === 'rock')){
        return 'computer';
    }
    else {
        return 'error';
    }
}

game();