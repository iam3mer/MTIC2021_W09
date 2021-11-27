const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema ({
  nombre: String,
  biografia: String,
  fecha_nacimiento: Date,
  nacionalidad: String
});

module.exports = mongoose.model("Author", authorSchema);
