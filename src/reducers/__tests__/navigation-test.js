import { unary } from 'lodash';
import * as routes from 'src/constants/routes';
import * as landing from 'src/actions/landing';
import * as navigation from 'src/actions/navigation';
import * as entry from 'src/actions/entry';
import * as sync from 'src/actions/sync';
import * as onboarding from 'src/actions/onboarding';
import * as activities from 'src/actions/activities';
import reduce from 'src/reducers/navigation';

import {
  createRoute,
  back,
  forward,
  push,
  pushList,
  popCurrent,
  insertAfterCurrent,
} from 'src/navigationHelpers';


const fakeState = () => ({
  routes: ['A', 'B', 'C'].map(unary(createRoute)),
  index: 1,
});


describe('navigation/reducer', () => {
  describe('NAVIGATE_BACK_REQUEST', () => {
    it('should go back', () => {
      expect(reduce(fakeState(), navigation.navigateBack()))
        .toEqual(back(fakeState()));
    });
  });

  describe('NAVIGATE_FORWARD_REQUEST', () => {
    it('should go forward', () => {
      expect(reduce(fakeState(), navigation.navigateForward()))
        .toEqual(forward(fakeState()));
    });
  });

  describe('SCREEN_DISMISS', () => {
    it('should pop the current route', () => {
      expect(reduce(fakeState(), navigation.dismissScreen()))
        .toEqual(popCurrent(fakeState()));
    });
  });

  describe('SHOW_ACTIVATION_REQUEST', () => {
    it('should push the activation route', () => {
      expect(reduce(fakeState(), landing.showActivation()))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_AUTH_ACTIVATION)));
    });
  });

  describe('SHOW_LOGIN_REQUEST', () => {
    it('should push the login route', () => {
      expect(reduce(fakeState(), landing.showLogin()))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_AUTH_LOGIN)));
    });
  });

  describe('NEW_USER_ENTER', () => {
    it('should push the onboarding route', () => {
      expect(reduce(fakeState(), entry.enterNewUser()))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_ONBOARDING)));
    });
  });

  describe('LOAD_REQUEST', () => {
    it('should push the loading route', () => {
      expect(reduce(fakeState(), sync.loadRequest()))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_LOADING)));
    });
  });

  describe('LOAD_SUCCESS', () => {
    it('should push the journey route', () => {
      expect(reduce(fakeState(), sync.loadSuccess({ entities: {} })))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_JOURNEY)));
    });
  });

  describe('ONBOARDING_CHOOSE_PROFILE_PICTURE', () => {
    it('should insert the camera roll route', () => {
      const cameraRollRoute = createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL);
      expect(reduce(fakeState(), onboarding.chooseProfilePicture()))
        .toEqual(insertAfterCurrent(fakeState(), cameraRollRoute));
    });
  });

  describe('ONBOARDING_UPDATE_PROFILE_PICTURE', () => {
    it('should pop from the state', () => {
      expect(reduce(fakeState(), onboarding.updateProfilePicture()))
        .toEqual(popCurrent(fakeState()));
    });
  });

  describe('CATEGORY_CHOOSE', () => {
    it('should push on the category route', () => {
      expect(reduce(fakeState(), activities.chooseCategory(23)))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_CATEGORY, {
          categoryId: 23,
        })));
    });
  });

  describe('ACTIVITY_CHOOSE', () => {
    it('should push on the activity route', () => {
      expect(reduce(fakeState(), activities.chooseActivity(23)))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_ACTIVITY, {
          activityId: 23,
        })));
    });
  });

  describe('ACTIVITY_SCHEDULE_CALL', () => {
    it('should push on the activity route', () => {
      expect(reduce(fakeState(), activities.scheduleActivityCall(23)))
        .toEqual(push(fakeState(), createRoute(routes.ROUTE_SCHEDULE_CALL, {
          activityId: 23,
        })));
    });
  });
});
