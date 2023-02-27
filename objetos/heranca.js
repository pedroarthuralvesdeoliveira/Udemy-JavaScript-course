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

function Camiseta(nome, preco, cor) 
{
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
/**
 * prototype é um objeto vazio
 * essa atribuição serve para atualizar o conteúdo do prototype de camiseta sem influenciar no do produto
 */
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.acrescimo = function (valor) {
    this.preco += this.preco * (valor / 100); 
};

const produto = new Produto('Item', 15);
const camiseta = new Camiseta('Regata', 10, 'preta');
camiseta.acrescimo(10);
console.log(camiseta);
console.log(produto);