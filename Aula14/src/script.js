// Definindo uma Array global
const estilosMusicais = ["Rock", "Jazz", "Soul", "Blues"];

// Utilizando indexOf()
let posicaoItem = estilosMusicais.indexOf("Soul");

console.log(estilosMusicais);
console.log(posicaoItem)

// Utilizando o lastIndexOf()
const estilosMusicais2 = ["Reggae", "R&B", "Disco", "Pop"];

let posicaoItem2 = estilosMusicais2.lastIndexOf("Pop");

console.log(estilosMusicais2);
console.log(posicaoItem2);

// Utilizando o método includes()
let verificaExistenciaItem = estilosMusicais.includes("Rap");

console.log(verificaExistenciaItem);

// Utilizando o método find()
const number = [4, 6, 83, 64, 2, 17];
let encontrarMaior = number.find(verificaValor);

function verificaValor(valor) {
    return valor > 50;
}

console.log(encontrarMaior);

// Utilizando o método findIndex()

let encontrarIndice = number.findIndex(verificaValor);

console.log(encontrarIndice);

// Utilizando o método findLast();
let encontrarMaiorFinal = number.findLast((valor) => valor > 50);
console.log(encontrarMaiorFinal);

// Utilizando método findLastIndex()
let encontrarIndiceMaiorFinal = number.findLastIndex((valor) => valor > 50);

console.log(encontrarIndiceMaiorFinal);