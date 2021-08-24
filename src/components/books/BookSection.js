import React from 'react';
import BookList from './BookList';
import InputBook from './InputBook';

const BookSection = () => (
  <div className="book-section">
    <BookList />
    <InputBook />
  </div>
);

export default BookSection;
