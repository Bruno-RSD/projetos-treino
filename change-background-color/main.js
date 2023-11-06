const btn = document.querySelector("button");

function bgChange() {
  const mudancaCor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = mudancaCor;
}
btn.onclick = bgChange;

function random(number) {
  return Math.floor(Math.random() * number);
}
