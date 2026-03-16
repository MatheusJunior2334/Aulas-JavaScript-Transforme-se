// Array global
const frutas = ["Banana", "Maçã", "Morango", "Uva", "Laranja", "Pêra"];

// Utilizando o método sort()
console.log(frutas);

// frutas.sort();

console.log(frutas);

// Utilizando o método reverse()
frutas.reverse();

console.log(frutas);

// Combinando os método sort() e reverse();
const frutas2 = ["Banana", "Maçã", "Morango", "Uva", "Laranja", "Pêra"];

frutas2.sort().reverse();

console.log(frutas2);

// Utilizando o método toSorted();
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"];

const mesesSorted = meses.toSorted();

console.log(meses, mesesSorted);

// Utilizando o método toReversed();
const mesesReversed = meses.toReversed();

console.log(meses, mesesReversed);

// Utilizando o método sort() em números
const numeros = [4, 28, 75, 50, 3, 9, 18];

console.log(numeros);

numeros.sort((a, b) => {return a - b});

console.log(numeros);

const numeros2 = [4, 28, 75, 50, 3, 9, 18];

console.log(numeros2);

numeros2.sort((a, b) => { return b - a });

console.log(numeros2);

// Utilizando o método sort() em números para de maneira aleatória

const numeros3 = [4, 28, 75, 50, 3, 9, 18];

numeros3.sort(() => { return 0.5 - Math.random() });

console.log(numeros3);

// Utilizando o método Math.min() em Array
const numeros4 = [4, 28, 75, 50, 3, 9, 18];

function menorNumeroArray(array) {
    return Math.min.apply(null, array);
}

console.log(menorNumeroArray(numeros4));

// Utilizando o método Math.max em Array
function maiorNumeroArray(array) {
    return Math.max.apply(null, array);
}

console.log(maiorNumeroArray(numeros4));

// Utilizando o sort() com objetos
const pessoas = [
    { nome: "Richard", idade: 19 },
    { nome: "Júnior", idade: 21 },
    { nome: "Stephanie", idade: 20 }
];

console.log(pessoas);

pessoas.sort((a, b) => { return a.idade - b.idade });

console.log(pessoas);