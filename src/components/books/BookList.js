import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookStore = useSelector((state) => state.booksReducer);

  return (
    <ul className="book-list">
      {bookStore.map((book) => (
        <li key={book.id} id={book.id}>
          <Book title={book.title} author={book.author} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
