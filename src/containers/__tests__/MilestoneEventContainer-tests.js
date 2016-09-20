import { mapStateToProps } from 'src/containers/MilestoneEventContainer';
import { fakeState, fakeEvent, fakeCategory } from 'app/scripts/helpers';
import { EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED } from 'src/constants/event';


describe('MilestoneEventContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the categories properties', () => {
      const state = fakeState({
        entities: {
          categories: {
            123: fakeCategory({
              id: 123,
              image: 'http://images.are.worth.1000.words',
              title: 'Cut your ribbon',
              color: 'blue',
            }),
          },
        },
      });
      expect(mapStateToProps(state, fakeEvent({
        eventType: EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED,
        objectId: 123, // category
      }))).toEqual({
        type: EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED,
        date: '2016-09-16T11:19:17.368442Z',
        image: 'http://images.are.worth.1000.words',
        title: 'Cut your ribbon',
        color: 'blue',
      });
    });
  });
});
