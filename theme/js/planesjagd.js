// Get DOM Elements
/* const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close'); */

// Events
/* modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick); */

// Open
/* function openModal() {
  modal.style.display = 'block';
} */

// Close
/* function closeModal() {
  modal.style.display = 'none';
} */

// Close If Outside Click
/* function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
} */

// tutorial from youtube.com/watch?v=Ifx85VUGQIY  -------
//Getting modal opening buttoms
var modalBtns = document.querySelectorAll(".button");

modalBtns.forEach(function(btn) {
  btn.onclick = function(){
    var modal = this.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll(".close");

closeBtns.forEach(function(btn){
  btn.onclick = function(){
    var modal = (btn.closest(".modal").style.display = "none");
  };
});

window.onclick = function(e){
  if(e.target.className == 'modal'){
    e.targe.style.display = "none";
  }
};