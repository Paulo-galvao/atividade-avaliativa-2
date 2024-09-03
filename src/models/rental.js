const book_db = require('../controllers/book.js').db;
const student_db = require('../controllers/student.js').db;

function model(body, id) {
    const index_book = book_db.findIndex(el => el.id == body.livro_id);
    const index_student = student_db.findIndex(el => el.id == body.estudante_id);
    if(
        body.livro_id != undefined && 
        body.livro_id != "" &&
        !isNaN(body.livro_id) &&
        index_book != -1 &&
        index_student != -1 &&
        body.estudante_id != undefined &&
        body.estudante_id != "" &&
        !isNaN(body.estudante_id) &&
        body.data_aluguel != undefined && 
        body.data_aluguel != "" &&
        body.data_devolucao != undefined && 
        body.data_devolucao != ""
    ) {
        return {
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            data_aluguel: body.data_aluguel,
            data_devolucao: body.data_devolucao
        }
    } else {
        return undefined;
    }
}

module.exports = model;