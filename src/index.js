const express = require('express');
const app = express();
const port = 3000;

/*
    ROUTERS
*/

const book_router = require('./routes/book.js');
const student_router = require('./routes/student.js');

app.use(express.json());

app.use('/livro', book_router); // rota livro
app.use('/estudante', student_router); // rota estudante

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
});