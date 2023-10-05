'use strict';
// Assign the classes to the variables 
const btnsShow= document.querySelectorAll('.show-modal');
const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnClose= document.querySelector('.close-modal');

// // MYAPPROACH
// // Display modal on click
// for (let i = 0; i < btnsShow.length; i++) {
//   btnsShow[i].addEventListener('click', function() {
//        modal.style.display="block";
//        overlay.style.display="block";
//       });
//     }
    
//     // Close modal
//     overlay.addEventListener('click',close);
//     btnClose.addEventListener('click',close)
//     addEventListener('keydown', function (e) {
//       if (e.key==="Escape") {
//         close();
//         // console.log(`yes`)
//       }
//     });
// function close() {
//   modal.style.display="none";
//   overlay.style.display="none";
// }

// TEACHER's APPROACH
// ALL Functions
function close(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
function open(){
  modal.classList.remove('hidden',);
  overlay.classList.remove('hidden');
}



// All events 


//  open
for (let i = 0; i < btnsShow.length; i++) 
  btnsShow[i].addEventListener('click',open);



    //  close
document.addEventListener('keydown', (e)=>{
  if (e.key==="Escape" && !modal.classList.contains('hidden')) {
    close();
  }
  })

btnClose.addEventListener('click',close);
overlay.addEventListener('click', close);