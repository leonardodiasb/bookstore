import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: e.target.title.value,
      author: e.target.author.value,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBookToStore}>
      <h2>ADD NEW BOOK</h2>
      <input name="title" placeholder="Book Title" />
      <input name="author" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default InputBook;
