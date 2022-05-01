function game(){
    for (let round = 0; round < 5; round++) {
        let playerInput = prompt("What's your move?");
        playerInput = playerInput.toLocaleLowerCase();
        let computerInput = computerPlay();
        computerInput = computerInput.toLocaleLowerCase();
        let winner = calcRoundWinner(playerInput, computerInput);
        console.log(`It's ${playerInput} vs ${computerInput}:`);
        if (winner == 'player'){
            console.log(`Player wins, player's ${playerInput} beats computer's ${computerInput}`)
        }
        else if (winner == 'computer'){
            console.log(`Computer wins, player's ${playerInput} does not beat computer's ${computerInput}`)
        }
        else if (winner == 'none') {
            round -= 1;
            console.log(`Draw, player's ${playerInput} equals computer's ${computerInput}. Play round again.`)
        }
        else {
            round -= 1;
            console.log("There has been an error. The round has not been counted.");
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
    else if (playerPlay == 'paper' && computerPlay == 'rock'){
        return 'player';
    }
    else if (playerPlay == 'scissors' && computerPlay == 'rock'){
        return 'computer';
    }
    else if (playerPlay == 'rock' && computerPlay == 'paper'){
        return 'player';
    }
    else if (playerPlay == 'scissors' && computerPlay == 'paper'){
        return 'player';
    }
    else if (playerPlay == 'paper' && computerPlay == 'scissors'){
        return 'computer';
    }
    else if (playerPlay == 'rock' && computerPlay == 'scissors'){
        return 'computer';
    }
    else {
        return 'error';
    }
}

game();