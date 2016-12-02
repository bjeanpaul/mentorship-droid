jest.mock('src/api/messages');

import * as constants from 'src/constants/messages';
import * as api from 'src/api';
import { dataAction } from 'src/actionHelpers';
import { testApiAction, fakeMessageData } from 'app/scripts/helpers';

import { listMessages, sendMessage } from 'src/actions/messages';

const { ApiResponseError } = api;


describe('messages/actions', () => {
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

  describe('sendMessage', () => {
    it('should create actions for sending messages', async () => {
      const msg = api.createPendingMessage();
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
          payload: response,
        }),
        failures: [[Error, () => ({
          type: constants.MESSAGE_SEND_FAILURE,
          payload: api.setMessageFailed(msg),
        })]],
      })(msg);
    });
  });
});
