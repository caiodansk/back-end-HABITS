const express = require('express');

const app = express();
const port = 3000;
app.use(express.json());

const itemRoutes = require('./src/routes/itemRoutes');
app.use('/items', itemRoutes);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
