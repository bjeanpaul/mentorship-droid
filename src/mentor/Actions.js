import base64 from 'base-64';

import { generateActionCreators } from 'src/helpers';

import actionTypes from './Constants';


const actionCreators = generateActionCreators('mentor', actionTypes);
export const fetchMentor = actionCreators.fetch;

export const login = function login(username, password, onSuccess) {
  return dispatch => {
    // We set the authToken before attempting to "login."
    const authToken = base64.encode(`${username}:${password}`);
    dispatch({
      type: actionTypes.MENTOR_AUTH_TOKEN_SET,
      authToken,
    });

    // "Login" in this instance means that we're going to use the authToken
    // to fetch the mentor's profile.
    dispatch(fetchMentor(onSuccess));
  };
};

// TODO: ResetPassword Action, waiting for API implementation.
