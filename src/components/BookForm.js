import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { normalForType } from "../redux/formType/actions";
import addBook from "./../redux/books/thunk/addBook";
import editBook from "./../redux/books/thunk/editBook";

const BookForm = () => {
  const formType = useSelector((state) => state.formType);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: "",
  });

  useEffect(() => {
    if (formType.type === "Edit") {
      const bookInfo = books.filter((book) => book.id === formType.bookId)[0];
      const { author, featured, name, price, rating, thumbnail } = bookInfo;
      setInput({
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
      });
    }
  }, [formType.type, books, formType.bookId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType.type === "Edit") {
      dispatch(editBook(formType.bookId, input));
      dispatch(normalForType());
    } else {
      dispatch(addBook(input));
    }

    setInput({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: "",
    });
  };

  const handleNameInput = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        name: e.target.value,
      };
    });
  };

  const handleAuthorInput = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        author: e.target.value,
      };
    });
  };

  const handleThumbnailInput = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        thumbnail: e.target.value,
      };
    });
  };

  const handlePriceInput = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        price: e.target.value,
      };
    });
  };

  const handleRatingInput = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        rating: e.target.value,
      };
    });
  };

  const handleFeaturedInput = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        featured: e.target.checked,
      };
    });
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">{formType.type === "Edit" ? "Update Book Information" : "Add New Book"}</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={input.name}
              onChange={handleNameInput}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={input.author}
              onChange={handleAuthorInput}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={input.thumbnail}
              onChange={handleThumbnailInput}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={input.price}
                onChange={handlePriceInput}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={input.rating}
                onChange={handleRatingInput}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={input.featured}
              onChange={handleFeaturedInput}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {formType.type === "Edit" ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
