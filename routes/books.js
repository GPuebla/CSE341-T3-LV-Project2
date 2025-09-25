const express = require('express');
const router = express.Router();
const book = require('../controllers/books');

// GET all
router.get('/', book.getAll);

// GET single
router.get('/:id', book.getSingle);

// POST
router.post('/', book.createBook);

// PUT
router.put('/:id', book.updateBook);

// DELETE
router.delete('/:id', book.deleteBook);


module.exports = router;