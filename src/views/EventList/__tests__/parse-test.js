import { groupEvents } from 'src/views/EventList/parse';
import { fakeEvent } from 'app/scripts/helpers';


describe('src/views/EventList/parse', () => {
  describe('groupEvents', () => {
    it('should group events', () => {
      const event1 = fakeEvent({
        id: 1,
        eventType: 'FOO',
        occuredAt: '2016-09-01T11:19:17.368442Z',
      });

      const event2 = fakeEvent({
        id: 2,
        eventType: 'FOO',
        occuredAt: '2016-09-01T12:19:17.368442Z',
      });

      const event3 = fakeEvent({
        id: 3,
        eventType: 'FOO',
        occuredAt: '2016-09-02T13:19:17.368442Z',
      });

      const event4 = fakeEvent({
        id: 4,
        eventType: 'FOO',
        occuredAt: '2016-09-02T14:19:17.368442Z',
      });

      const events = [event1, event2, event3, event4];
      const res = groupEvents(events, []);

      expect(res)
        .toEqual([{
          date: '2016-09-01T22:00:00.000Z',
          items: [{
            id: 4,
            eventType: 'FOO',
            event: event4,
          }, {
            id: 3,
            eventType: 'FOO',
            event: event3,
          }],
        }, {
          date: '2016-08-31T22:00:00.000Z',
          items: [{
            id: 2,
            eventType: 'FOO',
            event: event2,
          }, {
            id: 1,
            eventType: 'FOO',
            event: event1,
          }],
        }]);
    });

    it('should collapse events', () => {
      const event1 = fakeEvent({
        id: 1,
        eventType: 'FOO',
        occuredAt: '2016-09-01T11:19:17.368442Z',
      });

      const event2 = fakeEvent({
        id: 2,
        eventType: 'BAR',
        occuredAt: '2016-09-01T12:19:17.368442Z',
      });

      const event3 = fakeEvent({
        id: 3,
        eventType: 'FOO',
        occuredAt: '2016-09-01T13:19:17.368442Z',
      });

      const event4 = fakeEvent({
        id: 4,
        eventType: 'BAZ',
        occuredAt: '2016-09-01T14:19:17.368442Z',
      });

      const events = [event1, event2, event3, event4];
      const res = groupEvents(events, ['FOO', 'BAR']);

      expect(res)
        .toEqual([{
          date: '2016-08-31T22:00:00.000Z',
          items: [{
            id: 4,
            eventType: 'BAZ',
            event: event4,
          }, {
            id: 3,
            eventType: 'FOO',
            events: [event3, event1],
          }, {
            id: 2,
            eventType: 'BAR',
            events: [event2],
          }],
        }]);
    });
  });
});
