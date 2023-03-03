import { edited } from "../actions";

const editBook = (bookId, bookInfo) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...bookInfo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const book = await response.json();

    dispatch(edited(book.id, book));
  };
};

export default editBook;
