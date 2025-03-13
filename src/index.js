var valores = [10, 20, 30];
var somaValores = valores.reduce(function (acc, val) { return acc + val; }, 0);
console.log("Soma dos valores:", somaValores);
function mensagemPersonalizada(nome) {
    return "Ol\u00E1, ".concat(nome, "! Bem-vindo ao TypeScript.");
}
console.log(mensagemPersonalizada("Ana"));
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.detalhes = function () {
        return "".concat(this.marca, " ").concat(this.modelo, ", Ano: ").concat(this.ano);
    };
    return Carro;
}());
var carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());
