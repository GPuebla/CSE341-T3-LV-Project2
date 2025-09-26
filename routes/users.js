const express = require('express');
const router = express.Router();
const user = require('../controllers/users');

// GET all
router.get('/', user.getAll);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieves all users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             example:
 *               - name: "Bob Smith"
 *                 email: "bob@example.com"
 *                 role: "admin"
 *                 emailVerified: true
 *                 profilePicture: "https://avatars.githubusercontent.com/u/12345678?v=4"
 *                 createdAt: "2025-03-20"
 *                 lastLogin: "2025-09-20"
 *                 isActive: true
 */

// GET single
router.get('/:id', user.getSingle);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieves a user by their ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             example:
 *               name: "Bob Smith"
 *               email: "bob@example.com"
 *               role: "admin"
 *               emailVerified: true
 *               profilePicture: "https://avatars.githubusercontent.com/u/12345678?v=4"
 *               createdAt: "2025-03-20"
 *               lastLogin: "2025-09-20"
 *               isActive: true
 *       404:
 *         description: User not found
 */

// POST
router.post('/', user.createUser);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Creates a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Bob Smith"
 *               email:
 *                 type: string
 *                 example: "bob@example.com"
 *               role:
 *                 type: string
 *                 example: "admin"
 *               emailVerified:
 *                 type: boolean
 *                 example: true
 *               profilePicture:
 *                 type: string
 *                 example: "https://avatars.githubusercontent.com/u/12345678?v=4"
 *               createdAt:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-20"
 *               lastLogin:
 *                 type: string
 *                 format: date
 *                 example: "2025-09-20"
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid request
 */

// PUT
router.put('/:id', user.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Updates a user by their ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Bob Smith"
 *               email:
 *                 type: string
 *                 example: "bob@example.com"
 *               role:
 *                 type: string
 *                 example: "admin"
 *               emailVerified:
 *                 type: boolean
 *                 example: true
 *               profilePicture:
 *                 type: string
 *                 example: "https://avatars.githubusercontent.com/u/12345678?v=4"
 *               createdAt:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-20"
 *               lastLogin:
 *                 type: string
 *                 format: date
 *                 example: "2025-09-20"
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: User not found
 */

// DELETE
router.delete('/:id', user.deleteUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deletes a user by their ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */

module.exports = router;
