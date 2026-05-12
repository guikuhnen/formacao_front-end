"use strict";

// Seleção de elementos
const formMultiplication = document.querySelector("#form-multiplication");
const inputNumber = document.querySelector("#input-number");
const inputMultiplicator = document.querySelector("#input-multiplicator");
const multiplicationOperations = document.querySelector(
  "#multiplication-operations",
);
const titleMultiplication = document.querySelector(
  "#title-multiplication span",
);

// Funções
const generateMultiplicationTable = (number, multiplicator) => {
  // Limpa a tabela antes de gerar uma nova
  multiplicationOperations.innerHTML = "";

  titleMultiplication.innerHTML = number;

  for (let i = 1; i <= multiplicator; i++) {
    const template = `<div class="row">
            <div class="operation">${number} x ${i} =</div>
            <div class="result">${number * i}</div>
        </div>`;

    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const rowElement = htmlTemplate.querySelector(".row");

    multiplicationOperations.appendChild(rowElement);
  }
};

// Eventos
formMultiplication.addEventListener("submit", function (event) {
  event.preventDefault();

  // + faz se tornar um inteiro
  const multiplicationNumber = +inputNumber.value;
  const multiplicator = +inputMultiplicator.value;

  if (!multiplicationNumber || !multiplicator) {
    alert("Por favor, preencha ambos os campos.");
    return;
  } else if (isNaN(multiplicationNumber) || isNaN(multiplicator)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  generateMultiplicationTable(multiplicationNumber, multiplicator);
});
