import { apiAction, staticAction, dataAction } from 'src/actionHelpers';
import * as constants from 'src/constants/sync';
import * as api from 'src/api';

const { ApiResponseError } = api;


export const loadRequest = staticAction(constants.LOAD_REQUEST);
export const loadSuccess = dataAction(constants.LOAD_SUCCESS);
export const loadFailure = staticAction(constants.LOAD_FAILURE);


export const load = apiAction({
  method: api.load,
  request: loadRequest,
  success: loadSuccess,
  failures: [[ApiResponseError, loadFailure]],
});
