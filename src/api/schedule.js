import { arrayOf } from 'normalizr';
import request from 'src/api/request';
import { ScheduledCall } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


export const listScheduledCalls = (auth, params = {}) => request({
  url: '/schedule/',
  method: 'GET',
  schema: arrayOf(ScheduledCall),
  parse: parseResults,
  params,
  auth,
});


export const createScheduledCall = (data, auth) => request({
  url: '/schedule/',
  method: 'POST',
  data,
  auth,
});


export const getScheduledCall = (id, auth) => request({
  url: `/schedule/${id}/`,
  method: 'GET',
  schema: ScheduledCall,
  auth,
});


export const updateScheduledCall = (id, data, auth) => request({
  url: `/schedule/${id}/`,
  method: 'PUT',
  data,
  auth,
});


export const removeScheduledCall = (id, auth) => request({
  url: `/schedule/${id}/`,
  method: 'DELETE',
  auth,
});
