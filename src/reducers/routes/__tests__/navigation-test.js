import reduce from 'src/reducers/routes/navigation';
import * as navigation from 'src/actions/navigation';
import { createStack, back, forward, popCurrent } from 'src/navigationHelpers';


describe('src/reducers/routes/navigation', () => {
  describe('NAVIGATE_BACK_REQUEST', () => {
    it('should go back', () => {
      expect(reduce(createStack(), navigation.navigateBack()))
        .toEqual(back(createStack()));
    });
  });

  describe('NAVIGATE_FORWARD_REQUEST', () => {
    it('should go forward', () => {
      expect(reduce(createStack(), navigation.navigateForward()))
        .toEqual(forward(createStack()));
    });
  });

  describe('SCREEN_DISMISS', () => {
    it('should pop the current route', () => {
      expect(reduce(createStack(), navigation.dismissScreen()))
        .toEqual(popCurrent(createStack()));
    });
  });
});
