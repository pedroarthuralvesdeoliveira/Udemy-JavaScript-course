const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];
console.log(nomes);
//const removidos = nomes.splice(4, 1);
//para remover até o fim: array.splice(índice, Number.MAX_VALUE); 
//push 
nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes);
//pop
//nomes.splice(-1, 1);
//unshift 
nomes.splice(0, 0, 'Pedro', 'Arthur');
console.log(nomes);
