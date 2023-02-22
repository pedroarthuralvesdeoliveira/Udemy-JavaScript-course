falaOi();
// -> Function hoisting = declaração de função
function falaOi() {
    console.log("Oie");
}

// First-class object -> função tratada como um dado
// function expression
const souUmDado = function () {
    console.log("Sou um dado");
};
souUmDado();

function executaFuncao(funcao) {
    console.log("Executando a funçao sou um dado: ");
    funcao();
}

executaFuncao(souUmDado);