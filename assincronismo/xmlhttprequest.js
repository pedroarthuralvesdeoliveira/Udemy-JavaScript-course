const request = obj => {
    /**
     * Com promises: 
     */
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300)
            {
                resolve(xhr.responseText);
            }
            else 
            {
                reject(xhr.statusText);
            }
        });  
    });
    /*
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300)
            {
                obj.success(xhr.responseText);
            }
            else 
            {
                obj.error(xhr.statusText);
            }
        });
    */
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a')
    {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(elemento)
{
    try {
        const href = elemento.getAttribute('href');
        const response = await request(
            {
                method: 'GET',
                url: href,
            }
        );
    carregaResultado(response);
    } catch (error) {
        console.log(error)
    }
}

/**
 * Sem assync/await
 */
function carregaPagina(elemento)
{
    const href = elemento.getAttribute('href');
    request(
        {
            method: 'GET',
            url: href,
        }
    )
    .then(response => carregaResultado(response))
    .catch(error => console.log(error));
}

function carregaResultado(response)
{
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}