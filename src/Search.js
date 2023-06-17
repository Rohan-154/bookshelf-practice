import React, { useContext, useState } from "react";
import { BookContext } from "./BookContext";
import { booksData } from "./data";

const Search = () => {
  const { dispatch } = useContext(BookContext);
  const [query, setQuery] = useState("");

  const searchBooks = (query) => {
    booksData
      .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
      .forEach((book) => {
        dispatch({
          type: "ADD_BOOK",
          book
        });
      });
  };

  return (
    <div className="searchContainer ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="searchInput"
      />
      <button onClick={() => searchBooks(query)} className="searchButton">
        Search
      </button>
    </div>
  );
};

export default Search;
