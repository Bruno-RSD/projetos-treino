const buttonHamb = document.querySelector(".hamburguer");

buttonHamb.addEventListener("click", (e) => {
  e.target.classList.toggle("btnPressionado");

  //   console.log("Fui clicado");
});
