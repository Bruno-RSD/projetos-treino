let btnToggle = document.querySelector(".toggle-side-bar");
let sideBar = document.querySelector(".side-bar");
const closeBtn = document.querySelector(".fechar-nav");

btnToggle.addEventListener("click", function () {
  sideBar.classList.toggle("show-side-bar");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show-side-bar");

  //   if (window.innerWidth < 470) {
  //     if (!sideBar.classList.contains("show-side-bar")) {
  //       btnToggle.style.display = "flex";
  //     }
  //   }
});
