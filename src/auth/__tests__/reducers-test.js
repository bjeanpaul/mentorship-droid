import reduce from 'src/auth/reducer';
import { serializeAuth } from 'src/api/request';
import { fakeAuth, fakeProfileListData } from 'app/scripts/helpers';
import * as constants from 'src/auth/constants';
import { authStatusIdle, authStatusBusy, authStatusNotFound } from 'src/auth/statuses';


describe('auth/reducer', () => {
  describe('AUTH_LOGIN_REQUEST', () => {
    it('should mark the status as busy', () => {
      const { status } = reduce({
        status: authStatusIdle(),
      }, {
        type: constants.AUTH_LOGIN_REQUEST,
      });

      expect(status).toEqual(authStatusBusy());
    });
  });

  describe('AUTH_LOGIN_FAILURE', () => {
    it('should mark the status as not found', () => {
      const { status } = reduce({
        status: authStatusBusy(),
      }, {
        type: constants.AUTH_LOGIN_FAILURE,
      });

      expect(status).toEqual(authStatusNotFound());
    });
  });

  describe('AUTH_LOGIN_SUCCESS', () => {
    it('should mark the status as idle', () => {
      const { status } = reduce({
        status: authStatusBusy(),
      }, {
        type: constants.AUTH_LOGIN_SUCCESS,
        payload: {
          ...fakeProfileListData(),
          auth: fakeAuth(),
        },
      });

      expect(status).toEqual(authStatusIdle());
    });

    it('should set the profile id to the first given entity', () => {
      const { profileId } = reduce({
        profileId: null,
      }, {
        type: constants.AUTH_LOGIN_SUCCESS,
        payload: {
          ...fakeProfileListData([
            { id: 21 },
            { id: 23 },
          ]),
          auth: fakeAuth(),
        },
      });

      expect(profileId).toEqual(21);
    });

    it('should set auth details', () => {
      const { email, password } = fakeAuth();

      const { auth } = reduce({
        auth: null,
      }, {
        type: constants.AUTH_LOGIN_SUCCESS,
        payload: {
          ...fakeProfileListData(),
          auth: {
            email,
            password,
          },
        },
      });

      expect(auth).toEqual({
        email,
        password,
        authToken: serializeAuth(email, password),
      });
    });
  });
});
