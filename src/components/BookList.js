import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import fetchBooks from "./../redux/books/thunk/fetchBooks";
import { bookTypeChanged } from "./../redux/filter/actions";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  const handleBookCategory = (category) => {
    dispatch(bookTypeChanged(category));
  };

  const filterByCategory = (book) => {
    const { bookType } = filter;

    switch (bookType) {
      case "Featured":
        return book.featured;

      default:
        return true;
    }
  };

  const filterByBookName = (book) => {
    const { filterBooks } = filter;
    if (filterBooks.length > 0) {
      if (book.name.toLowerCase().includes(filterBooks.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className={`filter-btn ${
              filter.bookType === "All" && "active-filter"
            }`}
            id="lws-filterAll"
            onClick={() => handleBookCategory("All")}
          >
            All
          </button>
          <button
            className={`filter-btn ${
              filter.bookType === "Featured" && "active-filter"
            }`}
            id="lws-filterFeatured"
            onClick={() => handleBookCategory("Featured")}
          >
            Featured
          </button>
        </div>
      </div>

      <div className="lws-bookContainer">
        {books
          ?.filter(filterByBookName)
          ?.filter(filterByCategory)
          ?.map((book) => (
            <Book key={book.id} bookInfo={book} />
          ))}
        {books.length === 0 && <p>No Books Found!!</p>}
      </div>
    </div>
  );
};

export default BookList;
