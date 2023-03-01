function rand (min, max)
{
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) 
{
    
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('ERROR'));
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 1000),
    esperaAi('Promise 3', 1500),
];

/**
 * Promise.all():
 * Resolve todas as promessas sem se preocupar com a ordem nem se uma depende da outra 
 */
// Promise
//     .all(promises)
//     .then(function (valor) {console.log(valor)} )
//     .catch(function (erro) {console.log(erro)});

/**
 * Sempre entrega o primeiro valor que der certo, independemtemente se for uma promessa ou não
 */
Promise
    .race(promises)
    .then(function (valor) {console.log(valor)} )
    .catch(function (erro) {console.log(erro)});


function baixaPagina()
{
    const emCache = true;
    if (emCache)
    {
        return Promise.resolve('Página em cache');
    }
    else
    {
        return esperaAi('Baixei', 3000);
    }
}

baixaPagina()
    .then(dados => console.log(dados))
    .catch(erro => console.log(erro));