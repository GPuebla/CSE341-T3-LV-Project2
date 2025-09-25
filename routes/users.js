const express = require('express');
const router = express.Router();
const contact = require('../controllers/users');

// GET all
router.get('/', contact.getAll);

// GET single
router.get('/:id', contact.getSingle);

// POST
router.post('/', contact.createContact);

// PUT
router.put('/:id', contact.updateContact);

// DELETE
router.delete('/:id', contact.deleteContact);


module.exports = router;
