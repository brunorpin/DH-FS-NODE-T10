var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let cards = [
    {
      'caminho_imagem': './images/1.jpg',
      'titulo': 'Primeiro Titulo',
      'texto': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet deserunt commodi error quis necessitatibus, consectetur explicabo voluptatem magni labore expedita nostrum, impedit incidunt consequuntur sed ex sapiente magnam? Asperiores.',
        'botao': 'Ver mais'
    },
    {
      'caminho_imagem': './images/1.jpg',
      'titulo': 'Segundo Titulo',
      'texto': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet deserunt commodi error quis necessitatibus, consectetur explicabo voluptatem magni labore expedita nostrum, impedit incidunt consequuntur sed ex sapiente magnam? Asperiores.',
        'botao': 'Ver mais'
    },
    {
      'caminho_imagem': './images/1.jpg',
      'titulo': 'Terceiro Titulo',
      'texto': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet deserunt commodi error quis necessitatibus, consectetur explicabo voluptatem magni labore expedita nostrum, impedit incidunt consequuntur sed ex sapiente magnam? Asperiores.',
        'botao': 'Ver mais'
    },
  ];
  res.render('index', {cards: cards});
});

module.exports = router;
