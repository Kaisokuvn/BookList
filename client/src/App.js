import React from "react";
import Header from "./components/Header";
import BookContextProvider from "./context/BookContext";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Header />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
