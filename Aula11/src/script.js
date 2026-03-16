// Utilizando o operador in
const pessoa = {
    primeiroNome: "Bianka",
    ultimoNome: "Araújo",
    idade: 16,
    pais: "Brasil"
}

let exIn = ("idade" in pessoa);

console.log(exIn);

const pessoa2 = {
    primeiroNome: "Howard",
    segundoNome: "Rick",
    carros: {
        carro1: "Porsche",
        carro2: "Volkswagen",
        carro3: "Audi"
    },
    motos: {
        moto1: "Ducati",
        moto2: "Royal Enfield"
    }
}

let propriedadeMotos = "moto1";

console.log(pessoa2.carros.carro3);
console.log(pessoa2.carros["carro2"]);
console.log(pessoa2["carros"]["carro1"]);
console.log(pessoa2.motos["moto1"]);