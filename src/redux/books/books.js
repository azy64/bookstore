const INIT_CONST = 'bookstore/books/';
// const LOAD_BOOKS = `${INIT_CONST}LOAD_BOOKS`;
const ADD_BOOK = `${INIT_CONST}ADD_BOOK`;
const REMOVE_BOOK = `${INIT_CONST}REMOVE_BOOK`;

const initState = {
  books: [],
  counter: 1,
};
const remove = (tab = [], id) => {
  const newBooks = tab.filter((book) => book.id !== id);
  return newBooks;
};

const bookReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      // const index = state.books.findIndex((item) => item.title === action.book.tite);
      if (state.books.findIndex((item) => item.title === action.book.tite) === -1) {
        return { ...state, books: [...state.books, action.book], counter: state.counter + 1 };
      }
      return state;
    case REMOVE_BOOK:
      // const newState = state.books.filter((book) => book.id !== action.id);
      return { ...state, books: remove(state.books, action.id) };
    default:
      return state;
  }
};

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
export default bookReducer;
