const { response } = require("express");
const booksModel = require("../models/BooksModel");

module.exports = class BooksController {

  static async getAllBooks (request, respose) {
    try {
      const books = await booksModel.find();
      if (books) {
        response.status(200).json(books);
      } else {
        response.status(404).json();
      }
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  };
}