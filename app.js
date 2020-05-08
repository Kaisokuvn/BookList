const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");

const cors = require("cors");

const booksRouter = require("./routes/books");

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("build"));

const url = process.env.DB_URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => console.log("connect to database"));

app.use("/books", booksRouter);

app.listen(port, () => {
  console.log("server is running on port " + port);
});
