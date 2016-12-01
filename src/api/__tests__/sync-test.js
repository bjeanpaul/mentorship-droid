jest
  .mock('src/api/categories')
  .mock('src/api/activities')
  .mock('src/api/schedule')
  .mock('src/api/events')
  .mock('src/api/callNotes')
  .mock('src/api/chat');


import { merge, fromPairs } from 'lodash';
import * as api from 'src/api';
import * as helpers from 'app/scripts/helpers';

const { load } = api;
const { fakeAuth } = helpers;


const METHODS = [
  'listCategories',
  'listActivities',
  'listScheduledCalls',
  'listEvents',
  'listCallNotes',
  'listMessages',
];


const fakeListData = key => ({
  entities: fromPairs([[key, { 21: { id: 21 } }]]),
});


describe('api/sync', () => {
  beforeEach(() => {
    for (const method of METHODS) {
      api[method].mockClear();
      api[method].mockImplementation(() => fakeListData(method));
    }
  });

  describe('load', () => {
    it('should return all entities retrieved from the api', async () => {
      const res = await load(fakeAuth());
      expect(res).toEqual(merge(...METHODS.map(fakeListData)));
    });

    it('should call api methods with the correct params', async () => {
      const auth = fakeAuth();
      await load(auth);
      for (const method of METHODS) expect(api[method].mock.calls).toEqual([[auth]]);
    });
  });
});
