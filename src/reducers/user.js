import { combineReducers } from 'redux'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/user'


// TODO: extract the status out of here.

function user(state = {}, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
    case LOGIN_FAILURE:
      return {}
    case LOGIN_SUCCESS:
      return action.user
    default:
      return state
  }
}


function auth(state = {}, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
    case LOGIN_FAILURE:
      return {}
    case LOGIN_SUCCESS:
      return {
        hash: action.hash
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user,
  auth
})

export default rootReducer
