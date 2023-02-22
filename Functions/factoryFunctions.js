function criaPessoa(nome, sobrenome) 
{
    return {
        nome, 
        sobrenome,
        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function (assunto) {
            return `${nome} está ${assunto}`;
        }
    };
}

const p1 = criaPessoa('Pedro', 'Arthur');
p1.nomeCompleto = "Pedro Arthur Alves de Oliveira";
console.log(p1.fala("falando sobre c#"));
console.log(p1.nomeCompleto);