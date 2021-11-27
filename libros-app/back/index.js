const express = require("express");
const cors = require("cors");
const { NODE_ENV, PORT } = require("./config");
const dbConn = require("./dbConn")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', require("./routes/routes"));

// Para el deploy
if (NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/site/`));
  app.use("*", (req, res) => {
    res.sendFile(`${__dirname}/site/index.html`)
  });
};

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://127.0.0.1:${PORT}`);
})
