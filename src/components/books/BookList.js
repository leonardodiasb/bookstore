import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../../redux/books/books';
import Book from './Book';

const BookList = () => {
  const bookStore = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBooks());
  }, []);

  return (
    <ul className="book-list">
      {bookStore.map((book) => (
        <li key={book.item_id} id={book.item_id}>
          <Book title={book.title} author={book.category} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
