const express = require("express");
const routes = express.Router();

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

routes.get('/produto/adicionar/:nome/:preco/:quantidade/:codigo', (req, res) => {

	let {nome, preco, quantidade, codigo} = req.params;
	
	let produto ={
		nome,
		preco,
		quantidade,
		codigo
	}
	
	res.send(produto)
	
})

module.exports = routes;