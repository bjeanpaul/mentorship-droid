import { arrayOf } from 'normalizr';
import request from 'src/api/request';
import { Call } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


export const createCall = (data, auth) => request({
  url: '/call/',
  method: 'POST',
  schema: Call,
  data,
  auth,
});


export const listCalls = (auth, params = {}) => request({
  url: '/call/',
  method: 'GET',
  schema: arrayOf(Call),
  parse: parseResults,
  params,
  auth,
});
