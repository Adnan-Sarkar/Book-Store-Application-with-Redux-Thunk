import initialState from "./initialState";
import { BOOKTYPECHANGED, FILTERBOOKS } from "./actionTypes";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKTYPECHANGED:
      return {
        ...state,
        bookType: action.payload,
      };

    case FILTERBOOKS:
      return {
        ...state,
        filterBooks: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
