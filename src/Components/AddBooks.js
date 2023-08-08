import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import addbooks from "../Images/addbooks.jpg";
import "../Styles/AddBooks.css";
import { Link } from "react-router-dom";

function AddBooks({ setBook }) {
  const validateSchema = yup.object().shape({
    title: yup.string().required("Title is Required!"),
    author: yup.string().required("Author is Required!"),
    description: yup.string().required("Description is Required!"),
  });

  const initialValues = {
    title: "",
    author: "",
    description: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const newBook = {
      Id: Date.now(),
      Title: values.title,
      Author: values.author,
      Description: values.description,
    };

    setBook((prevBooks) => [...prevBooks, newBook]);
    resetForm();
  };

  return (
    <div className="addBooks-container">
      <div className="image-container">
        <img src={addbooks} alt="addbooks" />
      </div>
      <div className="form-container">
        <Formik
          validationSchema={validateSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="input-container">
              <label htmlFor="title" className="label">
                Book Title:
              </label>
              <Field type="text" id="title" name="title" className="input" />
              <ErrorMessage name="title" className="error" component="div" />
            </div>
            <div className="input-container">
              <label htmlFor="author" className="label">
                Author:
              </label>
              <Field type="text" id="author" name="author" className="input" />
              <ErrorMessage name="author" className="error" component="div" />
            </div>
            <div className="input-container">
              <label htmlFor="description" className="label">
                Description:
              </label>
              <Field
                type="text"
                id="description"
                name="description"
                className="input"
              />
              <ErrorMessage
                name="description"
                className="error"
                component="div"
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <Link to="/view">
              <button type="button" className="submit-btn">
                View Books
              </button>
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AddBooks;
