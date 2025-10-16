const express = require('express');
const router = express.Router();

// Import the controller function
const { register } = require('../controllers/authController');

// Define the route
router.post('/register', register);

module.exports = router;