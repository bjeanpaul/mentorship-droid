import events from 'src/containers/events';
import {
  EVENT_TYPE_SCHEDULED_CALL_CREATED,
  EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED,
} from 'src/constants/event';

import ScheduledCallEventContainer from 'src/containers/ScheduledCallEventContainer';
import MilestoneEventContainer from 'src/containers/MilestoneEventContainer';


describe('events', () => {
  describe('should map to the correct container', () => {
    it('EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED', () => {
      expect(events[EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED])
      .toEqual(MilestoneEventContainer);
    });

    it('EVENT_TYPE_SCHEDULED_CALL_CREATED', () => {
      expect(events[EVENT_TYPE_SCHEDULED_CALL_CREATED])
      .toEqual(ScheduledCallEventContainer);
    });
  });
});
