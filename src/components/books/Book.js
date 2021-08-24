import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = ({ title, author }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (e) => {
    e.preventDefault();
    dispatch(removeBook(e.target.parentNode.parentNode.parentNode.parentNode.id));
  };

  return (
    <div>
      <div className="book-info">
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>
        <div className="book-btns">
          <button type="button">Comments</button>
          <button type="button" onClick={removeBookFromStore}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-info">
        <p className="percentage">0% Completed</p>
      </div>
      <div className="chapter-info">
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 0</p>
        <button type="button" className="updating">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
