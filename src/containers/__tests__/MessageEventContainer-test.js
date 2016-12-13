import { mapStateToProps } from 'src/containers/MessageEventContainer';
import { fakeState, fakeEvent, fakeMessage } from 'app/scripts/helpers';


describe('MessageEventContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the events', () => {
      const event1 = fakeEvent({ objectId: 23 });
      const event2 = fakeEvent();

      expect(mapStateToProps(fakeState(), {
        events: [event1, event2],
      })).toEqual(jasmine.objectContaining({
        events: [event1, event2],
      }));
    });

    it('should provide the latest message', () => {
      const event1 = fakeEvent({ objectId: 23 });
      const event2 = fakeEvent();
      const msg = fakeMessage({ id: 23 });

      const state = fakeState({
        entities: {
          messages: {
            23: msg,
          },
        },
      });

      expect(mapStateToProps(state, {
        events: [event1, event2],
      })).toEqual(jasmine.objectContaining({
        latestMessage: msg,
      }));
    });
  });
});
