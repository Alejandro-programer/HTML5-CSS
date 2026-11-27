// app.js
let contador = 0;
const valorEl = document.getElementById("valor");
const btnEl = document.getElementById("btn-incrementar");

btnEl.addEventListener("click", () => {
  contador += 69;
  valorEl.textContent = contador;
});
