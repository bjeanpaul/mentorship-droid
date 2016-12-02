jest.mock('src/api/request');

import { identity } from 'lodash';
import { normalize, arrayOf } from 'normalizr';
import { fakeAuth, fakeMessage } from 'app/scripts/helpers';
import request from 'src/api/request';
import { Message, PendingMessage } from 'src/api/schemas';
import { parseResults, parseSendMessageResult } from 'src/api/parse';
import * as constants from 'src/constants/messages';

import {
  listMessages,
  sendMessage,
  createPendingMessage,
  setMessageSending,
  setMessageFailed,
} from 'src/api';


describe('api/messages', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listMessages', () => {
    it('should construct a request for listing chat messages', () => {
      expect(listMessages(fakeAuth(), { foo: 23 })).toEqual({
        url: '/chat_message/',
        method: 'GET',
        schema: arrayOf(Message),
        parse: parseResults,
        auth: fakeAuth(),
        params: { foo: 23 },
      });
    });
  });

  describe('sendMessage', () => {
    it('should construct a request for sending a chat message', () => {
      const msg = createPendingMessage({
        content: 'Set tall in your just beyond merch booth bound chest',
      });

      const { parse, ...res } = sendMessage(msg, fakeAuth());

      expect(res).toEqual({
        url: '/chat_message/',
        method: 'POST',
        schema: arrayOf(Message),
        auth: fakeAuth(),
        data: {
          content: 'Set tall in your just beyond merch booth bound chest',
        },
      });

      expect(parse(fakeMessage()))
        .toEqual(parseSendMessageResult(msg)(fakeMessage()));
    });
  });

  describe('setMessageSending', () => {
    it('should set the message status to sending', () => {
      const msg = createPendingMessage();

      expect(setMessageSending(msg)).toEqual(normalize({
        ...msg,
        status: constants.MESSAGE_STATUS_SENDING,
      }, PendingMessage));
    });
  });

  describe('setMessageFailed', () => {
    it('should set the message status to failed', () => {
      const msg = createPendingMessage();

      expect(setMessageFailed(msg)).toEqual(normalize({
        ...msg,
        status: constants.MESSAGE_STATUS_FAILED,
      }, PendingMessage));
    });
  });
});
