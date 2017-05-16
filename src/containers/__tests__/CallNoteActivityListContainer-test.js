import { fakeState, fakeActivity, fakeCategory } from 'app/scripts/helpers';
import { mapStateToProps } from 'src/containers/CallNoteActivityListContainer';


describe('CallNoteActivityListContainer', () => {
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

    it('should provide all visibile activities of the relevant category', () => {
      const activity1 = fakeActivity({
        id: 1,
        category: 21,
        isHidden: true,
      });

      const activity2 = fakeActivity({
        id: 2,
        category: 21,
        isHidden: false,
      });

      const state = fakeState();

      state.entities.categories = {
        21: fakeCategory({ id: 21 }),
      };

      state.entities.activities = {
        1: activity1,
        2: activity2,
      };

      expect(mapStateToProps(state, {
        categoryId: 21,
      })).toEqual(jasmine.objectContaining({
        activities: [activity2],
      }));
    });
  });
});
