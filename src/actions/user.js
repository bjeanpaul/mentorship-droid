import { call, put, fork, take } from 'redux-saga/effects'


import {
  USERPROFILE_REQUEST, USERPROFILE_SUCCESS, USERPROFILE_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/user'




export function* loginSaga() {
  while (true) {
    const { user, pass } = yield take(LOGIN_REQUEST)
    try {
      let { data } = yield call(fetch, '/login', { user, pass });
      yield fork(loadUserProfile, data.userPK);
      yield put({ type: LOGIN_SUCCESS, data });
    } catch (error) {
      yield put({ type: LOGIN_FAILURE, error });
    }
  }
}

export function* loadUserProfile(userPK) {
  try {
    yield put({ type: USERDATA_REQUEST });
    let { data } = yield call(request.get, `/users/${userPK}`);
    yield put({ type: USERDATA_SUCCESS, data });
  } catch(error) {
    yield put({ type: USERDATA_FAILURE, error });
  }
}
