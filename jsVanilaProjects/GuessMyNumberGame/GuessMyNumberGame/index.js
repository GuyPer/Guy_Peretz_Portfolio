'use strict'

// reference HTML elements:
// -----------------------
// "guess","last guess", "message area","score", "Highscore"

const elmGuessInput = document.querySelector('#guessInput');
const lastGuess = document.querySelector('.number');
let elmMessageArea = document.querySelector(".message");
let screenMode=document.querySelector('body');



const elmScore = document.querySelector(".score");
const elmHighScore = document.querySelector(".highscore");

// initialize variables:
// score, highscore, secret number
// --------------------
let secretNumber=Math.trunc(Math.random()*100);

// function to get a new secret number
function getSecretNum(){
secretNumber=Math.trunc(Math.random()*100);
console.log(secretNumber);
return(secretNumber)
}
// cheat code:
// -----------
// console.log(getSecretNum());
console.log(secretNumber);
// log the secret value
// remove later!!!!!!!!!!!!!!

let score=elmScore.innerHTML;
function check(){
// 1. get guess
let userGuess=elmGuessInput.value;
// 2. if not guess --> message --> put a number,
// last number = "?"
if (userGuess==''){
    elmMessageArea.innerHTML= "add  guess number please";
}
else if(userGuess>=100)[
    elmMessageArea.innerHTML="Less then 101"
]
// 3. properly number, "?" --> last number chosen,
else{
    lastGuess.innerHTML=userGuess;
}
// 4. check if "guess number" =  "secret number"
// 5. if yes : green screen, message - "you right", check if score above highscore ---> if yes highscore get score value
if (userGuess==secretNumber){
    screenMode.style.backgroundColor ='green';
    elmMessageArea.innerHTML="You Right!"
    if (score>=elmHighScore.innerHTML){
        elmHighScore.innerHTML=score;
    }
}

// 6. if no:
// red screen, check if bigger or lower from "secret number", if bigger ---> message "too high", if lower ---> message "too low", score = score minus 10: 
else{
    screenMode.style.backgroundColor  ='red';
    console.log(score);
    // 7. if score = 0, message --> you lost the game
    if (score==0){
       elmMessageArea.innerHTML= "you lost the game";
       elmScore.innerHTML=0;
       return
    }
        score-=10;
    elmScore.innerHTML=score
    if(userGuess>secretNumber){
        elmMessageArea.innerHTML="Too High"
    } else{elmMessageArea.innerHTML="Too Low"}
}
}

function again(){
    // 1. set the score to 100 again;
    elmScore.innerHTML=100;
    score=100;
    // 2. reset html on guess area
    elmGuessInput.value="";
    // 3. reset last guess to "?"
    lastGuess.innerHTML="?";
    // 4. reset the "start guess" message
    elmMessageArea.innerHTML="Start guessing...";
    // 5. reset background color to black
    screenMode.style.backgroundColor='black'
    // 6. generate new "secret number"
    getSecretNum();
}

