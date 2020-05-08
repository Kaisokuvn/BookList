export const BookReducer = (state, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return {
        ...state,
        isLoading: false,
        books:  action.payload
      };
    case "DELETE_BOOK":
      return {
        ...state,
        isLoading: false,
        books: state.books.filter((book) => book._id !== action.payload),
      };
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
        isLoading: false
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
