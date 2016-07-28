import { combineReducers } from 'redux'
import actionTypes from './Constants';


const reducer = (
  state = {},
  action
) => {
  console.log(action)
  return state;
};

export default reducer;
