const User = require('../models/User');
const bcrypt = requre('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

exports.register = async (req, res) => {
    // TODO: pull the username, email and password from the request body
    // if the user exists then give a status 400 with a message of Email already User.exists...

    // TODO: hash password and create a new User object
    // and save the user to the database

    // return a response status of 201 (created) with a message of User registered successfully
    // else catch an error returning a status of 500 (server error) with a message of internal server error
    res.status(418).json({ message: 'lets code our register endpoint or i am a teapot!' });
}