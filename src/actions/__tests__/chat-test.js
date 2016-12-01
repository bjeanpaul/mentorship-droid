jest.mock('src/api/chat');

import * as constants from 'src/constants/schedule';
import * as api from 'src/api';
import { dataAction } from 'src/actionHelpers';
import { testApiAction } from 'app/scripts/helpers';

import { listMessages } from 'src/actions/chat';

const { ApiResponseError } = api;


describe('schedule/actions', () => {
  describe('listMessages', () => {
    it('should create actions for message lists', async () => {
      await testApiAction(listMessages, {
        method: api.listMessages,
        request: constants.MESSAGE_LIST_REQUEST,
        success: dataAction(constants.MESSAGE_LIST_SUCCESS),
        failures: [[ApiResponseError, constants.MESSAGE_LIST_FAILURE]],
      })();
    });
  });
});
