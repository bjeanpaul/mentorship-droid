import { arrayOf } from 'normalizr';
import request from 'src/api/request';
import { Profile } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


export const listProfiles = auth => request({
  url: '/profile',
  schema: arrayOf(Profile),
  params: { email: auth.email },
  parse: parseResults,
  auth,
});
