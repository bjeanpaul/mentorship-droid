import { loginSaga, loadUserProfile } from '../user'
import { call, put, fork, take } from 'redux-saga/effects'
import {
  USERPROFILE_REQUEST, USERPROFILE_SUCCESS, USERPROFILE_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants/user'



describe('user', function() {
  it('failure of a login', function() {

    var iterator = loginSaga()

    expect(iterator.next().value, take(LOGIN_REQUEST))

    // resume the generator with some dummy action
    const mockAction = {user: '...', pass: '...'}
    expect(
      iterator.next(mockAction).value,
      call(fetch, '/login', mockAction)
    )

    // simulate an error result
    const mockError = 'invalid user/password'
    expect(
      iterator.throw(mockError).value,
      put({ type: LOGIN_FAILURE, error: mockError })
    )

  })
})
