import { callAPI } from '../services/api'


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

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function login(username, password) {
  return (dispatch) => {

    dispatch(loginRequest())

    let hash = new Buffer(`${username}:${password}`).toString('base64')

    return callAPI('/mentor/', hash)
      .then(
        data => {
          let user = data.results[0]
          dispatch(loginSuccess(user, hash))
        },
        error => dispatch(loginFailure(error))
    )
  }
}
