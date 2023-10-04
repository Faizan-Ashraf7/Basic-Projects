"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore=0;

// GAME LOGIC 
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When input is empty
  if (!guess) {
    document.querySelector(".message").textContent = `⛔No number!`;

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = `🎉Correct number!`;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector('.number').style.width="30rem";
    highScore=score;
    document.querySelector('.highscore').textContent= highScore;

    // When pnumber is greater
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `📈Too high`;
      score--;
      
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `💩You lose`;
      document.querySelector(".score").textContent = 0;
    }

    //When number is smaller
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `📉Too low`;
      score--;
    
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `💩You lose`;
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Reset functionality
document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.number').textContent=`?`;
  document.querySelector('.number').style.width="15rem";
  document.querySelector('body').style.backgroundColor="#222";
  score=20;
  highScore=0;
  document.querySelector('.score').textContent=score;
  document.querySelector('.highscore').textContent=highScore;
  document.querySelector('.message').textContent=`Start guessing...`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value="";
});