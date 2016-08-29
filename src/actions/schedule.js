import * as api from 'src/api';
import * as constants from 'src/constants/schedule';

import {
  apiAction,
  dataAction,
  staticAction,
} from 'src/actionHelpers';

const { ApiResponseError } = api;


const listScheduledCalls = apiAction({
  method: api.listScheduledCalls,
  request: staticAction(constants.SCHEDULED_CALL_LIST_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_LIST_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_LIST_FAILURE)]],
});


const fetchScheduledCall = apiAction({
  method: api.getScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_FETCH_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_FETCH_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_FETCH_FAILURE)]],
});


const createScheduledCall = apiAction({
  method: api.createScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_CREATE_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_CREATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_CREATE_FAILURE)]],
});


const updateScheduledCall = apiAction({
  method: api.updateScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_UPDATE_REQUEST),
  success: staticAction(constants.SCHEDULED_CALL_UPDATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_UPDATE_FAILURE)]],
});


const removeScheduledCall = apiAction({
  method: api.removeScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_REMOVE_REQUEST),
  success: staticAction(constants.SCHEDULED_CALL_REMOVE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_REMOVE_FAILURE)]],
});


export {
  listScheduledCalls,
  fetchScheduledCall,
  createScheduledCall,
  updateScheduledCall,
  removeScheduledCall,
};
