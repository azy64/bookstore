import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';

const reducer = combineReducers({ bookReducer });
const store = createStore(reducer);
export default store;
