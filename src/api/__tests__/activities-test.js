jest.mock('src/api/request');


import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { Activity } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';

import {
  listActivities,
  getActivity,
  updateActivity,
} from 'src/api';


describe('api/activities', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listActivities', () => {
    it('should construct a request for listing activities', () => {
      expect(listActivities(fakeAuth())).toEqual({
        url: '/activity/',
        method: 'GET',
        schema: arrayOf(Activity),
        parse: parseResults,
        auth: fakeAuth(),
      });
    });
  });

  describe('getActivity', () => {
    it('should construct a request for getting an activity', () => {
      expect(getActivity(23, fakeAuth())).toEqual({
        url: '/activity/23/',
        method: 'GET',
        auth: fakeAuth(),
        schema: Activity,
      });
    });
  });

  describe('updateActivity', () => {
    it('should construct a request for updating an activity', () => {
      expect(updateActivity(23, { fake: 'activity' }, fakeAuth())).toEqual({
        url: '/activity/23/',
        method: 'PUT',
        data: { fake: 'activity' },
        auth: fakeAuth(),
      });
    });
  });
});
