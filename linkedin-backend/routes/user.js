const express = require('express');
const UserController = require('../controller/user');
const route = express.Router();


route.post('/register', UserController.register);
route.post('/login', UserController.login);
route.post('/google', UserController.loginThroughGmail);

module.exports = route;