'use strict';
// Assign the classes to the variables 
const btnsShow= document.querySelectorAll('.show-modal');
const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnClose= document.querySelector('colse-modal');
console.log(btnsShow);
for (let i = 0; i < btnsShow.length; i++) {
  console.log(btnsShow[i].textContent);
  
}