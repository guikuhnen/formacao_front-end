"use strict";

// Seleção de elementos
const colorButtons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// Funções

// Eventos
colorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Remove o selecionado de todos os botões
    colorButtons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    // Adiciona o selecionado ao botão clicado
    const clickedButton = event.currentTarget;
    clickedButton.querySelector(".color").classList.add("selected");
    const id = clickedButton.getAttribute("id");

    // Muda a imagem do produto
    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);
    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});
