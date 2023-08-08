import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/EditBooks.css";
import addbook from "../Images/addbooks.jpg";

function EditBooks(props) {
  const { book, setBook } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedBook = book.find((item) => item.Id === parseInt(id));

  // Initialize the form data with the selected book's values
  const initialFormData = {
    title: selectedBook ? selectedBook.Title : "",
    author: selectedBook ? selectedBook.Author : "",
    description: selectedBook ? selectedBook.Description : "",
  };

  const [title, setTitle] = useState(initialFormData.title);
  const [author, setAuthor] = useState(initialFormData.author);
  const [description, setDescription] = useState(initialFormData.description);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBooks = book.map((item) => {
      if (item.Id === selectedBook.Id) {
        return {
          ...item,
          Title: title,
          Author: author,
          Description: description,
        };
      }
      return item;
    });

    setBook(updatedBooks);
    navigate("/view");
  };

  if (!selectedBook) {
    return <div className="error">Book not found</div>;
  }

  return (
    <div className="edit-books-container">
      <img src={addbook} alt="addbook" className="image-container" />
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <h1 className="title">Edit Book</h1>
          <label className="label">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Author:</label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="input"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditBooks;
