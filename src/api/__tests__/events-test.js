jest.mock('src/api/request');


import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { Event } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';

import { listEvents } from 'src/api';


describe('api/events', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listEvents', () => {
    it('should construct a request for listing events', () => {
      expect(listEvents(fakeAuth(), { foo: 23 })).toEqual({
        url: '/event/',
        method: 'GET',
        schema: arrayOf(Event),
        parse: parseResults,
        auth: fakeAuth(),
        params: { foo: 23 },
      });
    });
  });
});
