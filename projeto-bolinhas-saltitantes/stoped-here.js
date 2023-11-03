let dpi = window.devicePixelRatio;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// -------------------[Configurar os pixels para o canvas corretamente]----------------
function fix_dpi() {
  let style_height = +getComputedStyle(canvas)
    .getPropertyValue("height")
    .slice(0, -2); //elimina o "px", ficando na variável somenteo valor em número
  let style_width = +getComputedStyle(canvas)
    .getPropertyValue("width")
    .slice(0, -2);

  canvas.setAttribute("height", style_height * dpi);
  canvas.setAttribute("width", style_width * dpi);
}
fix_dpi();
// -------------------[Configurar os pixels para o canvas corretamente]----------------

const gravidade = 0.9; // Aceleração da gravidade.

// ---------------[Desenha o círculo]--------------
function drawCircle() {
  context.beginPath();
  context.arc(20, 20, 10, 0, 2 * Math.PI);
  context.strokeStyle = colorRandom();
  context.fillStyle = colorRandom();
  context.fill();
  context.stroke();
}
drawCircle();
// ---------------[Desenha o círculo]--------------

//----------[ Parte do programa para randomizar cor]------------
function randomizer(number) {
  return (numberRandomizer = Math.floor(Math.random() * number));
}

function colorRandom() {
  const corInfo =
    "rgb(" +
    randomizer(255) +
    "," +
    randomizer(255) +
    "," +
    randomizer(255) +
    ")";
  // example: rgb(255,255,255);
  return corInfo;
}
// ------------------[Randomizar cor]--------------------
