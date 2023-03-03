import { BOOKTYPECHANGED, FILTERBOOKS } from "./actionTypes";

export const bookTypeChanged = (statusType) => {
  return {
    type: BOOKTYPECHANGED,
    payload: statusType,
  };
};

export const filterBooks = (booksName) => {
  return {
    type: FILTERBOOKS,
    payload: booksName,
  };
};
