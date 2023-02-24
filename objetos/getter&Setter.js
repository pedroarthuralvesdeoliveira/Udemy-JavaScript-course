function Produto (nome, preco, estoque) {
    Object.defineProperty(
        this, 'estoque', {
            enumerable: true,
            configurable: false,
            get: function () {
                return estoque;
            },
            set: function (valor) {
                if (typeof valor !== 'number') return; 
                estoque = valor;
            }
        }
    );
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true, 
            configurable: true
        }
    });
}

const p1 = new Produto('Camisa', 20, 5);
// console.log(p1);
p1.estoque = "teste";
console.log(p1);
console.log(p1.estoque);
p1.estoque = 500;
console.log(p1.estoque);
// console.log(Object.keys(p1));