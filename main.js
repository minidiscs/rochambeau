function game(playerInput){

        const computerInput = computerPlay();
        let result = playRound(playerInput, computerInput);
        if (result === 'draw') {
            return 'Draw'
        }
        else if (result === 'player') {
            return `Player's ${playerInput} beats ${computerInput}, player wins!`;
        }
        else if (result === 'computer') {
            return `Player's ${playerInput} fails to beat ${computerInput}, computer wins!`;
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
        return 'draw';
    }
    else if (
        playerMove === 'paper' && computerMove === 'rock' || 
        playerMove === 'rock' && computerMove === 'scissors' || 
        playerMove === 'scissors' && computerMove === 'paper' 
        ){
            return 'player';
    }
    else if (
        playerMove === 'paper' && computerMove === 'scissors' || 
        playerMove === 'rock' && computerMove === 'paper' ||
        playerMove === 'scissors' && computerMove === 'rock'
        ){
            return 'computer';
    }
    else{
        return 'Please input a valid move!';
    }
}

const body = document.body;

/* const buttonRock = document.createElement('button');
body.append(buttonRock);
buttonRock.innerText = "Rock"

const buttonPaper = document.createElement('button');
body.append(buttonPaper);
buttonPaper.innerText = "Paper"

const buttonScissors = document.createElement('button');
body.append(buttonScissors);
buttonScissors.innerText = "Scissors"

or */
let gameResult =  ''

const btnR = document.querySelector('#rock');
btnR.addEventListener('click', () => {
  gameResult = game("Rock");
  console.log(gameResult);
});

const btnP = document.querySelector('#paper');
btnP.addEventListener('click', () => {
    gameResult = game("Paper");
    console.log(gameResult);
});

const btnS = document.querySelector('#scissors');
btnS.addEventListener('click', () => {
    gameResult = game("Scissors");
    console.log(gameResult);
});

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});