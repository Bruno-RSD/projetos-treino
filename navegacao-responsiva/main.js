const buttonHamb = document.querySelector(".hamburguer");
let segundaNaveg = document.querySelector(".segundaNavegacao");
let hambContainer = document.querySelector(".container-hamburguer");

buttonHamb.addEventListener("click", function () {
  buttonHamb.classList.toggle("btnPressionado");
  telaNavegacao2();
  // console.log("Fui clicado");
});

function telaNavegacao2() {
  if (buttonHamb.classList.contains("btnPressionado")) {
    segundaNaveg.style.display = "flex";
  } else {
    segundaNaveg.style.display = "none";
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1075) {
    buttonHamb.classList.toggle("btnPressionado", false);
    telaNavegacao2();
    // console.log("Teste janela");
  }
});
