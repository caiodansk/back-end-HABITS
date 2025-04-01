const express = require('express');
const router = express.Router();  // Adicionando a criação do roteador

// Importando o controller
const itemController = require('../controllers/itemController');

// Rotas CRUD
router.get('/', itemController.getItems); // Listar itens
router.post('/', itemController.createItem); // Criar um novo item
router.put('/:id', itemController.updateItem); // Atualizar um item
router.delete('/:id', itemController.deleteItem); // Deletar um item

module.exports = router;
