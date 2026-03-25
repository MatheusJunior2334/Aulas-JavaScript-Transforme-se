// Atribuindo vários eventos a um só elemento
const btn = document.querySelector(".btn");
const conteudo = document.querySelector(".conteudo");

btn.addEventListener("mouseover", () => {
    conteudo.innerHTML += "Mouse Over <br/>";
    conteudo.style.color = "darkgreen";
});

btn.addEventListener("click", () => {
    conteudo.innerHTML += "Click <br/>";
    conteudo.style.color = "orange";
});

btn.addEventListener("mouseout", () => {
    conteudo.innerHTML += "Mouse Out <br/>";
    conteudo.style.color = "orangered";
});


// Utilizando o objeto window
const conteudo2 = document.querySelector(".conteudoWindow");

window.addEventListener("resize", () => {
    conteudo2.innerHTML = Math.random();
});

// Utilizando parâmetros
const conteudo3 = document.querySelector(".resultadoProduto");
const btn2 = document.querySelector(".btn2");

let p1 = 4;
let p2 = 2;

btn2.addEventListener("click", () => {
    conteudo3.innerHTML = produto(p1, p2);
});

function produto(p1, p2) {
    return p1 * p2;
};

// Propagação de eventos (bubbling e capture)