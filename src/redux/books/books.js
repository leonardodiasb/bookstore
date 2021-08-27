import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_BOOKS = 'bookStore/books/SET_BOOKS';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rYLu2wJcNwGoyikqpho4/books/';

const apiObjToArray = (data) => {
  const bookList = [];
  Object.entries(data).forEach((book) => {
    bookList.push(
      {
        title: book[1][0].title,
        category: book[1][0].category,
        item_id: `${book[0]}`,
      },
    );
  });
  return bookList;
};

// eslint-disable-next-line
export const setBooks = () => async (dispatch, getState) => {
  const response = await axios.get(baseURL);

  dispatch({
    type: SET_BOOKS,
    payload: apiObjToArray(response.data),
  });
};

export const addBook = (payload) => async (dispatch) => {
  await axios.post(baseURL, payload);

  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  await axios.delete(baseURL + payload);

  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case SET_BOOKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
