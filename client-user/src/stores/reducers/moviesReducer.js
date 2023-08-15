import { MOVIES_SUCCESS, MOVIES_LOADING } from "../actions/actionType";

const initialState = {
  movies: [],
  moviesLoading: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case MOVIES_LOADING:
      return {
        ...state,
        moviesLoading: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
