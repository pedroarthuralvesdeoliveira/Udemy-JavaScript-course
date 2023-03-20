const fs = require('fs').promises;
/**
 * flag w: apaga tudo o que tem no arquivo e escreve o que foi passado
 * flag a: não apaga e insere no fim sem quebra de linha
 */
module.exports = (caminhoArquivo, dados) => { fs.writeFile(caminhoArquivo, dados, {flag: 'w', encoding: 'utf8'}); }