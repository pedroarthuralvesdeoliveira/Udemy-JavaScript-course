// const modulos = require('./modulos')
const path = require('path')
const { Pessoa } = require('./modulos')
const p1 = new Pessoa('Pedro')
// console.log(p1)

fetch("https://www.otaviomiranda.com.br/files/json/pessoas.json")
    .then(response => response.json())
    .then(data => console.log(data))