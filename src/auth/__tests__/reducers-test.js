import reduce from 'src/auth/reducer';
import { serializeAuth } from 'src/api/request';
import { fakeAuth, fakeProfileListData } from 'scripts/helpers';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from 'src/auth/constants';


describe('auth/reducer', () => {
  describe('AUTH_LOGIN_REQUEST', () => {
    it('should mark the state as loading', () => {
      const { isLoading } = reduce({
        isLoading: false,
      }, {
        type: AUTH_LOGIN_REQUEST,
      });

      expect(isLoading).toBe(true);
    });

    it('should clear the current error message', () => {
      const { errorMessage } = reduce({
        errorMessage: 'o_O',
      }, {
        type: AUTH_LOGIN_REQUEST,
      });

      expect(errorMessage).toEqual('');
    });
  });

  describe('AUTH_LOGIN_FAILURE', () => {
    it('should mark the state as not loading', () => {
      const { isLoading } = reduce({
        isLoading: true,
      }, {
        type: AUTH_LOGIN_FAILURE,
      });

      expect(isLoading).toBe(false);
    });

    it('should clear the current error message', () => {
      const { errorMessage } = reduce({
        errorMessage: '',
      }, {
        type: AUTH_LOGIN_FAILURE,
      });

      expect(errorMessage).toEqual('Incorrect email or password combination.');
    });
  });

  describe('AUTH_LOGIN_SUCCESS', () => {
    it('should mark the state as not loading', () => {
      const { isLoading } = reduce({
        isLoading: true,
      }, {
        type: AUTH_LOGIN_SUCCESS,
        payload: {
          ...fakeProfileListData(),
          auth: fakeAuth(),
        },
      });

      expect(isLoading).toBe(false);
    });

    it('should set the profile id to the first given entity', () => {
      const { profileId } = reduce({
        profileId: null,
      }, {
        type: AUTH_LOGIN_SUCCESS,
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
        type: AUTH_LOGIN_SUCCESS,
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
