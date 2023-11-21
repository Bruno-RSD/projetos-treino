const btns = document.querySelector(".button-container");
const valor = document.querySelector("#valor");

let valorNumero = valor.textContent;

btns.addEventListener("click", operador);

function operador(e) {
  if (e.target.classList.contains("diminuir") != 0) {
    valorNumero--;
    valor.textContent = valorNumero;
  } else if (e.target.classList.contains("incrementar") != 0) {
    valorNumero++;
    valor.textContent = valorNumero;
  } else if (e.target.classList.contains("reset") != 0) {
    valorNumero = 0;
    valor.textContent = valorNumero;
  }
  console.log(valorNumero);
  //   valor.textContent = valorNumero;
  mudaCorValor(valorNumero);
}

function mudaCorValor(numero) {
  if (numero < 0) {
    valor.style.color = "red";
  } else if (numero > 0) {
    valor.style.color = "green";
  } else if (numero === 0) {
    valor.style.color = "black";
  }
}
