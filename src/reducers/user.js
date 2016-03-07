import { combineReducers } from 'redux'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/user'


// 0 - Must Complete Signup
// 1 - Must Complete Training
// 2 - Completed

function user(state = {
  workflowPhase: 1,
  username: 'admin',
  password: '1234'
}, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
    case LOGIN_FAILURE:
      return state
    case LOGIN_SUCCESS:
      return action.user
    default:
      return state
  }
}


function auth(state = {
  isLogginIn: false
}, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        isLogginIn: true
      }
    case LOGIN_FAILURE:
      return {
        isLogginIn: false,
        errorMessage: action.errorMessage
      }
    case LOGIN_SUCCESS:
      return {
        isLogginIn: false,
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
