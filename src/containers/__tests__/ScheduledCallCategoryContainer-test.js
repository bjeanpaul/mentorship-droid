import { mapStateToProps } from 'src/containers/ScheduledCallCategoryContainer';
import { fakeState, fakeCategory } from 'app/scripts/helpers';


describe('ScheduledCallCategoryContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide all categories', () => {
      expect(mapStateToProps(fakeState({
        entities: {
          categories: {
            21: fakeCategory({ id: 21 }),
            23: fakeCategory({ id: 23 }),
          },
        },
      }))).toEqual(jasmine.objectContaining({
        categories: [
          fakeCategory({ id: 21 }),
          fakeCategory({ id: 23 }),
        ],
      }));
    });
  });
});
