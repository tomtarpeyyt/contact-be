const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// TODO: change this route to a post!
router.get('/reguster', userController.register);


module.exports = router;