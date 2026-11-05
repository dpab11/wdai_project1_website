const gallery_buttons = document.querySelectorAll(".submenu_trig");

const menu_button = document.getElementById("menu_button");
const navbar_mobile = document.querySelector(".navbar_mobile");
const menu_exit_button = document.getElementById("menu_exit_button");

const footerYear = document.getElementById("year");

gallery_buttons.forEach((but) => {
  but.addEventListener("click", () => {
    but.parentElement.querySelector(".submenu").classList.toggle("open");
    but.classList.toggle("open");
  });
});

menu_button.addEventListener("click", () => {
  navbar_mobile.classList.toggle("open");
});

menu_exit_button.addEventListener("click", () => {
  navbar_mobile.classList.remove("open");
});

document.addEventListener("click", (event) => {
  gallery_buttons.forEach((but) => {
    if (!but.contains(event.target)) {
      but.parentElement.querySelector(".submenu").classList.remove("open");
      but.classList.remove("open");
    }
  });
});

window.matchMedia("(max-width: 700px)").addEventListener("change", (event) => {
  if (!event.matches) {
    //gdy wieksze
    navbar_mobile.classList.remove("open");
  }
});

footerYear.textContent = new Date().getFullYear();
