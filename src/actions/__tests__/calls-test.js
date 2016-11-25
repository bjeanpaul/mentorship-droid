jest.mock('src/api/calls');

import * as constants from 'src/constants/calls';
import * as api from 'src/api';
import { dataAction } from 'src/actionHelpers';
import { createCall } from 'src/actions/calls';
import { testApiAction, fakeCall } from 'app/scripts/helpers';

const { ApiResponseError } = api;


describe('call/actions', () => {
  describe('createCall', () => {
    it('should create actions for call api creates', async () => {
      await testApiAction(createCall, {
        method: api.createCall,
        request: constants.CALL_CREATE_REQUEST,
        success: dataAction(constants.CALL_CREATE_SUCCESS),
        failures: [[ApiResponseError, constants.CALL_CREATE_FAILURE]],
      })(fakeCall());
    });
  });
});
