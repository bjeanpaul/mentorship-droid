import { mapStateToProps } from 'src/containers/CategoryListContainer';
import { fakeState, fakeCategory } from 'app/scripts/helpers';


describe('CategoryListContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide all categories', () => {
      expect(mapStateToProps(fakeState({
        entities: {
          categories: {
            21: fakeCategory({ id: 21 }),
            23: fakeCategory({ id: 23 }),
          },
        },
      }), {
        categoryId: 23,
      })).toEqual(jasmine.objectContaining({
        categories: [
          fakeCategory({ id: 21 }),
          fakeCategory({ id: 23 }),
        ],
      }));
    });
  });
});
