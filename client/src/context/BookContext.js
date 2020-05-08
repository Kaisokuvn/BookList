import React, { createContext, useReducer } from "react";
import { BookReducer } from "../reducer/BookReducer";
import axios from "axios";

const initializeSate = {
  isLoading: true,
  error: "",
  books: [],
};

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [state, dispatch] = useReducer(BookReducer, initializeSate);

  const deleteBook = async (id) => {
    try {
      await axios.delete(`/books/${id}`);
      dispatch({ type: "DELETE_BOOK", payload: id });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.response.error });
    }
  };
  const addBook = async (book) => {
    try {
      const options = {
        headers: { "content-type": "application/json" },
      };
      const newbook = await axios.post("/books", book, options);
      dispatch({ type: "ADD_BOOK", payload: newbook.data.data });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.response.error });
    }
  };
  const getBooks = async () => {
    try {
      const books = await axios.get("/books");

      dispatch({ type: "GET_BOOKS", payload: books.data.data });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.response.error });
    }
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        deleteBook,
        addBook,
        getBooks,
        error: state.error,
        isLoading: state.isLoading
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
