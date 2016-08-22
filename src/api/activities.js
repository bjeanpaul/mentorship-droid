import { arrayOf } from 'normalizr';
import request from 'src/api/request';
import { Activity } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


export const listActivities = auth => request({
  url: '/activity/',
  method: 'GET',
  schema: arrayOf(Activity),
  parse: parseResults,
  auth,
});


export const getActivity = (id, auth) => request({
  url: `/activity/${id}/`,
  method: 'GET',
  schema: Activity,
  auth,
});
