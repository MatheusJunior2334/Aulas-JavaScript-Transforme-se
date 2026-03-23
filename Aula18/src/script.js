// Utilizando o evento de carregamento load
const img = document.querySelector(".minhaImagem");

img.addEventListener("load", function() {
    const elemento = document.querySelector(".infoCarregamento");
    elemento.innerHTML = "A imagem foi carregada";
});