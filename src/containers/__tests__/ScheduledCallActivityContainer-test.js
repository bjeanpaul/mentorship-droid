import { mapStateToProps } from 'src/containers/ScheduledCallActivityContainer';
import { fakeState, fakeActivity, fakeCategory } from 'app/scripts/helpers';


describe('ScheduledCallActivityContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the category', () => {
      const category = fakeCategory({ id: 21 });

      expect(mapStateToProps(fakeState({
        entities: {
          categories: {
            21: category,
          },
        },
      }), {
        categoryId: 21,
      })).toEqual(jasmine.objectContaining({
        category,
      }));
    });

    it('should provide all activities of the relevant category', () => {
      const activity1 = fakeActivity({
        id: 1,
        category: 21,
      });

      const activity2 = fakeActivity({
        id: 2,
        category: 21,
      });

      expect(mapStateToProps(fakeState({
        entities: {
          activities: {
            1: activity1,
            2: activity2,
          },
          categories: {
            21: fakeCategory({ id: 21 }),
          },
        },
      }), {
        categoryId: 21,
      })).toEqual(jasmine.objectContaining({
        activities: [activity1, activity2],
      }));
    });
  });
});
