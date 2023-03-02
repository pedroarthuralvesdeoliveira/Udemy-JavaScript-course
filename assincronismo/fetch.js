fetch('pagina1.html').
    then(resposta => {
        if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(error => console.log(error));

// function carregaPagina(elemento)
// {
//     const href = elemento.getAttribute('href');
//     fetch(href)
//         .then(response => {
//             if (response.status <= 200 && response.status >= 300) throw new Error('Erro ');
//             return response.text()
//         })
//         .then(html => carregaResultado(html))
//         .catch(err => console.log(err));
// }

async function carregaPagina(elemento)
{
    try {
        const href = elemento.getAttribute('href');
        const response = await fetch(href);

        if (response.status <= 200 && response.status >= 300) throw new Error('Erro ');
        
        const html = await response.text();
        carregaResultado(html);
    } catch (error) {
        console.log(error);
    }
}

function carregaResultado(response)
{
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}