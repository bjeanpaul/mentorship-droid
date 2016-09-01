import { apiAction, staticAction, dataAction } from 'src/actionHelpers';
import * as constants from 'src/constants/entry';
import * as api from 'src/api';

const { ApiResponseError } = api;


export const enterNewUser = staticAction(constants.NEW_USER_ENTER);


export const enterExistingUser = apiAction({
  method: api.load,
  request: staticAction(constants.EXISTING_USER_ENTER_REQUEST),
  success: dataAction(constants.EXISTING_USER_ENTER_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.EXISTING_USER_ENTER_FAILURE)]],
});


export const enter = () => (dispatch, ctx) => (
  api.profileIsComplete(ctx.profile)
    ? enterExistingUser()(dispatch, ctx)
    : dispatch(enterNewUser()));
