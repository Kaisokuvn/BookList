import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetail = (props) => {
   const {deleteBook} = useContext(BookContext);
  return (
    <div className="book-detail" onClick={()=> deleteBook(props.id)}>
      <p>{props.title}</p>
      <p>{props.author}</p>
    </div>
  );
};

export default BookDetail;
