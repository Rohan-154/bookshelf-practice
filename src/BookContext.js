import React, { createContext, useReducer, useEffect } from "react";
import { booksData } from "./data";

export const BookContext = createContext();

const initialState = {
  books: [],
  currentlyReading: [],
  wantToRead: [],
  read: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: action.books,
        currentlyReading: action.books.filter(
          (book) => book.shelf === "currentlyReading"
        ),
        wantToRead: action.books.filter((book) => book.shelf === "wantToRead"),
        read: action.books.filter((book) => book.shelf === "read")
      };
    case "CHANGE_SHELF":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.book.id ? { ...book, shelf: action.shelf } : book
        ),
        currentlyReading: state.books.filter(
          (book) => book.shelf === "currentlyReading"
        ),
        wantToRead: state.books.filter((book) => book.shelf === "wantToRead"),
        read: state.books.filter((book) => book.shelf === "read")
      };
    case "ADD_BOOK":
      if (state.books.some((book) => book.id === action.book.id)) {
        return state;
      }

      return {
        ...state,
        books: [...state.books, action.book]
      };
    default:
      return state;
  }
};

export const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "SET_BOOKS",
      books: booksData
    });
  }, []);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
