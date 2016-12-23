jest.mock('src/api/schedule');

import * as constants from 'src/constants/schedule';
import * as api from 'src/api';
import { dataAction } from 'src/actionHelpers';
import { testApiAction, fakeScheduledCall } from 'app/scripts/helpers';

import {
  listScheduledCalls,
  createScheduledCall,
  patchScheduledCall,
  addScheduledCall,
  addNextScheduledCall,
  openScheduledCall,
  changeScheduledCallActivity,
  chooseScheduledCallCategory,
  chooseScheduledCallActivity,
  startScheduledCall,
} from 'src/actions/schedule';

const { ApiResponseError } = api;


describe('schedule/actions', () => {
  describe('listScheduledCalls', () => {
    it('should create actions for schedule api lists', async () => {
      await testApiAction(listScheduledCalls, {
        method: api.listScheduledCalls,
        request: constants.SCHEDULED_CALL_LIST_REQUEST,
        success: dataAction(constants.SCHEDULED_CALL_LIST_SUCCESS),
        failures: [[ApiResponseError, constants.SCHEDULED_CALL_LIST_FAILURE]],
      })();
    });
  });

  describe('createScheduledCall', () => {
    it('should create actions for schedule api creates', async () => {
      await testApiAction(createScheduledCall, {
        method: api.createScheduledCall,
        request: constants.SCHEDULED_CALL_CREATE_REQUEST,
        success: dataAction(constants.SCHEDULED_CALL_CREATE_SUCCESS),
        failures: [[ApiResponseError, constants.SCHEDULED_CALL_CREATE_FAILURE]],
      })(fakeScheduledCall());
    });
  });

  describe('patchScheduledCall', () => {
    it('should create actions for schedule api patchs', async () => {
      await testApiAction(patchScheduledCall, {
        method: api.patchScheduledCall,
        request: constants.SCHEDULED_CALL_PATCH_REQUEST,
        success: dataAction(constants.SCHEDULED_CALL_PATCH_SUCCESS),
        failures: [[ApiResponseError, constants.SCHEDULED_CALL_PATCH_FAILURE]],
      })(21, fakeScheduledCall());
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

  describe('changeScheduledCallActivity', () => {
    it('should create an action for choosing a activity', () => {
      expect(changeScheduledCallActivity({ foo: 23 }))
        .toEqual({
          type: constants.SCHEDULED_CALL_ACTIVITY_CHANGE,
          payload: {
            context: { foo: 23 },
          },
        });
    });
  });

  describe('chooseScheduledCallCategory', () => {
    it('should create an action for choosing a category', () => {
      expect(chooseScheduledCallCategory(23, { foo: 21 }))
        .toEqual({
          type: constants.SCHEDULED_CALL_CATEGORY_CHOOSE,
          payload: {
            categoryId: 23,
            context: { foo: 21 },
          },
        });
    });
  });

  describe('chooseScheduledCallActivity', () => {
    it('should create an action for choosing an activity', () => {
      expect(chooseScheduledCallActivity(23, { foo: 21 }))
        .toEqual({
          type: constants.SCHEDULED_CALL_ACTIVITY_CHOOSE,
          payload: {
            activityId: 23,
            context: { foo: 21 },
          },
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
