function Pessoa(primeiroNome, ultimoNome, idade, pais) {
    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
    this.idade = idade;
    this.pais = pais;
}

const myself = new Pessoa("Matheus", "Júnior", 21, "Brasil");
console.log(myself);

// Reforçando criação de construtores de objetos
function Veiculo(marca, modelo, motorPotencia, cor, ano, rodas) {
    this.marca = marca;
    this.modelo = modelo;
    this.motorPotencia = motorPotencia;
    this.cor = cor;
    this.ano = ano;
    this.rodas = rodas;
    this.acelerar = function() {
        return this.modelo + " acelerou."
    }
}

const minhaMoto = new Veiculo("Ducati", "Panigale", "216cv", "Vermelho", 2019, 2);

console.log(minhaMoto);

const meuCarro = new Veiculo("Porshe", "944 Turbo", "240cv", "Branco", 1988, 4);

console.log(meuCarro);

meuCarro.placa = "0000-0000";

meuCarro.frear = function() {
    return this.modelo + " freou.";
}

console.log(meuCarro.frear());

console.log(meuCarro.placa);

Veiculo.prototype.parar = function() {
    return this.marca + " parou.";
}

console.log(meuCarro.parar());