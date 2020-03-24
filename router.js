const express = require('express');
const service = require('./service');

const router = express.Router();

router.get('/books', service.getAllBooks);

router.post('/books', service.addBook);

router.get('/books/:id', service.toEditBook);

router.put('/books/:id', service.editBook);

router.delete('/books/:id', service.deleteBook);

router.get('/books/book/:name', service.checkName);

module.exports = router;
