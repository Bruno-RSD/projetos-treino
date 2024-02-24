const btnPrev = document.getElementById("prev");
const btnProx = document.getElementById("prox");
let newImage = document.querySelector("img");
let imgText = document.getElementById("texto-imagem");
let textNomes = document.querySelector("h2");
let textJob = document.querySelector("h3");
let barraPassagem = document.querySelector(".bar");
let inicial = 0;

// ---------------- OBJETOS ---------------------[START]
const posicaoImagens = ["woman01", "woman02png", "man01", "man02"];

const posicaoTexto = [
  "Estou extremamente satisfeita com o sistema de administração oferecido pela CGGOTech. Simplificou imensamente as tarefas diárias e me permitiu focar em áreas mais estratégicas do meu negócio. Recomendo de olhos fechados!",
  "Como cliente há anos, posso dizer que o sistema de administração dessa empresa de tecnologia é simplesmente excepcional. Facilitou minha vida profissional de maneiras inimagináveis. O suporte ao cliente também é impecável. Não poderia estar mais feliz!",
  "Estou impressionado com a eficácia e a praticidade do sistema de administração dessa empresa de tecnologia. Ele transformou completamente a maneira como gerencio meu negócio. Uma solução indispensável para qualquer empreendedor sério.",
  "Como empresário, sempre fui cético em relação a soluções tecnológicas, mas o sistema de administração fornecido por essa empresa me fez mudar de ideia. Simplificou todas as operações e aumentou consideravelmente nossa eficiência. Altamente recomendado!",
];

const textProfissao = [
  "Engenheira",
  "Astronauta",
  "Tecnico de Informação",
  "Empreendedor",
];

const nomes = ["Angela", "Michelle", "Gustavo", "Felipe"];

const barraMovimento = ["1 / 2", "2 / 3", "3 / 4", "4 / 5"];
// ---------------- OBJETOS ---------------------[END]
alteraRevisao();

btnProx.addEventListener("click", changeImagesProx);
function changeImagesProx() {
  inicial = inicial + 1;
  if (inicial > 3) inicial = 3;

  alteraRevisao(); // aqui tinha dado um erro pois eu tinha esquecido de colocar os parenteses pra chamar as funções. Fica o lembrete/alerta.
  btnAtt();
}

btnPrev.addEventListener("click", changeImagesPrev);
function changeImagesPrev() {
  inicial = inicial - 1;
  if (inicial < 0) inicial = 0;

  alteraRevisao();
  btnAtt();
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

function alteraRevisao() {
  newImage.setAttribute("src", "images/" + posicaoImagens[inicial] + ".png");
  imgText.textContent = posicaoTexto[inicial];
  textJob.textContent = textProfissao[inicial];
  textNomes.textContent = nomes[inicial];
  barraPassagem.style.gridColumn = barraMovimento[inicial];
  //  NOTA: poderia ser feito, talvez de maneira mais eficiente até, usando objeto
  // em família. Ou seja, objeto e subobjetos, uma vez que varias informações estão ligadas entre si.
}
