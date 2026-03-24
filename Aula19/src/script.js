// Adicionando eventos
const button = document.querySelector(".btn");
const elementoConteudo = document.querySelector(".conteudo");
const elementoEstilo = document.querySelector(".elementoEstilo");

button.addEventListener("click", mostrarConteudo);

function mostrarConteudo() {
    elementoConteudo.innerHTML = "Você clicou no botão";
    elementoEstilo.classList.toggle("ativo");
};

// Removendo Eventos
const elementoConteudo2 = document.querySelector(".adicionarConteudo");
const btnAdicionar = document.querySelector(".btnAdd");
const btnRemover = document.querySelector(".btnRmv");
const btnTeste = document.querySelector(".btnTeste");

function adicionarTexto() {
    elementoConteudo2.innerHTML += "Texto adicionado!";
};

btnAdicionar.addEventListener("click", () => {
    btnTeste.addEventListener("click", adicionarTexto);
});

btnRemover.addEventListener("click", () => {
    btnTeste.removeEventListener("click", adicionarTexto);
});

// Prevenindo Eventos
const link = document.querySelector(".link");
const info = document.querySelector(".info");

link.addEventListener("click", function (event) {
    event.preventDefault();
    info.innerHTML = "O carregamento do link foi bloqueado.";
});