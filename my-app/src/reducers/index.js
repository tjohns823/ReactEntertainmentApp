import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({  //combined reducer
  movies: searchReducer
});
