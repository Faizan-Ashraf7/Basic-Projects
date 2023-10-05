'use strict';
// Assign the classes to the variables 
const btnsShow= document.querySelectorAll('.show-modal');
const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnClose= document.querySelector('.close-modal');

// Display modal on click
for (let i = 0; i < btnsShow.length; i++) {
  btnsShow[i].addEventListener('click', function() {
       modal.style.display="block";
       overlay.style.display="block";
      });
    }
    
    // Close modal
    btnClose.addEventListener('click',function () {
  modal.style.display="none";
  overlay.style.display="none";
  
})