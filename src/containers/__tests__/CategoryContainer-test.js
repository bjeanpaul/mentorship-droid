import { mapStateToProps } from 'src/containers/CategoryContainer';
import { fakeState, fakeActivity, fakeCategory } from 'app/scripts/helpers';


describe('CategoryContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the relevant category', () => {
      expect(mapStateToProps(fakeState({
        entities: {
          categories: {
            23: fakeCategory({ id: 23 }),
          },
        },
      }), {
        categoryId: 23,
      })).toEqual(jasmine.objectContaining({
        category: fakeCategory({ id: 23 }),
      }));
    });

    it('should provide the relevant visible activities', () => {
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
            3: fakeActivity({
              id: 3,
              category: 21,
              isHidden: true,
            }),
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
