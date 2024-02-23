const btnPrev = document.getElementById("prev");
const btnProx = document.getElementById("prox");
const newImage = document.querySelector("img");

const posicaoImagens = ["woman01", "woman02png", "man01", "man02"];
let inicial = 0;

newImage.setAttribute("src", "images/" + posicaoImagens[inicial] + ".png");

btnProx.addEventListener("click", changeImagesProx);
function changeImagesProx() {
  inicial = inicial + 1;
  if (inicial > 3) inicial = 3;
  newImage.setAttribute("src", "images/" + posicaoImagens[inicial] + ".png");
  btnAtt;
}

btnPrev.addEventListener("click", changeImagesPrev);

function changeImagesPrev() {
  inicial = inicial - 1;
  if (inicial < 0) inicial = 0;
  newImage.setAttribute("src", "images/" + posicaoImagens[inicial] + ".png");
  btnAtt;
}
btnPrev.addEventListener("mouseout", btnAtt);
btnProx.addEventListener("mouseout", btnAtt);

function btnAtt() {
  if (inicial === 0) {
    btnPrev.style.color = "rgba(0, 153, 255, 0.685)";
  } else {
    btnPrev.style.color = "rgba(0, 110, 255, 0.829)";
    // btnProx.style.color = "rgba(0, 110, 255, 0.829)";
  }

  if (inicial === 3) {
    btnProx.style.color = "rgba(0, 153, 255, 0.685)";
  } else {
    btnProx.style.color = "rgba(0, 110, 255, 0.829)";
    // btnPrev.style.color = "rgba(0, 110, 255, 0.829)";
  }
}
