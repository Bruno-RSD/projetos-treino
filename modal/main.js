let btnModal = document.querySelector(".modal-button");
let modalSec = document.querySelector(".show-content");
let modalCover = document.querySelector(".modal-overlay");
let btnClose = document.querySelector(".close-button");

btnModal.classList.remove("btnPress");
modalSec.classList.remove("visible");
modalCover.classList.remove("modal-overlay");

// BUTTONS EVENTS
btnModal.addEventListener("click", function () {
  btnModal.classList.toggle("btnPress");
  modalSec.classList.toggle("visible");
  modalCover.classList.toggle("modal-overlay");
});

btnClose.addEventListener("click", function () {
  btnModal.classList.toggle("btnPress");
  modalSec.classList.toggle("visible");
  modalCover.classList.toggle("modal-overlay");
});
