import { fakeState, fakeCategory } from 'app/scripts/helpers';
import { chooseScheduledCallCategory } from 'src/actions/schedule';
import { dismissScreen } from 'src/actions/navigation';
import {
  mapStateToProps,
  mapDispatchToProps,
} from 'src/containers/ScheduledCallCategoryContainer';


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
