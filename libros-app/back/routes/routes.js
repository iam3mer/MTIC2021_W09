const express = require("express");

const BooksController = require("../controllers/BooksController");

const router = express.Router();

router.get('/books', BooksController.getAllBooks);

module.exports = router;
