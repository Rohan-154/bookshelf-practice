import React, { useContext } from "react";
import { BookContext } from "./BookContext";
import Book from "./Book";

const Bookshelf = ({ title, shelf }) => {
  const { state, dispatch } = useContext(BookContext);

  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <div className="books">
        {state[shelf].map((book) => (
          <Book
            key={book.id}
            book={book}
            onChangeShelf={(shelf) => {
              dispatch({
                type: "CHANGE_SHELF",
                book,
                shelf
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
