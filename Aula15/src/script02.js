// Utilizando o getElementById()
const elemento1 = document.getElementById("selecionandoElemento");

console.log(elemento1);

// Utilizando o getElementsByTagName()
const elemento2 = document.getElementsByTagName("h1");

console.log(elemento2[0]);

// Utilizando o getElementByClassName()
const elemento3 = document.getElementsByClassName("selecionandoElementoPorClasse");

console.log(elemento3[0]);

// Utilizando o querySelector()
const elemento4 = document.querySelector(".elementoClasse");

console.log(elemento4);

const elemento5 = document.querySelector("#elementoID");

console.log(elemento5);

// Utilizando o querySelectorAll()
const elementos = document.querySelectorAll("h3");

console.log(elementos[0]);