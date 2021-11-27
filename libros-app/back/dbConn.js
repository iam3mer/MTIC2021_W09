const mongoose = require("mongoose");
const { URI_DB } = require("./config");

mongoose
  .connect(URI_DB)
  .then(() => console.log("Conexión establecida con la base de datos!"))
  .catch(err => console.error(err));
