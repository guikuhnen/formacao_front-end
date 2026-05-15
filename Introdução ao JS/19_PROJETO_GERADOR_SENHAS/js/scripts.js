"use strict";

// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

const openCloseGenerateButton = document.querySelector("#open-generate-pass");
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordValidator = document.querySelector("#password-validator");

const btnSubmit = document.querySelector("#btn-submit");

// Funções
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 11).toString();
};

const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%^&*";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol,
) => {
  let password = "";

  let generators = [];
  const passwordLength = lengthInput.value;
  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }

  if (numbersInput.checked) {
    generators.push(getNumber);
  }

  if (symbolsInput.checked) {
    generators.push(getSymbol);
  }

  if (generators.length === 0) {
    return;
  }

  for (
    let index = 0;
    index < passwordLength;
    index = index + generators.length
  ) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }

  // passwordLength
  password = password.slice(0, passwordLength);

  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").textContent = password;
};

const passwordsCompare = () => {
  if (passwordInput.value === confirmPasswordInput.value) {
    passwordValidator.classList.add("hide");

    passwordValidator.classList.remove("danger");
    passwordInput.classList.remove("danger");
    confirmPasswordInput.classList.remove("danger");
  } else {
    passwordValidator.classList.remove("hide");

    passwordValidator.classList.add("danger");
    passwordInput.classList.add("danger");
    confirmPasswordInput.classList.add("danger");
  }
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  );
});

openCloseGenerateButton.addEventListener("click", () => {
  generatePasswordContainer.classList.toggle("hide");
});

copyPasswordButton.addEventListener("click", (e) => {
  e.preventDefault();

  const password = generatedPasswordElement.querySelector("h4").textContent;

  navigator.clipboard.writeText(password).then(() => {
    copyPasswordButton.textContent = "Senha copiada!";

    setTimeout(() => {
      copyPasswordButton.textContent = "Copiar";
    }, 3000);
  });
});

passwordInput.addEventListener("keyup", (e) => {
  passwordsCompare();
});
confirmPasswordInput.addEventListener("keyup", (e) => {
  passwordsCompare();
});

btnSubmit.addEventListener("click", () => {
  console.log("Cadastrado!");
});

// Inicialização
