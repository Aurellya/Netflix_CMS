import { MOVIE_SUCCESS, MOVIE_LOADING } from "../actions/actionType";

const initialState = {
  movie: {},
  movieLoading: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
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
