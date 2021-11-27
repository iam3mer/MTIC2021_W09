const mongoose = require("mongoose");
// const Author = mongoose.model("Author")

const bookSchema = new mongoose.Schema({
  isbn: String,
  titulo: String,
  genero: String,
  descripcion: String,
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  }
})

module.exports = mongoose.model("Book", bookSchema);
