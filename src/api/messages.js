import { arrayOf } from 'normalizr';

import request from 'src/api/request';
import { parseResults } from 'src/api/parse';
import { Message } from 'src/api/schemas';


export const listMessages = (auth, params = {}) => request({
  url: '/chat_message/',
  method: 'GET',
  schema: arrayOf(Message),
  parse: parseResults,
  params,
  auth,
});
