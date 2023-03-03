import { EDITFORMTYPE, NORMALFORMTYPE } from "./actionTypes";

export const editFormType = (bookId) => {
  return {
    type: EDITFORMTYPE,
    payload: bookId,
  };
};

export const normalForType = () => {
  return {
    type: NORMALFORMTYPE,
  };
};
