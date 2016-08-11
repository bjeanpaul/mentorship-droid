jest
  .unmock('src/api/method')
  .unmock('src/api/schemas')
  .unmock('src/api');

import { listProfiles } from 'src/api';
import { arrayOf } from 'normalizr';
import { Profile } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


describe('api', () => {
  describe('listProfiles', () => {
    it('should construct a request for listing profiles', () => {
      expect(listProfiles.definition({
        email: 'a@b.org',
        password: '1337',
      }))
      .toEqual({
        url: '/profile',
        schema: arrayOf(Profile),
        params: { email: 'a@b.org' },
        parse: parseResults,
        auth: {
          email: 'a@b.org',
          password: '1337',
        },
      });
    });
  });
});
