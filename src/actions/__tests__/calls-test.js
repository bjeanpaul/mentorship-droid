jest.mock('src/actionHelpers', () => ({
  apiAction: global.mock(),
  staticAction: global.mock(),
  dataAction: global.mock(),
}));

import { isEqual } from 'lodash';
import * as constants from 'src/constants/calls';
import * as api from 'src/api';
import { apiAction, staticAction } from 'src/actionHelpers';
import { createCall } from 'src/actions/calls';

const { ApiResponseError } = api;


describe('call/actions', () => {
  describe('createCall', () => {
    it('should create actions for call api creates', () => {
      expect(isEqual(createCall, apiAction({
        method: api.createCall,
        request: staticAction(constants.CALL_CREATE_REQUEST),
        success: staticAction(constants.CALL_CREATE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.CALL_CREATE_FAILURE)]],
      }))).toBe(true);
    });
  });
});
