import { mapStateToProps } from 'src/containers/ActivityContainer';
import { fakeState, fakeActivity, fakeCategory } from 'app/scripts/helpers';


describe('ActivityContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the relevant activity', () => {
      expect(mapStateToProps(fakeState({
        entities: {
          activities: {
            23: fakeActivity({ id: 23 }),
          },
        },
      }), {
        activityId: 23,
      })).toEqual(jasmine.objectContaining({
        activity: fakeActivity({ id: 23 }),
      }));
    });

    it('should provide the relevant category', () => {
      expect(mapStateToProps(fakeState({
        entities: {
          activities: {
            21: fakeActivity({
              id: 21,
              category: 23,
            }),
          },
          categories: {
            23: fakeCategory({ id: 23 }),
          },
        },
      }), {
        activityId: 21,
      })).toEqual(jasmine.objectContaining({
        category: fakeCategory({ id: 23 }),
      }));
    });
  });
});
