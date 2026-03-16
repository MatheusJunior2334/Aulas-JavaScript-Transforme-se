// Utilizando o BigInt
let a = BigInt("1565165464841613132165484984561357569851235648165");
console.log(a);

// Utilizando o sufixo n
let b = 654551321346898784651132123245498946321489n;
console.log(b);

// Utilizando operadores aritméticos com BigInt
let c = 26589884651613156484965123654n;
let d = 26589884651613156484965123654n;
let e = (c + d);

console.log(e);

// Convertendo BigInt para Number
let f = BigInt("456898984465121235489562312689465132");
let fConvertido = Number(f);
console.log(fConvertido);

// Utilizando métodos de comparação com BigInt
let g = 100n;
let h = 90n;
let exComparacao = (g === h);
console.log(exComparacao);