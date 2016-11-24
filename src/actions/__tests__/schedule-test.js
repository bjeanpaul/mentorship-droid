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
  patchScheduledCall,
  addScheduledCall,
  addNextScheduledCall,
  openScheduledCall,
  chooseScheduledCallCategory,
  chooseScheduledCallActivity,
  startScheduledCall,
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

  describe('addScheduledCall', () => {
    it('should create an action for adding a scheduled call', () => {
      expect(addScheduledCall('2016-09-16T11:27:14Z')).toEqual({
        type: constants.SCHEDULED_CALL_ADD,
        payload: { date: '2016-09-16T11:27:14Z' },
      });
    });
  });

  describe('addNextScheduledCall', () => {
    it('should create an action for adding scheduling the next scheduled call', () => {
      expect(addNextScheduledCall('2016-09-16T11:27:14Z')).toEqual({
        type: constants.SCHEDULED_CALL_ADD_NEXT,
        payload: { date: '2016-09-16T11:27:14Z' },
      });
    });
  });

  describe('openScheduledCall', () => {
    it('should create an action for opening a scheduled call', () => {
      expect(openScheduledCall(23))
        .toEqual({
          type: constants.SCHEDULED_CALL_OPEN,
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

  describe('startScheduledCall', () => {
    it('should create an action for starting a scheduled call', () => {
      expect(startScheduledCall(23))
        .toEqual({
          type: constants.SCHEDULED_CALL_START,
          payload: { scheduledCallId: 23 },
        });
    });
  });
});
