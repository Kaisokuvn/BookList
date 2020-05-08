const express = require("express");

const Book = require("../models/books");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const books = await Book.find({});
      return res.status(200).json({
        suscess: true,
        count: books.length,
        data: books,
      });
    } catch (error) {
      return res.status(400).json({
        suscess: false,
        count: 0,
        data: {},
        error: error.message,
      });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, author } = req.body;
      const newbook = await Book.create(req.body);

      return res.status(200).json({
        suscess: true,
        data: newbook,
      });
    } catch (error) {
      return res.status(400).json({
        suscess: false,
        count: 0,
        data: {},
        error: error.message,
      });
    }
  });

router.route("/:id").delete(async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    book.remove();
    return res.status(200).json({
      suscess: true,
      data: {},
    });
  } catch (error) {
    return res.status(400).json({
      suscess: false,
      count: 0,
      data: {},
      error: error.message,
    });
  }
});

module.exports = router;
