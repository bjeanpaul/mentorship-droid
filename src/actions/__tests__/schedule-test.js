jest.mock('src/actionHelpers', () => ({
  apiAction: global.mock(),
  staticAction: global.mock(),
  dataAction: global.mock(),
}));


import { isEqual } from 'lodash';
import * as constants from 'src/constants/schedule';
import * as api from 'src/api';

import {
  apiAction,
  staticAction,
  dataAction,
} from 'src/actionHelpers';

import {
  listScheduledCalls,
  createScheduledCall,
  fetchScheduledCall,
  updateScheduledCall,
  patchScheduledCall,
  removeScheduledCall,
  chooseScheduledCall,
  chooseScheduledCallCategory,
  chooseScheduledCallActivity,
} from 'src/actions/schedule';

const { ApiResponseError } = api;


describe('schedule/actions', () => {
  describe('listScheduledCalls', () => {
    it('should create actions for schedule api lists', () => {
      expect(isEqual(listScheduledCalls, apiAction({
        method: api.listScheduledCalls,
        request: staticAction(constants.SCHEDULED_CALL_LIST_REQUEST),
        success: dataAction(constants.SCHEDULED_CALL_LIST_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_LIST_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('createScheduledCall', () => {
    it('should create actions for schedule api creates', () => {
      expect(isEqual(createScheduledCall, apiAction({
        method: api.createScheduledCall,
        request: staticAction(constants.SCHEDULED_CALL_CREATE_REQUEST),
        success: dataAction(constants.SCHEDULED_CALL_CREATE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_CREATE_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('fetchScheduledCall', () => {
    it('should create actions for schedule api fetches', () => {
      expect(isEqual(fetchScheduledCall, apiAction({
        method: api.getScheduledCall,
        request: staticAction(constants.SCHEDULED_CALL_FETCH_REQUEST),
        success: dataAction(constants.SCHEDULED_CALL_FETCH_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_FETCH_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('updateScheduledCall', () => {
    it('should create actions for schedule api updates', () => {
      expect(isEqual(updateScheduledCall, apiAction({
        method: api.updateScheduledCall,
        request: staticAction(constants.SCHEDULED_CALL_UPDATE_REQUEST),
        success: dataAction(constants.SCHEDULED_CALL_UPDATE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_UPDATE_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('patchScheduledCall', () => {
    it('should create actions for schedule api patchs', () => {
      expect(isEqual(patchScheduledCall, apiAction({
        method: api.patchScheduledCall,
        request: staticAction(constants.SCHEDULED_CALL_PATCH_REQUEST),
        success: dataAction(constants.SCHEDULED_CALL_PATCH_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_PATCH_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('removeScheduledCall', () => {
    it('should create actions for schedule api removes', () => {
      expect(isEqual(removeScheduledCall, apiAction({
        method: api.removeScheduledCall,
        request: staticAction(constants.SCHEDULED_CALL_REMOVE_REQUEST),
        success: staticAction(constants.SCHEDULED_CALL_REMOVE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_REMOVE_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('chooseScheduledCall', () => {
    it('should create an action for choosing a scheduled call', () => {
      expect(chooseScheduledCall(23))
        .toEqual({
          type: constants.SCHEDULED_CALL_CHOOSE,
          payload: { scheduledCallId: 23 },
        });
    });
  });

  describe('chooseScheduledCallCategory', () => {
    it('should create an action for choosing a category', () => {
      expect(chooseScheduledCallCategory(23))
        .toEqual({
          type: constants.SCHEDULED_CALL_CATEGORY_CHOOSE,
          payload: { categoryId: 23 },
        });
    });
  });

  describe('chooseScheduledCallActivity', () => {
    it('should create an action for choosing a activity', () => {
      expect(chooseScheduledCallActivity(23))
        .toEqual({
          type: constants.SCHEDULED_CALL_ACTIVITY_CHOOSE,
          payload: { activityId: 23 },
        });
    });
  });
});
