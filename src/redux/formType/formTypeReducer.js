import initialState from "./initialState";
import { EDITFORMTYPE } from "./actionTypes";

const formTypeReducer = (state = initialState, action) => {
  if (action.type === EDITFORMTYPE) {
    return {
      ...state,
      type: "Edit",
      bookId: action.payload,
    };
  } else {
    return {
      ...state,
      type: "Normal",
      bookId: "",
    };
  }
};

export default formTypeReducer;
