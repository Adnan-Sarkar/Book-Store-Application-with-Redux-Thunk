import { ADDED, LOADED, DELETED, EDITED } from "./actionTypes";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case LOADED:
      return [...action.payload];

    case ADDED:
      return [...state, action.payload];

    case DELETED:
      return state.filter((book) => book.id !== action.payload);

    case EDITED:
      const { id, updatedBookInfo } = action.payload;
      return state.map((book) => {
        if (book.id === id) {
          return {
            ...updatedBookInfo,
          };
        } else {
          return book;
        }
      });

    default:
      return state;
  }
};

export default booksReducer;
