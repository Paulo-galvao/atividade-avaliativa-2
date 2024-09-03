const express = require('express');
const app = express();
const port = 3000;

/*
    ROUTERS
*/

const book_router = require('./routes/book.js');

app.use(express.json());

app.use('/biblioteca', book_router); // rota livro

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
});