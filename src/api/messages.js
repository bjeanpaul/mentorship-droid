import { arrayOf } from 'normalizr';

import request from 'src/api/request';
import { Message } from 'src/api/schemas';


export const listMessages = (auth, params = {}) => request({
  url: '/chat_messages/',
  method: 'GET',
  schema: arrayOf(Message),
  params,
  auth,
});
