jest.mock('src/api/messages');

import { identity } from 'lodash';
import * as constants from 'src/constants/messages';
import * as api from 'src/api';
import { dataAction } from 'src/actionHelpers';
import { testApiAction, fakeContext, fakeMessageData } from 'app/scripts/helpers';

import { listMessages, listRecentMessages, sendMessage } from 'src/actions/messages';

const { ApiResponseError } = api;


describe('messages/actions', () => {
  beforeEach(() => {
    api.createPendingMessage.mockClear();
  });

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

  describe('listRecentMessages', () => {
    it('should create actions for listing recent messages', async () => {
      const context = fakeContext();

      await testApiAction(listRecentMessages, {
        context,
        method: api.listMessages,
        expectedApiCalls: [[context.auth, {
          pageSize: constants.MESSAGE_LIST_RECENT_PAGE_SIZE,
        }]],
        request: constants.MESSAGE_LIST_REQUEST,
        success: dataAction(constants.MESSAGE_LIST_SUCCESS),
        failures: [[ApiResponseError, constants.MESSAGE_LIST_FAILURE]],
      })();
    });
  });

  describe('sendMessage', () => {
    it('should create actions for sending messages', async () => {
      api.createPendingMessage.mockImplementation(identity);
      const msg = { id: 23 };
      const response = fakeMessageData();

      await testApiAction(sendMessage, {
        response,
        method: api.sendMessage,
        request: () => ({
          type: constants.MESSAGE_SEND_REQUEST,
          payload: api.setMessageSending(msg),
        }),
        success: () => ({
          type: constants.MESSAGE_SEND_SUCCESS,
          payload: {
            ...response,
            pendingId: 23,
          },
        }),
        failures: [[Error, () => ({
          type: constants.MESSAGE_SEND_FAILURE,
          payload: api.setMessageFailed(msg),
        })]],
      })(msg);
    });
  });
});
