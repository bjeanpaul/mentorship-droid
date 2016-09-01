import { apiAction, staticAction, dataAction } from 'src/actionHelpers';
import * as constants from 'src/constants/entry';
import * as api from 'src/api';

const { ApiResponseError } = api;


export const enterNewUser = staticAction(constants.NEW_USER_ENTER);


export const enterExistingUserRequest = staticAction(constants.EXISTING_USER_ENTER_REQUEST);
export const enterExistingUserSuccess = dataAction(constants.EXISTING_USER_ENTER_SUCCESS);
export const enterExistingUserFailure = staticAction(constants.EXISTING_USER_ENTER_FAILURE);


export const enterExistingUser = apiAction({
  method: api.load,
  request: enterExistingUserRequest,
  success: enterExistingUserSuccess,
  failures: [[ApiResponseError, enterExistingUserFailure]],
});


export const enter = () => (dispatch, ctx) => (
  api.profileIsComplete(ctx.profile)
    ? enterExistingUser()(dispatch, ctx)
    : dispatch(enterNewUser()));
