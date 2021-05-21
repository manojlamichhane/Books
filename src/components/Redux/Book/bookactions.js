import { AddBook, DeleteBook, EditBook, GetBook } from "./booktypes";

export const ADDBOOK = (values) => {
  return {
    type: AddBook,
    values,
  };
};
export const DELETEBOOK = (id) => {
  return {
    type: DeleteBook,
    id,
  };
};
export const EDITBOOK = (value) => {
  return {
    type: EditBook,
    value,
  };
};
export const GETBOOK = (id) => {
  return {
    type: GetBook,
    id,
  };
};
