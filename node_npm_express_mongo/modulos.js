// const nome = 'Pedro'
// const sobrenome = 'Alves de Oliveira'

// const falaNome = () => {
//     console.log(nome, sobrenome);
// }

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// OU
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// OU
// this.qualquerCoisa = 'qualquerCoisa'

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

exports.Pessoa = Pessoa