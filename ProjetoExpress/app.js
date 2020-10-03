const express = require('express');
const rotasProdutos = require('./rotas/rotasProdutos')

let app = express();

//direcionando a rota do servidor
app.get('/',(req,res) => {
    res.send('Ola Mundo!');
})
app.get('/contatos', (req,res) => {
    res.send(["Contato1","Contato3"]);
    
})

// app.get('/produtos/:id?', (req,res) =>{
//     let {id} = req.params;
//     console.log("Eu tenho um produto com o id: ",id);
// })

app.use('/produtos',rotasProdutos);

//Criando um Servidor
app.listen(3000,() => {
    console.log('Servidor Rodando')
})
