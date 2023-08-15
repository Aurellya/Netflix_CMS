import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
});

export default rootReducer;
