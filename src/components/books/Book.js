import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ genre, title, author }) => (
  <div>
    <div className="book-info">
      <span className="book-genre">{genre}</span>
      <span className="book-title">{title}</span>
      <span className="book-author">{author}</span>
      <div className="book-btns">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;