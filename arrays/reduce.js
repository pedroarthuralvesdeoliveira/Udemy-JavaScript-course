/*
    reduzir a um único elemento
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador += valor;
//     return acumulador;
// }, 0);
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total);
