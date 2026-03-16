// Exercício 4: O usuário vai informar valores e será efetuado a sua divisão.

alert("Divisão");
let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

let resultado = (valor1 / valor2)

if (valor2 == 0) {
    alert("Não se pode dividir por zero. Tente novamente.");
    window.location.reload();
} else {
    alert("O resultado da divisão é: " + resultado);
}