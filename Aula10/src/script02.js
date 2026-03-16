// Criando meu primeiro objeto
const carro = { marca: "Rolls Royce", modelo: "Ghost", ano: 2025, cor: "Cinza" }

console.log(carro);

// Criando meu segundo objeto
const carro2 = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2016,
    cor: "Prata"
}

console.log(carro2);

// Criando meu terceiro objeto
const carro3 = {}

carro3.marca = "Volkswagen";
carro3.modelo = "Amarok";
carro3.ano = 2018;
carro3.cor = "Azul";

console.log(carro3["modelo"]);

// Criando meu quarto objeto
const carro4 = new Object ({
    marca: "Renault",
    modelo: "Megane",
    ano: 2006,
    cor: "Preto",
    acelerar: function () {
        return this.modelo + " acelerou"
    }
})

let marcaCarro = "marca";

console.log(carro4[marcaCarro]);