const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please insert a title"],
    trim: true,
  },
  author: {
    type: String,
    require: [true, "please insert an author"],
    trim: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
