import reduce, { createInitialState } from 'src/reducers/forgotPassword';

import { fakeState } from 'app/scripts/helpers';
import * as statuses from 'src/statuses/forgotPassword';
import * as actions from 'src/actions/forgotPassword';

describe('reducers/forgotPassword', () => {
  describe('SHOW_FORGOT_PASSWORD_EMAIL', () => {
    it('should mark the status as email idle when screen is opened', () => {
      const action = actions.showForgotPasswordEmail();
      const state = { status: statuses.forgotPasswordResetStatusBadToken() };
      const { status } = reduce(state, action);

      expect(status).toEqual(statuses.forgotPasswordEmailStatusIdle());
    });
  });

  describe('FORGOT_PASSWORD_SEND_EMAIL_REQUEST', () => {
    it('should mark the status as busy with email request', () => {
      const action = actions.emailForgotPasswordToken.request();
      const state = { status: statuses.forgotPasswordEmailStatusIdle() };
      const { status } = reduce(state, action);

      expect(status).toEqual(statuses.forgotPasswordEmailStatusBusy());
    });
  });

  describe('FORGOT_PASSWORD_SEND_EMAIL_BAD_ADDRESS', () => {
    it('should set status to bad email address', () => {
      const action = actions.emailForgotPasswordToken.failures.apiDataInvalidError();
      const state = { state: statuses.forgotPasswordEmailStatusIdle() };
      const { status } = reduce(state, action);

      expect(status).toEqual(statuses.forgotPasswordEmailStatusBadAddress());
    });
  });

  describe('FORGOT_PASSWORD_SEND_EMAIL_SUCCESS', () => {
    it('should mark the status as reset idle', () => {
      const action = actions.emailForgotPasswordToken.success();
      const state = { status: statuses.forgotPasswordEmailStatusBusy() };
      const { status } = reduce(state, action);

      expect(status)
        .toEqual(statuses.forgotPasswordResetStatusIdle());
    });
  });

  describe('SHOW_FORGOT_PASSWORD_RESET', () => {
    it('should mark the status as reset idle', () => {
      const action = actions.showForgotPasswordReset();
      const state = { status: statuses.forgotPasswordEmailStatusBusy() };
      const { status } = reduce(state, action);

      expect(status)
        .toEqual(statuses.forgotPasswordResetStatusIdle());
    });
  });

  describe('FORGOT_PASSWORD_RESET_REQUEST', () => {
    it('should mark the status as reset request has been sent', () => {
      const action = actions.resetForgotPassword.request();
      const state = { status: statuses.forgotPasswordResetStatusIdle() };
      const { status } = reduce(state, action);

      expect(status)
        .toEqual(statuses.forgotPasswordResetStatusBusy());
    });
  });

  describe('FORGOT_PASSWORD_RESET_BAD_TOKEN', () => {
    it('should mark the status as having sent bad token', () => {
      const action = actions.resetForgotPassword.failures.apiAuthorizationError();
      const state = { status: statuses.forgotPasswordResetStatusBusy() };
      const { status } = reduce(state, action);

      expect(status)
        .toEqual(statuses.forgotPasswordResetStatusBadToken());
    });
  });

  describe('FORGOT_PASSWORD_SEND_EMAIL_SUCCESS', () => {
    it('should reset to initial state', () => {
      const action = actions.resetForgotPassword.success();
      const state = fakeState().forgotPassword;
      const { status } = reduce(state, action);

      expect(status)
        .toEqual(jasmine.objectContaining(createInitialState().status));
    });
  });
});
