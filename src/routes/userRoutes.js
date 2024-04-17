const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// TODO: change this route to a post!
router.get('/register', userController.register);


module.exports = router;