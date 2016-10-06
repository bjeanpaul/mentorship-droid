import * as api from 'src/api';
import * as constants from 'src/constants/schedule';

import {
  apiAction,
  dataAction,
  staticAction,
} from 'src/actionHelpers';

const { ApiResponseError } = api;


export const listScheduledCalls = apiAction({
  method: api.listScheduledCalls,
  request: staticAction(constants.SCHEDULED_CALL_LIST_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_LIST_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_LIST_FAILURE)]],
});


export const fetchScheduledCall = apiAction({
  method: api.getScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_FETCH_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_FETCH_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_FETCH_FAILURE)]],
});


export const createScheduledCall = apiAction({
  method: api.createScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_CREATE_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_CREATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_CREATE_FAILURE)]],
});


export const updateScheduledCall = apiAction({
  method: api.updateScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_UPDATE_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_UPDATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_UPDATE_FAILURE)]],
});


export const patchScheduledCall = apiAction({
  method: api.patchScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_PATCH_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_PATCH_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_PATCH_FAILURE)]],
});


export const removeScheduledCall = apiAction({
  method: api.removeScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_REMOVE_REQUEST),
  success: staticAction(constants.SCHEDULED_CALL_REMOVE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_REMOVE_FAILURE)]],
});


export const addScheduledCall = date => ({
  type: constants.SCHEDULED_CALL_ADD,
  payload: { date },
});


export const chooseScheduledCall = scheduledCallId => ({
  type: constants.SCHEDULED_CALL_CHOOSE,
  payload: { scheduledCallId },
});


export const changeScheduledCallActivity = (
  staticAction(constants.SCHEDULED_CALL_ACTIVITY_CHANGE));


export const chooseScheduledCallCategory = categoryId => ({
  type: constants.SCHEDULED_CALL_CATEGORY_CHOOSE,
  payload: { categoryId },
});


export const chooseScheduledCallActivity = activityId => ({
  type: constants.SCHEDULED_CALL_ACTIVITY_CHOOSE,
  payload: { activityId },
});
