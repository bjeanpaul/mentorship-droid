jest
  .mock('src/api/categories')
  .mock('src/api/activities')
  .mock('src/api/schedule')
  .mock('src/api/events')
  .mock('src/api/callNotes');


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

    api.listEvents.mockClear();
    api.listEvents.mockReturnValue(helpers.fakeListEventsData());

    api.listCallNotes.mockClear();
    api.listCallNotes.mockReturnValue(helpers.fakeListCallNotesData());
  });

  describe('load', () => {
    it('should return all entities retrieved from the api', async () => {
      api.listCategories.mockReturnValue(helpers.fakeCategoryListData());
      api.listActivities.mockReturnValue(helpers.fakeActivityListData());
      api.listEvents.mockReturnValue(helpers.fakeListEventsData());
      api.listCallNotes.mockReturnValue(helpers.fakeListCallNotesData());

      const res = await load(fakeAuth());

      expect(res).toEqual({
        entities: merge(
          helpers.fakeCategoryListData().entities,
          helpers.fakeActivityListData().entities,
          helpers.fakeScheduledCallListData().entities,
          helpers.fakeListEventsData().entities,
          helpers.fakeListCallNotesData().entities,
        ),
      });
    });

    it('should call api methods with the correct params', async () => {
      await load(fakeAuth());
      expect(api.listCategories.mock.calls).toEqual([[fakeAuth()]]);
      expect(api.listActivities.mock.calls).toEqual([[fakeAuth()]]);
      expect(api.listScheduledCalls.mock.calls).toEqual([[fakeAuth()]]);
      expect(api.listEvents.mock.calls).toEqual([[fakeAuth()]]);
      expect(api.listCallNotes.mock.calls).toEqual([[fakeAuth()]]);
    });
  });
});
