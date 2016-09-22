jest
  .mock('src/api/categories')
  .mock('src/api/activities')
  .mock('src/api/schedule');


import { merge } from 'lodash';
import * as api from 'src/api';
import * as helpers from 'app/scripts/helpers';

const { load } = api;
const { fakeAuth } = helpers;


describe('api/sync', () => {
  beforeEach(() => {
    api.listCategories.mockClear();
    api.listCategories.mockReturnValue(helpers.fakeCategoryListData());

    api.listActivities.mockClear();
    api.listActivities.mockReturnValue(helpers.fakeActivityListData());

    api.listScheduledCalls.mockClear();
    api.listScheduledCalls.mockReturnValue(helpers.fakeScheduledCallListData());
  });

  describe('load', () => {
    it('should return all entities retrieved from the api', async () => {
      api.listCategories.mockReturnValue(helpers.fakeCategoryListData());
      api.listActivities.mockReturnValue(helpers.fakeActivityListData());

      const res = await load(fakeAuth());

      expect(res).toEqual({
        entities: merge(
          helpers.fakeCategoryListData().entities,
          helpers.fakeActivityListData().entities,
          helpers.fakeScheduledCallListData().entities),
      });
    });

    it('should call api methods with the correct params', async () => {
      await load(fakeAuth());
      expect(api.listCategories.mock.calls).toEqual([[fakeAuth()]]);
      expect(api.listActivities.mock.calls).toEqual([[fakeAuth()]]);
      expect(api.listScheduledCalls.mock.calls).toEqual([[fakeAuth()]]);
    });
  });
});
