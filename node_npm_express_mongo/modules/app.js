const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./escrever');
const ler = require('./ler');

const pessoas = [
    { nome: 'Pedro' },
    { nome: 'Arthur' },
    { nome: 'Oliver' },
    { nome: 'Manu' },
    { nome: 'Ella' },
];

const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json);