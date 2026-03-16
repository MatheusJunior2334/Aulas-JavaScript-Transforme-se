// Exercício 9: Escreva um algorítmo para ler as dimensões de um trapézio (base maior, base menor e altura), calcular e escrever a área do trapézio.

alert("Área do Trapézio");

let base1 = parseFloat(prompt("Informe um valor das bases: "));
let base2 = parseFloat(prompt("Informe o outro valor da base: "));
let altura = parseFloat(prompt("Informe o valor da altura: "));

let baseMaior = Math.max(base1, base2);
let baseMenor = Math.min(base1, base2);

let area = ((baseMaior + baseMenor) * altura) / 2;

console.log(baseMaior, baseMenor, area)

alert("O valor da área do trapézio é de: " + area);
