import { apiAction, staticAction, dataAction } from 'src/actionHelpers';
import * as constants from 'src/constants/load';
import * as api from 'src/api';

const { ApiResponseError } = api;


export const load = apiAction({
  method: api.load,
  request: staticAction(constants.LOAD_REQUEST),
  success: dataAction(constants.LOAD_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.LOAD_FAILURE)]],
});
