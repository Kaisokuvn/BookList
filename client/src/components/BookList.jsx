import React, { useContext, useEffect } from "react";
import { BookContext } from "../context/BookContext";
import BookDetail from "./BookDetail";
import BookForm from "./BookForm";

const BookList = () => {
  const { books, getBooks } = useContext(BookContext);
  useEffect(()=>{
    
      getBooks();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookDetail key={index} title={book.title} id={book._id} author={book.author} />
      ))}
      <BookForm />
    </div>
  );
};

export default BookList;
