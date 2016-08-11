import { arrayOf } from 'normalizr';
import method from 'src/api/method';
import { Profile } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


export const listProfiles = method(auth => ({
  url: '/profile',
  schema: arrayOf(Profile),
  params: { email: auth.email },
  parse: parseResults,
  auth,
}));
