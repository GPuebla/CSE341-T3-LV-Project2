const mongodb = require('../models/database');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().collection('books').find(); 
  result.toArray().then((books) => {
    res.setHeader('Content-Type','application/json');
    res.status(200).json(books);
  });
};


const getSingle = async (req, res) => {
  const bookId = new ObjectId (req.params.id);
  const result = await mongodb.getDatabase().collection('books').find({ _id: bookId });
  result.toArray().then((books) => {
    res.setHeader('Content-Type', 'application/json'); 
    res.status(200).json(books[0]);
  });
};


const createBook = async (req, res) => {
  try {
    const book = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year,
        isbn: req.body.isbn,
        availableCopies: req.body.availableCopies,
        totalCopies: req.body.totalCopies
    };

    const result = await mongodb.getDatabase().collection('books').insertOne(book);

    if (result.acknowledged) {
      res.status(201).json({ message: 'book created successfully', id: result.insertedId });
    } else {
      res.status(500).json({ message: 'Error creating book' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error: error.message });
  }
};


const updateBook = async (req, res) => {
  try {
    const bookId = new ObjectId(req.params.id);
    const book = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year,
        isbn: req.body.isbn,
        availableCopies: req.body.availableCopies,
        totalCopies: req.body.totalCopies
    };

    const result = await mongodb
      .getDatabase().collection('books').replaceOne({ _id: bookId }, book);

    if (result.modifiedCount > 0) {
      res.status(200).json({ message: 'Book updated successfully' });
    } else {
      res.status(404).json({ message: 'Book not found or no changes made' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error: error.message });
  }
};


const deleteBook = async (req, res) => {
  try {
    const bookId = new ObjectId(req.params.id);

    const result = await mongodb
      .getDatabase().collection('books').deleteOne({ _id: bookId });

    if (result.deletedCount === 1) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ message: 'Book successfully deleted' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error: error.message });
  }
};


module.exports = {
  getAll,
  getSingle,
  createBook,
  updateBook,
  deleteBook
};