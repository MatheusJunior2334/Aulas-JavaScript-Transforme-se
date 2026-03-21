// Utilizando o Evento onmouse
const caixa = document.querySelector(".caixa");

caixa.addEventListener("mouseover", function () {
    caixa.innerHTML = "O mouse está dentro da caixa.";
    caixa.style.backgroundColor = "orange";
    caixa.style.color = "#000";
});

caixa.addEventListener("mouseout", function () {
    caixa.innerHTML = "O mouse está fora da caixa.";
    caixa.style.backgroundColor = "orangered";
    caixa.style.color = "#FFF";
});

// Exemplo de Posição do Mouse na Página
const conteudo = document.querySelector(".conteudo");

document.addEventListener("mousemove", handlePosicao);

function handlePosicao(evento) {
    conteudo.innerHTML = "X: " + evento.clientX + " " + "Y: " + evento.clientY;
    console.log(evento);
}