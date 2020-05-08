import React, { useState, useContext } from "react";

import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [ book, setBook ] = useState({
    title: "",
    author: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevValue) => {
      return {
        ...prevValue,

        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(book);
    setBook({
      title: "",
      author: "",
      
    });
  };

  return (
    <div className="book-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-controller"
            placeholder="Book title"
            onChange={handleChange}
            value={book.title}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="author"
            className="form-controller"
            placeholder="Author"
            onChange={handleChange}
            value={book.author}
          />
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default BookForm;
