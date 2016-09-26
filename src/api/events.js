import { arrayOf } from 'normalizr';
import request from 'src/api/request';
import { Event } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


export const listEvents = (auth, params = {}) => request({
  url: '/event/',
  method: 'GET',
  schema: arrayOf(Event),
  parse: parseResults,
  params,
  auth,
});
