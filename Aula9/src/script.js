// Utilização do método toString()
let numero = 123;
let exToString = numero.toString();

console.log(typeof exToString);

// Utilização do método toExponential()
let a = 9.646;
let exToExponencial = a.toExponential(2);

console.log(exToExponencial);

// Utilização do método toFixed()
let b = 44.7654987;
let exToFixed = b.toFixed(2);

console.log(exToFixed);

// Utilização do método toPrecision()
let c = 63.874632901;
let exToPrecision = c.toPrecision(4);

console.log(exToPrecision);

// Utilização do método valueOf()
let d = 1993;
let exValueOf = d.valueOf();

console.log(exValueOf);

// Utilização do método Number()
let e = "593";
let exNumber = Number(e);

console.log(exNumber);