const express = require('express');
const router = express.Router();
const users = require('./users');
const books = require('./books');

router.use('/books', books);
router.use('/users', users);


module.exports = router;