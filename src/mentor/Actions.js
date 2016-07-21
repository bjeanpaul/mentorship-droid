import base64 from 'base-64';

import { generateActionCreators } from 'src/helpers';

import actionTypes from './Constants';


const mentorActions = generateActionCreators('mentor/', actionTypes);
export const fetchMentor = mentorActions.fetch;

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
    return dispatch(fetchMentor(onSuccess));
  };
};


const resetPasswordActions = generateActionCreators(
  'reset-password/',
  actionTypes.resetPassword,
  {
    disableAuthorizationHeader: true,
  }
);
export const resetPassword = resetPasswordActions.create;
