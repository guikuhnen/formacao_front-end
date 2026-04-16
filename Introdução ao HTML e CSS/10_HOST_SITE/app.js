// Selecionar elementos do DOM
const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano");
const form = document.getElementById("formNewsletter");

// Recuperando o ano atual
ano.textContent = new Date().getFullYear();

// Tema claro / escuro
btn.addEventListener("click", () => {
  const escuro = root.getAttribute("data-tema") === "escuro";
  root.setAttribute("data-tema", escuro ? "claro" : "escuro");
});

// Manipulação do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  alert(`Olá, ${nome}! Obrigado por se inscrever.`);
  form.reset();
});
