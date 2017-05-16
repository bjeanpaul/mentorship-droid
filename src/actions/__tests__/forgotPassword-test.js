jest.mock('src/api/forgotPassword');

import * as constants from 'src/constants/forgotPassword';
import * as api from 'src/api';
import { testApiAction, fakeForgotPasswordReset } from 'app/scripts/helpers';

import {
  emailForgotPasswordToken,
  resetForgotPassword,
  showForgotPasswordEmail,
} from 'src/actions/forgotPassword';

const { ApiAuthorizationError } = api;


describe('forgotPassword/actions', () => {
  beforeEach(() => {
    api.emailForgotPasswordToken.mockClear();
    api.resetForgotPassword.mockClear();
  });

  describe('emailForgotPasswordToken', () => {
    it('should create actions for emailing a reset token', async () => {
      await testApiAction(emailForgotPasswordToken, {
        method: api.emailForgotPasswordToken,
        request: constants.FORGOT_PASSWORD_SEND_EMAIL_REQUEST,
        success: constants.FORGOT_PASSWORD_SEND_EMAIL_SUCCESS,
      })({
        email: 'a@b.org',
      });
    });
  });

  describe('resetForgotPassword', () => {
    it('should create actions for resetting a forgotten password', async () => {
      await testApiAction(resetForgotPassword, {
        method: api.resetForgotPassword,
        request: constants.FORGOT_PASSWORD_RESET_REQUEST,
        success: constants.FORGOT_PASSWORD_RESET_SUCCESS,
        failures: [
          [ApiAuthorizationError, constants.FORGOT_PASSWORD_RESET_BAD_TOKEN],
        ],
      })(fakeForgotPasswordReset());
    });
  });

  describe('showForgotPasswordEmail', () => {
    it('should create action to show forgot password email screen', () => {
      expect(showForgotPasswordEmail()).toEqual({
        type: constants.SHOW_FORGOT_PASSWORD_EMAIL,
      });
    });
  });
});
