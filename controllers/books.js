const mongodb = require('../models/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
    res.send('All books');
  };
  
  const getSingle = (req, res) => {
    res.send(`Book with ID ${req.params.id}`);
  };
  
  const createBook = (req, res) => {
    res.send('Book created');
  };
  
  const updateBook = (req, res) => {
    res.send(`Book ${req.params.id} updated`);
  };
  
  const deleteBook = (req, res) => {
    res.send(`Book ${req.params.id} deleted`);
  };
  
  module.exports = {
    getAll,
    getSingle,
    createBook,
    updateBook,
    deleteBook
  };