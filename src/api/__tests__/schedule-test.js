jest.mock('src/api/request');

import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { ScheduledCall } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';

import {
  listScheduledCalls,
  createScheduledCall,
  patchScheduledCall,
} from 'src/api';


describe('api/schedule', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listScheduledCalls', () => {
    it('should construct a request for listing scheduled calls', () => {
      expect(listScheduledCalls(fakeAuth(), { foo: 23 })).toEqual({
        url: '/schedule/',
        method: 'GET',
        schema: arrayOf(ScheduledCall),
        parse: parseResults,
        auth: fakeAuth(),
        params: { foo: 23 },
      });
    });
  });

  describe('createScheduledCall', () => {
    it('should construct a request for creating a scheduled call', () => {
      expect(createScheduledCall({ fake: 'schedule' }, fakeAuth())).toEqual({
        url: '/schedule/',
        method: 'POST',
        data: { fake: 'schedule' },
        auth: fakeAuth(),
        schema: ScheduledCall,
      });
    });
  });

  describe('patchScheduledCall', () => {
    it('should construct a request for updating a scheduled call', () => {
      expect(patchScheduledCall(23, { fake: 'schedule' }, fakeAuth())).toEqual({
        url: '/schedule/23/',
        method: 'PATCH',
        data: { fake: 'schedule' },
        auth: fakeAuth(),
        schema: ScheduledCall,
      });
    });
  });
});
