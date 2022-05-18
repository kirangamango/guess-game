'use strict';

// console.log(document.querySelector('.message').textContent);
// let val = document.querySelector('.guess').value;
// console.log(val);

let secretNumber = Math.trunc(Math.random()*20+1);
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
//when player submits a number
document.querySelector('.check').addEventListener
('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    //when no input is entered
    if(!guess){
        //document.querySelector('.message').textContent = '⛔ No Number Found!';
        displayMessage('⛔ No Number Found!');
    }
    //when player wins
    else if(guess === secretNumber){
        if(score > highScore)
            highScore = score;
        document.querySelector('.number').textContent = secretNumber;
        //document.querySelector('.message').textContent = '🍕 Correct guess!!';
        displayMessage('🍕 Correct guess!!');
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    else{
        if(score > 1){
            score--;
            document.querySelector('.score').textContent = score;
            //document.querySelector('.message').textContent = (guess > secretNumber) ? '📈 Too high!' : '📉 Too low!';
            displayMessage((guess > secretNumber) ? '📈 Too high!' : '📉 Too low!');
        }
        //when player loses
        else{
            //document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})

//restart play
document.querySelector('.again').addEventListener
('click',function() {
    secretNumber = Math.trunc(Math.random()*20+1);
    score = 20;
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';  
})