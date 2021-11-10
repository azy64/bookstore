const INIT_CONST = 'bookstore/books/';
// const LOAD_BOOKS = `${INIT_CONST}LOAD_BOOKS`;
const ADD_BOOK = `${INIT_CONST}ADD_BOOK`;
const REMOVE_BOOK = `${INIT_CONST}REMOVE_BOOK`;

const initState = {
  books: [],
  counter: 1,
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
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(book) {
  return { type: REMOVE_BOOK, book };
}
export default bookReducer;
