function Pessoa (nome, sobrenome) 
{
    this.nome = nome;
    this.sobrenome = sobrenome;
}   

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Pedro', 'Oliveira');
const pessoa2 = new Pessoa('Henzo', 'Ferreira');

const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);

function Produto (nome, preco) 
{
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco -= this.preco * (percentual / 100);
};

Produto.prototype.acrescimo = function (percentual) {
    this.preco += this.preco * (percentual / 100);
};

const p1 = new Produto('Maça', 100);
p1.desconto(20);
p1.acrescimo(25);

const p2 = {
    nome: 'Banana',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.acrescimo(15);

const p3 = Object.create(Produto.prototype, {
    preco: {
        configurable: true,
        enumerable: true,
        value: 20,
        writable: true
    },
    tamanho: {
        configurable: true,
        enumerable: true,
        value: 100,
        writable: true
    }
});

p3.acrescimo(25);
console.log(p3);