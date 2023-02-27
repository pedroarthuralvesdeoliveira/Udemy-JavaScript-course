const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);  
    }
};
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);  
    }
};
const falar = {
    falar() {
        console.log(`${this.nome} está falando`);  
    }
};

const pessoaPrototype = {...beber, ...comer, ...falar};

function criaPessoa(nome, sobrenome) 
{
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
};

const p1 = criaPessoa('Pedro', 'Oliveira');
const p2 = criaPessoa('Henzo', 'Ferreira');
console.log(p1);
console.log(p2);
console.log(p2.falar());
console.log(p2.comer());