const express = require("express");
const routes = express.Router();
const ProdutoController = require("../controllers/ProdutoController")
const QueryController = require("../controllers/QueryController")

//let produtos = [];

//Desafio 2. Terao que criar uma rota/produto/adicionar que terá 4 parametros, sendo assim iremos receber estes parametros e retornar um produto com o que recebemos
//Exemplo: /:nome/:preco/:quantidade/:codigo
//			/teste/10.00/1000/testebarcode
//produto
// {
// 	nome: "teste",
//  preco: 10.00,
//  quantidade: 1000,
//  codigo: "testebarcode"
//  }


routes.get('/produto/adicionar/:nome/:preco?/:quantidade?/:codigo?', ProdutoController.getProduto )

//Desafio 1 - criar um parametro para nome e uma query string para sobrenome e exibir os dois concatenados na teça com a mensagem de saudacao "ola" + nome + sobrenome
routes.get('/query/params/:nome', QueryController.getQController)

module.exports = routes;