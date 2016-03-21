import base64 from 'base-64';

import { generateActionCreators } from '../helpers';

import actionTypes from './MentorConstants';

const actionCreators = generateActionCreators('mentor', actionTypes);
export const fetchMentor = actionCreators.fetch;

export const login = function login(username, password) {
  return dispatch => {
    const authToken = base64.encode(`${username}:${password}`);
    dispatch({
      type: actionTypes.MENTOR_AUTH_TOKEN_SET,
      authToken,
    });
    dispatch(fetchMentor());
  };
};
