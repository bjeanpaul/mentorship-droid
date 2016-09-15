import { arrayOf } from 'normalizr';
import request from 'src/api/request';
import { Activity } from 'src/api/schemas';
import { parseActivity, parseActivityListResults } from 'src/api/parse';


export const listActivities = (auth, params = {}) => request({
  url: '/activity/',
  method: 'GET',
  schema: arrayOf(Activity),
  parse: parseActivityListResults,
  params,
  auth,
});


export const getActivity = (id, auth) => request({
  url: `/activity/${id}/`,
  method: 'GET',
  schema: Activity,
  parse: parseActivity,
  auth,
});
