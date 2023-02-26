const produto = {nome: 'Caneca', preco: 1.8};
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// const outraCoisa = {...produto, material: 'madeira'}; // spread operator
// const outraCoisa = Object.assign({}, produto);
// console.log(outraCoisa);
// console.log(produto);
console.log(Object.values(produto)); // valores
console.log(Object.keys(produto)); //chaves
console.log(Object.entries(produto)); // conjunto chave-valor