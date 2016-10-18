import request from 'src/api/request';
import { Call } from 'src/api/schemas';


export const createCall = (data, auth) => request({
  url: '/call/',
  method: 'POST',
  schema: Call,
  data,
  auth,
});
