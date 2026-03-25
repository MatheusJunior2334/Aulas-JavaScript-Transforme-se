// Exemplos de Evento

// Exemplo de Click em h4
const elemento = document.querySelector(".elementoClick");
const info = document.querySelector(".info");

elemento.addEventListener("click", () => {
    elemento.innerHTML = "Ops, você clicou mesmo.";
    info.innerHTML = "Te peguei! :)";
});

// Alterando formatação de texto em um input
const campoTexto = document.querySelector(".campoTexto");

campoTexto.addEventListener("input", upperCase);

function upperCase() {
    campoTexto.value = campoTexto.value.toUpperCase();
};

// Alterando formatação de texto em um input quando mudamos a interação
const campoTexto2 = document.querySelector(".campoTexto2");

campoTexto2.addEventListener("change", toUpperCase);

function toUpperCase() {
    campoTexto2.value = campoTexto2.value.toUpperCase();
};