import * as routes from 'src/constants/routes';
import { staticAction } from 'src/actionHelpers';
import reduce from 'src/reducers/navigation/forgotPassword';
import { createStack, createRoute, push } from 'src/navigationHelpers';
import * as forgotPassword from 'src/actions/forgotPassword';
import * as constants from 'src/constants/forgotPassword';

describe('src/reducers/navigation/forgotPassword', () => {
  describe('SHOW_FORGOT_PASSWORD_EMAIL', () => {
    it('should push on the send email route', () => {
      expect(reduce(createStack(), forgotPassword.showForgotPasswordEmail()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL)));
    });
  });

  describe('FORGOT_PASSWORD_SEND_EMAIL_REQUEST', () => {
    it('should push on the loading route', () => {
      expect(reduce(createStack(), staticAction(constants.FORGOT_PASSWORD_SEND_EMAIL_REQUEST)()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_LOADING)));
    });
  });

  describe('FORGOT_PASSWORD_SEND_EMAIL_SUCCESS', () => {
    it('should push on the email success route', () => {
      expect(reduce(createStack(), staticAction(constants.FORGOT_PASSWORD_SEND_EMAIL_SUCCESS)()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL_SENT)));
    });
  });

  describe('SHOW_FORGOT_PASSWORD_RESET', () => {
    it('should push on the password reset route', () => {
      expect(reduce(createStack(), forgotPassword.showForgotPasswordReset()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_FORGOT_PASSWORD_RESET)));
    });
  });

  describe('FORGOT_PASSWORD_RESET_REQUEST', () => {
    it('should push on the loading route', () => {
      expect(reduce(createStack(), staticAction(constants.FORGOT_PASSWORD_RESET_REQUEST)()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_LOADING)));
    });
  });

  describe('FORGOT_PASSWORD_RESET_SUCCESS', () => {
    it('should take user back to the login page when password is successfully reset', () => {
      expect(reduce(createStack(
          createRoute(routes.ROUTE_LANDING),
          createRoute(routes.ROUTE_AUTH_LOGIN),
          createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL),
          createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL_SENT),
          createRoute(routes.ROUTE_FORGOT_PASSWORD_RESET),
          createRoute(routes.ROUTE_LOADING),
        ), staticAction(constants.FORGOT_PASSWORD_RESET_SUCCESS)()))
        .toEqual(createStack([
          createRoute(routes.ROUTE_LANDING),
          createRoute(routes.ROUTE_AUTH_LOGIN),
        ]));
    });
  });
});
