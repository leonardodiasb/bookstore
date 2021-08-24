import React from 'react';
import Book from './Book';

const BookList = () => {
  const bookstore = [
    {
      genre: 'Action',
      title: 'Snatch',
      author: 'Guy Pearce',
      id: '1',
    },
    {
      genre: 'Action',
      title: 'Django',
      author: 'Quetin Tarantino',
      id: '2',
    },
  ];

  return (
    <ul className="book-list">
      {bookstore.map((book) => (
        <li key={book.id}>
          <Book genre={book.genre} title={book.title} author={book.author} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
