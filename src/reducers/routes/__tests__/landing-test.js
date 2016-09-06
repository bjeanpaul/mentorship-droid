import reduce from 'src/reducers/routes/landing';
import * as landing from 'src/actions/landing';
import * as routes from 'src/constants/routes';
import { createStack, createRoute, push } from 'src/navigationHelpers';


describe('src/reducers/routes/landing', () => {
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
});
