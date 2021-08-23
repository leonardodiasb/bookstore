import React from 'react';
import Book from './Book';

const BookList = () => {
  const bookstore = [{
    genre: 'Action',
    title: 'Snatch',
    author: 'Guy Pearce',
    id: '1',
  }];

  return (
    <ul className="book-list">
      {bookstore.map((book) => (
        <li key={book.item_id}>
          <Book genre={book.genre} title={book.title} author={book.author} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;