// Utilização do método charAt()
let texto = "Abacate";
let exCharAt = texto.charAt(1);

console.log(exCharAt);

// Utilização do método charCodeAt()
let exCharCodeAt = texto.charCodeAt(6);
console.log(exCharCodeAt);

// Utilização do método codePointAt()
let exCodePointAt = texto.codePointAt(6);
console.log(exCodePointAt);

// Utilização do método at()
let exAt = texto.at(-2);
let exAtArray = texto[2];
console.log(exAt);
console.log(exAtArray);

// Utilização do métdo concat()
let texto2 = "Verde";
let texto3 = texto.concat(" ", texto2);
console.log(texto3);

// Utilização do método slice()
let frutas = "Banana, Maçã e Uva";
let exSlice = frutas.slice(2, 11);
console.log(exSlice);

// Utilização de toUpperCase() e toLowerCase()
let carro = "Gol gti";
let carro2 = "IMPALA";

let exLowerCase = carro2.toLowerCase();
let exUpperCase = carro.toUpperCase();

console.log(exLowerCase, exUpperCase);

// Utilização do método isWellFormed()
let saudacao = "Olá, seja bem-vindo:";
let exWellFormed = saudacao.isWellFormed();

console.log(exWellFormed);

// Utilização do método trim()
let bianka = "      A Bianka é  estilista de moda       ";
let exTrim = bianka.trim();

console.log(exTrim);