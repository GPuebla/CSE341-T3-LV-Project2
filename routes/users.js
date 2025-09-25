const express = require('express');
const router = express.Router();
const user = require('../controllers/users');

// GET all
router.get('/', user.getAll);

// GET single
router.get('/:id', user.getSingle);

// POST
router.post('/', user.createUser);

// PUT
router.put('/:id', user.updateUser);

// DELETE
router.delete('/:id', user.deleteUser);


module.exports = router;
