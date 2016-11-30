jest.mock('src/api/events');

import * as constants from 'src/constants/events';
import * as api from 'src/api';
import { dataAction } from 'src/actionHelpers';
import { listEvents } from 'src/actions/events';
import { testApiAction } from 'app/scripts/helpers';

const { NetworkError, ApiResponseError } = api;


describe('actions/events', () => {
  describe('listEvents', () => {
    it('should create actions for events api lists', async () => {
      await testApiAction(listEvents, {
        method: api.listEvents,
        request: constants.EVENT_LIST_REQUEST,
        success: dataAction(constants.EVENT_LIST_SUCCESS),
        failures: [
          [ApiResponseError, constants.EVENT_LIST_FAILURE],
          [NetworkError, constants.EVENT_LIST_NETWORK_FAILURE],
        ],
      })();
    });
  });
});
