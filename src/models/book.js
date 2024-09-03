function model(body, id) {
    if(
        body.titulo != undefined &&
        body.titulo != "" &&
        body.autor != undefined &&
        body.autor != "" &&
        body.ano != undefined &&
        body.ano != "" &&
        !isNaN(body.ano) &&
        body.genero != undefined &&
        body.genero != ""
    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        }
    } else {
        return undefined;
    }
}

module.exports = model;