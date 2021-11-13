import { MovieSearch, MoviesFetch, MovieFetch, Loading } from './types';
import axios from 'axios';

import { APIKey } from '../APIKey';   //Api key import

//creating action to fire searchAction
export const searchMovie = text => dispatch => {
  dispatch({
    type: MovieSearch,
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response =>
      dispatch({
        type: MoviesFetch,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response =>
      dispatch({
        type: MovieFetch,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: Loading
  };
};
