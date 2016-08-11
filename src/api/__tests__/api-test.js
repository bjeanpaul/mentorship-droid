jest
  .unmock('src/api/schemas')
  .unmock('src/api');

import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { listProfiles } from 'src/api';
import request from 'src/api/request';
import { Profile } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


describe('api', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
  });

  describe('listProfiles', () => {
    it('should construct a request for listing profiles', () => {
      expect(listProfiles({
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
