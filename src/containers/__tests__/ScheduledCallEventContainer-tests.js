import { mapStateToProps } from 'src/containers/ScheduledCallEventContainer';
import { fakeState, fakeEvent, fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';
import { JOURNEY_EVENT_SCHEDULED_CALL_ICON } from 'src/constants/images';
import { EVENT_TYPE_SCHEDULED_CALL_CREATED } from 'src/constants/event';


describe('CallScheduledEventContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the activities icon', () => {
      const state = fakeState({
        entities: {
          activities: {
            110: fakeActivity({
              id: 110,
              icon: 'http://icons.are.a.cool.way.to.communicate',
            }),
          },
          scheduledCalls: {
            55: fakeScheduledCall({
              id: 55,
              activity: 110,
            }),
          },
        },
      });
      expect(mapStateToProps(state, fakeEvent({
        eventType: EVENT_TYPE_SCHEDULED_CALL_CREATED,
        objectId: 55, // scheduledCall
      }))).toEqual({
        type: EVENT_TYPE_SCHEDULED_CALL_CREATED,
        date: '2016-09-16T11:19:17.368442Z',
        icon: 'http://icons.are.a.cool.way.to.communicate',
        title: 'Call scheduled',
      });
    });

    it('should fall back to the default icon when no activity is specified', () => {
      const state = fakeState({
        entities: {
          scheduledCalls: {
            55: fakeScheduledCall({
              id: 55,
            }),
          },
        },
      });
      expect(mapStateToProps(state, fakeEvent({
        type: EVENT_TYPE_SCHEDULED_CALL_CREATED,
        objectId: 55, // scheduledCall
      }))).toEqual({
        type: EVENT_TYPE_SCHEDULED_CALL_CREATED,
        date: '2016-09-16T11:19:17.368442Z',
        icon: JOURNEY_EVENT_SCHEDULED_CALL_ICON,
        title: 'Call scheduled',
      });
    });
  });
});
