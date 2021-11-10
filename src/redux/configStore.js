import { createStore } from 'redux';
import bookReducer from './books/books';

const store = createStore(bookReducer);
export default store;
