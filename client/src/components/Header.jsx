import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Header = () => {
  const { books } = useContext(BookContext);
  console.log(books);
  return (
    <div className="header">
      <h1> My Book-List</h1>
      {books.length === 0 ? (
        <span>You have freetime, enjoy it</span>
      ) : (
        <span> Currently you have {books.length} books </span>
      )}
    </div>
  );
};

export default Header;
