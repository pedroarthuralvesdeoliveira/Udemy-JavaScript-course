function Produto (nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    Object.defineProperty(
        this, 'estoque', {
            enumerable: true, //mostra a chave
            value: estoque,
            writable: false, /*controla se o valor pode ou não ser alterado*/
            configurable: false // configurável: pode permitir apagar ou reconfigurar a chave
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
console.log(p1);
console.log(Object.keys(p1));