import React, { useState } from "react";
import booklogo from "../Images/booklogo.png";
import "../Styles/ViewBooks.css";
import { Link } from "react-router-dom";
import AddBooks from "./AddBooks";

function ViewBooks({ books, deleteBook, setBook }) {
  const [showAddBooks, setShowAddBooks] = useState(false); // State to control AddBooks container

  return (
    <div className="viewbooks-container">
      <div className="title-container">
        <img src={booklogo} alt="booklogo" className="book-logo" />
        <h1 className="title">The pursuit for knowledge is limitless.</h1>
        <Link to="/add" className="add-books">
          <i className="fa-regular fa-plus"></i>Add
        </Link>
      </div>
      <div className="contents">
        {books.map((bookItem) => (
          <div key={bookItem.Id} className="book-entry">
            <span className="book">Title: {bookItem.Title}</span>
            <span className="book">Author: {bookItem.Author}</span>
            <span className="book">Description: {bookItem.Description}</span>
            <Link to={`/edit/${bookItem.Id}`}>
              <button type="button" className="submit-btn">
                Edit
              </button>
            </Link>
            <button
              type="button"
              className="submit-btn"
              onClick={() => deleteBook(bookItem.Id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {showAddBooks && <AddBooks setBook={setBook} />}
    </div>
  );
}

export default ViewBooks;
