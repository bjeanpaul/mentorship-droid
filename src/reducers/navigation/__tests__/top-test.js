import reduce, { createInitialState } from 'src/reducers/navigation/top';
import * as auth from 'src/actions/auth';
import * as entry from 'src/actions/entry';
import * as landing from 'src/actions/landing';
import * as sync from 'src/actions/sync';
import * as routes from 'src/constants/routes';
import * as profile from 'src/actions/profile';
import * as errors from 'src/constants/errors';
import { createStack, createRoute, push, replaceAt } from 'src/navigationHelpers';


describe('src/reducers/navigation/top', () => {
  describe('API_ERROR', () => {
    it('should push on the api error route', () => {
      const state = createStack([createRoute('FOO')]);
      expect(reduce(state, { type: errors.API_ERROR }))
        .toEqual(push(state, createRoute(routes.ROUTE_API_ERROR)));
    });
  });

  describe('NETWORK_ERROR', () => {
    it('should push on the network error route', () => {
      const state = createStack([createRoute('FOO')]);
      expect(reduce(state, { type: errors.NETWORK_ERROR }))
        .toEqual(push(state, createRoute(routes.ROUTE_NETWORK_ERROR)));
    });
  });

  describe('ACTIVATION_SHOW', () => {
    it('should push the activation route', () => {
      expect(reduce(createStack(), landing.showActivation()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_AUTH_ACTIVATION)));
    });
  });

  describe('LOGIN_SHOW', () => {
    it('should push the login route', () => {
      expect(reduce(createStack(), landing.showLogin()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_AUTH_LOGIN)));
    });
  });

  describe('NEW_USER_ENTER', () => {
    it('should push the onboarding entry route', () => {
      expect(reduce(createStack(), entry.enterNewUser()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_ONBOARDING)));
    });
  });

  describe('LOAD_REQUEST', () => {
    it('should replace the onboarding saving route if it exists', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_ONBOARDING_SAVING));
      const route = createRoute(routes.ROUTE_LOADING);

      expect(reduce(state, sync.loadRequest()))
        .toEqual(replaceAt(state, routes.ROUTE_ONBOARDING_SAVING, route));
    });

    it('should push the loading route if there is no onboarding saving route', () => {
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

  describe('PROFILE_SETTINGS_OPEN', () => {
    it('should push on the profile settings route', () => {
      expect(reduce(createStack(), profile.openProfileSettings()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_PROFILE_SETTINGS)));
    });
  });

  describe('AUTH_LOGOUT', () => {
    it('should reset the stack to its initial state', () => {
      expect(reduce(createStack([createRoute('FOO')]), auth.logout()))
        .toEqual(createInitialState());
    });
  });
});
