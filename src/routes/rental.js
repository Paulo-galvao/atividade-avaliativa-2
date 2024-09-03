const express = require('express');
const router = express.Router();
const rental_controller = require('../controllers/rental.js');

router.get('/', (req, res) => {
    res.json(rental_controller.showAll());
});

router.post('/', (req, res) => {
    const code = rental_controller.store(req.body);
    res.status(code).json();
});

router.get('/:id', (req, res) => {
    res.json(rental_controller.showById(req.params.id))
});

router.put('/:id', (req, res) => {
    const code = rental_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete('/:id', (req, res) => {
    const code = rental_controller.destroy(req.params.id);
    res.status(code).json();
});

module.exports = router;