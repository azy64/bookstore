const INIT_CONST = 'bookstore/books/';
const LOAD_BOOKS = `${INIT_CONST}LOAD_BOOKS`;
const ADD_BOOK = `${INIT_CONST}ADD_BOOK`;
const REMOVE_BOOK = `${INIT_CONST}REMOVE_BOOK`;
const BOOK_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hi5j493lEPZn8qT2kBPM/';
const initState = {
  books: [],
  savedBooks: [],
  counter: 1,
};
/* const remove = (tab = [], id) => {
  const newBooks = tab.filter((book) => book.id !== id);
  return newBooks;
}; */
export const normalizeData = (data = {}) => {
  const tab = [];
  const tmp = Object.entries(data);
  for (let i = 0; i < tmp.length; i += 1) {
    tmp[i][1][0].id = parseInt(tmp[i][0], 10);
    tab.push(tmp[i][1][0]);
  }
  return tab;
};

export const increment = (books) => {
  let max = 0;
  books.map((item) => {
    if (item.id > max)max = item.id;
    return item;
  });
  return max;
};
const returnNewState = (state, book) => {
  const { counter } = state;
  return { ...state, savedBooks: [...state.savedBooks, book], counter: counter + 1 };
};

const bookReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        books: action.books,
      };
    case ADD_BOOK:
      return returnNewState(state, action.book);
    case REMOVE_BOOK:
      return { ...state };
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

export function getDataFromApi() {
  return async (dispatch) => {
    try {
      const r = await fetch(`${BOOK_API}books`);
      const data = await r.json();
      dispatch({ type: LOAD_BOOKS, books: data });
    } catch (err) {
      dispatch({ type: LOAD_BOOKS, books: [] });
    }
  };
}
export function saveBook(book) {
  return async (dispatch) => {
    const b = JSON.stringify(book);
    try {
      const r = await fetch(`${BOOK_API}books`,
        {
          method: 'POST',
          body: b,
          headers: { 'Content-Type': 'application/json' },
        });
      const data = await r.text();
      if (data.toLocaleLowerCase().trim() === 'created') {
        dispatch({ type: ADD_BOOK, book });
        dispatch(getDataFromApi());
      }
    } catch (err) {
      dispatch({ type: LOAD_BOOKS, books: [] });
    }
  };
}
export function removeOneBook(id) {
  return async (dispatch) => {
    try {
      const re = await fetch(`${BOOK_API}books/${id}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ item_id: `${id}` }),
        });
      const result = await re.text();
      if (result.trim() === 'The book was deleted successfully!') {
        dispatch(removeBook(id));
        dispatch(getDataFromApi());
      }
    } catch (err) {
      dispatch(removeBook(0));
    }
  };
}
export default bookReducer;
