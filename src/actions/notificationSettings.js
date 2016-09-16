import { apiAction, staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/notificationSettings';
import * as api from 'src/api';

const { ApiResponseError } = api;


export const updateNotificationTokenRequest = staticAction(
  constants.UPDATE_NOTIFICATION_TOKEN_REQUEST);


export const updateNotificationTokenSuccess = staticAction(
  constants.UPDATE_NOTIFICATION_TOKEN_SUCCESS);


export const updateNotificationTokenFailure = staticAction(
  constants.UPDATE_NOTIFICATION_TOKEN_FAILURE);


export const updateNotificationToken = token => (dispatch, ctx) => apiAction({
  method: api.updateNotificationToken,
  request: updateNotificationTokenRequest,
  success: updateNotificationTokenSuccess,
  failures: [[ApiResponseError, updateNotificationTokenFailure]],
})
(ctx.profile.id, token)
(dispatch, ctx);
