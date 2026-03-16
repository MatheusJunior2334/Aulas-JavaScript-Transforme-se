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