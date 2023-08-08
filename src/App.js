import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewBooks from "./Components/ViewBooks";
import EditBooks from "./Components/EditBooks";
import DashBoard from "./DashBoard";
import AddBooks from "./Components/AddBooks";

function App() {
  const [book, setBook] = useState([
    {
      Id: 1,
      Title: "Atomic Habits",
      Author: "James Clear",
      Description:
        "Atomic Habits is the most comprehensive and practical guide on how to create good habits, break bad ones, and get 1 percent better every day.",
    },
    {
      Id: 2,
      Title: "Ponniyin Selvan",
      Author: "Kalki KrishnaMoorthy",
      Description:
        "A historical novel is called Ponniyin Selvan.The story takes place during the Chola dynasty's 10th century",
    },
    {
      Id: 3,
      Title: "Cracking the Coding Interview",
      Author: "Gayle Laakmann McDowell",
      Description:
        "This is a deeply technical book and focuses on the software engineering skills to ace your interview. The book is over 700 pages and includes 189 programming interview questions and answers",
    },
  ]);

  const deleteBook = (id) => {
    const updatedBooks = book.filter((item) => item.Id !== id);
    setBook(updatedBooks);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route
            path="/view"
            element={
              <ViewBooks
                books={book}
                deleteBook={deleteBook}
                setBook={setBook}
              />
            }
          />
          <Route path="/add" element={<AddBooks setBook={setBook} />} />
          <Route
            path="/edit/:id"
            element={<EditBooks book={book} setBook={setBook} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
