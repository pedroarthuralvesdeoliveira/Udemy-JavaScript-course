function rand (min = 0, max = 3)
{
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) 
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string')
            {
                reject(new Error('Deve ser do tipo string'));
                return;
            };
            resolve(msg);
        }, tempo);
    });
}

async function executa()
{
    try {
        const faseUm = await esperaAi('1', rand());
        console.log(faseUm);
        const faseDois = await esperaAi('2', rand());
        console.log(faseDois);
        const faseTres = await esperaAi('3', rand());
    console.log(faseTres);
    } catch (error) {
        console.log(error);
    }
}

executa();