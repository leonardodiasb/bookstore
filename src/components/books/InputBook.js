import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: e.target.title.value,
      category: e.target.author.value,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form className="input-form" onSubmit={submitBookToStore}>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <div>
        <input className="input-title" name="title" placeholder="Book Title" />
        <input className="input-author" name="author" placeholder="Author" />
        <button className="add-btn" type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default InputBook;
