// Exercício 5: Escreva um algorítmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor:

alert("Antecessor");

let valor = parseFloat(prompt("Informe um valor do seu teclado para retornar o seu antecessor: "));

let antecessor = (valor - 1);

alert("O antecessor de " + valor + " é: " + antecessor);