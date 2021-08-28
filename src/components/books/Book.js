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
    <div className="book-li">
      <div className="book-info">
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <div className="book-btns">
          <button type="button">Comments</button>
          <vr className="vr" />
          <button type="button" onClick={removeBookFromStore}>Remove</button>
          <vr className="vr" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-info">
        <div className="bar-container">
          <div className="bar bar-background" />
          <div className="bar bar-completion" />
        </div>
        <div>
          <span className="Percent-Complete">25%</span>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <vr className="vr division-line" />
      <div className="chapter-info">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="current-lesson">Chapter 0</p>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
