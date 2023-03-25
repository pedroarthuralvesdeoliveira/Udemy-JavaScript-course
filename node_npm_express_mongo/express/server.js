const express = require('express');
const app = express();

/**
 * Params: url/dado
 * Query: url/?dado=valor&outrodado=outrovalor
 * Body:  dados que vêm do formulário através de uma rota do tipo POST ou PUT
 */

app.use(express.urlencoded({ extended: true }));

app.post('/', (request, response) => {

});

app.get('/batata', (request, response) => {
    response.send("Bimda!");
});

app.get('/testes/:idUsuario?', (request, response) => {
    console.log(request.params);
    console.log(request.query);
    response.send(request.params);
});

app.listen(3000, () => {
    console.log("listening on port http://localhost:3000");
});