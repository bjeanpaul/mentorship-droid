import { uniqueId, merge } from 'lodash';
import { arrayOf, normalize } from 'normalizr';

import request from 'src/api/request';
import { parseMessage, parseMessageListResults } from 'src/api/parse';
import { Message, PendingMessage } from 'src/api/schemas';
import * as constants from 'src/constants/messages';


export const listMessages = (auth, params = {}) => request({
  url: '/chat_message/',
  method: 'GET',
  schema: arrayOf(Message),
  parse: parseMessageListResults,
  params,
  auth,
});


export const sendMessage = (msg, auth) => request({
  url: '/chat_message/',
  method: 'POST',
  schema: Message,
  parse: parseMessage,
  data: { content: msg.content },
  auth,
});


export const createPendingMessage = (data = {}) => ({
  id: uniqueId(constants.PENDING_MESSAGE_UID_PREFIX),
  timestamp: new Date().toISOString(),
  type: constants.MESSAGE_TYPE_PENDING,
  content: '',
  details: {
    status: constants.PENDING_MESSAGE_STATUS_IDLE,
  },
  ...data,
});


const setMessage = status => msg =>
  normalize(merge({}, msg, { details: { status } }), PendingMessage);


export const setMessageSending = setMessage(constants.PENDING_MESSAGE_STATUS_SENDING);
export const setMessageFailed = setMessage(constants.PENDING_MESSAGE_STATUS_FAILED);
