import reduce, { createInitialState } from 'src/reducers/forgotPassword';
import { staticAction } from 'src/actionHelpers';

import { fakeState } from 'app/scripts/helpers';
import * as statuses from 'src/statuses/forgotPassword';
import * as actions from 'src/actions/forgotPassword';
import * as constants from 'src/constants/forgotPassword';

describe('reducers/forgotPassword', () => {
  describe('SHOW_FORGOT_PASSWORD_EMAIL', () => {
    it('should mark the status as email idle when screen is opened', () => {
      const { status } = reduce({
        status: statuses.forgotPasswordResetStatusBadToken(),
      }, actions.showForgotPasswordEmail());

      expect(status).toEqual(statuses.forgotPasswordEmailStatusIdle());
    });
  });

  describe('FORGOT_PASSWORD_SEND_EMAIL_REQUEST', () => {
    it('should mark the status as busy with email request', () => {
      const { status } = reduce({
        status: statuses.forgotPasswordEmailStatusIdle(),
      }, staticAction(constants.FORGOT_PASSWORD_SEND_EMAIL_REQUEST)());

      expect(status).toEqual(statuses.forgotPasswordEmailStatusBusy());
    });
  });

  describe('SHOW_FORGOT_PASSWORD_RESET', () => {
    it('should mark the status as reset idle', () => {
      const { status } = reduce({
        status: statuses.forgotPasswordEmailStatusBusy(),
      }, actions.showForgotPasswordReset());

      expect(status).toEqual(statuses.forgotPasswordResetStatusIdle());
    });
  });
  describe('FORGOT_PASSWORD_RESET_REQUEST', () => {
    it('should mark the status as reset request has been sent', () => {
      const { status } = reduce({
        status: statuses.forgotPasswordResetStatusIdle(),
      }, staticAction(constants.FORGOT_PASSWORD_RESET_REQUEST)());

      expect(status).toEqual(statuses.forgotPasswordResetStatusBusy());
    });
  });

  describe('FORGOT_PASSWORD_RESET_BAD_TOKEN', () => {
    it('should mark the status as having sent bad token', () => {
      const { status } = reduce({
        status: statuses.forgotPasswordResetStatusBusy(),
      }, staticAction(constants.FORGOT_PASSWORD_RESET_BAD_TOKEN)());

      expect(status).toEqual(statuses.forgotPasswordResetStatusBadToken());
    });
  });

  describe('FORGOT_PASSWORD_SEND_EMAIL_SUCCESS', () => {
    it('should reset to initial state', () => {
      expect(reduce(fakeState().forgotPassword,
        staticAction(constants.FORGOT_PASSWORD_RESET_SUCCESS)())
      ).toEqual(jasmine.objectContaining(createInitialState()));
    });
  });
});
