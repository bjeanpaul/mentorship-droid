jest.mock('src/actionHelpers', () => ({
  apiAction: global.mock(),
  staticAction: global.mock(),
  dataAction: global.mock(),
}));


import * as constants from 'src/schedule/constants';
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
  removeScheduledCall,
} from 'src/schedule/actions';

const { ApiResponseError } = api;


describe('schedule/actions', () => {
  describe('listScheduledCalls', () => {
    it('should create actions for schedule api lists', () => {
      expect(listScheduledCalls).toEqual(apiAction({
        method: api.listScheduledCalls,
        request: staticAction(constants.SCHEDULED_CALL_LIST_REQUEST),
        success: dataAction(constants.SCHEDULED_CALL_LIST_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_LIST_FAILURE)]],
      }));
    });
  });

  describe('createScheduledCall', () => {
    it('should create actions for schedule api creates', () => {
      expect(createScheduledCall).toEqual(apiAction({
        method: api.createScheduledCall,
        request: staticAction(constants.SCHEDULED_CALL_CREATE_REQUEST),
        success: dataAction(constants.SCHEDULED_CALL_CREATE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_CREATE_FAILURE)]],
      }));
    });
  });

  describe('fetchScheduledCall', () => {
    it('should create actions for schedule api fetches', () => {
      expect(fetchScheduledCall).toEqual(apiAction({
        method: api.getScheduledCall,
        request: staticAction(constants.SCHEDULED_CALL_FETCH_REQUEST),
        success: dataAction(constants.SCHEDULED_CALL_FETCH_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_FETCH_FAILURE)]],
      }));
    });
  });

  describe('updateScheduledCall', () => {
    it('should create actions for schedule api updates', () => {
      expect(updateScheduledCall).toEqual(apiAction({
        method: api.updateScheduledCall,
        request: staticAction(constants.SCHEDULED_CALL_UPDATE_REQUEST),
        success: staticAction(constants.SCHEDULED_CALL_UPDATE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_UPDATE_FAILURE)]],
      }));
    });
  });

  describe('removeScheduledCall', () => {
    it('should create actions for schedule api removes', () => {
      expect(removeScheduledCall).toEqual(apiAction({
        method: api.removeScheduledCall,
        request: staticAction(constants.SCHEDULED_CALL_REMOVE_REQUEST),
        success: staticAction(constants.SCHEDULED_CALL_REMOVE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_REMOVE_FAILURE)]],
      }));
    });
  });
});
