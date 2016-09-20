import { apiAction, staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/calls';
import * as api from 'src/api';

const { ApiResponseError } = api;


export const createCallRequest = staticAction(constants.CALL_CREATE_REQUEST);
export const createCallSuccess = staticAction(constants.CALL_CREATE_SUCCESS);
export const createCallFailure = staticAction(constants.CALL_CREATE_FAILURE);


export const createCall = apiAction({
  method: api.createCall,
  request: createCallRequest,
  success: createCallSuccess,
  failures: [[ApiResponseError, createCallFailure]],
});
