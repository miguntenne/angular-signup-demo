var express = require('express');
var app = express();
var userController = require('../app/controller/user.controller.js');

/**
* Contains routes for API and mapping them to controller functions.
*/
app.post('/user/register', userController.register);
app.post('/user/login', userController.login);
app.post('/authy/onetouch', userController.createOneTouchRequest);
app.post('/authy/verify', userController.verifyToken);
app.get('/user', userController.getUser);

module.exports = app;
