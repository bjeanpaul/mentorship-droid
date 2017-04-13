import { fakeState, fakeCategory } from 'app/scripts/helpers';
import { chooseScheduledCallCategory } from 'src/actions/schedule';
import { dismissScreen } from 'src/actions/navigation';
import {
  mapStateToProps,
  mapDispatchToProps,
} from 'src/containers/ScheduledCallCategoryContainer';


describe('ScheduledCallCategoryContainer', () => {
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

  describe('mapDispatchToProps', () => {
    it('should map onBackPress to dismissScreen', () => {
      const dispatch = jest.fn();
      const { onBackPress } = mapDispatchToProps(dispatch, {});
      onBackPress();
      expect(dispatch.mock.calls).toEqual([[dismissScreen()]]);
    });

    it('should map onCategoryPress to chooseScheduledCallCategory', () => {
      const dispatch = jest.fn();

      const { onCategoryPress } = mapDispatchToProps(dispatch, {
        context: { foo: 21 },
      });

      onCategoryPress(23);

      expect(dispatch.mock.calls).toEqual([[
        chooseScheduledCallCategory(23, { foo: 21 }),
      ]]);
    });
  });
});
