"use strict";

// Seleção de elementos
const container = document.querySelector(".container");
const btnGenerateQr = document.querySelector("#form-qr button");
const inputQr = document.querySelector("#form-qr input");
const qrCodeImage = document.querySelector("#qr-code img");

// Funções
const generateQrCode = () => {
  const qrValue = inputQr.value;

  if (!qrValue) {
    alert("Digite um valor para gerar o QR Code.");
    return;
  }

  btnGenerateQr.textContent = "Gerando QR Code...";

  qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x150&data=${qrValue}`;

  qrCodeImage.onload = () => {
    container.classList.add("active");
    btnGenerateQr.textContent = "QR Code criado!";
  };
};

// Eventos
btnGenerateQr.addEventListener("click", () => {
  generateQrCode();
});

inputQr.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateQrCode();
  }
});

// Limpar QR Code e resetar o estado
inputQr.addEventListener("input", () => {
  if (!inputQr.value) {
    container.classList.remove("active");
    btnGenerateQr.textContent = "Gerar QR Code";
  }
});
