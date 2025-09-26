const express = require('express');
const router = express.Router();
const book = require('../controllers/books');

// GET all
router.get('/', book.getAll);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieves all books
 *     responses:
 *       200:
 *         description: List of books
 *         content:
 *           application/json:
 *             example:
 *               - title: "Clean Code"
 *                 author: "Robert C. Martin"
 *                 genre: "Programming"
 *                 year: 2008
 *                 isbn: "9780132350884"
 *                 availableCopies: 4
 *                 totalCopies: 5
 */

// GET single
router.get('/:id', book.getSingle);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Retrieves a book by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the book to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book found
 *         content:
 *           application/json:
 *             example:
 *               title: "Clean Code"
 *               author: "Robert C. Martin"
 *               genre: "Programming"
 *               year: 2008
 *               isbn: "9780132350884"
 *               availableCopies: 4
 *               totalCopies: 5
 *       404:
 *         description: Book not found
 */

// POST
router.post('/', book.createBook);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Creates a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Clean Code"
 *               author:
 *                 type: string
 *                 example: "Robert C. Martin"
 *               genre:
 *                 type: string
 *                 example: "Programming"
 *               year:
 *                 type: integer
 *                 example: 2008
 *               isbn:
 *                 type: string
 *                 example: "9780132350884"
 *               availableCopies:
 *                 type: integer
 *                 example: 4
 *               totalCopies:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Invalid request
 */

// PUT
router.put('/:id', book.updateBook);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Updates a book by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the book to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Clean Code"
 *               author:
 *                 type: string
 *                 example: "Robert C. Martin"
 *               genre:
 *                 type: string
 *                 example: "Programming"
 *               year:
 *                 type: integer
 *                 example: 2008
 *               isbn:
 *                 type: string
 *                 example: "9780132350884"
 *               availableCopies:
 *                 type: integer
 *                 example: 4
 *               totalCopies:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Book not found
 */

// DELETE
router.delete('/:id', book.deleteBook);

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Deletes a book by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the book to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */

module.exports = router;
