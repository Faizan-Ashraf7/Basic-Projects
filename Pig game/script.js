'use strict';
// ASSIGN DATA TO VARIABLES
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const score0=document.getElementById('score--0');
const score1=document.getElementById('score--1');
let current0=document.getElementById('current--0');
let current1=document.getElementById('current--1'); 

const diceEl = document.querySelector('.dice');
const btnRoll=document.querySelector('.btn--roll');
const btnNew=document.querySelector('.btn--new');
const btnHold=document.querySelector('.btn--hold');

// Starting conditions
score0.textContent=0;
score1.textContent=0;
diceEl.classList.add('hidden');

const scores=[0,0];
let currentScore=0;
let activePlayer=0;
let palying = true;

function switchPlayer(){
  document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer===0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
// Making the dice work
btnRoll.addEventListener('click', ()=>{
  if (palying) {
    
  
  // 1. Generate a random die roll
  let dice= Math.trunc(Math.random()*6 +1);

  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src=`dice-${dice}.png`;

// 3.Check for 1
  if(dice!==1){
    currentScore+=dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
  }else{
    switchPlayer();
  }
}
});
btnHold.addEventListener('click',()=>{
  if (palying) {
    
  
  scores[activePlayer]+=currentScore;
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
  if(scores[activePlayer]>=10){
    palying=false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
    document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
  }else{ 
    switchPlayer();
  }
}
});
btnNew.addEventListener('click',()=>{

});