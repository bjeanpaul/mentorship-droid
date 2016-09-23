import { groupEventsByDate } from 'src/containers/EventListContainer';
import { fakeState, fakeEvent } from 'app/scripts/helpers';


describe('EventListContainer', () => {
  describe('groupEventsByDate', () => {
    it('should group and sort events by "day"', () => {
      const state = fakeState();
      state.entities.events = {
        22: fakeEvent({
          id: 22,
          occuredAt: '2016-01-01',
        }),
        24: fakeEvent({
          id: 24,
          occuredAt: '1983-03-08',
        }),
        25: fakeEvent({
          id: 25,
          occuredAt: '1983-03-08',
        }),
        26: fakeEvent({
          id: 26,
          occuredAt: '2016-09-20',
        }),
        27: fakeEvent({
          id: 27,
          occuredAt: '2016-09-20',
        }),
      };

      const events = groupEventsByDate(state.entities.events);
      expect(events[0].date).toEqual('2016-09-20');
      expect(events[0].events.length).toEqual(2);

      expect(events[1].date).toEqual('2016-01-01');
      expect(events[1].events.length).toEqual(1);

      expect(events[2].date).toEqual('1983-03-08');
      expect(events[2].events.length).toEqual(2);
    });


    it('should sort child events within a group', () => {
      const state = fakeState();
      state.entities.events = {
        22: fakeEvent({
          id: 22,
          occuredAt: '2016-10-10T09:00Z',
        }),
        24: fakeEvent({
          id: 24,
          occuredAt: '2016-10-10T08:00Z',
        }),
        25: fakeEvent({
          id: 25,
          occuredAt: '2016-10-10T11:00Z',
        }),
      };

      const events = groupEventsByDate(state.entities.events);
      expect(events[0].events[0].id).toEqual(25);
      expect(events[0].events[1].id).toEqual(22);
      expect(events[0].events[2].id).toEqual(24);
    });
  });
});
