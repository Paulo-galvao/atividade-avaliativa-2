const model = require('../models/book.js');

const db = [
    {
        id: 1,
        titulo: "livro 1",
        autor: "chitaozinho",
        ano: 2000,
        genero: "caipira"
    }
];

let lastId;

if(db.length == 0) {
    lastId = 0;
} else {
    lastId = db[db.length -1].id;
}

function store(body) {
    lastId++;
    const register = model(body, lastId);
    if(register != undefined) {
        db.push(register);
        return 201;
    } else {
        return 400;
    }
}

function showAll() {
    return db;
}

function showById(id) {
    const index = db.findIndex(el => el.id == id);
    if(index != -1) {
        return db[index];
    } else {
        return undefined;
    }
}

function update(body, id) {
    const index = db.findIndex(el => el.id == id);
    const register = model(body, id);
    if(register != undefined && index != -1) {
        db[index] = register;
        return 201;
    } else {
        return 400;
    }
}

function destroy(id) {
    const index = db.findIndex(el => el.id == id);
    if(index != -1) {
        db.splice(index, 1);
        return 201;
    } else {
        return 400;
    }
}

module.exports = {store, showAll, showById, update, destroy};