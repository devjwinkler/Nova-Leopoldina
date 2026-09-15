const botaoMenu = document.querySelector(
  '[data-collapse-toggle="navbar-default"]'
);

const menu = document.getElementById("navbar-default");
const iconeMenu = document.getElementById("icone-menu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");

  const aberto = !menu.classList.contains("hidden");

  botaoMenu.setAttribute("aria-expanded", aberto);

  if (aberto) {
    iconeMenu.setAttribute("d", "M6 18L18 6M6 6l12 12");
  } else {
    iconeMenu.setAttribute("d", "M5 7h14M5 12h14M5 17h14");
  }
});