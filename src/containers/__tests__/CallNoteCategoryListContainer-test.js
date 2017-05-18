import { fakeState, fakeCategory } from 'app/scripts/helpers';
import { mapStateToProps } from 'src/containers/CallNoteCategoryListContainer';


describe('CallNoteCategoryListContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide all visible categories', () => {
      const cat1 = fakeCategory({
        id: 1,
        isHidden: true,
      });

      const cat2 = fakeCategory({
        id: 2,
        isHidden: false,
      });

      const state = fakeState();

      state.entities.categories = {
        1: cat1,
        2: cat2,
      };

      expect(mapStateToProps(state)).toEqual(jasmine.objectContaining({
        categories: [cat2],
      }));
    });
  });
});
