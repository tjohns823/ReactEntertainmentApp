import {  MovieSearch,  MoviesFetch, MovieFetch, Loading} from '../actions/types';

const initialState = {    //state initialized as empty array
  text: '',
  movies: [],
  loading: false,
  movie: []
};


/*This is the reducer function
      that will be invoked by redux when dispatch is called
      The reducer updates the state according to my searchAction*/

export default function(state = initialState, action) {
  switch (action.type) {
    case MovieSearch:              //type of MovieSearch coming from action-types
      return {
        ...state,                   // spread operator used to add objects to end of array. 
        text: action.payload,
        loading: false
      };
    case MoviesFetch:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case MovieFetch:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case Loading:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
