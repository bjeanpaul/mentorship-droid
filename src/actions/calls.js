import { apiAction, staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/calls';
import * as api from 'src/api';

const { ApiResponseError } = api;


export const createCall = apiAction({
  method: api.createCall,
  request: staticAction(constants.CALL_CREATE_REQUEST),
  success: staticAction(constants.CALL_CREATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.CALL_CREATE_FAILURE)]],
});
