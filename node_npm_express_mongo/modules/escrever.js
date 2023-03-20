const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

const pessoas = [
    { nome: 'Pedro' },
    { nome: 'Arthur' },
    { nome: 'Oliver' },
    { nome: 'Manu' },
    { nome: 'Ella' },
];

const json = JSON.stringify(pessoas, '', 2);

/**
 * flag w: apaga tudo o que tem no arquivo e escreve o que foi passado
 * flag a: não apaga e insere no fim sem quebra de linha
 */
fs.writeFile(caminhoArquivo, json, {flag: 'w', encoding: 'utf8'});