import reduce from 'src/reducers/routes/onboarding';
import * as onboarding from 'src/actions/onboarding';
import * as routes from 'src/constants/routes';

import {
  createStack,
  createRoute,
  insertAfterCurrent,
  popCurrent,
} from 'src/navigationHelpers';


describe('src/reducers/routes/onboarding', () => {
  describe('ONBOARDING_CHOOSE_PROFILE_PICTURE', () => {
    it('should insert the camera roll route', () => {
      const cameraRollRoute = createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL);
      expect(reduce(createStack(), onboarding.chooseProfilePicture()))
        .toEqual(insertAfterCurrent(createStack(), cameraRollRoute));
    });
  });

  describe('ONBOARDING_CHANGE_PROFILE_PICTURE', () => {
    it('should pop from the state', () => {
      expect(reduce(createStack(), onboarding.changeProfilePicture()))
        .toEqual(popCurrent(createStack()));
    });
  });
});
