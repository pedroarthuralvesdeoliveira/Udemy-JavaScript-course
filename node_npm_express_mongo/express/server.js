const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("Hello, world!");
});

app.get('/batata', (request, response) => {
    response.send("Bimda!");
});

app.listen(3000, () => {
    console.log("listening on port http://localhost:3000");
});