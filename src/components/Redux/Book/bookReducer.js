import { AddBook, DeleteBook, EditBook, GetBook } from "./booktypes";

const initialState = {
  books: [
    { id: "1", title: "let us c", author: "kk" },
    { id: "2", title: "learnig c by exapmles", author: "knk" },
  ],
  book: null,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddBook: {
      return {
        books: [...state.books, action.values],
      };
    }
    case DeleteBook: {
      let newlist = state.books.filter((book) => action.id !== book.id);
      return {
        ...state,
        books: newlist,
      };
    }
    case EditBook: {
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.value.id ? action.value : book
        ),
      };
    }
    case GetBook: {
      let booktoedit = state.books.find((book) => action.id === book.id);
      return {
        ...state,
        book: booktoedit,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
