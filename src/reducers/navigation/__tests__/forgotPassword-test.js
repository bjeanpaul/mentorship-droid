import * as routes from 'src/constants/routes';
import reduce from 'src/reducers/navigation/forgotPassword';
import { createStack, createRoute, push } from 'src/navigationHelpers';
import * as forgotPassword from 'src/actions/forgotPassword';

describe('src/reducers/navigation/forgotPassword', () => {
  describe('SHOW_FORGOT_PASSWORD_EMAIL', () => {
    it('should push on the send email route', () => {
      expect(reduce(createStack(), forgotPassword.showForgotPasswordEmail()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL)));
    });
  });

  describe('FORGOT_PASSWORD_SEND_EMAIL_SUCCESS', () => {
    it('should push on the email success route', () => {
      const action = forgotPassword.emailForgotPasswordToken.success();
      expect(reduce(createStack(), action))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL_SENT)));
    });
  });

  describe('SHOW_FORGOT_PASSWORD_RESET', () => {
    const action = forgotPassword.showForgotPasswordReset();
    const state = createStack([
      createRoute(routes.ROUTE_LANDING),
      createRoute(routes.ROUTE_AUTH_LOGIN),
      createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL),
      createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL_SENT),
    ]);

    const expectedState = createStack([
      createRoute(routes.ROUTE_LANDING),
      createRoute(routes.ROUTE_AUTH_LOGIN),
      createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL),
      createRoute(routes.ROUTE_FORGOT_PASSWORD_RESET),
    ]);

    it('should push on the password reset route', () => {
      expect(reduce(state, action))
        .toEqual(expectedState);
    });
  });

  describe('FORGOT_PASSWORD_RESET_SUCCESS', () => {
    it('should push on the reset successful route', () => {
      const action = forgotPassword.resetForgotPassword.success();

      expect(reduce(createStack(), action))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_FORGOT_PASSWORD_RESET_SUCCESS)));
    });
  });

  describe('RESET_TO_LOGIN_SCREEN', () => {
    it('should take user back to the login page when password is successfully reset', () => {
      const action = forgotPassword.resetToLoginScreen();
      const state = createStack(
        createRoute(routes.ROUTE_LANDING),
        createRoute(routes.ROUTE_AUTH_LOGIN),
        createRoute(routes.ROUTE_FORGOT_PASSWORD_EMAIL),
        createRoute(routes.ROUTE_FORGOT_PASSWORD_RESET),
      );
      const expectedState = createStack([
        createRoute(routes.ROUTE_LANDING),
        createRoute(routes.ROUTE_AUTH_LOGIN),
      ]);

      expect(reduce(state, action)).toEqual(expectedState);
    });
  });
});
