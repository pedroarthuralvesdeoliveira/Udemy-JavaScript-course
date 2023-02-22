const pessoas = [
    {nome: 'Luiz', idade: 10},
    {nome: 'Maria', idade: 20},
    {nome: 'Eduardo', idade: 25},
    {nome: 'Leticia', idade: 30},
    {nome: 'Rosanna', idade: 35}
];

const nomes = pessoas.map(function(valor) {
    return valor.nome;
});
//arrow function
// const nomes = pessoas.map(objeto => objeto.nome);
// for (const nome of nomes) {
//     console.log(nome);
// }
console.log(nomes);

// const idades = pessoas.map(function(valor) {
//     return valor.idade;
// });
//arrow function
const idades = pessoas.map(objeto => ({idade: objeto.idade}));
console.log(idades);

