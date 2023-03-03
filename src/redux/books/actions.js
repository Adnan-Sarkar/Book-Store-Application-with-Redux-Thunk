import { ADDED, LOADED, DELETED, EDITED } from "./actionTypes";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

export const added = (book) => {
  return {
    type: ADDED,
    payload: book,
  };
};

export const deleted = (bookId) => {
  return {
    type: DELETED,
    payload: bookId,
  };
};

export const edited = (bookId, updatedBook) => {
  return {
    type: EDITED,
    payload: {
      id: bookId,
      updatedBookInfo: updatedBook,
    },
  };
};
