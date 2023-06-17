import React from "react";

const Book = ({ book, onChangeShelf }) => {
  return (
    <div className="container">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <select
        value={book.shelf}
        onChange={(e) => onChangeShelf(e.target.value)}
      >
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    </div>
  );
};

export default Book;
