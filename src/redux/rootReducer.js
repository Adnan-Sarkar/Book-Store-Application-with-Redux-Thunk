import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";
import filterReducer from "./filter/filterReducer";
import formTypeReducer from "./formType/formTypeReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
  formType: formTypeReducer,
});

export default rootReducer;
