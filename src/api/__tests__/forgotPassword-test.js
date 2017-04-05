jest.mock('src/api/request');

import { identity } from 'lodash';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { emailForgotPasswordToken, resetForgotPassword } from 'src/api';


describe('api/forgotPassword', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('emailForgotPasswordToken', () => {
    it('should construct a request for a password reset request', () => {
      expect(emailForgotPasswordToken({ email: 'a@b.org' }, fakeAuth())).toEqual({
        url: '/reset-password/',
        method: 'POST',
        data: { email: 'a@b.org' },
      });
    });
  });

  describe('resetForgotPassword', () => {
    it('should construct a request for a password reset request', () => {
      expect(resetForgotPassword({
        token: '71828182',
        newPassword: 'abc',
      }, fakeAuth())).toEqual({
        url: '/confirm-password/',
        method: 'POST',
        data: {
          token: '71828182',
          newPassword: 'abc',
          checkNewPassword: 'abc',
        },
      });
    });
  });
});
