import { callAPI } from '../services/api'
import base64 from 'base64-js'


export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  }
}

function loginSuccess(user, hash) {
  return {
    type: LOGIN_SUCCESS,
    user,
    hash
  }
}

function loginFailure(errorMessage) {
  return {
    type: LOGIN_FAILURE,
    errorMessage
  }
}

export function login(username, password) {
  return (dispatch) => {

    dispatch(loginRequest())

    let hash = base64.fromByteArray(`${username}:${password}`)
    return callAPI('/mentor/', hash)
      .then(
        (response, data) => {
          let user = data.results[0]
          dispatch(loginSuccess(user, hash))
        },
        (data) => {
          dispatch(loginFailure(data.detail))
        }
    )
  }
}
