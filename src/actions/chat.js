import * as api from 'src/api';
import * as constants from 'src/constants/schedule';
import { apiAction, dataAction, staticAction } from 'src/actionHelpers';

const { ApiResponseError } = api;


export const listMessages = apiAction({
  method: api.listMessages,
  request: staticAction(constants.MESSAGE_LIST_REQUEST),
  success: dataAction(constants.MESSAGE_LIST_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.MESSAGE_LIST_FAILURE)]],
});
