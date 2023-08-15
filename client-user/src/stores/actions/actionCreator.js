import { API_URL } from "../../config/api";

import {
  MOVIES_SUCCESS,
  MOVIES_LOADING,
  MOVIE_SUCCESS,
  MOVIE_LOADING,
} from "./actionType";

export const fetchMoviesSuccess = (payload) => {
  return {
    type: MOVIES_SUCCESS,
    payload,
  };
};

export const fetchMoviesLoading = (payload) => {
  return {
    type: MOVIES_LOADING,
    payload,
  };
};

export const fetchMovieDetailsSuccess = (payload) => {
  return {
    type: MOVIE_SUCCESS,
    payload,
  };
};

export const fetchMovieDetailsLoading = (payload) => {
  return {
    type: MOVIE_LOADING,
    payload,
  };
};

export function fetchMovies(title) {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchMoviesLoading(true));
      const query = title ? `?title=${title}` : "";
      const response = await fetch(API_URL + `/pub/movies${query}`);
      const responseJSON = await response.json();
      if (!response.ok) throw responseJSON.message;
      return dispatch(fetchMoviesSuccess(responseJSON));
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      dispatch(fetchMoviesLoading(false));
    }
  };
}

export function fetchMovieDetails(slug) {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchMovieDetailsLoading(true));
      const response = await fetch(API_URL + `/pub/movies/${slug}`);
      const responseJSON = await response.json();
      if (!response.ok) throw responseJSON.message;
      return dispatch(fetchMovieDetailsSuccess(responseJSON));
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      dispatch(fetchMovieDetailsLoading(false));
    }
  };
}
