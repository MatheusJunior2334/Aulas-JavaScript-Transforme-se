// Exercício 8: Escreva um algorítmo para ler as dimensõeS de um quadrado (base), calcular e escrever a área do triângulo.

alert("Área do Triângulo");

let base = parseFloat(prompt("Informe o valor da base: "));
let altura = parseFloat(prompt("Informe o valor da altura: "));

let area = (base * altura) / 2;

alert("A área do triângulo é de: " + area);