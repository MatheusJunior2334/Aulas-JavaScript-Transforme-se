// Exercício 10: Faça um algorítmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa apenas em dias. Considerar um ano com 365 dias e mês com 30 dias.

alert("Idade em Dias");

let idadeAnos = parseInt(prompt("Informe quantos anos você tem: "));
let meses = parseInt(prompt("Informe quantos meses se passaram desde seu último aniversário: "));
let dias = parseInt(prompt("Informe quantos dias se passaram desde que completou mais um mês após seu aniversário: "));

let idadeEmDias = (idadeAnos * 365) + (meses * 30) + dias;

alert(`Sua idade em dias é de ${idadeEmDias} dias.`)