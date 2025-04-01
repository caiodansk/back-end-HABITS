// src/controllers/itemController.js

// Array para armazenar os itens em memória
let items = [];

// Função para listar todos os itens
exports.getItems = (req, res) => {
    res.status(200).json(items);
};

// Função para criar um novo item
exports.createItem = (req, res) => {
    const newItem = req.body;
    newItem.id = items.length + 1;
    items.push(newItem);
    res.status(201).json(newItem);
};

// Função para atualizar um item
exports.updateItem = (req, res) => {
    const { id } = req.params;
    const index = items.findIndex(item => item.id == id);
    
    if (index !== -1) {
        items[index] = { id: parseInt(id), ...req.body };
        res.status(200).json(items[index]);
    } else {
        res.status(404).json({ message: 'Item não encontrado' });
    }
};

// Função para deletar um item
exports.deleteItem = (req, res) => {
    const { id } = req.params;
    items = items.filter(item => item.id != id);
    res.status(200).json({ message: 'Item removido' });
};
