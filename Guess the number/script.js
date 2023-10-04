"use strict";
// Game data
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const printMessage= function(message) {
  document.querySelector('.message').textContent=message;
}

// GAME LOGIC
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When input is empty
  if (!guess) {
   printMessage(`⛔No number!`);


// When player wins
  } else if (guess === secretNumber) {
    printMessage(`🎉Correct number!`);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }


    // When player loses
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? `📈Too high` : `📉Too low`;
      score--;

      document.querySelector(".score").textContent = score;
    } else {
      printMessage(`💩You lose`);
      document.querySelector(".score").textContent = 0;
    }
  }
});



//Reset functionality
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = `?`;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highScore;
  printMessage(`Start guessing...`);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
});
