const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

require('./database');

routes.post('/users', UserController.store);

module.exports = routes;
