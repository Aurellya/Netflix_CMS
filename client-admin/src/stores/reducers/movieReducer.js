import {
  MOVIES_SUCCESS,
  MOVIES_LOADING,
  MOVIE_SUCCESS,
  MOVIE_LOADING,
} from "../actions/actionType";

const initialState = {
  movies: [],
  movie: {},
  moviesLoading: false,
};

const movieReducer = (state = initialState, action) => {
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
    case MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      };
    case MOVIE_LOADING:
      return {
        ...state,
        movieLoading: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
