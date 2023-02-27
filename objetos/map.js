const pessoas = [
    {nome: 'Eduardo', id: 3},
    {nome: 'Maria', id: 2},
    {nome: 'Luiz', id: 1}
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}

