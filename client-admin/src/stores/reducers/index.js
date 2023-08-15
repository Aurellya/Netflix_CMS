import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import genreReducer from "./genreReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
  user: userReducer,
});

export default rootReducer;
