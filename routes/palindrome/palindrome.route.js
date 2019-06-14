const express = require('express');
const palindromeRoute = express.Router();
const palindromeController = require('./palindrome.controller');

palindromeRoute.route('/').get(palindromeController.check);

module.exports = palindromeRoute;
