// Exemplo de Condição Lógica: If e Else
let x = 8;

if (x == 5) {
    console.log("A variável x é igual a 5");
} else {
    console.log("A variável x não é igual a 5!");
}

// Exemplo de Condição Lógica: If Else If
let y = 2;

if (y > 3) {
    console.log("A variável y é maior que 3");
} else if (y == 3) {
    console.log("A variável y é igual a 3");
} else {
    console.log("A variável y possui um valor diferente das verificações.");
}

// Exemplo de If
const elemento = document.getElementById("ex1");
const horas = new Date().getHours();
const minutos = new Date().getMinutes();
const horario = String(horas) + ":" + String(minutos);

if (horas > 18) {
    elemento.innerHTML = "Boa noite!";
}

console.log(horario);


// Exemplo de If 2
let idade = 21;
let texto = "Você é novo demais para dirigir!";


if (idade >= 18) {
    texto = "Você tem idade para dirigir";
}

document.getElementById("ex2").innerHTML = "Sua idade é de: " + idade + " anos" + "<br />" + texto;