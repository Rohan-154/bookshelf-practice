import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookContextProvider } from "./BookContext";
import Bookshelf from "./BookShelf";
import Search from "./Search";
import "./styles.css";

function App() {
  return (
    <BookContextProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Bookshelf
                    title="Currently Reading"
                    shelf="currentlyReading"
                  />
                  <Bookshelf title="Want to Read" shelf="wantToRead" />
                  <Bookshelf title="Read" shelf="read" />
                  <Link to="/search">Search</Link>
                </div>
              }
            />
            <Route
              path="/search"
              element={
                <div>
                  <Search />
                  <Link to="/">Back</Link>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </BookContextProvider>
  );
}

export default App;
