// Exemplo de utilização do length em string
let texto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let tamanho = texto.length;

const elemento = document.querySelector(".ex1");

elemento.innerHTML = tamanho;

// Exemplo de utilização do caractere de escape
let texto2 = 'Somente a dor \'coletiva\' gera a união.';
let texto3 = "Somente a dor \"coletiva\" gera a união.";
let texto4 = "Somente a dor \\ coletiva gera a união.";
let texto5 = `Somente a dor \\ coletiva gera a união.`;

console.log(texto3);

elemento.innerHTML = `
    <style>
        .container {
            display: flex;
            gap: 30px;
            background-color: magenta;
            color: #fff;
        }

        .container div {
            width: 100px;
            height: 100px;
            background-color: #00f;
            align-content: center;
            text-align: center;
        }
    </style>

    <h1>Esse é um novo h1</h1>
    <div class="container">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>

`

// Exemplo de template string
let nome = "Matheus Júnior";
let idade = 21;
let frase = `Meu nome é ${nome} e tenho ${idade} anos.`;

let frase2 = "Meu nome é " + nome + " e tenho " + idade + " anos.";

console.log(frase2);

// Exemplo de adição de HTML com template string em JS

const elemento2 = document.querySelector(".ex2");

elemento2.innerHTML = `
    <style>
        .container2 {
            display: flex;
            justify-content: space-around;
            gap: 20px;
            background-color: orangered;
        }

        .container2 div {
            width: 100px;
            height: 100px;
            background-color: orange;
            color: darkgreen;
            align-content: center;
            text-align: center;
        }
    </style>

    <div class="container2">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
`