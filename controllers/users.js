const mongodb = require('../models/database');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().collection('users').find(); 
  result.toArray().then((users) => {
    res.setHeader('Content-Type','application/json');
    res.status(200).json(users);
  });
};


const getSingle = async (req, res) => {
  const userId = new ObjectId (req.params.id);
  const result = await mongodb.getDatabase().collection('users').find({ _id: userId });
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json'); 
    res.status(200).json(users[0]);
  });
};


const createUser = async (req, res) => {
  try {
    const user = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role || "user",            
        emailVerified: req.body.emailVerified ?? false,
        profilePicture: req.body.profilePicture || null,
        createdAt: req.body.createdAt,
        lastLogin: req.body.lastLogin,
        isActive: req.body.isActive ?? true
    };

    const result = await mongodb.getDatabase().collection('users').insertOne(user);

    if (result.acknowledged) {
      res.status(201).json({ message: 'user created successfully', id: result.insertedId });
    } else {
      res.status(500).json({ message: 'Error creating user' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};


const updateUser = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const user = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role || "user",            
        emailVerified: req.body.emailVerified ?? false,
        profilePicture: req.body.profilePicture || null,
        createdAt: req.body.createdAt,
        lastLogin: req.body.lastLogin,
        isActive: req.body.isActive ?? true
    };

    const result = await mongodb
      .getDatabase().collection('users').replaceOne({ _id: userId }, user);

    if (result.modifiedCount > 0) {
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found or no changes made' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);

    const result = await mongodb
      .getDatabase().collection('users').deleteOne({ _id: userId });

    if (result.deletedCount === 1) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ message: 'User successfully deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};


module.exports = {
  getAll,
  getSingle,
  createUser,
  updateUser,
  deleteUser
};