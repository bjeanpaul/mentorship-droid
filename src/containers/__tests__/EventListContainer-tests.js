import { mapStateToProps } from 'src/containers/EventListContainer';
import { fakeState, fakeEvent } from 'app/scripts/helpers';


describe('EventListContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide event groups', () => {
      const state = fakeState();

      const event1 = fakeEvent({
        id: 1,
        occuredAt: '2016-11-02T01:43:20.311Z',
      });

      const event2 = fakeEvent({
        id: 2,
        occuredAt: '2016-11-02T02:43:20.311Z',
      });

      const event3 = fakeEvent({
        id: 3,
        occuredAt: '2016-11-03T01:43:20.311Z',
      });

      const event4 = fakeEvent({
        id: 4,
        occuredAt: '2016-11-03T02:43:20.311Z',
      });

      state.entities.events = {
        1: event1,
        2: event2,
        3: event3,
        4: event4,
      };

      const { events } = mapStateToProps(state);

      expect(events)
        .toEqual([event1, event2, event3, event4]);
    });
  });
});
