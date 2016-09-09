import reduce from 'src/reducers/navigation/top';
import * as entry from 'src/actions/entry';
import * as landing from 'src/actions/landing';
import * as sync from 'src/actions/sync';
import * as onboarding from 'src/actions/onboarding';
import * as routes from 'src/constants/routes';
import { createStack, createRoute, push, pop, replaceAt } from 'src/navigationHelpers';


describe('src/reducers/navigation/top', () => {
  describe('SHOW_ACTIVATION_REQUEST', () => {
    it('should push the activation route', () => {
      expect(reduce(createStack(), landing.showActivation()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_AUTH_ACTIVATION)));
    });
  });

  describe('SHOW_LOGIN_REQUEST', () => {
    it('should push the login route', () => {
      expect(reduce(createStack(), landing.showLogin()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_AUTH_LOGIN)));
    });
  });

  describe('ONBOARDING_CHOOSE_PROFILE_PICTURE', () => {
    it('should insert the camera roll route', () => {
      const cameraRollRoute = createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL);
      expect(reduce(createStack(), onboarding.chooseProfilePicture()))
        .toEqual(push(createStack(), cameraRollRoute));
    });
  });

  describe('ONBOARDING_CHANGE_PROFILE_PICTURE', () => {
    it('should pop from the state', () => {
      expect(reduce(createStack(), onboarding.changeProfilePicture()))
        .toEqual(pop(createStack()));
    });
  });

  describe('NEW_USER_ENTER', () => {
    it('should push the onboarding entry route', () => {
      expect(reduce(createStack(), entry.enterNewUser()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_ONBOARDING)));
    });
  });

  describe('LOAD_REQUEST', () => {
    it('should push the loading route', () => {
      expect(reduce(createStack(), sync.loadRequest()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_LOADING)));
    });
  });

  describe('LOAD_SUCCESS', () => {
    it('should replace the loading route with the navigator route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_LOADING));
      const route = createRoute(routes.ROUTE_NAVIGATOR);
      expect(reduce(state, sync.loadSuccess()))
        .toEqual(replaceAt(state, routes.ROUTE_LOADING, route));
    });
  });

  describe('LOAD_FAILURE', () => {
    it('should replace the loading route with the load failure route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_LOADING));
      const route = createRoute(routes.ROUTE_LOADING_FAILURE);
      expect(reduce(state, sync.loadFailure()))
        .toEqual(replaceAt(state, routes.ROUTE_LOADING, route));
    });
  });
});
