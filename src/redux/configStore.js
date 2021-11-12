import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';

const reducer = combineReducers({ bookReducer });
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
