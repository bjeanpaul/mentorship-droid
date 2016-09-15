jest.mock('src/api/request');


import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { Activity } from 'src/api/schemas';
import { parseActivity, parseActivityListResults } from 'src/api/parse';

import {
  listActivities,
  getActivity,
} from 'src/api';


describe('api/activities', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listActivities', () => {
    it('should construct a request for listing activities', () => {
      expect(listActivities(fakeAuth(), { foo: 23 })).toEqual({
        url: '/activity/',
        method: 'GET',
        schema: arrayOf(Activity),
        parse: parseActivityListResults,
        auth: fakeAuth(),
        params: { foo: 23 },
      });
    });
  });

  describe('getActivity', () => {
    it('should construct a request for getting an activity', () => {
      expect(getActivity(23, fakeAuth())).toEqual({
        url: '/activity/23/',
        method: 'GET',
        parse: parseActivity,
        auth: fakeAuth(),
        schema: Activity,
      });
    });
  });
});
