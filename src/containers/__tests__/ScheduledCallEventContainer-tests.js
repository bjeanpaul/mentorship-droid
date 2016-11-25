import { mapStateToProps } from 'src/containers/ScheduledCallEventContainer';
import { fakeState, fakeEvent, fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';
import images from 'src/constants/images';
import { EVENT_TYPE_SCHEDULED_CALL_CREATED } from 'src/constants/events';


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
              callTime: '2016-11-11T12:00Z',
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
        icon: { uri: 'http://icons.are.a.cool.way.to.communicate' },
        title: 'Call scheduled',
        blurb: 'Friday 11th, November 2016 2:00 pm',
      });
    });

    it('should fall back to the default icon when no activity is specified', () => {
      const state = fakeState({
        entities: {
          scheduledCalls: {
            55: fakeScheduledCall({
              id: 55,
              callTime: '2016-11-11T12:00Z',
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
        icon: images.JOURNEY_EVENT_SCHEDULED_CALL_ICON,
        title: 'Call scheduled',
        blurb: 'Friday 11th, November 2016 2:00 pm',
      });
    });
  });
});
