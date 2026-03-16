// Primeiro array
const frutas = ["Laranja", "Melancia", "Melão", "Uva"];

console.log(frutas);

// Adicionando itens ao array
const carros = [];

carros[0] = "Volkswagen";
carros[1] = "Fiat";
carros[2] = "Ferrari";

console.log(carros);

// Criando array com new Array()
const cores = new Array("Vermelho", "Amarelo", "Laranja");

console.log(cores);

console.log(cores[0]);

// Alterando elementos de array
const frutas2 = ["Laranja", "Melancia", "Melão", "Uva"];

frutas2[0] = "Tangerina";

console.log(frutas2[0]);

// Convertendo array em string


// Exemplo de elementos em array
const pessoa = {
    primeiroNome: "Neil",
    ultimoNome: "Peart",
    idade: 67,
    pais: "Canadá"
}

function minhaFuncao() {
    return "Olá!";
}

const meuArray = [];

meuArray[0] = 123;
meuArray[1] = pessoa;
meuArray[2] = minhaFuncao;

console.log(minhaFuncao);

// Acessando a propriedade length
const frutas3 = ["Laranja", "Melancia", "Melão", "Uva"];

let fruta = frutas3[frutas.length - 1];

console.log(fruta);

// Usando forEach em Array
const elemento = document.querySelector(".ex1");
const artesMarciais = ["Judô", "Karatê", "Capoeira", "Kung Fu", "Aikido"];

artesMarciais.push("Taekwondo", "Jiu-Jitsu");

let texto = "<ul>";

artesMarciais.forEach(retornaItem);

elemento.innerHTML = texto;
 
texto += "</ul>";

function retornaItem(item) {
    texto += "<li>" + item + "</li>";
}

