//Servidor com HTTP

// const http = require('http');

// http.createServer((req, res) =>  {
// 	res.writeHead(200, {"Content-Type": "text/html"});
// 	if(req.url == '/'){
// 		res.end('servidor rodando')
// 	}
// }).listen(3000, () => {
// 	console.log("Servidor rodando na porta 3000");
// });

// app.get('/home', (req, res) => {
// 	res.send('Ola voce esta na rota home')
	
// })

// app.get('/users', (req, res) => {
// 	res.send('ola voce esta na lista de usuario')
	
// })


// let array = ['item1', 'item2', 'item3' ]
// let objeto = {nome: "Bruno"}
// let arrayDeObjetos =[
// 	{
// 		nome: "Bruno",
// 		idade: 30
// 	},
// 	{
// 		nome: "Cristiane Pin",
// 		idade: 34
// 	}
// ]
//Servidor com Express
const express = require("express")

const nodemon = require("nodemon")

//importando rotas da aplicacao
const routes = require("./routes")

const app = express()

app.use(routes);


//Granularidade - separar as coisas de forma que cada processo/etapa tenha seu respectivo lugar





app.listen(3000, () => {
	console.log('Servidor Rodando')
})	

// NODE -> Possibilitar da gente conseguir trabalhar com o JS no lado do servidor, mais conhecido como backend, ou seja, trabalhar com o JS no backend

// Express -> é um modulo que implementa diversas bibliotecas/pacotes para funcionar 

