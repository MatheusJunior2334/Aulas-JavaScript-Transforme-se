// Estudando propagação de eventos

// Bubbling
const div1 = document.querySelector(".div1");
const p1 = document.querySelector(".p1");

p1.addEventListener("click", () => {
    alert("Você clicou no elemento em branco.");
}, false);

div1.addEventListener("click", () => {
    alert("Você clicou no elemento em cor-de-rosa");
}, false);


// Capturing
const div2 = document.querySelector(".div2");
const p2 = document.querySelector(".p2")

p2.addEventListener("click", () => {
    alert("Você clicou no elemento em branco");
}, true);

div2.addEventListener("click", () => {
    alert("Você clicou no elemento em verde");
}, true);