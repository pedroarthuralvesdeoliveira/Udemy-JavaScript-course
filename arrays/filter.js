const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
// function callbackFilter(valor) {
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFilter);
// const numerosFiltrados = numeros.filter(function (valor) {
//     return valor > 10;
// });
// const numerosFiltrados = numeros.filter(valor => valor > 10);
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice);
//     return valor > 10;
// });
// console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Luiz', idade: 10},
    {nome: 'Maria', idade: 20},
    {nome: 'Eduardo', idade: 25},
    {nome: 'Leticia', idade: 30},
    {nome: 'Rosanna', idade: 35}
];

// const pessoaComNomeGrande = pessoas.filter(function (objeto) {
//     return objeto.nome.length >= 5;
// });

//arrow function 
const pessoaComNomeGrande = pessoas.filter(objeto => objeto.nome.length >= 5);

console.log(pessoaComNomeGrande);